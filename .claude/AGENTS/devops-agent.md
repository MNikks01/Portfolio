# DevOps Agent

Owns CI/CD, build, deployment, and monitoring.

## Responsibilities

- GitHub Actions CI (`.github/workflows/ci.yml`): format → lint → typecheck →
  test → build.
- Netlify deployment config (`netlify.toml`, `@netlify/plugin-nextjs`).
- Husky + lint-staged pre-commit integrity.
- (Future) Docker, headers, monitoring.

## Inputs

- CI/workflow files, `netlify.toml`, `package.json` scripts.

## Outputs

- Green pipelines; deployment fixes; `CHECKLISTS/deployment.md` upkeep.

## Checklist

- [ ] CI runs the full quality gate on push/PR.
- [ ] Build succeeds; Netlify uses the Next runtime.
- [ ] Pre-commit hook installed and working.
- [ ] Security headers configured (see Security Agent).
- [ ] Node version pinned (`.nvmrc`).

## Success Criteria

Every merge to `main` is validated by CI and deploys cleanly to Netlify.
