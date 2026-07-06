export const site = {
  name: "Raynan Maciel",
  headline:
    "Desenvolvedor de Sistemas, Business Intelligence, Automação de Processos e Soluções com Inteligência Artificial.",
  about: [
    "Atualmente atuo como Assistente de Dados Jr, desenvolvendo soluções voltadas para análise de dados, Business Intelligence, automação de processos e otimização operacional.",
    "Sou estudante de Engenharia de Software e possuo experiência na integração e tratamento de dados, criação de dashboards em Power BI, automações utilizando Python e desenvolvimento de aplicações voltadas à melhoria de processos.",
    "Tenho conhecimentos em SQL, modelagem de dados, desenvolvimento web e tecnologias Microsoft, combinando visão analítica e técnica para transformar dados em soluções eficientes para o negócio.",
  ],
  careerGoal:
    "Meu objetivo é desenvolver soluções que combinem desenvolvimento de software, dados, automação e inteligência artificial para gerar eficiência operacional e apoiar a tomada de decisões.",
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
      "Plataforma completa de rastreamento e gestão logística desenvolvida com Next.js, React, TypeScript, Leaflet e OSRM.",
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
    featured: true,
    liveUrl: "https://herotrack.vercel.app",
    githubUrl: "https://github.com/RaynanOli/herotrack",
    shortDescription:
      "Plataforma completa de rastreamento e gestão logística.",
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
    title: "Projeto Athos Digital",
    description:
      "Participação no aprimoramento de uma plataforma de Business Intelligence voltada à expansão de dashboards, personalização de KPIs e evolução da estrutura de dados para atendimento de diferentes segmentos de negócio.",
    highlights: [
      "Desenvolvimento de Dashboards",
      "Business Intelligence",
      "Estruturação de Dados",
      "KPIs Estratégicos",
      "Integração de Dados",
      "Análise de Indicadores",
    ],
    technologies: [
      "Power BI",
      "Excel",
      "SQL",
      "Business Intelligence",
      "Data Analysis",
    ],
    featured: false,
    badge: "Projeto Corporativo",
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
      "Soluções com IA generativa e automação inteligente para negócios.",
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
      role: "Assistente de Dados Jr · Jacareí/SP",
      period: "Julho 2026 - Atual",
      highlights: [
        "Administração, integração e tratamento de dados logísticos e operacionais.",
        "Desenvolvimento de dashboards e relatórios em Power BI para acompanhamento de indicadores estratégicos.",
        "Automação de processos utilizando Python e SQL para redução de atividades manuais.",
        "Desenvolvimento do HeroTrack, plataforma de rastreamento de cargas em tempo real.",
        "Criação de soluções voltadas à otimização operacional e aumento da visibilidade logística.",
        "Apoio à tomada de decisão através da análise de indicadores e dados corporativos.",
      ],
    },
    {
      company: "Suzano",
      role: "Atuação em BI e Automação · Jacareí/SP",
      period: "Maio 2025 - Maio 2026",
      highlights: [
        "Planejamento e controle dos processos de Reparo Externo.",
        "Desenvolvimento de dashboards em Power BI para acompanhamento de indicadores operacionais.",
        "Automação da atualização de bases de dados utilizando Python.",
        "Eliminação de atividades manuais através de automações e integração de informações.",
        "Desenvolvimento de robôs RPA integrados ao SAP.",
        "Apoio à melhoria contínua dos processos e aumento da eficiência operacional.",
      ],
    },
  ],
  education: [
    {
      title: "Engenharia de Software",
      institution: "UMC",
    },
    {
      title: "Análise e Desenvolvimento de Sistemas",
      institution: "UMC",
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
        "Analista de BI",
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
    title: "Desenvolvimento",
    items: [
      "React",
      "Next.js",
      "TypeScript",
      "JavaScript",
      "Python",
      "SQL",
      "Git",
      "GitHub",
    ],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "DAX", "ETL", "Modelagem de Dados", "Dashboards"],
  },
  {
    title: "Cloud & Automação",
    items: ["Azure", "Power Automate", "SAP", "RPA", "Process Automation"],
  },
  {
    title: "Inteligência Artificial",
    items: [
      "IA Generativa",
      "Engenharia de Prompt",
      "Automação Inteligente",
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
    href: "mailto:raynan.maciel8@gmail.com",
    description: "raynan.maciel8@gmail.com",
  },
] as const;

export const resume = {
  href: "/curriculo/curriculo%20raynan.pdf",
  fileName: "curriculo-raynan.pdf",
  label: "Baixar Currículo",
} as const;
