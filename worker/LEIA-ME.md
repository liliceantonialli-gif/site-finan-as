# Assistente de chat da M.A. Consultoria

Esta pasta é o código do Worker `agente-vendas` na Cloudflare.
Ela está ligada ao repositório pelo Workers Builds (Path `/worker`):
toda mudança aqui, na branch `main`, é publicada sozinha em
https://agente-vendas.lilice-antonialli.workers.dev

- `index.js` — instruções do assistente (o que ele sabe e como responde) e o código.
- `wrangler.toml` — configuração: nome do Worker e acesso à IA da Cloudflare.

Para mudar o que o assistente responde, edite a parte entre
`PARTE PARA EDITAR` e `FIM DA PARTE PARA EDITAR` em `index.js`.
