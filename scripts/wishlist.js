// ============================================================
// ANTICHAMBRE V · WISHLIST
// Supabase : v_wishlist
// Design system : style.css · section.css · scroll.css
//                 atelier.css · panel.css · wishlist.css
// ============================================================

const SUPABASE_URL  = 'https://wenkojnlclbyuzgmtyyw.supabase.co/rest/v1/';
const SUPABASE_ANON = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Indlbmtvam5sY2xieXV6Z210eXl3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzY3NjQ3MjgsImV4cCI6MjA5MjM0MDcyOH0.xQMV3zDGrrgtnNrlj0z090tWmLBAsDP8KsF4Wk2Otx0';

const STATUTS = ['en attente', 'acheté', 'offert'];
const NATURES = ['haut', 'bas', 'chaussures', 'sous vetement', 'accessoire', 'beauté', 'ameublement', 'nourriture'];

const NATURE_GROUPS = [
  { label: 'Vêtements',   icon: '✦', natures: ['haut', 'bas', 'chaussures', 'sous vetement'] },
  { label: 'Accessoires', icon: '◈', natures: ['accessoire'] },
  { label: 'Beauté',      icon: '❋', natures: ['beauté'] },
  { label: 'Ameublement', icon: '⌂', natures: ['ameublement'] },
  { label: 'Nourriture',  icon: '◇', natures: ['nourriture'] },
];

const STATUT_META = {
  'en attente': { glyph: '○', cls: 'statut--attente' },
  'acheté':     { glyph: '✓', cls: 'statut--achete'  },
  'offert':     { glyph: '♡', cls: 'statut--offert'  },
};

// ── État global ──────────────────────────────────────────────
let ALL_ITEMS    = [];
let activeStatut = null;
let activeNature = null;
let editingId    = null;

// ── Supabase helpers ─────────────────────────────────────────
async function sbFetch(path, opts = {}) {
  const res = await fetch(SUPABASE_URL + path, {
    ...opts,
    headers: {
      'apikey':        SUPABASE_ANON,
      'Authorization': 'Bearer ' + SUPABASE_ANON,
      'Content-Type':  'application/json',
      'Prefer':        opts.prefer || '',
      ...(opts.headers || {}),
    },
  });
  if (!res.ok) throw new Error(await res.text());
  const txt = await res.text();
  return txt ? JSON.parse(txt) : null;
}

const fetchAll    = ()        => sbFetch('v_wishlist?order=created_at.desc');
const insertItem  = data      => sbFetch('v_wishlist', { method: 'POST', prefer: 'return=representation', body: JSON.stringify(data) });
const updateItem  = (id, data)=> sbFetch(`v_wishlist?id=eq.${id}`, { method: 'PATCH', prefer: 'return=representation', body: JSON.stringify(data) });
const deleteItem  = id        => sbFetch(`v_wishlist?id=eq.${id}`, { method: 'DELETE' });

// ── Hero trio (compteurs) ─────────────────────────────────────
function updateHeroTrio(items) {
  const counts = { 'en attente': 0, 'acheté': 0, 'offert': 0 };
  items.forEach(i => { if (counts[i.statut_wishlist] !== undefined) counts[i.statut_wishlist]++; });
  const vals = document.querySelectorAll('.trio-item__value');
  ['en attente', 'acheté', 'offert'].forEach((k, i) => { if (vals[i]) vals[i].textContent = counts[k]; });
}

// ── Filtre ───────────────────────────────────────────────────
function filteredItems() {
  return ALL_ITEMS.filter(item =>
    (!activeStatut || item.statut_wishlist === activeStatut) &&
    (!activeNature || item.nature_wishlist === activeNature)
  );
}

// ── Rendu filtres ─────────────────────────────────────────────
function renderFilters() {
  const statBar = document.getElementById('filter-statuts');
  const natBar  = document.getElementById('filter-natures');
  if (!statBar || !natBar) return;

  statBar.innerHTML =
    `<button class="filter-tag filter-tag--reset${!activeStatut ? ' active' : ''}" data-statut="">tous</button>` +
    STATUTS.map(s => {
      const m = STATUT_META[s];
      return `<button class="filter-tag${activeStatut === s ? ' active' : ''}" data-statut="${s}">${m.glyph} ${s}</button>`;
    }).join('');

  natBar.innerHTML =
    `<button class="filter-tag filter-tag--reset${!activeNature ? ' active' : ''}" data-nature="">toutes</button>` +
    NATURES.map(n =>
      `<button class="filter-tag${activeNature === n ? ' active' : ''}" data-nature="${n}">${n}</button>`
    ).join('');

  statBar.querySelectorAll('.filter-tag').forEach(btn => btn.addEventListener('click', () => {
    activeStatut = btn.dataset.statut || null;
    renderFilters(); renderItems();
  }));
  natBar.querySelectorAll('.filter-tag').forEach(btn => btn.addEventListener('click', () => {
    activeNature = btn.dataset.nature || null;
    renderFilters(); renderItems();
  }));
}

// ── Rendu items ──────────────────────────────────────────────
function renderItems() {
  const items     = filteredItems();
  const container = document.getElementById('items-container');
  if (!container) return;

  if (!items.length) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state__glyph">◌</span>
        <span>aucun objet pour cette sélection</span>
      </div>`;
    return;
  }

  // Grouper par groupe de nature puis par nature
  const grouped = {};
  items.forEach(item => {
    const g     = NATURE_GROUPS.find(g => g.natures.includes(item.nature_wishlist));
    const gLabel = g ? g.label : 'Autres';
    if (!grouped[gLabel]) grouped[gLabel] = { meta: g, natures: {} };
    const nat = item.nature_wishlist;
    if (!grouped[gLabel].natures[nat]) grouped[gLabel].natures[nat] = [];
    grouped[gLabel].natures[nat].push(item);
  });

  let html = '';
  Object.entries(grouped).forEach(([groupLabel, { meta, natures }]) => {
    html += `<div class="item-group">
      <div class="item-group__header">
        <span class="item-group__icon">${meta ? meta.icon : '✦'}</span>
        <span class="item-group__label">${groupLabel}</span>
      </div>`;

    Object.entries(natures).forEach(([nat, natItems]) => {
      html += `<p class="item-nature-label">${nat}</p>`;
      html += `<div class="wishlist-grid">`;
      natItems.forEach(item => {
        const sm   = STATUT_META[item.statut_wishlist] || { glyph: '·', cls: 'statut--attente' };
        const prix = item.prix_wishlist ? `${parseFloat(item.prix_wishlist).toFixed(2)} €` : '—';
        const lien = item.lien_wishlist
          ? `<a class="card__link" href="${item.lien_wishlist}" target="_blank" rel="noopener">↗ voir</a>`
          : '<span></span>';
        html += `
          <div class="card" data-id="${item.id}">
            <div class="card__header">
              <div class="card__top">
                <span class="card__statut ${sm.cls}">${sm.glyph} ${item.statut_wishlist}</span>
              </div>
              <div class="card__actions">
                <button class="card__btn card__btn--edit" data-id="${item.id}" title="Modifier">✎</button>
                <button class="card__btn card__btn--del"  data-id="${item.id}" title="Supprimer">✕</button>
              </div>
            </div>
            <p class="card__title">${item.titre_wishlist || '—'}</p>
            ${item.boutique_wishlist ? `<p class="card__desc">${item.boutique_wishlist}</p>` : ''}
            <div class="card__footer">
              <span class="card__prix">${prix}</span>
              ${lien}
            </div>
          </div>`;
      });
      html += `</div>`;
    });
    html += `</div>`;
  });

  container.innerHTML = html;

  // Events
  container.querySelectorAll('.card__btn--del').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.stopPropagation();
      if (!confirm('Supprimer cet item ?')) return;
      await deleteItem(btn.dataset.id);
      ALL_ITEMS = ALL_ITEMS.filter(i => i.id != btn.dataset.id);
      updateHeroTrio(ALL_ITEMS);
      renderItems();
    });
  });

  container.querySelectorAll('.card__btn--edit').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const item = ALL_ITEMS.find(i => i.id == btn.dataset.id);
      if (item) openPanel(item);
    });
  });
}

// ── Panel droit (pattern panel.css) ─────────────────────────
function openPanel(item = null) {
  editingId = item ? item.id : null;
  const panel   = document.getElementById('wishlist-panel');
  const overlay = document.getElementById('wishlist-overlay');
  const title   = document.getElementById('panel-form-title');

  title.textContent = item ? 'modifier l\'item' : 'nouvel item';

  // Remplir le formulaire
  const f = document.getElementById('wishlist-form');
  f['titre_wishlist'].value    = item?.titre_wishlist    || '';
  f['lien_wishlist'].value     = item?.lien_wishlist     || '';
  f['prix_wishlist'].value     = item?.prix_wishlist     || '';
  f['boutique_wishlist'].value = item?.boutique_wishlist || '';

  // Sélecteurs boutons statut
  document.querySelectorAll('[data-form-statut]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.formStatut === (item?.statut_wishlist || 'en attente'));
  });
  document.querySelectorAll('[data-form-nature]').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.formNature === (item?.nature_wishlist || 'haut'));
  });

  panel.classList.add('open');
  overlay.classList.add('visible');
  document.body.classList.add('panel-open');
}

function closePanel() {
  document.getElementById('wishlist-panel').classList.remove('open');
  document.getElementById('wishlist-overlay').classList.remove('visible');
  document.body.classList.remove('panel-open');
  editingId = null;
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  document.title = 'antichambreV · wishlist';

  const page = document.getElementById('scroll-page');
  const nav  = document.getElementById('scroll-nav');

  // ── Hero ──────────────────────────────────────────────────
  page.insertAdjacentHTML('beforeend', `
    <section class="scroll-section" id="section-00">
      <div class="hero-bg">
        <div class="orb orb--1"></div>
        <div class="orb orb--2"></div>
        <div class="orb orb--3"></div>
      </div>
      <div class="hero-content">
        <p class="hero-glyph">✦ · ✦ · ✦  ·  désirs catalogués <br>✦ <a href="wardrobe.html">garde2robe</a> ✦ <a href="wardrobecapsule.html">capsule</a></p>
        <h1 class="hero-title">wish<em>list</em></h1>
        <div class="hero-data">
          <span class="hero-data__line">objets convoités · classés · archivés</span>
          <span class="hero-data__line">statut · nature · boutique</span>
          <span class="hero-data__line">antichambreV © 2025</span>
        </div>
        <div class="hero-trio">
          <div class="trio-item">
            <span class="trio-item__label">en attente</span>
            <span class="trio-item__glyph">○</span>
            <span class="trio-item__value">—</span>
          </div>
          <div class="trio-item">
            <span class="trio-item__label">acheté</span>
            <span class="trio-item__glyph">✓</span>
            <span class="trio-item__value">—</span>
          </div>
          <div class="trio-item">
            <span class="trio-item__label">offert</span>
            <span class="trio-item__glyph">♡</span>
            <span class="trio-item__value">—</span>
          </div>
        </div>
      </div>
    </section>
  `);

  // ── Section wishlist ──────────────────────────────────────
  page.insertAdjacentHTML('beforeend', `
    <section class="scroll-section scroll-section--alt" id="section-01">
      <p class="section-eyebrow">01 · inventaire des désirs</p>
      <h2 class="section-title">wish<br><em>list</em></h2>
      <div class="section-divider"></div>

      <!-- Filtres — utilise les classes section.css -->
      <div class="filters-wrapper">
        <div class="filter-group">
          <span class="filter-group__label">statut</span>
          <div class="filter-group__tags" id="filter-statuts"></div>
        </div>
        <div class="filter-group">
          <span class="filter-group__label">nature</span>
          <div class="filter-group__tags" id="filter-natures"></div>
        </div>
      </div>

      <!-- Bouton ajout -->
      <div class="add-bar">
        <button class="btn-add" id="btn-open-panel">+ ajouter un item</button>
      </div>

      <!-- Items -->
      <div id="items-container">
        <div class="loading-state">
          <span class="loading-glyph">✦</span>
          <span>chargement…</span>
        </div>
      </div>
    </section>
  `);

  // ── Nav latérale ──────────────────────────────────────────
  const NAV = [
    { id: 'section-00', label: 'identité' },
    { id: 'section-01', label: 'wishlist' },
  ];
  nav.innerHTML = NAV.map((item, i) => `
    <a class="scroll-nav__item${i === 0 ? ' active' : ''}" href="#${item.id}">
      <span class="scroll-nav__label">${item.label}</span>
      <span class="scroll-nav__dot"></span>
    </a>
  `).join('');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      document.querySelectorAll('.scroll-nav__item').forEach(n => n.classList.remove('active'));
      const a = document.querySelector(`.scroll-nav__item[href="#${e.target.id}"]`);
      if (a) a.classList.add('active');
    });
  }, { threshold: 0.3 });
  document.querySelectorAll('.scroll-section').forEach(s => observer.observe(s));

  // ── Panel HTML (pattern panel.css) ────────────────────────
  document.body.insertAdjacentHTML('beforeend', `
    <div class="panel-overlay" id="wishlist-overlay"></div>
    <aside class="panel" id="wishlist-panel">
      <div class="panel__inner">

        <button class="panel__close" id="btn-close-panel">fermer ✕</button>

        <div class="panel__eyebrow">
          <span class="panel__tag">wishlist</span>
          <span class="panel__status" id="panel-form-title">nouvel item</span>
        </div>

        <div class="panel__divider"></div>

        <form id="wishlist-form" class="wishlist-form">

          <!-- Titre -->
          <div class="form-field">
            <label class="form-label">titre *</label>
            <input class="form-input" type="text" name="titre_wishlist" required placeholder="nom de l'item" />
          </div>

          <!-- Lien -->
          <div class="form-field">
            <label class="form-label">lien</label>
            <input class="form-input" type="url" name="lien_wishlist" placeholder="https://…" />
          </div>

          <!-- Prix + Boutique -->
          <div class="form-row">
            <div class="form-field">
              <label class="form-label">prix (€)</label>
              <input class="form-input" type="number" name="prix_wishlist" step="0.01" min="0" placeholder="0.00" />
            </div>
            <div class="form-field">
              <label class="form-label">boutique</label>
              <input class="form-input" type="text" name="boutique_wishlist" placeholder="sezane, zara…" />
            </div>
          </div>

          <!-- Statut -->
          <div class="form-field">
            <label class="form-label">statut</label>
            <div class="form-select-group">
              ${STATUTS.map(s => `
                <button type="button" class="form-select-btn" data-form-statut="${s}">${s}</button>
              `).join('')}
            </div>
          </div>

          <!-- Nature -->
          <div class="form-field">
            <label class="form-label">nature</label>
            <div class="form-select-group">
              ${NATURES.map(n => `
                <button type="button" class="form-select-btn" data-form-nature="${n}">${n}</button>
              `).join('')}
            </div>
          </div>

          <!-- Actions — btn-primary / btn-secondary d'atelier.css -->
          <div class="form-actions">
            <button type="button" class="btn-secondary" id="btn-cancel-panel">annuler</button>
            <button type="submit"  class="btn-primary"  id="btn-submit-panel">enregistrer</button>
          </div>

          <p class="form-error hidden" id="form-error"></p>

        </form>
      </div>
    </aside>
  `);

  // ── Events panel ──────────────────────────────────────────
  document.getElementById('btn-open-panel').addEventListener('click',  () => openPanel());
  document.getElementById('btn-close-panel').addEventListener('click', closePanel);
  document.getElementById('btn-cancel-panel').addEventListener('click', closePanel);
  document.getElementById('wishlist-overlay').addEventListener('click', closePanel);

  // Sélecteurs statut / nature (boutons toggle)
  document.querySelectorAll('[data-form-statut]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-form-statut]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });
  document.querySelectorAll('[data-form-nature]').forEach(btn => {
    btn.addEventListener('click', () => {
      document.querySelectorAll('[data-form-nature]').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
  });

  // Soumission formulaire
  document.getElementById('wishlist-form').addEventListener('submit', async e => {
    e.preventDefault();
    const f       = e.target;
    const errEl   = document.getElementById('form-error');
    const submitBtn = document.getElementById('btn-submit-panel');

    const statutBtn = document.querySelector('[data-form-statut].active');
    const natureBtn = document.querySelector('[data-form-nature].active');

    if (!statutBtn || !natureBtn) {
      errEl.textContent = 'Veuillez sélectionner un statut et une nature.';
      errEl.classList.remove('hidden');
      return;
    }

    errEl.classList.add('hidden');
    submitBtn.textContent = '…';
    submitBtn.disabled = true;

    const payload = {
      titre_wishlist:    f['titre_wishlist'].value.trim(),
      lien_wishlist:     f['lien_wishlist'].value.trim()     || null,
      prix_wishlist:     f['prix_wishlist'].value            || null,
      boutique_wishlist: f['boutique_wishlist'].value.trim() || null,
      statut_wishlist:   statutBtn.dataset.formStatut,
      nature_wishlist:   natureBtn.dataset.formNature,
    };

    try {
      if (editingId) {
        await updateItem(editingId, payload);
        const idx = ALL_ITEMS.findIndex(i => i.id == editingId);
        if (idx >= 0) ALL_ITEMS[idx] = { ...ALL_ITEMS[idx], ...payload };
      } else {
        const created = await insertItem(payload);
        if (created?.[0]) ALL_ITEMS.unshift(created[0]);
      }
      updateHeroTrio(ALL_ITEMS);
      renderItems();
      closePanel();
    } catch (err) {
      errEl.textContent = 'Erreur : ' + err.message;
      errEl.classList.remove('hidden');
    } finally {
      submitBtn.textContent = 'enregistrer';
      submitBtn.disabled = false;
    }
  });

  // ── Chargement initial ────────────────────────────────────
  try {
    ALL_ITEMS = await fetchAll();
    updateHeroTrio(ALL_ITEMS);
    renderFilters();
    renderItems();
  } catch (err) {
    document.getElementById('items-container').innerHTML = `
      <div class="empty-state">
        <span class="empty-state__glyph">⚠</span>
        <span>impossible de charger les données<br><small>${err.message}</small></span>
      </div>`;
  }
});
