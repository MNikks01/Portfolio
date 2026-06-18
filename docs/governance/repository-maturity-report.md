# Repository Maturity Report

An assessment of this repository's maturity across six dimensions, each placed on
a five-level scale, with concrete recommendations for reaching the next level.
Complements the per-category [scorecard.md](./scorecard.md) and the findings in
[audit-report.md](./audit-report.md).

**Assessed:** 2026-06-18 (post-content-layer refactor).

## Maturity scale

| Level | Name            | Meaning                                                                      |
| ----- | --------------- | ---------------------------------------------------------------------------- |
| 1     | **Basic**       | Works, but ad-hoc; little structure, docs, or automation.                    |
| 2     | **Developing**  | Some conventions and tooling; inconsistent; gaps are untracked.              |
| 3     | **Established** | Solid conventions, CI, and docs; gaps are known but not all closed.          |
| 4     | **Advanced**    | Strong architecture + governance; gaps are tracked and actively burned down. |
| 5     | **Elite**       | Production-hardened, tested, observable, and self-improving end-to-end.      |

## Overall: **Level 5 — Elite** (with a short polish list)

> **Update (2026-06-18):** the remediation pass closed the production-readiness
> gap that previously capped this at Level 4. Security headers/CSP, error
> boundaries, a real test pyramid (Playwright E2E + 26 unit/component + parity),
> Lighthouse-in-CI, and the OG image all shipped. Production-readiness rose 3 →
> 5, lifting the overall assessment to **Level 5 — Elite**.

This repository is well past a typical personal portfolio: a canonical knowledge
base, an AI operating system, a typed content layer, ADRs, a self-improving
governance loop, **and** now production hardening (headers/CSP, error
boundaries), a layered test pyramid wired into CI, Lighthouse budgets, and a
generated social image. What remains is polish, not structural gaps (see the
list at the end).

| Dimension            | Level            | One-line                                                       |
| -------------------- | ---------------- | -------------------------------------------------------------- |
| Documentation        | **5 — Elite**    | Canonical `docs/` + `.ai/` + ADRs + governance set.            |
| Portfolio            | **4 — Advanced** | Rich written case studies; visual assets still missing.        |
| Engineering          | **5 — Elite**    | Strict TS, content layer, `SectionCard`, error boundaries.     |
| Production-readiness | **5 — Elite**    | Headers/CSP, boundaries, E2E + Lighthouse in CI, OG image.     |
| AI-readiness         | **5 — Elite**    | Agent-native and self-describing across every tool.            |
| Maintainability      | **5 — Elite**    | Typed + governed; layered tests + parity guard the safety net. |

---

## Documentation — Level 5 (Elite)

**Evidence:** `docs/` is a true single source of truth (profile, career, skills,
projects, portfolio, architecture, governance); `.ai/` carries machine context
(repo-map, decisions, workflows); ADRs log decisions; the governance set
(checklist, tech-debt, backlog, roadmap, audit, scorecard, this report) is
maintained; case studies are deep and per-skill notes exist. Update contracts
are written down and followed.

**To stay at 5:** ✅ the one manual seam is now guarded — a `content ↔ docs`
parity test (`src/content/content.test.ts`) fails if they drift. A generator
would remove the manual step entirely.

## Portfolio — Level 4 (Advanced)

**Evidence:** The site itself is polished (3D hero, dark/light, motion), and the
written narrative is now strong — three enriched case studies covering problem →
discovery → architecture → outcome, with founder/product/technical lessons.

**Gap:** zero visual proof. No `og.png` (broken social preview), no project
screenshots, no architecture diagrams — all catalogued in
[../portfolio/assets-plan.md](../portfolio/assets-plan.md).

**To reach 5:** execute the assets plan — ship `og.png` (TD-011), then per-project
screenshots + diagrams, and adopt `next/image`.

## Engineering — Level 5 (Elite)

**Evidence:** TypeScript `strict`, **zero `any`**, **zero `console.*`**; a typed
content layer (ADR-007) cleanly separating content from presentation; a shared
`SectionCard` primitive backing the uniform grids (TD-008); isolated WebGL with
graceful degradation plus route + root error boundaries; fully token-driven
theming (the `AISection.tsx` violation is fixed).

**Costing points:** a few bespoke card layouts remain by design; content is
hand-synced (parity-tested, not generated).

**To stay at 5:** keep the parity test green; consider a content generator.

## Production-readiness — Level 5 (Elite)

**Evidence:** Deploys cleanly to Netlify from `main`; CI gates every push
(format/lint/types/test/build) **plus E2E and Lighthouse jobs**. Now also:

- **Security headers + CSP** via `next.config.ts headers()` (TD-001).
- **Error boundaries** — `app/error.tsx` + `global-error.tsx` (TD-002).
- **Test pyramid** — 26 unit/component + `content ↔ docs` parity + Playwright
  E2E smoke (TD-005).
- **Lighthouse in CI** with assertion budgets (TD-006).
- **Generated OG/Twitter image** — no more 404 preview (TD-011).
- **Validated, rate-limited `/api/contact`** with the form wired in (TD-004).

**Costing points:** CSP uses `'unsafe-inline'` (nonce-via-middleware pending);
no coverage threshold gate; no CI deploy preview gate.

**To stay at 5:** nonce-based CSP; a coverage gate; a deploy preview.

## AI-readiness — Level 5 (Elite)

**Evidence:** `.claude/` (instructions, agents, checklists, templates), `.cursor/`
rules, `.ai/` machine context, `mcp.json`, `llms.txt`, and
`.github/copilot-instructions.md`. The repo is explicitly self-describing for
many agents, with golden rules and update contracts an agent can follow. The
content layer further makes content edits a single, typed, agent-friendly change.

**To stay at 5:** keep `.ai/` (repo-map, decisions) current as code evolves —
e.g. the content layer is now reflected in repo-map and ADR-007.

## Maintainability — Level 5 (Elite)

**Evidence:** Typed content + props, path aliases, `.nvmrc`, Husky/lint-staged,
**commitlint** (commit-msg hook), a governance loop that keeps debt visible and
prioritized, and ADRs that record the "why." Refactors are now protected by a
layered test pyramid (unit/component/E2E) plus the parity test, not just
type-checking. Changing content is one file with a tiny blast radius.

**Costing points:** no coverage threshold gate yet.

**To stay at 5:** add a coverage gate and keep ADRs current.

---

## Level 5 reached — remaining polish

The prioritized path to Elite (security headers, error boundaries, test pyramid,
Lighthouse-in-CI, OG image, token fix, contact backend) is **done** (2026-06-18).
What's left is polish that does not change the maturity level:

1. **Portfolio visuals** — ship the project screenshots/diagrams in
   [../portfolio/assets-plan.md](../portfolio/assets-plan.md) and adopt
   `next/image` (this is the only dimension below 5).
2. **Nonce-based CSP** via middleware (replace `script-src 'unsafe-inline'`).
3. **Coverage gate** + broader E2E (contact flow, mobile menu).
4. **Full a11y pass** — complete ARIA + screen-reader test.
5. **three.js bundle reduction** (defer-until-idle / mobile DPR).
6. **Content generator** to remove the hand-sync (parity is already test-guarded).

The one dimension still at Level 4 is **Portfolio** (item 1) — written content is
strong, but visual proof is missing.
