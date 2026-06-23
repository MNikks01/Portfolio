# ContextOS

> Source of truth for the ContextOS entry in `BuildingNow.tsx`. Content layer:
> `src/content/building-now.ts`. Competitive landscape:
> `.claude` / project competitor-analysis.

| Field    | Value                  |
| -------- | ---------------------- |
| Role     | Creator / Architect    |
| Duration | 2026 — Present         |
| Status   | Building               |
| Accent   | `#8B5CF6`              |
| Category | AI developer workspace |

## Overview

ContextOS is the **persistent, governed context layer** for AI-assisted
engineering — the connective tissue that follows a team across editors (Cursor,
Windsurf), agents (Claude Code, Cline, Aider), and CI. Where IDEs forget between
sessions and knowledge bases aren't code-aware, ContextOS owns the institutional
memory and exposes it MCP-natively so any tool or teammate can inherit it
instantly.

## Problem

- **IDEs forget.** AI-native editors have great in-editor UX but no team-wide
  persistent context or governance.
- **Knowledge bases aren't in the dev loop.** Notion/Confluence own the docs but
  aren't code-aware.
- **Agents are per-user.** Claude Code / Cline / Aider are powerful but carry no
  shared team context layer or observability.

No one owns the context layer that spans **tools, sessions, and teammates**.

## Differentiators

1. **Tool-agnostic context** that follows the team across Cursor / Claude Code / CI.
2. **Governance + observability** for AI-assisted work.
3. **MCP-native integration hub**.
4. **Context handoff** — a new dev or agent inherits institutional memory instantly.

## Competitive landscape

Cursor / Windsurf (editor-bound), GitHub Copilot + Workspace (generic, thin
memory), Claude Code / Cline / Aider (per-developer), Notion / Confluence + AI
(not code-aware), Cognition/Devin (autonomy over context). None own the governed
cross-tool context layer.

## Moat

Accumulated org context + breadth of integrations + workflow lock-in — switching
cost grows with usage.

## Risks

An incumbent (GitHub / Cursor / Anthropic) ships the context layer natively.
Mitigation: move fast on integration breadth and governance depth; stay
tool-agnostic where incumbents are tool-bound.

## Role in the platform family

The **hub** of the product family. Codebase Intelligence, Agent Monitoring,
System Design Assistant, and AI Project Bootstrapper all ship as ContextOS
modules and standalone; Agent Marketplace rides its distribution.

## Screenshots Location

`public/projects/contextos/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
