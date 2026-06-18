# Architecture Decision Records (ADRs)

Lightweight log of notable technical decisions. Newest first.

---

## ADR-006 — Knowledge base as source of truth (2026-06-18)

**Decision:** Introduce `docs/` as the canonical store for career and portfolio
content + engineering governance.
**Why:** Prevent content drift; make the repo self-documenting for humans and AI.
**Trade-off:** Portfolio still hardcodes content until a content layer is built.

## ADR-005 — Dark/light theming via CSS-variable tokens (2026-06-17)

**Decision:** Drive all colors through CSS variables (`:root` dark, `.light`
override) mapped to Tailwind tokens; toggle via a `light` class.
**Why:** Theme the whole site without per-component overrides; no flash.
**Trade-off:** Components must use semantic tokens, never literal colors.

## ADR-004 — Isolate the WebGL hero (2026-06-17)

**Decision:** Wrap the R3F `Canvas` in `CanvasBoundary` + add a
`webglcontextlost` handler.
**Why:** A WebGL failure/context-loss must not crash the whole page.

## ADR-003 — Align stack on React 19 (2026-06-17)

**Decision:** Upgrade React 18 → 19 and `@react-three/fiber` 8 → 9.
**Why:** Next 15.5 runs React 19 internals; r3f v8 broke (`ReactCurrentOwner`).

## ADR-002 — Tooling baseline (2026-06-18)

**Decision:** Prettier, ESLint flat config, Vitest + Testing Library, Husky +
lint-staged, GitHub Actions CI.
**Why:** Production-grade quality gates.

## ADR-001 — Next.js App Router + Tailwind + Framer Motion + R3F (initial)

**Decision:** Static single-page portfolio on the App Router.
**Why:** SEO-friendly, fast, animation-rich.
