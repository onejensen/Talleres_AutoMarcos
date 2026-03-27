# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Talleres AutoMarcos** — a business website for an automotive repair shop in Mallorca, Spain. Built with Astro 6, Tailwind CSS 4, and deployed to GitHub Pages at `https://onejensen.github.io/Talleres_AutoMarcos`.

All content is in **Spanish (es)**. The site targets local customers looking for car repair services.

## Commands

```bash
npm run dev       # Dev server at localhost:4321
npm run build     # Production build to ./dist/
npm run preview   # Preview production build locally
```

Requires Node >= 22.12.0.

## Deployment

GitHub Pages via `gh-pages` branch. The full deploy flow:

```bash
git add . && git commit -m "message" && git push origin main
npx astro build
npx gh-pages -d dist
```

Base path is `/Talleres_AutoMarcos`. All asset references and internal links must include the base path via `import.meta.env.BASE_URL`.

## Architecture

- **Astro 6** static site with file-based routing (`src/pages/`)
- **Tailwind CSS 4** via Vite plugin (configured in `astro.config.mjs`), using `@theme` directive in `src/styles/global.css` for design tokens
- **No component framework** — all pages are `.astro` files with inline `<style>` and `<script>` tags
- **Single layout** at `src/layouts/Layout.astro` — contains glassmorphism nav (with active page highlighting), 4-column footer, WhatsApp FAB, mobile sticky CTA bar, and mobile hamburger menu
- Nav active state is computed via `Astro.url.pathname` matching against a `navLinks` array in Layout frontmatter

### Pages

- `index.astro` — Homepage with hero, services overview, about section, quality, testimonials, blog preview, WhatsApp CTA. All images are local from `public/galeria/`.
- `servicios.astro` — Detailed service listings with SVG icons
- `galeria.astro` — Photo gallery with lightbox (reads images dynamically from `public/galeria/`)
- `contacto.astro` — Contact form (sends to WhatsApp), phone call link, Google Maps button ("Cómo ir"), Instagram button
- `blog/` — Blog section with article pages (SEO-oriented content about car maintenance)

### Key Implementation Details

- **Gallery**: `galeria.astro` uses `fs.readdirSync` to auto-load all `.jpg/.png/.webp` from `public/galeria/`. Just drop images there.
- **Contact form**: Submits via JavaScript — builds a WhatsApp message with name, phone, vehicle make/model, and message fields, then opens `wa.me` link.
- **Subpages** use `padding-top: 120px` to clear the fixed nav. The index uses `min-h-screen` + `pt-20` for its hero instead.
- **Logo**: `public/logo-automarcos.png` — used in nav (64px), hero (160px), and footer (42px).
- **Favicon**: `public/favicon.png` — custom AutoMarcos icon.
- **Social sharing image**: `public/og-image.jpg` — referenced via `og:image` meta tag in Layout.
- **Images**: All images on the site are local (no external URLs). Homepage images reference files in `public/galeria/` (e.g., `excelencia.jpg`, `frenos.jpg`).
- **Assets folder**: `assets/` at project root contains source files (favicon, social image) that get copied to `public/` when updated.

### Styling Approach

Hybrid model: Tailwind utility classes mixed with inline styles and custom CSS in `global.css`. "Tech-Noir" automotive aesthetic:

- **Color scheme**: Dark backgrounds (`#0D0D0D`, `#131313`, `#161616`) with amber/orange accent (`#F5A623`) and green for WhatsApp (`#25d366`)
- **Typography**: Oswald (headlines, nav, labels — uppercase) + Inter (body text)
- **Sharp corners only** — `rounded-sm` (2px) max, no pills or large radii
- **No grain overlay** — removed per user preference

### Design System

`DESIGN-SYSTEM.md` at root contains the full design philosophy. Key constraints:
- No 1px borders for sectioning — use tonal background shifts
- No dividers — use whitespace
- No `#000000` — use `#131313` minimum
- No symmetrical grids — use intentional asymmetry
- Glassmorphism for nav: surface at 70% opacity + backdrop-blur
