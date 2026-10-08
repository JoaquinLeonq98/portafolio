import type { ImageMetadata } from 'astro';
import logoSulem from '../assets/LogoSulem.png';
import psicSulem1 from '../assets/projects/Psicologia-Sulem1.png';
import psicSulem2 from '../assets/projects/Psicologia-Sulem2.png';
import psicSulem3 from '../assets/projects/Psicologia-Sulem3.png';
import psicSulem4 from '../assets/projects/Psicologia-Sulem4.png';
import psicSulem5 from '../assets/projects/Psicologia-Sulem5.png';
import psicSulem6 from '../assets/projects/Psicologia-Sulem6.png';
import bc1 from '../assets/projects/bankcore1.png';
import bc2 from '../assets/projects/bankcore2.png';
import bc3 from '../assets/projects/bankcore3.png';
import bc4 from '../assets/projects/bankcore4.png';
import bc5 from '../assets/projects/bankcore5.png';
import bc7 from '../assets/projects/bankcore7.png';
import type { ProjectTech } from './projectTech';

/** Galería: URL remota o pública (`src`) o imagen local optimizable (`image`). */
export type ProjectGalleryItem =
  | { src: string; alt: string }
  | { image: ImageMetadata; alt: string };

export type ProjectEntry = {
  slug: string;
  title: string;
  /** Tipo de obra en una o tres palabras (índice de obras y lámina). */
  kind: string;
  /** Imagen de la lámina en la home; si falta se usa `previewSrc`. */
  cover?: ImageMetadata | string;
  /** Texto corto en la tarjeta (con puntos suspensivos vía CSS). */
  excerpt: string;
  /** Descripción completa en la ficha del proyecto. */
  fullDescription: string;
  /** Viñetas de ficha técnica / alcance. */
  techSheet: string[];
  /** Si falta (y no hay `cover`), la lámina muestra el título como composición tipográfica. */
  previewSrc?: string;
  /** Logos u otros recuadros: `contain` evita recortes; por defecto `cover`. */
  previewFit?: 'cover' | 'contain';
  /** Enlace al sitio o demo en vivo; si falta, la ficha no muestra «Visitar sitio». */
  href?: string;
  tech: ProjectTech[];
  gallery?: ProjectGalleryItem[];
  /** Aviso en ficha (p. ej. sin capturas del core por confidencialidad). */
  confidentialityNote?: string;
  /** PDF u otra documentación en `public/` (ruta absoluta desde la raíz del sitio). */
  documentationPdfHref?: string;
  /** Enlace a un vídeo demo (YouTube/Drive/Blob/Netlify Large Media, etc.). */
  demoVideoHref?: string;
  /** Muestra etiqueta «En desarrollo» en tarjeta y ficha. */
  inDevelopment?: boolean;
  /** Funcionalidades próximas o en especificación; la ficha las muestra aparte del alcance actual. */
  upcoming?: string[];
  /** Clases Tailwind opcionales para el fondo del bloque de vista previa (logos con marca propia). */
  previewContainerClass?: string;
};

/**
 * COPARMEX EVO y Zyra comparten una misma **plantilla replicable** (Angular, API gateway,
 * microservicios Node, MongoDB, RabbitMQ, PM2, tiempo real; Flutter en app móvil) y cambia la
 * **lógica de negocio** y la marca. Cafetería: otro stack (headless WP + Astro).
 */
export const projects: ProjectEntry[] = [
  {
    slug: 'portal-ncs',
    title: 'Portal NCS — control de horas',
    kind: 'Portal interno',
    excerpt:
      'Portal de horas para NCS: proyectos, etapas, roles y reportes PDF. En 2026 queda lista la especificación del módulo que convertirá la matriz de Excel de QA en evidencias Word por lote.',
    fullDescription: [
      'Sistema a la medida para que Nonstop Consulting & Solutions controle las horas que su equipo dedica a cada proyecto de cliente. Sustituye hojas de cálculo por un portal con espacios de trabajo aislados por cliente, proyectos divididos en etapas con tope de horas y asignación de colaboradores.',
      'Cada rol ve solo lo que necesita: administración gestiona usuarios, proyectos y métricas globales; los líderes de proyecto operan en su espacio de trabajo con reportes de avance; los colaboradores registran su jornada en un portal diario filtrado por sus asignaciones, con un medidor que cambia de color al acercarse al límite de 8 horas.',
      'Las reglas críticas viven en el backend: tope diario validado en la API, aviso al superar el 90 % del presupuesto de una etapa, invitaciones de un solo uso por correo, relevo de colaboradores con transferencia de horas y eliminación protegida de proyectos. Está en producción con CI/CD: cada cambio pasa por GitHub Actions, se publica como imagen en GHCR y se despliega con Dokploy.',
      'El siguiente módulo, ya especificado y a punto de desarrollarse, automatiza las evidencias de prueba: toma la matriz de Excel del equipo de QA y genera los documentos Word de cada caso en lote, para no armarlos a mano.',
    ].join('\n\n'),
    techSheet: [
      'Frontend Angular con Signals, Angular Material y Tailwind CSS',
      'API NestJS con Prisma sobre PostgreSQL',
      'Control de acceso por rol (administrador, líder de proyecto, colaborador) con JWT en cookie',
      'Espacios de trabajo aislados por cliente; proyectos con etapas y presupuesto de horas',
      'Límite diario de 8 h validado en la API y medidor reactivo en el formulario',
      'Reportes PDF con desglose por proyecto, etapa y fechas (Puppeteer)',
      'Invitaciones y verificación de cuenta por correo SMTP',
      'CI con GitHub Actions, imágenes en GHCR y despliegue en VPS con Dokploy',
    ],
    previewSrc: '/projects/ncs-logo.png',
    previewFit: 'contain',
    previewContainerClass: 'bg-white',
    href: 'https://portal.ncs.com.mx',
    upcoming: [
      'Generación automática de evidencias de prueba por lote: a partir de la matriz de Excel del equipo de QA, el portal producirá los documentos Word de evidencia de cada caso. La especificación funcional ya está lista y el desarrollo está por iniciar.',
    ],
    confidentialityNote:
      'Es una herramienta interna del cliente: el enlace lleva al acceso privado. Por confidencialidad no publico capturas con datos de proyectos, horas ni usuarios.',
    tech: [
      { name: 'Angular', remoteIcon: 'https://cdn.simpleicons.org/angular/DD0031' },
      { name: 'NestJS', remoteIcon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'PostgreSQL', remoteIcon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Prisma', remoteIcon: 'https://cdn.simpleicons.org/prisma/ffffff' },
      { name: 'Tailwind', remoteIcon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Docker', remoteIcon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'GitHub Actions', remoteIcon: 'https://cdn.simpleicons.org/githubactions/2088FF' },
    ],
  },
  {
    slug: 'lg-system',
    title: 'L&G System — verificación de comercio exterior',
    kind: 'Plataforma a la medida',
    excerpt:
      'Plataforma para una unidad de verificación de NOMs de etiquetado: solicitudes, pedimentos, inspección y dictámenes con folios, PDFs, permisos por rol y bitácora de auditoría.',
    fullDescription: [
      'LyG Normatividad es una Unidad de Verificación Acreditada (UVA) que revisa que la mercancía importada cumpla las NOMs de etiquetado. Hoy opera sobre un SaaS de terceros; L&G System es la plataforma propia que la independiza de él, construida por módulos y sin romper el flujo que su equipo ya domina. Lo desarrollo desde junio de 2026 dentro de Tridot México, en un equipo de tres personas.',
      'Cubre el ciclo completo: solicitudes generadas a partir del pedimento aduanal, captura del Layout 1 en una cuadrícula que admite copiar y pegar desde Excel con las validaciones oficiales, inspección y emisión de dictámenes. El foliado regulatorio se garantiza a nivel de base de datos, porque un folio jamás puede repetirse; corregí su asignación al crear solicitudes, que antes era asíncrona, con pruebas e2e sobre PostgreSQL.',
      'La validación de folios consulta fuentes gubernamentales (SNICE de la Secretaría de Economía y SOIA del SAT) con vía manual siempre disponible. La calidad se sostiene con una matriz de 22 casos de uso en Playwright contra el entorno de AWS Amplify, y los requerimientos de cada junta con el cliente se convierten en épicas e issues de Linear.',
    ].join('\n\n'),
    techSheet: [
      'Backend NestJS con DDD y vertical slices por feature (monolito modular)',
      'PostgreSQL con Drizzle ORM; esquema rediseñado en torno al dominio (pedimentos, renglones, foliado, contratos)',
      'Frontend Next.js 16 con autenticación en AWS Cognito, adaptable a tablet y móvil',
      'Despliegue en AWS Amplify y archivos en S3',
      'Cuadrícula RevoGrid con pegado nativo desde Excel; PDFs de solicitudes y dictámenes',
      'Permisos por rol y bitácora de auditoría inmutable',
      'Pruebas E2E con Playwright (22 casos de uso: flujo principal, errores y permisos) y e2e de backend con Testcontainers',
    ],
    previewSrc: '/projects/lyg-logo.svg',
    previewFit: 'contain',
    previewContainerClass: 'bg-[#0b0b0b]',
    inDevelopment: true,
    confidentialityNote:
      'Proyecto para cliente bajo confidencialidad: no publico capturas de la aplicación ni datos de operación. Se muestran la identidad del cliente y el alcance técnico.',
    tech: [
      { name: 'NestJS', remoteIcon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'Next.js', remoteIcon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'PostgreSQL', remoteIcon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'Drizzle', remoteIcon: 'https://cdn.simpleicons.org/drizzle/C5F74F' },
      { name: 'AWS', icon: 'aws' },
      { name: 'Playwright', remoteIcon: 'https://cdn.simpleicons.org/playwright/2EAD33' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    ],
  },
  {
    slug: 'sulem-rodriguez-psicoterapeuta',
    title: 'Consultorio psicoterapéutico',
    kind: 'Sitio y agenda en línea',
    cover: psicSulem6,
    excerpt:
      'Consultorio de psicoterapia cognitivo-conductual que funge como landing page y sitio institucional además de poder agendar citas y ver disponibilidad.',
    fullDescription: [
      'Sitio institucional que comunica servicios presenciales y en línea, con enfoque en terapia cognitivo-conductual.',
      'La agenda incluye un componente de calendario desarrollado desde cero con los estilos del sitio. Tras recopilar los datos de quien asistirá, el flujo consulta disponibilidad real y permite reservar sesiones de 50 minutos mediante la Google Calendar API, respetando los horarios definidos por la profesional y alineado a consentimiento informado y aviso de privacidad.',
      'El sitio comparte la arquitectura base de este portafolio (Astro y Tailwind) y suma piezas propias del sector: preferencias de cookies, formulario de contacto con envío vía API y Resend, y la agenda integrada con Google Calendar. Se despliega en Cloudflare Workers con dominio propio.',
    ].join('\n\n'),
    techSheet: [
      'Astro y Tailwind: multipágina estática, rendimiento y mantenimiento sencillo',
      'Componente de calendario propio (UI alineada al sitio) con Google Calendar API para disponibilidad y reserva de citas',
      'Correo transaccional con Resend (formulario de contacto vía endpoint en Cloudflare Workers)',
      'Identidad visual de marca (logo, paleta y tipografía acorde al consultorio)',
      'Avisos legales y módulo de cookies con preferencias',
      'Secciones: inicio, servicios, sobre mí, talleres, agenda, FAQ, contacto y pie con enlaces útiles',
      'Despliegue en Cloudflare Workers con dominio propio (psicologia-sulem.com)',
    ],
    previewSrc: logoSulem.src,
    previewFit: 'contain',
    previewContainerClass: 'bg-[#b8d1c1]',
    href: 'https://psicologia-sulem.com/',
    gallery: [
      { image: logoSulem, alt: 'Sulem Rodríguez — Psicoterapeuta (identidad visual)' },
      {
        image: psicSulem1,
        alt: 'Contacto — datos del consultorio, formulario y mapa de ubicación',
      },
      {
        image: psicSulem2,
        alt: 'Contacto — formulario para dudas sobre el proceso de terapia',
      },
      {
        image: psicSulem3,
        alt: 'Agenda — paso 1 (datos de quien asistirá) y calendario integrado',
      },
      {
        image: psicSulem4,
        alt: 'Agenda — reserva de primera sesión y selección de horario disponible',
      },
      {
        image: psicSulem5,
        alt: 'Servicios — a quienes acompaña: niñez, adolescencia y adultez joven',
      },
      {
        image: psicSulem6,
        alt: 'Inicio — hero con propuesta de psicoterapia integrativa en Cuautitlán',
      },
    ],
    tech: [
      { name: 'Astro', icon: 'astro' },
      { name: 'Tailwind', remoteIcon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Resend', remoteIcon: 'https://cdn.simpleicons.org/resend/ffffff' },
      {
        name: 'Google Calendar',
        remoteIcon: 'https://cdn.simpleicons.org/googlecalendar/4285F4',
      },
      { name: 'Cloudflare', remoteIcon: 'https://cdn.simpleicons.org/cloudflare/F38020' },
    ],
  },
  {
    slug: 'bank-core',
    title: 'Bank Core — núcleo híbrido (NestJS ↔ COBOL)',
    kind: 'Demo técnica',
    cover: bc1,
    excerpt:
      'Demo educativa: API y SPA actuales orquestando un lote COBOL sobre archivos .DAT, con auth, analítica y documentación técnica completa.',
    fullDescription: [
      'Es una demostración de cómo combinar canales modernos (API NestJS y SPA React) con procesos tipo mainframe: el programa COBOL lee y escribe archivos maestro (CUENTAS.DAT, TRANS.DAT, REPORTE.DAT) en lugar de tocar la base relacional en cada movimiento.',
      'Sirve para aprender y mostrar en portafolio la integración HTTP ↔ archivos ↔ batch GnuCOBOL: transferencias con validación vía lote, historial en SQLite, exportaciones CSV, carga por lotes, gráficos y un cierre diario simulado. La autenticación corre con Better Auth (cookies seguras) y el manual unificado describe arquitectura, despliegue y persistencia.',
      'No es un core productivo: no sustituye cumplimiento regulatorio, HA ni seguridad de un entorno real; la documentación PDF recoge el alcance honesto y los pasos para desarrolladores (local, Docker, variables y build).',
    ].join('\n\n'),
    techSheet: [
      'COBOL (GnuCOBOL, BANKBATCH.cbl): reglas del lote sobre CUENTAS.DAT, TRANS.DAT y REPORTE.DAT; el core contable “clásico” del demo',
      'JCL (TRANJOB.jcl): JOB de referencia en mainframe/; en local run-job.sh compila y ejecuta el programa como sustituto del paso de Job',
      'Backend NestJS: validación HTTP, orquestación del batch (escritura TRANS.DAT → run-job.sh → lectura REPORTE.DAT), TypeORM sobre SQLite',
      'Better Auth en /api/auth con auth.sqlite separado del ledger de negocio',
      'Frontend React + Vite + Tailwind: proxy en desarrollo, Recharts, tablero, CSV y cierre diario simulado',
      'Docker Compose para API con toolchain COBOL y hot reload en desarrollo',
      'Documentación unificada en PDF/HTML generada desde Markdown en el repo',
    ],
    previewSrc: bc1.src,
    documentationPdfHref: '/Bank-Core-Project-Documentacion.pdf',
    gallery: [
      { image: bc1, alt: 'Bank Core — vista general de la aplicación' },
      { image: bc2, alt: 'Bank Core — cuentas y saldos' },
      { image: bc3, alt: 'Bank Core — flujo de transferencia' },
      { image: bc4, alt: 'Bank Core — historial y trazabilidad' },
      { image: bc5, alt: 'Bank Core — panel o analítica' },
      { image: bc7, alt: 'Bank Core — detalle adicional de la UI' },
    ],
    tech: [
      { name: 'COBOL', icon: 'cobol' },
      { name: 'JCL', icon: 'jcl' },
      { name: 'NestJS', remoteIcon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'React', remoteIcon: 'https://cdn.simpleicons.org/react/61DAFB' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Vite', remoteIcon: 'https://cdn.simpleicons.org/vite/646CFF' },
      { name: 'Tailwind', remoteIcon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
      { name: 'Docker', remoteIcon: 'https://cdn.simpleicons.org/docker/2496ED' },
      { name: 'SQLite', remoteIcon: 'https://cdn.simpleicons.org/sqlite/003B57' },
    ],
  },
  {
    slug: 'cafeteria-wordpress-astro',
    title: 'Cafetería — WordPress headless y Astro',
    kind: 'Sitio con CMS headless',
    excerpt:
      'Sitio multipágina con contenido editable, correo transaccional y despliegue en edge; validaciones claras para el usuario.',
    fullDescription: [
      'Sitio multipágina para un negocio real: contenido editable desde WordPress (headless), front en Astro para rendimiento y SEO.',
      'En WordPress se gestionan páginas (por ejemplo la historia de la cafetería), categorías y un tipo de contenido para la carta (productos con descripción y precio), que el front consume vía REST API.',
      'Incluye formularios con validación orientada al usuario y correo transaccional para que el negocio reciba consultas sin fricción.',
      'Despliegue en edge (Netlify) y enfoque en autonomía editorial sin sacrificar velocidad de carga.',
    ].join('\n\n'),
    techSheet: [
      'WordPress como CMS headless y REST API para contenido',
      'Astro para páginas estáticas y rápidas',
      'Formularios con validación y correo transaccional (Brevo)',
      'Despliegue continuo en Netlify',
    ],
    previewSrc:
      'https://darkgrey-alpaca-160443.hostingersite.com/wp-content/uploads/2026/02/galeria_01.jpg',
    href: 'https://coffeeshop-wp-joaquinleon.netlify.app/',
    gallery: [
      {
        src: 'https://darkgrey-alpaca-160443.hostingersite.com/wp-content/uploads/2026/02/galeria_01.jpg',
        alt: 'Detalle del sitio de la cafetería',
      },
      {
        src: 'https://darkgrey-alpaca-160443.hostingersite.com/wp-content/uploads/2026/02/galeria_02.jpg',
        alt: 'Otra vista del sitio de la cafetería',
      },
    ],
    tech: [
      { name: 'Astro', icon: 'astro' },
      { name: 'WordPress', icon: 'wordpress' },
      { name: 'REST API', icon: 'rest' },
      { name: 'Brevo', icon: 'brevo' },
      { name: 'Netlify', icon: 'netlify' },
    ],
  },
  {
    slug: 'coparmex-evo-queretaro',
    title: 'COPARMEX Querétaro — EVO',
    kind: 'Web y app móvil',
    excerpt:
      'Ecosistema digital con web, mapas y app en tiendas; backend modular con Express, MongoDB, RabbitMQ y PM2.',
    fullDescription: [
      'Ecosistema digital de la federación: web con mapas y flujos para asociados, y aplicación móvil en Google Play y App Store.',
      'Participé en el producto con Angular y en la app con Flutter, incluyendo parte del ciclo hasta despliegue. Estilos y mantenimiento de UI con Sass.',
      'Backend modular: APIs con Express, persistencia en MongoDB, mensajería con RabbitMQ y procesos gestionados con PM2, alineado a la lógica de negocio de COPARMEX.',
    ].join('\n\n'),
    techSheet: [
      'Front web Angular 17+ con Mapbox',
      'App móvil Flutter (Play Store / App Store)',
      'APIs Node.js con Express',
      'MongoDB como almacén principal',
      'RabbitMQ para integración entre servicios',
      'PM2 para operación de procesos en servidor',
      'Sass en estilos del front',
    ],
    previewSrc: '/projects/coparmex-evo-preview.png',
    href: 'https://evo.coparmexqro.org/',
    gallery: [{ src: '/projects/coparmex-evo-preview.png', alt: 'Identidad visual EVO COPARMEX Querétaro' }],
    tech: [
      { name: 'Angular', remoteIcon: 'https://cdn.simpleicons.org/angular/DD0031' },
      { name: 'Flutter', remoteIcon: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Sass', remoteIcon: 'https://cdn.simpleicons.org/sass/CC6699' },
      { name: 'Mapbox', remoteIcon: 'https://cdn.simpleicons.org/mapbox/ffffff' },
      { name: 'Express', remoteIcon: 'https://cdn.simpleicons.org/express/ffffff' },
      { name: 'MongoDB', remoteIcon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'RabbitMQ', remoteIcon: 'https://cdn.simpleicons.org/rabbitmq/FF6600' },
      { name: 'PM2', remoteIcon: 'https://cdn.simpleicons.org/pm2/2B037A' },
    ],
  },
  {
    slug: 'zyra-mexico',
    title: 'Zyra México',
    kind: 'Plataforma inmobiliaria',
    cover: '/projects/zyra-landing.png',
    excerpt:
      'Plataforma para profesionales inmobiliarios: orden, trazabilidad y soporte en el ciclo de renta. Marca y stack alineados a la plantilla EVO.',
    fullDescription: [
      'Zyra está pensada para equipos que necesitan orden, trazabilidad y acompañamiento en el arrendamiento: desde investigación y contratos hasta cobro y firma electrónica.',
      'En la web pública se comunica el valor del producto: operación centralizada, procesos claros para propietario, inquilino y asesor, e integración con servicios legales y de cumplimiento.',
      'En la parte técnica compartí la misma arquitectura replicable que en EVO (Angular, Flutter, Express, MongoDB, RabbitMQ, PM2, Sass, Mapbox), adaptando lógica de negocio e identidad de marca.',
    ].join('\n\n'),
    techSheet: [
      'Front web Angular con Mapbox',
      'App móvil Flutter',
      'Express y Node en capa de servicios',
      'MongoDB',
      'RabbitMQ entre microservicios',
      'PM2 en operación',
      'Sass',
    ],
    previewSrc: '/projects/zyra-logo.png',
    previewFit: 'contain',
    href: 'https://zyramexico.com/',
    confidentialityNote:
      'Por acuerdos de confidencialidad con el cliente no publico capturas del núcleo de la aplicación (paneles internos, datos o flujos operativos). Lo que ves aquí es la marca oficial y material de la landing pública.',
    gallery: [
      {
        src: '/projects/zyra-landing.png',
        alt: 'Zyra — landing pública (qué es Zyra y propuesta de valor)',
      },
    ],
    tech: [
      { name: 'Angular', remoteIcon: 'https://cdn.simpleicons.org/angular/DD0031' },
      { name: 'Flutter', remoteIcon: 'https://cdn.simpleicons.org/flutter/02569B' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Sass', remoteIcon: 'https://cdn.simpleicons.org/sass/CC6699' },
      { name: 'Mapbox', remoteIcon: 'https://cdn.simpleicons.org/mapbox/ffffff' },
      { name: 'Express', remoteIcon: 'https://cdn.simpleicons.org/express/ffffff' },
      { name: 'MongoDB', remoteIcon: 'https://cdn.simpleicons.org/mongodb/47A248' },
      { name: 'RabbitMQ', remoteIcon: 'https://cdn.simpleicons.org/rabbitmq/FF6600' },
      { name: 'PM2', remoteIcon: 'https://cdn.simpleicons.org/pm2/2B037A' },
    ],
  },
  {
    slug: 'tridot-mexico',
    title: 'Tridot México',
    kind: 'Estudio y sitio',
    excerpt:
      'Estudio de diseño y desarrollo que cofundé: sitios, software a la medida, puntos de venta, SEO y mantenimiento para pymes y empresas mexicanas.',
    fullDescription: [
      'Tridot México es el estudio que cofundé en 2026 para construir producto digital con equipos pequeños: sitios web, software a la medida, puntos de venta, SEO y mantenimiento.',
      'Desde ahí desarrollo L&G System y otros encargos, y orquesto agentes de IA para investigación de leads, correos personalizados y bitácora comercial. El sitio público comunica la oferta del estudio.',
    ].join('\n\n'),
    techSheet: [
      'Sitio público del estudio en tridotmx.com',
      'Encargos a medida: web, backend y despliegue',
      'Automatización comercial con agentes de IA (Gmail, fuentes públicas, bitácora)',
    ],
    href: 'https://tridotmx.com/',
    inDevelopment: true,
    tech: [
      { name: 'Astro', icon: 'astro' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Tailwind', remoteIcon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    slug: 'asistencia-40h',
    title: 'Asistencia 40H',
    kind: 'SaaS (nombre provisional)',
    excerpt:
      'SaaS multiempresa para que las pymes registren la jornada conforme a la reforma de 40 horas. Arquitectura Angular + Rust en Cloudflare Workers.',
    fullDescription: [
      'Producto en desarrollo (nombre provisional) para que las pymes mexicanas registren la jornada laboral conforme a la reforma de 40 horas (LFT, art. 132 fracción XXXIV). Equipo de cuatro personas, con gestión en Linear.',
      'Orquesté agentes de IA especializados (tech lead, finanzas, ventas y validación de producto) para el plan técnico, el SRS y los AGENTS.md, con verificación legal en DOF y LFT.',
      'La arquitectura prevista combina Angular, Tailwind y Angular Material (PWA con checado sin conexión) con Rust en Cloudflare Workers (Durable Objects, D1, R2, Queues y Cron). La bitácora es append-only, con cadena de hashes SHA-256 y anclaje diario Merkle orientado a constancia NOM-151. El MVP está planeado para octubre–diciembre de 2026.',
    ].join('\n\n'),
    techSheet: [
      'Frontend Angular + Tailwind + Angular Material, como PWA',
      'Backend Rust en Cloudflare Workers (Durable Objects, D1, R2, Queues, Cron)',
      'Bitácora append-only con cadena de hashes y anclaje Merkle diario',
      'Equipo de 4 personas; gestión en Linear',
    ],
    inDevelopment: true,
    tech: [
      { name: 'Angular', remoteIcon: 'https://cdn.simpleicons.org/angular/DD0031' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
      { name: 'Cloudflare', remoteIcon: 'https://cdn.simpleicons.org/cloudflare/F38020' },
      { name: 'Tailwind', remoteIcon: 'https://cdn.simpleicons.org/tailwindcss/06B6D4' },
    ],
  },
  {
    slug: 'punto-de-venta',
    title: 'Punto de venta',
    kind: 'Aplicación de caja',
    excerpt:
      'Sistema POS con catálogo, descuentos y totales. Backend NestJS, front Next.js y PostgreSQL.',
    fullDescription: [
      'Aplicación de punto de venta para registrar ventas, aplicar descuentos y calcular subtotales y totales de forma clara para el operador.',
      'El backend expone la lógica de negocio con NestJS y PostgreSQL; el frontend en Next.js cubre la interfaz de caja. El proyecto sigue en desarrollo activo, listado como obra destacada en el CV.',
    ].join('\n\n'),
    techSheet: [
      'Backend NestJS sobre PostgreSQL',
      'Frontend Next.js para la interfaz de caja',
      'Catálogo de productos con descuentos y totales',
    ],
    inDevelopment: true,
    tech: [
      { name: 'NestJS', remoteIcon: 'https://cdn.simpleicons.org/nestjs/E0234E' },
      { name: 'Next.js', remoteIcon: 'https://cdn.simpleicons.org/nextdotjs/ffffff' },
      { name: 'PostgreSQL', remoteIcon: 'https://cdn.simpleicons.org/postgresql/4169E1' },
      { name: 'TypeScript', remoteIcon: 'https://cdn.simpleicons.org/typescript/3178C6' },
    ],
  },
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
