# Workflow — Production Audit

Trigger: "Review codebase" / before a release / periodically.

1. **Security review** — `.claude/CHECKLISTS/security.md` (CSP, headers, secrets,
   validation, `npm audit`).
2. **Accessibility review** — `.claude/CHECKLISTS/accessibility.md` (semantics,
   keyboard, ARIA, contrast).
3. **Performance review** — `.claude/CHECKLISTS/performance.md` (Lighthouse,
   bundle, rendering).
4. **SEO review** — metadata, OG, JSON-LD, sitemap/robots, `llms.txt`.
5. **Documentation review** — `/docs` matches `/src`; memory current.
6. **Quality review** — TypeScript strict/no-any, lint/format, dead code, tests.

Then **update governance** (this is mandatory):

- `docs/governance/production-checklist.md` → ✅/⚠️/❌
- `docs/governance/technical-debt.md` → TD-XXX
- `docs/governance/backlog.md` → P1/P2/P3
- `docs/governance/roadmap.md` → Now/Next/Later
- append a dated entry to `docs/governance/audit-report.md`
  (template: `.claude/TEMPLATES/audit-template.md`)
