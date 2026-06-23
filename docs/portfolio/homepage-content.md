# Site Content

Route map and copy for the multi-page portfolio (App Router, `src/app/*`). The
site was split out of a single long page so each area has its own URL.

## Route map

| Route              | Sections (components)                                                                             |
| ------------------ | ------------------------------------------------------------------------------------------------- |
| `/`                | Hero, Marquee, Explore teasers, Stats                                                             |
| `/about`           | Founder Journey, Business+Engineering mindset, System Architect, AI Engineering, Why Work With Me |
| `/skills`          | Skills (the tech stack)                                                                           |
| `/experience`      | Experience                                                                                        |
| `/startup`         | Case Study — ConnectEdApp (founder deep-dive)                                                     |
| `/work`            | Products I've Built grid (Revize, Ignix UI, …)                                                    |
| `/building`        | The "Building" family hub (8 AI products) + platform thesis                                       |
| `/building/[slug]` | Per-project detail page (rendered from `src/content/building.ts`)                                 |
| `/contact`         | Contact form (`#contact`)                                                                         |

Section docs: [hero-section.md](./hero-section.md),
[../career/founder-journey.md](../career/founder-journey.md),
[../skills/](../skills/), [../career/work-experience.md](../career/work-experience.md),
[../projects/connectedapp.md](../projects/connectedapp.md),
[../projects/project-index.md](../projects/project-index.md),
[../profile/achievements.md](../profile/achievements.md),
[contact-section.md](./contact-section.md).

## Building family (`/building` + detail pages)

A family of AI-developer products united by **context as the connective layer**
(MCP-native, governed, observable), plus a knowledge SaaS — each backed by a real
GitHub repo (see [../projects/project-index.md](../projects/project-index.md)):

ContextOS (AI developer workspace / context layer) · Codebase Intelligence
Platform (team-grade codebase brain) · MCP Server Generator (production-ready,
secure MCP servers) · Agent Monitoring Platform (agent-trajectory observability +
evals) · AI Project Bootstrapper (production- and agent-ready scaffolds) · System
Design Assistant (codebase-grounded AI co-architect) · Agent Marketplace (curated,
monetized agents + MCP servers) · DocsHub (reading-first documentation & knowledge
SaaS).

## Why Work With Me (value props)

Product Mindset · Founder Experience · Customer Understanding · Full Stack
Development · Backend Architecture · AI Engineering · DevOps · Business Background
· End-to-End Ownership · Fast Learning.

## Navigation

Journey (`#founder`) · Skills · Experience · Work (`#casestudy`) · Building
(`#now`) · Contact.
