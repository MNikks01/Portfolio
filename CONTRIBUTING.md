# Contributing

Thanks for working on this project. These conventions keep the codebase
consistent and the design intact.

## Setup

```bash
npm install   # also wires up git hooks via husky
npm run dev
```

Node version is pinned in [`.nvmrc`](./.nvmrc) (`nvm use`).

## Workflow

1. Branch off `main`.
2. Make focused changes that follow the existing patterns.
3. Run the full local gate:
   ```bash
   npm run format
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```
4. Commit. Husky runs `lint-staged` (ESLint + Prettier) on staged files.
5. Open a PR — CI must pass (format, lint, types, tests, build).

## Code style

- **Prettier** is the source of truth for formatting (`.prettierrc.json`).
- **ESLint** uses Next's flat config + `eslint-config-prettier`.
- **TypeScript** strict; no `any` unless justified.

## Design rules (non-negotiable)

- Don't change the visual identity, palette, typography, layout, or animation
  language without explicit agreement.
- Use the semantic color tokens — never literal `white`/`zinc` classes — so the
  light and dark themes both work. See [docs/ARCHITECTURE.md](./docs/ARCHITECTURE.md).
- Every section must be responsive and free of horizontal overflow.

## Tests

- Co-locate tests as `*.test.ts(x)` next to the code they cover.
- Prefer testing behavior/output (Testing Library) over implementation details.
- Keep tests fast and deterministic (browser APIs are mocked in
  `vitest.setup.ts`).
