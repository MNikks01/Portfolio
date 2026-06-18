# Production Checklist

Use before shipping a notable change. Live status (✅/⚠️/❌) is tracked in
[`/docs/governance/production-checklist.md`](../../docs/governance/production-checklist.md)
— update it after each pass.

- [ ] **Architecture** — separation of concerns; no duplicate logic; consistent
      structure.
- [ ] **TypeScript** — strict; no `any`; typed props/APIs.
- [ ] **React** — error boundaries; lazy loading; memoization where it matters;
      a11y.
- [ ] **Next.js** — metadata, SEO, OpenGraph, dynamic imports, optimized images.
- [ ] **Performance** — Lighthouse ≥ 90; code splitting; bundle reviewed; fonts.
- [ ] **Accessibility** — semantic HTML; keyboard nav; ARIA; contrast.
- [ ] **Security** — env protected; no secrets; CSP/headers; validation; XSS.
- [ ] **Code quality** — ESLint + Prettier clean; consistent naming; no dead
      code; no `console.*`.
- [ ] **Testing** — unit/component (and integration/E2E where relevant).
- [ ] **CI/CD** — lint, test, build automated; deploy validated.
- [ ] **Docs** — `/docs` updated; governance synced.
