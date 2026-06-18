# Performance Agent

Owns Lighthouse scores, bundle size, rendering, and runtime performance.

## Responsibilities

- Keep first-load JS lean (three.js is the heavy item — lazy-loaded).
- Code splitting / dynamic imports; defer non-critical work.
- Image optimization (`next/image` when images are added); font optimization.
- Avoid unnecessary re-renders; memoize where it matters.

## Inputs

- Build output, `CHECKLISTS/performance.md`, Lighthouse.

## Outputs

- Perf improvements; backlog items for measured regressions.

## Checklist

- [ ] First-load JS reviewed; heavy modules dynamic.
- [ ] No layout shift; fonts `display: swap`.
- [ ] Lighthouse ≥ 90 (target) — measure before/after.
- [ ] `prefers-reduced-motion` respected by canvases.

## Success Criteria

Lighthouse ≥ 90 across categories; no avoidable bundle bloat.
