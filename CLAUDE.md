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

## Architecture

- **Astro 6** static site with file-based routing (`src/pages/`)
- **Tailwind CSS 4** via Vite plugin (configured in `astro.config.mjs`), using `@theme` directive in `src/styles/global.css` for design tokens
- **No component framework** — all pages are `.astro` files with inline `<style>` and `<script>` tags
- **Single layout** at `src/layouts/Layout.astro` — contains header, footer, mobile menu, WhatsApp floating button, and sticky mobile CTA bar
- All internal links use `import.meta.env.BASE_URL` (resolved to `/Talleres_AutoMarcos`) for GitHub Pages compatibility

### Pages

- `index.astro` — Homepage with hero, services overview, stats, testimonials
- `servicios.astro` — Detailed service listings
- `galeria.astro` — Photo gallery with lightbox
- `contacto.astro` — Contact form and location info
- `blog/` — Blog section with article pages (SEO-oriented content about car maintenance)

### Styling Approach

The project uses a **hybrid styling model**: Tailwind utility classes mixed with extensive inline styles and custom CSS classes in `global.css`. The design follows a "Tech-Noir" automotive aesthetic:

- **Color scheme**: Dark backgrounds (`#0D0D0D`, `#131313`, `#161616`) with amber/orange accent (`#F5A623`) and green for WhatsApp/trust elements (`#25d366`)
- **Typography**: Oswald (headlines, nav, labels — uppercase) + Inter (body text)
- **Design tokens**: Defined via Tailwind `@theme` in `src/styles/global.css` — includes full Material-style surface hierarchy and semantic color tokens
- **Key CSS classes**: `.btn-bold`, `.bold-card`, `.testimonio`, `.precision-border`, `.hover-underline`, `.slide-in-left`/`.slide-in-right` (scroll animations via IntersectionObserver)
- **Sharp corners only** — `rounded-sm` (2px) max, no pills or large radii

### Design System

`DESIGN-SYSTEM.md` at root contains the full design philosophy and rules. Key constraints:
- No 1px borders for sectioning — use tonal background shifts instead
- No dividers — use whitespace
- No `#000000` — use `#131313` minimum
- No symmetrical grids — use intentional asymmetry
- Buttons: sharp corners, gradient CTAs allowed (primary to primary_container at 135deg)
- Glassmorphism for overlays: surface at 70% opacity + 20px backdrop-blur

## Deployment

GitHub Pages with base path `/Talleres_AutoMarcos`. All asset references and internal links must include the base path.
