# CLAUDE.md

Guidance for Claude Code (and other AI agents) working in this repository.

## Project

Personal portfolio for **Nikhil** — a Senior Full Stack / Product / AI Engineer.
Single-page Next.js site that positions him as a founder + engineer + product
builder, with a dark/light theme and a 3D hero.

## Knowledge base & governance (read first)

`docs/` is the **canonical source of truth** for all career + portfolio content
and the engineering governance of this repo. **Always update `docs/` first, then
the portfolio presentation in `src/`.** Start at [docs/README.md](./docs/README.md).

Follow these update contracts exactly (full table in `docs/README.md`):

- **"Update my skills"** → update `docs/skills/*` → update `Skills.tsx` → update
  `docs/governance/audit-report.md` if quality changed.
- **"Add a project"** → create `docs/projects/<name>.md` → update
  `docs/projects/project-index.md` → update `Projects.tsx` / `CaseStudy.tsx`.
- **"Update experience"** → update `docs/career/*` → update `Experience.tsx`.
- **"Review codebase"** → audit, then update `docs/governance/`:
  `production-checklist.md`, `technical-debt.md`, `backlog.md`, `roadmap.md`, and
  append a dated entry to `audit-report.md`.

Never let portfolio content drift from `docs/`.

## Tech stack

- **Next.js 15** (App Router) + **React 19** + **TypeScript**
- **Tailwind CSS 3** with a CSS-variable design-token system
- **Framer Motion** for animation, **@react-three/fiber + drei** for the 3D hero
- **Lenis** smooth scroll
- **Vitest** + Testing Library for tests
- Deployed on **Netlify** (auto-deploys from `main`)

## Commands

```bash
npm run dev          # start dev server
npm run build        # production build
npm run lint         # ESLint (next lint, flat config)
npm run typecheck    # tsc --noEmit
npm run format       # Prettier write
npm run format:check # Prettier check (used in CI)
npm test             # Vitest (run once)
npm run test:watch   # Vitest watch
```

Before committing, `husky` runs `lint-staged` (ESLint + Prettier on staged
files). CI runs format-check, lint, typecheck, test, and build on every push/PR.

## Architecture

- `src/app/` — App Router entry (`layout.tsx`, `page.tsx`, metadata, sitemap,
  robots). `page.tsx` composes the section components in order.
- `src/components/` — one component per section (Hero, FounderJourney,
  CaseStudy, SystemArchitect, Skills, Experience, Projects, BuildingNow,
  AISection, WhyWorkWithMe, Stats, Contact) plus shared pieces (Navigation,
  Footer, SectionHeading, ThemeToggle, backgrounds, CustomCursor, Marquee).
- `src/components/three/` — the WebGL hero (`TechSphere`) wrapped in a
  `CanvasBoundary` so a WebGL failure degrades to a glow instead of crashing.
- `src/lib/utils.ts` — `cn()` class merge helper and easing constants.

## Conventions (important)

- **Theming is token-driven.** Never use literal `text-white`, `text-zinc-*`,
  `bg-white/x`, or `border-white/x`. Use the semantic tokens so both themes
  work:
  - text: `text-ink` (strongest), `text-fg`, `text-soft`, `text-muted`,
    `text-faint`
  - surfaces/borders: `bg-overlay/<a>`, `border-overlay/<a>` (flips white↔dark)
  - page/panel: `bg-bg-deep`, `bg-bg-panel`
  - brand accents stay literal: `brand-blue/purple/cyan/emerald/pink`
    Tokens are defined in `globals.css` (`:root` = dark, `.light` = light) and
    mapped in `tailwind.config.ts`. Light-only tweaks use the `light:` variant.
- **New sections** follow the existing pattern: a `<section id="..."
className="section-pad relative overflow-hidden">`, a `<SectionHeading>`, and
  `motion` + `whileInView` reveals. Reuse `glass`, `glass-light`, rounded-2xl/3xl
  cards, and the accent-glow blur pattern.
- Keep everything responsive (single column on mobile, `md:`/`lg:` grids) and
  avoid horizontal overflow.
- Do not redesign the visual identity, palette, typography, or animation style.

## Notes

- The 3D canvas can throw under software rendering / lost GL context; that's why
  `CanvasBoundary` + a `webglcontextlost` handler exist. Don't remove them.
- `About.tsx` exists but is no longer rendered (superseded by `FounderJourney`).
