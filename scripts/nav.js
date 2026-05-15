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
          <li class="nav__item"><a href="garden.html"><span class="nav__index">01</span>jardin</a></li>
          <li class="nav__item"><a href="recettes.html"><span class="nav__index">02</span>recettes</a></li>
          <li class="nav__item"><a href="convoitises.html"><span class="nav__index">03</span>convoitises</a></li>
          <li class="nav__item"><a href="atelier.html"><span class="nav__index">04</span>atelier</a></li>
          <li class="nav__item"><a href="medecin.html"><span class="nav__index">05</span>medecin</a></li>
          <li class="nav__item"><a href="astral.html"><span class="nav__index">06</span>astrologie</a></li>
          <li class="nav__item"><a href="wardrobe.html"><span class="nav__index">07</span>wardrobe</a></li>
          <li class="nav__item"><a href="wishlist.html"><span class="nav__index">08</span>wishlist</a></li>
          <li class="nav__item"><a href="wardrobecpasule.html"><span class="nav__index">09</span>la capsule</a></li>
          <li class="nav__item"><a href="charte.html"><span class="nav__index">10</span>charte</a></li></ul>
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
  const current = window.location.peathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav__item a').forEach(a => {
    if (a.getAttribute('href') === current) {
      a.classList.add('active');
      a.setAttribute('aria-current', 'page');
    }
  });

});
