# Audit Report

Append a new entry each time a "Review codebase" audit runs. Newest first.

---

## 2026-06-18 — Post-refactor production audit

**Reviewed (actual code, not assumptions):** `src/app/*` (`layout.tsx`,
`page.tsx`, `globals.css`, `sitemap.ts`, `robots.ts`), all `src/components/*`
(27) incl. `three/*`, the new `src/content/*` (14 modules), `src/lib/*`,
`next.config.ts`, `netlify.toml`, `tsconfig.json`, `eslint.config.mjs`,
`.github/workflows/ci.yml`, `package.json`, `public/`.

**Overall risk:** 🟡 Low–Medium. Architecture improved markedly since baseline —
the content layer (ADR-007) removed the drift risk. No critical security or
correctness issues. Remaining gaps are hardening (headers, error boundary),
one real token-rule violation, and process items (E2E, Lighthouse, a11y).

### What changed since baseline

- ✅ **Finding #3 resolved** — content is now in `src/content/*`, imported by
  every section; `docs → content → component` is the contract (TD-003 Done).
- 🆕 **New finding #10** — `AISection.tsx` uses literal `white`/`zinc`/hex
  (`border-white/10`, `bg-[#0a0f1c]`, `text-zinc-500/300`), violating the
  token rule. The "terminal" panel stays dark in light theme and bypasses the
  design system. Tracked as **TD-010**.

### Findings

| #   | Finding                                                                  | Risk      | Area         | Debt   |
| --- | ------------------------------------------------------------------------ | --------- | ------------ | ------ |
| 1   | No Content-Security-Policy / security headers (next.config + netlify)    | 🟠 Medium | Security     | TD-001 |
| 2   | Only the 3D canvas has an error boundary; no `app/error.tsx`/`global-`   | 🟠 Medium | React        | TD-002 |
| 3   | `AISection.tsx` literal `white`/`zinc`/hex — token-rule violation        | 🟠 Medium | Theming      | TD-010 |
| 4   | Contact form is a client-side simulation (no backend/validation)         | 🟡 Low    | Security/UX  | TD-004 |
| 5   | `og.png` referenced in metadata + twitter card but **missing** in public | 🟡 Low    | SEO/Next.js  | TD-011 |
| 6   | No E2E tests; coverage thin (3 files); `src/content/*` untested          | 🟡 Low    | Testing      | TD-005 |
| 7   | Lighthouse not measured; three.js inflates first-load JS (~180 kB)       | 🟡 Low    | Performance  | TD-006 |
| 8   | A11y partial — no skip link, only 8 `aria-*`, reduced-motion only partly | 🟡 Low    | A11y         | —      |
| 9   | `reduced-motion` honored in `globals.css`/`ParticleBackground` only      | 🟡 Low    | A11y         | TD-012 |
| 10  | `About.tsx` is dead code (confirmed not imported anywhere)               | 🟢 Info   | Code quality | TD-007 |
| 11  | `sitemap.ts`/`robots.ts` hardcode the URL instead of `site.ts`           | 🟢 Info   | Consistency  | —      |

### Strengths (verified)

- **Architecture:** typed content layer; one component per section; WebGL
  isolated behind `CanvasBoundary` with `webglcontextlost` handling.
- **TypeScript:** `strict: true`, **zero `any`/`as any`** in `src`, **zero
  `console.*`** (and `removeConsole` in prod).
- **Tooling/CI:** Prettier + ESLint flat config + Vitest + Husky/lint-staged +
  GitHub Actions (format-check, lint, types, test, build) with concurrency
  cancellation; `poweredByHeader: false`.
- **SEO:** rich metadata, OpenGraph/Twitter, JSON-LD `Person`, sitemap + robots,
  canonical, `metadataBase`.
- **Performance posture:** 3D hero is `next/dynamic` `ssr:false` + lazy; shared
  first-load JS ~102 kB; `removeConsole` in prod.
- **Theming:** token-driven and consistent **except** `AISection.tsx`.

### Recommendations (priority order)

1. **P1** — Add security headers + CSP (`netlify.toml [[headers]]` or
   `next.config` `headers()`): CSP, X-Frame-Options, Referrer-Policy,
   Permissions-Policy, HSTS. (TD-001)
2. **P1** — Add `src/app/error.tsx` + `src/app/global-error.tsx`. (TD-002)
3. **P2** — Fix `AISection.tsx` to use semantic tokens (or document a deliberate
   always-dark "terminal" via a scoped token), so light theme is complete.
   (TD-010)
4. **P2** — Add a real `public/og.png` (1200×630) — currently a broken social
   preview. (TD-011)
5. **P2** — Playwright smoke E2E (render, theme toggle, nav anchors) + a
   `content ↔ docs` parity test; raise Vitest coverage. (TD-005)
6. **P2** — Lighthouse in CI (target > 90); revisit three.js defer-until-idle /
   mobile DPR. (TD-006)
7. **P3** — Honor `prefers-reduced-motion` across framer-motion reveals + hero.
   (TD-012)
8. **P3** — Delete/repurpose `About.tsx` (TD-007); source `sitemap/robots` URL
   from `site.ts`.

See [scorecard.md](./scorecard.md) for category scores and
[repository-maturity-report.md](./repository-maturity-report.md) for the
maturity assessment.

---

## 2026-06-18 — Baseline audit

**Reviewed:** `src/app/*`, `src/components/*` (27 components), `src/lib/*`,
`tailwind.config.ts`, `next.config.ts`, `tsconfig.json`, tooling configs, CI.

**Overall risk:** 🟡 Low–Medium. The site is a static, well-built portfolio with
strong tooling. No critical security or correctness issues. Gaps are hardening
and process items.

### Findings

| #   | Finding                                                             | Risk      | Area         |
| --- | ------------------------------------------------------------------- | --------- | ------------ |
| 1   | No Content-Security-Policy / security headers                       | 🟠 Medium | Security     |
| 2   | Only the 3D canvas has an error boundary; no global `app/error.tsx` | 🟠 Medium | React        |
| 3   | Portfolio content is hardcoded in components (not docs-sourced)     | 🟡 Low    | Architecture |
| 4   | Contact form is a client-side simulation (no backend/validation)    | 🟡 Low    | Security/UX  |
| 5   | No E2E tests; thin component coverage                               | 🟡 Low    | Testing      |
| 6   | Lighthouse not measured; three.js inflates first-load JS            | 🟡 Low    | Performance  |
| 7   | `About.tsx` is dead code (no longer rendered)                       | 🟢 Info   | Code quality |
| 8   | Accessibility is partial (skip link, ARIA coverage, SR testing)     | 🟡 Low    | A11y         |
| 9   | `next/image` unused; no real `og.png`                               | 🟢 Info   | Next.js      |

### Strengths

- TypeScript strict, **zero** `any`, **zero** `console.*` in `src`.
- Full quality gate: Prettier + ESLint + Vitest + Husky + CI.
- Theme system is token-driven and consistent; 3D failures degrade gracefully.
- Good SEO/metadata/JSON-LD.

### Recommendations

1. Add security headers / CSP (P1) → see [backlog.md](./backlog.md).
2. Add a global `app/error.tsx` error boundary (P1).
3. Plan the docs-sourced content layer (P2) so portfolio can't drift from `docs/`.
4. Add Playwright smoke E2E + Lighthouse check (P2).
5. Wire the contact form to a real endpoint (P2).
6. Remove/repurpose `About.tsx` (P3).

Details tracked in [technical-debt.md](./technical-debt.md),
[backlog.md](./backlog.md), and [roadmap.md](./roadmap.md).
