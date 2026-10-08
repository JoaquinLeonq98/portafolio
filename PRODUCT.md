# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Users

Two audiences with equal weight:

- **Clients:** pymes and companies in Mexico evaluating whether to hire Joaquín (freelance or through Tridot México) for a website, custom software, or automation. They need to understand what he builds, see real projects, and contact him.
- **Recruiters and technical teams:** people screening him for a full-stack role or contract. They need stack, experience, depth of past work, and the CV.

## Product Purpose

Personal portfolio of Joaquín León Quero, full-stack developer and IT management engineer in Querétaro. It shows projects with enough technical context to judge them, offers services, and converts visits into contact (form, email, phone) or a CV download. Success: a visitor knows who he is and what he builds within the first viewport, and finds a project relevant to them within seconds.

## Positioning

Full-stack developer who combines product delivery (web, backend, deployment) with banking-grade rigor (COBOL/Mainframe at BBVA, QA certification of Base24 EPS and PCI) and AI-assisted automation with human review. Cofounder of Tridot México.

## Operating Context

- Visitors arrive from the CV, LinkedIn, GitHub, or direct outreach; many on mobile.
- Project detail pages (`/proyectos/[slug]`) carry the depth: description, technical sheet, stack, gallery, confidentiality notes.
- Several client projects are confidential: no screenshots of internal apps (NCS portal, L&G System, Zyra core).

## Capabilities and Constraints

- Astro 7 + Tailwind 4 + TypeScript, deployed on Cloudflare Workers; only `/api/contact` is on-demand.
- Projects live in `src/data/projects.ts` (single source). Contact form posts to `/api/contact` (Resend).
- Copy is in Spanish. The CV (`public/CV_Joaquin_Leon_2026_ES.pdf`, Oct 2026) is the source of truth for profile, experience, skills and featured work.
- Must support light and dark themes (user request, Oct 2026). Sulem live URL is `https://psicologia-sulem.com/`. NCS next module (Excel → Word evidence batches) is specified and not yet built.

## Brand Commitments

- Name and mark: "JLQ." with the accent-colored period.
- Palette the user explicitly wants to keep: deep slate (`slate-950` ground in dark) with sky and violet accents.
- Typeface currently in use: Onest Variable.
- Real portrait photo (`src/assets/JoaquinPerfil.jpg`).

## Evidence on Hand

- Projects with real data, client logos and screenshots in `src/assets/projects/` and `public/projects/`.
- CV PDF: `public/CV_Joaquin_Leon_2026_ES.pdf`.
- Bank Core technical documentation PDF.
- No testimonials, client counts, or metrics are approved for the site; do not invent them.

## Product Principles

1. Projects are the proof: put real work ahead of claims.
2. Honest status: mark work in development or confidential plainly.
3. One clear next step for each audience: contact for clients, CV and project depth for recruiters.
4. Readable in both themes and on mobile first.

## Accessibility & Inclusion

WCAG AA contrast in both themes, keyboard-navigable carousel and menu, respect for `prefers-reduced-motion` and `prefers-color-scheme`.
