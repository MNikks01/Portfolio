# Architecture Decision Records (ADRs)

The **canonical ADR log** is a single file:
[`docs/architecture/architecture-decisions.md`](../../docs/architecture/architecture-decisions.md).

It is kept as one consolidated, append-only document (newest first) to avoid the
numbering drift that comes from maintaining ADRs in two places. Add new decisions
there.

## Format

```
## ADR-NNN — <title> (YYYY-MM-DD)
**Decision:** …
**Why:** …
**Trade-off:** …
```

## Current decisions

- ADR-007 — Typed content layer in `src/content/*`
- ADR-006 — Knowledge base as source of truth
- ADR-005 — Dark/light theming via CSS-variable tokens
- ADR-004 — Isolate the WebGL hero (CanvasBoundary)
- ADR-003 — Align stack on React 19
- ADR-002 — Tooling baseline (Prettier/ESLint/Vitest/Husky/CI)
- ADR-001 — Next.js App Router + Tailwind + Framer Motion + R3F
