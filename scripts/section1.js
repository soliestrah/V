
    // ============================================================
    // FILTRE MULTI-GROUPES
    // Logique : chaque groupe a son filtre actif indépendamment.
    // Une carte est visible si elle correspond à TOUS les groupes actifs.
    // ============================================================

    const grid    = document.getElementById('grid');
    const empty   = document.getElementById('empty');
    const counter = document.querySelector('.js-count');
    const cards   = Array.from(grid.querySelectorAll('.card'));

    // État des filtres : { "1": "all", "2": "all", ... }
    const activeFilters = {};

    // Initialiser depuis les boutons actifs au chargement
    document.querySelectorAll('.filter-tag.active').forEach(btn => {
      activeFilters[btn.dataset.group] = btn.dataset.filter;
    });

    function applyFilters() {
      let visible = 0;

      cards.forEach(card => {
        const tags = card.dataset.tags ? card.dataset.tags.split(' ') : [];

        // La carte doit passer tous les groupes
        const passes = Object.entries(activeFilters).every(([group, filter]) => {
          return filter === 'all' || tags.includes(filter);
        });

        card.classList.toggle('hidden', !passes);
        if (passes) visible++;
      });

      counter.textContent = visible;
      empty.classList.toggle('visible', visible === 0);
    }

    // Écouteurs sur tous les boutons filtre
    document.querySelectorAll('.filter-tag').forEach(btn => {
      btn.addEventListener('click', () => {
        const group = btn.dataset.group;

        // Désactiver tous les boutons du même groupe
        document.querySelectorAll(`.filter-tag[data-group="${group}"]`).forEach(b => {
          b.classList.remove('active');
        });

        // Activer le bouton cliqué
        btn.classList.add('active');
        activeFilters[group] = btn.dataset.filter;

        applyFilters();
      });
    });

    // Initialiser le compteur
    applyFilters();
