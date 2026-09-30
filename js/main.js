// =====================================================================
// M.A. CONSULTORIA — comportamento da página
// =====================================================================

document.addEventListener('DOMContentLoaded', function () {
  // Ano atual no rodapé
  var elementosAno = document.querySelectorAll('#ano-atual');
  elementosAno.forEach(function (elemento) {
    elemento.textContent = new Date().getFullYear();
  });

  // Menu mobile
  var botaoMenu = document.getElementById('botao-menu-mobile');
  var menu = document.getElementById('menu-principal');

  if (botaoMenu && menu) {
    botaoMenu.addEventListener('click', function () {
      var aberto = menu.classList.toggle('menu-aberto');
      botaoMenu.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    });

    // Fecha o menu ao clicar em um link (útil no celular)
    menu.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        menu.classList.remove('menu-aberto');
        botaoMenu.setAttribute('aria-expanded', 'false');
      });
    });
  }

  // Envio do formulário de contato
  var formulario = document.getElementById('formulario-contato');
  var mensagem = document.getElementById('mensagem-formulario');

  if (formulario && mensagem) {
    formulario.addEventListener('submit', function (evento) {
      var destino = formulario.getAttribute('action') || '';

      // Enquanto o endpoint não for configurado, avisa em vez de tentar enviar.
      if (destino.indexOf('[PREENCHER') !== -1 || destino === '') {
        evento.preventDefault();
        mensagem.textContent = 'Formulário ainda não está conectado a um serviço de envio. Fale pelo WhatsApp enquanto isso.';
        mensagem.setAttribute('data-estado', 'erro');
        return;
      }

      evento.preventDefault();
      mensagem.textContent = 'Enviando...';
      mensagem.removeAttribute('data-estado');

      fetch(destino, {
        method: 'POST',
        body: new FormData(formulario),
        headers: { 'Accept': 'application/json' }
      })
        .then(function (resposta) {
          if (resposta.ok) {
            mensagem.textContent = 'Recebemos seus dados! A Maria Alice vai te chamar em breve.';
            mensagem.setAttribute('data-estado', 'sucesso');
            formulario.reset();
          } else {
            throw new Error('Falha no envio');
          }
        })
        .catch(function () {
          mensagem.textContent = 'Não foi possível enviar agora. Tente novamente ou fale pelo WhatsApp.';
          mensagem.setAttribute('data-estado', 'erro');
        });
    });
  }
});
