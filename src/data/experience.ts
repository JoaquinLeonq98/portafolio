export type ExperienceEntry = {
  org: string;
  role: string;
  period: string;
  place: string;
  points: string[];
};

/** Experiencia profesional tomada del CV 2026 (ES). */
export const experience: ExperienceEntry[] = [
  {
    org: 'Tridot México',
    role: 'Cofundador · Desarrollador full-stack y automatización con IA',
    period: '2026 – actualidad',
    place: 'Querétaro (remoto)',
    points: [
      'Cofundé un estudio de diseño y desarrollo para pymes y empresas: sitios, software a la medida, puntos de venta, SEO y mantenimiento (tridotmx.com).',
      'L&G System: plataforma para una unidad de verificación de comercio exterior, en un equipo de tres personas (NestJS, Drizzle, PostgreSQL, Next.js 16, AWS Cognito, Amplify y S3).',
      'Convertí las juntas con el cliente en épicas e issues de Linear; corregí el foliado de solicitudes y cubrí el flujo con pruebas e2e (Playwright y Testcontainers).',
      'Automaticé la prospección comercial con un agente de IA: investigación de leads, correos personalizados por Gmail y bitácora para no duplicar contactos.',
    ],
  },
  {
    org: 'Asistencia 40H',
    role: 'Cofundador · Producto y arquitectura',
    period: 'Septiembre 2026 – actualidad',
    place: 'Querétaro (SaaS en desarrollo)',
    points: [
      'SaaS multiempresa para que las pymes registren la jornada conforme a la reforma de 40 horas (LFT, art. 132 fr. XXXIV).',
      'Orquesté agentes de IA especializados para el plan técnico, el SRS y los AGENTS.md, con verificación legal en fuentes primarias (DOF, LFT).',
      'Arquitectura prevista: Angular + Tailwind + Material (PWA) y Rust en Cloudflare Workers (Durable Objects, D1, R2, Queues).',
    ],
  },
  {
    org: 'Freelance',
    role: 'Desarrollador full-stack',
    period: 'Enero 2021 – actualidad',
    place: 'Remoto',
    points: [
      'Diseño y desarrollo de aplicaciones web con Next.js, Astro y NestJS; backends con Spring Boot y PostgreSQL.',
      'Responsable del flujo de despliegue: AWS, Vercel y VPS con Docker.',
      'Portal de registro de horas para NCS y, en 2026, especificación funcional del módulo que genera evidencias de prueba (de Excel a Word por lote).',
    ],
  },
  {
    org: 'Xidden Technology',
    role: 'Desarrollador junior',
    period: 'Septiembre 2025 – abril 2026',
    place: 'Querétaro',
    points: [
      'Lideré el desarrollo y mantenimiento de un ERP a medida con Angular 17 y Angular Material.',
      'Backend en microservicios Node.js con RabbitMQ, MongoDB y PM2 en AWS; entornos con Docker.',
    ],
  },
  {
    org: 'Nonstop Consulting & Solutions (NCS)',
    role: 'Certificador de QA senior',
    period: 'Marzo 2023 – marzo 2026',
    place: 'Ciudad de México',
    points: [
      'Certificación de proyectos de banca en línea con Base24 EPS y plataformas batch, alineada a los diseños técnicos.',
      'Lideré la implementación técnica para la certificación PCI Express de la empresa.',
      'Optimicé flujos de QA con herramientas de código abierto y scripts en Python.',
    ],
  },
  {
    org: 'IDS Comercial (cliente: BBVA)',
    role: 'Desarrollador COBOL',
    period: 'Febrero 2022 – marzo 2023',
    place: 'Ciudad de México',
    points: [
      'Desarrollo y análisis de programas COBOL en host mainframe para Prevención de Lavado de Dinero (AML) de BBVA.',
      'Mapeo y cruce de datos institucionales en un entorno bancario de alto riesgo, con estándares estrictos de seguridad.',
    ],
  },
];

export const education = {
  school: 'Universidad Virtual del Estado de Guanajuato (UVEG)',
  degree: 'Ingeniería en Gestión de Tecnologías de Información',
  period: 'Egreso: abril 2025',
};

export const languages = [
  { name: 'Español', level: 'Nativo' },
  { name: 'Inglés', level: 'Intermedio (B1): lectura técnica y comunicación escrita' },
];
