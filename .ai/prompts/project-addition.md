# Prompt — Add a project

```
Add a new project: <name> — <one-line description>.

Steps:
1. Create docs/projects/<slug>.md from .claude/TEMPLATES/project-template.md
   (Overview, Problem, Solution, Tech Stack, Architecture, Challenges,
   Achievements, Lessons, Screenshots, Future).
2. Add a row to docs/projects/project-index.md (role, status, accent, link).
3. Update src/components/Projects.tsx (and CaseStudy.tsx if it's the flagship).
4. Update .ai/memory/projects.md.
5. Use semantic tokens; both themes; no redesign.
6. Run the quality gate (format, lint, typecheck, test, build).
```
