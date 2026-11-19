/** Mappy: retorno acessivel ao topo da landing page. */
(function () {
  'use strict';
  const button = document.getElementById('mappy-back-to-top');
  if (!button) return;
  function updateVisibility() {
    const visible = window.scrollY > 320;
    button.classList.toggle('is-visible', visible);
    button.tabIndex = visible ? 0 : -1;
  }
  button.addEventListener('click', function () {
    const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    window.scrollTo({ top: 0, behavior: reducedMotion ? 'instant' : 'smooth' });
  });
  window.addEventListener('scroll', updateVisibility, { passive: true });
  updateVisibility();
})();
