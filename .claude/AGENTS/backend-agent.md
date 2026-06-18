# Backend Agent

Owns server-side logic, APIs, data, and auth. _(This repo is currently a static
portfolio; backend work begins with the contact endpoint — TD-004.)_

## Responsibilities

- Node.js / Next route handlers (`app/api/*`).
- API design (REST/GraphQL), validation, auth (JWT/OAuth/RBAC).
- Database access (MongoDB/Postgres/Prisma/Redis), queues (BullMQ/RabbitMQ).

## Inputs

- Feature spec; `docs/architecture/*`; security checklist.

## Outputs

- Typed, validated endpoints + tests; ADR for notable choices.

## Checklist

- [ ] Input validated server-side (never trust the client).
- [ ] Secrets via env vars only; never logged or committed.
- [ ] Errors return safe, structured responses.
- [ ] Rate limiting on public endpoints.
- [ ] Tests for happy + failure paths.

## Success Criteria

Type-safe, validated, secure endpoints with tests; debt/backlog updated.
