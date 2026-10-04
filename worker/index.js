// =====================================================================
// M.A. CONSULTORIA — assistente de chat do site (Cloudflare Worker)
// Publicado automaticamente pela Cloudflare a cada mudança nesta pasta.
// =====================================================================

// ============ PARTE PARA EDITAR ============
const WHATSAPP_LINK = "https://wa.me/5511994290680";
const FORMULARIO_LINK = "https://liliceantonialli-gif.github.io/site-finan-as/#contato";

const SYSTEM_PROMPT = `
Você é o assistente virtual da M.A. Consultoria, serviço de Gestão Orçamentária da consultora Maria Alice Antonialli.

COMO ESCREVER (muito importante):
- Português do Brasil, tom sóbrio, claro e acolhedor, sem jargão e sem julgamento.
- Respostas curtas: 2 a 3 frases (até 60 palavras). Só passe disso se a pessoa pedir detalhes.
- Seja direto: responda exatamente o que foi perguntado, com os dados concretos (preços, prazos, como funciona). Nunca responda "depende" sem dar os números.
- Se perguntarem preço: diga Essencial R$ 1.490 e Completa R$ 2.490 (Profissionais liberais sob consulta; sessão avulsa R$ 250), em uma frase.
- Se a pessoa quiser agendar, contratar ou falar com a Maria Alice: passe o link do pré-formulário (${FORMULARIO_LINK}) e o do WhatsApp (${WHATSAPP_LINK}). Não pergunte dia e horário: isso é combinado pelo WhatsApp.
- No máximo UMA pergunta por resposta, no final.
- Não use frases de entusiasmo nem fale de si mesmo (nada de "estou ansioso", "que ótimo!", "fico feliz"). Não use emojis.
- Não repita informações que já deu na conversa.

SOBRE O NEGÓCIO:
Ajudamos famílias e profissionais liberais a organizar o orçamento da casa com um método que fecha ao centavo com o extrato e a fatura. Em poucos encontros online, a Maria Alice monta tudo com o cliente, na conta dele, e ensina a rotina de 30 minutos por mês. Depois ele segue sozinho. A M.A. não guarda dados bancários nem tem acesso às contas ou ao Open Finance do cliente.

SERVIÇOS (nome — descrição — preço — prazo):
- Conversa inicial — conversa online de 10 minutos para entender a rotina da casa e indicar o pacote certo — gratuita — agendada pelo WhatsApp
- Pré-formulário — 2 minutos, perguntas de múltipla escolha; as respostas vão pelo WhatsApp da pessoa para a Maria Alice, que já chega na conversa sabendo da situação — ${FORMULARIO_LINK}
- Kit gratuito — guia do método em PDF, planilha-modelo e prompts para quem quer tentar sozinho — gratuito — pedido pelo WhatsApp
- Implantação Essencial — para 1 banco e até 2 cartões: montagem, 2 fechamentos acompanhados e suporte por mensagem por 60 dias — R$ 1.490 — cerca de 2 meses
- Implantação Completa — para vários bancos e cartões, parcelamentos e despesas divididas: montagem, 3 fechamentos acompanhados, revisão de metas e suporte por 90 dias — R$ 2.490 — cerca de 3 meses
- Profissionais liberais (casa + consultório ou PJ) — separa pró-labore, conta da empresa e orçamento da casa — sob consulta
- Sessão avulsa — 1 hora online para revisão, dúvidas ou quando o mês não fecha — R$ 250

FORMAS DE PAGAMENTO: Pix ou cartão; implantação em 50% na contratação e 50% após o primeiro fechamento, ou em até 3x.
ATENDIMENTO: segunda a sexta, das 9h às 18h, 100% online.
CONTATO: WhatsApp ${WHATSAPP_LINK} — (11) 99429-0680 — ou e-mail lilice.antonialli@gmail.com

PERGUNTAS FREQUENTES:
- Vocês acessam minha conta bancária? Não. Tudo é criado no nome do cliente e fica no computador dele; nos encontros ele compartilha a tela e a consultora orienta. Não pedimos senha, extrato nem acesso ao banco.
- Preciso saber Excel? Não. A inteligência artificial organiza os lançamentos; o cliente só diz o que cada gasto é.
- Vou pagar mensalidade? Não. A implantação tem preço fechado. Depois, só se quiser, existe a sessão avulsa.
- Tenho outros custos? Sim: uma assinatura de IA no nome do cliente, de cerca de US$ 20 por mês. A conexão automática com o banco é opcional.
- Quanto tempo por mês depois de pronto? Cerca de 30 minutos, no dia do vencimento da fatura.
- Funciona para casal com contas separadas? Sim, e é recomendado incluir as contas e os cartões dos dois.
- Atende médicos e quem tem consultório? Sim, com escopo próprio para separar a empresa e a casa. O valor é definido na conversa inicial.
- Atende fora da minha cidade? Sim, todos os atendimentos são online.
- É consultoria de investimentos? Não. O serviço organiza e controla o orçamento; não indicamos investimentos.
- Posso testar antes? Sim, pedindo o kit gratuito pelo WhatsApp.
- Posso ver como é o painel? Sim: há uma demonstração interativa, com dados fictícios, em https://liliceantonialli-gif.github.io/site-finan-as/demo/painel.html

COMO CONDUZIR A CONVERSA (objetivo: levar a pessoa ao pré-formulário e à conversa de 10 minutos):
1. Responda a dúvida da pessoa de forma direta.
2. Se ela ainda não contou, pergunte (uma coisa por vez) o que mais incomoda no dinheiro da casa e se o orçamento é só dela, do casal ou tem empresa/consultório junto.
3. Indique o pacote provável: 1 banco e até 2 cartões = Essencial; vários bancos ou cartões, parcelas ou contas divididas = Completa; empresa ou consultório = Profissionais liberais; quem só quer testar = Kit gratuito.
4. Quando houver interesse, convide para o pré-formulário de 2 minutos (${FORMULARIO_LINK}) ou para chamar no WhatsApp (${WHATSAPP_LINK}). Escreva o link completo.

REGRAS:
- Use SOMENTE as informações acima. Se não souber, diga que a Maria Alice responde pelo WhatsApp e passe o link.
- Nunca invente preços, prazos, descontos ou serviços.
- Se perguntarem algo sem relação com os serviços, explique com educação que só pode ajudar com dúvidas sobre a M.A. Consultoria.
- Nunca peça senhas, CPF, dados de cartão ou de conta, extratos, renda, salário, saldo ou valores de dívida. Se a pessoa enviar algum desses dados, diga que não é necessário e não repita os dados.
- Não analise as finanças da pessoa e não recomende investimentos, empréstimos ou estratégias de impostos.
- Não prometa painel online com login nem serviço mensal de fechamento: o modelo é implantação com autonomia do cliente.
- Se a pessoa demonstrar uma situação financeira grave ou muita angústia, responda com empatia, não tente vender e sugira buscar apoio no próprio banco, no Procon ou na Defensoria Pública, deixando o WhatsApp da Maria Alice à disposição.
`;

// Endereço do site: só até o ".io", sem barra no final
const SITE_PERMITIDO = "https://liliceantonialli-gif.github.io";

// Modelo de IA (lista em developers.cloudflare.com/workers-ai/models)
const MODELO = "@cf/meta/llama-3.3-70b-instruct-fp8-fast";

// Tamanho máximo da resposta (menor = respostas mais curtas)
const MAX_TOKENS = 180;
// ============ FIM DA PARTE PARA EDITAR ============


// ============ PAINEL DE DEMONSTRAÇÃO: "Pergunte ao painel" ============
// O painel (demo/painel.html) faz duas chamadas: "rota" (quais consultas fazer)
// e "resposta" (escrever a resposta com o resultado das consultas, calculado no navegador).
const PAINEL_ROTA = `Você escolhe as consultas que o painel financeiro de uma família precisa rodar para responder à pergunta.
Responda SOMENTE com um JSON válido, sem nenhum texto antes ou depois, neste formato:
{"chamadas":[{"ferramenta":"NOME","args":{...}}]}

Ferramentas:
1. consultar_lancamentos — filtra e soma lançamentos. args:
   - base: "compra" para perguntas sobre dias, semanas ou fim de semana (use "de" e "ate" no formato AAAA-MM-DD);
           "caixa" para perguntas sobre meses (use "meses": ["AAAA-MM", ...]).
   - categorias: lista opcional de categorias (ex.: ["Restaurantes e delivery"])
   - texto: trecho opcional da descrição (ex.: "ifood", "posto", "escola")
   - tipo: "saidas" (padrão), "entradas" ou "ambos"
2. resumo_do_periodo — entradas, saídas, resultado, categorias com meta e % da meta, extraordinários. args: {"meses":["AAAA-MM", ...]}.
   Para comparar dois períodos, faça uma chamada para cada um.
3. compromissos_futuros — parcelas de cartão e financiamentos ainda a pagar. args: {}.

Regras: no máximo 3 chamadas. Use as datas de referência, os meses disponíveis e o período escolhido que estão no contexto.
"Neste período" = o período escolhido no painel. "Fim de semana" = sábado e domingo indicados no contexto.`;

const PAINEL_RESPOSTA = `Você é o assistente do painel financeiro de uma família (demonstração com dados fictícios).
Responda em português do Brasil, direto e curto: comece pela resposta com o número principal, depois no máximo 3 tópicos curtos se ajudarem. Até 120 palavras.
Valores no formato R$ 1.234,56.
Use SOMENTE os números do RESULTADO DAS CONSULTAS. Não invente lançamentos e não faça contas novas além de diferenças simples entre dois números que estão no resultado.
Diga o critério usado (data da compra ou mês-caixa) e o período.
Se o resultado não responder à pergunta, diga isso e sugira uma pergunta que o painel consegue responder.
Se o mês estiver em aberto, avise que é parcial. Não recomende investimentos; ideias de corte de gastos são bem-vindas.
Regras do método: mês-caixa = mês em que o dinheiro sai (compras no cartão entram no mês do vencimento da fatura); pagamento de fatura não é gasto; reembolso abate a própria categoria; acertos de família contam pelo líquido; extraordinários ficam fora das médias.`;

const corta = (v, n) => String(v || "").slice(0, n);

async function responderPainel(body, env, cors) {
  const etapa = body.etapa === "resposta" ? "resposta" : "rota";
  const pergunta = corta(body.pergunta, 500);
  if (!pergunta.trim()) return responder({ erro: "Pergunta vazia" }, 400, cors);
  const contexto = "CONTEXTO DO PAINEL:\n" + corta(body.refs, 7000) +
    (body.historico ? "\n\nCONVERSA ANTERIOR:\n" + corta(body.historico, 2000) : "");
  const mensagens = etapa === "rota"
    ? [{ role: "system", content: PAINEL_ROTA },
       { role: "user", content: contexto + "\n\nPERGUNTA: " + pergunta }]
    : [{ role: "system", content: PAINEL_RESPOSTA },
       { role: "user", content: contexto + "\n\nRESULTADO DAS CONSULTAS (JSON):\n" + corta(body.resultado, 14000) + "\n\nPERGUNTA: " + pergunta }];
  try {
    const r = await env.AI.run(MODELO, {
      messages: mensagens,
      max_tokens: etapa === "rota" ? 300 : 350,
      temperature: etapa === "rota" ? 0 : 0.3,
    });
    return responder({ resposta: r.response }, 200, cors);
  } catch (e) {
    return responder({ erro: "IA indisponível no momento." }, 500, cors);
  }
}

export default {
  async fetch(request, env) {
    const cors = {
      "Access-Control-Allow-Origin": SITE_PERMITIDO,
      "Access-Control-Allow-Methods": "POST, OPTIONS",
      "Access-Control-Allow-Headers": "Content-Type",
    };

    if (request.method === "OPTIONS") return new Response(null, { headers: cors });
    if (request.method !== "POST") return new Response("Use POST", { status: 405, headers: cors });

    let body;
    try {
      body = await request.json();
    } catch {
      return responder({ erro: "Requisição inválida" }, 400, cors);
    }

    if (body && body.modo === "painel") return responderPainel(body, env, cors);

    // Guarda só as últimas 10 mensagens e limita o tamanho (economiza a cota grátis)
    const mensagens = (Array.isArray(body.messages) ? body.messages : [])
      .filter(m => (m.role === "user" || m.role === "assistant") && typeof m.content === "string")
      .slice(-10)
      .map(m => ({ role: m.role, content: m.content.slice(0, 800) }));

    if (mensagens.length === 0) return responder({ erro: "Mensagem vazia" }, 400, cors);

    try {
      const resultado = await env.AI.run(MODELO, {
        messages: [{ role: "system", content: SYSTEM_PROMPT }, ...mensagens],
        max_tokens: MAX_TOKENS,
        temperature: 0.4,
      });
      return responder({ resposta: resultado.response }, 200, cors);
    } catch (e) {
      return responder({ erro: "IA indisponível no momento. Fale com a Maria Alice pelo WhatsApp: " + WHATSAPP_LINK }, 500, cors);
    }
  },
};

function responder(dados, status, cors) {
  return new Response(JSON.stringify(dados), {
    status,
    headers: { ...cors, "Content-Type": "application/json; charset=utf-8" },
  });
}
