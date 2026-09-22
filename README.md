# Portafolio de Joaquín León Quero

Sitio personal en español con Astro 7, Tailwind CSS 4 y TypeScript. Cloudflare Workers sirve las páginas estáticas y el endpoint `/api/contact`.

## Desarrollo

Usa Node.js 24. `.nvmrc` y `package.json` mantienen la misma versión principal. La instalación local con pnpm usa `pnpm-lock.yaml` y los overrides de `pnpm-workspace.yaml`; npm usa `package-lock.json` y los overrides de `package.json`. No alternes gestores sobre la misma carpeta `node_modules`.

```sh
nvm use
npm ci
npm run dev
```

Abre http://localhost:4321. Antes de publicar:

```sh
npm run build
npm audit
```

El build ejecuta la comprobación de Astro y genera el Worker en `dist/`. La instalación rechaza versiones incompatibles de Node.

En local, el formulario lee secretos desde `.dev.vars` (no se commitea):

```sh
RESEND_API_KEY=
CONTACT_TO_EMAIL=
CONTACT_FROM_EMAIL=
```

### Desarrollo con pnpm y mise

```sh
mise exec node@24 -- pnpm install --frozen-lockfile
mise exec node@24 -- pnpm dev
```

`astro dev` usa el runtime `workerd` de Cloudflare. Las imágenes de las páginas prerenderizadas se optimizan en el build con Sharp.

## Cloudflare Workers

- Worker: `portafolio` (`wrangler.jsonc`). El dominio `joaquinleon.dev` está ligado a ese Worker.
- Dominio: `joaquinleon.dev` (zona ya en Cloudflare).
- Comando de build: `npm run build`.
- Despliegue: `npm run deploy` (build y `wrangler deploy`).
- Node en Workers Builds: `24` (el plan gratuito de Workers Builds ya cumple el mínimo de Astro; fija `NODE_VERSION=24` si el proyecto lo exige).
- Instalar dependencias de desarrollo: son necesarias para Tailwind y `astro check`.

El dominio ya está en Cloudflare, así que el Worker puede tomar `joaquinleon.dev` como dominio personalizado sin cambiar nameservers. Quita antes los registros DNS que apunten a Netlify.

Secretos de runtime del Worker (no variables de build): `RESEND_API_KEY`, `CONTACT_TO_EMAIL` y `CONTACT_FROM_EMAIL`. El remitente debe estar autorizado en Resend. No guardes credenciales en Git. El sitio compila sin estas variables; el endpoint devuelve 503 si faltan.

## Dependencias

Se usa el plugin oficial `@tailwindcss/vite` para Tailwind 4. La integración antigua `@astrojs/tailwind` admite Astro 3–5 y se ha retirado para evitar una segunda instalación de Astro vulnerable.

El override de `sharp` fija una versión corregida (0.35.4 o superior), porque `ipx@3` todavía solicita Sharp 0.34. Comprueba la optimización de imágenes y el build cuando cambie esa dependencia. Al actualizar dependencias, mantén sincronizados ambos lockfiles y los overrides de npm y pnpm.

## Contenido

- `src/data/projects.ts`: fuente única de proyectos, galerías y enlaces.
- `src/components/ProjectCarousel.astro`: carrusel infinito con una fila en móvil y dos en pantallas amplias; incluye flechas, indicadores, teclado y arrastre táctil. Sin JavaScript permite desplazamiento horizontal nativo.
- `src/components/Banner.astro`: presentación y descarga del CV.
- `src/styles/global.css`: estilos base, foco de teclado y movimiento reducido.

Las páginas mantienen contenido visible sin JavaScript. Menú, carrusel y formulario ofrecen estados accesibles; el envío del formulario requiere JavaScript.

El carrusel excluye del foco las tarjetas fuera de vista y sus copias. GSAP anima la presentación en cada carga o recarga, el menú móvil y el desplazamiento del carrusel. ScrollTrigger revela encabezados, servicios, tecnologías, contacto y fichas al hacer scroll. Las animaciones y los hovers respetan `prefers-reduced-motion`; cambiar esa preferencia también detiene las animaciones activas.
