# Portafolio — contexto para agentes

Sitio personal de **Joaquín León Quero** (Astro 6 + Tailwind + TypeScript, despliegue Netlify).

## Estructura relevante

| Ruta | Uso |
|------|-----|
| `src/data/projects.ts` | **Fuente única** de proyectos (no hay CMS ni JSON externo) |
| `src/data/projectTech.ts` | Tipos de tecnologías en tarjetas |
| `src/data/projectDefaults.ts` | Imagen placeholder cuando un proyecto no tiene preview |
| `src/components/ProjectCard.astro` | Tarjeta del carrusel |
| `src/components/ProjectCarousel.astro` | Carrusel infinito en home |
| `src/pages/proyectos/[slug].astro` | Ficha detalle por slug |
| `src/assets/projects/` | Capturas locales (import en `projects.ts`) |
| `public/projects/` | Previews estáticos y placeholder |

## Cómo añadir o editar un proyecto

1. Añadir entrada en el array `projects` de `src/data/projects.ts`.
2. **Preview de tarjeta:** `previewSrc` (URL, `/public/…` o import de `src/assets/`). Si falta, se usa `/projects/placeholder.svg`.
3. **Galería:** opcional; items `{ image: ImageMetadata, alt }` (local) o `{ src, alt }` (URL/`public/`).
4. **`inDevelopment: true`** muestra badge «En desarrollo» en tarjeta y ficha.
5. **`href`** opcional; sin él no aparece «Visitar sitio».
6. Iconos de stack: `{ name, icon }` (local en `StackIcon`) o `{ name, remoteIcon }` (Simple Icons CDN).

## Proyectos actuales (resumen)

### Consultorio Psicoterapéutico (`sulem-rodriguez-psicoterapeuta`)
- **Estado:** terminado.
- Landing + sitio institucional (TCC). Agenda con **componente de calendario propio** (estilos del sitio) integrado con **Google Calendar API** para reservar citas en horarios del cliente.
- Stack: Astro, Tailwind, Resend, Google Calendar API, Netlify.
- URL: https://sulem-rodriguez-psicoterapia.netlify.app/

### Punto de venta (`punto-de-venta`) — en desarrollo
- POS con subtotales, totales, descuentos y catálogo de productos.
- NestJS (API) + Next.js (front) + PostgreSQL + TypeORM + Docker (DB).

### Cash Tracker (`cash-tracker`) — en desarrollo
- SaaS de seguimiento de efectivo.
- Laravel + Inertia + React, Neon (PostgreSQL), Stripe (pasarela), Laravel Cloud, Laravel AI SDK.

### Bot de trading IA (`bot-trading-ia`) — en desarrollo
- Proyecto en equipo: bot entrenado con datos e IA, señales por Telegram, panel web (estadísticas, señales, balance de futuros, apalancamiento).
- Binance, SQLite, FastAPI, front Next.js (probable), despliegue Docker. Bot aún en entrenamiento.

### Otros (sin cambios recientes en este doc)
- `bank-core`, `cafeteria-wordpress-astro`, `coparmex-evo-queretaro`, `zyra-mexico`

## Convenciones

- Textos en **español**.
- No inline imports (imports al inicio del módulo).
- Mantener coherencia visual: fondo oscuro (`slate-950`), acentos sky/violet.
- Imágenes remotas: registrar dominio en `astro.config.mjs` si se usan con `astro:assets`.
