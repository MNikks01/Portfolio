# Cursor — Project Context

You're working in an **AI-native Next.js portfolio** for Nikhil (Senior Full
Stack / Product / AI Engineer). Read this, then the rules in
[`.cursor/rules/`](./rules) (several are `alwaysApply`).

## Stack

Next.js 15 (App Router) · React 19 · TypeScript (strict) · Tailwind 3 (CSS-var
tokens) · Framer Motion · three.js/R3F · Vitest · ESLint + Prettier · Husky · CI
→ Netlify.

## The 6 rules that matter most

1. **`/docs` is the source of truth.** Update docs before code (`docs/README.md`).
2. **Semantic color tokens only** — never literal `white`/`zinc`. Both themes
   must work.
3. **Don't redesign** — preserve identity, palette, type, layout, motion.
4. **Section pattern** — `section-pad` + `SectionHeading` + `whileInView`; reuse
   `glass` + accent glows.
5. **Quality gate** — `npm run format && lint && typecheck && test && build`.
6. **Update governance** (`docs/governance/*`) after changes.

## Orientation

- Project + user context: [`.claude/PROJECT_CONTEXT.md`](../.claude/PROJECT_CONTEXT.md),
  [`.claude/USER_CONTEXT.md`](../.claude/USER_CONTEXT.md)
- Architecture: [`docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md)
- Standards: [`docs/architecture/standards.md`](../docs/architecture/standards.md)
- Memory: [`.ai/memory/`](../.ai/memory)
- Tasks/backlog: [`.claude/TASKS.md`](../.claude/TASKS.md),
  [`docs/governance/backlog.md`](../docs/governance/backlog.md)
