# Repo Map — agent orientation

A fast index of where everything lives.

## Source

| Path                                      | What                                              |
| ----------------------------------------- | ------------------------------------------------- |
| `src/app/layout.tsx`                      | Fonts, metadata, JSON-LD, no-flash theme script   |
| `src/app/page.tsx`                        | Section composition (order)                       |
| `src/app/globals.css`                     | Design tokens (`:root` dark, `.light`), utilities |
| `src/app/{sitemap,robots}.ts`             | SEO                                               |
| `src/components/*`                        | One component per section + shared pieces         |
| `src/components/three/TechSphere.tsx`     | R3F hero scene                                    |
| `src/components/three/CanvasBoundary.tsx` | WebGL failure isolation                           |
| `src/lib/utils.ts`                        | `cn()` + easing; `*.test.ts(x)` co-located        |
| `tailwind.config.ts`                      | Token → utility mapping, `light:` variant         |

## Sections (page.tsx order)

Hero · Marquee · FounderJourney · BusinessEngineering · Skills · SystemArchitect
· Experience · CaseStudy · Projects · BuildingNow · AISection · WhyWorkWithMe ·
Stats · Contact.

## Knowledge & governance

| Path                                            | What                                          |
| ----------------------------------------------- | --------------------------------------------- |
| `docs/README.md`                                | KB index + update contracts                   |
| `docs/profile,career,skills,projects,portfolio` | Canonical content                             |
| `docs/architecture/*`, `docs/ARCHITECTURE.md`   | Architecture, ADRs, standards                 |
| `docs/governance/*`                             | Checklist, tech-debt, backlog, roadmap, audit |

## AI OS

`.claude/` (instructions, agents, checklists, templates) · `.cursor/` (rules) ·
`.ai/` (this) · `mcp.json` · `llms.txt` · `.github/copilot-instructions.md`.

## Commands

`npm run dev | build | lint | typecheck | format | test`
