# Workflow — Feature Development

1. **Analyze** — read the target component(s), the relevant `docs/`, and
   `.claude/CODING_STANDARDS.md`. Confirm the requirement.
2. **Design** — choose the existing pattern (section/card/motion). If a decision
   is significant, draft an ADR (`.ai/decisions/`).
3. **Implement** — semantic tokens only; both themes; responsive; reuse
   `SectionHeading`/`glass`. Content from `docs/`.
4. **Test** — add/extend Vitest; `npm test` green.
5. **Audit** — run `.claude/CHECKLISTS/production.md`; log debt/backlog if found.
6. **Document** — update the matching `docs/` file(s), memory, and (if quality
   changed) `docs/governance/*`.
7. **Verify** — `npm run format && lint && typecheck && test && build`. Optionally
   screenshot both themes.

**Done when:** gate green · both themes OK · docs synced · governance updated.
