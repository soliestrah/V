document.addEventListener('DOMContentLoaded', () => {

  const nav = `
    <aside class="sidebar" role="navigation" aria-label="Navigation principale">

      <div class="sidebar__identity">
        <h1 class="sidebar__title"><a href="index.html">antichambre<span>V</span></a></h1>
        <p class="sidebar__subtitle">soliestrah</p>
        <div class="sidebar__divider"></div>
      </div>

      <nav>
        <p class="nav__label">navigation</p>
        <ul class="nav__list">
          <li class="nav__item"><a href="index.html"><span class="nav__index">00</span>accueil</a></li>
          <li class="nav__item"><a href="atelier.html"><span class="nav__index">01</span>atelier</a></li>
          <li class="nav__item"><a href="garden.html"><span class="nav__index">02</span>jardin</a></li>
          <li class="nav__item"><a href="recettes.html"><span class="nav__index">03</span>recettes</a></li>
          <li class="nav__item"><a href="medecin.html"><span class="nav__index">04</span>medecin</a></li>
          <li class="nav__item"><a href="charte.html"><span class="nav__index">05</span>charte</a></li>
          <li class="nav__item"><a href="wishlist.html"><span class="nav__index">06</span>wishlist</a></li></ul>
       </nav>

      <footer class="sidebar__footer">
        <p class="sidebar__sign">
          <a href="https://minljiva.github.io/MINLJIVA/index.html" target="_blank" rel="noopener">☽ minljiva</a>
        <a href="https://minljiva.github.io/iceolie/" target="_blank" rel="noopener">☉ iceolie</a>
       </p>
      </footer>

    </aside>
  `;

  // Injection dans le layout
  const layout = document.querySelector('.layout');
  if (layout) layout.insertAdjacentHTML('afterbegin', nav);

  // Détection automatique du lien actif
  const current = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__item a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

});
