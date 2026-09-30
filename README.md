# Site — M.A. Consultoria

Landing page estática (HTML, CSS e JavaScript puros, sem build) do serviço de Gestão Orçamentária da M.A. Consultoria.

## Estrutura

```
index.html        página principal
privacidade.html  política de privacidade
css/style.css     estilos
js/main.js        menu mobile, ano no rodapé e envio do formulário
imagens/          logomarca, ícones e imagens do painel
```

## Pendências antes de publicar

- Preencher WhatsApp, e-mail, Instagram, LinkedIn, cidade/UF e CNPJ (marcados como `[PREENCHER]` no `index.html`, `privacidade.html` e no rodapé).
- Configurar um serviço de envio de formulário (ex.: Formspree ou Web3Forms) e colar o endpoint no atributo `action` do formulário em `index.html`.
- Confirmar horário de atendimento e grafia da razão social (marcados como `[CONFIRMAR]`).
- Revisar a política de privacidade em `privacidade.html` (campos `[PREENCHER]`).
- Acrescentar o `chat.js` do assistente de vendas antes do fechamento `</body>` do `index.html`.

## Publicação no GitHub Pages

Todos os caminhos são relativos (ex.: `css/style.css`), então o site funciona em qualquer subpasta, inclusive `https://usuario.github.io/repositorio/`.
