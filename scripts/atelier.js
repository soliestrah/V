// ============================================================
// CONFIG SUPABASE
// ============================================================
const SUPABASE_URL = 'https://wenkojnlclbyuzgmtyyw.supabase.co';
const SUPABASE_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlbmtvam5sY2xieXV6Z210eXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjQ3MjgsImV4cCI6MjA5MjM0MDcyOH0.xQMV3zDGrrgtnNrlj0z090tWmLBAsDP8KsF4Wk2Otx0';
const TABLE = 'v_atelier';

const api = {
  headers: {
    'Content-Type': 'application/json',
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Prefer': 'return=representation'
  },
  url: `${SUPABASE_URL}/rest/v1/${TABLE}`
};

// ============================================================
// CONFIG PAGE
// ============================================================
const PAGE = {
  eyebrow: 'antichambreV · atelier',
  title: 'ATELIER',
};

const STATUTS = [
  { value: 'a-faire',  label: 'à faire' },
  { value: 'en-cours', label: 'en cours' },
  { value: 'fait',     label: 'fait' },
  { value: 'archive',  label: 'archivé' },
];

const NATURES = [
  { value: 'sims',        label: 'sims' },
  { value: 'crochet',     label: 'crochet' },
  { value: 'coding',      label: 'coding' },
  { value: 'iceolie',     label: 'iceolie' },
  { value: 'inspiration', label: 'inspiration' },
];

const FILTER_GROUPS = [
  {
    id: 'statut_atelier',
    label: 'statut',
    filters: [
      { value: 'all', label: 'tout' },
      ...STATUTS
    ]
  },
  {
    id: 'nature_atelier',
    label: 'nature',
    filters: [
      { value: 'all', label: 'tout' },
      ...NATURES
    ]
  },
];

// ============================================================
// STATE
// ============================================================
let taches = [];
let activeFilters = { statut: 'all', nature: 'all' };
let editingId = null;

// ============================================================
// API CALLS
// ============================================================
async function fetchTaches() {
  const res = await fetch(`${api.url}?order=created_at.desc`, { headers: api.headers });
  if (!res.ok) throw new Error('Erreur fetch');
  return res.json();
}

async function createTache(data) {
  const res = await fetch(api.url, {
    method: 'POST',
    headers: api.headers,
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Erreur création');
  const json = await res.json();
  return json[0];
}

async function updateTache(id, data) {
  const res = await fetch(`${api.url}?id=eq.${id}`, {
    method: 'PATCH',
    headers: api.headers,
    body: JSON.stringify(data)
  });
  if (!res.ok) throw new Error('Erreur mise à jour');
  const json = await res.json();
  return json[0];
}

async function deleteTache(id) {
  const res = await fetch(`${api.url}?id=eq.${id}`, {
    method: 'DELETE',
    headers: api.headers
  });
  if (!res.ok) throw new Error('Erreur suppression');
}

// ============================================================
// RENDER
// ============================================================
function formatDate(iso) {
  if (!iso) return '';
  return new Date(iso).toLocaleDateString('fr-FR', { day: '2-digit', month: '2-digit', year: '2-digit' });
}

function renderCards() {
  const grid = document.getElementById('grid');
  const empty = document.getElementById('empty');
  const counter = document.querySelector('.js-count');

  const filtered = taches.filter(t => {
    const okStatut = activeFilters.statut === 'all' || t.statut === activeFilters.statut;
    const okNature = activeFilters.nature === 'all' || t.nature === activeFilters.nature;
    return okStatut && okNature;
  });

  counter.textContent = filtered.length;
  empty.classList.toggle('visible', filtered.length === 0);

  grid.innerHTML = filtered.map(t => {
    const statutObj = STATUTS.find(s => s.value === t.statut) || { label: t.statut };
    const natureObj = NATURES.find(n => n.value === t.nature) || { label: t.nature };
    return `
      <article class="card" data-id="${t.id}">
        <div class="card__header">
          <h3 class="card__title">${t.title_atelier}</h3>
          <div class="card__actions">
            <button class="card__btn card__btn--edit" data-id="${t.id}" aria-label="Modifier">✎</button>
            <button class="card__btn card__btn--delete" data-id="${t.id}" aria-label="Supprimer">✕</button>
          </div>
        </div>
        ${t.description_atelier ? `<p class="card__desc">${t.description_atelier}</p>` : ''}
        ${t.lien_atelier ? `<a class="card__link" href="${t.lien_atelier}" target="_blank" rel="noopener">↗ lien</a>` : ''}
        ${t.nature_atelier === 'crochet' && t.temps_passe ? `<p class="card__temps">⏱ ${t.time_atelier}</p>` : ''}
        <div class="card__meta">
          <div class="card__tags">
            <span class="card__tag card__tag--nature">${natureObj.label}</span>
            <span class="card__tag card__tag--statut card__tag--${t.statut_atelier}">${statutObj.label}</span>
          </div>
          <span class="card__status">— ${formatDate(t.created_at)}</span>
        </div>
      </article>
    `;
  }).join('');
}

function renderFilters() {
  const filtersEl = document.querySelector('.filters');
  filtersEl.innerHTML = FILTER_GROUPS.map(group => `
    <div class="filter-group">
      <span class="filter-group__label">${group.label}</span>
      <div class="filter-group__tags">
        ${group.filters.map((f, i) => `
          <button
            class="filter-tag${i === 0 ? ' active' : ''}"
            data-filter="${f.value}"
            data-group="${group.id}"
          >${f.label}</button>
        `).join('')}
      </div>
    </div>
  `).join('');
}

// ============================================================
// FORM OVERLAY
// ============================================================
function buildFormHTML(tache = null) {
  const isEdit = !!tache;
  return `
    <button class="panel__close" id="form-close" aria-label="Fermer">✕</button>
    <h2 class="panel__title">${isEdit ? 'modifier la tâche' : 'nouvelle tâche'}</h2>

    <form id="tache-form" class="tache-form">
      <div class="form-field">
        <label class="form-label">titre *</label>
        <input class="form-input" type="text" name="title" required value="${isEdit ? tache.title : ''}" placeholder="Nom de la tâche">
      </div>

      <div class="form-field">
        <label class="form-label">nature</label>
        <div class="form-select-group">
          ${NATURES.map(n => `
            <button type="button" class="form-select-btn${isEdit && tache.nature === n.value ? ' active' : ''}" data-name="nature" data-value="${n.value}">${n.label}</button>
          `).join('')}
        </div>
        <input type="hidden" name="nature" value="${isEdit ? (tache.nature || '') : ''}">
      </div>

      <div class="form-field">
        <label class="form-label">statut</label>
        <div class="form-select-group">
          ${STATUTS.map(s => `
            <button type="button" class="form-select-btn${(!isEdit && s.value === 'a-faire') || (isEdit && tache.statut === s.value) ? ' active' : ''}" data-name="statut" data-value="${s.value}">${s.label}</button>
          `).join('')}
        </div>
        <input type="hidden" name="statut" value="${isEdit ? (tache.statut || 'a-faire') : 'a-faire'}">
      </div>

      <div class="form-field" id="field-temps" style="display:${isEdit && tache.nature === 'crochet' ? 'block' : 'none'}">
        <label class="form-label">temps passé</label>
        <input class="form-input" type="text" name="temps_passe" value="${isEdit && tache.temps_passe ? tache.temps_passe : ''}" placeholder="ex : 2h30, 3 séances…">
      </div>

      <div class="form-field">
        <label class="form-label">description</label>
        <textarea class="form-input form-textarea" name="description" placeholder="Détails, notes…">${isEdit ? (tache.description || '') : ''}</textarea>
      </div>

      <div class="form-field">
        <label class="form-label">lien</label>
        <input class="form-input" type="url" name="lien" value="${isEdit ? (tache.lien || '') : ''}" placeholder="https://…">
      </div>

      <div class="form-actions">
        <button type="button" class="btn-secondary" id="form-cancel">annuler</button>
        <button type="submit" class="btn-primary">${isEdit ? 'enregistrer' : 'ajouter'}</button>
      </div>

      <p class="form-error hidden" id="form-error"></p>
    </form>
  `;
}

function openForm(tache = null) {
  editingId = tache ? tache.id : null;
  const panel = document.getElementById('panel');
  const panelInner = document.getElementById('panel-inner');
  const overlay = document.getElementById('panel-overlay');

  panelInner.innerHTML = buildFormHTML(tache);

  panel.classList.add('open');
  overlay.classList.add('visible');
  document.body.classList.add('panel-open');

  // Select buttons logic
  panelInner.querySelectorAll('.form-select-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const name = btn.dataset.name;
      panelInner.querySelectorAll(`.form-select-btn[data-name="${name}"]`).forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      panelInner.querySelector(`input[name="${name}"]`).value = btn.dataset.value;

      // Show/hide temps_passe field
      if (name === 'nature') {
        document.getElementById('field-temps').style.display = btn.dataset.value === 'crochet' ? 'block' : 'none';
      }
    });
  });

  document.getElementById('form-close').addEventListener('click', closeForm);
  document.getElementById('form-cancel').addEventListener('click', closeForm);

  document.getElementById('tache-form').addEventListener('submit', async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      title: formData.get('title'),
      description: formData.get('description') || null,
      lien: formData.get('lien') || null,
      statut: formData.get('statut') || 'a-faire',
      nature: formData.get('nature') || null,
      temps_passe: formData.get('nature') === 'crochet' ? (formData.get('temps_passe') || null) : null,
    };

    const submitBtn = e.target.querySelector('[type="submit"]');
    submitBtn.textContent = '…';
    submitBtn.disabled = true;

    try {
      if (editingId) {
        const updated = await updateTache(editingId, data);
        taches = taches.map(t => t.id === editingId ? updated : t);
      } else {
        const created = await createTache(data);
        taches.unshift(created);
      }
      closeForm();
      renderCards();
    } catch (err) {
      const errEl = document.getElementById('form-error');
      errEl.textContent = 'Une erreur est survenue. Réessaie.';
      errEl.classList.remove('hidden');
      submitBtn.textContent = editingId ? 'enregistrer' : 'ajouter';
      submitBtn.disabled = false;
    }
  });
}

function closeForm() {
  const panel = document.getElementById('panel');
  const overlay = document.getElementById('panel-overlay');
  panel.classList.remove('open');
  overlay.classList.remove('visible');
  document.body.classList.remove('panel-open');
  editingId = null;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener('DOMContentLoaded', async () => {
  document.querySelector('.page-header__eyebrow').textContent = PAGE.eyebrow;
  document.querySelector('.page-header__title').textContent = PAGE.title;

  renderFilters();

  // Filters logic
  document.querySelector('.filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tag');
    if (!btn) return;
    const group = btn.dataset.group;
    document.querySelectorAll(`.filter-tag[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilters[group] = btn.dataset.filter;
    renderCards();
  });

  // New task button
  document.getElementById('btn-new').addEventListener('click', () => openForm());

  // Grid clicks (edit / delete)
  document.getElementById('grid').addEventListener('click', async e => {
    const editBtn = e.target.closest('.card__btn--edit');
    const deleteBtn = e.target.closest('.card__btn--delete');

    if (editBtn) {
      const id = editBtn.dataset.id;
      const tache = taches.find(t => t.id === id);
      if (tache) openForm(tache);
    }

    if (deleteBtn) {
      const id = deleteBtn.dataset.id;
      if (!confirm('Supprimer cette tâche ?')) return;
      try {
        await deleteTache(id);
        taches = taches.filter(t => t.id !== id);
        renderCards();
      } catch {
        alert('Erreur lors de la suppression.');
      }
    }
  });

  // Overlay click closes form
  document.getElementById('panel-overlay').addEventListener('click', closeForm);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeForm(); });

  // Load data
  const grid = document.getElementById('grid');
  grid.innerHTML = `<p class="loading">chargement…</p>`;
  try {
    taches = await fetchTaches();
    renderCards();
  } catch {
    grid.innerHTML = `<p class="loading">erreur de connexion à la base.</p>`;
  }
});
