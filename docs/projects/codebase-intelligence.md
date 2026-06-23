# Codebase Intelligence Platform

> Source of truth for the "Codebase Intelligence" entry in the `/building` hub (`BuildingNow.tsx`) + its `/building/[slug]` detail page (`ProjectDetail.tsx`).
> Content layer: `src/content/building.ts`.

| Field    | Value                  |
| -------- | ---------------------- |
| Role     | Creator / Architect    |
| Duration | 2026 — Present         |
| Status   | Building               |
| Accent   | `#00D4FF`              |
| Category | Codebase understanding |

## Overview

A **team-grade, governed, API-first codebase brain** — cheaper and faster to
adopt than enterprise code-intelligence suites, but deeper than per-user editor
indexes. It answers questions about the codebase with citations, generates living
docs and architecture maps, runs impact/blast-radius analysis, and exposes all of
it as an MCP server any agent can query.

## Problem

Code understanding today is either heavy and enterprise-priced (complex setup) or
shallow and editor-bound (per-user, weak cross-repo reasoning). Teams lack a
shared, governed brain that improves as it's used.

## Differentiators

1. **AST-aware chunking + hybrid retrieval + re-ranking** for high answer fidelity
   with citations.
2. **Auto-generated living docs & architecture maps**.
3. **Impact / blast-radius analysis** for safe change.
4. **MCP server** so any agent can query the codebase.

## Competitive landscape

Sourcegraph/Cody (deep but heavy, enterprise-priced), Greptile / Bloop (narrower),
GitHub code search + Copilot (shallow, weak cross-repo), Cursor `@codebase`
(editor-bound, per-user). The gap: a shared platform between editor indexes and
enterprise suites.

## Moat

Quality of the code-understanding pipeline + indexed knowledge that compounds with
usage.

## Risks

Commoditization of code Q&A by incumbents. Mitigation: invest in the retrieval
pipeline quality and the docs/impact-analysis layers rivals under-build.

## Role in the platform family

The **substrate**. System Design Assistant grounds its designs in this index;
ContextOS surfaces it as a module.

## Screenshots Location

`public/projects/codebase-intelligence/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
