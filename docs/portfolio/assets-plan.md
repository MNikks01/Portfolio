# Portfolio Assets Plan

The visual assets the portfolio needs to look complete and credible — what to
capture/produce, the spec, and where each file lives. Today `public/` contains
only `resume.pdf`; everything below is **to be added**.

> **Priority callout — `public/og.png` is MISSING.** `src/app/layout.tsx`
> references `/og.png` in both the OpenGraph and Twitter-card metadata, but the
> file does not exist, so every shared link renders a broken preview. This is
> tracked as **TD-011 (P2)** in [../governance/technical-debt.md](../governance/technical-debt.md).

## Conventions

- **Location:** `public/og.png` (social) and `public/projects/<slug>/…` (per
  project), matching each project doc's "Screenshots Location".
- **Format:** PNG/WebP for screenshots, SVG for diagrams where possible.
- **Theme:** capture screenshots in **both dark and light** where it adds value;
  default to dark (the site's primary theme).
- **Aspect:** social card 1200×630; project hero shots 16:9; diagrams scalable.
- **Optimization:** compress; adopt `next/image` when these land (TD-011 / P3).

## Site-wide

| Asset                | Spec                   | Purpose                            | Status     |
| -------------------- | ---------------------- | ---------------------------------- | ---------- |
| `public/og.png`      | 1200×630 PNG           | OpenGraph + Twitter social preview | ❌ Missing |
| `public/favicon` set | 16/32/180 + `icon.svg` | Browser tab + Apple touch icon     | ❌ Missing |
| Hero capture (dark)  | 1440×900               | README / share / case-study header | ❌ Missing |
| Hero capture (light) | 1440×900               | Show the theme system              | ❌ Missing |

**`og.png` content suggestion:** name "Nikhil", the role line ("Senior Full
Stack Engineer"), the brand gradient, and a hint of the 3D sphere — generatable
at build time via the Next.js `opengraph-image` convention (`ImageResponse`) so
it stays in sync with `site.ts` and never goes stale.

## ConnectEdApp (`public/projects/connectedapp/`)

Flagship case study (`CaseStudy.tsx`). Source: [../projects/connectedapp.md](../projects/connectedapp.md).

| Asset                   | Type       | Shows                                                                    |
| ----------------------- | ---------- | ------------------------------------------------------------------------ |
| `app-announcements.png` | Screenshot | Parent mobile view — announcement feed + receipt                         |
| `app-academics.png`     | Screenshot | Attendance / results / homework per student                              |
| `dashboard-admin.png`   | Screenshot | School web dashboard — roster + broadcast                                |
| `playstore.png`         | Screenshot | Live Google Play Store listing (proof of launch)                         |
| `architecture.svg`      | Diagram    | RN app + React web → GraphQL/Express → Firebase / Cloudinary / Socket.IO |
| `journey.svg`           | Diagram    | idea → validation → design → build → launch → sales → iterate            |

## Revize Accessibility Platform (`public/projects/revize/`)

Architecture-focused (`Projects.tsx`). Source: [../projects/revize.md](../projects/revize.md).

| Asset                | Type       | Shows                                                                     |
| -------------------- | ---------- | ------------------------------------------------------------------------- |
| `architecture.svg`   | Diagram    | Client/CI → API gateway → RabbitMQ → Puppeteer workers → Postgres + Redis |
| `report.png`         | Screenshot | A CI-integrated accessibility report                                      |
| `grafana.png`        | Screenshot | Monitoring dashboard — queue depth, throughput, latency                   |
| `worker-scaling.svg` | Diagram    | Horizontal worker scaling off the queue                                   |
| `ci-pipeline.png`    | Screenshot | GitHub Actions pipeline (build → test → deploy)                           |

## Ignix UI (`public/projects/ignix-ui/`)

Actively building (`Projects.tsx`, `BuildingNow.tsx`). Source: [../projects/ignix-ui.md](../projects/ignix-ui.md).

| Asset                  | Type       | Shows                                                       |
| ---------------------- | ---------- | ----------------------------------------------------------- |
| `mcp-flow.svg`         | Diagram    | Editor (agent) → MCP server → Registry API → Codegen → Docs |
| `cli-add.png` / `.gif` | Screencap  | `ignix add <component>` adapting a component to a project   |
| `agent-install.gif`    | Screencap  | Agent installing/customizing a component in-editor via MCP  |
| `registry.png`         | Screenshot | The component catalog / registry browse view                |
| `generated-docs.png`   | Screenshot | Auto-generated component documentation                      |

## Suggested capture workflow

1. Produce `og.png` first (highest-impact, currently broken) — prefer the
   `opengraph-image` `ImageResponse` route over a static export.
2. Capture project screenshots at 2× (retina) then downscale; keep dark theme
   as the default, add light where it tells a story.
3. Author diagrams as SVG (Excalidraw/Figma export) so they stay crisp and small.
4. Drop files into the paths above; update each project doc's "Screenshots
   Location" from _(to be added)_ to a real reference; adopt `next/image`.
