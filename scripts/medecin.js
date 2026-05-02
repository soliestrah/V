// ============================================================
// CONFIGURATION — tout modifier ici, ne pas toucher au HTML
// ============================================================

const PAGE = {
  eyebrow: 'antichambreV · se sentir mieux dans son corps',
  title: 'médecin',
};

// Groupes de filtres
// { id: identifiant unique du groupe, label: affiché, filters: [{ value, label }] }
const FILTER_GROUPS = [
  {
    id: '1',
    label: 'spécialiste',
    filters: [
      { value: 'all',   label: 'tout' },
      { value: 'généraliste', label: 'généraliste' },
    ]
  },
];

// Cartes
// tags : doit correspondre aux values des filtres ci-dessus
// links : tableau de { label, url } — peut être vide []
const CARDS = [
  {
    id: 1,
    title: 'Lipœdème',
    desc: `Membre de la famille déjà touché : mère, grand mère.`,
    content: `Jambes lourdes, volumineuses et douloureuses, présence de bleus à la suite de coups minimes et fatigue sont parmi les symptômes les plus courants du lipœdème. La maladie affecte les membres inférieurs, parfois les membres supérieurs et d'autres parties du corps dans les stades les plus avancés.<br/>Mamie n'arrivait plus à marcher vers la fin de sa vie. Maman fait des drainages chez un kiné, marche beaucoup et cela aide grandement à stabiliser la maladie. Moi j'ai toujours eu des molets imposant. Avec les années cela s'aggrave, et depuis 1 semaine je sens une très grosse lourdeur dans les jambes. Après avoir utilisé un "machine gun" j'ai eu un soulagement puis cela est revenue encore plus fort. Sensation de jambes lourde, obligé de dormir (depuis des années) avec un coussin afin d'avoir une jambe surélevée. Lorsque je plie les jambes j'ai une très grande gêne. J'ai très souvent des fourmillements dans les pieds et la sensation de ne jamais être tout à fait confortable. Au toucher mon mollet est très dur et je ne peux pas faire le tour de ma cheville avec ma main. Aussi j'ai la sensation que cela commence a atteindre le haut de mon corps, mes poignets sont plus gros et lorsque je pose mes mains à plat sur une surface je sens une gêne comme si j'avais un surplus de quelque chose qui empêche d'avoir un bon angle dans poignet/main. Aussi mes doigts ont pas mal grossit et des bagues qui m'allaient depuis une dizaine d'année bloquent maintenant, la chaleur aide pas forcément, mais même avec un poids qui fluctue ça ne m'était jamais arrivé. J'ai prévu d'aller faire une drainage chez un kiné en joint et j'aimerais, vu que c'est possible, que ce soit pris en charge. J'ai déjà essayé en mai : à voir comment je me suis sentie après`,
    tags: ['généraliste'],
    status: 'attente du RDV',
    links: [{ label: 'drainage lymphatiaque', url: 'https://minljiva.github.io/MINLJIVA/DRAINAGE.html' },    ]
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
    // On cherche si on a cliqué sur la carte ou un de ses enfants
    const card = e.target.closest('.card');
    if (!card) return;
    
    openPanel(Number(card.dataset.id));
  });


  overlay.addEventListener('click', closePanel);

  document.addEventListener('keydown', e => {
    if (e.key === 'Escape') closePanel();
  });

});
