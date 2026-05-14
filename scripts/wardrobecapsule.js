// ============================================================
// TEMPLATE 2 — WARDROBE CAPSULE PERSONNELLE
// ============================================================

const PAGE = {
  title: 'antichambreV · wardrobe capsule',

  hero: {
    glyph: '☽ · ♄ · 🜄 · dark soft feminine',
    title: 'capsule<br><em>wardrobe</em>',
    dataLines: [
      'élégance texturée · féminité profonde · minimalisme organique',
      'palette : moka · noir fumé · crème · sauge · prune',
      'objectif : construire une garde-robe cohérente, émotionnelle et durable',
    ],
    trio: [
      { label: 'style', glyph: '✦', value: 'dark soft feminine' },
      { label: 'énergie', glyph: '☽', value: 'artistique & magnétique' },
      { label: 'capsule', glyph: '♄', value: '45 pièces environ' },
    ],
  },
};


const NAV_ITEMS = [
  { id: 'section-00', label: 'identité' },
  { id: 'section-01', label: 'essence' },
  { id: 'section-02', label: 'palette' },
  { id: 'section-03', label: 'capsule' },
  { id: 'section-04', label: 'timeline' },
  { id: 'section-05', label: 'shopping' },
];


const SECTIONS = [

  // ── SECTION 01 ──────────────────────────────────────────────
  {
    id: 'section-01',
    alt: false,
    eyebrow: '01 · identité stylistique',
    title: 'dark soft<br><em>feminine</em>',
    blocks: [

      { type: 'divider' },

      {
        type: 'dominantes',
        cards: [
          {
            glyph: '☽',
            label: 'ascendant cancer',
            title: 'féminité lunaire',
            desc: 'Matières enveloppantes, silhouettes douces, élégance émotionnelle et présence rassurante.',
          },
          {
            glyph: '♄',
            label: 'soleil capricorne',
            title: 'structure silencieuse',
            desc: 'Pièces intemporelles, tailoring fluide, sophistication discrète et qualité durable.',
          },
          {
            glyph: '♏',
            label: 'lune scorpion',
            title: 'magnétisme profond',
            desc: 'Textures riches, contrastes sombres, sensualité calme et esthétique cinématographique.',
          },
        ],
      },

      {
        type: 'text',
        content: 'Le style idéal mélange élégance française, minimalisme organique, féminité profonde et détails artistiques. La garde-robe doit être cohérente mais jamais froide. L’objectif n’est pas de suivre les tendances mais de construire une présence visuelle stable et émotionnelle.',
      },

    ],
  },


  // ── SECTION 02 ──────────────────────────────────────────────
  {
    id: 'section-02',
    alt: true,
    eyebrow: '02 · palette & textures',
    title: 'univers<br><em>visuel</em>',
    blocks: [

      {
        type: 'section-header',
        title: 'palette<br><em>principale</em>',
        badge: '✦ base capsule',
      },

      {
        type: 'chips',
        items: [
          { glyph: '⬤', name: 'noir fumé' },
          { glyph: '⬤', name: 'moka' },
          { glyph: '⬤', name: 'taupe' },
          { glyph: '⬤', name: 'crème chaud' },
          { glyph: '⬤', name: 'gris pierre' },
          { glyph: '⬤', name: 'vert sauge' },
          { glyph: '⬤', name: 'prune fumé' },
          { glyph: '⬤', name: 'bleu glacier' },
        ],
      },

      {
        type: 'quote',
        text: 'Le style doit donner une sensation avant de donner une impression.',
        rose: true,
      },

      {
        type: 'support',
        cols: 3,
        cards: [
          {
            glyph: '🜄',
            planet: 'matières',
            position: 'textures vivantes',
            role: 'Laine douce, maille dense, satin mat, coton lourd, cuir patiné, cachemire.',
          },
          {
            glyph: '✦',
            planet: 'silhouettes',
            position: 'fluidité structurée',
            role: 'Pantalons fluides, manteaux longs, chemises oversize, robes midi, monochromes.',
          },
          {
            glyph: '☾',
            planet: 'détails',
            position: 'présence émotionnelle',
            role: 'Bijoux organiques, textures superposées, sacs architecturaux, contrastes doux.',
          },
        ],
      },

    ],
  },


  // ── SECTION 03 ──────────────────────────────────────────────
  {
    id: 'section-03',
    alt: false,
    eyebrow: '03 · structure capsule',
    title: 'garde-robe<br><em>idéale</em>',
    blocks: [

      {
        type: 'capsule-grid',
        cards: [
          {
            tag: 'hauts',
            title: '12 à 15 pièces',
            desc: 'Tops neutres, chemises fluides, grosses mailles, cardigans, t-shirts premium.',
          },
          {
            tag: 'bas',
            title: '6 à 8 pièces',
            desc: 'Jeans droits, pantalons fluides, jupes midi, shorts structurés.',
          },
          {
            tag: 'robes',
            title: '3 à 5 pièces',
            desc: 'Robes noires midi, robes fluides, silhouettes simples mais dramatiques.',
          },
          {
            tag: 'vestes',
            title: '5 à 7 pièces',
            desc: 'Manteaux longs, blazers souples, trenchs, vestes texturées.',
          },
          {
            tag: 'chaussures',
            title: '4 à 6 paires',
            desc: 'Bottines, mocassins, baskets propres, sandales minimalistes.',
          },
          {
            tag: 'accessoires',
            title: 'pièces signature',
            desc: 'Bijoux argent vieilli, sacs structurés, ceintures, lunettes, foulards.',
          },
        ],
      },

      {
        type: 'text',
        content: 'Une capsule réussie fonctionne quand 80% des pièces vont ensemble naturellement. Chaque vêtement doit pouvoir créer au moins trois vraies tenues.',
      },

    ],
  },


  // ── SECTION 04 ──────────────────────────────────────────────
  {
    id: 'section-04',
    alt: true,
    eyebrow: '04 · timeline de création',
    title: 'construction<br><em>progressive</em>',
    blocks: [

      {
        type: 'split',
        blocks: [
          {
            label: 'phase 01',
            title: 'observer\net trier',
            text: 'Comprendre les silhouettes naturelles, photographier les tenues préférées et identifier les pièces réellement portées.',
            list: [
              'Créer un dossier inspiration',
              'Faire 4 piles : garder / modifier / vendre / non',
              'Identifier les catégories de vie réelles',
              'Observer les couleurs et textures récurrentes',
            ],
          },
          {
            label: 'phase 02',
            title: 'construire\nla base',
            text: 'Acheter lentement les fondations avant les pièces émotionnelles.',
            list: [
              'Manteau long signature',
              'Pantalon fluide parfait',
              'Jean droit intemporel',
              'Chaussures piliers',
              'Mailles et hauts de liaison',
            ],
          },
        ],
        quote: {
          text: 'La capsule parfaite ne se crée pas en un week-end. Elle se construit comme un univers personnel.',
          rose: true,
        },
      },

    ],
  },


  // ── SECTION 05 ──────────────────────────────────────────────
  {
    id: 'section-05',
    alt: false,
    eyebrow: '05 · shopping & inspirations',
    title: 'où construire<br><em>la capsule</em>',
    blocks: [

      {
        type: 'contrast',
        blocks: [
          {
            modifier: 'light',
            dir: 'left',
            title: 'fondations',
            sub: 'minimalisme texturé',
            items: [
              'Sézane',
              'A.P.C.',
              'COS',
              'Massimo Dutti',
              'Lemaire',
            ],
          },
          {
            modifier: 'dim',
            dir: 'right',
            title: 'pièces âme',
            sub: 'féminité artistique',
            items: [
              'Rouje',
              'Gaâla Paris',
              'Musier Paris',
              'Free People',
              'Imparfaite Paris',
            ],
          },
        ],
        quote: {
          text: 'Acheter moins, mais acheter des pièces qui créent une sensation émotionnelle forte.',
          rose: false,
        },
      },

    ],
  },

];
```

// ============================================================
// RENDU — ne pas modifier en dessous sauf si tu sais ce que tu fais
// ============================================================

document.addEventListener('DOMContentLoaded', () => {

  document.title = PAGE.title;

  const page = document.getElementById('scroll-page');
  const nav  = document.getElementById('scroll-nav');

  // ── Hero ────────────────────────────────────────────────────
  const heroHTML = `
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
  `;
  page.insertAdjacentHTML('beforeend', heroHTML);

  // ── Sections ────────────────────────────────────────────────
  SECTIONS.forEach(section => {
    const inner = section.blocks.map(renderBlock).join('');
    const altClass = section.alt ? ' scroll-section--alt' : '';
    const titleHTML = section.title
      ? `<h2 class="section-title">${section.title}</h2>`
      : '';
    const eyebrowHTML = section.eyebrow
      ? `<p class="section-eyebrow">${section.eyebrow}</p>`
      : '';

    page.insertAdjacentHTML('beforeend', `
      <section class="scroll-section${altClass}" id="${section.id}">
        ${eyebrowHTML}
        ${titleHTML}
        ${inner}
      </section>
    `);
  });

  // ── Nav latérale ────────────────────────────────────────────
  nav.innerHTML = NAV_ITEMS.map((item, i) => `
    <a class="scroll-nav__item${i === 0 ? ' active' : ''}" href="#${item.id}">
      <span class="scroll-nav__label">${item.label}</span>
      <span class="scroll-nav__dot"></span>
    </a>
  `).join('');

  // IntersectionObserver pour l'état actif
  const allSections = document.querySelectorAll('.scroll-section');
  const navItems    = document.querySelectorAll('.scroll-nav__item');

  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      navItems.forEach(item => item.classList.remove('active'));
      const active = document.querySelector(`.scroll-nav__item[href="#${entry.target.id}"]`);
      if (active) active.classList.add('active');
    });
  }, { threshold: 0.4 });

  allSections.forEach(s => observer.observe(s));


  // ── Moteur de rendu ─────────────────────────────────────────

  function renderBlock(block) {
    switch (block.type) {

      case 'divider':
        return `<div class="section-divider"></div>`;

      case 'text':
        return `
          <p style="font-family: var(--font-body); font-size: 0.9rem; color: var(--c-text-muted); line-height: 1.8; max-width: 600px; margin-bottom: var(--gap-lg);">
            ${block.content}
          </p>`;

      case 'dominantes':
        return `
          <div class="dominantes-grid">
            ${block.cards.map(c => `
              <div class="dominante-card">
                ${c.glyph  ? `<span class="dominante-card__glyph">${c.glyph}</span>` : ''}
                ${c.label  ? `<span class="dominante-card__label">${c.label}</span>` : ''}
                ${c.title  ? `<span class="dominante-card__title">${c.title}</span>` : ''}
                ${c.desc   ? `<p class="dominante-card__desc">${c.desc}</p>` : ''}
              </div>
            `).join('')}
          </div>`;

      case 'support': {
        const cols = block.cols || 3;
        return `
          <div class="support-grid" style="grid-template-columns: repeat(${cols}, 1fr);">
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

      case 'swatch-grid':
        return `
          <div class="swatch-grid">
            ${block.cards.map(c => `
              <div class="swatch-card swatch-card--${c.modifier || 'alt'}">
                ${c.badge ? `<span class="swatch-card__badge">${c.badge}</span>` : ''}
                ${c.swatchClass ? `<div class="swatch-bar ${c.swatchClass}"></div>` : ''}
                ${c.title ? `<span class="dominante-card__title">${c.title}</span>` : ''}
                ${c.label ? `<span class="dominante-card__label">${c.label}</span>` : ''}
                ${c.desc  ? `<p class="dominante-card__desc">${c.desc}</p>` : ''}
              </div>
            `).join('')}
          </div>`;

      case 'capsule-grid':
        return `
          <div class="capsule-grid">
            ${block.cards.map(c => `
              <div class="card">
                ${c.tag   ? `<div class="card__tags"><span class="card__tag">${c.tag}</span></div>` : ''}
                ${c.title ? `<p class="card__title">${c.title}</p>` : ''}
                ${c.desc  ? `<p class="card__desc">${c.desc}</p>` : ''}
              </div>
            `).join('')}
          </div>`;

      case 'section-header':
        return `
          <div class="section-header">
            <h3 class="section-title" style="font-size: clamp(1.2rem, 3vw, 2rem); margin-bottom: 0;">${block.title}</h3>
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
            ${b.list  ? `
              <ul class="split-block__list">
                ${b.list.map(item => `<li>${item}</li>`).join('')}
              </ul>` : ''}
          </div>
        `).join('');

        const quoteHTML = block.quote ? `
          <div class="split-quote${block.quote.rose ? ' section-quote--rose' : ''}">
            <p>${block.quote.text}</p>
          </div>` : '';

        return `
          <div class="section-split">
            ${splitBlocks}
            ${quoteHTML}
          </div>`;
      }

      case 'contrast': {
        const contrastBlocks = (block.blocks || []).map(b => `
          <div class="contrast-block contrast-block--${b.modifier || 'light'}">
            ${b.dir   ? `<span class="contrast-block__dir">${b.dir}</span>` : ''}
            ${b.title ? `<span class="contrast-block__title">${b.title}</span>` : ''}
            ${b.sub   ? `<span class="contrast-block__sub">${b.sub}</span>` : ''}
            ${b.items ? `
              <ul class="contrast-items">
                ${b.items.map(item => `<li>${item}</li>`).join('')}
              </ul>` : ''}
          </div>
        `).join('');

        const quoteHTML = block.quote ? `
          <div class="section-quote">
            <p>${block.quote}</p>
          </div>` : '';

        return `
          <div class="contrast-grid">
            ${contrastBlocks}
          </div>
          ${quoteHTML}`;
      }

      default:
        return '';
    }
  }

});
