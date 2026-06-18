# Engineering Principles

How this codebase is built and how changes should be made. Complements the
technical [../ARCHITECTURE.md](../ARCHITECTURE.md).

## Principles

1. **Docs are the source of truth.** Update `docs/` before `src/`. Content must
   not drift from the knowledge base.
2. **Presentation layer, not logic layer.** The portfolio renders content; it
   shouldn't own canonical data long-term (see backlog: content layer).
3. **Token-driven theming.** Never use literal `white`/`zinc` classes. Use
   `text-ink/fg/soft/muted/faint`, `bg-overlay/<a>`, `border-overlay/<a>`,
   `bg-bg-deep/panel`. Both themes must work.
4. **Consistent section pattern.** Every section: `<section id className="section-pad
relative overflow-hidden">` + `SectionHeading` + `motion`/`whileInView`.
5. **Degrade gracefully.** The 3D hero is isolated by `CanvasBoundary` and a
   `webglcontextlost` handler so failures never crash the page.
6. **Responsive & accessible by default.** No horizontal overflow; semantic HTML;
   ARIA where needed.
7. **Quality gates are non-negotiable.** Format, lint, typecheck, test, and build
   must pass before merge (enforced by Husky + CI).

## Definition of done

- `npm run format` · `npm run lint` · `npm run typecheck` · `npm test` ·
  `npm run build` all pass.
- Works in light and dark themes.
- Docs updated to match any content/behavior change.
