/** Interações locais, sem dependência do roteador original na raiz do domínio. */
(function () {
  'use strict';
  const tabs = Array.from(document.querySelectorAll('.method-tabs [role="tab"]'));
  const panel = document.getElementById('method-panel');
  const details = [
    ['Perguntas dos candidatos', 'Identificamos as perguntas relevantes para os públicos que sua empresa deseja atrair.'],
    ['Diagnóstico em IA', 'Analisamos como a empresa aparece nas respostas das inteligências artificiais.'],
    ['Banco de provas', 'Organizamos evidências e fontes públicas relacionadas à marca empregadora.'],
    ['Conteúdo encontrável', 'Planejamos conteúdos e informações que fortaleçam a presença pública da marca.'],
    ['Monitoramento', 'Acompanhamos a presença da marca conforme a modalidade contratada.']
  ];
  tabs.forEach((tab, index) => tab.addEventListener('click', () => {
    tabs.forEach(t => { t.classList.remove('active'); t.setAttribute('aria-selected', 'false'); });
    tab.classList.add('active'); tab.setAttribute('aria-selected', 'true');
    if (panel) {
      panel.setAttribute('aria-labelledby', tab.id);
      panel.replaceChildren();
      const num = document.createElement('span'); num.textContent = String(index + 1).padStart(2, '0');
      const wrap = document.createElement('div'); const title = document.createElement('h3'); const text = document.createElement('p');
      title.textContent = details[index][0]; text.textContent = details[index][1];
      wrap.append(title, text); panel.append(num, wrap);
    }
  }));
})();
