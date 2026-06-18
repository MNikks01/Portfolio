# Backlog (pointer)

The **canonical backlog** lives at
[`/docs/governance/backlog.md`](../docs/governance/backlog.md), with linked
technical debt in [`/docs/governance/technical-debt.md`](../docs/governance/technical-debt.md)
and sequencing in [`/docs/governance/roadmap.md`](../docs/governance/roadmap.md).

To avoid drift, do **not** maintain a separate list here — update the canonical
files. Current snapshot:

## P1

- Add CSP + security headers (TD-001)
- Add a global error boundary (TD-002)

## P2

- Migrate portfolio content to a docs-sourced content layer (TD-003)
- Wire the contact form to a real backend (TD-004)
- Playwright E2E smoke tests (TD-005)
- Lighthouse check in CI (TD-006)
- Expand component test coverage
- Optimize first-load JS / three.js

## P3

- Remove/repurpose `About.tsx` (TD-007)
- Extract shared `SectionCard` (TD-008)
- Real `og.png` + `next/image`
- Accessibility pass (skip link, ARIA, SR test)
- Commit-message linting
- Review skill levels (TD-009)
