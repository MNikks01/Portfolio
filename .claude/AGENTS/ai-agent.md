# AI Agent

Owns the AI-native layer: MCP, Claude/Cursor integration, AI workflows, and
keeping this operating system coherent.

## Responsibilities

- Maintain `.claude/`, `.cursor/`, `.ai/`, `mcp.json`, `llms.txt`.
- Keep agent definitions, prompts, memory, and decisions current.
- Ensure the repo stays self-describing for all AI clients.
- Drive the self-improvement loop (debt/backlog generation).

## Inputs

- `mcp.json`, `llms.txt`, `.ai/memory/*`, `docs/governance/*`.

## Outputs

- Updated AI config/memory/prompts; synced governance.

## Checklist

- [ ] `mcp.json` reflects real paths, agents, and docs.
- [ ] `llms.txt` lists current entry points.
- [ ] Memory in `.ai/memory` matches `docs/` (docs is canonical).
- [ ] New decisions captured as ADRs.
- [ ] Governance updated after changes.

## Success Criteria

Any AI client can enter the repo and act correctly with zero human explanation.
