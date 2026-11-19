# happyhouse-mappy
Interface publica do Mappy, serviço da HappyHouse que analisa como sua empresa aparece nas respostas das inteligências artificiais, identifica lacunas de informação e constrói um plano para tornar sua marca empregadora mais encontrável, compreensível e bem representada. 

## Estrutura
- `index.html`: pagina publica.
- `assets/css/`: estilos.
- `assets/js/`: scripts da interface.
- `assets/images/`: imagens e favicon.
- `_headers`: configuracao original de headers para hospedagens compativeis.
- `.htaccess`: protecoes basicas para Apache 2.4+.
- `.github/workflows/`: verificacao automatica do repositorio.
- `docs/`: orientacoes de publicacao e arquitetura.
- `tests/`: testes estaticos sem dependencias externas.

## Executar localmente
```bash
python3 -m http.server 8000
```
Acesse `http://localhost:8000/`.

## Testes
```bash
python3 -m unittest discover -s tests -v
```

## Publicacao
Publique `index.html`, `assets/` e, quando compativel com o servidor, `_headers` ou `.htaccess`. Consulte `docs/DEPLOY.md`.

## Limites do escopo
Este repositorio contem a interface estatica. Nao inclui backend PHP, banco de dados, painel administrativo ou comprovacao de entrega de mensagens pelo WhatsApp. Eventos de interface nao devem ser interpretados como leads confirmados sem integracao de backend.
