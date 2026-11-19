/**
 * Mappy | Header com identidade visual permanente.
 * Mantem o header preto e o logotipo branco em todos os estados.
 * Nao alterna imagens, classes ou estilos durante a rolagem.
 */
(function () {
  'use strict';

  function initializeHeader() {
    const header = document.querySelector('.header');
    if (!header) return;

    header.classList.remove('header-on-light');
    const logo = header.querySelector('img.logo');
    if (logo) {
      const whiteLogo = 'assets/images/happyhouse-logo.png';
      if (logo.getAttribute('src') !== whiteLogo) {
        logo.setAttribute('src', whiteLogo);
      }
    }
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeHeader, { once: true });
  } else {
    initializeHeader();
  }
})();
