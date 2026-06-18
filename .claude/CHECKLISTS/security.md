# Security Checklist

Owner: [Security Agent](../AGENTS/security-agent.md). Maps to OWASP Top 10.

- [ ] **Secrets** — none committed; `.env*` gitignored; not logged.
- [ ] **Headers** — CSP, X-Frame-Options, X-Content-Type-Options,
      Referrer-Policy, Permissions-Policy set _(currently ❌ — TD-001)_.
- [ ] **CSP** — restrictive `default-src`; explicit allowances for fonts/3D.
- [ ] **Input validation** — server-side validation on every endpoint.
- [ ] **XSS** — rely on React escaping; `dangerouslySetInnerHTML` only for
      controlled, static content (JSON-LD, theme script).
- [ ] **Injection** — parameterized DB queries (when DBs are added).
- [ ] **AuthN/AuthZ** — JWT/OAuth + RBAC; least privilege (when added).
- [ ] **Rate limiting** — on public/mutating endpoints.
- [ ] **Dependencies** — `npm audit`; triage high/critical.
- [ ] **Transport** — HTTPS enforced (Netlify).
