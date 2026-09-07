export type ValidationStatus = "validado_publicamente" | "a_confirmar" | "placeholder";

export type Service = {
  slug: string;
  /** Chave em `operationalLeaders`, usada para a foto no menu de soluções. */
  leaderKey?: string;
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

export type Cta = {
  label: string;
  href: string;
  external?: boolean;
};

export type Metric = {
  value: number;
  prefix: string;
  suffix: string;
  label: string;
  note: string;
  /** Nome do ícone Lucide usado no card. */
  icon: string;
  ariaLabel: string;
  decimals?: number;
};

export type OperationalLeader = {
  key: string;
  name: string;
  role?: string;
  /** Retrato 900x1125. `imageSmall` é a versão 480px para o srcset. */
  image: string;
  imageSmall: string;
  /** Avatar 192px. `avatarSmall` é a versão 96px, suficiente até 48px em telas 2x. */
  avatar: string;
  avatarSmall: string;
  alt: string;
  sourceFile: string;
};

export type HomeService = {
  slug: string;
  title: string;
  /** Nome do ícone Lucide renderizado no card. */
  icon: string;
  description: string;
  leaderKeys: string[];
  deliveries: string[];
  benefits: string[];
  /** Página de serviço correspondente, quando existir. */
  detailSlug?: string;
  cta: Cta;
};

export type LogoPosition = {
  x: number;
  y: number;
  rotate: number;
  scale: number;
  step: number;
};

export type ClientLogo = {
  name: string;
  logo: string;
  width: number;
  height: number;
  size: "regular" | "wide" | "compact";
  position: LogoPosition;
};

export type Testimonial = {
  author: string;
  company: string;
  role: string;
  segment: string;
  logo: string;
  quote: string;
  excerpt: string;
  status: ValidationStatus;
};

export type PartnerBadge = {
  name: string;
  logo: string;
  width: number;
  height: number;
  status: ValidationStatus;
};

export const site = {
  name: "Etraction",
  legalName: "E-traction Marketing de Performance para E-commerce",
  url: "https://etraction.com.br",
  description:
    "Agência especializada em crescimento, performance e estratégia para e-commerce.",
  instagram: "https://www.instagram.com/etraction_",
  linkedin: "",
  email: "contato@etraction.com.br",
  phone: "47 99272-9571",
  whatsapp:
    "https://api.whatsapp.com/send?phone=5547992454021&text=Ol%C3%A1%2C%20vim%20atrav%C3%A9s%20do%20site%20da%20ETRACTION.%20Pode%20me%20ajudar%2C%20por%20favor%3F",
  address:
    "Av. 7 de Setembro, 286, Primeiro Andar, Sala 04, Jardim América, Rio do Sul, SC",
  cnpj: "35.225.690/0001-61"
};

export const ctas = {
  sales: {
    label: "Falar com o time de vendas",
    href: site.whatsapp,
    external: true
  },
  services: {
    label: "Conheça as soluções",
    href: "#servicos"
  },
  contact: {
    label: "Entrar em contato",
    href: "/contato/"
  }
} satisfies Record<string, Cta>;

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
  { label: "Crescimento", href: "/crescimento/" },
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
    items: ["CRO", "Design"]
  },
  {
    objective: "Reter e ampliar receita",
    items: ["CRM", "E-mail marketing", "Sucesso do cliente"]
  }
];

export const services: Service[] = [
  {
    slug: "cro-para-ecommerce",
    leaderKey: "gustavo-cro",
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
    ]
  },
  {
    slug: "meta-ads-para-ecommerce",
    leaderKey: "fernando-metaads",
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
    ]
  },
  {
    slug: "google-ads-para-ecommerce",
    leaderKey: "gregori-googleads",
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
    ]
  },
  {
    slug: "crm-para-ecommerce",
    leaderKey: "alana-crm",
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
    ]
  },
  {
    slug: "email-marketing-para-ecommerce",
    leaderKey: "tauane-emailmarketing",
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
    ]
  },
  {
    slug: "marketplace",
    leaderKey: "marquinho-marketplace",
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
    ]
  },
  {
    slug: "design-para-ecommerce",
    leaderKey: "joaquim-designer",
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
    ]
  },
  {
    slug: "sucesso-do-cliente",
    leaderKey: "juliana-sucessocliente",
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
    ]
  }
];

export const metrics: Metric[] = [
  {
    value: 100,
    prefix: "+",
    suffix: "",
    label: "clientes ativos",
    note: "Com rotina e responsável definidos.",
    icon: "users",
    ariaLabel: "Mais de 100 clientes ativos"
  },
  {
    value: 50,
    prefix: "+",
    suffix: "",
    label: "no time",
    note: "Especialistas em mídia, dados, conteúdo e design.",
    icon: "users-round",
    ariaLabel: "Mais de 50 pessoas no time"
  },
  {
    value: 80,
    prefix: "R$ ",
    suffix: "M",
    label: "investidos em mídia",
    note: "Verba gerida em mídia e marketplace.",
    icon: "wallet",
    ariaLabel: "Mais de 80 milhões de reais investidos em mídia"
  },
  {
    value: 1,
    prefix: "R$ ",
    suffix: "B",
    label: "em vendas geradas",
    note: "Nas operações atendidas desde 2019.",
    icon: "trending-up",
    ariaLabel: "Mais de 1 bilhão de reais em vendas geradas"
  }
];

/**
 * Séries do dashboard. Os dois valores são os indicadores públicos da Etraction
 * (R$ 80 mi investidos e R$ 1 bi em vendas); o múltiplo é derivado deles.
 */
export const dashboardData = {
  /**
   * Indicadores lidos em cada frente, agrupados por objetivo. Os itens saem de
   * `services[].indicators`, então o painel reflete o que as páginas de serviço
   * já prometem acompanhar.
   */
  tracking: {
    label: "O que acompanhamos",
    caption: "Os indicadores lidos toda semana em cada frente da operação.",
    groups: [
      {
        key: "aquisicao",
        title: "Aquisição",
        icon: "trending-up",
        detail: "Meta Ads, Google Ads e Marketplace",
        indicators: ["ROAS", "CPA", "Receita atribuída", "Margem", "ACOS", "Parcela de impressão"]
      },
      {
        key: "conversao",
        title: "Conversão",
        icon: "target",
        detail: "CRO e Design",
        indicators: ["Taxa de conversão", "Receita por sessão", "Ticket médio", "Abandono de carrinho", "CTR"]
      },
      {
        key: "retencao",
        title: "Retenção",
        icon: "repeat",
        detail: "CRM, E-mail marketing e Sucesso do cliente",
        indicators: ["LTV", "Recompra", "Receita por base", "Churn", "Entregabilidade"]
      }
    ]
  },
  coverage: {
    label: "Onde a Etraction opera",
    caption: "Plataformas e canais que o time já roda no dia a dia.",
    groups: [
      {
        title: "Plataformas de e-commerce",
        icon: "store",
        items: ["Magazord", "Shopify", "Nuvemshop", "Tray", "Loja Integrada"]
      },
      {
        title: "Canais de mídia e marketplace",
        icon: "megaphone",
        items: ["Google Ads", "Meta Ads", "TikTok", "Pinterest", "Marketplaces"]
      }
    ]
  }
};

export const operationalLeaders: Record<string, OperationalLeader> = {
  "gustavo-cro": {
    key: "gustavo-cro",
    name: "Gustavo",
    role: "CRO",
    image: "/assets/team/operations/gustavo-cro.webp",
    imageSmall: "/assets/team/operations/gustavo-cro-480.webp",
    avatar: "/assets/team/operations/gustavo-cro-avatar.webp",
    avatarSmall: "/assets/team/operations/gustavo-cro-avatar-96.webp",
    alt: "Foto de Gustavo, especialista de CRO da Etraction",
    sourceFile: "assets/gustavo-cro.jpg"
  },
  "fernando-metaads": {
    key: "fernando-metaads",
    name: "Fernando",
    role: "Meta Ads",
    image: "/assets/team/operations/fernando-metaads.webp",
    imageSmall: "/assets/team/operations/fernando-metaads-480.webp",
    avatar: "/assets/team/operations/fernando-metaads-avatar.webp",
    avatarSmall: "/assets/team/operations/fernando-metaads-avatar-96.webp",
    alt: "Foto de Fernando, especialista de Meta Ads da Etraction",
    sourceFile: "assets/fernando-metaads.jpg"
  },
  "gregori-googleads": {
    key: "gregori-googleads",
    name: "Gregori",
    role: "Google Ads",
    image: "/assets/team/operations/gregori-googleads.webp",
    imageSmall: "/assets/team/operations/gregori-googleads-480.webp",
    avatar: "/assets/team/operations/gregori-googleads-avatar.webp",
    avatarSmall: "/assets/team/operations/gregori-googleads-avatar-96.webp",
    alt: "Foto de Gregori, especialista de Google Ads da Etraction",
    sourceFile: "assets/gregori-googleads.jpg"
  },
  "alana-crm": {
    key: "alana-crm",
    name: "Alana",
    role: "CRM",
    image: "/assets/team/operations/alana-crm.webp",
    imageSmall: "/assets/team/operations/alana-crm-480.webp",
    avatar: "/assets/team/operations/alana-crm-avatar.webp",
    avatarSmall: "/assets/team/operations/alana-crm-avatar-96.webp",
    alt: "Foto de Alana, especialista de CRM da Etraction",
    sourceFile: "assets/alana-crm.jpg"
  },
  "tauane-emailmarketing": {
    key: "tauane-emailmarketing",
    name: "Tauane",
    role: "E-mail Marketing",
    image: "/assets/team/operations/tauane-emailmarketing.webp",
    imageSmall: "/assets/team/operations/tauane-emailmarketing-480.webp",
    avatar: "/assets/team/operations/tauane-emailmarketing-avatar.webp",
    avatarSmall: "/assets/team/operations/tauane-emailmarketing-avatar-96.webp",
    alt: "Foto de Tauane, especialista de E-mail Marketing da Etraction",
    sourceFile: "assets/tauane-emailmarketing.jpg"
  },
  "marquinho-marketplace": {
    key: "marquinho-marketplace",
    name: "Marquinho",
    role: "Marketplace",
    image: "/assets/team/operations/marquinho-marketplace.webp",
    imageSmall: "/assets/team/operations/marquinho-marketplace-480.webp",
    avatar: "/assets/team/operations/marquinho-marketplace-avatar.webp",
    avatarSmall: "/assets/team/operations/marquinho-marketplace-avatar-96.webp",
    alt: "Foto de Marquinho, especialista de Marketplace da Etraction",
    sourceFile: "assets/marquinho-marketplace.jpg"
  },
  "maria-socialmidia": {
    key: "maria-socialmidia",
    name: "Maria",
    role: "Social Media",
    image: "/assets/team/operations/maria-socialmidia.webp",
    imageSmall: "/assets/team/operations/maria-socialmidia-480.webp",
    avatar: "/assets/team/operations/maria-socialmidia-avatar.webp",
    avatarSmall: "/assets/team/operations/maria-socialmidia-avatar-96.webp",
    alt: "Foto de Maria, especialista de Social Media da Etraction",
    sourceFile: "assets/maria-socialmidia.png"
  },
  "juliana-sucessocliente": {
    key: "juliana-sucessocliente",
    name: "Juliana",
    role: "Sucesso do Cliente",
    image: "/assets/team/operations/juliana-sucessocliente.webp",
    imageSmall: "/assets/team/operations/juliana-sucessocliente-480.webp",
    avatar: "/assets/team/operations/juliana-sucessocliente-avatar.webp",
    avatarSmall: "/assets/team/operations/juliana-sucessocliente-avatar-96.webp",
    alt: "Foto de Juliana, especialista de Sucesso do Cliente da Etraction",
    sourceFile: "assets/juliana-sucessocliente.jpg"
  },
  "joaquim-designer": {
    key: "joaquim-designer",
    name: "Joaquim",
    role: "Design Gráfico",
    image: "/assets/team/operations/joaquim-designer.webp",
    imageSmall: "/assets/team/operations/joaquim-designer-480.webp",
    avatar: "/assets/team/operations/joaquim-designer-avatar.webp",
    avatarSmall: "/assets/team/operations/joaquim-designer-avatar-96.webp",
    alt: "Foto de Joaquim, especialista de Design Gráfico da Etraction",
    sourceFile: "assets/joaquim-designer.jpg"
  }
};

export const homeServices: HomeService[] = [
  {
    slug: "cro",
    title: "CRO",
    icon: "target",
    description:
      "Transformamos o tráfego que você já paga em mais pedidos, testando página, oferta e checkout com método.",
    leaderKeys: ["gustavo-cro"],
    deliveries: [
      "Diagnóstico de conversão em toda a jornada de compra.",
      "Testes priorizados em página, oferta e checkout.",
      "Leitura contínua dos aprendizados de conversão."
    ],
    benefits: [
      "Mais receita sem aumentar o investimento.",
      "Menos fricção entre o clique e o pedido.",
      "Decisões de página apoiadas em comportamento real."
    ],
    detailSlug: "cro-para-ecommerce",
    cta: ctas.sales
  },
  {
    slug: "performance",
    title: "Performance",
    icon: "trending-up",
    description:
      "Meta Ads e Google Ads operados com leitura comercial: cada real investido responde por receita, margem e escala.",
    leaderKeys: ["fernando-metaads", "gregori-googleads"],
    deliveries: [
      "Estruturação de campanhas por objetivo comercial.",
      "Rotina semanal de otimização de verba e criativos.",
      "Acompanhamento de CAC, ROAS e receita por canal."
    ],
    benefits: [
      "Investimento com leitura de margem, não só de ROAS.",
      "Criativos conectados à oferta e ao funil.",
      "Escala com previsibilidade de aquisição."
    ],
    detailSlug: "meta-ads-para-ecommerce",
    cta: ctas.sales
  },
  {
    slug: "marketplace",
    title: "Marketplace",
    icon: "store",
    description:
      "Presença organizada nos grandes canais de venda, com anúncio, preço e operação alinhados à loja própria.",
    leaderKeys: ["marquinho-marketplace"],
    deliveries: [
      "Estruturação de catálogo, títulos e fichas de produto.",
      "Gestão de anúncios e campanhas dentro dos canais.",
      "Leitura de preço, concorrência e reputação."
    ],
    benefits: [
      "Mais um canal de receita sob controle.",
      "Menos conflito entre marketplace e loja própria.",
      "Operação preparada para picos de demanda."
    ],
    detailSlug: "marketplace",
    cta: ctas.sales
  },
  {
    slug: "crm",
    title: "CRM",
    icon: "repeat",
    description:
      "A base que você já conquistou volta a comprar. Segmentação, automações e recompra trabalhadas com cadência.",
    leaderKeys: ["alana-crm"],
    deliveries: [
      "Segmentação da base por comportamento e ciclo de compra.",
      "Automações de recuperação, boas-vindas e recompra.",
      "Leitura de LTV, frequência e retenção."
    ],
    benefits: [
      "Receita recorrente com custo de mídia menor.",
      "Clientes acompanhados depois da primeira compra.",
      "Previsibilidade vinda da própria base."
    ],
    detailSlug: "crm-para-ecommerce",
    cta: ctas.sales
  },
  {
    slug: "email-marketing",
    title: "E-mail Marketing",
    icon: "mail",
    description:
      "Campanhas conectadas ao calendário comercial, com segmentação que respeita quem está do outro lado.",
    leaderKeys: ["tauane-emailmarketing"],
    deliveries: [
      "Planejamento de campanhas por calendário comercial.",
      "Segmentação da base para comunicações relevantes.",
      "Análise de entregabilidade, engajamento e conversão."
    ],
    benefits: [
      "Canal próprio, sem depender de leilão de mídia.",
      "Consistência entre oferta e comunicação.",
      "Fidelização trabalhada com ritmo."
    ],
    detailSlug: "email-marketing-para-ecommerce",
    cta: ctas.sales
  },
  {
    slug: "social-media",
    title: "Social Media",
    icon: "megaphone",
    description:
      "Conteúdo com ritmo e identidade, construindo audiência que reconhece a marca antes de precisar comprar.",
    leaderKeys: ["maria-socialmidia"],
    deliveries: [
      "Rotina editorial planejada por objetivo.",
      "Produção de conteúdo alinhada às campanhas.",
      "Leitura de engajamento e presença de marca."
    ],
    benefits: [
      "Marca presente onde o público já está.",
      "Comunicação com ritmo e consistência.",
      "Conteúdo conectado ao calendário do e-commerce."
    ],
    cta: ctas.sales
  },
  {
    slug: "sucesso-do-cliente",
    title: "Sucesso do Cliente",
    icon: "handshake",
    description:
      "Um time que conhece a sua operação pelo nome. Cadência de reunião, prioridade clara e próximo passo definido.",
    leaderKeys: ["juliana-sucessocliente"],
    deliveries: [
      "Reuniões de acompanhamento com pauta e histórico.",
      "Leitura conjunta de prioridades e gargalos.",
      "Encaminhamento direto para o especialista certo."
    ],
    benefits: [
      "Proximidade real entre cliente e operação.",
      "Clareza para decidir o próximo movimento.",
      "Estratégia conectada à rotina de execução."
    ],
    detailSlug: "sucesso-do-cliente",
    cta: ctas.sales
  },
  {
    slug: "design-grafico",
    title: "Design Gráfico",
    icon: "palette",
    description:
      "Criativos que vendem e sustentam a marca: campanha, banner e página com a mesma linguagem visual.",
    leaderKeys: ["joaquim-designer"],
    deliveries: [
      "Criação de peças por campanha e canal.",
      "Hierarquia visual construída para a oferta.",
      "Adaptação de criativos para cada formato digital."
    ],
    benefits: [
      "Identidade visual consistente em todos os pontos.",
      "Comunicação de oferta mais clara.",
      "Criativos alinhados à estratégia da marca."
    ],
    detailSlug: "design-para-ecommerce",
    cta: ctas.sales
  },
];

export const clients: ClientLogo[] = [
  {
    name: "Cia Light",
    logo: "/assets/clients/cia-light.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 50, y: 48, rotate: 0, scale: 1.06, step: 0 }
  },
  {
    name: "Epulari",
    logo: "/assets/clients/epulari.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 68, y: 18, rotate: 1.2, scale: 0.95, step: 4 }
  },
  {
    name: "Via",
    logo: "/assets/clients/via.svg",
    width: 160,
    height: 72,
    size: "compact",
    position: { x: 28, y: 38, rotate: -1.1, scale: 0.92, step: 3 }
  },
  {
    name: "Smeg",
    logo: "/assets/clients/smeg.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 42, y: 14, rotate: -0.7, scale: 0.95, step: 2 }
  },
  {
    name: "Floresta",
    logo: "/assets/clients/floresta.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 84, y: 84, rotate: -0.9, scale: 0.94, step: 10 }
  },
  {
    name: "Black Targ",
    logo: "/assets/clients/blacktarg.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 22, y: 78, rotate: 1.1, scale: 0.95, step: 9 }
  },
  {
    name: "DKadi Decor",
    logo: "/assets/clients/dkadi.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 75, y: 42, rotate: -1, scale: 1, step: 6 }
  },
  {
    name: "Jango",
    logo: "/assets/clients/jango.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 17, y: 18, rotate: 0.8, scale: 0.95, step: 1 }
  },
  {
    name: "MV",
    logo: "/assets/clients/mv.svg",
    width: 150,
    height: 72,
    size: "compact",
    position: { x: 90, y: 58, rotate: 0.9, scale: 0.88, step: 8 }
  },
  {
    name: "Correia",
    logo: "/assets/clients/logo-1.webp",
    width: 220,
    height: 67,
    size: "wide",
    position: { x: 12, y: 56, rotate: -0.8, scale: 0.96, step: 7 }
  },
  {
    name: "ARM Fitness",
    logo: "/assets/clients/logo-arm.webp",
    width: 146,
    height: 61,
    size: "compact",
    position: { x: 88, y: 24, rotate: 1, scale: 0.9, step: 5 }
  },
  {
    name: "Maloa",
    logo: "/assets/clients/maloa.svg",
    width: 180,
    height: 72,
    size: "regular",
    position: { x: 46, y: 84, rotate: -1.2, scale: 0.95, step: 11 }
  },
  {
    name: "Move Fitness",
    logo: "/assets/clients/move-fitness.webp",
    width: 418,
    height: 98,
    size: "wide",
    position: { x: 67, y: 76, rotate: 0.7, scale: 0.88, step: 12 }
  }
];

export const homeBenefits = [
  "Estratégia integrada entre aquisição, conversão, relacionamento e marca.",
  "Criatividade orientada por dados para campanhas, jornadas e ofertas.",
  "Rotina próxima com o cliente para transformar aprendizado em execução."
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

export const partners: {
  officialToValidate: PartnerBadge[];
  platforms: string[];
  tools: string;
} = {
  officialToValidate: [
    {
      name: "Google Premier Partner",
      logo: "/assets/partners/google-premier-2025.webp",
      width: 287,
      height: 274,
      status: "validado_publicamente"
    },
    {
      name: "Meta Partner",
      logo: "/assets/partners/meta-partner-2025.webp",
      width: 287,
      height: 273,
      status: "validado_publicamente"
    },
    {
      name: "TikTok",
      logo: "/assets/partners/tiktok.svg",
      width: 180,
      height: 72,
      status: "validado_publicamente"
    },
    {
      name: "Pinterest",
      logo: "/assets/partners/pinterest.svg",
      width: 180,
      height: 72,
      status: "validado_publicamente"
    },
    {
      name: "Edrone",
      logo: "/assets/partners/edrone.svg",
      width: 180,
      height: 72,
      status: "validado_publicamente"
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
      photoSmall: "/assets/team/leandro-dalponte-480.webp",
      bio:
        "Cofundador da Etraction, atua na estratégia comercial e no relacionamento com as operações atendidas.",
      status: "a_confirmar" as const
    },
    {
      name: "Vinicius Baldessar",
      role: "Sócio administrador",
      photo: "/assets/team/vinicius-baldessar.webp",
      photoSmall: "/assets/team/vinicius-baldessar-480.webp",
      bio:
        "Cofundador da Etraction, acompanha a estrutura de performance e a formação do time de especialistas.",
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

export const growth = {
  eyebrow: "Crescimento Etraction",
  title: "A gente cresce junto. Com o cliente, e com quem faz a Etraction acontecer.",
  intro:
    "A Etraction nasceu em 2019, em Rio do Sul, com uma ideia simples: fazer e-commerce crescer de verdade, com gente que se importa. Hoje somos um time multidisciplinar que atende mais de 100 operações.",
  photo: {
    src: "/assets/team/time-gestores.webp",
    srcSmall: "/assets/team/time-gestores-700.webp",
    alt: "Gestores da Etraction reunidos no escritório da agência",
    width: 1400,
    height: 788
  },

  /** Fotos de time por frente. */
  squads: [
    {
      key: "time-cro",
      name: "Time de CRO",
      description: "Testa página, oferta e checkout para transformar visita em pedido.",
      image: "/assets/team/time-cro.webp",
      imageSmall: "/assets/team/time-cro-700.webp",
      alt: "Time de CRO da Etraction"
    },
    {
      key: "time-crm",
      name: "Time de CRM e E-mail",
      description: "Cuida da base, da recompra e do relacionamento depois da primeira venda.",
      image: "/assets/team/time-crm.webp",
      imageSmall: "/assets/team/time-crm-700.webp",
      alt: "Time de CRM e e-mail marketing da Etraction"
    },
    {
      key: "time-marketplace",
      name: "Time de Marketplace",
      description: "Organiza catálogo, anúncio e preço nos grandes canais de venda.",
      image: "/assets/team/time-marketplace.webp",
      imageSmall: "/assets/team/time-marketplace-700.webp",
      alt: "Time de marketplace da Etraction"
    },
    {
      key: "time-designer",
      name: "Time de Design",
      description: "Cria os criativos e a comunicação visual que sustentam as campanhas.",
      image: "/assets/team/time-designer.webp",
      imageSmall: "/assets/team/time-designer-700.webp",
      alt: "Time de design da Etraction"
    },
    {
      key: "time-etraction",
      name: "A Etraction em evento",
      description: "O time inteiro nos encontros do setor, onde o mercado se atualiza.",
      image: "/assets/team/time-etraction.webp",
      imageSmall: "/assets/team/time-etraction-700.webp",
      alt: "Time da Etraction reunido no estande da agência em um evento de e-commerce"
    }
  ],
  /** Números de equipe, com a fonte pública de cada um. */
  stats: [
    {
      value: "2019",
      label: "ano de fundação",
      note: "Rio do Sul, Santa Catarina.",
      icon: "flag",
      source: "Perfil da empresa no LinkedIn"
    },
    {
      value: "50+",
      label: "pessoas no time",
      note: "Especialistas em mídia, dados, conteúdo, design e atendimento.",
      icon: "users-round",
      source: "Perfil da empresa no LinkedIn"
    },
    {
      value: "8",
      label: "frentes de especialidade",
      note: "Cada cliente tem um responsável com nome e rosto em cada frente.",
      icon: "layers",
      source: "Estrutura de serviços da Etraction"
    },
    {
      value: "100+",
      label: "e-commerces atendidos",
      note: "Operações de portes e segmentos diferentes, do nicho ao alto volume.",
      icon: "store",
      source: "Site institucional da Etraction"
    }
  ],
  /** Pilares de cultura: como é trabalhar aqui. */
  culture: [
    {
      icon: "heart",
      title: "Mais que empresa, é família",
      description:
        "Ninguém é número de crachá. As pessoas se conhecem pelo nome, comemoram junto e seguram a barra junto."
    },
    {
      icon: "sprout",
      title: "Cresce quem quer crescer",
      description:
        "Plano de evolução por frente e espaço real para assumir mais. Boa parte da liderança começou na operação."
    },
    {
      icon: "users",
      title: "Time junto, do briefing ao resultado",
      description:
        "Mídia, CRO, CRM, design e atendimento na mesma conversa. O resultado do cliente é de todo mundo."
    },
    {
      icon: "message-circle",
      title: "Porta aberta, de verdade",
      description:
        "Sócios acessíveis, feedback direto e decisão explicada. Se algo não funciona, se fala e se resolve."
    },
    {
      icon: "graduation-cap",
      title: "Aprender faz parte do expediente",
      description:
        "Certificações, treinamentos e tempo para estudar o que muda toda semana no e-commerce."
    },
    {
      icon: "party-popper",
      title: "Trabalho sério, ambiente leve",
      description:
        "Meta alta e clima bom não são opostos. Eventos, viagens de time e uma rotina em que dá gosto estar."
    }
  ],
  /** Marcos de crescimento. Anos entre colchetes seguem a confirmar. */
  timeline: [
    {
      year: "2019",
      title: "A Etraction começa em Rio do Sul",
      description:
        "Dois sócios, uma sala e a decisão de atender e-commerce em vez de ser mais uma agência generalista."
    },
    {
      year: "2021",
      title: "Especialização por frente",
      description:
        "A operação deixa de ser generalista e passa a ter donos por canal: Meta Ads, Google Ads, e-mail e design.",
      status: "a_confirmar" as const
    },
    {
      year: "2023",
      title: "Estrutura completa de crescimento",
      description:
        "Entram CRO, CRM, marketplace e sucesso do cliente. O time cruza a marca de dezenas de pessoas.",
      status: "a_confirmar" as const
    },
    {
      year: "Hoje",
      title: "Mais de 100 e-commerces e um bilhão acompanhado",
      description:
        "Mais de 50 pessoas, presença em eventos do setor e a mesma meta: ser referência nacional em performance para e-commerce."
    }
  ],
  cta: {
    title: "Quer crescer com a gente?",
    description:
      "Se você é apaixonado por e-commerce, gosta de trabalhar perto das pessoas e quer um lugar onde dá para evoluir de verdade, deixe seu perfil no nosso banco de talentos.",
    primary: { label: "Fazer parte do time", href: "/carreiras/" },
    secondary: { label: "Ver a Etraction por dentro", href: site.instagram, external: true }
  }
};

export const testimonials: Testimonial[] = [
  {
    author: "David Saraça",
    company: "Jango",
    role: "Diretor comercial da Jango",
    segment: "Embalagens",
    logo: "/assets/testimonials/jango.svg",
    quote:
      "A parceria com a Etraction foi, sem dúvida, um divisor de águas para o nosso negócio e para o momento da empresa. Desde o início, demonstraram um olhar atento e sensível ao nosso estilo, compreendendo com precisão o DNA da nossa marca — algo raro e extremamente valioso. Eles tornaram nosso site muito mais dinâmico, com uma estrutura visual que facilita a navegação e destaca, com agilidade, os produtos estratégicos. A organização dos lançamentos ficou impecável, com cronogramas bem definidos e criativos que seguem um padrão de qualidade admirável — algo que antes exigia grande esforço da nossa equipe interna. Com isso, conseguimos direcionar nosso foco para a criação e o desenvolvimento de novos produtos. Outro ponto de destaque é o suporte constante: cumprem prazos com excelência, antecipam soluções e nos ajudam a construir estratégias claras e viáveis. Cada etapa — briefing, criação, entrega e ajustes — é conduzida com profissionalismo, escuta ativa e agilidade. A gestão de tráfego, com dashboards bem estruturados, trouxe informações precisas que facilitaram a tomada de decisão. Mais do que uma equipe técnica, a Etraction se tornou uma extensão do nosso time. O relacionamento vai além do profissional — são parceiros comprometidos e, acima de tudo, pessoas com quem criamos uma amizade.",
    excerpt:
      "A parceria com a Etraction foi, sem dúvida, um divisor de águas para o nosso negócio e para o momento da empresa.",
    status: "validado_publicamente"
  },
  {
    author: "Luiz Paulo",
    company: "Femme",
    role: "Proprietário da loja Femme",
    segment: "Moda feminina",
    logo: "/assets/testimonials/femme.svg",
    quote:
      "Gostaríamos de registrar o quanto estamos satisfeitos com o serviço que vocês vêm prestando. Desde o início da nossa parceria, temos notado um cuidado especial com cada detalhe, além de estratégias muito bem estruturadas que já estão trazendo resultados visíveis para o nosso negócio. A equipe é extremamente profissional, atenciosa e sempre disponível para tirar dúvidas e propor soluções criativas. Sentimos que realmente entenderam a essência da nossa marca e isso faz toda a diferença.",
    excerpt:
      "Gostaríamos de registrar o quanto estamos satisfeitos com o serviço que vocês vêm prestando.",
    status: "validado_publicamente"
  },
  {
    author: "Ricardo",
    company: "DKadi Decor",
    role: "Proprietário da DKadi Decor",
    segment: "Móveis",
    logo: "/assets/testimonials/dkadi-decor.svg",
    quote:
      "Falar da Etraction é muito fácil. Desde o início da jornada da Dkadi Decor, contei com total apoio da equipe: desde o layout do site até todos os detalhes do e-commerce. Hoje temos uma equipe interna de marketing que cuida de SEO e anúncios em marketplaces, trabalhando em conjunto com a Etraction. Todo o cuidado com nosso e-commerce está nas mãos deles, mas o diferencial está na troca constante de informações — sempre com disponibilidade e colaboração. Confiamos 100% do nosso tráfego pago e campanhas à Etraction, pois os resultados entregues são consistentes e há uma parceria real entre as equipes. A Etraction vai além de uma agência: é uma assessoria de marketing que nos orienta com segurança, assim como temos apoio jurídico e contábil. Em apenas 3 anos, os resultados da Dkadi Decor comprovam isso. Falo com propriedade, pois tudo o que menciono posso provar com números, telas, vendas e resultados concretos.",
    excerpt:
      "Falar da Etraction é muito fácil. Desde o início da jornada da Dkadi Decor, contei com total apoio da equipe.",
    status: "validado_publicamente"
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

export const talentAreas = [
  "CRO",
  "Meta Ads",
  "Google Ads",
  "CRM",
  "E-mail marketing",
  "Marketplace",
  "Social Media",
  "Sucesso do cliente",
  "Design para e-commerce",
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
  "Mapa de redirecionamentos do blog legado do WordPress para a nova estrutura.",
  "Divergência de métrica de satisfação exibida no site atual.",
  "Anos dos marcos 2021 e 2023 da linha do tempo de crescimento.",
  "Número exato de pessoas no time exibido na área de crescimento."
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
    to: "/",
    status: 301,
    note:
      "O blog saiu do novo site. Rastrear todos os posts do WordPress e decidir, por URL, entre 301 para a home, para a solução relacionada ou manter o conteúdo no WordPress atual."
  }
];
