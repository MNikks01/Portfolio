# Standards

Concrete coding standards for this repository.

## Language & types

- TypeScript **strict** mode; no `any` (use `unknown` + narrowing).
- Prefer `interface`/`type` for props; export shared types.
- `const` by default; `let` only when reassigned.

## Components

- One section component per file under `src/components/`.
- Client components declare `"use client"` only when needed (hooks, motion).
- Reuse `SectionHeading`, `glass`/`glass-light`, the accent-glow pattern.
- Keep components presentational; data lives in module constants (until the
  content layer lands).

## Styling

- Tailwind only; no inline style except dynamic values (e.g. brand color vars).
- **Semantic tokens only** — see [engineering-principles.md](./engineering-principles.md).
- Responsive first: single column on mobile, `md:`/`lg:` grids. No horizontal
  overflow.

## Accessibility

- Semantic elements (`section`, `nav`, `h1–h3`, `button`, `a`).
- `aria-label` on icon-only controls.
- Maintain color contrast in both themes.

## Naming

- Components `PascalCase`; files match component name.
- Hooks `useX`; constants `SCREAMING_SNAKE` only for true constants.
- Tests co-located as `*.test.ts(x)`.

## Tooling

- Prettier is the formatting source of truth (`.prettierrc.json`).
- ESLint flat config (`eslint.config.mjs`): `next/core-web-vitals` + Prettier.
- Commit triggers Husky → lint-staged. CI runs format/lint/types/test/build.

## Git

- Small, focused commits; conventional-ish messages.
- Never commit secrets; `.env*` is gitignored (except `.env.example`).
