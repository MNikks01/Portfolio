# Project Context

## Purpose

A premium personal portfolio that positions Nikhil as a **founder + product
engineer + technical architect + AI engineer** — communicating that he builds
products end-to-end (validate → design → build → launch → sell → iterate), not
just features.

## Tech stack

| Layer     | Choice                                                |
| --------- | ----------------------------------------------------- |
| Framework | Next.js 15 (App Router), statically prerendered       |
| Language  | TypeScript (strict)                                   |
| UI        | React 19, Tailwind CSS 3 (CSS-variable design tokens) |
| Motion    | Framer Motion                                         |
| 3D        | three.js + @react-three/fiber + drei (hero)           |
| Scroll    | Lenis                                                 |
| Icons     | lucide-react                                          |
| Testing   | Vitest + Testing Library (jsdom)                      |
| Quality   | ESLint (flat) + Prettier + Husky + lint-staged        |
| CI/CD     | GitHub Actions → Netlify (auto-deploy from `main`)    |

## Site sections (single page)

Hero → Marquee → Founder Journey → Business+Engineering → Skills → System
Architect → Experience → Case Study (ConnectEdApp) → Products → Building Now →
AI Engineering → Why Work With Me → Stats → Contact.

Full content mapping: [`/docs/portfolio/homepage-content.md`](../docs/portfolio/homepage-content.md).

## Repository map

```
src/app/          App Router (layout, page, metadata, sitemap, robots, globals)
src/components/   One component per section + shared pieces
src/components/three/  WebGL hero (TechSphere) + CanvasBoundary
src/lib/          utils (cn) + tests
docs/             Canonical knowledge base + governance  ← source of truth
.claude/ .cursor/ .ai/  AI operating system (this layer)
.github/          Copilot instructions, templates, CI
```

## Where to find things

- **Architecture:** [ARCHITECTURE.md](./ARCHITECTURE.md),
  [`/docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md)
- **Standards:** [CODING_STANDARDS.md](./CODING_STANDARDS.md)
- **Career/portfolio data:** [`/docs`](../docs/README.md)
- **Governance:** [`/docs/governance`](../docs/governance)
- **Memory:** [`/.ai/memory`](../.ai/memory)
