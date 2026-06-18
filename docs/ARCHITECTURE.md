# Architecture

A concise map of how the site is built. For commands and conventions see
[CLAUDE.md](../CLAUDE.md) and [CONTRIBUTING.md](../CONTRIBUTING.md).

## Rendering model

- **Next.js App Router**, statically prerendered. The home page is a single
  route (`src/app/page.tsx`) that composes section components top to bottom.
- `src/app/layout.tsx` sets fonts (`next/font`), metadata, OpenGraph, JSON-LD
  Person schema, and injects a small **no-flash theme script** in `<head>` that
  applies the `light` class before paint.
- The WebGL hero is **client-only** (`next/dynamic`, `ssr: false`) and isolated
  by `CanvasBoundary` so a GL failure renders a fallback glow instead of
  crashing the page.

## Design-token system

Colors are defined once as CSS variables and consumed through Tailwind. This is
what makes dark/light theming work without per-component overrides.

- **Definition** — `src/app/globals.css`:
  - `:root` holds the **dark** theme (default).
  - `.light` overrides the same variables for the **light** theme.
  - Variables are stored as space-separated RGB channels (e.g.
    `--ink: 255 255 255`) so Tailwind alpha modifiers (`/50`) keep working.
- **Mapping** — `tailwind.config.ts` maps tokens to color utilities:

  | Token        | Tailwind class          | Meaning                      |
  | ------------ | ----------------------- | ---------------------------- |
  | `--ink`      | `text-ink`              | strongest text / headings    |
  | `--base`     | `text-fg`               | body text                    |
  | `--soft`     | `text-soft`             | secondary text               |
  | `--muted`    | `text-muted`            | muted text                   |
  | `--faint`    | `text-faint`            | labels / captions            |
  | `--overlay`  | `bg/border-overlay/<a>` | surfaces & hairlines (flips) |
  | `--bg`       | `bg-bg-deep`            | page background              |
  | `--bg-panel` | `bg-bg-panel`           | panel background             |

- **Brand accents** (`brand-blue/purple/cyan/emerald/pink`) are constant across
  themes.
- **Light-only adjustments** use the custom `light:` Tailwind variant
  (registered via a plugin in `tailwind.config.ts`) — e.g. brighter ambient
  orbs and card shadows.

> Rule: never use literal `text-white`, `text-zinc-*`, `bg-white/x`, or
> `border-white/x`. They break the light theme.

## Section model

Each content section is a self-contained client component under
`src/components/` following the same shape:

```tsx
<section id="..." className="section-pad relative overflow-hidden">
  <div className="mx-auto max-w-6xl px-6">
    <SectionHeading eyebrow="…" title={…} description="…" />
    {/* motion + whileInView reveals, glass cards, accent glows */}
  </div>
</section>
```

Shared building blocks: `SectionHeading`, the `glass` / `glass-light`
utilities, `section-pad` spacing, and the accent-glow blur pattern.

## Motion & interaction

- **Framer Motion** for entrance/scroll reveals (`whileInView`), the hero
  headline, and micro-interactions.
- **Lenis** provides smooth scroll (`SmoothScroll` provider).
- A custom cursor and canvas backgrounds (`ParticleBackground`,
  `GridBackground`) are decorative and respect `prefers-reduced-motion` where
  relevant. The custom cursor is desktop-only (`pointer: fine`).

## Quality tooling

- **Vitest + Testing Library** (jsdom) — tests co-located as `*.test.ts(x)`.
- **ESLint** (Next flat config + Prettier) and **Prettier**.
- **Husky** + **lint-staged** pre-commit; **GitHub Actions** CI runs
  format/lint/types/test/build.
