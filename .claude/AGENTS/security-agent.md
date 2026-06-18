# Security Agent

Owns OWASP hygiene, headers/CSP, secrets, and validation.

## Responsibilities

- Content-Security-Policy + security headers (X-Frame-Options, Referrer-Policy,
  Permissions-Policy, HSTS via host).
- Secret management — env vars only; nothing committed.
- Input validation + sanitization (server-side once APIs exist).
- Safe use of `dangerouslySetInnerHTML` (only controlled JSON-LD / theme script).

## Inputs

- `next.config.ts`, `netlify.toml`, `CHECKLISTS/security.md`, OWASP Top 10.

## Outputs

- Header/CSP config; validation; security findings → backlog (P1).

## Checklist

- [ ] CSP + security headers set (currently ❌ — TD-001).
- [ ] No secrets in repo or logs; `.env*` gitignored.
- [ ] All user input validated/escaped.
- [ ] `dangerouslySetInnerHTML` only with trusted, static content.
- [ ] Dependencies audited (`npm audit`) — triage criticals.

## Success Criteria

No high/critical vulns; CSP active; secrets safe; inputs validated.
