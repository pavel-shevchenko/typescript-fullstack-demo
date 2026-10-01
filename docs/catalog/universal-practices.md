# Universal best-practices catalog

Этот каталог предназначен для архитектурных изысканий и подготовки
business-facing предложений. Он не является чеклистом, в котором большее число
технологий автоматически означает лучшую архитектуру.

Каждый выбранный пункт должен читаться как:

> **Практика → бизнес-результат**, подтверждённый инженерными критериями.

## 1. Classification

### `BASELINE`

Практика применима почти к любому production-сервису, но глубина реализации
зависит от риска. Примеры: ownership, validation, backups, threat modeling,
observability, accessibility и dependency lifecycle.

### `CONDITIONAL`

Pattern выбирается только при наличии adoption trigger. Примеры: microservices,
CQRS, event sourcing, service mesh, Kubernetes, saga, GraphQL и vector search.

### `DOMAIN_SPECIFIC`

Практика нужна определённому типу продукта: multi-tenancy, payments, regulated
data, AI agents, public package distribution.

### `NOT_APPLICABLE`

Осознанно отклонённый pattern. Обязательны причина, counterindication и
reconsideration trigger.

## 2. Maturity levels

| Level | Meaning | Minimum evidence |
|---|---|---|
| `M0 DISCUSSED` | идея названа | owner и problem statement |
| `M1 DESIGNED` | решение принято | ADR, acceptance criteria, threat/operational impact |
| `M2 IMPLEMENTED` | механизм существует | code/config evidence и local verification |
| `M3 TESTED` | failure and negative paths проверены | automated tests and recorded drills |
| `M4 OPERATED` | механизм работал в deploy environment | telemetry, runbook, incident/usage evidence |
| `M5 MEASURED` | результат управляется по метрикам | SLO/KPI, review cadence, improvement history |

Нельзя повышать maturity по названию технологии. Например, три Postgres
контейнера без failover drill — не `M4 HA`.

## 3. Required practice record

Каждая запись должна содержать:

- `id` — стабильный идентификатор.
- `name` — canonical name; альтернативы перечисляются в `aliases`.
- `classification` — baseline, conditional или domain-specific.
- `business_outcome` — результат на языке заказчика.
- `adoption_trigger` — когда практику стоит внедрять.
- `reconsideration_trigger` — когда решение нужно пересмотреть.
- `engineering_acceptance` — измеримые технические критерии.
- `evidence` — code/config/test/runbook/dashboard/ADR.
- `maturity` — M0–M5.
- `risks_counterindications` — стоимость, failure modes и когда не использовать.
- `owner` — `TBD` до назначения.
- `last_reviewed` — `TBD` до фактического review.
- `next_review` — `TBD`.

Machine-readable template:
[practice-record.schema.yaml](./practice-record.schema.yaml).

## 4. Normalized concepts and duplicates

### 4.1 Architecture style is not a stack of badges

- **DDD** описывает моделирование сложного business domain.
- **Bounded Context** задаёт semantic/model boundary внутри DDD.
- **Modular monolith** и **microservices** — варианты deployment/ownership
  decomposition. Microservices не являются обязательным продолжением DDD.
- **Database per service** — data ownership pattern с consistency cost, а не
  синоним microservices.

### 4.2 Dependency-direction aliases

Clean Architecture, Hexagonal Architecture, Onion Architecture и
Ports-and-Adapters объединяются под canonical practice:

**Dependency inversion at business boundaries → бизнес-правила тестируются и не
зависят от конкретной базы или transport.**

Конкретное название может оставаться alias, но не считается отдельным баллом.

### 4.3 Integration alternatives

REST, GraphQL, gRPC и asynchronous messaging — не cumulative checklist. Выбор
определяется consumers, latency, schema evolution, streaming и coupling.

Gateway, BFF, service mesh и event bus добавляются при доказанной потребности,
а не ради «enterprise» topology.

### 4.4 Data and resilience are separate capabilities

- Replication не равна backup.
- Replication не равна automatic failover.
- Failover не равен disaster recovery.
- Backup не доказан без restore drill.
- Cache, CDN, HTTP cache и materialized view имеют разные consistency contracts.

### 4.5 Authorization concepts are complementary

- Authentication устанавливает identity.
- RBAC назначает права через роли.
- ABAC использует attributes.
- ReBAC использует relationships.
- Tenant isolation ограничивает data partition.

### 4.6 Delivery concepts are complementary

CI, CD, IaC, GitOps, immutable artifacts, progressive delivery и rollback
описывают разные stages. Один deploy script не доказывает весь CI/CD lifecycle.

### 4.7 Observability concepts are not synonyms

Structured logs, metrics, traces, correlation, dashboards, alerts, SLI/SLO и
incident response должны иметь отдельные acceptance criteria.

### 4.8 AI patterns are conditional

RAG, vector database, agents, tool calling и multi-provider routing нужны только
при соответствующих use cases. Они не заменяют deterministic authorization,
privacy controls или quality evaluation.

## 5. Baseline catalog

### BASE-ARCH-01 — Explicit ownership → изменения имеют ответственного

- **Business outcome:** меньше бесхозных сервисов и быстрее принятие решений.
- **Adoption trigger:** любой shared production component.
- **Engineering acceptance:** owner, escalation path, CODEOWNERS/review policy,
  service/data inventory.
- **Risks/counterindications:** формальное имя без времени и полномочий не даёт результата.
- **Owner/review:** `TBD` / `TBD`.

### BASE-ARCH-02 — Architecture Decision Records → решения не теряют контекст

- **Business outcome:** команда не повторяет дорогие споры и понимает условия пересмотра.
- **Engineering acceptance:** context, options, decision, consequences, security
  and operational impact, verification, reconsideration trigger.
- **Maturity target:** минимум `M1`, для ключевых решений `M4`.
- **Owner/review:** `TBD` / `TBD`.

### BASE-ARCH-03 — Architecture fitness functions → границы не разрушаются незаметно

- **Business outcome:** рост команды не увеличивает стоимость изменений экспоненциально.
- **Engineering acceptance:** automated checks for forbidden imports, dependency
  direction, database ownership, public API rules and authorization configuration.
- **Risk:** brittle text checks; prefer AST/graph/schema-aware tests.
- **Owner/review:** `TBD` / `TBD`.

### BASE-API-01 — API lifecycle → клиенты обновляются без внезапных поломок

- **Business outcome:** release сервиса не останавливает интеграции.
- **Engineering acceptance:** versioning policy, compatibility rules,
  deprecation window, consumer inventory, contract tests and sunset telemetry.
- **Reconsideration trigger:** новый public consumer или independent deployment.
- **Owner/review:** `TBD` / `TBD`.

### BASE-DATA-01 — Versioned schema evolution → данные переживают релизы

- **Business outcome:** deploy не требует опасного ручного пересоздания базы.
- **Engineering acceptance:** migrations in VCS, expand/contract policy,
  populated-data test, rollback/forward-fix and ownership.
- **Risk:** destructive migration and mixed-version incompatibility.
- **Owner/review:** `TBD` / `TBD`.

### BASE-DATA-02 — Idempotency and consistency contract → retry не дублирует деньги или действия

- **Business outcome:** временный network failure не создаёт повторные операции.
- **Engineering acceptance:** idempotency key scope/retention, atomic state
  transition, retry policy, documented strong/eventual consistency and tests.
- **Owner/review:** `TBD` / `TBD`.

### BASE-SEC-01 — Threat modeling → критические abuse paths обнаруживаются до релиза

- **Business outcome:** security effort направляется на реальные business risks.
- **Engineering acceptance:** assets, actors, trust boundaries, threats,
  mitigations, residual risks and review on architecture changes.
- **Risk:** one-time diagram without tracked mitigations.
- **Owner/review:** `TBD` / `TBD`.

### BASE-SEC-02 — Least privilege and server-side authorization → compromised client имеет ограниченный ущерб

- **Business outcome:** пользователь и automation выполняют только разрешённые действия.
- **Engineering acceptance:** deny-by-default policy, backend enforcement,
  negative role/tenant/relation tests, admin audit and break-glass policy.
- **Owner/review:** `TBD` / `TBD`.

### BASE-SEC-03 — Software supply-chain integrity → поставка воспроизводима и проверяема

- **Business outcome:** заказчик знает, из чего собран релиз и кто его выпустил.
- **Engineering acceptance:** locked dependencies, pinned base images, secret and
  vulnerability scanning, SBOM, signed artifact provenance and verification gate.
- **Risks:** scanner noise; severity policy and exception expiry are required.
- **Owner/review:** `TBD` / `TBD`.

### BASE-REL-01 — SLI/SLO and error budget → надёжность привязана к клиентскому пути

- **Business outcome:** команда балансирует features и reliability по измеримым данным.
- **Engineering acceptance:** journey-based SLI, target/window, error budget,
  dashboard, alert and review policy.
- **Risk:** infrastructure uptime SLO without user outcome.
- **Owner/review:** `TBD` / `TBD`.

### BASE-REL-02 — Backup, RPO and RTO → потеря данных имеет измеримый предел

- **Business outcome:** recovery promise можно проверить и заложить в договор.
- **Engineering acceptance:** encrypted backups, retention, off-failure-domain
  copy, declared RPO/RTO, automated restore and recorded drill.
- **Counterindication:** replicas cannot be used as the only backup.
- **Owner/review:** `TBD` / `TBD`.

### BASE-REL-03 — Failure containment → отказ зависимости не останавливает весь продукт

- **Business outcome:** core functions продолжают работать при outage AI/cache/search.
- **Engineering acceptance:** timeout budget, bounded retries with jitter,
  circuit breaker where justified, queue/backpressure, degradation and failure tests.
- **Owner/review:** `TBD` / `TBD`.

### BASE-OPS-01 — Immutable release and rollback → ошибка релиза быстро обратима

- **Business outcome:** test и production получают один проверенный build.
- **Engineering acceptance:** content-addressed/tagged artifact, promotion,
  release manifest, compatibility checks, rollback and smoke.
- **Owner/review:** `TBD` / `TBD`.

### BASE-OPS-02 — Incident response and learning → повторные outages становятся реже

- **Business outcome:** восстановление не зависит от памяти одного инженера.
- **Engineering acceptance:** severity model, on-call/escalation, runbooks,
  communication template, blameless postmortem and action tracking.
- **Owner/review:** `TBD` / `TBD`.

### BASE-UX-01 — Accessibility → продукт доступен большему числу клиентов

- **Business outcome:** выше reach и ниже legal/compliance risk.
- **Engineering acceptance:** declared WCAG target, keyboard/focus semantics,
  screen-reader and contrast tests, automated plus manual review.
- **Owner/review:** `TBD` / `TBD`.

### BASE-UX-02 — Performance budget → UX и conversion не ухудшаются незаметно

- **Business outcome:** страницы остаются быстрыми при росте features.
- **Engineering acceptance:** Core Web Vitals/API latency budgets, representative
  data, CI thresholds and production telemetry.
- **Owner/review:** `TBD` / `TBD`.

### BASE-FIN-01 — FinOps and capacity visibility → стоимость растёт вместе с ценностью

- **Business outcome:** инфраструктурные и AI расходы прогнозируемы.
- **Engineering acceptance:** cost allocation by service/use case/environment,
  budgets, anomaly alerts, unit economics and periodic rightsizing review.
- **Risk:** оптимизация абсолютной стоимости без business throughput.
- **Owner/review:** `TBD` / `TBD`.

### BASE-LIFE-01 — Dependency lifecycle/EOL → unsupported components не становятся аварийным проектом

- **Business outcome:** обновления планируются заранее и не блокируют roadmap.
- **Engineering acceptance:** dependency inventory, support/EOL dates,
  upgrade owner, compatibility tests and exception expiry.
- **Owner/review:** `TBD` / `TBD`.

## 6. Conditional architecture catalog

### COND-ARCH-01 — Microservices → команды масштабируют ownership независимо

- **Adopt when:** distinct business capabilities, independent release/scale needs,
  stable contracts and operational capacity exist.
- **Acceptance:** owner per service, database ownership, contract tests,
  telemetry, deployment and failure isolation.
- **Counterindications:** small team, high cross-service transaction rate,
  unclear boundaries.
- **Reconsider when:** coordination and distributed failure cost exceed autonomy gain.

### COND-ARCH-02 — Gateway/BFF → consumers получают адаптированный edge contract

- **Adopt when:** multiple clients need aggregation, protocol adaptation or central edge policy.
- **Acceptance:** explicit ownership, latency/error budget, auth boundary, no
  business-logic dumping ground and contract tests.
- **Counterindications:** one server-rendered client with direct stable APIs.

### COND-DATA-01 — CQRS → read and write models evolve independently

- **Adopt when:** materially different read/write scale or models are measured.
- **Acceptance:** source of truth, lag SLO, projection rebuild, idempotent events
  and user-visible consistency semantics.
- **Counterindications:** ordinary CRUD; duplication and operational cost exceed benefit.

### COND-DATA-02 — Event sourcing → complete state history supports replay/audit

- **Adopt when:** temporal reconstruction, audit or simulation is a core requirement.
- **Acceptance:** immutable event contract, version/upcast policy, snapshots,
  replay test, privacy deletion strategy and projection rebuild.
- **Counterindications:** event immutability conflicts with privacy/retention or team maturity.

### COND-DATA-03 — Saga/outbox → cross-service workflow survives partial failure

- **Adopt when:** a business transaction spans independently committed services.
- **Acceptance:** durable intent/outbox, idempotent consumers, compensation,
  timeout and reconciliation dashboard.
- **Counterindications:** a local transaction or redesigned boundary is sufficient.

### COND-PLAT-01 — Kubernetes/service mesh → multi-node platform operations standardize

- **Adopt when:** scheduling, autoscaling, rollout and service-policy needs are measured.
- **Acceptance:** platform owner, SLO, resource policies, security baseline,
  upgrade plan, cost model and failure drills.
- **Counterindications:** few services on one host; Compose is cheaper and clearer.

### COND-SEARCH-01 — Dedicated search/vector service → retrieval scales independently

- **Adopt when:** transactional indexes cannot satisfy relevance, vector or workload needs.
- **Acceptance:** source-of-truth, change propagation, rebuild, stale-result SLO,
  ACL filtering, relevance evaluation and cost budget.
- **Counterindications:** database-native search meets measured requirements.

## 7. AI-specific catalog

### AI-GOV-01 — Model and prompt versioning → AI behavior is reproducible

- **Classification:** `DOMAIN_SPECIFIC`
- **Business outcome:** regression can be tied to a concrete model/prompt release.
- **Acceptance:** immutable version IDs, configuration provenance, rollback and
  request-level recording without sensitive prompt leakage.
- **Owner/review:** `TBD` / `TBD`.

### AI-GOV-02 — AI evaluation gates → model changes improve measured outcomes

- **Business outcome:** quality and safety do not rely on anecdotal chat tests.
- **Acceptance:** representative golden/adversarial datasets, task metrics,
  safety thresholds, regression budget and release gate.
- **Risks:** benchmark leakage and non-representative synthetic data.
- **Owner/review:** `TBD` / `TBD`.

### AI-GOV-03 — Prompt-injection and tool authorization → content cannot redefine permissions

- **Business outcome:** malicious text cannot trigger unauthorized business operations.
- **Acceptance:** untrusted-data separation, tool schemas, server-side policy,
  least privilege, adversarial corpus and confirmation by risk.
- **Counterindication:** prompt wording alone is never an authorization control.
- **Owner/review:** `TBD` / `TBD`.

### AI-GOV-04 — AI privacy and retention → prompts do not leak customer data

- **Business outcome:** provider use remains compatible with privacy commitments.
- **Acceptance:** data classification, minimization/redaction, provider policy,
  region/retention settings, tenant boundaries and deletion workflow.
- **Owner/review:** `TBD` / `TBD`.

### AI-GOV-05 — AI cost governance → model spend is predictable per business action

- **Business outcome:** unit economics remain visible as usage grows.
- **Acceptance:** token/tool/provider cost telemetry by use case, budgets,
  limits, anomaly alerts, caching policy and quality-aware routing.
- **Owner/review:** `TBD` / `TBD`.

### AI-GOV-06 — Human approval and compensation → high-risk AI actions are reversible

- **Business outcome:** automation speed does not remove accountability.
- **Acceptance:** risk tiers, verified approver identity, idempotent execution,
  audit/provenance, undo/compensation and concurrent approval tests.
- **Owner/review:** `TBD` / `TBD`.

## 8. Catalog improvement backlog

### P0 — correctness

- [x] Normalize overlapping architecture names and aliases.
- [x] Separate baseline from conditional/domain-specific patterns.
- [x] Require adoption and reconsideration triggers.
- [x] Require business outcome and engineering acceptance.
- [x] Add maturity, risks/counterindications and owner/review placeholders.
- [x] Add fitness functions, API lifecycle, threat modeling, supply chain,
  SLO/RPO/RTO, AI governance, accessibility, FinOps and EOL.

### P1 — machine-enforced quality

- [ ] Store records as individual validated YAML documents.
- [ ] Add schema lint: valid ID/classification/maturity and mandatory fields.
- [ ] Validate local evidence links and ADR references.
- [ ] Reject `IMPLEMENTED`/M2+ records without verification evidence.
- [ ] Require review expiry and owner before publication.

### P2 — reusable proposal profiles

- [ ] Add tagged profiles: early-stage SaaS, regulated SaaS, content platform,
  multi-tenant B2B, AI-assisted operations and high-availability commerce.
- [ ] Generate 8–20 business-facing lines from selected records.
- [ ] Keep engineering evidence as expandable detail rather than removing it.
- [ ] Add estimated adoption cost and dependency graph without turning it into a score race.

### P3 — measured governance

- [ ] Track evidence freshness and automatically expire stale claims.
- [ ] Connect operated practices to dashboards, drills and incident records.
- [ ] Review counterindications after major team, traffic, regulatory or product changes.
- [ ] Measure business outcomes; do not reward raw practice count.

## 9. Review metadata

- Catalog owner: `TBD`
- Technical reviewers: `TBD`
- Product/security reviewers: `TBD`
- Last reviewed: `2026-08-19`
- Next review: `TBD`
