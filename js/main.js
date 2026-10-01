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

  // Pré-formulário: monta a mensagem e abre o WhatsApp da pessoa com as respostas.
  // Nada é enviado para servidor nenhum — quem envia é a própria pessoa, pelo WhatsApp dela.
  var WHATSAPP = '5511994290680';
  var formulario = document.getElementById('formulario-contato');
  var mensagem = document.getElementById('mensagem-formulario');

  if (formulario && mensagem) {
    formulario.addEventListener('submit', function (evento) {
      evento.preventDefault();

      var obrigatorios = formulario.querySelectorAll('[required]');
      for (var i = 0; i < obrigatorios.length; i++) {
        var campo = obrigatorios[i];
        var vazio = campo.type === 'checkbox' ? !campo.checked : !campo.value.trim();
        if (vazio) {
          mensagem.textContent = campo.type === 'checkbox'
            ? 'Marque a autorização para podermos retornar o contato.'
            : 'Falta preencher um campo obrigatório.';
          mensagem.setAttribute('data-estado', 'erro');
          campo.focus();
          return;
        }
      }

      function valor(nome) {
        var el = formulario.elements[nome];
        return el && el.value ? el.value.trim() : '';
      }
      var dores = Array.prototype.map.call(
        formulario.querySelectorAll('input[name="dor"]:checked'),
        function (el) { return el.value; }
      );

      var linhas = [
        'Olá, Maria Alice! Preenchi o pré-formulário do site da M.A. Consultoria:',
        '',
        '• Nome: ' + valor('nome'),
        valor('cidade') ? '• Cidade: ' + valor('cidade') : '',
        '• Orçamento: ' + valor('perfil'),
        '• Contas e cartões: ' + valor('contas'),
        dores.length ? '• O que mais incomoda: ' + dores.join('; ') : '',
        valor('tentou') ? '• Já tentou: ' + valor('tentou') : '',
        valor('origem') ? '• Conheci a M.A. por: ' + valor('origem') : '',
        '• Melhor horário para a conversa de 10 min: ' + valor('horario'),
        valor('obs') ? '• Mais: ' + valor('obs') : ''
      ].filter(function (l, idx) { return l !== '' || idx === 1; });

      var link = 'https://wa.me/' + WHATSAPP + '?text=' + encodeURIComponent(linhas.join('\n'));
      var janela = window.open(link, '_blank', 'noopener');
      if (!janela) { window.location.href = link; }

      mensagem.innerHTML = 'Abrimos o seu WhatsApp com as respostas — é só tocar em <strong>enviar</strong>. Não abriu? <a href="' + link + '" target="_blank" rel="noopener">Clique aqui</a>.';
      mensagem.setAttribute('data-estado', 'sucesso');
    });
  }
});
