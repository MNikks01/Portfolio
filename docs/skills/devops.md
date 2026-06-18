# Skills — DevOps

Category color: `#8B5CF6`. Mirrors the `devops` category in `Skills.tsx`
(content: `src/content/skills.ts`).

| Skill          | Level | Proficiency | Last Used | Years | Used In           | Notes                                                             |
| -------------- | ----- | ----------- | --------- | ----- | ----------------- | ----------------------------------------------------------------- |
| Docker         | 92    | Advanced    | 2026      | 3+    | Revize, Ignix UI  | Every service shipped as an image; identical envs dev → CI → prod |
| Docker Compose | 90    | Advanced    | 2026      | 3+    | Revize            | Reproduces the full topology (API + queue + workers + DB) locally |
| GitHub Actions | 88    | Proficient  | 2026      | 3+    | Revize, Portfolio | Quality-gate + build/deploy pipelines; CI on this repo            |
| CI/CD          | 88    | Proficient  | 2026      | 3+    | Revize, Portfolio | Trunk-based, automated deploys; merge-to-ship, not manual rituals |
| Nginx          | 82    | Proficient  | 2025      | 2+    | Revize            | Reverse proxy / TLS termination in front of services              |
| AWS EC2        | 85    | Proficient  | 2026      | 2+    | Revize            | Compute for containerized workloads                               |
| AWS S3         | 86    | Proficient  | 2026      | 2+    | Revize            | Artifact and report storage                                       |
| AWS RDS        | 82    | Proficient  | 2025      | 2+    | Revize            | Managed Postgres — backups/failover without hand-rolled DB ops    |
| AWS ECS        | 80    | Working     | 2025      | 1+    | Revize            | Container orchestration for scaling scanner workers               |
| AWS ECR        | 80    | Working     | 2025      | 1+    | Revize            | Image registry feeding the deploy pipeline                        |
| Prometheus     | 80    | Working     | 2026      | 1+    | Revize            | Scrapes queue depth, throughput, latency, error/crash metrics     |
| Grafana        | 82    | Proficient  | 2026      | 1+    | Revize            | Dashboards + alerts that make an unattended system legible        |
| Linux          | 86    | Proficient  | 2026      | 5+    | All               | Daily driver for servers/containers; shell, processes, networking |
| Monitoring     | 84    | Proficient  | 2026      | 2+    | Revize            | Treated as part of the architecture, not a bolt-on                |
| Logging        | 84    | Proficient  | 2026      | 2+    | Revize            | Structured logs on every hop for end-to-end traceability          |
