# AGENTS.md

Instructions for AI coding agents (Claude Code, Cursor, etc.) working in this
repo. This is the tool-agnostic entry point; see [CLAUDE.md](./CLAUDE.md) for the
full project guide and [.agent/](./.agent) for working conventions.

## Quick reference

| Task       | Command             |
| ---------- | ------------------- |
| Dev server | `npm run dev`       |
| Build      | `npm run build`     |
| Lint       | `npm run lint`      |
| Type check | `npm run typecheck` |
| Format     | `npm run format`    |
| Test       | `npm test`          |

## Ground rules

1. **Don't redesign.** Preserve the visual identity, palette, typography,
   layout, and animation style.
2. **Use design tokens, not literal colors.** `text-ink/fg/soft/muted/faint`,
   `bg-overlay/<a>`, `border-overlay/<a>`, `bg-bg-deep/panel`. Both light and
   dark themes must keep working.
3. **Match existing patterns.** New sections use `SectionHeading`, `section-pad`,
   `glass` cards, and `motion` + `whileInView` reveals.
4. **Keep it responsive** and free of horizontal overflow.
5. **Verify before finishing:** run lint, typecheck, test, and build.

## Definition of done

- `npm run lint` ✓ `npm run typecheck` ✓ `npm test` ✓ `npm run build` ✓
- Prettier-formatted (`npm run format`)
- Works in both light and dark themes
