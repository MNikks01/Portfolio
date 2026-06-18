# GitHub Copilot Instructions

This is an AI-native Next.js 15 + React 19 + TypeScript portfolio. Follow these
repository standards.

## Source of truth

`/docs` is canonical for content + governance. Update `/docs` before `/src`. See
`docs/README.md` and `.claude/CLAUDE.md`.

## Hard rules

- **Semantic color tokens only.** Never use `text-white`, `text-zinc-*`,
  `bg-white/x`, or `border-white/x`. Use `text-ink/fg/soft/muted/faint`,
  `bg-overlay/<a>`, `border-overlay/<a>`, `bg-bg-deep/panel`,
  `brand-blue/purple/cyan/emerald/pink`. Both light and dark themes must work.
- **TypeScript strict; no `any`.**
- **Don't redesign** the visual identity, palette, typography, layout, or motion.
- **Section pattern:** `<section id className="section-pad relative
overflow-hidden">` + `SectionHeading` + Framer Motion `whileInView`. Reuse
  `glass` + accent-glow patterns.
- Keep the `CanvasBoundary` + `webglcontextlost` handling around the 3D hero.
- No secrets in code; no `console.*` in `src/`.

## Before completing

Run: `npm run format && npm run lint && npm run typecheck && npm test &&
npm run build`. Co-locate Vitest tests as `*.test.ts(x)`.

## After changes

Sync the matching `docs/` file and, if quality changed,
`docs/governance/*` (production-checklist, technical-debt, backlog, roadmap,
audit-report).
