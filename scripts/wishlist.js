// ===========================================================
// CONFIG SUPABASE
// ============================================================
const SUPABASE_URL = ‘https://wenkojnlclbyuzgmtyyw.supabase.co’;
const SUPABASE_KEY = ‘eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlbmtvam5sY2xieXV6Z210eXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjQ3MjgsImV4cCI6MjA5MjM0MDcyOH0.xQMV3zDGrrgtnNrlj0z090tWmLBAsDP8KsF4Wk2Otx0’;
const TABLE = ‘v_wishlist’;

// FIX 1 : la ligne “url: …” orpheline a été supprimée

const api = {
headers: {
‘Content-Type’: ‘application/json’,
‘apikey’: SUPABASE_KEY,
‘Authorization’: `Bearer ${SUPABASE_KEY}`,
‘Prefer’: ‘return=representation’
},
url: `${SUPABASE_URL}/rest/v1/${TABLE}`
};

// ============================================================
// CONFIG PAGE
// ============================================================
const PAGE = {
eyebrow: ‘antichambreV · wishlist’,
titre: ‘wishlist’,
};

const STATUTS = [
{ value: ‘a-acheter’, label: ‘à acheter’ },
{ value: ‘acheté’,    label: ‘acheté’ },   // FIX 2 : label corrigé (‘acheter’ → ‘acheté’)
];

const NATURES = [
{ value: ‘haut’,      label: ‘haut’ },
{ value: ‘bas’,       label: ‘bas’ },
{ value: ‘chaussure’, label: ‘chaussure’ },
{ value: ‘veste’,     label: ‘veste’ },
{ value: ‘gilet’,     label: ‘gilet’ },
{ value: ‘pull’,      label: ‘pull’ },
{ value: ‘autre’,     label: ‘autre’ },
];

const FILTER_GROUPS = [
{
id: ‘statut_wishlist’,
label: ‘statut’,
filters: [
{ value: ‘all’, label: ‘tout’ },
...STATUTS
]
},
{
id: ‘nature_wishlist’,
label: ‘nature’,
filters: [
{ value: ‘all’, label: ‘tout’ },
...NATURES
]
},
];

// ============================================================
// STATE
// ============================================================
let taches = [];
let activeFilters = { statut_wishlist: ‘all’, nature_wishlist: ‘all’ };
let editingId = null;

// ============================================================
// API CALLS
// ============================================================
async function fetchTaches() {
const res = await fetch(`${api.url}?order=created_at.desc`, { headers: api.headers });
if (!res.ok) throw new Error(‘Erreur fetch’);
return res.json();
}

async function createTache(data) {
const res = await fetch(api.url, {
method: ‘POST’,
headers: api.headers,
body: JSON.stringify(data)
});
if (!res.ok) {
const err = await res.json();
console.error(‘Supabase error:’, err);
throw new Error(‘Erreur création’);
}
const json = await res.json();
return json[0];
}

async function updateTache(id, data) {
const res = await fetch(`${api.url}?id=eq.${id}`, {
method: ‘PATCH’,
headers: api.headers,
body: JSON.stringify(data)
});
if (!res.ok) {
const err = await res.json();
console.error(‘Supabase error:’, err);
throw new Error(‘Erreur mise à jour’);
}
const json = await res.json();
return json[0];
}

async function deleteTache(id) {
const res = await fetch(`${api.url}?id=eq.${id}`, {
method: ‘DELETE’,
headers: api.headers
});
if (!res.ok) throw new Error(‘Erreur suppression’);
}

// ============================================================
// RENDER
// ============================================================
function formatDate(iso) {
if (!iso) return ‘’;
return new Date(iso).toLocaleDateString(‘fr-FR’, { day: ‘2-digit’, month: ‘2-digit’, year: ‘2-digit’ });
}

function renderCards() {
const grid    = document.getElementById(‘grid’);
const empty   = document.getElementById(‘empty’);
const counter = document.querySelector(’.js-count’);

const filtered = taches.filter(t => {
const okStatut = activeFilters.statut_wishlist === ‘all’ || t.statut_wishlist === activeFilters.statut_wishlist;
const okNature = activeFilters.nature_wishlist === ‘all’ || t.nature_wishlist === activeFilters.nature_wishlist;
return okStatut && okNature;
});

counter.textContent = filtered.length;
empty.classList.toggle(‘visible’, filtered.length === 0);

grid.innerHTML = filtered.map(t => {
const statutObj = STATUTS.find(s => s.value === t.statut_wishlist) || { label: t.statut_wishlist || ‘—’ };
const natureObj = NATURES.find(n => n.value === t.nature_wishlist) || { label: t.nature_wishlist || ‘—’ };
return `<article class="card" data-id="${t.id}"> <div class="card__header"> <h3 class="card__titre">${t.titre_wishlist || ''}</h3> <div class="card__actions"> <button class="card__btn card__btn--edit" data-id="${t.id}" aria-label="Modifier">✎</button> <button class="card__btn card__btn--delete" data-id="${t.id}" aria-label="Supprimer">✕</button> </div> </div> ${t.prix_wishlist ?`<p class="card__desc">${t.prix_wishlist}</p>`: ''} ${t.lien_wishlist ?`<a class="card__link" href="${t.lien_wishlist}" target="_blank" rel="noopener">↗ lien</a>`: ''} <!-- FIX 3 : bloc card__temps supprimé (doublonnait nature déjà dans les tags) --> <div class="card__meta"> <div class="card__tags"> ${t.nature_wishlist ?`<span class="card__tag card__tag--nature">${natureObj.label}</span>`: ''} ${t.statut_wishlist ?`<span class="card__tag card__tag--statut card__tag--${t.statut_wishlist}">${statutObj.label}</span>`: ''} </div> <span class="card__status">— ${formatDate(t.created_at)}</span> </div> </article>`;
}).join(’’);
}

function renderFilters() {
const filtersEl = document.querySelector(’.filters’);
filtersEl.innerHTML = FILTER_GROUPS.map(group => `<div class="filter-group"> <span class="filter-group__label">${group.label}</span> <div class="filter-group__tags"> ${group.filters.map((f, i) =>`
<button
class="filter-tag${i === 0 ? ' active' : ''}"
data-filter="${f.value}"
data-group="${group.id}"
>${f.label}</button>
`).join('')} </div> </div> `).join(’’);
}

// ============================================================
// FORM
// ============================================================
function buildFormHTML(tache = null) {
const isEdit = !!tache;
return `
<button class="panel__close" id="form-close" aria-label="Fermer">✕</button>
<h2 class="panel__titre">${isEdit ? ‘modifier la tâche’ : ‘nouvelle tâche’}</h2>

```
<form id="tache-form" class="tache-form">

  <div class="form-field">
    <label class="form-label">titre *</label>
    <input
      class="form-input"
      type="text"
      name="titre_wishlist"
      required
      value="${isEdit ? (tache.titre_wishlist || '') : ''}"
      placeholder="Nom de la tâche"
    >
  </div>

  <div class="form-field">
    <label class="form-label">nature</label>
    <div class="form-select-group">
      ${NATURES.map(n => `
        <button
          type="button"
          class="form-select-btn${isEdit && tache.nature_wishlist === n.value ? ' active' : ''}"
          data-name="nature_wishlist"
          data-value="${n.value}"
        >${n.label}</button>
      `).join('')}
    </div>
    <input type="hidden" name="nature_wishlist" value="${isEdit ? (tache.nature_wishlist || '') : ''}">
  </div>

  <div class="form-field">
    <label class="form-label">statut</label>
    <div class="form-select-group">
      ${STATUTS.map(s => `
        <button
          type="button"
          class="form-select-btn${(!isEdit && s.value === 'a-acheter') || (isEdit && tache.statut_wishlist === s.value) ? ' active' : ''}"
          data-name="statut_wishlist"
          data-value="${s.value}"
        >${s.label}</button>
      `).join('')}
    </div>
    <input type="hidden" name="statut_wishlist" value="${isEdit ? (tache.statut_wishlist || 'a-acheter') : 'a-acheter'}">
  </div>

  <div class="form-field">
    <label class="form-label">prix</label>
    <textarea
      class="form-input form-textarea"
      name="prix_wishlist"
      placeholder="Prix, notes…"
    >${isEdit ? (tache.prix_wishlist || '') : ''}</textarea>
  </div>

  <div class="form-field">
    <label class="form-label">lien</label>
    <input
      class="form-input"
      type="url"
      name="lien_wishlist"
      value="${isEdit ? (tache.lien_wishlist || '') : ''}"
      placeholder="https://…"
    >
  </div>

  <!-- FIX 4 : champ boutique_wishlist ajouté pour correspondre au formData.get() -->
  <div class="form-field">
    <label class="form-label">boutique</label>
    <input
      class="form-input"
      type="text"
      name="boutique_wishlist"
      value="${isEdit ? (tache.boutique_wishlist || '') : ''}"
      placeholder="Nom de la boutique…"
    >
  </div>

  <div class="form-actions">
    <button type="button" class="btn-secondary" id="form-cancel">annuler</button>
    <button type="submit" class="btn-primary">${isEdit ? 'enregistrer' : 'ajouter'}</button>
  </div>

  <p class="form-error hidden" id="form-error"></p>
</form>
```

`;
}

function openForm(tache = null) {
editingId = tache ? tache.id : null;

const panel      = document.getElementById(‘panel’);
const panelInner = document.getElementById(‘panel-inner’);
const overlay    = document.getElementById(‘panel-overlay’);

panelInner.innerHTML = buildFormHTML(tache);
panel.classList.add(‘open’);
overlay.classList.add(‘visible’);
document.body.classList.add(‘panel-open’);

panelInner.querySelectorAll(’.form-select-btn’).forEach(btn => {
btn.addEventListener(‘click’, () => {
const name = btn.dataset.name;
panelInner.querySelectorAll(`.form-select-btn[data-name="${name}"]`).forEach(b => b.classList.remove(‘active’));
btn.classList.add(‘active’);
panelInner.querySelector(`input[name="${name}"]`).value = btn.dataset.value;
});
});

panelInner.querySelector(’#form-close’).addEventListener(‘click’, closeForm);
panelInner.querySelector(’#form-cancel’).addEventListener(‘click’, closeForm);

panelInner.querySelector(’#tache-form’).addEventListener(‘submit’, async (e) => {
e.preventDefault();
const formData = new FormData(e.target);
const nature = formData.get(‘nature_wishlist’) || null;

```
const data = {
  titre_wishlist:    formData.get('titre_wishlist'),
  prix_wishlist:     formData.get('prix_wishlist') || null,
  lien_wishlist:     formData.get('lien_wishlist') || null,
  statut_wishlist:   formData.get('statut_wishlist') || 'a-acheter',
  nature_wishlist:   nature,
  boutique_wishlist: formData.get('boutique_wishlist') || null,
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
  const errEl = panelInner.querySelector('#form-error');
  errEl.textContent = 'Une erreur est survenue. Réessaie.';
  errEl.classList.remove('hidden');
  submitBtn.textContent = editingId ? 'enregistrer' : 'ajouter';
  submitBtn.disabled = false;
}
```

});
}

function closeForm() {
const panel   = document.getElementById(‘panel’);
const overlay = document.getElementById(‘panel-overlay’);
panel.classList.remove(‘open’);
overlay.classList.remove(‘visible’);
document.body.classList.remove(‘panel-open’);
editingId = null;
}

// ============================================================
// INIT
// ============================================================
document.addEventListener(‘DOMContentLoaded’, async () => {
document.querySelector(’.page-header__eyebrow’).textContent = PAGE.eyebrow;
document.querySelector(’.page-header__title’).textContent   = PAGE.titre;

renderFilters();

document.querySelector(’.filters’).addEventListener(‘click’, e => {
const btn = e.target.closest(’.filter-tag’);
if (!btn) return;
const group = btn.dataset.group;
document.querySelectorAll(`.filter-tag[data-group="${group}"]`).forEach(b => b.classList.remove(‘active’));
btn.classList.add(‘active’);
activeFilters[group] = btn.dataset.filter;
renderCards();
});

document.getElementById(‘btn-new’).addEventListener(‘click’, () => openForm());

document.addEventListener(‘click’, async e => {
const editBtn   = e.target.closest(’.card__btn–-edit’);
const deleteBtn = e.target.closest(’.card__btn-–delete’);

```
if (editBtn) {
  const id = editBtn.dataset.id;
  const tache = taches.find(t => String(t.id) === String(id));
  if (tache) openForm(tache);
  return;
}

if (deleteBtn) {
  const id = deleteBtn.dataset.id;
  if (!confirm('Supprimer cette tâche ?')) return;
  try {
    await deleteTache(id);
    taches = taches.filter(t => String(t.id) !== String(id));
    renderCards();
  } catch {
    alert('Erreur lors de la suppression.');
  }
}
```

});

document.getElementById(‘panel-overlay’).addEventListener(‘click’, closeForm);
document.addEventListener(‘keydown’, e => { if (e.key === ‘Escape’) closeForm(); });

const grid = document.getElementById(‘grid’);
grid.innerHTML = `<p class="loading">chargement…</p>`;
try {
taches = await fetchTaches();
renderCards();
} catch {
grid.innerHTML = `<p class="loading">erreur de connexion à la base.</p>`;
}
});
