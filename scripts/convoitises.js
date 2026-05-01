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
    id: `1`,
    label: `exposition`,
    filters: [
      { value: `all`,    label: `tout` },
      { value: `ouest`,  label: `ouest` },
      { value: `est`,    label: `est` },
      { value: `ombre`,  label: `mi-ombre` },
    ]
  },
  {
    id: `2`,
    label: `usage`,
    filters: [
      { value: `all`,        label: `tout` },
      { value: `med`,        label: `médicinale` },
      { value: `adapt`,      label: `adaptogène` },
      { value: `imm`,        label: `immunité` },
      { value: `arom`,       label: `aromatique` },
      { value: `mel`,        label: `mélanges` },
      { value: `ete`,        label: `été / froid` },
    ]
  },
  {
    id: `3`,
    label: `effet`,
    filters: [
      { value: `all`,            label: `tout` },
      { value: `antistress`,     label: `stress` },
      { value: `insomnie`,       label: `sommeil` },
      { value: `digestive`,      label: `digestion` },
      { value: `anti-inflammatoire`, label: `inflammation` },
      { value: `immunite`,       label: `immunité` },
      { value: `peau`,           label: `peau` },
    ]
  },
];

const CARDS = [
  {
    id: 1,
    title: `Mélisse`,
    desc: `La plus grande absence d'un balcon tisane. Antistress et antiviral numéro un — supérieure à la verveine sur ce point. Active sur l'herpès, les palpitations nerveuses et les insomnies. Pousse à mi-ombre sans problème.`,
    content: `Sécher les feuilles à l'ombre avant floraison. Tailler après floraison pour une deuxième pousse. Attention : envahissante comme les menthes.\n\nMarriage : Verveine + camomille pour tisane nuit profonde. Mélisse seule contre l'herpès labial.\n\nPot : Pot de 20 cm min. Arrosage régulier. Très généreuse — une plante suffit largement.`,
    tags: [`est`, `ombre`, `med`, `antistress`, `insomnie`, `digestive`],
    status: `Melissa officinalis · Est ou mi-ombre`,
    links: []
  },
  {
    id: 2,
    title: `Calendula (souci officinal)`,
    desc: `Irremplaçable en herboristerie. En tisane : gastrite, intestin irritable, règles douloureuses. En externe : peau sensible, brûlures, plaies. Belle plante orange qui fleurit tout l'été.`,
    content: `Récolter les fleurs dès ouverture, sécher à plat rapidement. Plus on récolte, plus elle fleurit. Plante annuelle qui se ressème facilement.\n\nMarriage : Menthe + fraisier + calendula pour cure dépurative printanière.\n\nPot : Pot de 15 cm suffit. Arrosage modéré. Ressème seul d'une année sur l'autre.`,
    tags: [`ouest`, `est`, `med`, `mel`, `anti-inflammatoire`, `digestive`, `peau`],
    status: `Calendula officinalis · Ouest ou Est`,
    links: []
  },
  {
    id: 3,
    title: `Hibiscus`,
    desc: `Transforme les cold brews estivaux — couleur rouge vif, goût acidulé fruité, riche en vitamine C et anthocyanes. Hypotenseur léger. Demande le maximum de soleil et de chaleur.`,
    content: `C'est le calice charnu (pas la fleur) qu'on récolte et sèche. Attendre que les calices soient bien développés après la chute des pétales.\n\nMarriage : Cold brew hibiscus + menthe ananas + verveine. Hibiscus + gingembre pour boisson hivernale chaude.\n\nPot : Grand pot 25–30 cm. Chaleur indispensable. Rentrer avant les gelées (annuel à Bordeaux).`,
    tags: [`ouest`, `ete`],
    status: `Hibiscus sabdariffa · Ouest — plein soleil après-midi`,
    links: []
  },
  {
    id: 4,
    title: `Échinacée`,
    desc: `Le stimulant immunitaire le plus documenté en phytothérapie. À utiliser en cure courte dès les premiers signes de rhume, pas en prévention continue. Grande fleur mauve très décorative.`,
    content: `Plante vivace robuste. Racines et parties aériennes fleuries sont actives. Laisser sécher avant usage. Ne pas utiliser plus de 3 semaines d'affilée.\n\nMarriage : Thym + échinacée + miel + citron en cure courte hivernale.\n\nPot : Grand pot 25 cm min. Vivace — revient chaque année. Peu d'entretien.`,
    tags: [`ouest`, `est`, `imm`, `immunite`],
    status: `Echinacea purpurea · Ouest ou Est`,
    links: []
  },
  {
    id: 5,
    title: `Tulsi (basilic sacré)`,
    desc: `Plante adaptogène puissante de la médecine ayurvédique. Aide l'organisme à mieux gérer le stress chronique. Goût complexe, clou de girofle et poivre, très original en tisane.`,
    content: `Pincer les fleurs pour prolonger la récolte de feuilles. Rentrer avant les nuits fraîches — très frileux en dessous de 10 °C.\n\nMarriage : Tulsi + mélisse + verveine pour tisane anti-stress profonde.\n\nPot : Pot de 20 cm. Chaleur et soleil indispensables. Comme le basilic commun.`,
    tags: [`ouest`, `adapt`, `med`, `antistress`, `anti-inflammatoire`, `immunite`],
    status: `Ocimum tenuiflorum · Ouest — plein soleil après-midi`,
    links: []
  },
  {
    id: 6,
    title: `Rose ancienne`,
    desc: `Les pétales séchés de roses anciennes adoucissent et parfument n'importe quelle tisane. Propriétés astringentes, anti-inflammatoires et digestives. Les roses modernes hybrides sont sans intérêt herboriste.`,
    content: `Rosa gallica, Ispahan ou Damas uniquement. Sécher les pétales rapidement à l'ombre dès cueillette pour préserver la couleur et l'arôme.\n\nMarriage : Verveine + camomille + lavande + pétales de rose pour tisane nuit très parfumée.\n\nPot : Grand pot 30–40 cm. Taille annuelle. Choisir impérativement une variété ancienne parfumée.`,
    tags: [`ouest`, `est`, `mel`, `anti-inflammatoire`, `digestive`, `peau`],
    status: `Rosa gallica / Rosa damascena · Ouest ou Est`,
    links: []
  },
  {
    id: 7,
    title: `Achillée millefeuille`,
    desc: `Plante médicinale sauvage très polyvalente. Fièvres légères (sudorifique), digestion difficile, règles douloureuses. En externe : hémostatique sur petites plaies. Goût légèrement amer et aromatique.`,
    content: `Récolter les sommités fleuries en été. Éviter en cas de grossesse. Plante vivace qui revient sans soin chaque année.\n\nMarriage : Menthe verte + mélisse + achillée pour mélange digestif et antispasmodique complet.\n\nPot : Pot de 20 cm. Vivace très rustique. Quasiment aucun entretien nécessaire.`,
    tags: [`ouest`, `est`, `med`, `digestive`, `anti-inflammatoire`],
    status: `Achillea millefolium · Ouest ou Est`,
    links: []
  },
  {
    id: 8,
    title: `Réglisse`,
    desc: `La racine séchée est un grand remède herboriste : toux, gastrite, fatigue surrénale. Goût naturellement sucré sans sucre. Tolère bien la mi-ombre et le soleil du matin, ce qui est rare parmi les médicinales.`,
    content: `Ce sont les racines qu'on utilise — récolter après 2–3 ans de culture. En pot, couper de petits morceaux de racine à sécher. Un morceau de racine suffit à parfumer toute une tisane.\n\nMarriage : Thym + réglisse pour adoucir les tisanes hivernales âcres. Camomille + réglisse pour gastrite.\n\nPot : Grand pot profond 30–40 cm (racines profondes). Arrosage modéré. Vivace.`,
    tags: [`est`, `ombre`, `med`, `arom`, `digestive`],
    status: `Glycyrrhiza glabra · Est ou mi-ombre`,
    links: []
  },
  {
    id: 9,
    title: `Houblon`,
    desc: `Les cônes (strobiles) sont sédatifs puissants — bien plus efficaces que la camomille pour les insomnies sérieuses. Aussi amer digestif. Plante grimpante qui peut habiller une rambarde ou un mur ombragé.`,
    content: `Ce sont les cônes femelles récoltés en fin d'été qu'on sèche. La plante pousse 3–5 m en une saison. Idéale pour créer un mur végétal sur un balcon mi-ombragé.\n\nMarriage : Houblon + valériane (à acheter sec) + mélisse pour insomnie sérieuse.\n\nPot : Grand pot 30 cm avec tuteur ou treillage. Plante grimpante vivace — pousse très vite.`,
    tags: [`ombre`, `est`, `med`, `insomnie`, `antistress`],
    status: `Humulus lupulus · Mi-ombre ou Est`,
    links: []
  },
  {
    id: 10,
    title: `Consoude`,
    desc: `Les feuilles en tisane pour les articulations, os, tendons — une des rares plantes réellement actives sur les tissus conjonctifs. Très grandes feuilles veloutées, port imposant, pousse bien à l'ombre.`,
    content: `Usage interne à limiter dans le temps (alcaloïdes pyrrolizidiniques en grande quantité). En cure courte de 2–3 semaines max. L'usage externe (cataplasme) est sans restriction.\n\nMarriage : Consoude + prêle (à acheter sèche) pour cure articulations-reminéralisation.\n\nPot : Très grand pot 40 cm min. Plante imposante. Vivace très robuste.`,
    tags: [`ombre`, `est`, `med`, `anti-inflammatoire`],
    status: `Symphytum officinale · Mi-ombre ou Est`,
    links: []
  },
  {
    id: 11,
    title: `Bourrache`,
    desc: `Plante dépurative et sudorifique — utilisée pour les refroidissements et comme cure de printemps. Les fleurs bleues étoilées sont comestibles et décoratives en tisane ou en salade. Goût concombre.`,
    content: `Se ressème spontanément d'une année sur l'autre si on laisse quelques fleurs monter en graine. Fleurs à récolter fraîches ou à sécher rapidement.\n\nMarriage : Fleurs de bourrache + verveine + pétales de calendula pour tisane dépurative printanière.\n\nPot : Pot de 20 cm. Annuelle qui se ressème facilement. Fleurs comestibles très décoratives.`,
    tags: [`ouest`, `est`, `med`, `mel`, `anti-inflammatoire`, `peau`],
    status: `Borago officinalis · Ouest ou Est`,
    links: []
  },
  {
    id: 12,
    title: `Gingembre`,
    desc: `Le rhizome frais ou séché est un incontournable des tisanes hivernales et digestives. Anti-nausées puissant, réchauffant, anti-inflammatoire (arthrite). Très facile à cultiver en pot à partir d'un rhizome du commerce.`,
    content: `Planter un rhizome du supermarché en mars, pot large. Récolter en automne avant les gelées. Sécher les tranches ou utiliser frais. Rentrer l'hiver.\n\nMarriage : Gingembre + citron + miel + thym — la tisane hivernale de référence. Gingembre + hibiscus pour boisson acidulée chaude.\n\nPot : Grand pot large et peu profond. Rhizome étalé horizontalement. Hiverner à l'intérieur.`,
    tags: [`ouest`, `arom`, `imm`, `digestive`, `anti-inflammatoire`, `immunite`],
    status: `Zingiber officinale · Ouest — plein soleil après-midi`,
    links: []
  },
  {
    id: 13,
    title: `Citronnelle (vraie)`,
    desc: `À ne pas confondre avec la verveine citronnelle. La vraie citronnelle (herbe) est utilisée en Asie du Sud-Est pour les fièvres, digestion et relaxation. Arôme citronné puissant, très agréable en tisane froide.`,
    content: `Couper les tiges à la base, enlever les feuilles extérieures dures. Utiliser les tiges tendues intérieures. Excellent en cold brew ou tisane chaude.\n\nMarriage : Citronnelle + gingembre + menthe ananas pour tisane asiatique fraîche et digestive.\n\nPot : Grand pot 30 cm. Forte touffe — une seule plante produit beaucoup. Rentrer l'hiver.`,
    tags: [`ouest`, `arom`, `mel`, `digestive`, `antistress`],
    status: `Cymbopogon citratus · Ouest — plein soleil après-midi`,
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
