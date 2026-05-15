// ============================================================
// CONFIGURATION — tout modifier ici, ne pas toucher au HTML
// ============================================================

// 1. On range toutes les données proprement dans l'objet PAGE
const PAGE = {
  eyebrow: `antichambreV · ce qui pousse dans le jardin`,
  glyph: `<p class="hero-glyph">✦ <a href="convoitises.html">les plantes que j'aimerais</a></p>`,
  title: `jardin`
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
    title: `Pavot`,
    desc: `Le pavot de jardin (Papaver somniferum) est riche en alcaloïdes (morphine, codéine en très faibles quantités dans les variétés ornementales). Les graines sont comestibles et sans danger. En phytothérapie traditionnelle : propriétés légèrement sédatives et antitussives via les pétales séchés.`,
    content: `Récolter les graines quand la capsule est sèche et brune. Laisser quelques capsules en place pour la ressemence naturelle. Les pétales se récoltent dès l'ouverture.`,
    tags: [`ouest`, `est`, `deco`],
    status: `Papaver somniferum`,
    links: []
  },
  {
    id: 14,
    title: `Monnaie du pape`,
    desc: `Appelée aussi lunaire vivace, ses silicules argentées persistent tout l'hiver et sont très décoratives. Plante mellifère appréciée des pollinisateurs. Les jeunes feuilles sont comestibles, au goût légèrement piquant rappelant la roquette.`,
    content: `Récolter les jeunes pousses au printemps. Pour la déco, couper les tiges entières quand les silicules sont encore vertes et laisser sécher à l'ombre, tête en bas.`,
    tags: [`est`, `deco`],
    status: `Lunaria annua`,
    links: []
  },
  {
    id: 15,
    title: `Grand piment vert long`,
    desc: `Piment doux à très faible teneur en capsaïcine. Riche en vitamine C (encore plus que le poivron), vitamine A et antioxydants. La capsaïcine, même à faible dose, a des propriétés anti-inflammatoires et stimule la digestion.`,
    content: `Récolter quand le fruit est bien ferme et vert brillant. Laisser quelques fruits rougir sur le plant pour la semence. Arrosage régulier mais sans excès pour éviter la pourriture du collet.`,
    tags: [`ouest`, `fruits`],
    status: `Capsicum annuum`,
    links: []
  },
  {
    id: 16,
    title: `Tomate cerise`,
    desc: `Concentration maximale en lycopène (antioxydant puissant), vitamine C et glutamate naturel. Le lycopène est mieux assimilé après cuisson avec un corps gras. Variété très productive, résistante à la sécheresse une fois bien établie.`,
    content: `Pincer les gourmands pour concentrer la production. Récolter à pleine maturité, quand le fruit se détache facilement. Laisser quelques fruits tomber pour une ressemence spontanée d'une année sur l'autre.`,
    tags: [`ouest`, `fruits`],
    status: `Solanum lycopersicum var. cerasiforme`,
    links: []
  },
  {
    id: 17,
    title: `Œillet d'Inde`,
    desc: `Plante compagne par excellence : ses racines sécrètent des thiophènes qui repoussent les nématodes, et son odeur éloigne pucerons et aleurodes. Les pétales sont comestibles, légèrement citronnés. En phytothérapie : antiseptique cutané, antifongique doux.`,
    content: `Planter en bordure de potager ou entre les tomates et poivrons. Couper les fleurs fanées régulièrement pour prolonger la floraison jusqu'aux gelées. Les pétales séchés s'utilisent en infusion ou en macérât huileux.`,
    tags: [`ouest`, `deco`],
    status: `Tagetes patula`,
    links: []
  },
  {
    id: 18,
    title: `Rose`,
    desc: `Les pétales de rosa gallica et rosa damascena sont utilisés en herboristerie depuis l'Antiquité : astringents, anti-inflammatoires, toniques cutanés. Très riches en vitamine C (surtout dans les cynorhodons). L'eau de rose est calmante pour les muqueuses et la peau sensible.`,
    content: `Récolter les pétales tôt le matin avant l'évaporation des huiles essentielles. Les cynorhodons se récoltent après les premières gelées. Couper les fleurs fanées pour stimuler la remontée.`,
    tags: [`ouest`, `deco`],
    status: `Rosa gallica`,
    links: []
  },
  {
    id: 19,
    title: `Pensée`,
    desc: `Riche en rutine, salicylates et mucilages. En phytothérapie : dépurative, émolliente, utilisée traditionnellement pour les affections cutanées (eczéma, croûtes de lait). Les fleurs entières sont comestibles et décoratives en salade ou cristallisées.`,
    content: `Supprimer régulièrement les fleurs fanées. Récolter les fleurs fraîchement ouvertes pour usage culinaire ou séchage. Préfère les températures fraîches — tend à monter en graine et s'épuiser avec la chaleur.`,
    tags: [`est`, `deco`],
    status: `Viola tricolor`,
    links: []
  },
  {
    id: 20,
    title: `Souci officinal`,
    desc: `Une des plantes médicinales les plus documentées : les fleurs contiennent des flavonoïdes, des triterpènes et des caroténoïdes à l'action cicatrisante, anti-inflammatoire et antifongique marquée. Utilisé en macérât huileux pour la peau, en infusion pour les muqueuses digestives. Fleurs comestibles.`,
    content: `Récolter les capitules dès l'ouverture complète, de préférence le matin par temps sec. Sécher rapidement à l'ombre pour préserver les caroténoïdes. Plante compagne efficace contre les pucerons noirs de la fève.`,
    tags: [`ouest`, `est`, `deco`],
    status: `Calendula officinalis`,
    links: []
  },
  {
    id: 21,
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
  document.querySelector(`.page-header`). textContent = PAGE.glyph;
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

grid.addEventListener('click', e => {
    // On cherche si on a cliqué sur la carte ou un de ses enfants
    const card = e.target.closest('.card');
    if (!card) return;
    
    openPanel(Number(card.dataset.id));
  });

  overlay.addEventListener(`click`, closePanel);

  document.addEventListener(`keydown`, e => {
    if (e.key === `Escape`) closePanel();
  });

});
