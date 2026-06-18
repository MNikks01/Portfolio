# Revize Accessibility Platform

> Source of truth for the Revize entry in `src/components/Projects.tsx`.

| Field    | Value                                  |
| -------- | -------------------------------------- |
| Role     | Senior Engineer                        |
| Duration | 2023 — Present (at Mindfire Solutions) |
| Status   | Production                             |
| Accent   | `#00D4FF`                              |

## Overview

A distributed accessibility scanning platform — queue-driven workers that run
automated audits and produce CI-integrated reports.

## Problem

Accessibility audits are slow, manual, and don't scale across thousands of pages
or fit into engineering workflows.

## Solution

A queue-based distributed system that scans pages at scale, runs automated audits
(Puppeteer), and surfaces structured reports integrated into CI.

## Tech Stack

TurboRepo · Docker · RabbitMQ · PostgreSQL · Redis · Puppeteer · CI/CD · AWS

## Architecture

Client → API Gateway → Queue (RabbitMQ) → Scanner Workers (Puppeteer) →
PostgreSQL + Redis. Horizontally scalable workers; metrics via Prometheus/Grafana.

## Challenges

- High-throughput scanning without overwhelming the API.
- Reliable queue processing (retries, idempotency).
- Scaling workers under real traffic.

## Achievements

- Processes **10k+ pages/day**.
- **24** parallel scanner workers.
- **~180ms** average latency.
- Monorepo (TurboRepo) cut CI/CD lead time.

## Lessons Learned

Design for failure first — retries, idempotency, and backpressure matter more
than raw speed when systems run unattended at scale.

## Screenshots Location

`public/projects/revize/` _(to be added)_

## Future Improvements

- Self-serve report portal.
- More audit rule coverage.
- Per-tenant rate limiting.
