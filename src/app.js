let patients = loadState("revivaV2Patients", [
  {
    id: 1,
    name: "Marina Torres",
    initials: "MT",
    type: "pos",
    tag: "Pós 48h",
    urgency: "alert",
    procedure: "Laser CO2 fracionado",
    next: "Pedir foto e checar sinais de alerta",
    status: "Janela crítica",
    automation: "D+2 laser facial, com alerta para intercorrência",
    history:
      "Procedimento feito em 22/05. Relatou sensibilidade ontem à noite e ainda não enviou foto da pele. O contato deve priorizar cuidado percebido antes de qualquer nova oferta.",
    message:
      "Oi, Marina! Tudo bem por aí? Estou passando para acompanhar sua recuperação do laser. É esperado sentir sensibilidade nas primeiras 48h, mas quero conferir sua evolução com carinho. Pode me enviar uma foto da pele em luz natural? Evite sol, calor intenso e ativos ácidos hoje.",
    risk: "Alto",
    value: "R$ 1.890",
    sla: "1h 20",
    score: 94,
    due: "Hoje, 14:30",
    tone: "Acolhedor",
    whatsappStage: "respondido",
    protocol: [
      "Confirmar sintomas e pedir foto em luz natural.",
      "Registrar sinal de alerta se houver vermelhidão intensa ou ardor progressivo.",
      "Só sugerir retorno depois da avaliação da foto.",
    ],
  },
  {
    id: 2,
    name: "Renata Alves",
    initials: "RA",
    type: "renovacao",
    tag: "Pacote vence",
    urgency: "warning",
    procedure: "Drenagem pos-operatoria",
    next: "Oferecer renovação com 2 sessões bônus",
    status: "Receita quente",
    automation: "Renovação 3 dias antes do vencimento",
    history:
      "Usou 8 de 10 sessões, comparecimento alto e bom NPS. Melhor oferta: continuidade semanal com condição até quarta-feira.",
    message:
      "Oi, Renata! Vi que seu pacote está chegando nas últimas sessões e sua evolução está bem consistente. Para você não perder o ritmo, consigo reservar a renovação semanal com uma condição especial até quarta. Quer que eu te envie as opções?",
    risk: "Medio",
    value: "R$ 2.400",
    sla: "3h 10",
    score: 86,
    due: "Hoje, 16:00",
    tone: "Comercial leve",
    whatsappStage: "entregue",
    protocol: [
      "Valorizar evolução e frequência da paciente.",
      "Apresentar renovação como continuidade do resultado.",
      "Oferecer duas janelas de horário para decisão rápida.",
    ],
  },
  {
    id: 3,
    name: "Carla Mendes",
    initials: "CM",
    type: "retorno",
    tag: "Retorno ideal",
    urgency: "",
    procedure: "Botox",
    next: "Agendar avaliação de 15 dias",
    status: "Agenda sugerida",
    automation: "Retorno D+15 toxina botulínica",
    history:
      "Aplicação em 09/05. Está dentro da janela ideal para retorno, fotos comparativas e possível ajuste fino.",
    message:
      "Oi, Carla! Seu retorno de 15 dias do botox já está na janela ideal. Esse encontro é rápido, mas importante para avaliarmos o resultado com calma e fazer fotos comparativas. Tenho horários na terça às 14h e quinta às 10h. Algum funciona para você?",
    risk: "Baixo",
    value: "R$ 980",
    sla: "5h 45",
    score: 71,
    due: "Hoje, 10:00",
    tone: "Objetivo",
    whatsappStage: "agendado",
    protocol: [
      "Convidar para avaliação curta e fotos comparativas.",
      "Sugerir dois horários disponíveis.",
      "Registrar aceite direto na agenda.",
    ],
  },
  {
    id: 4,
    name: "Juliana Prado",
    initials: "JP",
    type: "renovacao",
    tag: "Risco de perda",
    urgency: "alert",
    procedure: "Limpeza + peelings",
    next: "Contato humano antes da oferta",
    status: "Sem resposta",
    automation: "Recuperação após 2 mensagens ignoradas",
    history:
      "Não respondeu às duas últimas mensagens automatizadas. Preferiu atendimento consultivo na primeira compra, então o melhor caminho é entender resultado antes de vender.",
    message:
      "Oi, Juliana! Aqui é da sua clínica. Notei que não conseguimos nos falar nos últimos dias e queria entender como sua pele ficou depois do último protocolo. Posso te ajudar a ajustar o plano antes de pensarmos na próxima sessão.",
    risk: "Alto",
    value: "R$ 1.650",
    sla: "40 min",
    score: 91,
    due: "Hoje, 11:20",
    tone: "Humano",
    whatsappStage: "sem_resposta",
    protocol: [
      "Não enviar promoção automática.",
      "Perguntar sobre resultado percebido e sensibilidade.",
      "Encaminhar para atendente se responder com objeção.",
    ],
  },
  {
    id: 5,
    name: "Beatriz Lima",
    initials: "BL",
    type: "pos",
    tag: "D+7",
    urgency: "",
    procedure: "Bioestimulador",
    next: "Enviar orientações e pedir feedback",
    status: "Acompanhar",
    automation: "D+7 bioestimulador, reforço de cuidados",
    history:
      "D+7 sem queixas. Momento bom para reforçar orientações e preparar retorno fotográfico em 30 dias.",
    message:
      "Oi, Beatriz! Passando para saber como você está se sentindo uma semana após o bioestimulador. Lembre de manter hidratação e evitar massagens na região sem orientação. Se puder, me conta como está a pele e se apareceu algum incômodo.",
    risk: "Baixo",
    value: "R$ 3.200",
    sla: "7h 05",
    score: 64,
    due: "Amanhã, 09:00",
    tone: "Educativo",
    whatsappStage: "enviado",
    protocol: [
      "Reforçar cuidados de manutenção.",
      "Pedir feedback curto sobre conforto e expectativa.",
      "Preparar retorno fotográfico para D+30.",
    ],
  },
]);

let flows = loadState("revivaV2Flows", [
  {
    id: "laser",
    name: "Laser CO2 fracionado",
    category: "Pós-procedimento",
    status: "Ativo",
    window: "D+2",
    conversion: "31%",
    revenue: "R$ 8.900",
    health: 94,
    sla: "2h",
    owner: "Enfermagem",
    escalation:
      "Transferir para humano se houver dor intensa, ardor progressivo, secreção, febre ou foto fora do esperado.",
    offer: "Só sugerir retorno depois da avaliação de segurança e com linguagem de cuidado.",
    template:
      "Oi, {nome}! Estou passando para acompanhar sua recuperação do laser. Pode me enviar uma foto da pele em luz natural? Quero conferir se está evoluindo como esperado e ajustar qualquer cuidado se precisar.",
    variants: {
      followup:
        "Oi, {nome}! Passando novamente para acompanhar sua pele depois do laser. Se puder, me envie uma foto em luz natural para eu validar sua evolução com segurança.",
      human:
        "{nome}, vou pedir para nossa equipe avaliar sua mensagem com mais cuidado agora. Queremos garantir que sua recuperação esteja dentro do esperado antes de qualquer próxima orientação.",
    },
    quality: ["Janela clínica definida", "Sinais de alerta mapeados", "Oferta bloqueada antes da segurança", "Tempo de resposta definido", "Preview testado"],
    steps: [
      { time: "D+1", channel: "WhatsApp", action: "Orientações de cuidado e alerta de sinais fora do esperado" },
      { time: "D+2", channel: "Humano se risco", action: "Pedir foto em luz natural e classificar evolução" },
      { time: "D+7", channel: "WhatsApp", action: "Checar textura, conforto e preparar retorno fotográfico" },
    ],
  },
  {
    id: "botox",
    name: "Toxina botulinica",
    category: "Retorno",
    status: "Ativo",
    window: "D+15",
    conversion: "44%",
    revenue: "R$ 6.200",
    health: 88,
    sla: "6h",
    owner: "Concierge",
    escalation:
      "Transferir para humano se houver assimetria percebida, queda palpebral, dor incomum ou insatisfação com resultado.",
    offer: "Permitir agendamento de retorno e fotos comparativas; não vender outro procedimento na primeira mensagem.",
    template:
      "Oi, {nome}! Seu retorno de 15 dias da toxina já está na janela ideal. Esse encontro é rápido e importante para avaliarmos o resultado com calma. Tenho horários na terça às 14h e quinta às 10h. Algum funciona para você?",
    variants: {
      followup:
        "Oi, {nome}! Conseguiu ver minha mensagem sobre seu retorno da toxina? Tenho algumas janelas nesta semana para avaliarmos o resultado com calma.",
      human:
        "{nome}, vou pedir para nossa concierge te chamar pessoalmente para encontrar o melhor horário de retorno e tirar qualquer dúvida sobre o resultado.",
    },
    quality: ["Janela clínica definida", "Agenda sugerida", "Sem oferta precoce", "Tempo de resposta definido", "Mensagem curta"],
    steps: [
      { time: "D+12", channel: "WhatsApp", action: "Avisar que a janela de retorno está chegando" },
      { time: "D+15", channel: "WhatsApp", action: "Oferecer dois horários de retorno fotográfico" },
      { time: "D+18", channel: "Humano", action: "Atendente liga se não houver resposta" },
    ],
  },
  {
    id: "drenagem",
    name: "Drenagem pos-operatoria",
    category: "Renovação",
    status: "Ativo",
    window: "2 sessões restantes",
    conversion: "52%",
    revenue: "R$ 12.400",
    health: 91,
    sla: "2h",
    owner: "Comercial",
    escalation:
      "Transferir para humano se a paciente relatar dor, edema fora do esperado ou insegurança sobre evolução.",
    offer: "Oferecer renovação como continuidade terapêutica, com bônus discreto para manter frequência.",
    template:
      "Oi, {nome}! Vi que seu pacote está chegando nas últimas sessões e sua evolução está consistente. Para você não perder o ritmo, posso reservar a continuidade semanal com uma condição especial até quarta. Quer ver as opções?",
    variants: {
      followup:
        "Oi, {nome}! Separando sua agenda da próxima semana. Quer que eu te envie as opções para manter a continuidade do pacote?",
      human:
        "{nome}, vou pedir para nossa equipe te chamar com as opções de continuidade e ajustar o melhor plano para sua rotina.",
    },
    quality: ["Momento de renovação claro", "Oferta vinculada a resultado", "Objeção clínica prevista", "Tempo de resposta definido", "Responsável comercial"],
    steps: [
      { time: "8/10 sessões", channel: "WhatsApp", action: "Valorizar evolução e sinalizar continuidade" },
      { time: "9/10 sessões", channel: "WhatsApp", action: "Apresentar renovação com condição limitada" },
      { time: "10/10 sessões", channel: "Humano", action: "Atendente fecha agenda antes da alta" },
    ],
  },
  {
    id: "bio",
    name: "Bioestimulador",
    category: "Pós-procedimento",
    status: "Revisar",
    window: "D+7 e D+30",
    conversion: "27%",
    revenue: "R$ 7.300",
    health: 76,
    sla: "24h",
    owner: "Profissional",
    escalation:
      "Transferir para humano se houver nódulo persistente, dor localizada ou dúvida sobre massagem e cuidados.",
    offer: "Preparar retorno fotográfico em D+30 antes de sugerir protocolo complementar.",
    template:
      "Oi, {nome}! Passando para saber como você está se sentindo uma semana após o bioestimulador. Lembre de manter hidratação e evitar massagens sem orientação. Me conta como está a pele e se apareceu algum incômodo?",
    variants: {
      followup:
        "Oi, {nome}! Conseguiu me contar como está se sentindo após o bioestimulador? Quero registrar sua evolução para o retorno fotográfico.",
      human:
        "{nome}, vou encaminhar sua dúvida para a profissional responsável antes de qualquer nova orientação. Assim mantemos seu acompanhamento bem seguro.",
    },
    quality: ["Janela D+7 definida", "Retorno D+30 previsto", "Transferência clínica definida"],
    steps: [
      { time: "D+2", channel: "WhatsApp", action: "Reforçar cuidados imediatos" },
      { time: "D+7", channel: "WhatsApp", action: "Pedir feedback de conforto e evolução" },
      { time: "D+30", channel: "Agenda", action: "Retorno fotográfico e plano de manutenção" },
    ],
  },
]);

let crmProfiles = loadState("revivaV2CrmProfiles", [
  {
    patientId: 1,
    phone: "+55 65 99821-4420",
    ltv: "R$ 12.840",
    package: "Laser premium - 3/4",
    segment: "Pós-procedimento",
    status: "Cuidado ativo",
    timeline: ["22/05 - Laser CO2 realizado", "23/05 - Orientação entregue", "24/05 - Foto pendente"],
    conversation: ["Paciente: Minha pele ainda está sensível.", "Clínica: Pode acontecer. Me envie foto em luz natural.", "Sistema: Bloquear oferta até avaliação."],
  },
  {
    patientId: 2,
    phone: "+55 65 99211-8801",
    ltv: "R$ 18.200",
    package: "Drenagem pos-op - 8/10",
    segment: "Renovação quente",
    status: "Pacote vence",
    timeline: ["02/05 - Pacote iniciado", "18/05 - NPS 10", "24/05 - Renovação sugerida"],
    conversation: ["Clínica: Sua evolução está consistente.", "Paciente: Quero continuar na próxima semana.", "Sistema: Enviar opções de renovação."],
  },
  {
    patientId: 3,
    phone: "+55 65 99654-1200",
    ltv: "R$ 7.600",
    package: "Toxina avulsa",
    segment: "Retorno ideal",
    status: "Agenda sugerida",
    timeline: ["09/05 - Aplicação de toxina", "21/05 - Lembrete D+12", "24/05 - Retorno D+15"],
    conversation: ["Clínica: Temos terça 14h ou quinta 10h.", "Paciente: Quinta funciona.", "Sistema: Confirmar agenda."],
  },
  {
    patientId: 4,
    phone: "+55 65 98440-7712",
    ltv: "R$ 9.430",
    package: "Peelings - pausado",
    segment: "Risco de perda",
    status: "Sem resposta",
    timeline: ["30/04 - Limpeza + peeling", "10/05 - Sem resposta", "24/05 - Acionar humano"],
    conversation: ["Sistema: Duas mensagens ignoradas.", "Clínica: Vamos entender resultado antes de ofertar.", "Sistema: Prioridade concierge."],
  },
  {
    patientId: 5,
    phone: "+55 65 99310-6602",
    ltv: "R$ 21.900",
    package: "Bioestimulador anual",
    segment: "Acompanhamento",
    status: "D+7",
    timeline: ["17/05 - Bioestimulador", "19/05 - Cuidados imediatos", "24/05 - Feedback D+7"],
    conversation: ["Clínica: Como está se sentindo?", "Paciente: Sem incômodo.", "Sistema: Preparar retorno D+30."],
  },
]);

let automationRules = loadState("revivaV2AutomationRules", [
  {
    id: "post-risk",
    name: "Transferir pos-procedimento com risco",
    type: "Segurança clínica",
    status: "Ativa",
    trigger: "Resposta com dor, foto alterada ou palavra de alerta",
    stop: "Humano assume conversa",
    owner: "Enfermagem",
    window: "Imediato",
    risk: "Dor intensa, febre, secreção, ardor progressivo ou foto fora do padrão esperado.",
    response: "Criar tarefa para enfermagem e pausar ofertas comerciais por 7 dias.",
    attempts: ["Detectar palavra-chave no WhatsApp", "Pedir foto ou detalhe objetivo", "Transferir para responsável clínico"],
  },
  {
    id: "renewal-hot",
    name: "Renovação com 2 sessões restantes",
    type: "Recorrência",
    status: "Ativa",
    trigger: "Pacote chega em 80% de uso",
    stop: "Renovação paga ou paciente recusou",
    owner: "Comercial",
    window: "3 dias",
    risk: "Não ofertar se houver queixa clínica aberta ou NPS menor que 7.",
    response: "Enviar opções de continuidade e criar follow-up humano se não responder em 24h.",
    attempts: ["Valorizar evolução", "Enviar condição de continuidade", "Atendente chama com agenda aberta"],
  },
  {
    id: "return-late",
    name: "Retorno atrasado D+18",
    type: "Agenda",
    status: "Revisar",
    trigger: "Retorno D+15 não confirmado até D+18",
    stop: "Agenda confirmada",
    owner: "Concierge",
    window: "6h",
    risk: "Evitar tom de cobrança; reforçar cuidado e resultado.",
    response: "Oferecer dois horários e enviar para concierge se ignorar segunda tentativa.",
    attempts: ["Lembrete curto", "Nova sugestão de horário", "Humano assume agenda"],
  },
]);

let agendaSlots = loadState("revivaV3AgendaSlots", [
  {
    id: "retorno-carla",
    patientId: 3,
    date: "Terça, 26/05",
    time: "14:00",
    procedure: "Botox",
    window: "D+15",
    owner: "Concierge",
    channel: "WhatsApp confirmado",
    status: "Sugerido",
    reason: "Retorno ideal para fotos comparativas, avaliação de simetria e ajuste fino se necessário.",
  },
  {
    id: "laser-marina",
    patientId: 1,
    date: "Segunda, 25/05",
    time: "10:30",
    procedure: "Laser CO2 fracionado",
    window: "D+3",
    owner: "Enfermagem",
    channel: "Foto pendente",
    status: "Aguardando resposta",
    reason: "Acompanhamento pós-procedimento com sensibilidade relatada. Confirmar evolução antes de qualquer nova oferta.",
  },
  {
    id: "bio-beatriz",
    patientId: 5,
    date: "Quinta, 28/05",
    time: "09:40",
    procedure: "Bioestimulador",
    window: "D+30 previsto",
    owner: "Profissional",
    channel: "Lembrete automático",
    status: "Pré-agendado",
    reason: "Preparar retorno fotográfico e plano de manutenção com base no conforto relatado na primeira semana.",
  },
]);

let carePackages = loadState("revivaV3Packages", [
  {
    id: "renata-drenagem",
    patientId: 2,
    name: "Drenagem pós-operatória",
    used: 8,
    total: 10,
    value: "R$ 2.400",
    renewal: "3 dias",
    status: "Renovação quente",
    risk: "Médio",
    plan: "Valorizar evolução, oferecer continuidade semanal e sugerir dois horários antes do vencimento.",
  },
  {
    id: "juliana-peelings",
    patientId: 4,
    name: "Limpeza + peelings",
    used: 4,
    total: 6,
    value: "R$ 1.650",
    renewal: "Pendente",
    status: "Risco de pausa",
    risk: "Alto",
    plan: "Pedir retorno humano sobre resultado percebido antes de apresentar qualquer condição comercial.",
  },
  {
    id: "marina-laser",
    patientId: 1,
    name: "Laser premium",
    used: 3,
    total: 4,
    value: "R$ 1.890",
    renewal: "14 dias",
    status: "Acompanhar segurança",
    risk: "Alto",
    plan: "Bloquear oferta até revisar foto da pele. Se estiver seguro, propor manutenção em consulta de retorno.",
  },
  {
    id: "beatriz-bio",
    patientId: 5,
    name: "Bioestimulador anual",
    used: 1,
    total: 3,
    value: "R$ 3.200",
    renewal: "30 dias",
    status: "Ativo",
    risk: "Baixo",
    plan: "Preparar comparação fotográfica D+30 e convidar para calendário de manutenção anual.",
  },
]);

let clinicSettings = loadState("revivaV1ClinicSettings", {
  name: "Sua clínica",
  whatsapp: "+55 65 99800-2020",
  hours: "Segunda a sexta, 08h às 19h",
  policy: "Retorno em até 15 dias para toxina, D+2/D+7 para procedimentos ablativos e D+30 para bioestimuladores.",
  activeRole: "owner",
});

const roleProfiles = [
  { id: "owner", label: "Gestora", access: "Receita, equipe, ajustes e visão completa" },
  { id: "reception", label: "Recepção", access: "Agenda, confirmação de retorno e cadastro" },
  { id: "commercial", label: "Comercial", access: "Renovação de pacotes e recuperação de receita" },
  { id: "clinical", label: "Clínico", access: "Pós-procedimento, risco e transferência humana" },
];

const whatsappTemplates = [
  {
    id: "post-care",
    label: "Pós-procedimento",
    text: "Oi, {nome}! Passando para acompanhar sua recuperação. Pode me contar como está se sentindo e enviar uma foto em luz natural, se possível?",
  },
  {
    id: "return",
    label: "Retorno",
    text: "Oi, {nome}! Seu retorno já está na janela ideal para avaliarmos o resultado com calma. Tenho uma sugestão de horário e posso reservar para você.",
  },
  {
    id: "renewal",
    label: "Renovação",
    text: "Oi, {nome}! Seu pacote está chegando ao fim e sua evolução está consistente. Posso te enviar as opções para manter a continuidade do resultado?",
  },
  {
    id: "human",
    label: "Contato humano",
    text: "Oi, {nome}! Quero entender como você percebeu o resultado antes de qualquer nova orientação. Posso te chamar por aqui com calma?",
  },
];

const defaultWhatsappModel = {
  provider: "whatsapp_cloud_api",
  mode: "setup",
  clinicName: clinicSettings.name,
  phoneNumberId: "",
  businessAccountId: "",
  defaultTemplate: "retorno_confirmacao",
  consentRequired: true,
  webhookStatus: "aguardando_configuracao",
  status: "configuração assistida",
  tokenConfigured: false,
  templates: [
    {
      id: "pos_d1",
      name: "Pós-procedimento D+1",
      category: "Pós-procedimento",
      language: "pt_BR",
      stage: "D+1",
      body: "Oi, {{nome}}! Passando para acompanhar como você está nas primeiras 24h após {{procedimento}}. Me conte se teve algum desconforto fora do esperado.",
      variables: ["nome", "procedimento"],
    },
    {
      id: "pos_d2_foto",
      name: "Pós-procedimento D+2 com foto",
      category: "Pós-procedimento",
      language: "pt_BR",
      stage: "D+2",
      body: "Oi, {{nome}}! Pode me enviar uma foto em luz natural para acompanharmos sua evolução com cuidado? Assim validamos se está tudo dentro do esperado.",
      variables: ["nome"],
    },
    {
      id: "retorno_confirmacao",
      name: "Confirmação de retorno",
      category: "Retorno",
      language: "pt_BR",
      stage: "D+15",
      body: "Oi, {{nome}}! Seu retorno de {{procedimento}} já está na janela ideal. Tenho {{horario}} disponível para avaliarmos o resultado com calma. Posso reservar?",
      variables: ["nome", "procedimento", "horario"],
    },
    {
      id: "renovacao_pacote",
      name: "Renovação de pacote",
      category: "Pacotes",
      language: "pt_BR",
      stage: "Pacote vencendo",
      body: "Oi, {{nome}}! Seu pacote de {{procedimento}} está chegando ao fim e sua evolução está consistente. Quer que eu te envie as opções para manter a continuidade?",
      variables: ["nome", "procedimento"],
    },
    {
      id: "paciente_sumido",
      name: "Paciente sem resposta",
      category: "Recuperação",
      language: "pt_BR",
      stage: "Sem resposta",
      body: "Oi, {{nome}}! Notei que não conseguimos nos falar. Queria entender como você está e se posso ajudar em algo antes do próximo atendimento.",
      variables: ["nome"],
    },
    {
      id: "risco_humano",
      name: "Transferência humana",
      category: "Segurança clínica",
      language: "pt_BR",
      stage: "Risco",
      body: "{{nome}}, vou pedir para nossa equipe assumir seu acompanhamento agora. Queremos avaliar sua mensagem com calma antes de qualquer próxima orientação.",
      variables: ["nome"],
    },
  ],
};

let whatsappModel = loadState("revivaWhatsappModel", defaultWhatsappModel);

const qaChecklist = [
  "Fluxo pós-procedimento com sinais de alerta",
  "Agenda confirma retorno e atualiza CRM",
  "Pacote renova, pausa e registra histórico",
  "WhatsApp possui template e simulação de resposta",
  "Receita reflete oportunidades reais da clínica",
  "Perfis e configurações aparecem no app",
];

const funnelMetrics = [
  { label: "Elegíveis", value: 312, percent: 100 },
  { label: "Mensagem entregue", value: 286, percent: 92 },
  { label: "Responderam", value: 181, percent: 63 },
  { label: "Agendaram", value: 112, percent: 39 },
  { label: "Renovaram", value: 48, percent: 17 },
];

const patientList = document.querySelector("#patientList");
const detailName = document.querySelector("#detailName");
const detailStatus = document.querySelector("#detailStatus");
const detailHistory = document.querySelector("#detailHistory");
const detailAutomation = document.querySelector("#detailAutomation");
const detailRisk = document.querySelector("#detailRisk");
const detailValue = document.querySelector("#detailValue");
const detailSla = document.querySelector("#detailSla");
const detailTone = document.querySelector("#detailTone");
const whatsappStatusLabel = document.querySelector("#whatsappStatusLabel");
const deliverySteps = document.querySelector("#deliverySteps");
const protocolList = document.querySelector("#protocolList");
const messageText = document.querySelector("#messageText");
const copyButton = document.querySelector("#copyButton");
const copyNextMessageButton = document.querySelector("#copyNextMessageButton");
const sendButton = document.querySelector("#sendButton");
const searchInput = document.querySelector("#searchInput");
const toast = document.querySelector("#toast");
const syncStatus = document.querySelector("#syncStatus");
const roleSelect = document.querySelector("#roleSelect");
const filterButtons = document.querySelectorAll("[data-filter]");
const viewButtons = document.querySelectorAll("[data-view-target]");
const views = document.querySelectorAll("[data-view]");

const flowList = document.querySelector("#flowList");
const flowCategory = document.querySelector("#flowCategory");
const flowName = document.querySelector("#flowName");
const flowStatus = document.querySelector("#flowStatus");
const flowWindow = document.querySelector("#flowWindow");
const flowConversion = document.querySelector("#flowConversion");
const flowRevenue = document.querySelector("#flowRevenue");
const flowEscalation = document.querySelector("#flowEscalation");
const flowOffer = document.querySelector("#flowOffer");
const flowTemplate = document.querySelector("#flowTemplate");
const flowPreviewMeta = document.querySelector("#flowPreviewMeta");
const flowPreviewText = document.querySelector("#flowPreviewText");
const testPatientSelect = document.querySelector("#testPatientSelect");
const variantSelect = document.querySelector("#variantSelect");
const slaSelect = document.querySelector("#slaSelect");
const ownerSelect = document.querySelector("#ownerSelect");
const qualityScore = document.querySelector("#qualityScore");
const qualityList = document.querySelector("#qualityList");
const journeySteps = document.querySelector("#journeySteps");
const addStepButton = document.querySelector("#addStepButton");
const saveFlowButton = document.querySelector("#saveFlowButton");
const previewFlowButton = document.querySelector("#previewFlowButton");
const crmPatientList = document.querySelector("#crmPatientList");
const crmSegment = document.querySelector("#crmSegment");
const crmName = document.querySelector("#crmName");
const crmStatus = document.querySelector("#crmStatus");
const crmPhone = document.querySelector("#crmPhone");
const crmLtv = document.querySelector("#crmLtv");
const crmPackage = document.querySelector("#crmPackage");
const crmNext = document.querySelector("#crmNext");
const crmTimeline = document.querySelector("#crmTimeline");
const crmConversation = document.querySelector("#crmConversation");
const crmSearchInput = document.querySelector("#crmSearchInput");
const crmSegmentFilter = document.querySelector("#crmSegmentFilter");
const crmTags = document.querySelector("#crmTags");
const openPatientAgendaButton = document.querySelector("#openPatientAgendaButton");
const openPatientPackageButton = document.querySelector("#openPatientPackageButton");
const markHumanTouchButton = document.querySelector("#markHumanTouchButton");
const registerReplyButton = document.querySelector("#registerReplyButton");
const resolvePatientButton = document.querySelector("#resolvePatientButton");
const createRenewalOpportunityButton = document.querySelector("#createRenewalOpportunityButton");
const addPatientObservationButton = document.querySelector("#addPatientObservationButton");
const addNoteButton = document.querySelector("#addNoteButton");
const crmCopyButton = document.querySelector("#crmCopyButton");
const automationRuleList = document.querySelector("#automationRuleList");
const ruleType = document.querySelector("#ruleType");
const ruleName = document.querySelector("#ruleName");
const ruleStatus = document.querySelector("#ruleStatus");
const ruleTrigger = document.querySelector("#ruleTrigger");
const ruleStop = document.querySelector("#ruleStop");
const ruleOwner = document.querySelector("#ruleOwner");
const ruleWindow = document.querySelector("#ruleWindow");
const ruleRisk = document.querySelector("#ruleRisk");
const ruleResponse = document.querySelector("#ruleResponse");
const ruleAttempts = document.querySelector("#ruleAttempts");
const approveRuleButton = document.querySelector("#approveRuleButton");
const waPatientSelect = document.querySelector("#waPatientSelect");
const waTemplateSelect = document.querySelector("#waTemplateSelect");
const waPreviewClinic = document.querySelector("#waPreviewClinic");
const waPreviewMeta = document.querySelector("#waPreviewMeta");
const waPreviewText = document.querySelector("#waPreviewText");
const simulateReplyButton = document.querySelector("#simulateReplyButton");
const simulateRiskButton = document.querySelector("#simulateRiskButton");
const agendaSuggestedCount = document.querySelector("#agendaSuggestedCount");
const agendaSlotList = document.querySelector("#agendaSlotList");
const agendaPatientName = document.querySelector("#agendaPatientName");
const agendaProcedure = document.querySelector("#agendaProcedure");
const agendaStatus = document.querySelector("#agendaStatus");
const agendaWindow = document.querySelector("#agendaWindow");
const agendaTime = document.querySelector("#agendaTime");
const agendaOwner = document.querySelector("#agendaOwner");
const agendaChannel = document.querySelector("#agendaChannel");
const agendaReason = document.querySelector("#agendaReason");
const agendaStatusSelect = document.querySelector("#agendaStatusSelect");
const agendaOwnerSelect = document.querySelector("#agendaOwnerSelect");
const agendaDateInput = document.querySelector("#agendaDateInput");
const agendaTimeInput = document.querySelector("#agendaTimeInput");
const confirmAppointmentButton = document.querySelector("#confirmAppointmentButton");
const copyAppointmentButton = document.querySelector("#copyAppointmentButton");
const sendAppointmentButton = document.querySelector("#sendAppointmentButton");
const missAppointmentButton = document.querySelector("#missAppointmentButton");
const attendedAppointmentButton = document.querySelector("#attendedAppointmentButton");
const saveAppointmentButton = document.querySelector("#saveAppointmentButton");
const cancelAppointmentButton = document.querySelector("#cancelAppointmentButton");
const packageRevenueSummary = document.querySelector("#packageRevenueSummary");
const packageList = document.querySelector("#packageList");
const packagePatientName = document.querySelector("#packagePatientName");
const packageName = document.querySelector("#packageName");
const packageStatus = document.querySelector("#packageStatus");
const packageProgress = document.querySelector("#packageProgress");
const packageValue = document.querySelector("#packageValue");
const packageRenewal = document.querySelector("#packageRenewal");
const packageRisk = document.querySelector("#packageRisk");
const packageProgressBar = document.querySelector("#packageProgressBar");
const packagePlanText = document.querySelector("#packagePlanText");
const packageUsedInput = document.querySelector("#packageUsedInput");
const packageTotalInput = document.querySelector("#packageTotalInput");
const packageExpiryInput = document.querySelector("#packageExpiryInput");
const packageConditionInput = document.querySelector("#packageConditionInput");
const useSessionButton = document.querySelector("#useSessionButton");
const copyPackageProposalButton = document.querySelector("#copyPackageProposalButton");
const renewPackageButton = document.querySelector("#renewPackageButton");
const partialRenewPackageButton = document.querySelector("#partialRenewPackageButton");
const savePackageButton = document.querySelector("#savePackageButton");
const pausePackageButton = document.querySelector("#pausePackageButton");
const packageFollowUpButton = document.querySelector("#packageFollowUpButton");
const metricRecoverable = document.querySelector("#metricRecoverable");
const moneyTableValue = document.querySelector("#moneyTableValue");
const metricPostProcedure = document.querySelector("#metricPostProcedure");
const metricReturnRate = document.querySelector("#metricReturnRate");
const metricNoResponse = document.querySelector("#metricNoResponse");
const revenueRenewals = document.querySelector("#revenueRenewals");
const revenueAppointments = document.querySelector("#revenueAppointments");
const revenueWhatsapp = document.querySelector("#revenueWhatsapp");
const revenueRisk = document.querySelector("#revenueRisk");
const funnelList = document.querySelector("#funnelList");
const procedureMetrics = document.querySelector("#procedureMetrics");
const riskList = document.querySelector("#riskList");
const qaScoreSummary = document.querySelector("#qaScoreSummary");
const clinicNameInput = document.querySelector("#clinicNameInput");
const clinicWhatsappInput = document.querySelector("#clinicWhatsappInput");
const clinicHoursInput = document.querySelector("#clinicHoursInput");
const clinicPolicyInput = document.querySelector("#clinicPolicyInput");
const saveSettingsButton = document.querySelector("#saveSettingsButton");
const saveOnboardingButton = document.querySelector("#saveOnboardingButton");
const profileGrid = document.querySelector("#profileGrid");
const backupDataButton = document.querySelector("#backupDataButton");
const restoreDemoButton = document.querySelector("#restoreDemoButton");
const dataStatusText = document.querySelector("#dataStatusText");
const testWhatsappIntegrationButton = document.querySelector("#testWhatsappIntegrationButton");
const testCalendarIntegrationButton = document.querySelector("#testCalendarIntegrationButton");
const testPaymentIntegrationButton = document.querySelector("#testPaymentIntegrationButton");
const integrationStatusText = document.querySelector("#integrationStatusText");
const whatsappProviderInput = document.querySelector("#whatsappProviderInput");
const whatsappModeInput = document.querySelector("#whatsappModeInput");
const whatsappPhoneNumberIdInput = document.querySelector("#whatsappPhoneNumberIdInput");
const whatsappBusinessAccountIdInput = document.querySelector("#whatsappBusinessAccountIdInput");
const whatsappDefaultTemplateInput = document.querySelector("#whatsappDefaultTemplateInput");
const whatsappConsentRequiredInput = document.querySelector("#whatsappConsentRequiredInput");
const whatsappModelStatusText = document.querySelector("#whatsappModelStatusText");
const whatsappTemplateList = document.querySelector("#whatsappTemplateList");
const saveWhatsappModelButton = document.querySelector("#saveWhatsappModelButton");
const testWhatsappModelButton = document.querySelector("#testWhatsappModelButton");
const qaList = document.querySelector("#qaList");
const modalBackdrop = document.querySelector("#modalBackdrop");
const modalKicker = document.querySelector("#modalKicker");
const modalTitle = document.querySelector("#modalTitle");
const modalForm = document.querySelector("#modalForm");
const closeModalButton = document.querySelector("#closeModalButton");
const modalButtons = document.querySelectorAll("[data-modal]");
const logoutButton = document.querySelector("#logoutButton");
const demoExperience = document.body.classList.contains("demo-v2");
const apiEnabled = location.protocol !== "file:" && !demoExperience;
let apiSession = null;
let apiHydrated = false;

let activeFilter = "todos";
let activeCrmFilter = "todos";
let selectedId = patients[0].id;
let selectedFlowId = flows[0].id;
let selectedCrmId = patients[0].id;
let selectedRuleId = automationRules[0].id;
let selectedSlotId = agendaSlots[0]?.id;
let selectedPackageId = carePackages[0]?.id;
let activeModal = null;

function loadState(key, fallback) {
  try {
    const raw = localStorage.getItem(key);
    return raw ? JSON.parse(raw) : fallback;
  } catch {
    return fallback;
  }
}

function saveState(key, value) {
  try {
    localStorage.setItem(key, JSON.stringify(value));
    if (syncStatus) syncStatus.textContent = "Dados salvos";
    if (apiEnabled && apiSession && apiHydrated) {
      fetch(`/api/state/${encodeURIComponent(key)}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ value }),
      })
        .then((response) => {
          if (!response.ok) throw new Error("API save failed");
          if (syncStatus) syncStatus.textContent = "Dados salvos";
        })
        .catch(() => {
          if (syncStatus) syncStatus.textContent = "Dados salvos";
        });
    }
  } catch {
    if (syncStatus) syncStatus.textContent = "Erro ao salvar";
    showToast("Não foi possível salvar localmente.");
  }
}

async function apiJson(path, options = {}) {
  const response = await fetch(path, {
    headers: { "Content-Type": "application/json", ...(options.headers || {}) },
    ...options,
  });
  const payload = await response.json().catch(() => ({}));
  if (!response.ok) throw new Error(payload.error || "Erro de API");
  return payload;
}

function applyRemoteState(remoteState = {}) {
  patients = remoteState.revivaV2Patients || patients;
  flows = remoteState.revivaV2Flows || flows;
  crmProfiles = remoteState.revivaV2CrmProfiles || crmProfiles;
  automationRules = remoteState.revivaV2AutomationRules || automationRules;
  agendaSlots = remoteState.revivaV3AgendaSlots || agendaSlots;
  carePackages = remoteState.revivaV3Packages || carePackages;
  clinicSettings = remoteState.revivaV1ClinicSettings || clinicSettings;

  selectedId = patients[0]?.id;
  selectedFlowId = flows[0]?.id;
  selectedCrmId = patients[0]?.id;
  selectedRuleId = automationRules[0]?.id;
  selectedSlotId = agendaSlots[0]?.id;
  selectedPackageId = carePackages[0]?.id;
}

function renderAll() {
  updateShell();
  populatePatientSelects();
  renderWhatsAppLab();
  renderSettings();
  selectPatient(selectedId);
  selectFlow(selectedFlowId);
  selectCrmPatient(selectedCrmId);
  selectAutomationRule(selectedRuleId);
  selectAgendaSlot(selectedSlotId);
  selectPackage(selectedPackageId);
  renderMetrics();
}

function showLoginGate(errorMessage = "") {
  if (!apiEnabled || document.querySelector("#loginGate")) return;
  const gate = document.createElement("section");
  gate.className = "login-gate";
  gate.id = "loginGate";
  gate.innerHTML = `
    <form class="login-card" id="loginForm">
      <div class="brand-lockup login-logo"><img src="assets/revyvas-logo-real.png" alt="Revyvas CRM" /></div>
      <p class="eyebrow">Revyvas CRM</p>
      <h2>Entrar na clínica</h2>
      <p>Acesse o painel de retenção, pós-procedimento e renovação de pacotes da sua clínica.</p>
      <label><span>Email</span><input name="email" type="email" placeholder="email@clinica.com.br" required /></label>
      <label><span>Senha</span><input name="password" type="password" placeholder="Digite sua senha" required /></label>
      <button class="primary-button deep" type="submit">Entrar</button>
      <small class="login-access-note">Acesso exclusivo para clínicas cadastradas.</small>
      <small id="loginError">${errorMessage}</small>
    </form>
  `;
  document.body.appendChild(gate);
  gate.querySelector(".login-card h2").textContent = "Entrar na cl\u00ednica";
  gate.querySelector(".login-card > p:not(.eyebrow)").textContent =
    "Acesse o painel de reten\u00e7\u00e3o, p\u00f3s-procedimento e renova\u00e7\u00e3o de pacotes da sua cl\u00ednica.";

  gate.querySelector("#loginForm").addEventListener("submit", async (event) => {
    event.preventDefault();
    const values = Object.fromEntries(new FormData(event.currentTarget).entries());
    try {
      apiSession = await apiJson("/api/auth/login", {
        method: "POST",
        body: JSON.stringify(values),
      });
      gate.remove();
      await hydrateFromApi();
      showToast("Sessão iniciada com segurança.");
    } catch (error) {
      gate.querySelector("#loginError").textContent = error.message;
    }
  });
}

async function hydrateFromApi() {
  if (!apiEnabled) {
    apiHydrated = true;
    renderAll();
    return;
  }

  try {
    apiSession = apiSession || (await apiJson("/api/session"));
    const payload = await apiJson("/api/state");
    await seedRemoteStateIfEmpty(payload.state);
    applyRemoteState(payload.state);
    const whatsappPayload = await apiJson("/api/whatsapp/model").catch(() => null);
    if (whatsappPayload?.model) {
      whatsappModel = { ...defaultWhatsappModel, ...whatsappPayload.model };
      saveState("revivaWhatsappModel", whatsappModel);
    }
    apiHydrated = true;
    renderAll();
    if (syncStatus) syncStatus.textContent = "Dados prontos";
  } catch {
    showLoginGate();
  }
}

function normalizeText(value) {
  return String(value || "")
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "");
}

function moneyToNumber(value) {
  return Number(String(value || "").replace(/[^\d]/g, "")) || 0;
}

function firstName(name) {
  return String(name || "Paciente").split(" ")[0];
}

function patientById(id) {
  return patients.find((patient) => patient.id === Number(id));
}

function profileById(id) {
  return crmProfiles.find((profile) => profile.patientId === Number(id));
}

function addTimeline(patientId, text) {
  const profile = profileById(patientId);
  if (profile) profile.timeline.unshift(text);
}

function addConversation(patientId, text) {
  const profile = profileById(patientId);
  if (profile) profile.conversation.unshift(text);
}

function saveCoreState() {
  saveState("revivaV2Patients", patients);
  saveState("revivaV2CrmProfiles", crmProfiles);
  saveState("revivaV3AgendaSlots", agendaSlots);
  saveState("revivaV3Packages", carePackages);
}

async function seedRemoteStateIfEmpty(remoteState = {}) {
  if (!apiEnabled || !apiSession) return;
  const seed = {
    revivaV2Patients: patients,
    revivaV2Flows: flows,
    revivaV2CrmProfiles: crmProfiles,
    revivaV2AutomationRules: automationRules,
    revivaV3AgendaSlots: agendaSlots,
    revivaV3Packages: carePackages,
    revivaV1ClinicSettings: clinicSettings,
  };
  const missingEntries = Object.entries(seed).filter(([key]) => !remoteState[key]);
  if (!missingEntries.length) return;
  await Promise.all(
    missingEntries.map(([key, value]) =>
      apiJson(`/api/state/${encodeURIComponent(key)}`, {
        method: "PUT",
        body: JSON.stringify({ value }),
      }),
    ),
  );
  if (syncStatus) syncStatus.textContent = "Dados iniciais salvos no servidor";
}

function appMetrics() {
  const postCount = patients.filter((patient) => patient.type === "pos").length;
  const noResponse = patients.filter((patient) => patient.whatsappStage === "sem_resposta").length;
  const riskCount = patients.filter((patient) => patient.urgency === "alert" || patient.risk === "Alto").length;
  const confirmed = agendaSlots.filter((slot) => ["Confirmado", "Compareceu"].includes(slot.status)).length;
  const scheduledRate = agendaSlots.length ? Math.round((confirmed / agendaSlots.length) * 100) : 0;
  const renewalTotal = carePackages
    .filter((item) => item.status !== "Renovado" && item.status !== "Pausado")
    .reduce((sum, item) => sum + moneyToNumber(item.value), 0);
  const whatsappPositive = patients.filter((patient) => ["respondido", "agendado"].includes(patient.whatsappStage)).length;
  const whatsappRate = patients.length ? Math.round((whatsappPositive / patients.length) * 100) : 0;
  const renewed = carePackages.filter((item) => item.status === "Renovado").length;

  return { postCount, noResponse, riskCount, confirmed, scheduledRate, renewalTotal, whatsappRate, renewed };
}

function updateShell() {
  document.querySelectorAll(".brand span, #waPreviewClinic").forEach((item) => {
    item.textContent = clinicSettings.name;
  });
  const topbarDate = document.querySelector(".topbar .eyebrow");
  if (topbarDate) {
    topbarDate.textContent = new Intl.DateTimeFormat("pt-BR", {
      weekday: "long",
      day: "2-digit",
      month: "long",
    }).format(new Date());
  }
  if (roleSelect) roleSelect.value = clinicSettings.activeRole;
}

function populatePatientSelects() {
  const options = patients.map((patient) => `<option value="${patient.id}">${patient.name}</option>`).join("");
  if (waPatientSelect) waPatientSelect.innerHTML = options;
}

function renderWhatsAppLab() {
  if (!waPatientSelect || !waTemplateSelect) return;
  if (!waTemplateSelect.options.length) {
    waTemplateSelect.innerHTML = whatsappTemplates.map((item) => `<option value="${item.id}">${item.label}</option>`).join("");
  }

  if (!waPatientSelect.options.length) populatePatientSelects();
  const patient = patientById(waPatientSelect.value) || patients[0];
  const template = whatsappTemplates.find((item) => item.id === waTemplateSelect.value) || whatsappTemplates[0];
  waPreviewMeta.textContent = `${patient.procedure} - ${patient.tone}`;
  waPreviewText.textContent = template.text.replace("{nome}", firstName(patient.name));
}

function renderSettings() {
  if (!clinicNameInput) return;
  clinicNameInput.value = clinicSettings.name;
  clinicWhatsappInput.value = clinicSettings.whatsapp;
  clinicHoursInput.value = clinicSettings.hours;
  clinicPolicyInput.value = clinicSettings.policy;
  renderWhatsAppModel();

  profileGrid.innerHTML = "";
  roleProfiles.forEach((role) => {
    const card = document.createElement("button");
    card.type = "button";
    card.className = `profile-card${role.id === clinicSettings.activeRole ? " active" : ""}`;
    card.innerHTML = `<strong>${role.label}</strong><span>${role.access}</span>`;
    card.addEventListener("click", () => {
      clinicSettings.activeRole = role.id;
      saveState("revivaV1ClinicSettings", clinicSettings);
      updateShell();
      renderSettings();
      showToast(`Perfil ${role.label} ativo.`);
    });
    profileGrid.appendChild(card);
  });

  qaList.innerHTML = "";
  qaChecklist.forEach((item) => {
    const row = document.createElement("span");
    row.className = "qa-item complete";
    row.textContent = item;
    qaList.appendChild(row);
  });
  qaScoreSummary.textContent = "100%";
}

function renderWhatsAppModel() {
  if (!whatsappProviderInput) return;
  whatsappModel = {
    ...defaultWhatsappModel,
    ...whatsappModel,
    clinicName: clinicSettings.name,
    templates: whatsappModel.templates?.length ? whatsappModel.templates : defaultWhatsappModel.templates,
  };
  whatsappProviderInput.value = whatsappModel.provider || "whatsapp_cloud_api";
  whatsappModeInput.value = whatsappModel.mode || "setup";
  whatsappPhoneNumberIdInput.value = whatsappModel.phoneNumberId || "";
  whatsappBusinessAccountIdInput.value = whatsappModel.businessAccountId || "";
  whatsappDefaultTemplateInput.innerHTML = whatsappModel.templates
    .map((template) => `<option value="${template.id}">${template.name}</option>`)
    .join("");
  whatsappDefaultTemplateInput.value = whatsappModel.defaultTemplate || whatsappModel.templates[0]?.id;
  whatsappConsentRequiredInput.checked = Boolean(whatsappModel.consentRequired);
  whatsappModelStatusText.textContent = `Status ${whatsappModel.status || "configuração assistida"} · ${whatsappModel.mode || "setup"} · ${whatsappModel.tokenConfigured ? "credencial configurada" : "aguardando credenciais oficiais"}`;

  whatsappTemplateList.innerHTML = "";
  whatsappModel.templates.forEach((template) => {
    const row = document.createElement("article");
    row.className = "whatsapp-template-card";
    row.innerHTML = `
      <div>
        <span>${template.category} · ${template.stage}</span>
        <strong>${template.name}</strong>
        <p>${template.body}</p>
      </div>
      <button type="button" data-copy-template="${template.id}">Copiar</button>
    `;
    whatsappTemplateList.appendChild(row);
  });
}

function collectWhatsappModelFromForm() {
  return {
    ...whatsappModel,
    provider: whatsappProviderInput.value,
    mode: whatsappModeInput.value,
    clinicName: clinicSettings.name,
    phoneNumberId: whatsappPhoneNumberIdInput.value.trim(),
    businessAccountId: whatsappBusinessAccountIdInput.value.trim(),
    defaultTemplate: whatsappDefaultTemplateInput.value,
    consentRequired: whatsappConsentRequiredInput.checked,
    templates: whatsappModel.templates?.length ? whatsappModel.templates : defaultWhatsappModel.templates,
  };
}

function showView(viewName) {
  views.forEach((view) => view.classList.toggle("active", view.dataset.view === viewName));
  viewButtons.forEach((button) => {
    button.classList.toggle("active", button.dataset.viewTarget === viewName);
  });
}

function visiblePatients() {
  const query = normalizeText(searchInput.value.trim());

  return patients.filter((patient) => {
    const matchesFilter = activeFilter === "todos" || patient.type === activeFilter;
    const searchable = normalizeText(`${patient.name} ${patient.procedure} ${patient.next} ${patient.tag}`);
    return matchesFilter && (!query || searchable.includes(query));
  });
}

function urgencyLabel(patient) {
  if (patient.urgency === "alert") return "Crítico";
  if (patient.urgency === "warning") return "Atenção";
  return "Em dia";
}

function renderPatients() {
  const rows = visiblePatients();
  patientList.innerHTML = "";

  if (!rows.length) {
    patientList.innerHTML = `
      <div class="empty-state">
        <strong>Nenhum paciente encontrado</strong>
        <span>Ajuste a busca ou selecione outro filtro.</span>
      </div>
    `;
    return;
  }

  rows.forEach((patient) => {
    const row = document.createElement("button");
    row.className = `patient-row${patient.id === selectedId ? " active" : ""}`;
    row.type = "button";
    row.innerHTML = `
      <span class="avatar">${patient.initials}</span>
      <span class="patient-meta">
        <strong>${patient.name}</strong>
        <span>${patient.procedure} - ${patient.next}</span>
        <small>${patient.due} - score ${patient.score}</small>
      </span>
      <span class="tag-stack">
        <span class="tag ${patient.urgency}">${patient.tag}</span>
        <span class="tag quiet">${urgencyLabel(patient)}</span>
      </span>
    `;
    row.addEventListener("click", () => selectPatient(patient.id));
    patientList.appendChild(row);
  });
}

function renderProtocol(patient) {
  protocolList.innerHTML = "";

  patient.protocol.forEach((step) => {
    const item = document.createElement("li");
    item.textContent = step;
    protocolList.appendChild(item);
  });
}

function renderDelivery(patient) {
  const stages = [
    { id: "enviado", label: "Enviado" },
    { id: "entregue", label: "Entregue" },
    { id: "respondido", label: "Respondido" },
    { id: "agendado", label: "Agendado" },
  ];
  const specialLabels = {
    sem_resposta: "Sem resposta",
    transferido: "Transferido",
  };
  const currentIndex = stages.findIndex((stage) => stage.id === patient.whatsappStage);

  whatsappStatusLabel.textContent = specialLabels[patient.whatsappStage] || stages[Math.max(currentIndex, 0)]?.label || "Aguardando";
  deliverySteps.innerHTML = "";

  stages.forEach((stage, index) => {
    const item = document.createElement("span");
    item.className = `delivery-step${index <= currentIndex ? " complete" : ""}`;
    if (patient.whatsappStage === "sem_resposta" && stage.id === "respondido") item.classList.add("warning");
    item.textContent = stage.label;
    deliverySteps.appendChild(item);
  });
}

function selectPatient(id) {
  selectedId = id;
  const patient = patients.find((item) => item.id === id);

  detailName.textContent = patient.name;
  detailStatus.textContent = patient.status;
  detailHistory.textContent = patient.history;
  detailAutomation.textContent = patient.automation;
  detailRisk.textContent = patient.risk;
  detailValue.textContent = patient.value;
  detailSla.textContent = patient.sla;
  detailTone.textContent = `Tom ${patient.tone.toLowerCase()}`;
  messageText.value = patient.message;
  sendButton.textContent = "Marcar enviado";

  renderProtocol(patient);
  renderDelivery(patient);
  renderPatients();
}

function renderFlows() {
  flowList.innerHTML = "";

  flows.forEach((flow) => {
    const button = document.createElement("button");
    button.className = `flow-card${flow.id === selectedFlowId ? " active" : ""}`;
    button.type = "button";
    button.innerHTML = `
      <span>
        <strong>${flow.name}</strong>
        <small>${flow.category} - ${flow.window}</small>
      </span>
      <b>${flow.health}%</b>
    `;
    button.addEventListener("click", () => selectFlow(flow.id));
    flowList.appendChild(button);
  });
}

function renderJourney(flow) {
  journeySteps.innerHTML = "";

  flow.steps.forEach((step, index) => {
    const item = document.createElement("div");
    item.className = "journey-step";
    item.innerHTML = `
      <span class="step-index">${index + 1}</span>
      <div>
        <strong>${step.time} - ${step.channel}</strong>
        <p>${step.action}</p>
      </div>
    `;
    journeySteps.appendChild(item);
  });
}

function selectedTemplate(flow) {
  if (variantSelect.value === "followup") return flow.variants.followup;
  if (variantSelect.value === "human") return flow.variants.human;
  return flowTemplate.value;
}

function updateFlowPreview(flow) {
  const testName = testPatientSelect.value;
  flowPreviewMeta.textContent = `${testName} - ${flow.window} - ${slaSelect.value}`;
  flowPreviewText.textContent = selectedTemplate(flow).replace("{nome}", testName);
}

function renderQuality(flow) {
  const expected = 5;
  qualityScore.textContent = `${Math.min(flow.quality.length, expected)}/${expected}`;
  qualityList.innerHTML = "";

  flow.quality.forEach((item) => {
    const row = document.createElement("span");
    row.className = "quality-item complete";
    row.textContent = item;
    qualityList.appendChild(row);
  });

  Array.from({ length: Math.max(expected - flow.quality.length, 0) }).forEach((_, index) => {
    const row = document.createElement("span");
    row.className = "quality-item pending";
    row.textContent = index === 0 ? "Revisar tom da mensagem" : "Validar com equipe";
    qualityList.appendChild(row);
  });
}

function selectFlow(id) {
  selectedFlowId = id;
  const flow = flows.find((item) => item.id === id);

  flowCategory.textContent = flow.category;
  flowName.textContent = flow.name;
  flowStatus.textContent = flow.status;
  flowWindow.textContent = flow.window;
  flowConversion.textContent = flow.conversion;
  flowRevenue.textContent = flow.revenue;
  flowEscalation.textContent = flow.escalation;
  flowOffer.textContent = flow.offer;
  flowTemplate.value = flow.template;
  slaSelect.value = flow.sla;
  ownerSelect.value = flow.owner;
  variantSelect.value = "primary";

  renderJourney(flow);
  renderFlows();
  renderQuality(flow);
  updateFlowPreview(flow);
}

function renderCrmPatients() {
  crmPatientList.innerHTML = "";
  const query = normalizeText(crmSearchInput?.value || "");

  patients
    .filter((patient) => {
      const profile = profileById(patient.id);
      const segment = activeCrmFilter === "todos" || patient.type === activeCrmFilter || (activeCrmFilter === "risco" && patient.urgency === "alert");
      const searchable = normalizeText(`${patient.name} ${patient.procedure} ${patient.next} ${profile?.segment}`);
      return segment && (!query || searchable.includes(query));
    })
    .forEach((patient) => {
    const profile = crmProfiles.find((item) => item.patientId === patient.id);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `crm-patient-card${patient.id === selectedCrmId ? " active" : ""}`;
    button.innerHTML = `
      <span class="avatar">${patient.initials}</span>
      <span>
        <strong>${patient.name}</strong>
        <small>${profile.segment} - ${patient.procedure}</small>
      </span>
      <b>${patient.value}</b>
    `;
    button.addEventListener("click", () => selectCrmPatient(patient.id));
    crmPatientList.appendChild(button);
  });

  if (!crmPatientList.children.length) {
    crmPatientList.innerHTML = `<div class="empty-state"><strong>Nenhum paciente nesse recorte</strong><span>Use outro filtro ou busca.</span></div>`;
  }
}

function renderList(container, items, className) {
  container.innerHTML = "";
  items.forEach((item) => {
    const row = document.createElement("span");
    row.className = className;
    row.textContent = item;
    container.appendChild(row);
  });
}

function selectCrmPatient(id) {
  selectedCrmId = id;
  const patient = patients.find((item) => item.id === id);
  const profile = crmProfiles.find((item) => item.patientId === id);

  crmSegment.textContent = profile.segment;
  crmName.textContent = patient.name;
  crmStatus.textContent = profile.status;
  crmPhone.textContent = profile.phone;
  crmLtv.textContent = profile.ltv;
  crmPackage.textContent = profile.package;
  crmNext.textContent = patient.next;
  crmTags.innerHTML = "";
  [patient.tag, urgencyLabel(patient), patient.tone, patient.whatsappStage.replace("_", " ")].forEach((tag) => {
    const item = document.createElement("span");
    item.className = "tag quiet";
    item.textContent = tag;
    crmTags.appendChild(item);
  });

  renderList(crmTimeline, profile.timeline, "timeline-item");
  renderList(crmConversation, profile.conversation, "conversation-item");
  renderCrmPatients();
}

function renderAutomationRules() {
  automationRuleList.innerHTML = "";

  automationRules.forEach((rule) => {
    const button = document.createElement("button");
    button.type = "button";
    button.className = `automation-rule-card${rule.id === selectedRuleId ? " active" : ""}`;
    button.innerHTML = `
      <span>
        <strong>${rule.name}</strong>
        <small>${rule.type} - ${rule.window}</small>
      </span>
      <b>${rule.status}</b>
    `;
    button.addEventListener("click", () => selectAutomationRule(rule.id));
    automationRuleList.appendChild(button);
  });
}

function selectAutomationRule(id) {
  selectedRuleId = id;
  const rule = automationRules.find((item) => item.id === id);

  ruleType.textContent = rule.type;
  ruleName.textContent = rule.name;
  ruleStatus.textContent = rule.status;
  ruleTrigger.textContent = rule.trigger;
  ruleStop.textContent = rule.stop;
  ruleOwner.textContent = rule.owner;
  ruleWindow.textContent = rule.window;
  ruleRisk.textContent = rule.risk;
  ruleResponse.textContent = rule.response;
  ruleAttempts.innerHTML = "";

  rule.attempts.forEach((attempt, index) => {
    const row = document.createElement("div");
    row.className = "journey-step";
    row.innerHTML = `
      <span class="step-index">${index + 1}</span>
      <div>
        <strong>Tentativa ${index + 1}</strong>
        <p>${attempt}</p>
      </div>
    `;
    ruleAttempts.appendChild(row);
  });

  renderAutomationRules();
}

function packageValueNumber(value) {
  const numeric = value.replace(/[^\d]/g, "");
  return Number(numeric || 0);
}

function formatCurrency(value) {
  return new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
    maximumFractionDigits: 0,
  }).format(value);
}

async function copyText(text, toastMessage = "Texto copiado para envio no WhatsApp.") {
  try {
    await navigator.clipboard.writeText(text);
  } catch {
    const scratch = document.createElement("textarea");
    scratch.value = text;
    document.body.appendChild(scratch);
    scratch.select();
    document.execCommand("copy");
    scratch.remove();
  }
  showToast(toastMessage);
}

function renderAgendaSlots() {
  agendaSuggestedCount.textContent = agendaSlots.filter((slot) => slot.status !== "Confirmado").length;
  agendaSlotList.innerHTML = "";

  agendaSlots.forEach((slot) => {
    const patient = patients.find((item) => item.id === slot.patientId);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `slot-card${slot.id === selectedSlotId ? " active" : ""}`;
    button.innerHTML = `
      <span>
        <strong>${patient?.name || "Paciente"}</strong>
        <small>${slot.date} - ${slot.time} - ${slot.window}</small>
      </span>
      <b>${slot.status}</b>
    `;
    button.addEventListener("click", () => selectAgendaSlot(slot.id));
    agendaSlotList.appendChild(button);
  });
}

function selectAgendaSlot(id) {
  selectedSlotId = id;
  const slot = agendaSlots.find((item) => item.id === id) || agendaSlots[0];
  if (!slot) return;
  const patient = patients.find((item) => item.id === slot.patientId);
  if (!slot.status) slot.status = "Aguardando resposta";

  agendaPatientName.textContent = patient?.name || "Paciente";
  agendaProcedure.textContent = slot.procedure;
  agendaStatus.textContent = slot.status;
  agendaWindow.textContent = slot.window;
  agendaTime.textContent = `${slot.date}, ${slot.time}`;
  agendaOwner.textContent = slot.owner;
  agendaChannel.textContent = slot.channel;
  agendaReason.textContent = slot.reason;
  agendaStatusSelect.value = slot.status;
  if (!agendaStatusSelect.value) agendaStatusSelect.value = "Aguardando resposta";
  agendaOwnerSelect.value = slot.owner;
  agendaDateInput.value = slot.date;
  agendaTimeInput.value = slot.time;
  confirmAppointmentButton.textContent = slot.status === "Confirmado" ? "Confirmado" : "Confirmar";

  renderAgendaSlots();
}

function renderPackages() {
  const renewalTotal = carePackages
    .filter((item) => item.status !== "Renovado")
    .reduce((sum, item) => sum + packageValueNumber(item.value), 0);

  packageRevenueSummary.textContent = formatCurrency(renewalTotal);
  packageList.innerHTML = "";

  carePackages.forEach((item) => {
    const patient = patients.find((patientItem) => patientItem.id === item.patientId);
    const progress = Math.round((item.used / item.total) * 100);
    const button = document.createElement("button");
    button.type = "button";
    button.className = `package-card${item.id === selectedPackageId ? " active" : ""}`;
    button.innerHTML = `
      <span>
        <strong>${item.name}</strong>
        <small>${patient?.name || "Paciente"} - ${item.used}/${item.total} sessões</small>
      </span>
      <b>${progress}%</b>
    `;
    button.addEventListener("click", () => selectPackage(item.id));
    packageList.appendChild(button);
  });
}

function selectPackage(id) {
  selectedPackageId = id;
  const item = carePackages.find((packageItem) => packageItem.id === id) || carePackages[0];
  if (!item) return;
  const patient = patients.find((patientItem) => patientItem.id === item.patientId);
  const progress = Math.round((item.used / item.total) * 100);

  packagePatientName.textContent = patient?.name || "Paciente";
  packageName.textContent = item.name;
  packageStatus.textContent = item.status;
  packageProgress.textContent = `${item.used}/${item.total} sessões`;
  packageValue.textContent = item.value;
  packageRenewal.textContent = item.renewal;
  packageRisk.textContent = item.risk;
  packageProgressBar.style.width = `${progress}%`;
  packagePlanText.textContent = item.plan;
  packageUsedInput.value = item.used;
  packageTotalInput.value = item.total;
  packageExpiryInput.value = item.expires || item.renewal;
  packageConditionInput.value = item.condition || "";
  renewPackageButton.textContent = item.status === "Renovado" ? "Renovado" : "Renovar";

  renderPackages();
}

function renderMetrics() {
  const metrics = appMetrics();
  if (metricRecoverable) metricRecoverable.textContent = formatCurrency(metrics.renewalTotal);
  if (moneyTableValue) moneyTableValue.textContent = formatCurrency(metrics.renewalTotal);
  if (metricPostProcedure) metricPostProcedure.textContent = metrics.postCount;
  if (metricReturnRate) metricReturnRate.textContent = `${metrics.scheduledRate}%`;
  if (metricNoResponse) metricNoResponse.textContent = metrics.noResponse;
  if (revenueRenewals) revenueRenewals.textContent = formatCurrency(metrics.renewalTotal);
  if (revenueAppointments) revenueAppointments.textContent = metrics.confirmed;
  if (revenueWhatsapp) revenueWhatsapp.textContent = `${metrics.whatsappRate}%`;
  if (revenueRisk) revenueRisk.textContent = metrics.riskCount;

  const dynamicFunnel = [
    { label: "Elegíveis", value: patients.length, percent: 100 },
    { label: "Mensagem entregue", value: patients.filter((patient) => ["entregue", "respondido", "agendado"].includes(patient.whatsappStage)).length, percent: patients.length ? Math.round((patients.filter((patient) => ["entregue", "respondido", "agendado"].includes(patient.whatsappStage)).length / patients.length) * 100) : 0 },
    { label: "Responderam", value: patients.filter((patient) => patient.whatsappStage === "respondido").length, percent: patients.length ? Math.round((patients.filter((patient) => patient.whatsappStage === "respondido").length / patients.length) * 100) : 0 },
    { label: "Agendaram", value: metrics.confirmed, percent: agendaSlots.length ? Math.round((metrics.confirmed / agendaSlots.length) * 100) : 0 },
    { label: "Renovaram", value: metrics.renewed, percent: carePackages.length ? Math.round((metrics.renewed / carePackages.length) * 100) : 0 },
  ];

  funnelList.innerHTML = "";
  dynamicFunnel.forEach((item) => {
    const row = document.createElement("div");
    row.className = "funnel-row";
    row.innerHTML = `
      <div>
        <strong>${item.label}</strong>
        <span>${item.value} pacientes</span>
      </div>
      <div class="mini-bar"><span style="width: ${item.percent}%"></span></div>
      <b>${item.percent}%</b>
    `;
    funnelList.appendChild(row);
  });

  procedureMetrics.innerHTML = "";
  flows.forEach((flow) => {
    const row = document.createElement("div");
    row.className = "procedure-row";
    row.innerHTML = `
      <span>
        <strong>${flow.name}</strong>
        <small>${flow.category} - ${flow.window}</small>
      </span>
      <b>${flow.conversion}</b>
      <em>${flow.revenue}</em>
    `;
    procedureMetrics.appendChild(row);
  });

  riskList.innerHTML = "";
  patients
    .filter((patient) => patient.urgency === "alert")
    .forEach((patient) => {
      const profile = crmProfiles.find((item) => item.patientId === patient.id);
      const row = document.createElement("div");
      row.className = "risk-row";
      row.innerHTML = `
        <span>
          <strong>${patient.name}</strong>
          <small>${profile?.segment || "Sem segmento"} - ${patient.next}</small>
        </span>
        <b>${patient.value}</b>
        <button type="button" data-crm-open="${patient.id}">Abrir ficha</button>
      `;
      riskList.appendChild(row);
    });

  riskList.querySelectorAll("[data-crm-open]").forEach((button) => {
    button.addEventListener("click", () => {
      selectCrmPatient(Number(button.dataset.crmOpen));
      showView("patients");
    });
  });
}

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("visible");

  window.setTimeout(() => {
    toast.classList.remove("visible");
  }, 1800);
}

function openModal(type) {
  activeModal = type;
  const config = {
    patient: {
      kicker: "Novo paciente",
      title: "Cadastrar paciente",
      fields: [
        ["name", "Nome", "text", "Laura Nogueira"],
        ["procedure", "Procedimento", "text", "Skinbooster"],
        ["phone", "Telefone", "text", "+55 65 99900-1010"],
        ["package", "Pacote", "text", "Skinbooster - 1/3"],
      ],
    },
    flow: {
      kicker: "Novo protocolo",
      title: "Criar protocolo por procedimento",
      fields: [
        ["name", "Procedimento", "text", "Microagulhamento"],
        ["window", "Janela", "text", "D+3"],
        ["owner", "Responsável", "text", "Concierge"],
        ["template", "Mensagem principal", "textarea", "Oi, {nome}! Passando para acompanhar sua evolução. Pode me contar como está se sentindo?"],
      ],
    },
    rule: {
      kicker: "Nova regra",
      title: "Criar automação",
      fields: [
        ["name", "Nome da regra", "text", "Follow-up sem resposta"],
        ["trigger", "Gatilho", "text", "Paciente não respondeu em 24h"],
        ["owner", "Responsável", "text", "Concierge"],
        ["stop", "Condição de parada", "text", "Paciente respondeu ou agendou"],
      ],
    },
    appointment: {
      kicker: "Nova agenda",
      title: "Criar retorno",
      fields: [
        ["patient", "Paciente", "text", patients.find((patient) => patient.id === selectedCrmId)?.name || patients[0].name],
        ["procedure", "Procedimento", "text", patients.find((patient) => patient.id === selectedCrmId)?.procedure || "Avaliação"],
        ["date", "Data", "text", "Quarta, 27/05"],
        ["time", "Hora", "text", "15:30"],
        ["owner", "Responsável", "text", "Concierge"],
      ],
    },
    package: {
      kicker: "Novo pacote",
      title: "Criar pacote",
      fields: [
        ["patient", "Paciente", "text", patients.find((patient) => patient.id === selectedCrmId)?.name || patients[0].name],
        ["name", "Pacote", "text", "Skinbooster premium"],
        ["total", "Total de sessões", "number", "3"],
        ["value", "Valor", "text", "R$ 1.800"],
        ["renewal", "Renovação", "text", "30 dias"],
        ["condition", "Condição", "text", "1 sessão bônus"],
      ],
    },
  }[type];

  modalKicker.textContent = config.kicker;
  modalTitle.textContent = config.title;
  modalForm.innerHTML = `
    ${config.fields
      .map(([name, label, fieldType, placeholder]) => {
        const input =
          fieldType === "textarea"
            ? `<textarea name="${name}" rows="4" placeholder="${placeholder}" required></textarea>`
            : `<input name="${name}" type="${fieldType}" placeholder="${placeholder}" required />`;
        return `<label><span>${label}</span>${input}</label>`;
      })
      .join("")}
    <div class="modal-actions">
      <button class="secondary-button" type="button" data-modal-cancel>Cancelar</button>
      <button class="primary-button" type="submit">Salvar</button>
    </div>
  `;
  modalBackdrop.hidden = false;
  modalForm.querySelector("input, textarea")?.focus();
}

function closeModal() {
  activeModal = null;
  modalBackdrop.hidden = true;
  modalForm.innerHTML = "";
}

function initialsFromName(name) {
  return name
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((part) => part[0])
    .join("")
    .toUpperCase();
}

function handleModalSubmit(event) {
  event.preventDefault();
  const formData = new FormData(modalForm);
  const values = Object.fromEntries(formData.entries());

  if (activeModal === "patient") {
    const id = Math.max(...patients.map((patient) => patient.id)) + 1;
    const newPatient = {
      id,
      name: values.name,
      initials: initialsFromName(values.name),
      type: "pos",
      tag: "Novo",
      urgency: "",
      procedure: values.procedure,
      next: "Configurar primeira ação de cuidado",
      status: "Novo paciente",
      automation: "Aguardando protocolo",
      history: "Paciente recém-cadastrado para acompanhamento da equipe.",
      message: `Oi, ${values.name.split(" ")[0]}! Aqui é da sua clínica. Vamos acompanhar seu cuidado por aqui com orientações e lembretes importantes.`,
      risk: "Baixo",
      value: "R$ 0",
      sla: "24h",
      score: 50,
      due: "Hoje",
      tone: "Acolhedor",
      whatsappStage: "enviado",
      protocol: ["Confirmar procedimento", "Definir janela de retorno", "Vincular protocolo recomendado"],
    };
    patients.push(newPatient);
    crmProfiles.push({
      patientId: id,
      phone: values.phone,
      ltv: "R$ 0",
      package: values.package,
      segment: "Novo acompanhamento",
      status: "Em configuração",
      timeline: ["Hoje - Paciente cadastrado"],
      conversation: ["Sistema: Aguardando primeira mensagem."],
    });
    saveState("revivaV2Patients", patients);
    saveState("revivaV2CrmProfiles", crmProfiles);
    selectedId = id;
    selectPatient(id);
    selectCrmPatient(id);
    renderMetrics();
    showView("patients");
    showToast("Paciente cadastrado com sucesso.");
  }

  if (activeModal === "flow") {
    const id = normalizeText(values.name).replace(/\s+/g, "-");
    flows.push({
      id,
      name: values.name,
      category: "Pós-procedimento",
      status: "Rascunho",
      window: values.window,
      conversion: "0%",
      revenue: "R$ 0",
      health: 62,
      sla: "24h",
      owner: values.owner,
      escalation: "Transferir para humano se houver queixa clínica, insegurança ou resposta fora do esperado.",
      offer: "Não ofertar antes da primeira checagem de segurança.",
      template: values.template,
      variants: {
        followup: "Oi, {nome}! Passando novamente para acompanhar sua evolução. Pode me responder quando puder?",
        human: "{nome}, vou pedir para nossa equipe assumir seu acompanhamento por aqui.",
      },
      quality: ["Janela definida", "Responsável atribuído"],
      steps: [{ time: values.window, channel: "WhatsApp", action: "Preparar mensagem principal e registrar resposta" }],
    });
    saveState("revivaV2Flows", flows);
    selectFlow(id);
    renderMetrics();
    showView("flows");
    showToast("Fluxo criado em rascunho.");
  }

  if (activeModal === "rule") {
    const id = normalizeText(values.name).replace(/\s+/g, "-");
    automationRules.push({
      id,
      name: values.name,
      type: "WhatsApp",
      status: "Rascunho",
      trigger: values.trigger,
      stop: values.stop,
      owner: values.owner,
      window: "24h",
      risk: "Revisar critério clínico antes de ativar.",
      response: "Criar tarefa para o responsável definido.",
      attempts: ["Executar gatilho", "Enviar follow-up", "Transferir para humano"],
    });
    saveState("revivaV2AutomationRules", automationRules);
    selectAutomationRule(id);
    showView("automations");
    showToast("Regra criada em rascunho.");
  }

  if (activeModal === "appointment") {
    const patient =
      patients.find((item) => normalizeText(item.name) === normalizeText(values.patient)) ||
      patients.find((item) => item.id === selectedCrmId) ||
      patients[0];
    const id = `agenda-${Date.now()}`;
    agendaSlots.push({
      id,
      patientId: patient.id,
      date: values.date,
      time: values.time,
      procedure: values.procedure,
      window: "Retorno manual",
      owner: values.owner,
      channel: "Aguardando WhatsApp",
      status: "Sugerido",
      reason: `Retorno criado manualmente para ${values.procedure}. Confirmar melhor horário e registrar comparecimento.`,
    });
    addTimeline(patient.id, `Hoje - Retorno sugerido para ${values.date} às ${values.time}`);
    saveCoreState();
    selectAgendaSlot(id);
    selectCrmPatient(patient.id);
    renderMetrics();
    showView("agenda");
    showToast("Retorno criado na agenda.");
  }

  if (activeModal === "package") {
    const patient =
      patients.find((item) => normalizeText(item.name) === normalizeText(values.patient)) ||
      patients.find((item) => item.id === selectedCrmId) ||
      patients[0];
    const id = `package-${Date.now()}`;
    carePackages.push({
      id,
      patientId: patient.id,
      name: values.name,
      used: 0,
      total: Math.max(Number(values.total) || 1, 1),
      value: values.value,
      renewal: values.renewal,
      expires: values.renewal,
      condition: values.condition,
      status: "Ativo",
      risk: "Baixo",
      plan: `Iniciar pacote, registrar primeira sessão e usar condição: ${values.condition}.`,
    });
    const profile = profileById(patient.id);
    if (profile) profile.package = `${values.name} - 0/${Math.max(Number(values.total) || 1, 1)}`;
    patient.type = "renovacao";
    patient.next = "Agendar primeira sessão do pacote";
    addTimeline(patient.id, `Hoje - Pacote ${values.name} criado`);
    saveCoreState();
    selectPackage(id);
    selectCrmPatient(patient.id);
    renderMetrics();
    showView("packages");
    showToast("Pacote criado e vinculado ao paciente.");
  }

  closeModal();
}

viewButtons.forEach((button) => {
  button.addEventListener("click", () => showView(button.dataset.viewTarget));
});

modalButtons.forEach((button) => {
  button.addEventListener("click", () => openModal(button.dataset.modal));
});

closeModalButton.addEventListener("click", closeModal);

modalBackdrop.addEventListener("click", (event) => {
  if (event.target === modalBackdrop || event.target.matches("[data-modal-cancel]")) closeModal();
});

modalForm.addEventListener("submit", handleModalSubmit);

document.addEventListener("click", (event) => {
  const target = event.target;
  if (!(target instanceof HTMLElement)) return;

  if (target.dataset.copyTemplate) {
    const template = whatsappModel.templates.find((item) => item.id === target.dataset.copyTemplate);
    if (template) copyText(template.body, "Template copiado para WhatsApp.");
  }

  if (target.id === "missAppointmentButton") {
    const slot = agendaSlots.find((item) => item.id === selectedSlotId);
    const patient = patientById(slot.patientId);
    slot.status = "Faltou";
    slot.channel = "Falta registrada";
    patient.status = "Faltou ao retorno";
    patient.next = "Copiar mensagem de reagendamento";
    addTimeline(patient.id, "Hoje - Falta registrada na agenda");
    saveCoreState();
    selectAgendaSlot(slot.id);
    selectPatient(patient.id);
    selectCrmPatient(patient.id);
    renderMetrics();
    showToast("Falta registrada.");
  }

  if (target.id === "attendedAppointmentButton") {
    const slot = agendaSlots.find((item) => item.id === selectedSlotId);
    const patient = patientById(slot.patientId);
    slot.status = "Concluido";
    slot.channel = "Comparecimento registrado";
    patient.status = "Retorno concluido";
    patient.next = "Registrar evolucao e proximo cuidado";
    addTimeline(patient.id, "Hoje - Comparecimento registrado");
    saveCoreState();
    selectAgendaSlot(slot.id);
    selectPatient(patient.id);
    selectCrmPatient(patient.id);
    renderMetrics();
    showToast("Comparecimento registrado.");
  }

  if (target.id === "packageFollowUpButton") {
    const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
    const patient = patientById(item.patientId);
    item.status = "Follow-up";
    item.plan = "Criar novo contato em 48h com mensagem de continuidade.";
    patient.next = "Follow-up de renovacao em 48h";
    addTimeline(patient.id, "Hoje - Follow-up de pacote criado");
    saveCoreState();
    selectPackage(item.id);
    selectPatient(patient.id);
    selectCrmPatient(patient.id);
    renderMetrics();
    showToast("Follow-up de pacote criado.");
  }
});

logoutButton?.addEventListener("click", async () => {
  if (!apiEnabled) {
    window.location.href = "index.html";
    return;
  }
  try {
    await apiJson("/api/auth/logout", { method: "POST" });
  } catch {
    // Mesmo se a sessão já expirou, sair deve levar a usuária de volta para a landing.
  }
  window.location.href = "index.html";
});

roleSelect?.addEventListener("change", () => {
  clinicSettings.activeRole = roleSelect.value;
  saveState("revivaV1ClinicSettings", clinicSettings);
  renderSettings();
  showToast("Configuração salva. A operação da clínica foi atualizada.");
});

saveOnboardingButton?.addEventListener("click", () => {
  const clinicName = document.querySelector("#onboardingClinicName")?.value || clinicSettings.name;
  const whatsapp = document.querySelector("#onboardingWhatsapp")?.value || clinicSettings.whatsapp;
  const procedures = document.querySelector("#onboardingProcedures")?.value || "";
  const packages = document.querySelector("#onboardingPackages")?.value || "";
  const owner = document.querySelector("#onboardingOwner")?.value || "Concierge";
  const hours = document.querySelector("#onboardingHours")?.value || clinicSettings.hours;

  clinicSettings.name = clinicName;
  clinicSettings.whatsapp = whatsapp;
  clinicSettings.hours = hours;
  clinicSettings.policy = `Atendimento: ${owner}. Procedimentos: ${procedures}. Pacotes: ${packages}.`;
  saveState("revivaV1ClinicSettings", clinicSettings);
  renderSettings();
  showToast("Onboarding salvo e aplicado aos ajustes da clinica.");
});

crmSearchInput?.addEventListener("input", renderCrmPatients);

crmSegmentFilter?.addEventListener("change", () => {
  activeCrmFilter = crmSegmentFilter.value;
  renderCrmPatients();
});

filterButtons.forEach((button) => {
  button.addEventListener("click", () => {
    activeFilter = button.dataset.filter;
    filterButtons.forEach((item) => item.classList.toggle("active", item === button));

    const firstVisible = visiblePatients()[0];
    if (firstVisible) {
      selectedId = firstVisible.id;
      selectPatient(selectedId);
    } else {
      renderPatients();
    }
  });
});

searchInput.addEventListener("input", () => {
  const rows = visiblePatients();
  const firstVisible = rows[0];
  if (firstVisible && !rows.some((patient) => patient.id === selectedId)) {
    selectedId = firstVisible.id;
    selectPatient(selectedId);
    return;
  }

  renderPatients();
});

copyButton.addEventListener("click", async () => {
  await copyText(messageText.value, "Mensagem copiada para envio no WhatsApp.");
  copyButton.textContent = "Copiado";
  window.setTimeout(() => {
    copyButton.textContent = "Copiar para WhatsApp";
  }, 1400);
});

copyNextMessageButton?.addEventListener("click", async () => {
  const patient = patientById(selectedId) || patients[0];
  await copyText(patient.message, "Mensagem copiada. Agora envie pelo WhatsApp da clínica.");
});

document.querySelectorAll("[data-copy-next-message]").forEach((button) => {
  button.addEventListener("click", async () => {
    const patient = patientById(selectedId) || patients[0];
    await copyText(patient.message, "Mensagem copiada. Agora envie pelo WhatsApp da clínica.");
  });
});

document.querySelectorAll("[data-procedure-template]").forEach((button) => {
  button.addEventListener("click", () => {
    const name = button.dataset.procedureTemplate;
    const flow = flows.find((item) => normalizeText(name).includes(normalizeText(item.name).split(" ")[0])) || flows[0];
    selectedFlowId = flow.id;
    selectFlow(flow.id);
    showToast(`${name} selecionado como modelo de protocolo.`);
  });
});

document.querySelectorAll("[data-message-template]").forEach((button) => {
  button.addEventListener("click", async () => {
    const patient = patientById(selectedId) || patients[0];
    const template = button.dataset.messageTemplate.replace("{nome}", firstName(patient.name));
    await copyText(template, "Template copiado para WhatsApp.");
  });
});

sendButton.addEventListener("click", () => {
  const patient = patients.find((item) => item.id === selectedId);
  patient.whatsappStage = patient.whatsappStage === "enviado" ? "entregue" : "enviado";
  renderDelivery(patient);
  saveState("revivaV2Patients", patients);
  sendButton.textContent = "Enviado";
  showToast("Contato marcado como enviado na fila de hoje.");
});

addStepButton.addEventListener("click", () => {
  const flow = flows.find((item) => item.id === selectedFlowId);
  flow.steps.push({
    time: "Nova janela",
    channel: "WhatsApp",
    action: "Definir gatilho, mensagem e regra de transferência.",
  });
  renderJourney(flow);
  saveState("revivaV2Flows", flows);
  showToast("Nova etapa adicionada ao protocolo.");
});

addNoteButton.addEventListener("click", () => {
  const profile = crmProfiles.find((item) => item.patientId === selectedCrmId);
  profile.timeline.unshift("Hoje - Nota adicionada pela equipe");
  renderList(crmTimeline, profile.timeline, "timeline-item");
  saveState("revivaV2CrmProfiles", crmProfiles);
  showToast("Nota adicionada na ficha do paciente.");
});

crmCopyButton.addEventListener("click", async () => {
  const patient = patients.find((item) => item.id === selectedCrmId);
  try {
    await navigator.clipboard.writeText(patient.message);
  } catch {
    messageText.value = patient.message;
    messageText.select();
    document.execCommand("copy");
  }
  showToast("Sugestão de WhatsApp copiada.");
});

openPatientAgendaButton?.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.patientId === selectedCrmId);
  if (slot) selectAgendaSlot(slot.id);
  showView("agenda");
});

openPatientPackageButton?.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.patientId === selectedCrmId);
  if (item) selectPackage(item.id);
  showView("packages");
});

markHumanTouchButton?.addEventListener("click", () => {
  const patient = patientById(selectedCrmId);
  patient.urgency = "alert";
  patient.status = "Contato humano";
  patient.next = "Equipe deve chamar com abordagem consultiva";
  addTimeline(patient.id, "Hoje - Contato humano marcado pela equipe");
  addConversation(patient.id, "Sistema: Pausar automação e chamar de forma consultiva.");
  saveCoreState();
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Contato humano priorizado. A paciente entrou nas prioridades da equipe.");
});

registerReplyButton?.addEventListener("click", () => {
  const patient = patientById(selectedCrmId);
  patient.whatsappStage = "respondido";
  patient.status = "Resposta registrada";
  patient.next = "Definir proxima acao da equipe";
  addTimeline(patient.id, "Hoje - Resposta registrada pela equipe");
  addConversation(patient.id, "Equipe: resposta recebida pelo WhatsApp da clinica.");
  saveCoreState();
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Resposta registrada. O histórico da paciente foi atualizado.");
});

resolvePatientButton?.addEventListener("click", () => {
  const patient = patientById(selectedCrmId);
  patient.urgency = "";
  patient.risk = "Baixo";
  patient.status = "Resolvido";
  patient.next = "Acompanhar no proximo ciclo";
  addTimeline(patient.id, "Hoje - Caso marcado como resolvido");
  saveCoreState();
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Paciente resolvida e removida das prioridades de hoje.");
});

createRenewalOpportunityButton?.addEventListener("click", () => {
  const patient = patientById(selectedCrmId);
  patient.type = "renovacao";
  patient.status = "Renovacao quente";
  patient.next = "Copiar proposta e chamar no WhatsApp";
  addTimeline(patient.id, "Hoje - Oportunidade de renovacao criada");
  saveCoreState();
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Oportunidade de renovacao criada.");
});

addPatientObservationButton?.addEventListener("click", () => {
  const patient = patientById(selectedCrmId);
  addTimeline(patient.id, "Hoje - Observacao da equipe: revisar contexto antes do proximo contato");
  saveState("revivaV2CrmProfiles", crmProfiles);
  selectCrmPatient(patient.id);
  showToast("Observacao adicionada na ficha.");
});

approveRuleButton.addEventListener("click", () => {
  const rule = automationRules.find((item) => item.id === selectedRuleId);
  rule.status = "Aprovada";
  selectAutomationRule(rule.id);
  saveState("revivaV2AutomationRules", automationRules);
  showToast("Regra aprovada para execução.");
});

waPatientSelect?.addEventListener("change", renderWhatsAppLab);
waTemplateSelect?.addEventListener("change", renderWhatsAppLab);

simulateReplyButton?.addEventListener("click", () => {
  const patient = patientById(waPatientSelect.value);
  patient.whatsappStage = "respondido";
  patient.status = "Respondeu WhatsApp";
  addConversation(patient.id, "Paciente: Pode reservar esse horário, por favor.");
  addTimeline(patient.id, "Hoje - Resposta positiva simulada no WhatsApp");
  saveCoreState();
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderWhatsAppLab();
  renderMetrics();
  showToast("Resposta positiva simulada e CRM atualizado.");
});

simulateRiskButton?.addEventListener("click", () => {
  const patient = patientById(waPatientSelect.value);
  patient.whatsappStage = "respondido";
  patient.urgency = "alert";
  patient.risk = "Alto";
  patient.status = "Risco clínico";
  patient.next = "Transferir para responsável clínico";
  addConversation(patient.id, "Paciente: Estou com dor e vermelhidão fora do esperado.");
  addTimeline(patient.id, "Hoje - Sinal de risco simulado e transferido para humano");
  saveCoreState();
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderWhatsAppLab();
  renderMetrics();
  showToast("Risco simulado: automação pausada e transferida.");
});

confirmAppointmentButton.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patients.find((item) => item.id === slot.patientId);
  const profile = crmProfiles.find((item) => item.patientId === slot.patientId);

  slot.status = "Confirmado";
  slot.channel = "WhatsApp confirmado";
  patient.status = "Retorno confirmado";
  patient.whatsappStage = "agendado";
  patient.next = `Comparecer em ${slot.date}, ${slot.time}`;
  if (profile) {
    profile.status = "Agenda confirmada";
    profile.timeline.unshift(`Hoje - Retorno confirmado para ${slot.date} às ${slot.time}`);
  }

  saveState("revivaV3AgendaSlots", agendaSlots);
  saveState("revivaV2Patients", patients);
  saveState("revivaV2CrmProfiles", crmProfiles);
  selectAgendaSlot(slot.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Retorno confirmado e ficha atualizada.");
});

copyAppointmentButton?.addEventListener("click", async () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patients.find((item) => item.id === slot.patientId);
  const text = `Oi, ${firstName(patient.name)}! Passando para lembrar do seu retorno de ${slot.procedure} em ${slot.date}, ${slot.time}. Esse horario ajuda a acompanharmos seu resultado com calma. Posso confirmar para voce?`;
  await copyText(text, "Lembrete de agenda copiado para WhatsApp.");
});

sendAppointmentButton.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patients.find((item) => item.id === slot.patientId);
  const profile = crmProfiles.find((item) => item.patientId === slot.patientId);

  slot.status = "Contato registrado";
  slot.channel = "Contato registrado";
  patient.whatsappStage = "enviado";
  if (profile) profile.conversation.unshift(`Sistema: Contato registrado para retorno em ${slot.date} às ${slot.time}.`);

  saveState("revivaV3AgendaSlots", agendaSlots);
  saveState("revivaV2Patients", patients);
  saveState("revivaV2CrmProfiles", crmProfiles);
  selectAgendaSlot(slot.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  showToast("Mensagem de agenda marcada como enviada.");
});

saveAppointmentButton?.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patientById(slot.patientId);
  slot.status = agendaStatusSelect.value || slot.status || "Aguardando resposta";
  slot.owner = agendaOwnerSelect.value;
  slot.date = agendaDateInput.value || slot.date;
  slot.time = agendaTimeInput.value || slot.time;
  if (slot.status === "Compareceu") {
    patient.status = "Retorno realizado";
    patient.next = "Registrar evolução e próxima oportunidade";
  }
  if (slot.status === "Reagendar") {
    patient.status = "Reagendar retorno";
    patient.next = "Enviar novas opções de horário";
  }
  addTimeline(patient.id, `Hoje - Agenda atualizada para ${slot.status}`);
  saveCoreState();
  selectAgendaSlot(slot.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Agenda atualizada.");
});

cancelAppointmentButton?.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patientById(slot.patientId);
  slot.status = "Cancelado";
  slot.channel = "Cancelado pela equipe";
  patient.status = "Retorno cancelado";
  patient.next = "Criar nova tentativa de agenda";
  addTimeline(patient.id, "Hoje - Retorno cancelado e nova tentativa pendente");
  saveCoreState();
  selectAgendaSlot(slot.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Retorno cancelado com pendência registrada.");
});

missAppointmentButton?.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patientById(slot.patientId);
  slot.status = "Faltou";
  slot.channel = "Falta registrada";
  patient.status = "Faltou ao retorno";
  patient.next = "Copiar mensagem de reagendamento";
  addTimeline(patient.id, "Hoje - Falta registrada na agenda");
  saveCoreState();
  selectAgendaSlot(slot.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Falta registrada.");
});

attendedAppointmentButton?.addEventListener("click", () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId);
  const patient = patientById(slot.patientId);
  slot.status = "Concluido";
  slot.channel = "Comparecimento registrado";
  patient.status = "Retorno concluido";
  patient.next = "Registrar evolucao e proximo cuidado";
  addTimeline(patient.id, "Hoje - Comparecimento registrado");
  saveCoreState();
  selectAgendaSlot(slot.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Comparecimento registrado.");
});

useSessionButton?.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patientById(item.patientId);
  item.used = Math.min(item.used + 1, item.total);
  item.status = item.used >= item.total - 1 ? "Renovação quente" : "Ativo";
  item.plan = item.used >= item.total - 1 ? "Entrar em contato para continuidade antes da última sessão." : "Manter acompanhamento e registrar evolução.";
  const profile = profileById(patient.id);
  if (profile) profile.package = `${item.name} - ${item.used}/${item.total}`;
  addTimeline(patient.id, `Hoje - Sessão utilizada (${item.used}/${item.total})`);
  saveCoreState();
  selectPackage(item.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Sessão usada registrada. O pacote foi atualizado.");
});

copyPackageProposalButton?.addEventListener("click", async () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patientById(item.patientId);
  const text = `Oi, ${firstName(patient.name)}! Seu pacote ${item.name} está em ${item.used}/${item.total} sessões e podemos organizar a continuidade para você não perder o ritmo do resultado. ${item.condition ? `Consegui separar: ${item.condition}. ` : ""}Quer que eu te envie as opções?`;
  await copyText(text, "Proposta de renovacao copiada para WhatsApp.");
});

savePackageButton?.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patientById(item.patientId);
  item.used = Math.min(Number(packageUsedInput.value) || 0, Number(packageTotalInput.value) || item.total);
  item.total = Math.max(Number(packageTotalInput.value) || item.total, 1);
  item.expires = packageExpiryInput.value || item.expires;
  item.renewal = packageExpiryInput.value || item.renewal;
  item.condition = packageConditionInput.value;
  item.plan = `Condição ativa: ${item.condition || "sem condição especial"}. Acompanhar uso e oferecer continuidade no fim do ciclo.`;
  const profile = profileById(patient.id);
  if (profile) profile.package = `${item.name} - ${item.used}/${item.total}`;
  addTimeline(patient.id, "Hoje - Pacote editado pela equipe");
  saveCoreState();
  selectPackage(item.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Pacote atualizado.");
});

partialRenewPackageButton?.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patientById(item.patientId);
  item.status = "Renovação parcial";
  item.total += 2;
  item.condition = item.condition || "Renovação parcial com 2 sessões";
  item.plan = "Renovação parcial registrada. Acompanhe o próximo contato em Pacotes. Confirmar pagamento e agendar próximas sessões.";
  patient.status = "Renovação parcial";
  patient.next = "Confirmar agenda das sessões adicionais";
  addTimeline(patient.id, "Hoje - Renovação parcial aplicada");
  saveCoreState();
  selectPackage(item.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Renovação parcial registrada. Acompanhe o próximo contato em Pacotes.");
});

renewPackageButton.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patients.find((patientItem) => patientItem.id === item.patientId);
  const profile = crmProfiles.find((profileItem) => profileItem.patientId === item.patientId);

  item.status = "Renovado";
  item.used = 0;
  item.renewal = "Novo ciclo";
  item.risk = "Baixo";
  item.plan = "Novo ciclo iniciado. Agendar primeira sessão e manter acompanhamento de experiência.";
  patient.status = "Pacote renovado";
  patient.type = "renovacao";
  patient.next = "Agendar primeira sessão do novo ciclo";
  patient.whatsappStage = "respondido";
  if (profile) {
    profile.status = "Pacote renovado";
    profile.package = `${item.name} - novo ciclo`;
    profile.timeline.unshift("Hoje - Pacote renovado e novo ciclo aberto");
    profile.conversation.unshift("Sistema: Enviar boas-vindas do novo ciclo pelo WhatsApp.");
  }

  saveState("revivaV3Packages", carePackages);
  saveState("revivaV2Patients", patients);
  saveState("revivaV2CrmProfiles", crmProfiles);
  selectPackage(item.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Pacote renovado e CRM atualizado.");
});

pausePackageButton.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patients.find((patientItem) => patientItem.id === item.patientId);
  const profile = crmProfiles.find((profileItem) => profileItem.patientId === item.patientId);

  item.status = "Pausado";
  item.risk = "Alto";
  item.plan = "Pausar automações comerciais e abrir contato humano para entender objeção ou insegurança.";
  patient.status = "Pacote pausado";
  patient.urgency = "alert";
  patient.next = "Contato humano para entender pausa";
  if (profile) {
    profile.status = "Pacote pausado";
    profile.timeline.unshift("Hoje - Pacote pausado para abordagem humana");
  }

  saveState("revivaV3Packages", carePackages);
  saveState("revivaV2Patients", patients);
  saveState("revivaV2CrmProfiles", crmProfiles);
  selectPackage(item.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Pacote pausado e prioridade humana criada.");
});

packageFollowUpButton?.addEventListener("click", () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId);
  const patient = patientById(item.patientId);
  item.status = "Follow-up";
  item.plan = "Criar novo contato em 48h com mensagem de continuidade.";
  patient.next = "Follow-up de renovacao em 48h";
  addTimeline(patient.id, "Hoje - Follow-up de pacote criado");
  saveCoreState();
  selectPackage(item.id);
  selectPatient(patient.id);
  selectCrmPatient(patient.id);
  renderMetrics();
  showToast("Follow-up de pacote criado.");
});

saveFlowButton.addEventListener("click", () => {
  const flow = flows.find((item) => item.id === selectedFlowId);
  flow.template = flowTemplate.value;
  flow.sla = slaSelect.value;
  flow.owner = ownerSelect.value;
  updateFlowPreview(flow);
  saveState("revivaV2Flows", flows);
  renderMetrics();
  showToast("Fluxo salvo para revisão da equipe.");
});

previewFlowButton.addEventListener("click", () => {
  const flow = flows.find((item) => item.id === selectedFlowId);
  updateFlowPreview(flow);
  showToast("Preview de WhatsApp atualizado.");
});

flowTemplate.addEventListener("input", () => {
  const flow = flows.find((item) => item.id === selectedFlowId);
  updateFlowPreview(flow);
});

[testPatientSelect, variantSelect, slaSelect, ownerSelect].forEach((control) => {
  control.addEventListener("change", () => {
    const flow = flows.find((item) => item.id === selectedFlowId);
    updateFlowPreview(flow);
  });
});

saveSettingsButton?.addEventListener("click", () => {
  clinicSettings.name = clinicNameInput.value.trim() || clinicSettings.name;
  clinicSettings.whatsapp = clinicWhatsappInput.value.trim() || clinicSettings.whatsapp;
  clinicSettings.hours = clinicHoursInput.value.trim() || clinicSettings.hours;
  clinicSettings.policy = clinicPolicyInput.value.trim() || clinicSettings.policy;
  saveState("revivaV1ClinicSettings", clinicSettings);
  updateShell();
  renderSettings();
  showToast("Configurações da clínica salvas.");
});

backupDataButton?.addEventListener("click", async () => {
  const backup = {
    createdAt: new Date().toISOString(),
    patients,
    crmProfiles,
    flows,
    automationRules,
    agendaSlots,
    carePackages,
    clinicSettings,
  };
  const payload = JSON.stringify(backup, null, 2);
  try {
    await navigator.clipboard.writeText(payload);
    dataStatusText.textContent = "Dados da operação copiados para a área de transferência.";
  } catch {
    localStorage.setItem("revivaLastBackup", payload);
    dataStatusText.textContent = "Dados da operação salvos neste navegador.";
  }
  showToast("Dados da operação copiados.");
});

restoreDemoButton?.addEventListener("click", () => {
  [
    "revivaV2Patients",
    "revivaV2CrmProfiles",
    "revivaV2Flows",
    "revivaV2AutomationRules",
    "revivaV3AgendaSlots",
    "revivaV3Packages",
    "revivaV1ClinicSettings",
  ].forEach((key) => localStorage.removeItem(key));
  dataStatusText.textContent = "Dados iniciais restaurados. Recarregue a página para aplicar a atualização.";
  showToast("Dados iniciais restaurados para o próximo carregamento.");
});

testWhatsappIntegrationButton?.addEventListener("click", async () => {
  const patient = patientById(selectedId) || patients[0];
  try {
    const result = apiEnabled
      ? await apiJson("/api/integrations/whatsapp/send", {
          method: "POST",
          body: JSON.stringify({ to: profileById(patient.id)?.phone, template: "retorno_confirmacao", patientId: patient.id }),
        })
      : { status: "assistido", messageId: "file_mode" };
    integrationStatusText.textContent = `WhatsApp ${result.status}: ${result.messageId}`;
    showToast("WhatsApp validado.");
  } catch (error) {
    integrationStatusText.textContent = error.message;
  }
});

saveWhatsappModelButton?.addEventListener("click", async () => {
  whatsappModel = collectWhatsappModelFromForm();
  saveState("revivaWhatsappModel", whatsappModel);
  try {
    const result = apiEnabled
      ? await apiJson("/api/whatsapp/model", {
          method: "PUT",
          body: JSON.stringify({ model: whatsappModel }),
        })
      : { model: whatsappModel };
    whatsappModel = { ...defaultWhatsappModel, ...result.model };
    renderWhatsAppModel();
    showToast("Configuração do WhatsApp salva para esta clínica.");
  } catch (error) {
    whatsappModelStatusText.textContent = error.message;
  }
});

testWhatsappModelButton?.addEventListener("click", async () => {
  const patient = patientById(selectedId) || patients[0];
  whatsappModel = collectWhatsappModelFromForm();
  try {
    const result = apiEnabled
      ? await apiJson("/api/integrations/whatsapp/test", {
          method: "POST",
          body: JSON.stringify({
            to: profileById(patient.id)?.phone || clinicSettings.whatsapp,
            templateId: whatsappModel.defaultTemplate,
          }),
        })
      : { status: "preparado", messageId: "modo_assistido", mode: "setup" };
    whatsappModelStatusText.textContent = `Validação ${result.status}: ${result.messageId}`;
    showToast("Conexão WhatsApp validada no modelo da clínica.");
  } catch (error) {
    whatsappModelStatusText.textContent = error.message;
  }
});

testCalendarIntegrationButton?.addEventListener("click", async () => {
  const slot = agendaSlots.find((item) => item.id === selectedSlotId) || agendaSlots[0];
  try {
    const result = apiEnabled
      ? await apiJson("/api/integrations/calendar/book", {
          method: "POST",
          body: JSON.stringify({ patientId: slot.patientId, startsAt: `${slot.date} ${slot.time}`, owner: slot.owner }),
        })
      : { status: "confirmed", eventId: "file_mode" };
    integrationStatusText.textContent = `Agenda ${result.status}: ${result.eventId}`;
    showToast("Agenda validada.");
  } catch (error) {
    integrationStatusText.textContent = error.message;
  }
});

testPaymentIntegrationButton?.addEventListener("click", async () => {
  const item = carePackages.find((packageItem) => packageItem.id === selectedPackageId) || carePackages[0];
  try {
    const result = apiEnabled
      ? await apiJson("/api/integrations/payments/link", {
          method: "POST",
          body: JSON.stringify({ packageId: item.id, amount: moneyToNumber(item.value), patientId: item.patientId }),
        })
      : { paymentUrl: "https://pagamento.revyvas.app/assistido" };
    integrationStatusText.textContent = `Pagamento criado: ${result.paymentUrl}`;
    showToast("Link de pagamento criado. Envie para a paciente quando a proposta for aceita.");
  } catch (error) {
    integrationStatusText.textContent = error.message;
  }
});

function polishStaticInterface() {
  document.title = "Revyvas CRM | Est\u00e9tica recorrente";

  const setText = (selector, text) => {
    const element = document.querySelector(selector);
    if (element) element.textContent = text;
  };
  const setModuleHeader = (selector, eyebrow, title, copy) => {
    const section = document.querySelector(selector);
    if (!section) return;
    const label = section.querySelector(".eyebrow");
    const heading = section.querySelector("h2");
    const paragraph = section.querySelector("p:not(.eyebrow)");
    if (label) label.textContent = eyebrow;
    if (heading) heading.textContent = title;
    if (paragraph) paragraph.textContent = copy;
  };

  const navSubtitles = {
    dashboard: "Prioridades de hoje",
    patients: "Relacionamento e hist\u00f3rico",
    automations: "Modelos para WhatsApp",
    agenda: "Retornos e confirma\u00e7\u00f5es",
    packages: "Renova\u00e7\u00f5es e sess\u00f5es",
    metrics: "Resultados recuperados",
    flows: "Rotinas por procedimento",
    settings: "Cl\u00ednica e equipe",
  };

  document.querySelectorAll("[data-view-target]").forEach((button) => {
    const subtitle = navSubtitles[button.dataset.viewTarget];
    if (subtitle) button.dataset.navSubtitle = subtitle;
  });

  setText(".concierge-card .panel-kicker", "Opera\u00e7\u00e3o assistida");
  setText(".brand span", "Sua clínica");
  setText("#syncStatus", "Preparando opera\u00e7\u00e3o");
  setText("#detailAutomation", "Aguardando sele\u00e7\u00e3o");
  setText(".automation-strip strong", "Rotina de contato");

  if (demoExperience) {
    document.title = "Revyvas CRM | Área de apresentação";
    setText(".topbar h1", "Reten\u00e7\u00e3o premium para cl\u00ednicas de est\u00e9tica");
    setText("#syncStatus", "Apresentação");
    setModuleHeader(
      ".studio-hero",
      "Jornada p\u00f3s-procedimento e recorr\u00eancia",
      "36 pacientes precisam de uma a\u00e7\u00e3o cuidadosa hoje",
      "Priorize retornos, renova\u00e7\u00f5es e sinais cl\u00ednicos sem parecer venda autom\u00e1tica. Cada mensagem carrega contexto, risco e pr\u00f3xima melhor a\u00e7\u00e3o.",
    );
    setModuleHeader(
      ".crm-hero",
      "CRM de pacientes",
      "Hist\u00f3rico cl\u00ednico, pacotes e WhatsApp no mesmo contexto",
      "A ficha do paciente conecta procedimentos, retorno, renova\u00e7\u00e3o, valor em risco e conversa. Assim a equipe sabe quando cuidar, vender ou transferir para atendimento humano.",
    );
    setModuleHeader(
      ".automation-hero",
      "Motor de automa\u00e7\u00f5es",
      "Regras para WhatsApp, parada e transfer\u00eancia humana",
      "Configure gatilhos, tentativas, respons\u00e1vel e condi\u00e7\u00f5es de parada para cada jornada. A automa\u00e7\u00e3o deve proteger a experi\u00eancia premium e acionar a equipe na hora certa.",
    );
    setModuleHeader(
      ".agenda-hero",
      "Agenda inteligente",
      "Retornos, revis\u00f5es e encaixes priorizados pela jornada",
      "Confirme hor\u00e1rios com contexto cl\u00ednico, status do WhatsApp e motivo de retorno. A equipe v\u00ea o que precisa ser cuidado antes de abrir uma nova oferta.",
    );
    setModuleHeader(
      ".packages-hero",
      "Pacotes e renova\u00e7\u00e3o",
      "Recorr\u00eancia tratada como continuidade de resultado",
      "Veja uso, valor em risco, vencimento e melhor abordagem para renovar sem parecer cobran\u00e7a. Cada pacote vira uma pr\u00f3xima a\u00e7\u00e3o conectada ao CRM.",
    );
    setModuleHeader(
      ".flows-hero",
      "Playbooks por procedimento",
      "Configure o cuidado que acontece depois da sess\u00e3o",
      "Cada protocolo combina janela cl\u00ednica, WhatsApp, regra comercial e transfer\u00eancia humana. O objetivo \u00e9 recuperar receita sem perder a sensa\u00e7\u00e3o de atendimento premium.",
    );
    setModuleHeader(
      ".metrics-hero",
      "Receita e reten\u00e7\u00e3o",
      "O que voltou para agenda, pacote e faturamento",
      "Acompanhe receita recuperada, renova\u00e7\u00f5es previstas, retornos confirmados, respostas por WhatsApp e risco de perda por procedimento.",
    );
  } else {
    setText(".topbar h1", "Painel CRM");
    setModuleHeader(
      ".studio-hero",
      "Opera\u00e7\u00e3o de hoje",
      "Fila de relacionamento",
      "Contatos, retornos, renova\u00e7\u00f5es e pacientes que precisam de resposta da equipe.",
    );
    setModuleHeader(
      ".crm-hero",
      "CRM de pacientes",
      "Ficha, hist\u00f3rico e oportunidades",
      "Veja procedimento, pacote, valor em risco, conversa e pr\u00f3xima a\u00e7\u00e3o em um s\u00f3 registro.",
    );
    setModuleHeader(
      ".automation-hero",
      "Mensagens",
      "Modelos e regras de contato",
      "Organize templates, tentativas, respons\u00e1veis e condi\u00e7\u00f5es de parada para WhatsApp.",
    );
    setModuleHeader(
      ".agenda-hero",
      "Agenda",
      "Retornos e confirma\u00e7\u00f5es",
      "Priorize janelas, confirme hor\u00e1rios e acompanhe faltas, reagendamentos e comparecimentos.",
    );
    setModuleHeader(
      ".packages-hero",
      "Pacotes",
      "Renova\u00e7\u00f5es e oportunidades",
      "Controle uso, vencimento, valor em risco e melhor abordagem para continuidade.",
    );
    setModuleHeader(
      ".flows-hero",
      "Protocolos",
      "Rotinas por procedimento",
      "Configure etapas de cuidado, mensagens, respons\u00e1veis e transfer\u00eancia humana.",
    );
    setModuleHeader(
      ".metrics-hero",
      "Receita",
      "Funil e resultado recuperado",
      "Acompanhe renova\u00e7\u00f5es, retornos confirmados, resposta no WhatsApp e risco.",
    );
  }

  const moneyParagraphs = document.querySelectorAll(".money-table-card p");
  if (moneyParagraphs[0]) moneyParagraphs[0].textContent = "Dinheiro na mesa";
  if (moneyParagraphs[1]) {
    moneyParagraphs[1].textContent = "Pacotes vencendo, retornos sem confirma\u00e7\u00e3o e pacientes sem resposta que a equipe pode recuperar hoje.";
  }
  const nextMessageButton = document.querySelector("#copyNextMessageButton");
  if (nextMessageButton) {
    nextMessageButton.innerHTML = '<span class="button-icon send-icon"></span>Copiar pr\u00f3xima mensagem';
  }

  const settingsHero = document.querySelector(".settings-hero");
  if (settingsHero) {
    const copy = settingsHero.querySelector("p:not(.eyebrow)");
    settingsHero.querySelector(".eyebrow").textContent = "Cl\u00ednica, equipe e consentimentos";
    settingsHero.querySelector("h2").textContent = "Opera\u00e7\u00e3o pronta para cl\u00ednica, equipe e dados reais";
    copy.textContent = "Ajuste identidade, hor\u00e1rios, regras de retorno, permiss\u00f5es, consentimentos e rotinas de atendimento para a equipe trabalhar com seguran\u00e7a.";
    settingsHero.querySelector(".crm-summary span").textContent = "Configura\u00e7\u00e3o da cl\u00ednica";
    settingsHero.querySelector(".crm-summary small").textContent = "base pronta";
  }

  setText(".onboarding-panel h3", "Primeira configura\u00e7\u00e3o da cl\u00ednica");
  setText(".settings-grid .settings-panel:nth-of-type(3) .eyebrow", "Dados");
  setText(".settings-grid .settings-panel:nth-of-type(3) h3", "Dados da cl\u00ednica");
  setText("#backupDataButton", "Exportar dados");
  setText("#restoreDemoButton", "Revisar dados iniciais");
  setText("#dataStatusText", "Dados de trabalho salvos para a opera\u00e7\u00e3o da cl\u00ednica.");
  setText(".settings-grid .settings-panel:nth-of-type(4) .eyebrow", "Conex\u00f5es");
  setText(".settings-grid .settings-panel:nth-of-type(4) h3", "WhatsApp, agenda e pagamentos");
  setText("#integrationStatusText", "Valide WhatsApp, agenda e pagamentos antes de levar a rotina para a equipe.");
  setText(".settings-grid .settings-panel:nth-of-type(6) .eyebrow", "Qualidade");
  setText(".settings-grid .settings-panel:nth-of-type(6) h3", "Checklist de opera\u00e7\u00e3o");
  setText(".settings-grid .settings-panel:nth-of-type(7) h3", "Seguran\u00e7a e consentimentos");
}

polishStaticInterface();
hydrateFromApi();

window.setTimeout(() => {
  polishStaticInterface();
  if (!apiEnabled && syncStatus) syncStatus.textContent = "Dados prontos";
}, 450);


// Microinterações finais de produto: feedback visual em ações importantes.
document.addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button || button.disabled) return;
  const labelsWithFeedback = [
    "Salvar",
    "Salvar configuração",
    "Salvar modelo",
    "Validar WhatsApp",
    "Validar agenda",
    "Gerar link de pagamento",
    "Copiar dados da operação",
    "Criar follow-up",
    "Registrar recusa",
    "Alterar plano",
    "Ver cobrança",
  ];
  const text = button.textContent.trim();
  if (!labelsWithFeedback.some((label) => text.includes(label))) return;
  button.classList.add("action-feedback");
  window.setTimeout(() => button.classList.remove("action-feedback"), 520);
});
