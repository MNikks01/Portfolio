# Prompt — Feature planning

```
Plan the feature: <name>.

Produce a plan using .claude/TEMPLATES/feature-template.md:
- Summary + motivation (who benefits).
- Approach: components/files touched, pattern reused, docs source.
- Step list: Analyze → Design (ADR?) → Implement → Test → Audit → Document.
- Acceptance criteria (both themes, responsive, quality gate, docs synced).
- Risks / rollback.

Constraints: don't redesign; semantic tokens only; keep /docs canonical.
Do not implement yet — return the plan for approval.
```
