# MCP Server Generator

> Source of truth for the "MCP Server Generator" entry in the `/building` hub (`BuildingNow.tsx`) + its `/building/[slug]` detail page (`ProjectDetail.tsx`).
> Content layer: `src/content/building.ts`.

| Field    | Value               |
| -------- | ------------------- |
| Role     | Creator / Architect |
| Duration | 2026 — Present      |
| Status   | Active              |
| Accent   | `#EC4899`           |
| Category | MCP tooling         |

## Overview

Turn "I have an API / DB / GraphQL / codebase" into a **production-ready, secure,
observable MCP server** — not a toy. The generator scaffolds from OpenAPI,
Postgres, GraphQL, or a codebase with auth, rate limits, input validation,
prompt-injection-aware tool descriptions, and observability built in, plus
one-click deploy and a hosted option.

## Problem

Going from a data source to a safe MCP server is still manual and error-prone.
Official SDKs and boilerplate require hand-wiring; OpenAPI→tool converters are
generic and not MCP-idiomatic, with no hosting, auth, or observability.

## Differentiators

1. **Generate from OpenAPI / Postgres / GraphQL / codebase.**
2. **Security by default** — auth, rate limits, validation, injection-aware tool
   descriptions.
3. **Observability + one-click / hosted deploy.**
4. **Great tool _descriptions_** — the part LLMs need most, generated well.

## Competitive landscape

Official MCP SDKs + templates (authoritative but manual), hand-rolled boilerplate
(slow, inconsistent), OpenAPI→tool converters (generic, not idiomatic, no hosting),
emerging MCP registries (distribute existing servers, don't generate new ones).

## Moat

Template quality + hosting + becoming the default "how to make an MCP server"
workflow → top-of-funnel for the platform.

## Risks

Anthropic or a tooling vendor ships a first-party generator. Mitigation: win on
security/observability defaults and hosted DX.

## Role in the platform family

A **top-of-funnel** product and OSS primitive — servers it generates feed
ContextOS and list in the Agent Marketplace.

## Screenshots Location

`public/projects/mcp-server-generator/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
