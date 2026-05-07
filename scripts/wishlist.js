// ============================================================
// ANTICHAMBRE V · WISHLIST
// Supabase : v_wishlist
// Colonnes : created_at, titre_wishlist, lien_wishlist,
//            prix_wishlist, boutique_wishlist,
//            statut_wishlist, nature_wishlist
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

const PAGE = {
  title: 'antichambreV · wishlist',
  hero: {
    glyph:    '✦ · ✦ · ✦  ·  désirs catalogués',
    title:    'wish<em>list</em>',
    dataLines: [
      'objets convoités · classés · archivés',
      'statut · nature · boutique',
      'antichambreV © 2025',
    ],
    trio: [
      { label: 'en attente', glyph: '○', value: '—' },
      { label: 'acheté',     glyph: '✓', value: '—' },
      { label: 'offert',     glyph: '♡', value: '—' },
    ],
  },
};

// ── État global ──────────────────────────────────────────────
let ALL_ITEMS       = [];
let activeStatut    = null;
let activeNature    = null;
let editingId       = null;

// ── Helpers Supabase ────────────────────────────────────────
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

async function fetchAll() {
  return sbFetch('v_wishlist?order=created_at.desc');
}

async function insertItem(data) {
  return sbFetch('v_wishlist', {
    method:  'POST',
    prefer:  'return=representation',
    body:    JSON.stringify(data),
  });
}

async function updateItem(id, data) {
  return sbFetch(`v_wishlist?id=eq.${id}`, {
    method:  'PATCH',
    prefer:  'return=representation',
    body:    JSON.stringify(data),
  });
}

async function deleteItem(id) {
  return sbFetch(`v_wishlist?id=eq.${id}`, { method: 'DELETE' });
}

// ── Rendu hero trio (compteurs) ──────────────────────────────
function updateHeroTrio(items) {
  const counts = { 'en attente': 0, 'acheté': 0, 'offert': 0 };
  items.forEach(i => { if (counts[i.statut_wishlist] !== undefined) counts[i.statut_wishlist]++; });
  const trioValues = document.querySelectorAll('.trio-item__value');
  const keys = ['en attente', 'acheté', 'offert'];
  keys.forEach((k, idx) => {
    if (trioValues[idx]) trioValues[idx].textContent = counts[k];
  });
}

// ── Filtre ───────────────────────────────────────────────────
function filteredItems() {
  return ALL_ITEMS.filter(item => {
    const okStatut = !activeStatut || item.statut_wishlist === activeStatut;
    const okNature = !activeNature || item.nature_wishlist === activeNature;
    return okStatut && okNature;
  });
}

// ── Rendu liste items ────────────────────────────────────────
function renderItems() {
  const items = filteredItems();
  const container = document.getElementById('items-container');
  if (!container) return;

  if (items.length === 0) {
    container.innerHTML = `
      <div class="empty-state">
        <span class="empty-state__glyph">◌</span>
        <p>Aucun objet ne correspond à cette sélection.</p>
      </div>`;
    return;
  }

  // Grouper par nature_group puis par nature
  const grouped = {};
  items.forEach(item => {
    const g = NATURE_GROUPS.find(g => g.natures.includes(item.nature_wishlist));
    const groupLabel = g ? g.label : 'Autres';
    if (!grouped[groupLabel]) grouped[groupLabel] = {};
    const nat = item.nature_wishlist;
    if (!grouped[groupLabel][nat]) grouped[groupLabel][nat] = [];
    grouped[groupLabel][nat].push(item);
  });

  let html = '';
  Object.entries(grouped).forEach(([groupLabel, natures]) => {
    const g = NATURE_GROUPS.find(x => x.label === groupLabel);
    html += `<div class="item-group">
      <div class="item-group__header">
        <span class="item-group__icon">${g ? g.icon : '✦'}</span>
        <span class="item-group__label">${groupLabel}</span>
      </div>`;

    Object.entries(natures).forEach(([nat, natItems]) => {
      html += `<div class="item-nature-label">${nat}</div>`;
      html += `<div class="capsule-grid">`;
      natItems.forEach(item => {
        const sm = STATUT_META[item.statut_wishlist] || { glyph: '·', cls: '' };
        const prix = item.prix_wishlist ? `${parseFloat(item.prix_wishlist).toFixed(2)} €` : '—';
        const lien = item.lien_wishlist
          ? `<a class="card__link" href="${item.lien_wishlist}" target="_blank" rel="noopener">↗ voir</a>`
          : '';
        html += `
          <div class="card" data-id="${item.id}">
            <div class="card__top">
              <span class="card__statut ${sm.cls}" title="${item.statut_wishlist}">${sm.glyph}</span>
              <div class="card__actions">
                <button class="card__btn card__btn--edit" data-id="${item.id}" title="Modifier">✎</button>
                <button class="card__btn card__btn--del"  data-id="${item.id}" title="Supprimer">✕</button>
              </div>
            </div>
            <p class="card__title">${item.titre_wishlist || '—'}</p>
            <p class="card__desc">${item.boutique_wishlist || ''}</p>
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

  // Events delete & edit
  container.querySelectorAll('.card__btn--del').forEach(btn => {
    btn.addEventListener('click', async e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      if (!confirm('Supprimer cet item ?')) return;
      await deleteItem(id);
      ALL_ITEMS = ALL_ITEMS.filter(i => i.id != id);
      updateHeroTrio(ALL_ITEMS);
      renderItems();
    });
  });

  container.querySelectorAll('.card__btn--edit').forEach(btn => {
    btn.addEventListener('click', e => {
      e.stopPropagation();
      const id = btn.dataset.id;
      const item = ALL_ITEMS.find(i => i.id == id);
      if (item) openModal(item);
    });
  });
}

// ── Filtres UI ───────────────────────────────────────────────
function renderFilters() {
  const statBar = document.getElementById('filter-statuts');
  const natBar  = document.getElementById('filter-natures');
  if (!statBar || !natBar) return;

  // Statuts
  statBar.innerHTML = `<button class="filter-chip${!activeStatut ? ' active' : ''}" data-statut="">Tous</button>`
    + STATUTS.map(s => {
      const sm = STATUT_META[s];
      return `<button class="filter-chip${activeStatut === s ? ' active' : ''}" data-statut="${s}">
        <span>${sm.glyph}</span> ${s}
      </button>`;
    }).join('');

  // Natures (groupées)
  natBar.innerHTML = `<button class="filter-chip${!activeNature ? ' active' : ''}" data-nature="">Toutes</button>`
    + NATURES.map(n =>
        `<button class="filter-chip${activeNature === n ? ' active' : ''}" data-nature="${n}">${n}</button>`
      ).join('');

  statBar.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeStatut = btn.dataset.statut || null;
      renderFilters();
      renderItems();
    });
  });

  natBar.querySelectorAll('.filter-chip').forEach(btn => {
    btn.addEventListener('click', () => {
      activeNature = btn.dataset.nature || null;
      renderFilters();
      renderItems();
    });
  });
}

// ── Modal ajout / édition ────────────────────────────────────
function openModal(item = null) {
  editingId = item ? item.id : null;
  const modal = document.getElementById('item-modal');
  const form  = document.getElementById('item-form');

  form['titre_wishlist'].value    = item?.titre_wishlist    || '';
  form['lien_wishlist'].value     = item?.lien_wishlist     || '';
  form['prix_wishlist'].value     = item?.prix_wishlist     || '';
  form['boutique_wishlist'].value = item?.boutique_wishlist || '';
  form['statut_wishlist'].value   = item?.statut_wishlist   || 'en attente';
  form['nature_wishlist'].value   = item?.nature_wishlist   || 'haut';

  document.getElementById('modal-title').textContent = item ? 'Modifier l\'item' : 'Ajouter un item';
  modal.classList.add('open');
}

function closeModal() {
  document.getElementById('item-modal').classList.remove('open');
  editingId = null;
}

// ── Init ─────────────────────────────────────────────────────
document.addEventListener('DOMContentLoaded', async () => {
  document.title = PAGE.title;

  const page = document.getElementById('scroll-page');
  const nav  = document.getElementById('scroll-nav');

  // Hero
  page.insertAdjacentHTML('beforeend', `
    <section class="scroll-section" id="section-00">
      <div class="hero-bg">
        <div class="orb orb--1"></div>
        <div class="orb orb--2"></div>
        <div class="orb orb--3"></div>
      </div>
      <div class="hero-content">
        <p class="hero-glyph">${PAGE.hero.glyph}</p>
        <h1 class="hero-title">${PAGE.hero.title}</h1>
        <div class="hero-data">
          ${PAGE.hero.dataLines.map(l => `<span class="hero-data__line">${l}</span>`).join('')}
        </div>
        <div class="hero-trio">
          ${PAGE.hero.trio.map(t => `
            <div class="trio-item">
              <span class="trio-item__label">${t.label}</span>
              <span class="trio-item__glyph">${t.glyph}</span>
              <span class="trio-item__value">${t.value}</span>
            </div>
          `).join('')}
        </div>
      </div>
    </section>
  `);

  // Section wishlist
  page.insertAdjacentHTML('beforeend', `
    <section class="scroll-section scroll-section--alt" id="section-01">
      <p class="section-eyebrow">01 · inventaire des désirs</p>
      <h2 class="section-title">wish<br><em>list</em></h2>

      <div class="section-divider"></div>

      <!-- Filtres -->
      <div class="filters-wrapper">
        <div class="filters-row">
          <span class="filters-label">Statut</span>
          <div class="filter-chips" id="filter-statuts"></div>
        </div>
        <div class="filters-row">
          <span class="filters-label">Nature</span>
          <div class="filter-chips" id="filter-natures"></div>
        </div>
      </div>

      <!-- Bouton ajout -->
      <div class="add-bar">
        <button class="btn-add" id="btn-open-modal">
          <span>+</span> Ajouter un item
        </button>
      </div>

      <!-- Liste -->
      <div id="items-container">
        <div class="loading-state">
          <span class="loading-glyph">✦</span>
          <p>Chargement…</p>
        </div>
      </div>
    </section>
  `);

  // Nav latérale
  const NAV_ITEMS = [
    { id: 'section-00', label: 'identité' },
    { id: 'section-01', label: 'wishlist' },
  ];
  nav.innerHTML = NAV_ITEMS.map((item, i) => `
    <a class="scroll-nav__item${i === 0 ? ' active' : ''}" href="#${item.id}">
      <span class="scroll-nav__label">${item.label}</span>
      <span class="scroll-nav__dot"></span>
    </a>
  `).join('');

  const allSections = document.querySelectorAll('.scroll-section');
  const navItems    = document.querySelectorAll('.scroll-nav__item');
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(i => i.classList.remove('active'));
      const active = document.querySelector(`.scroll-nav__item[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  }, { threshold: 0.3 });
  allSections.forEach(s => observer.observe(s));

  // Modal HTML
  document.body.insertAdjacentHTML('beforeend', `
    <div class="modal-overlay" id="item-modal">
      <div class="modal">
        <div class="modal__header">
          <h3 id="modal-title">Ajouter un item</h3>
          <button class="modal__close" id="btn-close-modal">✕</button>
        </div>
        <form id="item-form" class="modal__form">
          <div class="form-field">
            <label>Titre *</label>
            <input type="text" name="titre_wishlist" required placeholder="Nom de l'item" />
          </div>
          <div class="form-field">
            <label>Lien</label>
            <input type="url" name="lien_wishlist" placeholder="https://…" />
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>Prix (€)</label>
              <input type="number" name="prix_wishlist" step="0.01" min="0" placeholder="0.00" />
            </div>
            <div class="form-field">
              <label>Boutique</label>
              <input type="text" name="boutique_wishlist" placeholder="ZARA, Sezane…" />
            </div>
          </div>
          <div class="form-row">
            <div class="form-field">
              <label>Statut</label>
              <select name="statut_wishlist">
                ${STATUTS.map(s => `<option value="${s}">${s}</option>`).join('')}
              </select>
            </div>
            <div class="form-field">
              <label>Nature</label>
              <select name="nature_wishlist">
                ${NATURES.map(n => `<option value="${n}">${n}</option>`).join('')}
              </select>
            </div>
          </div>
          <div class="form-actions">
            <button type="button" class="btn-cancel" id="btn-cancel-modal">Annuler</button>
            <button type="submit" class="btn-submit">Enregistrer</button>
          </div>
        </form>
      </div>
    </div>
  `);

  // Modal events
  document.getElementById('btn-open-modal').addEventListener('click', () => openModal());
  document.getElementById('btn-close-modal').addEventListener('click', closeModal);
  document.getElementById('btn-cancel-modal').addEventListener('click', closeModal);
  document.getElementById('item-modal').addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });

  document.getElementById('item-form').addEventListener('submit', async e => {
    e.preventDefault();
    const form = e.target;
    const payload = {
      titre_wishlist:    form['titre_wishlist'].value.trim(),
      lien_wishlist:     form['lien_wishlist'].value.trim()     || null,
      prix_wishlist:     form['prix_wishlist'].value            || null,
      boutique_wishlist: form['boutique_wishlist'].value.trim() || null,
      statut_wishlist:   form['statut_wishlist'].value,
      nature_wishlist:   form['nature_wishlist'].value,
    };

    try {
      const btn = form.querySelector('.btn-submit');
      btn.textContent = '…';
      btn.disabled = true;

      if (editingId) {
        await updateItem(editingId, payload);
        const idx = ALL_ITEMS.findIndex(i => i.id == editingId);
        if (idx >= 0) ALL_ITEMS[idx] = { ...ALL_ITEMS[idx], ...payload };
      } else {
        const created = await insertItem(payload);
        if (created && created[0]) ALL_ITEMS.unshift(created[0]);
      }

      updateHeroTrio(ALL_ITEMS);
      renderItems();
      closeModal();
    } catch (err) {
      alert('Erreur : ' + err.message);
    } finally {
      const btn = form.querySelector('.btn-submit');
      btn.textContent = 'Enregistrer';
      btn.disabled = false;
    }
  });

  // Chargement données
  try {
    ALL_ITEMS = await fetchAll();
    updateHeroTrio(ALL_ITEMS);
    renderFilters();
    renderItems();
  } catch (err) {
    document.getElementById('items-container').innerHTML = `
      <div class="empty-state">
        <span class="empty-state__glyph">⚠</span>
        <p>Impossible de charger les données.<br><small>${err.message}</small></p>
      </div>`;
  }
});
