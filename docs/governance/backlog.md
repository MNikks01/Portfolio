# Backlog

Production-grade practices that are missing or partial become backlog items.
Priorities: **P1** (do soon / hardening) · **P2** (important) · **P3** (nice).
Linked debt: [technical-debt.md](./technical-debt.md).

## P1

_None open._

## P2

- [ ] **Audit & optimize first-load JS / three.js** (defer-until-idle, mobile
      DPR) — Lighthouse now measures it; reduction still pending (TD-006)
- [ ] **Nonce-based CSP via middleware** — replace `script-src 'unsafe-inline'`
      now that headers ship (residual of TD-001)

## P3

- [ ] **Adopt `next/image`** where images appear
- [ ] **Full accessibility pass** — complete ARIA coverage + screen-reader test
      (skip-to-content link already shipped)
- [ ] **Review skill levels for accuracy** (TD-009)
- [ ] **Broaden `SectionCard` adoption / shared primitives** (residual of TD-008)
- [ ] **Generate `src/content/*` from `docs/`** — a parity test now guards drift;
      a generator would remove the manual sync entirely (residual of TD-003)

## Done

- [x] **Security headers + CSP** — `next.config.ts headers()` (TD-001)
- [x] **Global error boundary** — `app/error.tsx` + `global-error.tsx` (TD-002)
- [x] **Fix `AISection.tsx` token-rule violation** (TD-010)
- [x] **OG/Twitter image** via `opengraph-image.tsx` `ImageResponse` (TD-011)
- [x] **Contact backend** — `/api/contact` with validation + rate limiting (TD-004)
- [x] **Visitor counter** — total page views via `/api/views` (Netlify Blobs,
      `analytics` store, key `page-views`); `VisitorCount.tsx` in the footer.
      Fails soft to `{ views: null }` off-Netlify (badge hides in local dev)
- [x] **Playwright E2E smoke tests** + expanded Vitest coverage (9 → 26) +
      `content ↔ docs` parity test (TD-005)
- [x] **Lighthouse check in CI** with assertion budgets (TD-006)
- [x] **`prefers-reduced-motion`** honored app-wide via `MotionConfig` (TD-012)
- [x] **Skip-to-content link** + `<main id="main">`
- [x] **Remove dead `About.tsx`** (TD-007)
- [x] **Shared `SectionCard`** adopted in the uniform grid sections (TD-008)
- [x] **Commit-message linting** (commitlint + commit-msg hook)
- [x] **Source `sitemap.ts`/`robots.ts` URL from `site.ts`**
- [x] **Migrate off deprecated `next lint`** → ESLint CLI (`eslint .`)
- [x] **Migrate portfolio content to a docs-sourced content layer** (TD-003,
      ADR-007) — 13 section modules + `site.ts` under `src/content/*`
- [x] Prettier + ESLint flat config + Husky + lint-staged
- [x] Vitest + Testing Library setup with initial tests
- [x] GitHub Actions CI (format/lint/types/test/build)
- [x] Dark/light theme system
- [x] `CanvasBoundary` + `webglcontextlost` handling for the 3D hero
- [x] `docs/` knowledge base + governance system
