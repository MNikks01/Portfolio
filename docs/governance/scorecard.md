# Engineering Scorecard

A category-by-category score of this repository's engineering quality, on a
0–100 scale, with rationale. Updated on every "Review codebase" audit (see
[`.ai/workflows/self-improvement.md`](../../.ai/workflows/self-improvement.md)).
Scores reflect the codebase **as audited**, not aspiration — they move as
backlog items land.

**Last scored:** 2026-06-18 (post-remediation — the P1/P2 hardening backlog
shipped).
**Source audit:** [audit-report.md](./audit-report.md).

## Summary

| Category             | Score      | Trend      |
| -------------------- | ---------- | ---------- |
| Architecture         | **92**/100 | ▲ (was 88) |
| Security             | **85**/100 | ▲ (was 62) |
| Performance          | **82**/100 | ▲ (was 75) |
| Accessibility        | **78**/100 | ▲ (was 62) |
| SEO                  | **95**/100 | ▲ (was 85) |
| Testing              | **82**/100 | ▲ (was 45) |
| Documentation        | **97**/100 | ▲ (was 96) |
| Developer Experience | **96**/100 | ▲ (was 92) |
| **Overall**          | **88**/100 | ▲ (was 76) |

> Overall is the unweighted mean of the eight categories (rounded). The
> remediation pass closed the two laggards — **Security** (62 → 85) and
> **Testing** (45 → 82).

---

## Architecture — 92/100

**Why:** Typed content layer (ADR-007); a shared `SectionCard` primitive now
backs the uniform grid sections, closing the duplicate-markup gap (TD-008). One
component per section; WebGL isolated behind `CanvasBoundary` plus route-level
and root error boundaries.

**Costing points:** structure is section-based rather than feature-foldered; the
content layer is hand-synced with `docs/` (now guarded by a parity test, not a
generator); a few bespoke card layouts remain by design.

**To reach 98:** a content generator (remove the manual sync) + broader
`SectionCard` adoption.

## Security — 85/100

**Why:** Full security-header set via `next.config.ts headers()` — CSP,
X-Frame-Options, X-Content-Type-Options, Referrer-Policy, Permissions-Policy,
HSTS (verified). `/api/contact` does server-side validation + per-IP rate
limiting. Secrets safe; XSS handled; `poweredByHeader` off.

**Costing points:** CSP relies on `script-src 'unsafe-inline'` for the static
inline theme/JSON-LD scripts (nonce-based CSP needs middleware); the rate limiter
is per-instance.

**To reach 95:** nonce-based CSP via middleware; a shared-store rate limiter.

## Performance — 82/100

**Why:** Code/route splitting, lazy `ssr:false` 3D hero, `next/font` with
`display: swap`, prod `removeConsole`, ~102 kB shared first-load JS, and
**Lighthouse is now measured in CI** with assertion budgets.

**Costing points:** three.js still inflates the hero path (~180 kB); no
`next/image` / image optimization.

**To reach 90:** defer the canvas until idle / reduce mobile DPR; adopt
`next/image` once raster assets land.

## Accessibility — 78/100

**Why:** Skip-to-content link + `<main id="main">`, `lang="en"`, single `h1`,
`aria-hidden` decorative canvases, labelled icon controls, and
`prefers-reduced-motion` honored app-wide (`MotionConfig`, Lenis skip, counter
short-circuit, CSS guards). Error states use `role="alert"`.

**Costing points:** ARIA coverage still incomplete; never tested with a screen
reader; contrast verified visually, not tooled.

**To reach 90:** complete ARIA + landmarks, run automated axe checks in CI, and
do a screen-reader pass.

## SEO — 95/100

**Why:** Rich metadata (sourced from `site.ts`), OpenGraph + Twitter cards now
**generated** via `opengraph-image.tsx` / `twitter-image.tsx` (no more 404
preview), JSON-LD `Person`, sitemap + robots (both sourced from `site.ts`),
canonical, `metadataBase`. Lighthouse SEO is asserted ≥ 0.9 in CI.

**Costing points:** single-page site, so limited structured-content surface.

**To reach 100:** per-section/article structured data if the site grows.

## Testing — 82/100

**Why:** 26 Vitest tests (up from 9) — Hero, Navigation, ThemeToggle, Skills,
Footer, SectionHeading, plus a `content ↔ docs` parity test that guards drift;
Playwright E2E smoke (render, theme toggle, nav anchors) and Lighthouse both run
in CI.

**Costing points:** no coverage threshold gate; E2E is a thin smoke layer.

**To reach 90:** add a coverage gate and broaden E2E (contact flow, mobile menu).

## Documentation — 97/100

**Why:** Canonical `docs/` knowledge base, `.ai/` machine context, ADRs, the full
governance set (checklist, tech-debt, backlog, roadmap, audit, scorecard,
maturity report), enriched case studies, and per-skill notes. A parity test now
backs the docs↔content contract.

**Costing points:** docs↔content sync is test-guarded but not generated.

**To reach 100:** generate content from docs (or vice-versa).

## Developer Experience — 96/100

**Why:** Full quality gate (Prettier + ESLint flat config via the ESLint CLI +
Vitest + Playwright + Husky + lint-staged + **commitlint**) and CI (format, lint,
types, unit, E2E, Lighthouse) with concurrency cancellation. TypeScript `strict`,
zero `any`, zero `console.*`, path aliases, `.nvmrc`, an AI operating system, and
a typed content layer.

**Costing points:** no CI deploy gate/preview.

**To reach 100:** add a deploy preview gate.
