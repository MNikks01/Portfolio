# Prompt — Portfolio content update

Use when changing visible portfolio copy/content.

```
Update the <section> content: <what to change>.

Rules:
1. Edit the canonical doc first: docs/portfolio/<section>.md (and any
   docs/profile|career|skills|projects file it draws from).
2. Then update the matching component in src/components/.
3. Use semantic tokens only (no white/zinc); keep both themes working.
4. Don't change the design/animation — content only.
5. Run: npm run format && npm run lint && npm run typecheck && npm test &&
   npm run build.
6. If credibility/quality changed, update docs/governance/audit-report.md.
```
