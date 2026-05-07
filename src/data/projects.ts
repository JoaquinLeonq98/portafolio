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
  /** Texto corto en la tarjeta (con puntos suspensivos vía CSS). */
  excerpt: string;
  /** Descripción completa en la ficha del proyecto. */
  fullDescription: string;
  /** Viñetas de ficha técnica / alcance. */
  techSheet: string[];
  previewSrc: string;
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
    slug: 'sulem-rodriguez-psicoterapeuta',
    title: 'Consultorio Psicoterapeutico',
    excerpt:
      'Consultorio de psicoterapia cognitivo-conductual que funge como landing page y sitio institucional además de poder agendar citas y ver disponibilidad.',
    fullDescription: [
      'Sitio institucional que comunica servicios presenciales y en línea, con enfoque en terapia cognitivo-conductual',
      'La agenda guía a la persona en un primer paso con datos de quien asistirá y, tras validar, enlaza con Calendly para elegir horario de sesiones de 50 minutos, alineado a consentimiento informado y aviso de privacidad. El sitio replica la arquitectura de este portafolio (Astro, Tailwind, despliegue en Netlify) y suma piezas propias del sector: aviso de sitio en desarrollo, preferencias de cookies (técnicas y opciones informativas de análisis y publicidad), formulario de contacto con envío vía API y Resend (igual que en este portafolio) y Calendly para citas.',
      'El proyecto sigue marcado como en desarrollo en el propio sitio: se amplía contenido y posicionamiento local mientras la profesional cierra el lanzamiento.',
    ].join('\n\n'),
    techSheet: [
      'Astro y Tailwind: multipágina estática, rendimiento y mantenimiento sencillo',
      'Integración Calendly en la agenda (flujo previo + reserva de cita)',
      'Correo transaccional con Resend (formulario de contacto vía función serverless en Netlify)',
      'Identidad visual de marca (logo, paleta y tipografía acorde al consultorio)',
      'Banner de “sitio en desarrollo”, avisos legales y módulo de cookies con preferencias',
      'Secciones: inicio, servicios, sobre mí, talleres, agenda, FAQ, contacto y pie con enlaces útiles',
      'Despliegue continuo en Netlify (URL pública de preproducción / lanzamiento)',
    ],
    previewSrc: logoSulem.src,
    previewFit: 'contain',
    previewContainerClass: 'bg-[#b8d1c1]',
    href: 'https://sulem-rodriguez-psicoterapia.netlify.app/',
    inDevelopment: true,
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
        alt: 'Agenda — paso 1 (datos de quien asistirá) e integración con Calendly',
      },
      {
        image: psicSulem4,
        alt: 'Agenda — reserva de primera sesión y selección de horario en Calendly',
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
      { name: 'Calendly', remoteIcon: 'https://cdn.simpleicons.org/calendly/006BFF' },
      { name: 'Netlify', icon: 'netlify' },
    ],
  },
  {
    slug: 'bank-core',
    title: 'Bank Core — núcleo híbrido (NestJS ↔ COBOL)',
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
];

export function getProjectBySlug(slug: string): ProjectEntry | undefined {
  return projects.find((p) => p.slug === slug);
}
