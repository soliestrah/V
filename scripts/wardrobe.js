
// ============================================================
// WARDROBE.JS — guide de style
// Dépend de : style.css · section.css · scroll-section.css
// ============================================================

const PAGE = {
  title: 'antichambreV · guide de style',

  hero: {
    glyph:     '♀ · ♏ · ✦  ·  mystical minimalism',
    title:     'guide<br><em>de style</em>',
    dataLines: [
      'Doux en surface, profond dedans',
      'Jamais criant, toujours remarqué',
      'Une signature immédiatement reconnaissable',
    ],
    trio: [
      { label: 'esthétique', glyph: '✦', value: 'Dark Soft Girl'    },
      { label: 'cheveux',    glyph: '✦', value: 'Cherry Brown'      },
      { label: 'métal',      glyph: '✦', value: 'Argent uniquement' },
    ],
  },
};

const NAV_ITEMS = [
  { id: 'section-00', label: 'identité'    },
  { id: 'section-01', label: 'cheveux'     },
  { id: 'section-02', label: 'style'       },
  { id: 'section-03', label: 'bijoux'      },
  { id: 'section-04', label: 'références'  },
];

const SECTIONS = [

  // ── 01 · CHEVEUX ────────────────────────────────────────────
  {
    id:      'section-01',
    alt:     false,
    eyebrow: '01 · cheveux · couleur & soins',
    title:   'palette<br><em>capillaire</em>',
    blocks: [
      { type: 'divider' },

      {
        type: 'swatch-grid',
        cards: [
          {
            modifier:    'best',
            badge:       '★ meilleur choix',
            swatchClass: 'swatch--cherry',
            title:       'Cherry Brown · Dark Auburn',
            label:       'cherry brown · cool auburn · dark mahogany · burgundy brown',
            desc:        'Brun cerise avec reflets rouges froids. Profond, mystérieux. Fait ressortir les yeux noisette-vert. Les cheveux blancs se fondent naturellement. Parfait Vénus Scorpion.',
          },
          {
            modifier:    'alt',
            badge:       'option 2',
            swatchClass: 'swatch--cendre',
            title:       'Châtain Cendré Profond',
            label:       'ash brown · cool dark brown · smoky brunette',
            desc:        'Reflets froids et fumés. Fait exploser le vert des yeux. Les blancs deviennent des mèches claires naturellement intégrées.',
          },
          {
            modifier:    'alt',
            badge:       'option 3',
            swatchClass: 'swatch--balayage',
            title:       'Chocolat Balayage Froid',
            label:       'iced brunette · cool toffee · chocolate balayage',
            desc:        'Chaud mais pas agressif. Reflets caramel glacé. Transition la plus douce depuis l\'auburn cuivré actuel.',
          },
          {
            modifier:    'other',
            badge:       'si rester dans les roux',
            swatchClass: 'swatch--roux',
            title:       'Cool Reds · Bordeaux',
            label:       'cool red · burgundy · red mahogany · venetian red · dark cherry',
            desc:        'Profond, tire vers le bordeaux. À éviter : copper orange · bright ginger · strawberry blonde.',
          },
        ],
      },

      {
        type:    'text',
        content: 'entretien · rituel capillaire',
      },
      {
        type: 'support',
        cols: 4,
        cards: [
          {
            glyph:  '○',
            planet: 'Masque hebdomadaire',
            role:   'Huile de camélia ou coco 1×/semaine pour l\'éclat et la brillance des longs.',
          },
          {
            glyph:  '○',
            planet: 'Shampooing',
            role:   'Sans sulfates — préserve la couleur et la brillance sur les longueurs.',
          },
          {
            glyph:  '○',
            planet: 'Coupe',
            role:   'Pointes taillées tous les 3 mois — évite l\'effet effiloché sur les très longs.',
          },
          {
            glyph:  '○',
            planet: 'Volume & tombé',
            role:   'Légère désépaisseur sur les longueurs pour un tombé plus satiné et fluide.',
          },
        ],
      },
    ],
  },

  // ── 02 · STYLE ──────────────────────────────────────────────
  {
    id:      'section-02',
    alt:     true,
    eyebrow: '02 · style & garde-robe',
    title:   'esthétique<br><em>signature</em>',
    blocks: [
      { type: 'divider' },

      {
        type: 'dominantes',
        cards: [
          {
            glyph: 'I',
            label: 'Lune + Pluton Scorpion',
            title: 'Dark Academia adoucie',
            desc:  'Profondeur intellectuelle, matières riches, bibliothèque secrète. La version humaine et sensible.',
          },
          {
            glyph: 'II',
            label: 'Capricorne × Cancer',
            title: 'Quiet Luxury organique',
            desc:  'Lin, maille, soie mate. La qualité comme langage silencieux. Le Capricorne qui s\'humanise avec Cancer.',
          },
          {
            glyph: 'III',
            label: 'Vénus Scorpion',
            title: 'Romantic Minimalism',
            desc:  'Féminité romantique sans excès. La retenue qui rend mystérieux. Le détail qui transforme tout.',
          },
        ],
      },

      {
        type:  'section-header',
        title: 'garde-robe<br><em>capsule</em>',
        badge: 'pièces signatures',
      },

      {
        type: 'capsule-grid',
        cards: [
          { tag: 'base intemporelle',      title: 'T-shirt blanc ou crème premium',  desc: 'Coton épais, légèrement oversize. La qualité se voit et se sent.' },
          { tag: 'signature quotidienne',  title: 'Jean brut taille haute',           desc: 'Coupe droite ou légèrement évasée. Mars Vierge aime la précision.' },
          { tag: 'touche Cancer',          title: 'Pull maille sauge ou stone',       desc: 'Doux, enveloppant. Les tons terreux réchauffent l\'ASC Cancer.' },
          { tag: 'Vénus Scorpion',         title: 'Chemise soie bordeaux ou blush',   desc: 'Fluide, ouverte sur un basique. Le détail qui transforme l\'ensemble.' },
          { tag: 'pièce de pouvoir',       title: 'Blazer oversize camel ou encre',   desc: 'Jeté sur les épaules ou porté. Structure tout sans effort apparent.' },
          { tag: 'couleur bureau',         title: 'Pantalon tailleur terracotta',     desc: 'Avec t-shirt blanc = parfait bureau. Chaleur sans excès.' },
          { tag: 'uniforme Scorpion',      title: 'Col roulé noir fin',               desc: 'Soie ou laine fine. Élégance sans effort, mystère immédiat.' },
        ],
      },

      {
        type: 'chips',
        items: [
          { name: 'soie mate'    },
          { name: 'maille fine'  },
          { name: 'denim brut'   },
          { name: 'velours'      },
          { name: 'lin texturé'  },
          { name: 'cachemire'    },
          { name: 'cuir mat'     },
        ],
      },
    ],
  },

  // ── 03 · BIJOUX ─────────────────────────────────────────────
  {
    id:      'section-03',
    alt:     false,
    eyebrow: '03 · bijoux · argent uniquement',
    title:   'pièces<br><em>signatures</em>',
    blocks: [
      { type: 'divider' },

      {
        type: 'dominantes',
        cards: [
          {
            glyph: '◇',
            label: 'ASC Cancer · Lune',
            title: 'Chaîne ras de cou · étoile strass',
            desc:  'L\'étoile parle à l\'ASC Cancer, signe lunaire. Éclat discret, présence immédiate.',
          },
          {
            glyph: '◇',
            label: 'Lune Scorpion · ASC Cancer',
            title: 'Pendentif labradorite · amazonite',
            desc:  'Pierres de protection et d\'intuition. Portées instinctivement — le corps sait toujours.',
          },
          {
            glyph: '◇',
            label: 'Capricorne · Cancer',
            title: 'Casio rose gold + chaîne plate argent',
            desc:  'Le mélange casual-précieux. Exactement l\'énergie Capricorne/Cancer.',
          },
          {
            glyph: '◇',
            label: 'Scorpion',
            title: 'Van Dinh · cordon noir',
            desc:  'La touche Scorpion. Le cordon noir est l\'ancre, le côté sombre assumé.',
          },
          {
            glyph: '◇',
            label: 'Jupiter Sagittaire · Maison V',
            title: 'Kenzo tête de tigre',
            desc:  'Puissance, audace, expansion. Jupiter dans sa maison natale.',
          },
          {
            glyph: '◇',
            label: 'Scorpion · Mars Vierge · Vénus Scorpion',
            title: 'Onyx · clou épais · bague bordeaux',
            desc:  'Protection, précision, profondeur. Un triptyque de pouvoir.',
          },
        ],
      },

      {
        type:    'text',
        title: 'pierres à explorer · résonances astrologiques',
      },
      {
        type: 'support',
        cols: 5,
        cards: [
          {
            glyph:    '●',
            planet:   'Labradorite',
            position: 'Cancer · Scorpion',
            role:     'Intuition, protection des énergies. La pierre des voyages intérieurs.',
          },
          {
            glyph:    '●',
            planet:   'Amazonite',
            position: 'Cancer',
            role:     'Équilibre émotionnel, apaisement. Idéale pour l\'ASC Cancer.',
          },
          {
            glyph:    '●',
            planet:   'Obsidienne',
            position: 'Scorpion · Pluton',
            role:     'Ancrage, transformation profonde. La pierre miroir du Scorpion.',
          },
          {
            glyph:    '●',
            planet:   'Grenat sombre',
            position: 'Vénus Scorpion',
            role:     'Passion, profondeur, désir. La fréquence exacte de Vénus en Scorpion.',
          },
          {
            glyph:    '●',
            planet:   'Pierre de lune',
            position: 'Lune Scorpion · ASC Cancer',
            role:     'Intuition lunaire, cycles, sensibilité. Double énergie lunaire.',
          },
        ],
      },
    ],
  },

  // ── 04 · RÉFÉRENCES ─────────────────────────────────────────
  {
    id:      'section-04',
    alt:     true,
    eyebrow: '04 · références & inspirations',
    title:   'constellation<br><em>d\'influences</em>',
    blocks: [
      { type: 'divider' },

      {
        type: 'split',
        blocks: [
          {
            label: 'style icons',
            list: [
              'Sofia Coppola',
              'Sade',
              'Noémie Merlant',
              'Léa Seydoux',
              'Anjelica Huston',
            ],
          },
          {
            label: 'marques · univers',
            list: [
              'Totême',
              'Sézane',
              'APC',
              'The Row',
              'Ba&sh — pièces sobres uniquement',
              'Saint Laurent',
            ],
          },
        ],
        quote: null,
      },

      {
        type: 'chips',
        items: [
          { name: 'dark feminine minimalist'           },
          { name: 'soft dark aesthetic'                },
          { name: 'romantic dark academia minimal'     },
          { name: 'quiet luxury organic'               },
          { name: 'cool toned brunette pale skin'      },
          { name: 'dark auburn hazel eyes'             },
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

      case 'swatch-grid':
        return `
          <div class="swatch-grid">
            ${block.cards.map(c => `
              <div class="swatch-card swatch-card--${c.modifier || 'alt'}">
                ${c.badge       ? `<span class="swatch-card__badge">${c.badge}</span>` : ''}
                ${c.swatchClass ? `<div class="swatch-bar ${c.swatchClass}"></div>` : ''}
                ${c.title       ? `<span class="dominante-card__title">${c.title}</span>` : ''}
                ${c.label       ? `<span class="dominante-card__label">${c.label}</span>` : ''}
                ${c.desc        ? `<p class="dominante-card__desc">${c.desc}</p>` : ''}
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
