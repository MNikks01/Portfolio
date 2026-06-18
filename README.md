# Nikhil — Portfolio

A single-page portfolio that positions Nikhil as a **founder, product engineer,
technical architect, and AI engineer** — not just another MERN developer. Built
with Next.js, a token-driven dark/light design system, motion throughout, and a
WebGL hero.

> Live: <https://the-tech-nik.netlify.app>

[![CI](https://github.com/MNikks01/Portfolio/actions/workflows/ci.yml/badge.svg)](https://github.com/MNikks01/Portfolio/actions/workflows/ci.yml)

## Tech stack

- **Next.js 15** (App Router) · **React 19** · **TypeScript**
- **Tailwind CSS 3.4** with CSS-variable design tokens (dark + light themes)
- **Framer Motion** (load sequence, scroll reveals, magnetic interactions)
- **Three.js + React Three Fiber + drei** (holographic hero core)
- **Lenis** smooth scroll · **Lucide** icons
- **Vitest** + **Testing Library** · **ESLint** · **Prettier** · **Husky** ·
  **lint-staged** · **GitHub Actions** CI
- Deployed on **Netlify** (auto-deploy from `main`)

## Getting started

```bash
npm install          # installs deps and sets up git hooks (husky)
npm run dev          # http://localhost:3000
```

## Scripts

| Script                  | Description                  |
| ----------------------- | ---------------------------- |
| `npm run dev`           | Start the dev server         |
| `npm run build`         | Production build             |
| `npm start`             | Serve the production build   |
| `npm run lint`          | ESLint (Next flat config)    |
| `npm run lint:fix`      | ESLint with autofix          |
| `npm run typecheck`     | TypeScript, no emit          |
| `npm run format`        | Prettier write               |
| `npm run format:check`  | Prettier check (CI)          |
| `npm test`              | Run unit tests once (Vitest) |
| `npm run test:watch`    | Vitest watch mode            |
| `npm run test:coverage` | Tests with coverage          |

## Quality gates

- **Pre-commit:** Husky runs `lint-staged` (ESLint + Prettier on staged files).
- **CI:** GitHub Actions runs format-check → lint → typecheck → test → build on
  every push and PR to `main`.

## Project structure

```
src/
  app/
    layout.tsx        # fonts, metadata, JSON-LD, OG, no-flash theme script
    page.tsx          # section composition
    globals.css       # design tokens (dark + .light), utilities, glow
    sitemap.ts · robots.ts
  components/
    Hero · FounderJourney · BusinessEngineering · Skills · SystemArchitect
    Experience · CaseStudy · Projects · BuildingNow · AISection
    WhyWorkWithMe · Stats · Contact
    Navigation · Footer · SectionHeading · ThemeToggle · Marquee
    ParticleBackground · GridBackground · CustomCursor · LoadingScreen
    ScrollProgress · SmoothScroll
    three/
      TechSphere.tsx     # R3F scene
      CanvasBoundary.tsx # isolates WebGL failures
  lib/utils.ts
```

See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md) for the design-token system,
theming, and section model. Contributors and AI agents: read
[CONTRIBUTING.md](./CONTRIBUTING.md), [CLAUDE.md](./CLAUDE.md), and
[AGENTS.md](./AGENTS.md).

## Theming

The site is dark by default with a light theme toggled via a `light` class on
`<html>` (persisted to `localStorage`, respects `prefers-color-scheme`, applied
before paint to avoid flash). All colors are driven by CSS-variable tokens so
both themes work without per-component overrides.

## Replace before shipping

- `public/resume.pdf` — the actual resume (the "Download Resume" CTA links here).
- `public/og.png` — 1200×630 social preview image.
- `src/app/layout.tsx` — update the `url` constant for the production domain.

## Testing

Tests live next to source as `*.test.ts(x)` and run on **jsdom** via Vitest.
`vitest.setup.ts` mocks `matchMedia`, `IntersectionObserver`, and
`ResizeObserver` so motion/browser components render in tests.

## License

MIT
