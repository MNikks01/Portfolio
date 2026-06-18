# Tasks

Active work for AI agents. Canonical backlog:
[`/docs/governance/backlog.md`](../docs/governance/backlog.md). This file
surfaces the **Now** slice from the roadmap.

## In progress

- _(none)_

## Now (next up — from roadmap)

- [ ] **P2** Optimize first-load JS / three.js (defer-until-idle, mobile DPR). → TD-006
- [ ] **P2** Nonce-based CSP via middleware (replace `script-src 'unsafe-inline'`).
- [ ] **P3** Ship portfolio visual assets (screenshots/diagrams) + `next/image`.

## Recently completed

- [x] Security headers + CSP (`next.config.ts headers()`) → TD-001
- [x] Global error boundary — `error.tsx` + `global-error.tsx` → TD-002
- [x] Contact backend — `/api/contact` validation + rate limit → TD-004
- [x] Playwright E2E + Vitest 9→26 + `content ↔ docs` parity → TD-005
- [x] Lighthouse CI with budgets → TD-006
- [x] `AISection.tsx` token fix → TD-010; generated OG image → TD-011
- [x] `prefers-reduced-motion` app-wide → TD-012; skip-to-content link
- [x] Removed dead `About.tsx` → TD-007; shared `SectionCard` → TD-008
- [x] commitlint; `sitemap`/`robots` from `site.ts`; migrated off `next lint`
- [x] Typed content layer (`src/content/*` + `site.ts`) → TD-003, ADR-007
- [x] `docs/` knowledge base + governance system
- [x] AI Operating System (`.claude/`, `.cursor/`, `.ai/`, `.github/`, `mcp.json`,
      `llms.txt`)
- [x] Tooling: Prettier, ESLint flat config, Vitest, Husky, lint-staged, CI
- [x] Dark/light theme system; `CanvasBoundary` for the 3D hero

> Update this file when starting/finishing work, and keep it consistent with
> `docs/governance/backlog.md` and `roadmap.md`.
