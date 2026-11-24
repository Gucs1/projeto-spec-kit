# Segurança de hospedagem

Configure a hospedagem para servir somente por HTTPS e aplicar cabeçalhos adequados ao ambiente:

- `Content-Security-Policy`, restrita aos recursos realmente usados;
- `Referrer-Policy: strict-origin-when-cross-origin`;
- `X-Content-Type-Options: nosniff`;
- `frame-ancestors 'none'` na CSP (ou proteção equivalente contra framing).

Não publique segredos em arquivos estáticos nem em variáveis `VITE_*`, pois todo conteúdo do build é público. Revise os destinos externos e dependências antes de publicar. Ajuste `robots.txt` e canonical ao domínio e ambiente reais.
