# Publicacao

1. Confirme que `python3 -m unittest discover -s tests -v` passou.
2. Publique `index.html` e `assets/` no diretorio publico do site.
3. Em Apache 2.4+, publique `.htaccess` se `AllowOverride` estiver habilitado.
4. Em hosts que suportam `_headers`, publique esse arquivo conforme a documentacao do provedor.
5. Nao publique `.git/`, `.github/`, `docs/`, `tests/`, segredos ou backups.
6. Confira a pagina em desktop/mobile, os links, FAQ, header preto e logo branco.
7. Revise a politica de cache: o `_headers` original usa `immutable` para `/assets/*`, inclusive arquivos com nomes fixos. Mudancas nesses arquivos podem exigir versionamento de URL ou invalidacao do cache.

Nao ha deploy automatico neste repositorio. Configure credenciais e destino apenas na plataforma de CI/CD quando necessario.
