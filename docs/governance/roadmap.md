# Roadmap

Engineering roadmap for the repository. Pulls from
[backlog.md](./backlog.md). Review during each "Review codebase" audit.

## Now (in progress / immediate)

_All P1 hardening shipped (see Recently shipped). Next focus is performance._

## Next (planned)

- First-load JS / three.js optimization pass — defer-until-idle, mobile DPR
  (P2, TD-006)
- Nonce-based CSP via middleware (replace `script-src 'unsafe-inline'`) (P2,
  residual TD-001)

## Later (someday / aspirational)

- Full accessibility pass — complete ARIA + screen-reader test (P3)
- `next/image` adoption (P3)
- Broaden `SectionCard` adoption / shared primitives (P3, residual TD-008)
- Generate `src/content/*` from `docs/` to remove the manual sync (P3,
  residual TD-003)
- Review skill levels for accuracy (P3, TD-009)
- Analytics + visitor insights
- Optional: i18n, blog/notes section, case-study detail pages

### Recently shipped (2026-06-18)

- ✅ Security headers + CSP (TD-001)
- ✅ Global error boundary — `error.tsx` + `global-error.tsx` (TD-002)
- ✅ Contact backend — `/api/contact` validation + rate limiting (TD-004)
- ✅ Playwright E2E + expanded Vitest coverage + parity test (TD-005)
- ✅ Lighthouse CI with budgets (TD-006)
- ✅ `AISection.tsx` token-rule fix (TD-010)
- ✅ Generated OG/Twitter image (TD-011)
- ✅ `prefers-reduced-motion` honored app-wide (TD-012)
- ✅ Skip-to-content link; removed dead `About.tsx` (TD-007)
- ✅ Shared `SectionCard` for the uniform grids (TD-008)
- ✅ commitlint; `sitemap`/`robots` from `site.ts`; migrated off `next lint`
- ✅ Typed content layer (`src/content/*` + `site.ts`) — ADR-007, TD-003

---

_Last updated: 2026-06-18._
