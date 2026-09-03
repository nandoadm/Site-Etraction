export type ValidationStatus = "validado_publicamente" | "a_confirmar" | "placeholder";

export type Service = {
  slug: string;
  name: string;
  shortName: string;
  intent: string;
  summary: string;
  commercialIntro: string;
  problems: string[];
  deliveries: string[];
  indicators: string[];
  tools: string[];
  methodology: string[];
  faq: { question: string; answer: string }[];
  specialist: {
    name: string;
    role: string;
    bio: string;
    photo: string;
    status: ValidationStatus;
  };
};

export type CaseStudy = {
  slug: string;
  client: string;
  segment: string;
  challenge: string;
  initialScenario: string;
  strategy: string;
  services: string[];
  period: string;
  percentageResult: string;
  absoluteResult: string;
  testimonial: string;
  source: string;
  status: ValidationStatus;
};

export const site = {
  name: "Etraction",
  legalName: "E-traction Marketing de Performance para E-commerce",
  url: "https://etraction.com.br",
  description:
    "Agência especializada em crescimento, performance e estratégia para e-commerce.",
  instagram: "https://www.instagram.com/etraction_",
  linkedin: "[LINKEDIN A CONFIRMAR]",
  email: "contato@etraction.com.br",
  phone: "[TELEFONE A CONFIRMAR]",
  whatsapp: "[WHATSAPP A CONFIRMAR]",
  address:
    "Av. 7 de Setembro, 286, Primeiro Andar, Sala 04, Jardim América, Rio do Sul, SC",
  cnpj: "35.225.690/0001-61"
};

export const sources = [
  {
    label: "Site atual da Etraction",
    url: "https://etraction.com.br/",
    consultedAt: "2026-09-03",
    notes:
      "Fonte para métricas públicas, lista de clientes, missão, visão, endereço, CNPJ, depoimentos e selos exibidos."
  },
  {
    label: "Página legado nova-home",
    url: "https://etraction.com.br/nova-home/",
    consultedAt: "2026-09-03",
    notes:
      "Fonte auxiliar para serviços antigos, logos adicionais, plataformas de marketplace e depoimentos legados."
  },
  {
    label: "Canal LGPD atual",
    url: "https://etraction.com.br/lgpd/",
    consultedAt: "2026-09-03",
    notes:
      "Fonte para base de linguagem de privacidade e canal do titular."
  }
];

export const navigation = [
  { label: "Soluções", href: "/servicos/" },
  { label: "Cases", href: "/cases/" },
  { label: "Sobre", href: "/sobre/" },
  { label: "Conteúdos", href: "/blog/" },
  { label: "Carreiras", href: "/carreiras/" },
  { label: "Contato", href: "/contato/" }
];

export const serviceGroups = [
  {
    objective: "Atrair demanda qualificada",
    items: ["Meta Ads", "Google Ads", "Marketplace"]
  },
  {
    objective: "Converter melhor",
    items: ["CRO", "Design para e-commerce"]
  },
  {
    objective: "Reter e ampliar receita",
    items: ["CRM", "E-mail marketing", "Sucesso do cliente"]
  }
];

const specialistPlaceholder = {
  name: "[ESPECIALISTA A CONFIRMAR]",
  role: "[CARGO A CONFIRMAR]",
  bio:
    "Campo reservado para apresentação profissional, foto real e confirmação de responsabilidade pela área.",
  photo: "/assets/team/specialist-placeholder.svg",
  status: "placeholder" as const
};

export const services: Service[] = [
  {
    slug: "cro-para-ecommerce",
    name: "CRO para e-commerce",
    shortName: "CRO",
    intent: "Melhorar conversão, receita por sessão e qualidade da experiência de compra.",
    summary:
      "Mapeamento de gargalos na jornada de compra, priorização de hipóteses e melhoria contínua de páginas, ofertas e fluxos.",
    commercialIntro:
      "CRO entra quando o tráfego já existe, mas a loja perde oportunidades por fricção, pouca clareza comercial ou decisões baseadas em opinião.",
    problems: [
      "Muitos acessos e poucas compras.",
      "Abandono alto em produto, carrinho ou checkout.",
      "Dúvidas recorrentes que atrasam a decisão.",
      "Mudanças no site feitas sem critério de impacto."
    ],
    deliveries: [
      "Auditoria heurística e análise de dados.",
      "Mapa de oportunidades por impacto e esforço.",
      "Plano de testes e melhorias por sprint.",
      "Recomendações para produto, categoria, carrinho e checkout.",
      "Relatórios com leitura comercial dos aprendizados."
    ],
    indicators: [
      "Taxa de conversão",
      "Receita por sessão",
      "Ticket médio",
      "Abandono de carrinho",
      "Taxa de checkout iniciado"
    ],
    tools: [
      "GA4, Search Console e mapas de calor a confirmar",
      "Plataforma de testes A/B a confirmar",
      "Dados da plataforma de e-commerce"
    ],
    methodology: [
      "Diagnóstico de funil e comportamento.",
      "Priorização das hipóteses com impacto comercial.",
      "Implementação acompanhada com design, mídia e operação.",
      "Medição e documentação do aprendizado."
    ],
    faq: [
      {
        question: "CRO depende de muito tráfego?",
        answer:
          "Quanto maior o volume, mais rápido a loja valida hipóteses. Em lojas menores, o trabalho começa por correções técnicas, clareza de oferta e leitura qualitativa."
      },
      {
        question: "A Etraction implementa as mudanças?",
        answer:
          "A implementação final depende da plataforma e dos acessos. O projeto prevê recomendações claras e acompanhamento com quem executa a loja."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "meta-ads-para-ecommerce",
    name: "Meta Ads para e-commerce",
    shortName: "Meta Ads",
    intent: "Construir demanda, escalar campanhas e melhorar eficiência de aquisição.",
    summary:
      "Planejamento, criação, testes e otimização de campanhas para Facebook, Instagram e ecossistema Meta com foco em receita.",
    commercialIntro:
      "Meta Ads precisa unir segmentação, criativo, oferta, catálogo e leitura de funil para gerar crescimento consistente.",
    problems: [
      "Dependência de campanhas pontuais.",
      "Criativos sem rotina de teste.",
      "ROAS instável.",
      "Falta de integração entre mídia, loja e CRM."
    ],
    deliveries: [
      "Planejamento de estrutura de campanhas.",
      "Rotina de testes de criativos, públicos e ofertas.",
      "Acompanhamento de catálogo e pixel.",
      "Leitura semanal de indicadores.",
      "Integração com datas comerciais e estoque."
    ],
    indicators: ["ROAS", "CPA", "Receita atribuída", "CTR", "Frequência", "Taxa de compra"],
    tools: [
      "Meta Ads Manager",
      "Meta Pixel e Conversions API a confirmar",
      "GA4",
      "Catálogo da loja"
    ],
    methodology: [
      "Diagnóstico de conta e histórico.",
      "Organização de campanhas por objetivo.",
      "Esteira de criativos alinhada a oferta.",
      "Otimização por margem, estoque e estágio do funil."
    ],
    faq: [
      {
        question: "Vocês trabalham só com anúncios ou também com criativos?",
        answer:
          "O serviço considera mídia e orientação criativa. A produção final pode ser feita pela Etraction ou pelo time do cliente, conforme escopo."
      },
      {
        question: "Como evitar escala sem lucro?",
        answer:
          "A análise deve cruzar receita, margem, estoque, recompra e custo de aquisição. O ROAS isolado não sustenta uma decisão completa."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "google-ads-para-ecommerce",
    name: "Google Ads para e-commerce",
    shortName: "Google Ads",
    intent: "Capturar intenção de compra e melhorar presença em Shopping, pesquisa, display e YouTube.",
    summary:
      "Gestão de campanhas, Merchant Center, estrutura de busca e leitura de demanda para produtos, categorias e sazonalidades.",
    commercialIntro:
      "Google Ads aproxima a loja de consumidores que já demonstram intenção. O ganho vem de estrutura, feed, mensuração e priorização comercial.",
    problems: [
      "Campanhas misturam produtos com margens diferentes.",
      "Feed incompleto ou pouco competitivo.",
      "Busca paga sem estratégia por categoria.",
      "Dificuldade para separar marca, aquisição e remarketing."
    ],
    deliveries: [
      "Auditoria de conta, tags e Merchant Center.",
      "Estrutura de campanhas por prioridade comercial.",
      "Revisão de feed, títulos e atributos.",
      "Ajustes de orçamento por sazonalidade.",
      "Relatórios de receita, custo e oportunidades."
    ],
    indicators: ["ROAS", "CPA", "Impressões qualificadas", "Parcela de impressão", "Conversões", "Valor de conversão"],
    tools: ["Google Ads", "Merchant Center", "GA4", "Search Console", "Looker Studio a confirmar"],
    methodology: [
      "Correção da base de mensuração.",
      "Organização da conta por intenção.",
      "Ajustes de feed e categorias prioritárias.",
      "Rotina de otimização por produto e margem."
    ],
    faq: [
      {
        question: "O trabalho inclui Google Shopping?",
        answer:
          "Sim, desde que a loja tenha Merchant Center e feed em condições de uso. Quando houver problemas no feed, eles entram no plano de correção."
      },
      {
        question: "Performance Max substitui campanhas de pesquisa?",
        answer:
          "Não necessariamente. A combinação depende de histórico, mix de produtos, demanda de marca e volume de conversões."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "crm-para-ecommerce",
    name: "CRM para e-commerce",
    shortName: "CRM",
    intent: "Organizar relacionamento, segmentação e recompra com base em comportamento real.",
    summary:
      "Estratégia de ciclos de relacionamento, segmentação e automações para transformar base de clientes em receita recorrente.",
    commercialIntro:
      "CRM reduz a dependência de aquisição quando a loja sabe falar com cada público no momento certo.",
    problems: [
      "Base de clientes sem segmentação.",
      "Pouca recompra.",
      "Comunicações iguais para perfis diferentes.",
      "Dados espalhados entre loja, mídia e atendimento."
    ],
    deliveries: [
      "Mapeamento de base, segmentos e jornadas.",
      "Plano de automações e campanhas recorrentes.",
      "Calendário de relacionamento.",
      "Integração com e-mail, WhatsApp e mídia quando aplicável.",
      "Relatório de receita de retenção."
    ],
    indicators: ["Receita por base", "Recompra", "LTV", "Churn", "Engajamento", "Conversão por segmento"],
    tools: ["Plataforma de CRM a confirmar", "GA4", "Dados da loja", "Ferramentas de automação a confirmar"],
    methodology: [
      "Diagnóstico da base e dos momentos de compra.",
      "Segmentação por comportamento e valor.",
      "Construção de jornadas e campanhas.",
      "Leitura de receita incremental e aprendizado."
    ],
    faq: [
      {
        question: "CRM serve para loja que ainda tem base pequena?",
        answer:
          "Serve quando há plano de crescimento. O escopo começa menor, com captação, organização da base e automações essenciais."
      },
      {
        question: "CRM é diferente de e-mail marketing?",
        answer:
          "Sim. E-mail é um canal. CRM define segmentos, momentos, ofertas, regras e leitura de relacionamento."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "email-marketing-para-ecommerce",
    name: "E-mail marketing para e-commerce",
    shortName: "E-mail marketing",
    intent: "Gerar receita com campanhas, automações e relacionamento de médio prazo.",
    summary:
      "Planejamento, criação, disparo e análise de campanhas e automações de e-mail voltadas a conversão e fidelização.",
    commercialIntro:
      "E-mail marketing funciona quando a comunicação combina oferta, calendário, segmentação e consistência visual.",
    problems: [
      "Campanhas sem calendário.",
      "Baixa taxa de abertura ou clique.",
      "Comunicação visual inconsistente.",
      "Automação de carrinho, pós-compra e recompra ausente."
    ],
    deliveries: [
      "Calendário mensal de campanhas.",
      "Fluxos de carrinho, boas-vindas, pós-compra e reativação.",
      "Briefing, copy, design e disparo conforme escopo.",
      "Segmentação e higienização da base.",
      "Leitura de receita e engajamento."
    ],
    indicators: ["Receita por campanha", "Taxa de abertura", "CTR", "Conversão", "Descadastros", "Entregabilidade"],
    tools: ["Mailbiz, RD Station, Mailchimp e ActiveCampaign exibidos no site legado, a confirmar"],
    methodology: [
      "Revisão da base e da entregabilidade.",
      "Definição de calendário e segmentos.",
      "Produção de campanhas e automações.",
      "Ajustes por engajamento, receita e sazonalidade."
    ],
    faq: [
      {
        question: "Vocês criam o layout dos e-mails?",
        answer:
          "Sim, quando o escopo incluir design. As peças seguem o guia visual da marca e os limites da ferramenta escolhida."
      },
      {
        question: "Com que frequência disparar campanhas?",
        answer:
          "A frequência depende de base, mix de produtos, calendário comercial e engajamento. O plano evita saturar a audiência."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "marketplace",
    name: "Gestão de marketplace",
    shortName: "Marketplace",
    intent: "Transformar presença em marketplaces em operação comercial acompanhada por dados.",
    summary:
      "Planejamento de canais, anúncios, catálogo e rotina comercial para vender em marketplaces com mais controle.",
    commercialIntro:
      "Marketplace exige estratégia de canal. Estar presente não basta quando preço, estoque, mídia e reputação não trabalham juntos.",
    problems: [
      "Catálogo sem priorização.",
      "Anúncios pagos sem análise de margem.",
      "Operação reativa em múltiplos canais.",
      "Pouca clareza sobre resultado por marketplace."
    ],
    deliveries: [
      "Diagnóstico de canais e mix de produtos.",
      "Plano de anúncios em marketplaces.",
      "Acompanhamento de catálogo, preço e reputação.",
      "Relatórios por canal e produto.",
      "Rotina de oportunidades por data comercial."
    ],
    indicators: ["Receita por canal", "Margem", "ACOS", "Pedidos", "Visibilidade", "Reputação"],
    tools: ["Mercado Livre", "Shopee", "Magalu", "Amazon", "Olist", "Americanas, a confirmar"],
    methodology: [
      "Análise de aderência por canal.",
      "Organização do catálogo e prioridades.",
      "Execução de mídia e ajustes operacionais.",
      "Leitura por margem, giro e reputação."
    ],
    faq: [
      {
        question: "A Etraction opera todos os marketplaces?",
        answer:
          "A lista final depende dos canais do cliente e do escopo contratado. A página deixa claro quais plataformas estão em operação."
      },
      {
        question: "Marketplace substitui a loja própria?",
        answer:
          "Não. Marketplace pode ampliar alcance, mas precisa ser avaliado junto com margem, marca, base própria e dependência de canal."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "design-para-ecommerce",
    name: "Design para e-commerce",
    shortName: "Design",
    intent: "Melhorar comunicação visual, clareza de oferta e consistência em loja, mídia e CRM.",
    summary:
      "Criação de peças, layouts e sistemas visuais orientados à performance comercial de e-commerces.",
    commercialIntro:
      "Design para e-commerce precisa vender com clareza. A estética importa, mas deve organizar informação, reduzir dúvida e apoiar decisão.",
    problems: [
      "Criativos pouco claros.",
      "Banners e páginas sem prioridade comercial.",
      "Marca inconsistente entre canais.",
      "Ofertas difíceis de entender no mobile."
    ],
    deliveries: [
      "Direção visual para campanhas.",
      "Banners, criativos e peças para CRM conforme escopo.",
      "Layouts para páginas de campanha e categorias.",
      "Guia de padrões visuais para e-commerce.",
      "Acompanhamento de desempenho das peças."
    ],
    indicators: ["CTR", "Conversão por peça", "Engajamento", "Receita por campanha", "Tempo na página"],
    tools: ["Ferramentas de design a confirmar", "Biblioteca de marca do cliente", "Dados de mídia e loja"],
    methodology: [
      "Briefing com objetivo comercial.",
      "Priorização de mensagem e hierarquia visual.",
      "Produção e adaptação por canal.",
      "Leitura de desempenho com mídia, CRM e CRO."
    ],
    faq: [
      {
        question: "Design entra só em campanha?",
        answer:
          "Não. Pode atuar em criativos, páginas, banners, e-mails, materiais de apoio e melhorias de experiência na loja."
      },
      {
        question: "Vocês seguem o manual da marca?",
        answer:
          "Sim. Quando não há manual, o projeto pode criar padrões mínimos para manter consistência."
      }
    ],
    specialist: specialistPlaceholder
  },
  {
    slug: "sucesso-do-cliente",
    name: "Sucesso do cliente para e-commerce",
    shortName: "Sucesso do cliente",
    intent: "Manter acompanhamento próximo, cadência clara e decisões integradas entre agência e cliente.",
    summary:
      "Gestão de relacionamento, rituais de acompanhamento e alinhamento entre especialistas para manter evolução contínua.",
    commercialIntro:
      "Crescimento em e-commerce depende de execução técnica e comunicação clara. Sucesso do cliente reduz ruído e acelera decisões.",
    problems: [
      "Falta de acompanhamento próximo.",
      "Reuniões sem decisão.",
      "Especialistas trabalhando de forma isolada.",
      "Cliente sem clareza sobre prioridades."
    ],
    deliveries: [
      "Rituais de onboarding e acompanhamento.",
      "Agenda de prioridades por ciclo.",
      "Registro de decisões, entregas e próximos passos.",
      "Integração entre mídia, CRO, CRM, marketplace e design.",
      "Leitura executiva de resultados."
    ],
    indicators: ["Cumprimento de plano", "Velocidade de resposta", "Aderência de entregas", "Evolução de indicadores por área"],
    tools: ["Ferramenta de gestão a confirmar", "Dashboards da operação", "Canal de comunicação a confirmar"],
    methodology: [
      "Onboarding com metas, acessos e responsáveis.",
      "Ritmo de comunicação e gestão de pauta.",
      "Acompanhamento de entregas e indicadores.",
      "Revisão de aprendizados e próximos ciclos."
    ],
    faq: [
      {
        question: "Como é a rotina de acompanhamento?",
        answer:
          "A cadência final depende do contrato. O modelo prevê pontos de contato, pauta objetiva e registro de próximos passos."
      },
      {
        question: "Quem centraliza as decisões?",
        answer:
          "O responsável de sucesso do cliente coordena a comunicação, mas as decisões técnicas são construídas com cada especialista."
      }
    ],
    specialist: specialistPlaceholder
  }
];

export const metrics = [
  {
    value: 70,
    prefix: "+",
    suffix: "",
    label: "clientes ativos",
    note: "Dado exibido na home atual. Data de referência a confirmar."
  },
  {
    value: 50,
    prefix: "+ R$",
    suffix: " mi",
    label: "investidos em mídia",
    note: "Dado exibido na home atual. Data de referência a confirmar."
  },
  {
    value: 1,
    prefix: "+ R$",
    suffix: " bi",
    label: "em vendas geradas",
    note: "Dado exibido na home atual. Data de referência a confirmar."
  },
  {
    value: 100,
    prefix: "+",
    suffix: "",
    label: "e-commerces atendidos",
    note: "Dado exibido na home atual. Data de referência a confirmar."
  }
];

export const clients = [
  { name: "Cia Light", logo: "/assets/clients/cia-light.svg" },
  { name: "Epulari", logo: "/assets/clients/epulari.svg" },
  { name: "Via", logo: "/assets/clients/via.svg" },
  { name: "Smeg", logo: "/assets/clients/smeg.svg" },
  { name: "Floresta", logo: "/assets/clients/floresta.svg" },
  { name: "Black Targ", logo: "/assets/clients/blacktarg.svg" },
  { name: "Dkadi", logo: "/assets/clients/dkadi.svg" },
  { name: "Jango", logo: "/assets/clients/jango.svg" },
  { name: "MV", logo: "/assets/clients/mv.svg" },
  { name: "Maloa", logo: "/assets/clients/maloa.svg" }
];

export const problems = [
  {
    issue: "Crescimento sem previsibilidade",
    response:
      "Planejamento de mídia, calendário comercial e indicadores compartilhados para decidir com antecedência."
  },
  {
    issue: "Dependência excessiva de mídia paga",
    response:
      "Integração de CRO, CRM, e-mail marketing e conteúdo para melhorar aproveitamento do tráfego."
  },
  {
    issue: "Baixa conversão",
    response:
      "Auditoria de jornada, hipóteses priorizadas e melhorias de experiência em produto, categoria e checkout."
  },
  {
    issue: "Mídia, loja e CRM desconectados",
    response:
      "Rotina de análise que cruza campanhas, estoque, base, margem e comportamento de compra."
  },
  {
    issue: "Pouca recompra",
    response:
      "Segmentação, réguas de relacionamento e campanhas de retenção orientadas por ciclo de vida."
  },
  {
    issue: "Dados espalhados",
    response:
      "Dashboards e rituais de leitura para transformar informação em prioridade de execução."
  },
  {
    issue: "Marketplace sem estratégia",
    response:
      "Escolha de canais, organização de catálogo e anúncios orientados por margem, reputação e giro."
  },
  {
    issue: "Comunicação visual inconsistente",
    response:
      "Design orientado a clareza comercial, com padrões por canal, campanha e estágio da jornada."
  }
];

export const methodology = [
  {
    step: "Diagnóstico",
    description:
      "Leitura de cenário, dados, plataforma, mídia, CRM, operação e pontos de atrito."
  },
  {
    step: "Planejamento",
    description:
      "Definição de metas, prioridades, canais, calendário e responsabilidades por ciclo."
  },
  {
    step: "Execução",
    description:
      "Especialistas atuam em mídia, CRO, CRM, marketplace, design e relacionamento de forma integrada."
  },
  {
    step: "Medição",
    description:
      "Indicadores são acompanhados por canal, etapa do funil, campanha, produto e objetivo comercial."
  },
  {
    step: "Aprendizado",
    description:
      "Resultados e perdas viram leitura prática para decidir o próximo movimento com menos ruído."
  },
  {
    step: "Otimização",
    description:
      "O que funciona ganha escala. O que trava vira ajuste de oferta, canal, experiência ou operação."
  },
  {
    step: "Escala",
    description:
      "Crescimento é ampliado com controle de investimento, margem, base, estoque e capacidade de entrega."
  }
];

export const partners = {
  officialToValidate: [
    {
      name: "Google Premier Partner",
      logo: "/assets/partners/google-premier-2025.webp",
      status: "a_confirmar" as const
    },
    {
      name: "Meta Partner",
      logo: "/assets/partners/meta-partner-2025.webp",
      status: "a_confirmar" as const
    },
    {
      name: "TikTok",
      logo: "/assets/partners/tiktok.svg",
      status: "a_confirmar" as const
    },
    {
      name: "Pinterest",
      logo: "/assets/partners/pinterest.svg",
      status: "a_confirmar" as const
    },
    {
      name: "Edrone",
      logo: "/assets/partners/edrone.svg",
      status: "a_confirmar" as const
    }
  ],
  platforms: ["Magazord", "Shopify", "Nuvemshop", "Tray", "Loja Integrada"],
  tools:
    "GA4, Google Ads, Meta Ads, Merchant Center, Search Console, CRM, automação de e-mail, plataformas de marketplace e dashboards, com stack final a confirmar por contrato."
};

export const company = {
  foundationDate: {
    value: "17 de outubro de 2019",
    status: "a_confirmar" as const
  },
  headquarters: {
    value: "Rio do Sul, Santa Catarina",
    status: "validado_publicamente" as const
  },
  cnpj: {
    value: "35.225.690/0001-61",
    status: "validado_publicamente" as const
  },
  administrators: [
    {
      name: "Leandro Rodrigo Dalponte",
      role: "Sócio administrador",
      photo: "/assets/team/leandro-dalponte.webp",
      bio:
        "Biografia, formação, trajetória e LinkedIn precisam ser validados antes da publicação.",
      status: "a_confirmar" as const
    },
    {
      name: "Vinicius Baldessar",
      role: "Sócio administrador",
      photo: "/assets/team/leader-placeholder.svg",
      bio:
        "Foto, biografia, formação, trajetória e LinkedIn precisam ser validados antes da publicação.",
      status: "a_confirmar" as const
    }
  ],
  mission:
    "Impulsionar negócios digitais com estratégias de marketing, crescimento escalável e cultura de alta performance.",
  vision:
    "Ser referência em marketing para e-commerce pelo desempenho, inovação e formação de equipes fortes.",
  values: [
    "Alta performance com disciplina.",
    "Inovação aplicada ao resultado.",
    "Foco em dados e clareza comercial.",
    "Resiliência para ciclos de crescimento.",
    "Trabalho em equipe com proximidade.",
    "Dedicação ao cliente."
  ],
  timeline: [
    {
      year: "2019",
      title: "Fundação da Etraction",
      description: "Data pública indicada como 17 de outubro de 2019, a validar."
    },
    {
      year: "[ANO A CONFIRMAR]",
      title: "Evolução dos serviços",
      description:
        "Campo editável para registrar entrada de CRO, CRM, marketplace, design e sucesso do cliente."
    },
    {
      year: "[ANO A CONFIRMAR]",
      title: "Certificações e selos",
      description:
        "Campo editável para datas, condições e validade de certificações oficiais."
    },
    {
      year: "[ANO A CONFIRMAR]",
      title: "Crescimento da equipe",
      description:
        "Campo editável para marcos de equipe, eventos, estrutura e conquistas."
    }
  ]
};

export const testimonials = [
  {
    author: "David Saraça",
    company: "Jango",
    role: "Diretor comercial",
    segment: "Embalagem",
    summary:
      "Depoimento público no site atual cita organização de lançamentos, suporte constante, dashboards e parceria próxima.",
    status: "a_confirmar" as const
  },
  {
    author: "Luiz Paulo",
    company: "Femme",
    role: "Proprietário",
    segment: "Moda feminina",
    summary:
      "Depoimento público no site atual cita atenção aos detalhes, estrutura de estratégia e entendimento da marca.",
    status: "a_confirmar" as const
  },
  {
    author: "Ricardo",
    company: "Dkadi Decor",
    role: "Proprietário",
    segment: "Móveis",
    summary:
      "Depoimento público no site atual cita apoio no layout, tráfego pago, marketplaces e troca constante de informações.",
    status: "a_confirmar" as const
  }
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "case-em-validacao",
    client: "[CLIENTE A CONFIRMAR]",
    segment: "[SEGMENTO A CONFIRMAR]",
    challenge: "[DESAFIO A CONFIRMAR]",
    initialScenario: "[CENÁRIO INICIAL A CONFIRMAR]",
    strategy: "[ESTRATÉGIA APLICADA A CONFIRMAR]",
    services: ["[SERVIÇOS ENVOLVIDOS A CONFIRMAR]"],
    period: "[PERÍODO ANALISADO A CONFIRMAR]",
    percentageResult: "[RESULTADO PERCENTUAL A CONFIRMAR]",
    absoluteResult: "[RESULTADO ABSOLUTO A CONFIRMAR]",
    testimonial: "[DEPOIMENTO AUTORIZADO A CONFIRMAR]",
    source: "[FONTE DOS DADOS A CONFIRMAR]",
    status: "placeholder"
  }
];

export const blogPosts = [
  {
    slug: "conteudo-a-migrar",
    title: "Conteúdo do blog a migrar do WordPress",
    description:
      "Página técnica placeholder para testar o template. Os artigos reais devem ser importados do WordPress antes da publicação.",
    author: "[AUTOR A CONFIRMAR]",
    publishedAt: "[DATA A CONFIRMAR]",
    updatedAt: "[DATA A CONFIRMAR]",
    category: "Migração",
    status: "placeholder" as const
  }
];

export const talentAreas = [
  "CRO",
  "Meta Ads",
  "Google Ads",
  "CRM",
  "E-mail marketing",
  "Marketplace",
  "Sucesso do cliente",
  "Design para e-commerce",
  "Conteúdo",
  "Operações"
];

export const validationItems = [
  "Telefone oficial e WhatsApp oficial.",
  "Texto definitivo de cases, períodos, resultados e fontes.",
  "Fotos, cargos e biografias dos especialistas.",
  "Lista final de clientes com autorização de uso de marca.",
  "Depoimentos com autorização e cargos atualizados.",
  "Validade de Google Premier Partner, Meta Partner, TikTok, Pinterest e Edrone.",
  "Endereço, horários de atendimento e Perfil da Empresa no Google.",
  "Integração final de CRM, consentimento de cookies e eventos de conversão.",
  "Mapa de redirecionamentos do blog atual e páginas legadas.",
  "Divergência de métrica de satisfação exibida no site atual."
];

export const redirectPlan = [
  {
    from: "/nova-home/",
    to: "/",
    status: 301,
    note: "Página legado encontrada no site atual."
  },
  {
    from: "/lgpd/",
    to: "/lgpd/",
    status: 200,
    note: "Preservar URL atual do canal do titular."
  },
  {
    from: "/blog/[slug-atual]/",
    to: "/blog/[mesmo-slug]/",
    status: 200,
    note:
      "Rastrear todos os posts antes da migração. Se algum slug mudar, criar 301 individual."
  }
];
