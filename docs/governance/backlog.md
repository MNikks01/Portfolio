# Backlog

Production-grade practices that are missing or partial become backlog items.
Priorities: **P1** (do soon / hardening) · **P2** (important) · **P3** (nice).
Linked debt: [technical-debt.md](./technical-debt.md).

## P1

- [ ] **Add Content-Security-Policy + security headers** (TD-001)
- [ ] **Add a global error boundary** — `app/error.tsx` + `global-error.tsx` (TD-002)

## P2

- [ ] **Wire the contact form to a real backend** (Resend / `/api/contact`) with
      validation + rate limiting (TD-004)
- [ ] **Add Playwright E2E smoke tests** — home renders, theme toggle, nav anchors
      (TD-005)
- [ ] **Add Lighthouse check in CI** (or scheduled), target > 90 (TD-006)
- [ ] **Expand component test coverage** — Hero, Navigation, ThemeToggle, Skills
- [ ] **Audit & optimize first-load JS / three.js** (defer-until-idle, mobile DPR)

## P3

- [ ] **Remove or repurpose `About.tsx`** (TD-007)
- [ ] **Extract a shared `SectionCard` component** (TD-008)
- [ ] **Add a real `public/og.png`** and adopt `next/image` where images appear
- [ ] **Accessibility pass** — skip-to-content link, full ARIA + screen-reader test
- [ ] **Commit-message linting** (commitlint + commit-msg hook)
- [ ] **Review skill levels for accuracy** (TD-009)
- [ ] **Generate `src/content/*` from `docs/` (or test the sync)** — the content
      layer is currently hand-synced; add a generator or a test that asserts
      `content ↔ docs` parity so they cannot drift (residual of TD-003)

## Done

- [x] **Migrate portfolio content to a docs-sourced content layer** (TD-003,
      ADR-007) — 13 section modules + `site.ts` under `src/content/*`
- [x] Prettier + ESLint flat config + Husky + lint-staged
- [x] Vitest + Testing Library setup with initial tests
- [x] GitHub Actions CI (format/lint/types/test/build)
- [x] Dark/light theme system
- [x] `CanvasBoundary` + `webglcontextlost` handling for the 3D hero
- [x] `docs/` knowledge base + governance system
