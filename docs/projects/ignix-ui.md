# Ignix UI

> Source of truth for the Ignix UI entry in `src/components/Projects.tsx` and
> `BuildingNow.tsx`.

| Field    | Value               |
| -------- | ------------------- |
| Role     | Creator / Architect |
| Duration | 2025 — Present      |
| Status   | Actively building   |
| Accent   | `#8B5CF6`           |

## Overview

An AI-native component registry. MCP-driven workflows install, customize, and
document components directly inside your editor.

## Problem

Component libraries are static and editor-disconnected; installing and adapting
components is manual and breaks flow.

## Solution

A registry exposed through the Model Context Protocol so an AI agent in the editor
can install, customize, and document components on demand — "AI-native" DX.

## Tech Stack

MCP · TypeScript · CLI Tooling · Component Registry · AI Integration

## Architecture

Editor → MCP server → Registry API → Codegen → Docs. The MCP layer is the bridge
between the AI agent and the component catalog.

## Challenges

- Designing an MCP interface that's ergonomic for agents.
- Keeping generated components consistent and high quality.
- Documentation that stays in sync with the registry.

## Achievements

- **60+** components.
- **5K+** installs.
- Demonstrates AI-native developer experience end-to-end.

## Lessons Learned

MCP turns a library into a tool an agent can wield — the interface design matters
as much as the components themselves.

## Screenshots Location

`public/projects/ignix-ui/` _(to be added)_

## Future Improvements

- More frameworks/targets.
- Theming presets.
- Usage analytics for the registry.
