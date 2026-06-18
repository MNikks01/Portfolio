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
- **Status:** Open

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
