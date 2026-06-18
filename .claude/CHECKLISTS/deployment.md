# Deployment Checklist

Owner: [DevOps Agent](../AGENTS/devops-agent.md). Host: Netlify (auto-deploy from
`main`).

## Pre-deploy

- [ ] Quality gate green locally: format, lint, typecheck, test, build.
- [ ] CI passing on the PR/branch.
- [ ] `/docs` and governance updated.
- [ ] No secrets in the diff.

## Config

- [ ] `netlify.toml` present; `@netlify/plugin-nextjs` enabled.
- [ ] `NODE_VERSION` matches `.nvmrc` (20).
- [ ] Build command `npm run build`; publish `.next`.

## Post-deploy

- [ ] Production URL loads; both themes work; no console errors.
- [ ] 3D hero renders or degrades to fallback (no crash).
- [ ] Lighthouse spot-check.
- [ ] OG preview correct (when `og.png` added).
- [ ] `robots.txt` / `sitemap.xml` reachable.
