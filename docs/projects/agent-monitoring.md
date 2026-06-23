# Agent Monitoring Platform

> Source of truth for the "Agent Monitoring" entry in `BuildingNow.tsx`.
> Content layer: `src/content/building-now.ts`.

| Field    | Value               |
| -------- | ------------------- |
| Role     | Creator / Architect |
| Duration | 2026 — Present      |
| Status   | Building            |
| Accent   | `#22D3EE`           |
| Category | Agent observability |

## Overview

Observability built for **agent trajectories**, not just LLM calls. It traces
multi-step plans and tool-call graphs, classifies failures with a taxonomy, runs
an eval harness, and attributes cost per task and per agent — framework-agnostic
across LangGraph, CrewAI, the OpenAI SDK, and the Claude SDK. Ships as a ContextOS
module and standalone.

## Problem

Most tools are **LLM-call** observability; few are truly **agent-trajectory**
observability — multi-step plans, tool-call graphs, failure-mode taxonomy,
cost-per-task, and replay/debug.

## Differentiators

1. **Agent-trajectory tracing** + failure taxonomy.
2. **Eval harness** with accumulated datasets/benchmarks.
3. **Cost attribution** per task and per agent.
4. **Framework-agnostic** (LangGraph / CrewAI / OpenAI / Claude SDK).

## Competitive landscape

LangSmith (LangChain-tied, pricing), Langfuse (generalist LLM observability),
Arize/Phoenix (ML-heavy, enterprise), Helicone (proxy logging, light on traces),
Braintrust (eval-centric). Gap: true agent-trajectory observability.

## Moat

Breadth of integrations + the eval datasets/benchmarks accumulated over time.

## Risks

A well-funded observability player expands into the agent space. Mitigation: own
the agent-trajectory abstraction and benchmarks early.

## Role in the platform family

The **reliability layer**. Feeds ContextOS governance/observability and gives the
Agent Marketplace trust signals.

## Screenshots Location

`public/projects/agent-monitoring/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
