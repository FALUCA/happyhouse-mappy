/** Mappy Analytics: visualizacoes e cliques de contato. */
(() => {
  const endpoint = 'analytics/event.php';
  function track(type) {
    const data = JSON.stringify({ type });
    if (navigator.sendBeacon) {
      const blob = new Blob([data], { type: 'application/json' });
      if (navigator.sendBeacon(endpoint, blob)) return;
    }
    fetch(endpoint, { method: 'POST', headers: { 'Content-Type': 'application/json' }, body: data, keepalive: true, credentials: 'same-origin' }).catch(() => {});
  }
  track('pageview');
  document.addEventListener('click', (event) => {
    const anchor = event.target.closest('a[href]');
    if (!anchor) return;
    const href = anchor.getAttribute('href') || '';
    if (/^https?:\/\/(?:www\.)?(?:wa\.me|api\.whatsapp\.com)\//i.test(href)) track('whatsapp');
    else if (/^mailto:/i.test(href)) track('email');
  }, { capture: true });
})();
