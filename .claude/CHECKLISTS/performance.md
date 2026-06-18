# Performance Checklist

Owner: [Performance Agent](../AGENTS/performance-agent.md). Target: Lighthouse ≥ 90.

- [ ] **First-load JS** — reviewed; heavy modules (three.js) dynamically imported.
- [ ] **Code splitting** — route/component-level where useful.
- [ ] **Images** — `next/image`, correct sizes, modern formats (when added).
- [ ] **Fonts** — `next/font`, `display: swap`, subset.
- [ ] **CLS** — reserve space; avoid layout shift.
- [ ] **LCP** — hero content prioritized; 3D deferred/idle.
- [ ] **Re-renders** — memoize expensive components; stable props.
- [ ] **Animation** — GPU-friendly transforms; reduced-motion respected.
- [ ] **Measure** — run Lighthouse before/after; record in audit report.
