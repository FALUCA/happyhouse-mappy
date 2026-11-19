/** FAQs do Mappy: accordions acessiveis sem dependencias externas. */
(function () {
  'use strict';
  const answers = [
    'Não. As respostas das inteligências artificiais variam conforme a ferramenta, a pergunta e as fontes disponíveis. O Mappy identifica oportunidades para fortalecer a presença pública da marca empregadora, sem garantir recomendações.',
    'As ferramentas analisadas são definidas conforme o escopo contratado e a relevância para os públicos que sua empresa deseja atrair.',
    'Não. O Mappy pode partir das informações e evidências que a empresa já possui, mesmo sem uma proposta de valor ao empregado (EVP) formalizada.',
    'Não. O trabalho nas redes sociais continua relevante. O Mappy complementa essa atuação ao avaliar como as informações da marca empregadora aparecem nas respostas das IAs.',
    'Sim. A adaptação e a produção de conteúdos podem fazer parte do trabalho, conforme o escopo contratado.',
    'O acompanhamento avalia a presença da marca empregadora nas respostas das IAs ao longo do tempo, conforme a modalidade contratada.',
    'O prazo depende do escopo, da quantidade de perguntas e ferramentas analisadas e da disponibilidade das informações. A equipe HappyHouse pode apresentar uma estimativa na proposta.'
  ];
  const root = document.querySelector('#faq');
  if (!root) return;
  const buttons = Array.from(root.querySelectorAll('button[aria-expanded]'));
  buttons.forEach((button, index) => {
    const group = button.closest('div.border-b[data-orientation="vertical"]');
    const panel = group && group.querySelector('[role="region"]');
    if (!group || !panel) return;
    panel.textContent = answers[index] || '';
    panel.style.padding = '0 0 18px';
    panel.style.lineHeight = '1.7';
    panel.style.fontSize = 'clamp(15px, 1.15vw, 18px)';
    panel.hidden = true; panel.style.display = 'none';
    button.setAttribute('aria-expanded', 'false');
    button.addEventListener('click', () => {
      const open = button.getAttribute('aria-expanded') !== 'true';
      buttons.forEach(other => {
        const parent = other.closest('div.border-b[data-orientation="vertical"]');
        const content = parent && parent.querySelector('[role="region"]');
        other.setAttribute('aria-expanded', 'false');
        other.setAttribute('data-state', 'closed');
        if (parent) parent.setAttribute('data-state', 'closed');
        if (content) { content.hidden = true; content.style.display = 'none'; content.setAttribute('data-state', 'closed'); }
      });
      if (open) {
        button.setAttribute('aria-expanded', 'true');
        button.setAttribute('data-state', 'open');
        group.setAttribute('data-state', 'open');
        panel.hidden = false; panel.style.display = 'block';
        panel.setAttribute('data-state', 'open');
      }
    });
  });
})();
