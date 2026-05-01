// ============================================================
// CONFIGURATION — tout modifier ici, ne pas toucher au HTML
// ============================================================

const PAGE = {
  eyebrow: `antichambreV · garden`,
  title: `JARDIN`,
};

// Groupes de filtres
// { id: identifiant unique du groupe, label: affiché, filters: [{ value, label }] }
const FILTER_GROUPS = [
  {
    id: `1`,
    label: `exposition`,
    filters: [
      { value: `all`,   label: `tout` },
      { value: `ouest`, label: `ouest` },
      { value: `est`, label: `est` },
    ]
  },
  {
    id: `2`,
    label: `utilisation`,
    filters: [
      { value: `all`,   label: `tout` },
      { value: `infusion`, label: `infusion` },
       { value: `deco`, label: `fleurs` },
      { value: `fruits`, label: `fruits/légumes` },
      { value: `aromatique`, label: `aromatique` },
    ]
  },
];

// Cartes
// tags : doit correspondre aux values des filtres ci-dessus
// links : tableau de { label, url } — peut être vide []
const CARDS = [
  {
    id: 1,
    title: `Verveine citronnelle`,
    desc: `Grande favorite des herboristes. Ses feuilles riches en citral et limonène en font un antistress de premier ordre. Infusion classique contre les insomnies légères, les digestions difficiles et les spasmes intestinaux.`,
    content: `Récolter avant floraison pour un arôme maximal. Sécher à l'ombre, les feuilles perdent vite leur huile essentielle à la chaleur.`,
    tags: [`ouest`, `infusion`],
    status: `Aloysia citrodora`,
    links: [
      { label: `ressource 1`, url: `https://google.com` },
      { label: `ressource 2`, url: `https://google.com` },
    ]
  },
  {
    id: 2,
    title: `Camomille allemande`,
    desc: `La plus précieuse des camomilles. Contient de l'alpha-bisabolol et du chamazulène (huile bleue). Usage interne : crampes digestives, règles douloureuses, anxiété. Usage externe : peau irritée, eczéma, conjonctivite.`,
    content: `Récolter les capitules quand les ligules (pétales blancs) se rabattent vers le bas — signe de maturité optimale.`,
    tags: [`ouest`, `infusion`],
    status: `Matricaria chamomilla`,
    links: []
  },
  {
    id: 3,
    title: `Pelargonium Pinki Pinks`,
    desc: `Peu exploité en herboristerie classique, mais les feuilles des pélargoniums odorants sont antiseptiques et répulsives contre les moustiques. Les fleurs sont comestibles, utilisées en décoration culinaire.`,
    content: `Mettre un pot près d'une fenêtre ouverte : l'odeur des feuilles froissées éloigne les moustiques naturellement.`,
    tags: [`ouest`, `deco`],
    status: `Pelargonium × hortorum`,
    links: [
      { label: `voir plus`, url: `https://example.com` },
    ]
  },
  {
    id: 4,
    title: `Nectarine Sweet Lady`,
    desc: `Les feuilles de pêcher/nectarinier sont traditionnellement utilisées en décoction contre la toux et les bronchites. Les amandes du noyau contiennent de l'amygdaline et sont à éviter en grande quantité.`,
    content: `Pruner les rameaux après récolte pour garder un port compact en pot. Un balcon bien ensoleillé suffit pour une bonne fructification.`,
    tags: [`ouest`, `fruits`],
    status: `Prunus persica var. nucipersica`,
    links: []
  },
    {
    id: 5,
    title: `Framboisier 'Fallgold'`,
    desc: `Les feuilles de framboisier sont un remède herboriste emblématique. Riches en tanins et fragarine, elles tonifient l'utérus. Aussi utiles contre les diarrhées et les aphtes.`,
    content: `Récoltez les jeunes feuilles au printemps avant floraison. Cette variété remontante donne deux récoltes : été et automne.`,
    tags: [`ouest`, `fruits`],
    status: `Rubus idaeus`,
    links: []
  },
    {
    id: 6,
    title: `Menthe verte`,
    desc: `Plus douce que la menthe poivrée, idéale en cuisine et en infusion. L'herboriste l'utilise pour les nausées, maux de tête et mauvaise digestion. Le carvone qu'elle contient est antifongique.`,
    content: `À isoler en pot car très envahissante. Pincer régulièrement pour densifier le feuillage et retarder la montée en graines.`,
    tags: [`ouest`, `aromatique`],
    status: `Mentha spicata`,
    links: []
  },
    {
    id: 7,
    title: `Menthe ananas`,
    desc: `Variété originale au parfum fruité et doux. Moins puissante médicalement mais très appréciée en infusion légère, cocktails et cuisine. Propriétés digestives et antispasmodiques douces.`,
    content: `Son feuillage panaché crème et vert en fait aussi une plante ornementale. Préfère une mi-ombre sur balcon exposé sud.`,
    tags: [`ouest`, `aromatique`],
    status: `Mentha suaveolens 'Variegata'`,
    links: []
  },
      {
    id: 8,
    title: `Lavande grosso`,
    desc: `La lavande la plus cultivée pour son huile essentielle. Linalol et acétate de linalyle lui confèrent de puissantes propriétés : anxiolytique, antalgique, cicatrisante. Application locale sur brûlures légères, piqûres, maux de tête. Éloigne les mites et moustiques.`,
    content: `Tailler après floraison en ne coupant jamais dans le vieux bois. L'HE de lavandin 'Grosso' est plus camphrée que la vraie lavande fine.`,
    tags: [`ouest`, `aromatique`],
    status: `Lavandula × intermedia 'Grosso'`,
    links: []
  },
        {
    id: 9,
    title: `Thym commun`,
    desc: `Le plus puissant des aromatiques de balcon. Le thymol et le carvacrol sont parmi les antiseptiques naturels les plus efficaces. Bronchites, toux, rhumes : indispensable. Aussi antimycosique, digestif et vermifuge.`,
    content: `Laisser fleurir une fois par an — les fleurs sont aussi médicinales et très mellifères. Supporte bien la sécheresse.`,
    tags: [`ouest`, `aromatique`],
    status: `Thymus vulgaris`,
    links: []
  },
          {
    id: 10,
    title: `Fraisier gariguette`,
    desc: `Les feuilles de fraisier sont riches en tanins et acide ellagique. En herboristerie : infusion dépurative, astringente pour les diarrhées, gingivites. Les fruits, riches en vitamine C et antioxydants, sont eux-mêmes considérés comme aliments-médicaments.`,
    content: `Les stolons peuvent être supprimés pour concentrer l'énergie sur les fruits, ou laissés pour multiplier la plante gratuitement.`,
    tags: [`ouest`, `fruits`],
    status: `Fragaria × ananassa 'Gariguette'`,
    links: []
  },
          {
    id: 11,
    title: `Basilic grand vert`,
    desc: `Bien plus qu'une herbe de cuisine. Le basilic contient de l'eugénol et du linalol, actifs sur les spasmes digestifs, les nausées et les maux de tête. Traditionnellement utilisé contre l'anxiété légère et la fatigue nerveuse.`,
    content: `Pincer les fleurs dès qu'elles apparaissent pour concentrer les huiles essentielles dans les feuilles. Récolter le matin, avant la chaleur.`,
    tags: [`est`, `aromatique`],
    status: `Ocimum basilicum`,
    links: []
  },
          {
    id: 12,
    title: `Persil frisé`,
    desc: `Le persil est une des plantes les plus riches en vitamine C, fer et apigénine (flavonoïde antioxydant). En herboristerie : diurétique doux, dépuratif, reminéralisant. Les feuilles fraîches mâchées neutralisent les mauvaises odeurs buccales.`,
    content: `Couper au ras du sol en laissant le cœur — il repousse plusieurs fois. Éviter en tisane concentrée en cas de grossesse (apiol en quantité).`,
    tags: [`est`, `aromatique`],
    status: `Petroselinum crispum`,
    links: []
  },
          {
    id: 13,
    title: `carte`,
    desc: `Tag`,
    content: `Notes`,
    tags: [`tagc`, `tagy`],
    status: `enpause`,
    links: []
  },
];


// ============================================================
// RENDU — ne pas modifier en dessous sauf si tu sais ce que tu fais
// ============================================================

document.addEventListener(`DOMContentLoaded`, () => {

  // -- En-tête --
  document.querySelector(`.page-header__eyebrow`).textContent = PAGE.eyebrow;
  document.querySelector(`.page-header__title`).textContent   = PAGE.title;

  // -- Filtres --
  const filtersEl = document.querySelector(`.filters`);
  filtersEl.innerHTML = FILTER_GROUPS.map(group => `
    <div class="filter-group">
      <span class="filter-group__label">${group.label}</span>
      <div class="filter-group__tags">
        ${group.filters.map((f, i) => `
          <button
            class="filter-tag${i === 0 ? ` active` : ``}"
            data-filter="${f.value}"
            data-group="${group.id}"
          >${f.label}</button>
        `).join(``)}
      </div>
    </div>
  `).join(``);

  // -- Grille --
  const grid = document.getElementById(`grid`);
  grid.innerHTML = CARDS.map(card => `
    <article class="card" data-id="${card.id}" data-tags="${card.tags.join(` `)}">
      <h3 class="card__title">${card.title}</h3>
      <p class="card__desc">${card.desc}</p>
      <div class="card__meta">
        <div class="card__tags">
          ${card.tags.map(t => `<span class="card__tag">${t}</span>`).join(``)}
        </div>
        <span class="card__status">— ${card.status}</span>
      </div>
    </article>
  `).join(``);

  // -- Filtres logique --
  const activeFilters = {};
  FILTER_GROUPS.forEach(g => activeFilters[g.id] = `all`);

  const counter = document.querySelector(`.js-count`);
  const empty   = document.getElementById(`empty`);

  function applyFilters() {
    let visible = 0;
    document.querySelectorAll(`.card`).forEach(card => {
      const tags = card.dataset.tags ? card.dataset.tags.split(` `) : [];
      const passes = Object.entries(activeFilters).every(([, filter]) => {
        return filter === `all` || tags.includes(filter);
      });
      card.classList.toggle(`hidden`, !passes);
      if (passes) visible++;
    });
    counter.textContent = visible;
    empty.classList.toggle(`visible`, visible === 0);
  }

  document.querySelector(`.filters`).addEventListener(`click`, e => {
    const btn = e.target.closest(`.filter-tag`);
    if (!btn) return;
    const group = btn.dataset.group;
    document.querySelectorAll(`.filter-tag[data-group="${group}"]`).forEach(b => b.classList.remove(`active`));
    btn.classList.add(`active`);
    activeFilters[group] = btn.dataset.filter;
    applyFilters();
  });

  applyFilters();

  // -- Panel droit --
  const panel      = document.getElementById(`panel`);
  const panelInner = document.getElementById(`panel-inner`);
  const overlay    = document.getElementById(`panel-overlay`);

  function openPanel(id) {
    const card = CARDS.find(c => c.id === id);
    if (!card) return;

    panelInner.innerHTML = `
      <button class="panel__close" id="panel-close" aria-label="Fermer">✕</button>

      <div class="panel__eyebrow">
        ${card.tags.map(t => `<span class="panel__tag">${t}</span>`).join(``)}
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
            `).join(``)}
          </ul>
        </div>
      ` : ``}
    `;

    panel.classList.add(`open`);
    overlay.classList.add(`visible`);
    document.body.classList.add(`panel-open`);

    document.getElementById(`panel-close`).addEventListener(`click`, closePanel);
  }

  function closePanel() {
    panel.classList.remove(`open`);
    overlay.classList.remove(`visible`);
    document.body.classList.remove(`panel-open`);
  }

  grid.addEventListener(`click`, e => {
    const title = e.target.closest(`.card__title`);
    if (!title) return;
    const card  = title.closest(`.card`);
    openPanel(Number(card.dataset.id));
  });

  overlay.addEventListener(`click`, closePanel);

  document.addEventListener(`keydown`, e => {
    if (e.key === `Escape`) closePanel();
  });

});
