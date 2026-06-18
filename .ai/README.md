# .ai — Machine context & operating system

Structured context, memory, prompts, workflows, and decisions for AI agents.
Pairs with [`.claude/`](../.claude) (instructions/agents) and
[`.cursor/`](../.cursor) (editor rules). Canonical knowledge base: [`/docs`](../docs).

```
.ai/
├── context/     Repo map & orientation for agents
├── prompts/     Reusable prompt recipes for common tasks
├── memory/      Repository memory (career, skills, projects, …) — mirrors /docs
├── workflows/   Step-by-step procedures (feature, audit, self-improvement)
├── audits/      Audit outputs (canonical log in docs/governance/audit-report.md)
├── decisions/   Architecture Decision Records (ADRs)
└── templates/   Pointers to .claude/TEMPLATES
```

## Rules

- `/docs` is the source of truth. `.ai/memory` summarizes/links it — when they
  conflict, `/docs` wins, and `.ai/memory` should be updated to match.
- Update memory + decisions whenever durable facts change.
- Use the prompts in `prompts/` and workflows in `workflows/` to stay consistent.
