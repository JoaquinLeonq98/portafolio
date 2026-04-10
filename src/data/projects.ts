import type { ProjectTech } from './projectTech';

export type ProjectGalleryItem = {
  src: string;
  alt: string;
};

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
  href: string;
  tech: ProjectTech[];
  gallery?: ProjectGalleryItem[];
  /** Aviso en ficha (p. ej. sin capturas del core por confidencialidad). */
  confidentialityNote?: string;
};

/**
 * COPARMEX EVO y Zyra comparten una misma **plantilla replicable** (Angular, API gateway,
 * microservicios Node, MongoDB, RabbitMQ, PM2, tiempo real; Flutter en app móvil) y cambia la
 * **lógica de negocio** y la marca. Cafetería: otro stack (headless WP + Astro).
 */
export const projects: ProjectEntry[] = [
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
