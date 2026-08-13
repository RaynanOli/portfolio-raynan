export const site = {
  name: "Raynan Maciel",
  headline:
    "Desenvolvedor de Sistemas, Business Intelligence, Automação de Processos e Soluções com Inteligência Artificial.",
  about: [
    "Atualmente atuo como Assistente de Dados Júnior, com experiência em análise de dados, Business Intelligence, automação de processos e desenvolvimento de soluções digitais.",
    "Atuo com integração e tratamento de dados, criação de dashboards em Power BI, automações em Python, SQL e desenvolvimento de aplicações voltadas para otimização de processos.",
    "Sou estudante de Engenharia de Software e possuo conhecimentos em modelagem de dados, desenvolvimento web e tecnologias Microsoft, combinando visão analítica e técnica para transformar dados em soluções eficientes para o negócio.",
  ],
  careerGoal:
    "Meu objetivo é desenvolver soluções que combinem desenvolvimento de software, dados e automação, ampliando conhecimentos em inteligência artificial aplicada para gerar eficiência operacional e apoiar a tomada de decisões.",
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
    title: "Herotrack",
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
      "Business Intelligence",
    ],
    badge: "Projeto Principal",
    featured: true,
    liveUrl: "https://herotrack.vercel.app",
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
    featured: false,
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
    featured: false,
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
    featured: false,
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
      "Aplicações web modernas com arquitetura escalável e foco em UX.",
  },
  {
    title: "Automação de Processos",
    description:
      "Eliminação de tarefas manuais e otimização de fluxos operacionais.",
  },
  {
    title: "Inteligência Artificial Aplicada",
    description:
      "Conhecimentos complementares em IA generativa, engenharia de prompt e aplicações de IA para apoio a processos e decisões.",
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
        "Desenvolvimento e evolução contínua da plataforma, com foco em integração de dados, usabilidade e novas funcionalidades.",
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
        "Analista de BI (Certificação)",
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
    title: "Inteligência Artificial",
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
    href: "mailto:raynan.oli8@gmail.com",
    description: "raynan.oli8@gmail.com",
  },
] as const;
