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

## Overall: **Level 4 — Advanced**

This repository is well past a typical personal portfolio. It has a canonical
knowledge base, an AI operating system, a typed content layer, ADRs, and a
self-improving governance loop — all hallmarks of Level 4. It is held back from
**Elite (5)** by **production-readiness**: no security headers/CSP, no global
error boundary, a thin test pyramid (no E2E, no coverage gate), unmeasured
Lighthouse, and a broken social-preview image. Close those and the repo is
genuinely Level 5.

| Dimension            | Level               | One-line                                                   |
| -------------------- | ------------------- | ---------------------------------------------------------- |
| Documentation        | **5 — Elite**       | Canonical `docs/` + `.ai/` + ADRs + governance set.        |
| Portfolio            | **4 — Advanced**    | Rich written case studies; visual assets missing.          |
| Engineering          | **4 — Advanced**    | Strict TS, content layer, clean; minor debt + 1 token bug. |
| Production-readiness | **3 — Established** | The laggard: headers, boundary, E2E, og.png all open.      |
| AI-readiness         | **5 — Elite**       | Agent-native and self-describing across every tool.        |
| Maintainability      | **4 — Advanced**    | Typed + governed; thin tests reduce the safety net.        |

---

## Documentation — Level 5 (Elite)

**Evidence:** `docs/` is a true single source of truth (profile, career, skills,
projects, portfolio, architecture, governance); `.ai/` carries machine context
(repo-map, decisions, workflows); ADRs log decisions; the governance set
(checklist, tech-debt, backlog, roadmap, audit, scorecard, this report) is
maintained; case studies are deep and per-skill notes exist. Update contracts
are written down and followed.

**To stay at 5:** automate the one manual seam — a `content ↔ docs` parity check
so the two literally cannot drift.

## Portfolio — Level 4 (Advanced)

**Evidence:** The site itself is polished (3D hero, dark/light, motion), and the
written narrative is now strong — three enriched case studies covering problem →
discovery → architecture → outcome, with founder/product/technical lessons.

**Gap:** zero visual proof. No `og.png` (broken social preview), no project
screenshots, no architecture diagrams — all catalogued in
[../portfolio/assets-plan.md](../portfolio/assets-plan.md).

**To reach 5:** execute the assets plan — ship `og.png` (TD-011), then per-project
screenshots + diagrams, and adopt `next/image`.

## Engineering — Level 4 (Advanced)

**Evidence:** TypeScript `strict`, **zero `any`**, **zero `console.*`**; a typed
content layer (ADR-007) cleanly separating content from presentation; isolated
WebGL with graceful degradation; consistent token-driven theming.

**Gap:** duplicated card/glow markup (TD-008), `AISection.tsx` violates the token
rule (TD-010), and the content layer is hand-synced rather than generated.

**To reach 5:** extract a shared `SectionCard`, fix the token violation, and add
the content/docs parity guard.

## Production-readiness — Level 3 (Established) ← the constraint

**Evidence:** Deploys cleanly to Netlify from `main`; CI gates every push
(format/lint/types/test/build); `poweredByHeader` off; secrets safe.

**Gap (this is what caps the overall level):**

- **No security headers / CSP** (TD-001).
- **No global error boundary** — only the 3D canvas is guarded (TD-002).
- **No E2E tests, no coverage gate, ~3 unit/component tests** (TD-005).
- **Lighthouse never measured** (TD-006).
- **`og.png` missing** so previews 404 (TD-011).
- Contact form is a simulation with no server validation (TD-004).

**To reach 4→5:** add CSP + hardening headers; add `app/error.tsx` +
`global-error.tsx`; add Playwright smoke E2E + Lighthouse in CI with a coverage
threshold; ship `og.png`; wire the contact form to a real, validated endpoint.

## AI-readiness — Level 5 (Elite)

**Evidence:** `.claude/` (instructions, agents, checklists, templates), `.cursor/`
rules, `.ai/` machine context, `mcp.json`, `llms.txt`, and
`.github/copilot-instructions.md`. The repo is explicitly self-describing for
many agents, with golden rules and update contracts an agent can follow. The
content layer further makes content edits a single, typed, agent-friendly change.

**To stay at 5:** keep `.ai/` (repo-map, decisions) current as code evolves —
e.g. the content layer is now reflected in repo-map and ADR-007.

## Maintainability — Level 4 (Advanced)

**Evidence:** Typed content + props, path aliases, `.nvmrc`, Husky/lint-staged,
a governance loop that keeps debt visible and prioritized, and ADRs that record
the "why." Changing content is now one file; the blast radius of a content edit
is tiny.

**Gap:** the thin test suite means refactors lean on type-checking and the build
rather than behavioral tests; no commit-message linting.

**To reach 5:** raise coverage with a gate, add E2E so flows are protected, and
add commitlint.

---

## Path to Level 5 (Elite) — prioritized

1. **Security headers + CSP** (P1, TD-001).
2. **Global error boundary** `app/error.tsx` + `global-error.tsx` (P1, TD-002).
3. **Test pyramid:** Playwright smoke E2E + `content ↔ docs` parity test +
   coverage gate (P2, TD-005).
4. **Lighthouse in CI** > 90 (P2, TD-006).
5. **Ship `og.png`** + project visual assets per the assets plan (P2, TD-011).
6. **Fix the `AISection.tsx` token violation** (P2, TD-010).
7. **Contact form backend** with validation + rate limiting (P2, TD-004).

Items 1–4 alone move **Production-readiness** from 3 → 5 and would lift the
overall assessment to **Level 5 — Elite**.
