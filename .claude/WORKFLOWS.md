# Workflows

Reusable procedures for AI agents. Update contracts mirror
[`/docs/README.md`](../docs/README.md).

## Content update contracts

| Request                    | Steps                                                                                                                               |
| -------------------------- | ----------------------------------------------------------------------------------------------------------------------------------- |
| **Update my skills**       | 1) Edit `docs/skills/*.md` · 2) Update `src/components/Skills.tsx` · 3) Update `docs/governance/audit-report.md` if quality changed |
| **Add a project**          | 1) Create `docs/projects/<name>.md` · 2) Update `docs/projects/project-index.md` · 3) Update `Projects.tsx` / `CaseStudy.tsx`       |
| **Update experience**      | 1) Edit `docs/career/work-experience.md` + `timeline.md` · 2) Update `Experience.tsx`                                               |
| **Update contact/profile** | 1) Edit `docs/profile/*` · 2) Update `Contact.tsx` / `Footer.tsx` / `layout.tsx` metadata                                           |

## Feature Development Workflow

1. **Analyze** — read relevant component + `docs/` + standards.
2. **Design** — pick the pattern; note any ADR-worthy decision.
3. **Implement** — follow [CODING_STANDARDS.md](./CODING_STANDARDS.md).
4. **Test** — add/extend Vitest; ensure green.
5. **Audit** — run the production checklist; log debt/backlog if any.
6. **Document** — update `/docs` + ADR + memory.

Templates: [TEMPLATES/feature-template.md](./TEMPLATES/feature-template.md).

## Production Audit Workflow

1. Security review → [CHECKLISTS/security.md](./CHECKLISTS/security.md)
2. Accessibility review → [CHECKLISTS/accessibility.md](./CHECKLISTS/accessibility.md)
3. Performance review → [CHECKLISTS/performance.md](./CHECKLISTS/performance.md)
4. SEO review → see [AGENTS/seo-agent.md](./AGENTS/seo-agent.md)
5. Documentation review → ensure `/docs` matches `/src`
6. Update `docs/governance/*` and append to `audit-report.md`.

## Self-improvement

Whenever code changes, agents must:

1. Detect issues (debt, missing best practice, security/a11y/perf gaps).
2. Add/adjust items in `docs/governance/technical-debt.md` and `backlog.md`
   (P1/P2/P3) and reflect in `roadmap.md`.
3. Update `docs/governance/production-checklist.md` (✅/⚠️/❌).
4. Append an entry to `docs/governance/audit-report.md` for non-trivial passes.

## Definition of done

Quality gate passes · works in both themes · `/docs` synced · governance updated.
