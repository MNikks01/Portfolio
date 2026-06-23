# AI Research Assistant

> Source of truth for the "AI Research Assistant" entry in `BuildingNow.tsx`.
> Content layer: `src/content/building-now.ts`.
> **Draft — details to be confirmed by Nikhil** (description was inferred from the
> agentic-research framing, not a provided spec).

| Field    | Value               |
| -------- | ------------------- |
| Role     | Creator / Architect |
| Duration | 2026 — Present      |
| Status   | Building            |
| Accent   | `#A855F7`           |
| Category | Research agent      |

## Overview

An **agentic research assistant** that plans queries, searches across sources, and
synthesizes structured, cited reports — autonomous deep research you can trust and
trace. Every claim is grounded in a source, and the full research trajectory
(queries, sources, ranking, synthesis) is inspectable.

## Problem

Manual research is slow and lossy; generic chat assistants hallucinate, don't cite,
and don't persist a traceable trail. Practitioners need synthesis they can verify
and reuse, not a confident paragraph with no provenance.

## Differentiators

1. **Plans and executes multi-step research** autonomously.
2. **Cited, structured output** — every claim traceable to a source.
3. **Inspectable trajectory** — queries, sources, ranking, synthesis are auditable.

## Open questions (to confirm)

- **Domain focus:** general web research vs. literature/academic vs. market vs.
  codebase research?
- **Standalone product or ContextOS module** (could consume Codebase Intelligence
  for code-grounded research and reuse Agent Monitoring for trajectory tracing)?
- **Output formats** and integrations (export, newsletter, API)?

## Role in the platform family

Likely reuses **Agent Monitoring** for trajectory observability and could ground
on **Codebase Intelligence** for engineering research — pending the decisions above.

## Screenshots Location

`public/projects/ai-research-assistant/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
