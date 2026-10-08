# Portafolio — contexto para agentes

Sitio personal de **Joaquín León Quero** (Astro 7 + Tailwind + TypeScript, despliegue Cloudflare Workers).

## Estructura relevante

| Ruta | Uso |
|------|-----|
| `src/data/projects.ts` | **Fuente única** de proyectos (no hay CMS ni JSON externo) |
| `src/data/experience.ts` | Trayectoria, formación e idiomas (alineados al CV) |
| `src/data/projectTech.ts` | Tipos de tecnologías en tarjetas |
| `src/components/ProjectSpread.astro` | Lámina de cada proyecto en home |
| `src/pages/proyectos/[slug].astro` | Ficha detalle por slug |
| `src/assets/projects/` | Capturas locales (import en `projects.ts`) |
| `public/projects/` | Previews estáticos y placeholder |
| `public/CV_Joaquin_Leon_2026_ES.pdf` | CV descargable (fuente de verdad del perfil) |

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
- Agenda propia + Google Calendar. Dominio: https://psicologia-sulem.com/

### Portal NCS (`portal-ncs`) — en producción
- Control de horas. Próximo módulo: evidencias Word por lote desde matriz Excel (especificación lista). URL privada: https://portal.ncs.com.mx

### L&G System (`lg-system`) — en desarrollo
- UVA de etiquetado (NestJS, Next.js 16, Drizzle, AWS Cognito/Amplify/S3, Playwright).

### Tridot / Asistencia 40H / POS
- `tridot-mexico` (estudio, tridotmx.com), `asistencia-40h` (SaaS 40 h), `punto-de-venta`.

### Otros
- `bank-core`, `cafeteria-wordpress-astro`, `coparmex-evo-queretaro`, `zyra-mexico`

## Convenciones

- Textos en **español**.
- No inline imports (imports al inicio del módulo).
- Paleta sky/violet sobre slate; **modo claro y oscuro** (`data-theme` + tokens en `src/styles/global.css`).
- Imágenes remotas: registrar dominio en `astro.config.mjs` si se usan con `astro:assets`.
