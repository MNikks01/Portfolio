# Architecture (AI summary)

Full detail: [`/docs/ARCHITECTURE.md`](../docs/ARCHITECTURE.md) and
[`/docs/architecture/`](../docs/architecture). This is the agent-facing summary.

## Rendering

- Next.js **App Router**, statically prerendered. One route (`src/app/page.tsx`)
  composes section components top-to-bottom.
- `src/app/layout.tsx`: fonts (`next/font`), metadata, OpenGraph, JSON-LD, and a
  **no-flash theme script** that applies `.light` before paint.
- The WebGL hero is **client-only** (`next/dynamic`, `ssr: false`) and isolated by
  `CanvasBoundary` + a `webglcontextlost` handler so GL failures never crash the
  page.

## Design-token system (critical)

Colors are CSS variables defined once and mapped to Tailwind utilities — this is
what makes dark/light theming work without per-component overrides.

- Defined in `src/app/globals.css`: `:root` = dark (default), `.light` = light.
  Stored as RGB channels so alpha modifiers (`/50`) work.
- Mapped in `tailwind.config.ts`: `text-ink/fg/soft/muted/faint`,
  `bg-overlay/<a>`, `border-overlay/<a>`, `bg-bg-deep/panel`. Brand accents
  (`brand-blue/purple/cyan/emerald/pink`) are constant. Light-only tweaks use the
  `light:` variant.
- **Never** use literal `text-white`, `text-zinc-*`, `bg-white/x`,
  `border-white/x` — they break the light theme.

## Section pattern

```tsx
<section id="..." className="section-pad relative overflow-hidden">
  <div className="mx-auto max-w-6xl px-6">
    <SectionHeading eyebrow title description />
    {/* motion + whileInView reveals; glass cards; accent-glow blur */}
  </div>
</section>
```

## Decisions

Architecture Decision Records: [`/docs/architecture/architecture-decisions.md`](../docs/architecture/architecture-decisions.md)
and [`/.ai/decisions`](../.ai/decisions).
