---
version: 1
slug: "src-pages-index-astro"
primary_target: "src/pages/index.astro"
related_targets: ["src/pages/proyectos/[slug].astro"]
---

## Scope

Home (`src/pages/index.astro`) and project detail (`src/pages/proyectos/[slug].astro`). Visitor mode: Experience. Audiences: clients and recruiters equally. Copy is preserved; palette (slate ground, sky + violet accents) and Onest are pinned; light and dark themes required.

## Direction contract

THESIS: The portfolio is a monograph of works, the book an architecture studio publishes, not a dev landing page. Refuses the category default: dark hero with portrait beside a headline, then a carousel of equal cards.

OWN-WORLD: Cool paper ground in light (slate-tinted near-white), slate-950 in dark; ink near-black / near-white; sky as the single interactive ink, violet for folios and captions. Hairline rules, a visible gutter line on spreads, sharp plates with small radius, captions under every plate, hanging catalogue numerals in tabular figures, running head under the nav.

STORY: The visitor opens the book at the title page, sees the name and the index of works at once, jumps to a spread, reads a work at plate scale, and either opens the full ficha, downloads the CV, or writes.

FIRST VIEWPORT: Two pages split by a 1px gutter. Left page: name at display scale (two lines, accent period), role, intro, primary action "Explorar proyectos" and "Descargar CV". Right page: "Índice de obras", eight rows (numeral, title, kind, status) linking to their spreads. Colophon row of three facts across the foot.

FORM: Studio monograph, candidate 1 of 7 (impeccable's pick); seed key 18737cb0. Signature interaction: plates reveal from the gutter outward (clip-path) as each spread enters; theme switch crossfades via View Transitions.

FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance
