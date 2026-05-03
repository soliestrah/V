// ============================================================
// TEMPLATE 2 — PAGES À SECTIONS SCROLLABLES
// Dépend de : style.css · section.css · scroll-section.css
//
// CONFIGURATION : tout modifier ici, ne pas toucher au HTML.
// Pour chaque page (astral, wardrobe, etc.) :
//   1. Renseigner PAGE (titre, eyebrow, trio du hero)
//   2. Renseigner SECTIONS (tableau de sections)
//   3. Renseigner NAV_ITEMS (labels de la nav latérale)
// ============================================================


// ── PAGE : métadonnées globales ──────────────────────────────

const PAGE = {
  title:        'antichambreV · [nom de la page]',

  // Hero (section-00)
  hero: {
    glyph:    '✦ · ✦ · ✦  ·  [sous-titre glyph]',
    title:    '[Titre]',          // supporte <em>italique</em>
    dataLines: [
      'Première ligne de données',
      'Deuxième ligne de données',
      'Troisième ligne de données',
    ],
    trio: [
      { label: 'label 1', glyph: '✦', value: 'valeur 1' },
      { label: 'label 2', glyph: '✦', value: 'valeur 2' },
      { label: 'label 3', glyph: '✦', value: 'valeur 3' },
    ],
  },
};


// ── NAV LATÉRALE ─────────────────────────────────────────────
// Doit correspondre dans l'ordre aux sections ci-dessous.
// section-00 est toujours le hero.

const NAV_ITEMS = [
  { id: 'section-00', label: 'identité' },
  { id: 'section-01', label: 'section 1' },
  { id: 'section-02', label: 'section 2' },
  { id: 'section-03', label: 'section 3' },
];


// ── SECTIONS ─────────────────────────────────────────────────
//
// Chaque section est un objet avec :
//   id          : identifiant unique (doit correspondre à NAV_ITEMS)
//   alt         : true = fond var(--c-bg-2), false = fond par défaut
//   eyebrow     : petit texte en haut (optionnel)
//   title       : titre principal (supporte <em>)
//   blocks      : tableau de blocs de contenu (voir types ci-dessous)
//
// ── TYPES DE BLOCS ───────────────────────────────────────────
//
//  { type: 'divider' }
//    → Trait horizontal prune
//
//  { type: 'text', content: '...' }
//    → Paragraphe simple (couleur text-muted, max 600px)
//
//  { type: 'dominantes', cards: [ { glyph, label, title, desc } ] }
//    → Grille de cartes avec barre latérale prune au hover
//
//  { type: 'support', cols: 3, cards: [ { glyph, planet, position, role } ] }
//    → Grille de cartes bleues (cols : nombre de colonnes, défaut 3)
//
//  { type: 'chips', items: [ { glyph, name } ] }
//    → Rangée de chips (glyph optionnel)
//
//  { type: 'swatch-grid', cards: [ { modifier, badge, swatchClass, title, label, desc } ] }
//    → Grille de couleurs avec barre colorée
//    → modifier : 'best' | 'alt' | 'other'
//
//  { type: 'capsule-grid', cards: [ { tag, title, desc } ] }
//    → Grille de cartes simples (garde-robe, listes de pièces…)
//
//  { type: 'split', blocks: [ splitBlock ], quote: { text, rose } }
//    → 2 colonnes + citation full-width optionnelle
//    → splitBlock : { label, title, text, list: ['…'] }
//
//  { type: 'contrast', blocks: [ contrastBlock ], quote }
//    → 2 colonnes contrastées (nœud nord, dualités)
//    → contrastBlock : { modifier ('dim'|'light'), dir, title, sub, items: ['…'] }
//
//  { type: 'section-header', title, badge }
//    → Titre + badge côte à côte
//
//  { type: 'quote', text, rose }
//    → Citation seule (rose: true = bord rose)
//
// ─────────────────────────────────────────────────────────────

const SECTIONS = [

  // ── SECTION 01 ──────────────────────────────────────────────
  {
    id:      'section-01',
    alt:     false,
    eyebrow: '01 · titre de section',
    title:   'sous-<br><em>titre</em>',
    blocks: [

      { type: 'divider' },

      {
        type: 'dominantes',
        cards: [
          {
            glyph: '♏',
            label: 'sous-label',
            title: 'Titre de la carte',
            desc:  'Description de la carte.',
          },
          {
            glyph: '🜄',
            label: 'sous-label',
            title: 'Deuxième carte',
            desc:  'Description.',
          },
        ],
      },

      {
        type:  'text',
        content: 'Un paragraphe de texte libre associé à cette section.',
      },

    ],
  },

  // ── SECTION 02 ──────────────────────────────────────────────
  {
    id:      'section-02',
    alt:     true,
    eyebrow: '02 · deuxième section',
    title:   'titre<br><em>section 2</em>',
    blocks: [

      {
        type:  'section-header',
        title: 'sous-section<br><em>capsule</em>',
        badge: '★ pièce signature',
      },

      {
        type: 'chips',
        items: [
          { glyph: '☽', name: 'Chip 1' },
          { glyph: '♀', name: 'Chip 2' },
          { name: 'Chip sans glyph' },
        ],
      },

      {
        type: 'quote',
        text: 'Une citation ou une note importante pour cette section.',
      },

      {
        type: 'support',
        cols: 3,
        cards: [
          { glyph: '☿', planet: 'Titre carte', position: 'Sous-titre · Position', role: 'Rôle ou description.' },
          { glyph: '♂', planet: 'Titre carte', position: 'Sous-titre · Position', role: 'Rôle ou description.' },
          { glyph: '♄', planet: 'Titre carte', position: 'Sous-titre · Position', role: 'Rôle ou description.' },
        ],
      },

    ],
  },

  // ── SECTION 03 ──────────────────────────────────────────────
  {
    id:      'section-03',
    alt:     false,
    eyebrow: '03 · troisième section',
    title:   'titre<br><em>section 3</em>',
    blocks: [

      {
        type: 'split',
        blocks: [
          {
            label: 'colonne gauche',
            title: 'titre\ngauche',
            text:  'Texte descriptif de la colonne gauche.',
            list:  [
              'Premier point de la liste',
              'Deuxième point de la liste',
              'Troisième point',
            ],
          },
          {
            label: 'colonne droite',
            title: 'titre\ndroit',
            list:  [
              'Premier point',
              'Deuxième point',
            ],
          },
        ],
        quote: {
          text: 'Une citation en pleine largeur sous les deux colonnes.',
          rose: true,
        },
      },

    ],
  },

];


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
