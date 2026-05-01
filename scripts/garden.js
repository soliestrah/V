// ============================================================
// CONFIGURATION — tout modifier ici, ne pas toucher au HTML
// ============================================================

const PAGE = {
  eyebrow: 'antichambreV · garden',
  title: 'JARDIN',
};

// Groupes de filtres
// { id: identifiant unique du groupe, label: affiché, filters: [{ value, label }] }
const FILTER_GROUPS = [
  {
    id: '1',
    label: 'exposition',
    filters: [
      { value: 'all',   label: 'tout' },
      { value: 'ouest', label: 'ouest' },
      { value: 'est', label: 'est' },
    ]
  },
  {
    id: '2',
    label: 'utilisation',
    filters: [
      { value: 'all',   label: 'tout' },
      { value: 'infusion', label: 'infusion' },
       { value: 'deco', label: 'fleurs' },
      { value: 'fruits', label: 'fruits/légumes' },
    ]
  },
];

// Cartes
// tags : doit correspondre aux values des filtres ci-dessus
// links : tableau de { label, url } — peut être vide []
const CARDS = [
  {
    id: 1,
    title: 'Verveine citronnelle',
    desc: 'Grande favorite des herboristes. Ses feuilles riches en citral et limonène en font un antistress de premier ordre. Infusion classique contre les insomnies légères, les digestions difficiles et les spasmes intestinaux.',
    content: `Récolter avant floraison pour un arôme maximal. Sécher à l'ombre, les feuilles perdent vite leur huile essentielle à la chaleur.`,
    tags: ['ouest', 'infusion'],
    status: 'Aloysia citrodora',
    links: [
      { label: 'ressource 1', url: 'https://google.com' },
      { label: 'ressource 2', url: 'https://google.com' },
    ]
  },
  {
    id: 2,
    title: 'Camomille allemande',
    desc: 'La plus précieuse des camomilles. Contient de l'alpha-bisabolol et du chamazulène (huile bleue). Usage interne : crampes digestives, règles douloureuses, anxiété. Usage externe : peau irritée, eczéma, conjonctivite.',
    content: `Récolter les capitules quand les ligules (pétales blancs) se rabattent vers le bas — signe de maturité optimale.`,
    tags: ['ouest', 'infusion'],
    status: 'Matricaria chamomilla',
    links: []
  },
  {
    id: 3,
    title: 'Pelargonium Pinki Pinks',
    desc: 'Peu exploité en herboristerie classique, mais les feuilles des pélargoniums odorants sont antiseptiques et répulsives contre les moustiques. Les fleurs sont comestibles, utilisées en décoration culinaire.',
    content: `Mettre un pot près d'une fenêtre ouverte : l'odeur des feuilles froissées éloigne les moustiques naturellement.`,
    tags: ['ouest', 'deco'],
    status: 'Pelargonium × hortorum',
    links: [
      { label: 'voir plus', url: 'https://example.com' },
    ]
  },
  {
    id: 4,
    title: 'Nectarine Sweet Lady',
    desc: 'Les feuilles de pêcher/nectarinier sont traditionnellement utilisées en décoction contre la toux et les bronchites. Les amandes du noyau contiennent de l'amygdaline et sont à éviter en grande quantité.',
    content: `Pruner les rameaux après récolte pour garder un port compact en pot. Un balcon bien ensoleillé suffit pour une bonne fructification.`,
    tags: ['ouest', 'fruits'],
    status: 'Prunus persica var. nucipersica',
    links: []
  },
    {
    id: 5,
    title: 'Quatrième carte',
    desc: 'Tag c + tag y.',
    content: `Notes sur la quatrième entrée.`,
    tags: ['tag-c', 'tag-y'],
    status: 'en pause',
    links: []
  },
    {
    id: 6,
    title: 'Quatrième carte',
    desc: 'Tag c + tag y.',
    content: `Notes sur la quatrième entrée.`,
    tags: ['tag-c', 'tag-y'],
    status: 'en pause',
    links: []
  },
    {
    id: 7,
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
