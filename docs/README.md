# Knowledge Base & Engineering Governance

This `docs/` directory is the **canonical source of truth** for Nikhil's career,
portfolio content, and the engineering quality of this repository. It is written
for both humans and AI assistants (Claude, Cursor, ChatGPT).

> **Golden rule:** Update `docs/` **first**, then update the portfolio
> presentation layer (`src/`). Portfolio content must never drift away from these
> documents.

## Structure

```
docs/
├── profile/        Who Nikhil is — personal, contact, bio, achievements
├── career/         Work experience, founder journey, timeline
├── skills/         Skills by category (frontend, backend, databases, …)
├── projects/       Per-project case studies + index
├── portfolio/      The content rendered on each portfolio section
├── architecture/   Engineering principles, ADRs, standards
└── governance/     Checklist, tech-debt, backlog, roadmap, audit, scorecard,
                    maturity report
```

There is also a top-level [ARCHITECTURE.md](./ARCHITECTURE.md) describing the
technical architecture of the site itself.

## How to update (for AI assistants)

These workflows are the contract. Follow them exactly.

| Request                 | Do this                                                                                                                                                                                           |
| ----------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| **"Update my skills"**  | 1) Update `skills/*.md` · 2) Update the affected portfolio section (`src/components/Skills.tsx`) · 3) Update `governance/audit-report.md` if quality changed                                      |
| **"Add a project"**     | 1) Create `projects/<name>.md` · 2) Update `projects/project-index.md` · 3) Update `src/components/Projects.tsx` / `CaseStudy.tsx` references                                                     |
| **"Update experience"** | 1) Update `career/work-experience.md` + `career/timeline.md` · 2) Update `src/components/Experience.tsx`                                                                                          |
| **"Review codebase"**   | 1) Audit the repo · 2) Update `governance/production-checklist.md` · 3) Update `technical-debt.md` · 4) Update `backlog.md` · 5) Update `roadmap.md` · 6) Append a new entry to `audit-report.md` |

## Source-of-truth mapping (docs → portfolio)

| Portfolio component          | Sourced from                                       |
| ---------------------------- | -------------------------------------------------- |
| `Hero.tsx`                   | `portfolio/hero-section.md`, `profile/personal.md` |
| `FounderJourney.tsx`         | `career/founder-journey.md`                        |
| `Skills.tsx`                 | `skills/*.md`                                      |
| `Experience.tsx`             | `career/work-experience.md`                        |
| `CaseStudy.tsx`              | `projects/connectedapp.md`                         |
| `Projects.tsx`               | `projects/*.md`, `projects/project-index.md`       |
| `Stats.tsx`                  | `profile/achievements.md`                          |
| `Contact.tsx` / `Footer.tsx` | `profile/contact.md`                               |

> The portfolio no longer hardcodes content in components. Each section reads
> from a typed module in [`src/content/*`](../src/content) (and shared
> identity/contact from `src/content/site.ts`); see ADR-007. The content layer
> is still **hand-synced** with these docs, so the contract stands: update the
> relevant `docs/` file first, then mirror it in the matching `src/content/*`
> module (the component JSX rarely needs to change). A generator/parity-test to
> remove the manual sync is a P3 backlog item.

## Conventions

- One topic per file. Keep headings stable so diffs are clean.
- Use the structured field formats defined in each subsection's files.
- Dates are absolute (e.g. `2026-06`), never relative.
- Mark governance items as ✅ Completed · ⚠️ Partial · ❌ Missing.
