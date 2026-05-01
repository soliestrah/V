// ============================================================
// CONFIGURATION — tout modifier ici, ne pas toucher au HTML
// ============================================================

const PAGE = {
  eyebrow: 'antichambreV · section 1',
  title: '[Nom de la collection]',
};

// Groupes de filtres
// { id: identifiant unique du groupe, label: affiché, filters: [{ value, label }] }
const FILTER_GROUPS = [
  {
    id: '1',
    label: 'filtre 1',
    filters: [
      { value: 'all',   label: 'tout' },
      { value: 'tag-a', label: 'tag a' },
      { value: 'tag-b', label: 'tag b' },
      { value: 'tag-c', label: 'tag c' },
    ]
  },
  {
    id: '2',
    label: 'filtre 2',
    filters: [
      { value: 'all',   label: 'tout' },
      { value: 'tag-x', label: 'tag x' },
      { value: 'tag-y', label: 'tag y' },
    ]
  },
];

// Cartes
// tags : doit correspondre aux values des filtres ci-dessus
// links : tableau de { label, url } — peut être vide []
const CARDS = [
  {
    id: 1,
    title: 'Titre de la carte',
    desc: 'Description courte visible sur la carte.',
    content: `Contenu long visible dans le panel. Tu peux écrire autant que tu veux ici — notes, observations, réflexions. Ce champ accepte du texte libre.`,
    tags: ['tag-a', 'tag-x'],
    status: 'en cours',
    links: [
      { label: 'ressource 1', url: 'https://example.com' },
      { label: 'ressource 2', url: 'https://example.com' },
    ]
  },
  {
    id: 2,
    title: 'Deuxième carte',
    desc: 'Un autre exemple avec des tags différents.',
    content: `Notes longues sur cette entrée. Tout ce que tu veux garder en mémoire sur ce sujet.`,
    tags: ['tag-b', 'tag-x'],
    status: 'terminé',
    links: []
  },
  {
    id: 3,
    title: 'Troisième carte',
    desc: 'Encore un exemple — tag a + tag y.',
    content: `Contenu détaillé de la troisième entrée.`,
    tags: ['tag-a', 'tag-y'],
    status: 'à faire',
    links: [
      { label: 'voir plus', url: 'https://example.com' },
    ]
  },
  {
    id: 4,
    title: 'Quatrième carte',
    desc: 'Tag c + tag y.',
    content: `Notes sur la quatrième entrée.`,
    tags: ['tag-c', 'tag-y'],
    status: 'en pause',
    links: []
  },
];


// ============================================================
// RENDU — ne pas modifier en dessous sauf si tu sais ce que tu fais
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  // -- En-tête --
  document.querySelector('.page-header__eyebrow').textContent = PAGE.eyebrow;
  document.querySelector('.page-header__title').textContent   = PAGE.title;

  // -- Filtres --
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

  // -- Grille --
  const grid = document.getElementById('grid');
  grid.innerHTML = CARDS.map(card => `
    <article class="card" data-id="${card.id}" data-tags="${card.tags.join(' ')}">
      <h3 class="card__title">${card.title}</h3>
      <p class="card__desc">${card.desc}</p>
      <div class="card__meta">
        <div class="card__tags">
          ${card.tags.map(t => `<span class="card__tag">${t}</span>`).join('')}
        </div>
        <span class="card__status">— ${card.status}</span>
      </div>
    </article>
  `).join('');

  // -- Filtres logique --
  const activeFilters = {};
  FILTER_GROUPS.forEach(g => activeFilters[g.id] = 'all');

  const counter = document.querySelector('.js-count');
  const empty   = document.getElementById('empty');

  function applyFilters() {
    let visible = 0;
    document.querySelectorAll('.card').forEach(card => {
      const tags = card.dataset.tags ? card.dataset.tags.split(' ') : [];
      const passes = Object.entries(activeFilters).every(([, filter]) => {
        return filter === 'all' || tags.includes(filter);
      });
      card.classList.toggle('hidden', !passes);
      if (passes) visible++;
    });
    counter.textContent = visible;
    empty.classList.toggle('visible', visible === 0);
  }

  document.querySelector('.filters').addEventListener('click', e => {
    const btn = e.target.closest('.filter-tag');
    if (!btn) return;
    const group = btn.dataset.group;
    document.querySelectorAll(`.filter-tag[data-group="${group}"]`).forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    activeFilters[group] = btn.dataset.filter;
    applyFilters();
  });

  applyFilters();

  // -- Panel droit --
  const panel      = document.getElementById('panel');
  const panelInner = document.getElementById('panel-inner');
  const overlay    = document.getElementById('panel-overlay');

  function openPanel(id) {
    const card = CARDS.find(c => c.id === id);
    if (!card) return;

    panelInner.innerHTML = `
      <button class="panel__close" id="panel-close" aria-label="Fermer">✕</button>

      <div class="panel__eyebrow">
        ${card.tags.map(t => `<span class="panel__tag">${t}</span>`).join('')}
        <span class="panel__status">— ${card.status}</span>
      </div>

      <h2 class="panel__title">${card.title}</h2>

      <p class="panel__desc">${card.desc}</p>

      <div class="panel__divider"></div>

      <div class="panel__content">${card.content}</div>

      ${card.links.length ? `
        <div class="panel__links">
          <p class="panel__links-label">ressources</p>
          <ul class="panel__links-list">
            ${card.links.map(l => `
              <li><a href="${l.url}" target="_blank" rel="noopener">${l.label} ↗</a></li>
            `).join('')}
          </ul>
        </div>
      ` : ''}
    `;

    panel.classList.add('open');
    overlay.classList.add('visible');
    document.body.classList.add('panel-open');

    document.getElementById('panel-close').addEventListener('click', closePanel);
  }

  function closePanel() {
    panel.classList.remove('open');
    overlay.classList.remove('visible');
    document.body.classList.remove('panel-open');
  }

  grid.addEventListener('click', e => {
    const title = e.target.closest('.card__title');
    if (!title) return;
    const card  = title.closest('.card');
    openPanel(Number(card.dataset.id));
  });

  overlay.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

});
