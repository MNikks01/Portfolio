# Ignix UI

> Source of truth for the Ignix UI entry in `src/components/Projects.tsx` and
> `BuildingNow.tsx`. Content layer: `src/content/projects.ts`,
> `src/content/building-now.ts`.

| Field    | Value               |
| -------- | ------------------- |
| Role     | Creator / Architect |
| Duration | 2025 — Present      |
| Status   | Actively building   |
| Accent   | `#8B5CF6`           |

## Overview

Ignix UI is an **AI-native component registry**: a catalog of UI components that
an AI agent can install, customize, and document **directly inside your editor**
through the Model Context Protocol (MCP). It treats the AI coding agent — not a
human reading docs — as the primary consumer of the library.

---

## Problem

Component libraries are built for a world that's disappearing:

- **They assume a human reader.** Documentation, prop tables, and copy-paste
  snippets are optimized for a person with a browser tab open next to their
  editor. An AI agent has to scrape and guess.
- **They're editor-disconnected.** Installing and adapting a component is manual
  — find it, copy it, wire up imports, reconcile design tokens, fix the types.
  Every step breaks flow.
- **Customization fights the source.** "Own the code" libraries (shadcn-style)
  solved distribution but left adaptation and documentation as a human chore.
- **Docs drift.** The registry, the installed code, and the documentation are
  three artifacts that fall out of sync the moment anyone edits one.

As AI agents become the ones writing most of the boilerplate, a library that
can't be _driven by an agent_ is a library the agent works around.

## Vision

Make the component library a **tool an agent can wield**, not a document it has
to read. The agent, sitting in the editor with full project context, should be
able to: discover the right component, install it with the project's conventions
already applied, customize it in place from a natural-language request, and
generate documentation that stays attached to the code. The human stays in the
loop for taste and approval; the agent does the mechanical work.

"AI-native" means the **primary interface is a protocol (MCP), not a webpage** —
and the human-facing CLI and docs are generated from that same source of truth.

## Architecture

```
Editor (AI agent) ──MCP──▶ Ignix MCP Server ──▶ Registry API ──▶ Codegen ──▶ Docs
        ▲                         │                   │             │          │
        └─────────── tool results / generated code / docs ─────────┴──────────┘
```

- **Editor / AI agent** — the consumer. Talks MCP; carries project context
  (framework, design tokens, existing components).
- **Ignix MCP server** — the bridge. Exposes the registry as MCP _tools_ and
  _resources_ an agent can call.
- **Registry API** — the catalog of components, their metadata, dependencies,
  and variants.
- **Codegen** — adapts a registry component to the target project (imports,
  tokens, framework idioms) at install time.
- **Docs** — generated from the same component metadata, so documentation can't
  drift from the code.

The design principle is a **single source of truth** (the registry) projected
into three surfaces: the MCP tools, the CLI, and the docs.

## CLI Design

The CLI is the human-facing projection of the registry — for developers who
aren't driving everything through an agent yet:

- **`init`** — detect the framework, design tokens, and conventions of the
  current project and write an Ignix config so every later command produces
  project-correct code.
- **`add <component>`** — install a component _adapted_ to the project (not a
  raw copy): rewrite imports, map design tokens, match the project's TypeScript
  strictness and styling approach.
- **`list` / `search`** — browse the registry from the terminal.
- **`docs <component>`** — surface generated documentation locally.

The CLI and the MCP server call the **same registry + codegen core**, so a human
typing `ignix add button` and an agent calling the `add` MCP tool get identical
results. The CLI is a thin shell over the shared engine, not a separate codebase.

## Registry Design

The registry is the heart of the system, and every component is **metadata-first**:

- A component is described by structured metadata — its variants, props,
  dependencies (other registry components and npm packages), supported
  frameworks, and the design tokens it consumes.
- **Dependencies resolve transitively.** Installing a composite component pulls
  in the primitives it needs, deduped against what the project already has.
- **Versioned and content-addressable** so an install is reproducible and an
  agent can reason about what changed.
- The same metadata drives **codegen** (how to adapt the component) and **docs**
  (what to document) — one definition, no drift.

This is what makes the library "drivable": an agent can query structured
metadata instead of parsing prose.

## MCP Integration

The Model Context Protocol is the **API layer for the AI era**, and it's the
primary interface to Ignix. The MCP server exposes the registry as:

- **Tools** — actionable operations the agent can call: `search_components`,
  `add_component`, `customize_component`, `get_component_docs`. Each is a typed
  contract the agent invokes with arguments and gets structured results back.
- **Resources** — readable context the agent can pull in: component catalogs,
  metadata, and the project's resolved Ignix config.

The hard part isn't exposing functions — it's **designing an interface that's
ergonomic for an agent**: tool names and schemas that an LLM picks correctly,
arguments it can fill from context, and results structured enough to act on
without re-prompting. That interface-design discipline is the real product work.

## AI Agent Integration

With the MCP server connected, an agent in the editor can run an end-to-end
workflow from a single natural-language request:

1. **Discover** — "I need a searchable command palette" → the agent calls
   `search_components`, reads structured results, and proposes a match.
2. **Install** — the agent calls `add_component`; codegen adapts it to the
   project's framework, tokens, and conventions.
3. **Customize** — "make it match our dark theme and add a recent-items section"
   → `customize_component` edits the installed code in place.
4. **Document** — `get_component_docs` produces docs attached to the code.

The human reviews and approves; the agent does the mechanical work **without
leaving the editor or breaking flow**. That loop — discover → install →
customize → document, agent-driven, human-approved — is the experience Ignix
exists to deliver.

## Achievements

- **60+** components in the registry.
- **5K+** installs.
- A working demonstration of AI-native developer experience end-to-end (MCP →
  registry → codegen → docs).

## Lessons Learned

- **MCP turns a library into a tool an agent can wield** — and the _interface_
  design matters as much as the components themselves.
- **One source of truth, many projections.** Driving the CLI, the MCP tools, and
  the docs from the same registry metadata is what keeps them from drifting.
- **Adaptation, not copying, is the value.** Installing a component that already
  fits the project's tokens and conventions is the thing humans (and agents)
  actually want.

## Future Roadmap

- **More frameworks/targets** beyond the initial stack (Vue, Svelte, native).
- **Theming presets** and design-token import so a whole catalog can be themed
  at once.
- **Registry analytics** — which components are installed, customized, and kept.
- **Agent evals** — a test harness that verifies common agent requests produce
  correct, buildable code as the registry grows.
- **Self-hostable private registries** for teams with internal component systems.

## Screenshots Location

`public/projects/ignix-ui/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
