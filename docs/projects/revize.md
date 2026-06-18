# Revize Accessibility Platform

> Source of truth for the Revize entry in `src/components/Projects.tsx`. Content
> layer: `src/content/projects.ts`.

| Field    | Value                                  |
| -------- | -------------------------------------- |
| Role     | Senior Engineer                        |
| Duration | 2023 — Present (at Mindfire Solutions) |
| Status   | Production                             |
| Accent   | `#00D4FF`                              |

## Overview

Revize is a **distributed accessibility scanning platform**: queue-driven
workers crawl and audit web pages at scale, store structured findings, and
surface CI-integrated reports. It processes **10k+ pages/day** across **24**
parallel scanner workers at **~180 ms average latency**, and it's the project
where I get to talk about _how I build systems_ rather than just what I built.

This document is architecture-focused: each subsystem below is paired with the
reasoning behind it, because the interesting part of Revize isn't any one feature
— it's the set of trade-offs that let it run unattended at scale.

---

## Problem

Accessibility audits are slow, manual, and don't scale. A human running an
auditor against one page at a time can't cover thousands of pages, can't run on
every deploy, and produces results that are stale by the time they're read. The
goal was to make accessibility auditing **continuous, automated, and
CI-integrated** — fast enough to keep an API responsive while scanning at volume,
and reliable enough to run without a human watching it.

## Architecture at a glance

```
Client / CI ──▶ API Gateway ──▶ Queue (RabbitMQ) ──▶ Scanner Workers (Puppeteer)
                    │                                        │
                    ▼                                        ▼
              PostgreSQL  ◀──────── results ────────  Redis (cache / state)
                    │
                    ▼
        Prometheus + Grafana (metrics, dashboards, alerts)
```

The core idea is a **synchronous front, asynchronous back**: the API returns fast
by enqueuing work, and the heavy, slow, failure-prone scanning happens in workers
that scale horizontally and are isolated from the request path.

## Microservices

The platform is decomposed into independently deployable services with clear
boundaries:

- **API gateway** — accepts scan requests, validates and authorizes them, and
  enqueues jobs. It owns _no_ scanning logic, so it stays fast and small.
- **Scanner workers** — stateless, horizontally scalable processes that pull jobs
  off the queue and run the actual audits.
- **Reporting** — turns raw findings into structured, CI-consumable reports.

**Why microservices here:** scanning is bursty, CPU/memory-heavy (a headless
browser per job), and the part most likely to crash. Isolating it behind a queue
means a flood of scans or a misbehaving page can never take down the API, and the
workers can be scaled, deployed, and restarted independently of everything else.
The services share **typed contracts** through a TurboRepo monorepo so the
boundaries are explicit and refactors are safe.

## RabbitMQ (queue-based processing)

RabbitMQ decouples request acceptance from request execution:

- The API enqueues a scan job and returns immediately — the client isn't blocked
  on a multi-second browser render.
- Workers consume at their own pace, providing natural **backpressure**: if scans
  pile up, the queue absorbs the burst instead of overwhelming the workers or the
  database.
- **Acknowledgements + retries** make processing reliable. A worker only acks a
  message after the scan succeeds; a crash mid-scan re-queues the job rather than
  losing it.
- **Idempotency** is enforced so a retried or duplicated job doesn't double-write
  results — essential when "at-least-once" delivery meets unattended operation.

This is the heart of "design for failure first": the queue is what lets the
system survive crashes, bursts, and slow pages without human intervention.

## Puppeteer (the scanning workload)

Each worker drives **Puppeteer** (headless Chromium) to load a page the way a
real browser would — executing JS, building the full DOM, and applying styles —
then runs the accessibility audit against that rendered state. Headless Chromium
is heavy (memory, CPU, startup), which is exactly _why_ it lives in isolated,
queue-fed workers:

- Browser instances are pooled/recycled to amortize startup cost.
- Per-job timeouts and resource limits stop a pathological page from hanging a
  worker forever.
- Crashes are expected and handled — a dead browser fails the job, which RabbitMQ
  re-queues, rather than corrupting the worker.

## Redis (cache & state)

Redis carries the fast, ephemeral state that PostgreSQL shouldn't:

- **Caching** of repeated lookups and recently-scanned results to cut redundant
  work and keep latency low.
- **Coordination/state** for in-flight jobs and rate-limiting counters.
- A low-latency tier that keeps the hot path off the primary database.

The split is deliberate: **PostgreSQL is the durable source of truth** for scans
and findings (relational, queryable, transactional); **Redis is the speed layer**
for state that's allowed to be transient.

## Docker

Every service ships as a **Docker** image:

- Identical environments from local dev to CI to production — no "works on my
  machine" between the API, workers, and reporting.
- Workers scale by running **more identical containers**; because they're
  stateless and queue-fed, scaling out is just increasing the replica count.
- **Docker Compose** reproduces the whole topology (API + queue + workers + DB +
  cache) locally for development and integration tests.

## AWS

The platform runs on **AWS**, using managed services for the undifferentiated
heavy lifting:

- **Containerized services** deployed to AWS (ECS/EC2-class compute) so worker
  capacity can scale with load.
- **S3** for storing artifacts/reports.
- **RDS**-managed PostgreSQL for durability, backups, and failover without
  hand-rolling database operations.

The principle is the same one I apply everywhere: **buy the commodity (managed
infra), build the differentiator (the scanning system).**

## CI/CD

Delivery runs through **GitHub Actions**:

- Every push runs the quality gate — lint, type-check, tests — before anything
  ships.
- Docker images are built and published by the pipeline.
- Deployments are automated, so shipping a worker fix is a merge, not a manual
  ritual.
- The monorepo (**TurboRepo**) gives **incremental, cached builds**, which cut
  CI/CD lead time meaningfully — only the affected packages rebuild.

## Monitoring

A system that runs unattended has to be **observable**:

- **Prometheus** scrapes metrics from the API and workers — queue depth, job
  throughput, scan latency, error rates, browser-crash counts.
- **Grafana** dashboards make the system's health legible at a glance, and
  **alerts** fire on the signals that matter (growing queue backlog, rising
  failure rate, latency regressions).
- **Structured logging** on every hop makes a failed scan traceable from request
  to worker to result.

Monitoring isn't an afterthought here — it's how you trust a distributed system
you're not babysitting.

## Achievements

- Processes **10k+ pages/day**.
- **24** parallel scanner workers, scaling horizontally with load.
- **~180 ms** average latency on the synchronous path.
- Monorepo (TurboRepo) **cut CI/CD lead time** and unblocked parallel team work.

## Lessons Learned

- **Design for failure first.** Retries, idempotency, and backpressure mattered
  more than raw speed once the system ran unattended at scale.
- **Keep the request path synchronous and thin; push everything heavy to
  queues.** It's what keeps the API responsive while the system scales.
- **Stateless workers are a superpower.** When the unit of work carries no state,
  scaling and recovery become "run more containers."
- **Observability is part of the architecture, not a bolt-on.** You can't operate
  what you can't see.

## Screenshots Location

`public/projects/revize/` _(to be added — see
[`../portfolio/assets-plan.md`](../portfolio/assets-plan.md))_

## Future Improvements

- Self-serve report portal for non-engineering stakeholders.
- Broader audit-rule coverage.
- Per-tenant rate limiting and quotas.
