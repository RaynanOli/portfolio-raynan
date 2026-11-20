export const site = {
  name: "Raynan Maciel",
  headline:
    "Assistente de Dados Júnior | BI, Automação e Desenvolvimento de Sistemas",
  about: [
    [
      "Sou estudante de Engenharia de Software e atuo como Assistente de Dados Júnior, com experiência em análise de dados, automação de processos e desenvolvimento de soluções tecnológicas.",
    ],
    [
      "No meu dia a dia, trabalho com ",
      { emphasis: "SQL, Power BI, Python, Excel e SAP" },
      ", buscando otimizar processos, organizar informações e transformar dados em soluções que facilitem a rotina das empresas.",
    ],
    [
      "Também desenvolvo aplicações web utilizando tecnologias como ",
      { emphasis: "React, TypeScript e Supabase" },
      ". Entre meus projetos estão soluções voltadas a ",
      { emphasis: "logística, automação de processos e Business Intelligence" },
      ", com foco na resolução de problemas reais e na melhoria da eficiência operacional das empresas.",
    ],
  ],
  careerGoal:
    "Quero desenvolver sistemas que simplifiquem tarefas e ajudem as equipes a tomar decisões com base em dados. Também quero aprofundar meus conhecimentos em inteligência artificial aplicada.",
} as const;

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "Sobre Mim", href: "#sobre" },
  { label: "Projetos", href: "#projetos" },
  { label: "Tecnologias", href: "#tecnologias" },
  { label: "Experiência", href: "#experiencia" },
  { label: "Contato", href: "#contato" },
] as const;

export const projects = [
  {
    title: "HeroTrack",
    emoji: "🚛",
    description:
      "Plataforma web para rastreamento de cargas e acompanhamento de operações logísticas, com interface responsiva, dashboards e visualização de indicadores em tempo real.",
    highlights: [
      "Dashboard Operacional",
      "BI Analytics",
      "Rastreamento Público",
      "Gestão Documental",
      "Dashboard TV",
      "Auditoria e Segurança",
    ],
    technologies: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Leaflet",
      "OSRM",
    ],
    badge: "Projeto Principal",
    presentation: "showcase",
    liveUrl: "https://herotrack.vercel.app",
    demoNote: "A demonstração usa a marca Marisa Transportes e dados simulados.",
    shortDescription: "Portal de Rastreamento Logístico",
    gallery: [
      {
        label: "Landing Page",
        src: "/herotrack/landing-page.png",
        alt: "Landing page do Herotrack com hero e preview do dashboard",
      },
      {
        label: "Dashboard",
        src: "/herotrack/dashboard.png",
        alt: "Dashboard operacional do Herotrack com KPIs e centro de comando",
      },
      {
        label: "BI Analytics",
        src: "/herotrack/bi-analytics.png",
        alt: "Painel de BI Analytics com indicadores logísticos",
      },
      {
        label: "Dashboard TV",
        src: "/herotrack/dashboard-tv.png",
        alt: "Dashboard TV para monitoramento em tempo real",
      },
    ],
  },
  {
    title: "Business Intelligence & Power BI",
    description:
      "Desenvolvimento de dashboards estratégicos voltados para indicadores operacionais, performance, controle de processos e apoio à tomada de decisão.",
    highlights: [
      "Dashboards Executivos",
      "KPIs Operacionais",
      "ETL e Integração de Dados",
      "Modelagem de Dados",
      "Relatórios Gerenciais",
    ],
    technologies: ["Power BI", "SQL", "ETL", "Modelagem de Dados", "Excel"],
    presentation: "showcase",
    disclaimer:
      "Os dashboards exibidos representam projetos pessoais e estudos de Business Intelligence. Não são utilizados dados confidenciais ou informações corporativas.",
    gallery: [
      {
        label: "Dashboard Executivo",
        src: "/fotos-bi/BI.jpeg",
        alt: "Dashboard executivo de Business Intelligence desenvolvido no Power BI",
      },
      {
        label: "Indicadores Operacionais",
        src: "/fotos-bi/BI2.jpeg",
        alt: "Painel de indicadores operacionais e KPIs no Power BI",
      },
      {
        label: "Análise de Performance",
        src: "/fotos-bi/BI3.jpeg",
        alt: "Análise de performance com visualizações de dados no Power BI",
      },
      {
        label: "Relatório Gerencial",
        src: "/fotos-bi/BI4.jpeg",
        alt: "Relatório gerencial com modelagem de dados no Power BI",
      },
    ],
  },
  {
    title: "Athos Digital",
    description:
      "Participação na produção de dashboards e construção de estratégias de Business Intelligence, com foco em indicadores de negócio, KPIs e integração de dados.",
    highlights: [
      "Desenvolvimento de dashboards estratégicos para análise de indicadores de negócio",
      "Criação de KPIs e processos ETL para integração e tratamento de dados",
      "Desenvolvimento de análises para apoio à tomada de decisão",
    ],
    technologies: ["Power BI", "SQL", "ETL", "Excel Avançado", "Modelagem de Dados"],
    presentation: "showcase",
    badge: "Projeto / Participação",
    gallery: [
      {
        label: "Dashboard BI",
        src: "/projeto-AthosDigital/BI.jpeg",
        alt: "Dashboard de Business Intelligence desenvolvido no projeto Athos Digital",
      },
      {
        label: "Painel de Indicadores",
        src: "/projeto-AthosDigital/BI2.jpeg",
        alt: "Painel de indicadores e KPIs estratégicos do projeto Athos Digital",
      },
      {
        label: "Certificado de Participação",
        src: "/projeto-AthosDigital/Certificado.jpeg",
        alt: "Certificado de participação no projeto Athos Digital",
      },
    ],
  },
  {
    title: "Portal CT-e — Gestão de Documentos e Informações Logísticas",
    badge: "Projeto corporativo",
    description:
      "Plataforma web desenvolvida para centralizar documentos fiscais e informações operacionais, facilitando o compartilhamento de arquivos e o acompanhamento de dados entre a transportadora e seus fornecedores.",
    highlights: [
      "Envio, visualização e download de documentos PDF e XML.",
      "Registro e atualização de DT, PC, CF e FR.",
      "Consulta e organização de documentos fiscais.",
      "Busca por fornecedor e número da nota fiscal.",
      "Acompanhamento do preenchimento das informações.",
    ],
    technologies: ["React", "TypeScript", "Vite", "Node.js", "Express", "Supabase"],
    presentation: "card",
    gallery: [
      {
        label: "Login",
        src: "/portal-cte/01-login.png",
        alt: "Tela de login do Portal CT-e",
      },
      {
        label: "Documentos",
        src: "/portal-cte/02-documentos.png",
        alt: "Lista de documentos do Portal CT-e com busca e filtro por situação",
      },
      {
        label: "Problemas de ICMS",
        src: "/portal-cte/03-problemas-icms.png",
        alt: "Painel do Portal CT-e para acompanhar divergências de ICMS",
      },
    ],
  },
  {
    title: "FMS Connect — Plataforma de Gestão de Fretes",
    badge: "Projeto independente",
    description:
      "Plataforma web desenvolvida para centralizar a gestão de fretes, clientes, motoristas, veículos, documentos e indicadores operacionais de transportadoras.",
    highlights: [
      "Cadastro e gerenciamento de fretes.",
      "Gestão de clientes, motoristas e veículos.",
      "Controle de custos e despesas de transporte.",
      "Acompanhamento de entregas, status e ocorrências.",
      "Armazenamento e consulta de documentos.",
      "Dashboard com indicadores financeiros e operacionais.",
      "Autenticação e controle de acesso.",
    ],
    technologies: ["React", "TypeScript", "Tailwind CSS", "Supabase", "Vite", "React Router"],
    presentation: "card",
    gallery: [
      {
        label: "Login",
        src: "/fms-connect/01-login.png",
        alt: "Tela de login do FMS Connect",
      },
      {
        label: "Dashboard",
        src: "/fms-connect/02-dashboard.png",
        alt: "Dashboard do FMS Connect com indicadores operacionais e financeiros",
      },
      {
        label: "Fretes",
        src: "/fms-connect/03-fretes.png",
        alt: "Lista de fretes do FMS Connect com filtros por status e cliente",
      },
      {
        label: "Cadastros",
        src: "/fms-connect/04-cadastros.png",
        alt: "Tela de cadastros do FMS Connect com abas de clientes, motoristas e veículos",
      },
    ],
  },
  {
    title: "Automação de Processos e SAP",
    description:
      "Desenvolvimento de automações para redução de atividades manuais, integração de informações e otimização de fluxos operacionais.",
    highlights: [
      "RPA",
      "Automação SAP",
      "Atualização Automática de Dados",
      "Otimização Operacional",
      "Integração de Sistemas",
    ],
    technologies: ["Python", "SAP", "SQL", "RPA", "Automação"],
    presentation: "card",
  },
] as const;

export const expertiseAreas = [
  {
    title: "Business Intelligence",
    description:
      "Dashboards, KPIs e modelagem de dados para decisões estratégicas.",
  },
  {
    title: "Desenvolvimento de Sistemas",
    description:
      "Desenvolvimento de aplicações web para apoiar rotinas de trabalho.",
  },
  {
    title: "Automação de Processos",
    description:
      "Eliminação de tarefas manuais e otimização de fluxos operacionais.",
  },
  {
    title: "Inteligência Artificial Aplicada",
    description:
      "Conhecimentos complementares em IA generativa, engenharia de prompt e aplicações de IA — não constituem experiência profissional consolidada.",
  },
  {
    title: "Bancos de Dados",
    description:
      "Modelagem, consultas SQL e integração de dados corporativos.",
  },
  {
    title: "Soluções Corporativas",
    description:
      "Projetos alinhados a processos empresariais e sistemas legados.",
  },
] as const;

export const experience = {
  work: [
    {
      company: "Transportes Aparecida",
      role: "Assistente de Dados Júnior · Jacareí/SP",
      period: "Julho 2026 - Atual",
      highlights: [
        "Administração, integração e análise de dados logísticos e operacionais.",
        "Desenvolvimento de relatórios e dashboards em Power BI para acompanhamento de indicadores e apoio à tomada de decisão.",
        "Automatização de processos de coleta, atualização e tratamento de dados, reduzindo atividades manuais.",
        "Responsável pelo desenvolvimento do HeroTrack, plataforma web para rastreamento de cargas em tempo real, ampliando a visibilidade das operações logísticas.",
        "Desenvolvimento do Portal CT-e, plataforma web para centralizar documentos fiscais e informações operacionais, facilitando a comunicação com fornecedores.",
      ],
    },
    {
      company: "Suzano",
      role: "Estagiário · Jacareí/SP",
      period: "Maio 2025 - Maio 2026",
      highlights: [
        "Atuação direta no planejamento e controle de processos de Reparo Externo, garantindo o cumprimento de cronogramas e fluxos da área.",
        "Desenvolvi por iniciativa própria dashboards em Power BI que trouxeram visibilidade aos indicadores de reparo, facilitando o controle gerencial.",
        "Implementei scripts para a atualização automática de dados, eliminando a necessidade de alimentação manual das planilhas e relatórios.",
        "Desenvolvimento de robô RPA para automatizar tarefas transacionais e repetitivas dentro do SAP, otimizando o tempo de resposta da operação.",
      ],
    },
  ],
  education: [
    {
      title: "Engenharia de Software",
      institution: "UMC",
      degree: "Bacharelado",
      detail: "Previsão de conclusão: Janeiro de 2028",
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "UMC",
      degree: "Tecnólogo",
      detail: "Concluído em Dezembro de 2025",
    },
  ],
  complementaryEducation: [
    {
      icon: "☁️",
      title: "Microsoft / SENAI",
      courses: [
        "Microsoft Azure Fundamentals (AZ-900)",
        "Microsoft Azure AI Fundamentals (AI-900)",
        "Microsoft Azure Data Fundamentals (DP-900)",
        "Microsoft Security, Compliance, and Identity Fundamentals (SC-900)",
        "Microsoft Power BI Data Analyst (PL-300)",
      ],
    },
    {
      icon: "🏦",
      title: "Fundação Bradesco",
      courses: [
        "Fundamentos de Power BI",
        "Conhecimentos em Banco de Dados",
      ],
    },
    {
      icon: "🎓",
      title: "Escola DNC",
      courses: [
        "Analista de BI — Escola DNC",
        "SQL para Análise de Dados",
        "Power BI",
        "Power BI Intermediário",
        "DAX",
        "Scrum",
        "Google Analytics 4",
        "Princípios de Arquitetura de Software",
        "Segurança e LGPD para Profissionais de TI",
      ],
    },
  ],
} as const;

export const techCategories = [
  {
    title: "Análise de Dados & BI",
    items: ["Power BI", "SQL", "ETL", "Modelagem de Dados", "Excel Avançado"],
  },
  {
    title: "Desenvolvimento",
    items: [
      "Python",
      "Java",
      "JavaScript",
      "React",
      "Next.js",
      "TypeScript",
      "HTML5",
      "CSS3",
    ],
  },
  {
    title: "Automação & Sistemas",
    items: ["SAP", "RPA", "Integração de Dados", "Automação de Processos"],
  },
  {
    title: "Ferramentas",
    items: ["Git", "GitHub", "Scrum", "Kanban", "Pacote Office"],
  },
  {
    title: "Inteligência Artificial — Conhecimentos Complementares",
    items: [
      "IA Generativa",
      "Engenharia de Prompt",
      "IA Aplicada a Negócios",
    ],
  },
] as const;

export const contactLocation = {
  label: "Localização",
  description: "Jacareí/SP",
} as const;

export const contactLinks = [
  {
    label: "GitHub",
    href: "https://github.com/RaynanOli",
    description: "Repositórios e projetos open source",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/raynan-maciel-oliveira-7480862a8/",
    description: "Conecte-se profissionalmente",
  },
  {
    label: "Email",
    href: "mailto:raynanoli8@gmail.com",
    description: "raynanoli8@gmail.com",
  },
] as const;
