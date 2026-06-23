# System Design Assistant

> Source of truth for the "System Design Assistant" entry in `BuildingNow.tsx`.
> Content layer: `src/content/building-now.ts`.

| Field    | Value               |
| -------- | ------------------- |
| Role     | Creator / Architect |
| Duration | 2026 — Present      |
| Status   | Building            |
| Accent   | `#F59E0B`           |
| Category | AI co-architect     |

## Overview

An **interactive AI co-architect** that produces diagrams, ADRs, and tradeoff
analysis **grounded in your actual codebase** (via the Codebase Intelligence
Platform) — not generic advice. It keeps persistent design memory and emits
diagram- and ADR-as-code. Two markets: enterprise architecture and interview prep.

## Problem

Diagramming tools (Eraser, Excalidraw + AI, Mermaid) don't reason about tradeoffs;
generic ChatGPT/Claude have no structure, persistence, or ADR workflow;
interview-prep platforms are static, not interactive co-architects.

## Differentiators

1. **Codebase-grounded design**, not generic.
2. **ADR / diagram-as-code output.**
3. **Persistent design memory.**
4. Dual market: **enterprise architecture + prosumer interview prep.**

## Competitive landscape

Eraser / Excalidraw + AI, Mermaid tools (diagramming only), generic LLMs (no
structure/persistence), interview-prep platforms (static content).

## Moat

Codebase grounding + persistent design memory; the ADR workflow becomes the
team's architectural record.

## Risks

Generic LLMs improve at design reasoning. Mitigation: lean on codebase grounding
and the persistent ADR/design-memory layer they lack.

## Role in the platform family

A **ContextOS module** for enterprise, plus a standalone prosumer interview-prep
product. Consumes Codebase Intelligence as its grounding source.

## Screenshots Location

`public/projects/system-design-assistant/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
