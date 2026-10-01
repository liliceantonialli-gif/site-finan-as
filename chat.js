(function () {
  // ============ PARTE PARA EDITAR ============
  const API = "https://agente-vendas.lilice-antonialli.workers.dev";
  const TITULO = "M.A. Consultoria · Tire suas dúvidas";
  const SAUDACAO = "Olá! Sou o assistente da M.A. Consultoria. Posso explicar como funciona, os pacotes e os valores. Por onde quer começar?";
  const WHATSAPP = "5511994290680";             // só números, com 55 + DDD
  const TEXTO_WHATSAPP = "Olá, Maria Alice! Vim pelo site da M.A. Consultoria e quero saber mais sobre a organização do orçamento.";
  const FORMULARIO = "index.html#contato";      // onde fica o pré-formulário

  // Cada texto precisa contrastar bem com o fundo atrás dele
  const CORES = {
    principal: "#17263D",           // azul-marinho da logomarca: botão redondo, botão Enviar e suas mensagens
    textoSobrePrincipal: "#ffffff", // texto em cima da cor principal
    fundo: "#ffffff",               // janela do chat e campo de digitação
    texto: "#17263D",               // respostas e o que o visitante digita
    balaoResposta: "#F7F2EC",       // creme da logomarca, fundo das respostas da IA
    textoApagado: "#5B6270",        // texto de exemplo no campo
    borda: "#E3DCCF",
  };
  // ============ FIM DA PARTE PARA EDITAR ============

  const historico = [];
  const C = CORES;

  const css = document.createElement("style");
  css.textContent = `
    #cv-btn{position:fixed;bottom:20px;right:20px;width:60px;height:60px;border-radius:50%;
      border:2px solid ${C.textoSobrePrincipal};background:${C.principal};color:${C.textoSobrePrincipal};
      font-size:26px;cursor:pointer;box-shadow:0 4px 16px rgba(0,0,0,.35);z-index:9999}
    #cv-box{position:fixed;bottom:90px;right:20px;width:340px;max-width:calc(100vw - 40px);
      height:460px;max-height:calc(100vh - 110px);background:${C.fundo};color:${C.texto};
      border:1px solid ${C.borda};border-radius:12px;box-shadow:0 8px 24px rgba(0,0,0,.3);
      display:none;flex-direction:column;overflow:hidden;z-index:9999;
      font-family:system-ui,-apple-system,"Segoe UI",Roboto,sans-serif}
    #cv-box.aberto{display:flex}
    #cv-topo{background:${C.principal};color:${C.textoSobrePrincipal};padding:12px 16px;font-weight:600}
    #cv-msgs{flex:1;overflow-y:auto;padding:12px;display:flex;flex-direction:column;gap:8px}
    .cv-m{padding:8px 12px;border-radius:10px;max-width:85%;line-height:1.45;font-size:14px;white-space:pre-wrap}
    .cv-user{background:${C.principal};color:${C.textoSobrePrincipal};align-self:flex-end}
    .cv-bot{background:${C.balaoResposta};color:${C.texto};align-self:flex-start}
    #cv-form{display:flex;border-top:1px solid ${C.borda}}
    #cv-input{flex:1;border:none;padding:12px;font:inherit;font-size:14px;outline:none;
      background:${C.fundo};color:${C.texto}}
    #cv-input::placeholder{color:${C.textoApagado};opacity:1}
    #cv-input:focus{box-shadow:inset 0 0 0 2px ${C.principal}}
    #cv-enviar{border:none;background:${C.principal};color:${C.textoSobrePrincipal};font:inherit;
      font-size:14px;font-weight:600;padding:0 16px;cursor:pointer}
    #cv-enviar:disabled{opacity:.6;cursor:wait}
    #cv-atalhos{display:flex;gap:6px;padding:8px 12px;border-top:1px solid ${C.borda};flex-wrap:wrap}
    .cv-atalho{flex:1;min-width:120px;text-align:center;font-size:13px;font-weight:600;padding:7px 8px;border-radius:8px;
      border:1px solid ${C.principal};color:${C.principal};background:${C.fundo};text-decoration:none;cursor:pointer}
    .cv-atalho:hover{background:${C.balaoResposta};text-decoration:none}
    .cv-m a{color:inherit;text-decoration:underline;word-break:break-all}
    #cv-wpp{position:fixed;bottom:20px;left:20px;height:52px;padding:0 18px 0 14px;border-radius:26px;border:none;
      background:#1F7A4D;color:#fff;font:600 15px system-ui,-apple-system,"Segoe UI",Roboto,sans-serif;display:flex;
      align-items:center;gap:8px;box-shadow:0 4px 16px rgba(0,0,0,.3);z-index:9998;text-decoration:none}
    #cv-wpp:hover{filter:brightness(1.08);text-decoration:none}
    #cv-wpp svg{width:24px;height:24px;flex:none}
    @media (max-width:480px){#cv-wpp span{display:none}#cv-wpp{width:52px;padding:0;justify-content:center}}
  `;
  document.head.appendChild(css);

  document.body.insertAdjacentHTML("beforeend", `
    <button id="cv-btn" aria-label="Abrir chat">💬</button>
    <div id="cv-box">
      <div id="cv-topo"></div>
      <div id="cv-msgs"></div>
      <div id="cv-atalhos">
        <a class="cv-atalho" id="cv-form-link" href="#">Pré-formulário</a>
        <a class="cv-atalho" id="cv-wpp-link" target="_blank" rel="noopener" href="#">WhatsApp</a>
      </div>
      <form id="cv-form">
        <input id="cv-input" placeholder="Digite sua pergunta..." maxlength="800" autocomplete="off">
        <button id="cv-enviar" type="submit">Enviar</button>
      </form>
    </div>
    <a id="cv-wpp" target="_blank" rel="noopener" aria-label="Falar no WhatsApp" href="#">
      <svg viewBox="0 0 24 24" aria-hidden="true"><path fill="currentColor" d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2Zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2Zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1-.7-.3-1.4-.7-2-1.3-.5-.5-1-1.1-1.3-1.7-.1-.2 0-.4.1-.5l.4-.5.3-.5v-.5l-.8-1.9c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3c-.3.3-1 1-1 2.3s1 2.7 1.1 2.9c.1.2 2 3.1 4.9 4.3 1.8.8 2.5.8 3.4.7.6-.1 1.5-.6 1.8-1.2.2-.6.2-1.1.2-1.2-.1-.2-.3-.3-.5-.4Z"/></svg>
      <span>WhatsApp</span>
    </a>`);

  const box = document.getElementById("cv-box");
  const msgs = document.getElementById("cv-msgs");
  const input = document.getElementById("cv-input");
  const btnEnviar = document.getElementById("cv-enviar");
  document.getElementById("cv-topo").textContent = TITULO;

  const linkWpp = "https://wa.me/" + WHATSAPP + "?text=" + encodeURIComponent(TEXTO_WHATSAPP);
  document.getElementById("cv-wpp").href = linkWpp;
  document.getElementById("cv-wpp-link").href = linkWpp;
  const linkForm = document.getElementById("cv-form-link");
  linkForm.href = FORMULARIO;
  linkForm.onclick = (e) => {
    const alvo = document.getElementById("contato");
    if (alvo && alvo.querySelector("form")) {   // já está na página do formulário
      e.preventDefault();
      box.classList.remove("aberto");
      alvo.scrollIntoView({ behavior: "smooth" });
    }
  };

  // Escreve o texto e transforma endereços (https://...) em links clicáveis, sem usar innerHTML
  function escrever(div, texto) {
    div.textContent = "";
    const partes = String(texto).split(/(https?:\/\/[^\s)]+)/g);
    partes.forEach((parte, i) => {
      if (i % 2 === 1) {
        const limpo = parte.replace(/[.,;:!?]+$/, "");
        const a = document.createElement("a");
        a.href = limpo; a.target = "_blank"; a.rel = "noopener"; a.textContent = limpo;
        div.appendChild(a);
        if (limpo.length < parte.length) div.appendChild(document.createTextNode(parte.slice(limpo.length)));
      } else if (parte) {
        div.appendChild(document.createTextNode(parte));
      }
    });
  }

  function adicionar(texto, classe) {
    const div = document.createElement("div");
    div.className = "cv-m " + classe;
    escrever(div, texto); // nunca usa innerHTML: impede que alguém injete HTML
    msgs.appendChild(div);
    msgs.scrollTop = msgs.scrollHeight;
    return div;
  }

  document.getElementById("cv-btn").onclick = () => {
    box.classList.toggle("aberto");
    if (!msgs.children.length) adicionar(SAUDACAO, "cv-bot");
    input.focus();
  };

  document.getElementById("cv-form").onsubmit = async (e) => {
    e.preventDefault();
    const texto = input.value.trim();
    if (!texto || btnEnviar.disabled) return;

    input.value = "";
    btnEnviar.disabled = true;
    adicionar(texto, "cv-user");
    historico.push({ role: "user", content: texto });
    const aguardando = adicionar("Digitando...", "cv-bot");

    try {
      const r = await fetch(API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: historico.slice(-20) }),
      });
      const dados = await r.json();
      if (dados.resposta) {
        escrever(aguardando, dados.resposta);
        historico.push({ role: "assistant", content: dados.resposta });
      } else {
        aguardando.textContent = dados.erro || "Não consegui responder agora.";
        historico.pop();
      }
    } catch {
      aguardando.textContent = "Erro de conexão. Tente novamente.";
      historico.pop();
    } finally {
      btnEnviar.disabled = false;
      input.focus();
    }
  };
})();
