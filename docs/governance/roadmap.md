# Roadmap

Engineering roadmap for the repository. Pulls from
[backlog.md](./backlog.md). Review during each "Review codebase" audit.

## Now (in progress / immediate)

- Security headers + CSP (P1, TD-001)
- Global error boundary `app/error.tsx` + `global-error.tsx` (P1, TD-002)
- Fix `AISection.tsx` token-rule violation (P2, TD-010)
- Add a real `public/og.png` — referenced but missing (P2, TD-011)
- Remove dead `About.tsx` (P3, quick win, TD-007)

## Next (planned)

- Contact form backend with validation + rate limiting (P2, TD-004)
- Playwright E2E smoke + Lighthouse CI (P2, TD-005/006)
- Broaden component test coverage + `content ↔ docs` parity test (P2)

## Later (someday / aspirational)

- First-load JS / three.js optimization pass (P2, TD-006)
- Honor `prefers-reduced-motion` everywhere (P3, TD-012)
- Full accessibility pass + skip link (P3)
- Shared `SectionCard` refactor (P3, TD-008)
- `next/image` adoption; source `sitemap/robots` URL from `site.ts` (P3)
- Generate `src/content/*` from `docs/` or add a parity test (P3, residual TD-003)
- Analytics + visitor insights
- Optional: i18n, blog/notes section, case-study detail pages

### Recently shipped

- ✅ Typed content layer (`src/content/*` + `site.ts`) — ADR-007, TD-003 Done
  (2026-06-18)

---

_Last updated: 2026-06-18._
