# Engineering Scorecard

A category-by-category score of this repository's engineering quality, on a
0–100 scale, with rationale. Updated on every "Review codebase" audit (see
[`.ai/workflows/self-improvement.md`](../../.ai/workflows/self-improvement.md)).
Scores reflect the codebase **as audited**, not aspiration — they should move as
backlog items land.

**Last scored:** 2026-06-18 (post-content-layer refactor).
**Source audit:** [audit-report.md](./audit-report.md).

## Summary

| Category             | Score      | Trend       |
| -------------------- | ---------- | ----------- |
| Architecture         | **88**/100 | ▲ (was 80)  |
| Security             | **62**/100 | ▬           |
| Performance          | **75**/100 | ▬           |
| Accessibility        | **62**/100 | ▬           |
| SEO                  | **85**/100 | ▼ (og.png)  |
| Testing              | **45**/100 | ▬           |
| Documentation        | **96**/100 | ▲           |
| Developer Experience | **92**/100 | ▲           |
| **Overall**          | **76**/100 | ▲ (was ~73) |

> Overall is the unweighted mean of the eight categories (rounded). The two
> biggest levers are **Testing** and **Security** — both are process/hardening
> gaps, not architectural ones.

---

## Architecture — 88/100

**Why:** Clean separation of concerns; one component per section; a new **typed
content layer** (`src/content/*` + `site.ts`, ADR-007) makes
`docs → content → component` the contract and removes content-drift risk. The
WebGL hero is isolated behind `CanvasBoundary` with `webglcontextlost` handling
so a GPU failure degrades to a glow instead of crashing the page.

**Costing points:** card/glow markup is duplicated across sections (TD-008, no
shared `SectionCard`); structure is section-based rather than feature-foldered;
the content layer is hand-synced with `docs/` rather than generated.

**To reach 95:** extract `SectionCard`; add a `content ↔ docs` parity test or
generator.

## Security — 62/100

**Why:** Secrets are safe (`.env*` gitignored, none committed), React escaping
handles XSS, `dangerouslySetInnerHTML` is used only for controlled JSON-LD and
the no-flash theme script, and `poweredByHeader` is disabled.

**Costing points:** **no Content-Security-Policy or security headers** at all
(TD-001) — no X-Frame-Options, Referrer-Policy, Permissions-Policy, or HSTS. The
contact form has client-side `required` only, no server-side validation (TD-004,
though there's no backend yet).

**To reach 85:** add a `netlify.toml [[headers]]` / `next.config headers()` block
with CSP + the standard hardening headers.

## Performance — 75/100

**Why:** Good posture for an animation-heavy site — route/code splitting, the
three.js hero is `next/dynamic` `ssr:false` + lazy, fonts use `next/font` with
`display: swap`, `removeConsole` in production, and shared first-load JS is a
reasonable ~102 kB.

**Costing points:** three.js still inflates the hero's first load (~180 kB on
that path); **Lighthouse is never measured** (TD-006); no `next/image` / image
optimization configured.

**To reach 90:** add a Lighthouse check in CI (target > 90); consider
defer-until-idle and reduced mobile DPR for the canvas.

## Accessibility — 62/100

**Why:** Mostly semantic HTML, `lang="en"`, a single `h1`, decorative canvases
marked `aria-hidden`, and some `aria-label`s on icon-only controls.

**Costing points:** no skip-to-content link; ARIA coverage is incomplete (only
~8 `aria-*` across the app); `prefers-reduced-motion` is honored in `globals.css`
and `ParticleBackground` but **not** by the framer-motion reveals, counters,
marquee, or hero (TD-012); never tested with a screen reader; contrast verified
visually, not tooled.

**To reach 85:** add a skip link + landmarks, complete ARIA, gate motion on
`useReducedMotion()`, and run an automated a11y pass (axe) in CI.

## SEO — 85/100

**Why:** Rich `Metadata` (now sourced from `site.ts`), OpenGraph + Twitter card,
JSON-LD `Person`, `sitemap.ts` + `robots.ts`, canonical URL, and `metadataBase`.

**Costing points:** the referenced `/og.png` is **missing** from `public/`
(TD-011), so social/link previews 404 — a real dent for a portfolio whose value
is being shared. `sitemap`/`robots` hardcode the URL instead of `site.ts`.

**To reach 95:** ship a real `og.png` (or `opengraph-image` via `ImageResponse`).

## Testing — 45/100

**Why:** Vitest + Testing Library are set up and wired into CI; there are unit
tests (`cn`) and component tests (`Footer`, `SectionHeading`).

**Costing points:** only **3 test files**; no integration or E2E tests; the new
`src/content/*` modules are untested; no coverage gate. This is the weakest
category and the biggest single lever on the overall score.

**To reach 80:** Playwright smoke E2E (render, theme toggle, nav anchors), a
`content ↔ docs` parity test, and broader component coverage (Hero, Navigation,
ThemeToggle, Skills) with a coverage threshold.

## Documentation — 96/100

**Why:** Exceptional and rare. A canonical `docs/` knowledge base (profile,
career, skills, projects, portfolio, architecture, governance), an `.ai/`
machine-context layer, ADRs, this governance system (checklist, tech-debt,
backlog, roadmap, audit, scorecard), enriched case studies, and per-skill notes.
The repo is genuinely self-describing for humans and agents.

**Costing points:** docs↔content sync is still manual (no enforcement), so docs
_can_ technically drift from `src/content/*` until a parity check exists.

**To reach 100:** automate the docs↔content parity check.

## Developer Experience — 92/100

**Why:** Full quality gate (Prettier + ESLint flat config + Vitest + Husky +
lint-staged) and GitHub Actions CI (format-check, lint, types, test, build) with
concurrency cancellation. TypeScript `strict`, **zero `any`**, **zero
`console.*`**, path aliases, `.nvmrc`, an AI operating system (`.claude/`,
`.cursor/`, `mcp.json`, `llms.txt`), and a typed content layer that makes content
edits a one-file change.

**Costing points:** no commit-message linting; no CI deploy gate/preview;
`next lint` is deprecated (migrate to the ESLint CLI before Next 16).

**To reach 98:** add commitlint + a commit-msg hook and migrate off `next lint`.
