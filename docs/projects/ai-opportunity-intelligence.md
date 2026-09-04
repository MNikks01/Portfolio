# AI Opportunity Intelligence Platform

> Source of truth for the AI Opportunity Intelligence Platform entry in the
> `/building` hub (`BuildingNow.tsx`, rendered as a standalone card — LokDarpan
> holds the featured flagship slot) + its `/building/[slug]` detail page
> (`ProjectDetail.tsx`). Content layer: `src/content/building.ts` (slug:
> `ai-opportunity-intelligence`).

| Field    | Value                                                            |
| -------- | ---------------------------------------------------------------- |
| Role     | Creator / Architect                                              |
| Duration | 2026 — Present                                                   |
| Status   | Active (feature-complete, released, running end-to-end)          |
| Accent   | `#A855F7`                                                        |
| Category | Autonomous market intelligence                                   |
| Repo     | https://github.com/MNikks01/AI-Opportunity-Intellegence-Platform |

## Overview

The **AI Opportunity Intelligence Platform** is an autonomous intelligence system
that monitors the entire AI ecosystem continuously and converts raw signals into
**validated trends with structured opportunity assessments and actionable
recommendations**. It is a standalone, feature-complete product: a six-service
monorepo that ingests, dedupes, clusters, scores, embeds, and delivers — a
decision layer, not a news aggregator.

Tagline: _"Discover AI trends before everyone else. Validate the opportunity.
Build faster."_

## Problem

- **Information overload.** AI moves faster than any human can track; the signal
  that matters is buried under hype.
- **Aggregators surface volume, not judgement.** Nothing scores opportunities
  consistently, attaches an executable plan, or does it continuously across the
  whole ecosystem at once.
- By the time an opportunity is obvious, it is already crowded — builders need to
  see viable openings early, and know _why_ they're viable.

## What it is

An autonomous pipeline — **ingest → dedupe → cluster → score → embed →
deliver** — with six connectors (Hacker News, GitHub, Hugging Face, Reddit,
Product Hunt, YouTube) feeding a continuous BullMQ scheduler. Every emerging
trend is scored on a consistent 10-dimension rubric and delivered as scorecards,
action plans, watchlist alerts, and daily briefs.

Monorepo structure: `apps/` (web, admin, marketing, docs), `services/` (api,
ai-service, ingestion, scheduler, notifications), `packages/` (ui, sdk, database,
auth, billing, email, cache), `infra/` (Docker compose), `docs/`.

## Key features

1. **10-dimension trend scorecards** — business, developer, and creator value,
   SEO, monetization, competition, risk, difficulty, and predicted lifetime.
2. **Executable action plans** — keywords, product names, target audiences,
   pricing, and suggested tech stacks per opportunity.
3. **Autonomous ingest pipeline** — six connectors on a continuous BullMQ
   scheduler, no human in the loop.
4. **Dual keyword + semantic search** — PostgreSQL full-text plus pgvector cosine
   similarity.
5. **Watchlist alerts & daily briefs** — threshold-based firing and per-org email
   digests.
6. **Multi-tenant SaaS, secure by default** — Clerk auth, RBAC, Postgres
   row-level security, GDPR compliance, and Stripe-powered Free/Pro billing.

## Tech stack

TypeScript (primary) · Python · Next.js (App Router / RSC) · Fastify · tRPC ·
Prisma · PostgreSQL + pgvector · Redis / BullMQ · LiteLLM gateway · Clerk ·
Stripe · Turborepo + pnpm. Deployed on Vercel + Fly.io. Custom Claude skills in
`.claude/skills/`.

## Differentiators

1. A **decision layer, not a feed** — it scores and validates opportunities
   instead of just listing links.
2. **Fully autonomous and continuous** — six connectors, a 24/7 pipeline, no
   manual curation.
3. Every trend carries an **objective 10-dimension score** and a concrete,
   buildable **action plan**.
4. Architected as a real, feature-complete, multi-service product with **200
   passing tests**, running green end-to-end.

## Status

Feature-complete, released, and running end-to-end with 200 passing tests. Runs
green without external keys; real integrations activate via configuration.

## Role in the portfolio

A standalone, end-to-end autonomous product and one of the largest systems
architected to date — shown as a regular card in the `/building` hub, alongside
the ContextOS AI-developer product family. LokDarpan (public-finance and
governance intelligence) now holds the featured flagship slot at the top of the
hub as the most ambitious build to date, in scope and rigor.
