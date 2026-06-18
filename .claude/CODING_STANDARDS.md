# Coding Standards (AI summary)

Authoritative version: [`/docs/architecture/standards.md`](../docs/architecture/standards.md).

## TypeScript

- Strict mode; **no `any`** (use `unknown` + narrowing).
- Typed props (`interface`/`type`); export shared types.
- `const` by default; `let` only when reassigned.

## React / Next

- One section component per file in `src/components/`.
- `"use client"` only when needed (hooks, motion, browser APIs).
- Reuse `SectionHeading`, `glass`/`glass-light`, the accent-glow pattern.
- Lazy-load heavy/client-only pieces (`next/dynamic`); keep error boundaries.

## Styling

- Tailwind only; inline `style` only for dynamic values (brand colors).
- **Semantic tokens only** (see [ARCHITECTURE.md](./ARCHITECTURE.md)).
- Responsive first (mobile → `md:`/`lg:`); no horizontal overflow.

## Accessibility

- Semantic elements; `aria-label` on icon-only controls; maintain contrast in
  both themes.

## Naming & files

- Components `PascalCase`; tests co-located as `*.test.ts(x)`.

## Tooling (must pass)

```bash
npm run format      # Prettier
npm run lint        # ESLint (next/core-web-vitals + prettier)
npm run typecheck   # tsc --noEmit
npm test            # Vitest
npm run build       # next build
```

Husky runs lint-staged on commit; CI runs the full gate.

## Forbidden

- Literal `white`/`zinc` color classes.
- Redesigning the visual identity.
- Committing secrets.
- `console.*` left in `src/`.
- Editing `/src` content without updating the matching `/docs` file.
