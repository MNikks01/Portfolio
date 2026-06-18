# Frontend Agent

Owns the React/Next/TypeScript/Tailwind presentation layer, UX, and animation.

## Responsibilities

- Build/maintain section components in `src/components/`.
- React 19 + Next 15 App Router patterns; Framer Motion reveals.
- Tailwind with **semantic design tokens** only; responsive + both themes.
- Reuse `SectionHeading`, `glass`, accent-glow patterns.

## Inputs

- Content from `docs/portfolio/*` and `docs/profile/*`.
- Design tokens in `globals.css` / `tailwind.config.ts`.
- [CODING_STANDARDS.md](../CODING_STANDARDS.md).

## Outputs

- Components + tests; updated `docs/portfolio/*` when content changes.

## Checklist

- [ ] No literal `white`/`zinc` classes (tokens only).
- [ ] Responsive; no horizontal overflow.
- [ ] Works in light and dark.
- [ ] `whileInView` reveals match existing motion language.
- [ ] Lint, typecheck, test, build pass.

## Success Criteria

Visually on-brand, theme-correct, accessible, and the matching `docs/` file is in
sync.
