# Project Index

Master list of products/projects. When adding a project: create
`projects/<name>.md`, add a row here, then update the portfolio
(`Projects.tsx` / `CaseStudy.tsx`).

| Project                       | Role                          | Status     | Accent    | Doc                                  |
| ----------------------------- | ----------------------------- | ---------- | --------- | ------------------------------------ |
| ConnectEdApp                  | Founder & Full Stack Engineer | Launched   | `#EC4899` | [connectedapp.md](./connectedapp.md) |
| Revize Accessibility Platform | Senior Engineer               | Production | `#00D4FF` | [revize.md](./revize.md)             |
| Ignix UI                      | Creator / Architect           | Building   | `#8B5CF6` | [ignix-ui.md](./ignix-ui.md)         |

## Flagship

**ConnectEdApp** is the flagship case study (founder + full product ownership).
It gets a dedicated deep-dive section (`CaseStudy.tsx`); Revize and Ignix UI
appear in the "Products I've Built" grid (`Projects.tsx`).

## The "Building" family (`/building` route + detail pages)

The `/building` hub + `/building/[slug]` detail pages showcase a family of
AI-developer products united by **context as the connective layer** (MCP-native,
governed, observable), plus DocsHub (a knowledge SaaS). Each is backed by a real
GitHub repo. Source: `src/content/building.ts`; rendered by `BuildingNow.tsx`
(hub) and `ProjectDetail.tsx` (detail). See
[`../portfolio/homepage-content.md`](../portfolio/homepage-content.md).

| Project                   | Status   | Accent    | Repo                                                                               | Doc                                                        |
| ------------------------- | -------- | --------- | ---------------------------------------------------------------------------------- | ---------------------------------------------------------- |
| ContextOS                 | Building | `#8B5CF6` | [contextos](https://github.com/MNikks01/contextos)                                 | [contextos.md](./contextos.md)                             |
| Codebase Intelligence     | Building | `#00D4FF` | [codebase-intelligence](https://github.com/MNikks01/codebase-intelligence)         | [codebase-intelligence.md](./codebase-intelligence.md)     |
| MCP Server Generator      | Active   | `#EC4899` | [mcp-server-generator](https://github.com/MNikks01/mcp-server-generator)           | [mcp-server-generator.md](./mcp-server-generator.md)       |
| Agent Monitoring Platform | Building | `#22D3EE` | [agent-monitoring-platform](https://github.com/MNikks01/agent-monitoring-platform) | [agent-monitoring.md](./agent-monitoring.md)               |
| AI Project Bootstrapper   | Building | `#10B981` | [project-bootstrapper](https://github.com/MNikks01/project-bootstrapper)           | [ai-project-bootstrapper.md](./ai-project-bootstrapper.md) |
| System Design Assistant   | Building | `#F59E0B` | [system-design-assistant](https://github.com/MNikks01/system-design-assistant)     | [system-design-assistant.md](./system-design-assistant.md) |
| Agent Marketplace         | Planned  | `#3B82F6` | [agent-marketplace](https://github.com/MNikks01/agent-marketplace)                 | [agent-marketplace.md](./agent-marketplace.md)             |
| DocsHub                   | Building | `#0EA5E9` | [tutorials-web-app](https://github.com/MNikks01/tutorials-web-app)                 | [docshub.md](./docshub.md)                                 |

> **Platform thesis:** ContextOS is the hub; Codebase Intelligence is the
> substrate; Agent Monitoring is the reliability layer; the MCP Server Generator
> and AI Project Bootstrapper are top-of-funnel on-ramps; System Design Assistant
> is a grounded module; Agent Marketplace is the monetization flywheel (built
> last). DocsHub is an adjacent knowledge SaaS.
>
> _(The earlier AI Research Assistant concept was dropped — no repo backs it.)_
