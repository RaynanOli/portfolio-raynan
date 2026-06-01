export const site = {
  name: "Raynan Maciel",
  headline:
    "Desenvolvedor de Sistemas, Business Intelligence, Automação de Processos e Soluções com Inteligência Artificial.",
  about: [
    "Estudante de Engenharia de Software com foco em desenvolvimento de sistemas, Business Intelligence, automação de processos e aplicação de Inteligência Artificial em soluções corporativas.",
    "Atualmente atuo na Suzano contribuindo para projetos de Power BI, SAP, automações operacionais e iniciativas voltadas à otimização de processos através de tecnologia e análise de dados.",
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
      company: "Suzano",
      role: "Contribuição em projetos corporativos",
      period: "Atual",
      highlights: [
        "Power BI e dashboards estratégicos",
        "Integrações e processos SAP",
        "Automações operacionais",
        "Otimização de processos com dados",
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
    {
      title: "Analista de BI",
      institution: "Escola DNC",
    },
  ],
} as const;

export const techCategories = [
  {
    title: "Desenvolvimento",
    items: ["React", "Next.js", "TypeScript", "JavaScript", "Python", "SQL"],
  },
  {
    title: "Business Intelligence",
    items: ["Power BI", "Modelagem de Dados", "ETL", "Dashboards"],
  },
  {
    title: "Automação",
    items: ["RPA", "SAP", "Process Automation"],
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
