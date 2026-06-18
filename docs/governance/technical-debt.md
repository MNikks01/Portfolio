# Technical Debt

Tracked debt items. Format: Issue · Impact · Priority · Suggested Fix · Status.

---

### TD-001 — No security headers / CSP

- **Impact:** Weaker defense-in-depth (clickjacking, content injection).
- **Priority:** P1
- **Suggested Fix:** Add `headers()` in `next.config.ts` (CSP, X-Frame-Options,
  Referrer-Policy, Permissions-Policy) or a `netlify.toml [[headers]]` block.
- **Status:** Open

### TD-002 — No global error boundary

- **Impact:** A render error outside the 3D canvas would surface Next's default
  error page.
- **Priority:** P1
- **Suggested Fix:** Add `src/app/error.tsx` (and `global-error.tsx`).
- **Status:** Open

### TD-003 — Portfolio content hardcoded in components

- **Impact:** Content can drift from `docs/`; two places to update.
- **Priority:** P2
- **Suggested Fix:** Introduce a typed content layer (`src/content/*`) that is
  the single import source, kept in sync with `docs/` (or generated from it).
- **Status:** ✅ Done (2026-06-18) — all 13 sections + `site.ts` extracted to
  `src/content/*`; components import the data, JSX unchanged. See ADR-007.
  Residual: the layer is hand-synced with `docs/`, not generated (tracked as a
  P3 backlog item).

### TD-004 — Contact form has no backend

- **Impact:** Submissions are simulated; no real delivery or server validation.
- **Priority:** P2
- **Suggested Fix:** Wire to Resend or a `/api/contact` route with validation +
  rate limiting.
- **Status:** Open

### TD-005 — No E2E tests; thin component coverage

- **Impact:** Regressions in flows (theme toggle, nav, render) not caught.
- **Priority:** P2
- **Suggested Fix:** Add Playwright smoke tests; expand Vitest coverage.
- **Status:** Open

### TD-006 — three.js bundle weight

- **Impact:** First-load JS ~180 kB; slower TTI on low-end devices.
- **Priority:** P2
- **Suggested Fix:** Already dynamic; consider deferring the canvas until idle,
  lighter geometry, or reduced DPR on mobile.
- **Status:** Mitigated (lazy-loaded) / Open

### TD-007 — Dead code: `About.tsx`

- **Impact:** Confusion; superseded by `FounderJourney`.
- **Priority:** P3
- **Suggested Fix:** Delete or repurpose.
- **Status:** Open

### TD-008 — Duplicate card markup across sections

- **Impact:** Repeated glass-card/glow markup; harder to evolve consistently.
- **Priority:** P3
- **Suggested Fix:** Extract a shared `SectionCard` component.
- **Status:** Open

### TD-009 — Skill levels are self-reported estimates

- **Impact:** Data-quality/credibility.
- **Priority:** P3
- **Suggested Fix:** Periodically review `docs/skills/*` for accuracy.
- **Status:** Open

### TD-010 — `AISection.tsx` bypasses the design-token system

- **Impact:** Uses literal `border-white/10`, `bg-[#0a0f1c]`, and `text-zinc-500/300`
  instead of semantic tokens — violates the non-negotiable theming rule. The
  "terminal" panel stays dark in light theme and won't follow future token
  changes. Found in the 2026-06-18 post-refactor audit.
- **Priority:** P2
- **Suggested Fix:** Replace with `border-overlay/<a>`, `bg-bg-panel`/`bg-bg-deep`,
  and `text-soft/muted/faint`. If an always-dark terminal is intentional, encode
  it as a scoped, documented token rather than ad-hoc literals.
- **Status:** Open

### TD-011 — `og.png` referenced but missing

- **Impact:** `src/app/layout.tsx` references `/og.png` in both OpenGraph and the
  Twitter card, but `public/` contains only `resume.pdf`. Social/link previews
  resolve to a 404 image — a visible quality gap for a portfolio whose job is to
  be shared.
- **Priority:** P2
- **Suggested Fix:** Add a real `public/og.png` (1200×630) — or generate one with
  the Next.js `opengraph-image` convention (`ImageResponse`). See
  [../portfolio/assets-plan.md](../portfolio/assets-plan.md).
- **Status:** Open

### TD-012 — `prefers-reduced-motion` only partially honored

- **Impact:** Honored in `globals.css` and `ParticleBackground`, but the
  framer-motion section reveals, the marquee, the animated counters, and the 3D
  hero animate regardless of the user's reduced-motion preference — an a11y and
  vestibular-comfort gap.
- **Priority:** P3
- **Suggested Fix:** Gate motion on `useReducedMotion()` (framer-motion) for
  reveals/counters/marquee and pause/freeze the hero when reduced motion is set.
- **Status:** Open
