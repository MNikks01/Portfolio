# .agent

Working conventions for AI agents and contributors on this project. Pairs with
the top-level [AGENTS.md](../AGENTS.md) and [CLAUDE.md](../CLAUDE.md).

## Workflow

1. **Understand before editing.** Read the relevant section component and the
   design tokens in `src/app/globals.css` / `tailwind.config.ts` first.
2. **Make the change** following the existing patterns (see conventions below).
3. **Verify locally:**
   ```bash
   npm run format
   npm run lint
   npm run typecheck
   npm test
   npm run build
   ```
4. **Commit** — `husky` + `lint-staged` will auto-format and lint staged files.

## Design tokens (do not bypass)

| Purpose            | Use                                        |
| ------------------ | ------------------------------------------ |
| Strong text        | `text-ink`                                 |
| Body text          | `text-fg` / `text-soft`                    |
| Muted / labels     | `text-muted` / `text-faint`                |
| Surfaces & borders | `bg-overlay/<a>` / `border-overlay/<a>`    |
| Page / panel       | `bg-bg-deep` / `bg-bg-panel`               |
| Brand accents      | `brand-blue` `brand-purple` `brand-cyan` … |
| Light-only tweaks  | `light:` variant                           |

These flip automatically between the dark (default) and `.light` themes. Literal
`white`/`zinc` classes break light mode and must not be used.

## Adding a section

1. Create `src/components/MySection.tsx` (client component).
2. Wrap content in `<section id="..." className="section-pad relative overflow-hidden">`.
3. Use `<SectionHeading eyebrow title description />` and `motion` + `whileInView`.
4. Import and place it in `src/app/page.tsx`.
5. Add a nav link in `src/components/Navigation.tsx` if it's a primary section.

## Guardrails

- No redesign — keep the existing identity and animation language.
- Keep the `CanvasBoundary` and `webglcontextlost` handler around the 3D hero.
- Everything must be responsive and theme-aware.
