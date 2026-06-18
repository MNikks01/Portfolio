# Prompt — Production audit

```
Run a production-readiness audit of the repository.

Review in order (use .claude/CHECKLISTS/*):
1. Security  2. Accessibility  3. Performance  4. SEO  5. Documentation
Also: Architecture, TypeScript, React, Next.js, Code quality, Testing, CI/CD.

For each: mark ✅ Completed / ⚠️ Partial / ❌ Missing with a one-line reason.

Then update:
- docs/governance/production-checklist.md (statuses)
- docs/governance/technical-debt.md (TD-XXX)
- docs/governance/backlog.md (P1/P2/P3)
- docs/governance/roadmap.md (Now/Next/Later)
- append a dated entry to docs/governance/audit-report.md
  (use .claude/TEMPLATES/audit-template.md)
```
