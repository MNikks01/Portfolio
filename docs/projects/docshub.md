# DocsHub

> Source of truth for the "DocsHub" entry in the `/building` hub (`BuildingNow.tsx`) + its `/building/[slug]` detail page (`ProjectDetail.tsx`). Content layer:
> `src/content/building.ts`. Product spec: DocsHub PRD.

| Field    | Value                          |
| -------- | ------------------------------ |
| Role     | Creator / Architect            |
| Duration | 2026 — Present                 |
| Status   | Building                       |
| Accent   | `#0EA5E9`                      |
| Category | Documentation & knowledge SaaS |

## Overview

DocsHub is a **documentation & knowledge SaaS** — a product, not a tutorial site.
It hosts structured documentation, setup guides, an AI-tools directory, and a
blog, with a calm, reading-first experience (GitHub Docs × MDN × Stripe Docs ×
Notion). Free users read online and download single pages; paid users download
whole categories, PDF bundles, and offline packages. Admins author and organize
all content.

## Problem

Quality technical knowledge is scattered across blogs, vendor docs, and tutorial
sites with inconsistent UX, ads, and poor offline/AI access. Readers want one
trustworthy, navigable, distraction-free place; practitioners want fast setup
guides + a current AI-tools directory; power users want downloads/offline; the
business wants sustainable revenue.

## Goals & non-goals

**Goals:** best-in-class reading UX; multi-content-type knowledge base; sustainable
freemium revenue; SEO + AI-search discoverability; efficient admin authoring.
**Non-goals (v1):** code playgrounds/IDE; user-generated public docs/wiki;
community Q&A; mobile native apps; multi-language (groundwork only).

## Content types

1. **Documentation** — sets (Docker, Kubernetes, Linux, Claude, Cursor, React,
   Next.js, AWS, Terraform, AI Engineering…) → categories → chapters → pages.
2. **Setup Guides** — standalone task guides (Install Docker, Setup Claude Code,
   Setup MCP…).
3. **AI Tools Directory** — name, description, category, website, pricing,
   free/paid, features, latest model, release date.
4. **Blog** — technical/opinion/review/AI-generated posts; categories, tags,
   comments, reactions, related posts, newsletter.

## Business model

- **Free:** ad-supported + newsletter (top-of-funnel, SEO/AI traffic).
- **Paid:** monthly subscription → full downloads, offline docs, premium content,
  ad-free.
- **Future:** annual plan, team/enterprise, partner API.

## Non-functional requirements

Performance (LCP < 2.5s, CLS < 0.1, INP < 200ms); WCAG 2.1 AA; light + dark; SEO +
AI discoverability; security (OWASP, RBAC, audit); availability ≥ 99.9% target;
≥ 80% test coverage; scalable stateless tier.

## Success metrics

Reading depth + return rate; search success rate; newsletter signups; organic +
AI-referral traffic; **free→paid conversion**; MRR + churn; content velocity; Core
Web Vitals; error rate.

## Constraints

Stack fixed (project tech-stack); AWS hosting; Stripe billing; English-first.

## Screenshots Location

`public/projects/docshub/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_
