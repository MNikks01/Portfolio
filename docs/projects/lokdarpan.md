# LokDarpan (लोकदर्पण)

> Source of truth for the LokDarpan entry in `src/components/Projects.tsx`.
> Content layer: `src/content/projects.ts`.

| Field    | Value                                                   |
| -------- | ------------------------------------------------------- |
| Role     | Founder & Architect                                     |
| Duration | 2026 — Present                                          |
| Status   | Building (specification-complete, early implementation) |
| Accent   | `#F97316`                                               |
| Repo     | https://github.com/MNikks01/LokDarpan                   |

## Overview

LokDarpan is a **public-finance, governance, and infrastructure intelligence
platform for India**, built entirely on official government records. It links
official data into one traceable ledger — revenue → budget → ministry → state →
district → local body → department → scheme → tender → contractor → release →
expenditure → work progress → completion → audit — and runs
mathematical-consistency and variance checks over the chain. It is my most
ambitious build to date: not in lines shipped yet, but in scope, rigor, and the
discipline the domain demands.

It is explicitly **not** an anti-corruption or accusation engine, a legal
authority, or a source of allegations. It is a transparency tool, a
mathematical-consistency checker over official records, and an anomaly
_highlighter_ with full source traceability — every figure is traceable to an
official source, and every observation is a neutral, factual statement.

## Problem

- Public-finance and infrastructure data in India is scattered across dozens of
  government portals, in incompatible formats, with no way to trace a rupee from
  the budget line that allocated it to the completed (or incomplete) work on the
  ground.
- Existing dashboards summarize a single source in isolation; nothing links
  revenue → budget → scheme → tender → expenditure → completion into one
  auditable chain, or checks whether the numbers along that chain are internally
  consistent.
- Any tool in this space has to be provably neutral: a mislabeled "anomaly" can
  read as an accusation, so the platform's credibility depends on discipline
  most dashboards never have to build.

## What it is

A pnpm/Turborepo-style monorepo, organized around a strict separation of
concerns:

- **`apps/web`** — the Next.js public site (the first product; the mobile app
  follows after launch).
- **`services/`** — ingestion, normalization, entity-resolution, analytics, a
  risk engine, an AI layer, and the public API.
- **`packages/`** — `money` (exact-precision ledger arithmetic), `neutrality`
  (a compile-time-enforced neutral-language gate), `contracts`, `domain`,
  `config`, `database`, `observability`, and `errors`.
- **`database/`** — versioned, immutable migrations and seeds against
  Postgres + PostGIS.
- **`.docs/`** — 110 specification documents; the product and engineering
  source of truth, written before implementation began.

## Key features

1. **A traceable public-finance ledger** — every rupee is linked from revenue
   and budget through to completed (or incomplete) work, sourced from 99
   government registries (96 verified).
2. **Mathematical-consistency and variance checks** — the platform runs
   arithmetic and consistency checks across the ledger chain rather than
   summarizing any one source in isolation.
3. **Money as `bigint` paise, never a float** — a national multi-year aggregate
   exceeds `Number.MAX_SAFE_INTEGER`; the `money` package makes silent precision
   loss structurally impossible.
4. **Provenance-enforced rendering** — a `<Figure>` component cannot render a
   number without a `provenance` prop; it's a compile error, not a review note.
5. **Neutrality enforced in the type system** — observation text is typed as
   `ServerText` and can only originate from the API, so neutral copy cannot be
   authored inside a component; a language gate (`pnpm neutrality`) blocks
   release on a forbidden-language hit, including Hindi and Marathi vocabulary.
6. **Two-privilege-level database access** — ETL/migrations connect as the
   ledger's sole write path; the API connects as a read-only user and verifies
   this at startup, exiting immediately if its credentials can write.

## Tech stack

TypeScript (primary) · Next.js · PostgreSQL + PostGIS · Redis · PL/pgSQL ·
Docker · Kubernetes · Terraform · pnpm workspaces · Vitest · GitHub Actions.
Apache-2.0 licensed.

## Differentiators

1. Built on a **traceable ledger chain**, not isolated dashboards — every figure
   connects back through the full revenue-to-completion path.
2. **Specification-first discipline**: 110 documents and binding legal/ethical
   rules were written before a line of ingestion code, because a factual error
   at this scope is a credibility failure, not a bug.
3. **Neutrality and provenance enforced by the compiler**, not by policy — the
   type system and a CI language gate make the platform's core promise ("every
   figure sourced, every observation neutral") structurally true.
4. Deliberately scoped as a **public-interest project**, independent of any
   government body, agency, or political party.

## Status

Specification-complete; implementation just begun. `apps/web` builds with 38
passing tests on fixture data only — **no real government data is ingested
yet**. `services/*` and the production database are not yet implemented. This
is the current, honest state of the most ambitious system I've designed: the
hardest parts (the ledger model, the neutrality/provenance guarantees, and 99
verified government sources) are specified and being built toward.

## Role in the portfolio

Shown in the "Products I've Built" grid (`Projects.tsx`) as the most ambitious
project in scope and rigor — distinct from the AI-developer "Building" family
(`/building`), since LokDarpan is a public-interest civic-data platform, not an
AI-developer tool.
