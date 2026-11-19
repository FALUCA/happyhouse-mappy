# Arquitetura atual

A aplicacao recebida e uma pagina estatica HTML com estilos CSS, scripts JavaScript e imagens locais. O ponto de entrada e `index.html`.

`assets/js/mappy-header.js` fixa o logotipo branco no header preto. Outros scripts implementam funcionalidades da interface. O arquivo `_headers` original define cache de recursos em hosts que o reconhecem.

Nao ha, neste pacote, implementacao de persistencia de leads, autenticacao administrativa ou API de analytics. Essas capacidades exigem um projeto de backend separado e validacao de seguranca e privacidade.
