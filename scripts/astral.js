// ============================================================
// ASTRAL.JS — charte natale
// Dépend de : style.css · section.css · scroll-section.css
// ============================================================

const PAGE = {
  title: 'antichambreV · charte astrale',

  hero: {
    glyph:     '☉ · ☽ · ↑  ·  guide de style astral',
    title:     'charte<br><em>natale</em>',
    dataLines: [
      '28 décembre 1994 · 18h42',
      'Arles, France',
      'Zodiaque tropical · Maisons Placidus',
    ],
    trio: [
      { label: 'Soleil',     glyph: '☉', value: 'Capricorne' },
      { label: 'Lune',       glyph: '☽', value: 'Scorpion'   },
      { label: 'Ascendant',  glyph: '↑', value: 'Cancer'     },
      { label: 'Vénus',      glyph: '♀', value: 'Scorpion'   },
    ],
  },
};

const NAV_ITEMS = [
  { id: 'section-00', label: 'identité'   },
  { id: 'section-01', label: 'dominantes' },
  { id: 'section-02', label: 'stellium V' },
  { id: 'section-03', label: 'vocation'   },
  { id: 'section-04', label: 'nœud nord'  },
  { id: 'section-05', label: 'structure'  },
];

const SECTIONS = [

  // ── 01 · DOMINANTES ─────────────────────────────────────────
  {
    id:      'section-01',
    alt:     false,
    eyebrow: '01 · dominantes',
    title:   'ce qui<br><em>gouverne</em>',
    blocks: [
      { type: 'divider' },
      {
        type: 'dominantes',
        cards: [
          {
            glyph: '♏',
            label: 'Signe dominant',
            title: 'Scorpion',
            desc:  'Lune, Vénus, Pluton, Nœud Nord — tous en Scorpion. Profondeur, transformation, intensité. L\'amour est une alchimie.',
          },
          {
            glyph: '🜄',
            label: 'Éléments dominants',
            title: 'Eau · Terre',
            desc:  'Profondeur intuitive et ancrage concret. La sensibilité est un outil de construction, pas une fragilité.',
          },
          {
            glyph: '☽',
            label: 'Polarité',
            title: '9/10 féminin',
            desc:  'Monde intérieur exceptionnellement riche. La réception, l\'intégration et la maturation précèdent toujours l\'action.',
          },
          {
            glyph: '✦',
            label: 'Modalités',
            title: 'Fixe · Cardinale',
            desc:  'Déterminée et persistante, mais aussi initiatrice. Ce qui commence va jusqu\'au bout.',
          },
        ],
      },
    ],
  },

  // ── 02 · STELLIUM ───────────────────────────────────────────
  {
    id:      'section-02',
    alt:     true,
    eyebrow: '02 · stellium maison V',
    title:   'maison V<br><em>Scorpion</em>',
    blocks: [
      {
        type:  'section-header',
        title: 'maison V<br><em>Scorpion</em>',
        badge: '★ cœur de la charte',
      },
      {
        type:    'text',
        content: 'La Maison V est le cœur de la charte. L\'amour, la créativité et l\'expression de soi sont au centre du destin. Les histoires d\'amour sont karmiques, la puissance créatrice hors du commun.',
      },
      {
        type: 'chips',
        items: [
          { glyph: '☽', name: 'Lune'       },
          { glyph: '♀', name: 'Vénus'      },
          { glyph: '♃', name: 'Jupiter'    },
          { glyph: '♇', name: 'Pluton'     },
          { glyph: '☊', name: 'Nœud Nord'  },
        ],
      },
      {
        type: 'quote',
        text: 'L\'un sans l\'autre ne fonctionne pas — la Maison V est le carburant, la Maison X est le moteur. Créer à partir de la profondeur, et le montrer au monde.',
      },
    ],
  },

  // ── 03 · MC & VOCATION ──────────────────────────────────────
  {
    id:      'section-03',
    alt:     false,
    eyebrow: '03 · MC bélier · vocation',
    title:   'milieu du<br><em>ciel</em>',
    blocks: [
      {
        type: 'split',
        blocks: [
          {
            label: 'MC Bélier 7°43\'',
            title: 'pionnière\ninitatrice',
            text:  'La vocation publique dit quelque chose de très clair : tu es faite pour être visible de façon audacieuse et singulière.',
            list: [
              'Tu brilles quand tu es la première à faire quelque chose',
              'Besoin d\'autonomie totale dans la vie professionnelle',
              'Ton identité professionnelle doit être personnelle, incarnée, à ton image',
              'Tu t\'épanouis là où ton nom, ton visage, ta personnalité sont la marque',
            ],
          },
          {
            label: 'Soutiens structurels',
            title: 'ce qui\nconstruit',
            list: [
              '<strong style="color: var(--c-text);">Mercure Capricorne VI</strong> — structure la matière brute émotionnelle, la rend communicable',
              '<strong style="color: var(--c-text);">Mars Vierge II</strong> — exécute avec précision, transforme l\'intention en action soignée',
              '<strong style="color: var(--c-text);">Saturne Poissons VIII</strong> — ralentit exprès, creuse avant de montrer — donne de la densité',
            ],
          },
        ],
        quote: {
          text: '"Vivre ton MC Bélier à fond, c\'est arrêter d\'attendre d\'être prête et construire quelque chose qui porte ton nom."',
          rose: true,
        },
      },
    ],
  },

  // ── 04 · NŒUD NORD ──────────────────────────────────────────
  {
    id:      'section-04',
    alt:     true,
    eyebrow: '04 · nœud nord · chemin karmique',
    title:   'direction<br><em>d\'évolution</em>',
    blocks: [
      {
        type: 'contrast',
        blocks: [
          {
            modifier: 'dim',
            dir:   '↙ nœud sud · acquis',
            title: 'Taureau\nMaison XI',
            sub:   'zone de confort · frein',
            items: [
              'Stabilité, sécurité, confort',
              'Appartenance collective',
              'Refuge dans le groupe',
              'Éviter la transformation',
            ],
          },
          {
            modifier: 'light',
            dir:   '↗ nœud nord · croissance',
            title: 'Scorpion\nMaison V',
            sub:   'direction · évolution',
            items: [
              'Expression singulière, hors du groupe',
              'Plonger dans sa profondeur et la montrer',
              'Faire confiance à ses obsessions',
              'Créer sans destination, pour soi d\'abord',
              'Accepter la vulnérabilité du dévoilement',
            ],
          },
        ],
        quote: '"Tu es déjà sur ton chemin de Nœud Nord — construire un espace numérique qui te ressemble, apprendre à coder pour être autonome dans ta création."',
      },
    ],
  },

  // ── 05 · PLANÈTES SUPPORT ───────────────────────────────────
  {
    id:      'section-05',
    alt:     false,
    eyebrow: '05 · planètes de structure',
    title:   'ce qui<br><em>soutient</em>',
    blocks: [
      { type: 'divider' },
      {
        type: 'support',
        cols: 3,
        cards: [
          {
            glyph:    '☿',
            planet:   'Mercure',
            position: 'Capricorne · Maison VI',
            role:     'Structure la matière brute émotionnelle. La rend communicable, rigoureuse, transmissible. La pensée est un outil de construction.',
          },
          {
            glyph:    '♂',
            planet:   'Mars',
            position: 'Vierge · Maison II',
            role:     'Exécute avec précision. Transforme l\'intention en action soignée. L\'énergie est minutieuse, jamais dispersée.',
          },
          {
            glyph:    '♄',
            planet:   'Saturne',
            position: 'Poissons · Maison VIII',
            role:     'Ralentit exprès. Creuse avant de montrer. Donne de la densité et de la durée à ce qui est créé.',
          },
        ],
      },
    ],
  },

];


// ============================================================
// RENDU — ne pas modifier en dessous
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

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

  // Sections
  SECTIONS.forEach(section => {
    const altClass    = section.alt ? ' scroll-section--alt' : '';
    const eyebrowHTML = section.eyebrow ? `<p class="section-eyebrow">${section.eyebrow}</p>` : '';
    const titleHTML   = section.title   ? `<h2 class="section-title">${section.title}</h2>`   : '';
    page.insertAdjacentHTML('beforeend', `
      <section class="scroll-section${altClass}" id="${section.id}">
        ${eyebrowHTML}
        ${titleHTML}
        ${section.blocks.map(renderBlock).join('')}
      </section>
    `);
  });

  // Nav
  nav.innerHTML = NAV_ITEMS.map((item, i) => `
    <a class="scroll-nav__item${i === 0 ? ' active' : ''}" href="#${item.id}">
      <span class="scroll-nav__label">${item.label}</span>
      <span class="scroll-nav__dot"></span>
    </a>
  `).join('');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      document.querySelectorAll('.scroll-nav__item').forEach(i => i.classList.remove('active'));
      const active = document.querySelector(`.scroll-nav__item[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  }, { threshold: 0.4 });

  document.querySelectorAll('.scroll-section').forEach(s => observer.observe(s));


  function renderBlock(block) {
    switch (block.type) {

      case 'divider':
        return `<div class="section-divider"></div>`;

      case 'text':
        return `<p style="font-family:var(--font-body);font-size:0.9rem;color:var(--c-text-muted);line-height:1.8;max-width:600px;margin-bottom:var(--gap-lg);">${block.content}</p>`;

      case 'dominantes':
        return `
          <div class="dominantes-grid">
            ${block.cards.map(c => `
              <div class="dominante-card">
                ${c.glyph ? `<span class="dominante-card__glyph">${c.glyph}</span>` : ''}
                ${c.label ? `<span class="dominante-card__label">${c.label}</span>` : ''}
                ${c.title ? `<span class="dominante-card__title">${c.title}</span>` : ''}
                ${c.desc  ? `<p class="dominante-card__desc">${c.desc}</p>` : ''}
              </div>
            `).join('')}
          </div>`;

      case 'support': {
        const cols = block.cols || 3;
        return `
          <div class="support-grid" style="grid-template-columns:repeat(${cols},1fr);">
            ${block.cards.map(c => `
              <div class="support-card">
                ${c.glyph    ? `<span class="support-card__glyph">${c.glyph}</span>` : ''}
                ${c.planet   ? `<span class="support-card__planet">${c.planet}</span>` : ''}
                ${c.position ? `<span class="support-card__position">${c.position}</span>` : ''}
                ${c.role     ? `<p class="support-card__role">${c.role}</p>` : ''}
              </div>
            `).join('')}
          </div>`;
      }

      case 'chips':
        return `
          <div class="chips-row">
            ${block.items.map(item => `
              <div class="chip">
                ${item.glyph ? `<span class="chip__glyph">${item.glyph}</span>` : ''}
                <span class="chip__name">${item.name}</span>
              </div>
            `).join('')}
          </div>`;

      case 'section-header':
        return `
          <div class="section-header">
            <h3 class="section-title" style="font-size:clamp(1.2rem,3vw,2rem);margin-bottom:0;">${block.title}</h3>
            ${block.badge ? `<span class="section-badge">${block.badge}</span>` : ''}
          </div>`;

      case 'quote':
        return `
          <div class="section-quote${block.rose ? ' section-quote--rose' : ''}">
            <p>${block.text}</p>
          </div>`;

      case 'split': {
        const splitBlocks = (block.blocks || []).map(b => `
          <div class="split-block">
            ${b.label ? `<span class="split-block__label">${b.label}</span><br>` : ''}
            ${b.title ? `<span class="split-block__title">${b.title.replace(/\n/g, '<br>')}</span>` : ''}
            ${b.text  ? `<p class="split-block__text">${b.text}</p>` : ''}
            ${b.list  ? `<ul class="split-block__list">${b.list.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('');
        const quoteHTML = block.quote ? `
          <div class="split-quote${block.quote.rose ? ' section-quote--rose' : ''}">
            <p>${block.quote.text}</p>
          </div>` : '';
        return `<div class="section-split">${splitBlocks}${quoteHTML}</div>`;
      }

      case 'contrast': {
        const contrastBlocks = (block.blocks || []).map(b => `
          <div class="contrast-block contrast-block--${b.modifier || 'light'}">
            ${b.dir   ? `<span class="contrast-block__dir">${b.dir}</span>` : ''}
            ${b.title ? `<span class="contrast-block__title">${b.title.replace(/\n/g, '<br>')}</span>` : ''}
            ${b.sub   ? `<span class="contrast-block__sub">${b.sub}</span>` : ''}
            ${b.items ? `<ul class="contrast-items">${b.items.map(i => `<li>${i}</li>`).join('')}</ul>` : ''}
          </div>
        `).join('');
        const quoteHTML = block.quote ? `
          <div class="section-quote"><p>${block.quote}</p></div>` : '';
        return `<div class="contrast-grid">${contrastBlocks}</div>${quoteHTML}`;
      }

      default:
        return '';
    }
  }

});
