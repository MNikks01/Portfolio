# Prompt — Code review

```
Review the current diff (or <files>).

Check for:
- Correctness bugs and edge cases.
- Design-token compliance (no literal white/zinc; both themes).
- Accessibility (semantic HTML, ARIA, keyboard, contrast).
- Performance (re-renders, bundle, layout shift).
- Security (input validation, secrets, dangerouslySetInnerHTML).
- Tests present for new logic; types strict (no any).
- Docs/governance updated to match the change.

Output: prioritized findings (P1/P2/P3) with file:line and concrete fixes.
For any new debt, add an item to docs/governance/backlog.md + technical-debt.md.
```
