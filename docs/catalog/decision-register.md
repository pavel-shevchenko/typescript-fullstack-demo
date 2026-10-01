# Architecture decision and view register

Это не набор принятых ADR. Это очередь решений, которые должны получить
отдельные документы с владельцем, статусом и датой review.

Статусы:

- `PROPOSED` — решение следует формализовать.
- `ACCEPTED` — отдельный ADR создан и одобрен.
- `SUPERSEDED` — заменено более новым ADR.

Каждый ADR должен включать:

- business and technical context;
- decision drivers and quality attributes;
- considered alternatives;
- decision and consequences;
- security, privacy, cost and operational impact;
- engineering verification;
- adoption/reconsideration trigger;
- owner, approvers, date and next review.

## Proposed ADRs

### ADR-0001 — CMS/CRM boundaries and database ownership

- **Status:** `PROPOSED`
- **Outcome:** команды понимают, какой сервис владеет данными и контрактом.
- **Decision to record:** отдельные Prisma packages/databases; правила
  cross-context identity and consistency.
- **Reconsider when:** появляются shared writes, third-party consumers или
  систематические distributed transactions.

### ADR-0002 — Direct Next-to-service integration; no gateway/BFF

- **Status:** `PROPOSED`
- **Outcome:** меньше компонентов и latency при текущем числе consumers.
- **Reconsider when:** несколько клиентов требуют aggregation, protocol
  adaptation или central edge policy.

### ADR-0003 — Domain controllers as public security boundary

- **Status:** `PROPOSED`
- **Outcome:** прямой вызов API не обходит scopes, DTO, joins и query ceilings.
- **Verification:** architecture fitness test для каждого public mutation.

### ADR-0004 — Cookie/JWT session lifecycle

- **Status:** `PROPOSED`
- **Outcome:** identity удобна для browser и имеет контролируемый срок риска.
- **Must decide:** expiry, refresh, rotation, revocation, CSRF and logout semantics.

### ADR-0005 — CRM tenancy; CMS intentionally non-tenant

- **Status:** `PROPOSED`
- **Outcome:** customer data partition и CMS publication semantics не смешиваются.
- **Must decide:** server-owned tenant assignment, membership capabilities and
  relation validation.
- **Reconsider when:** появляются white-label sites или tenant-owned CMS content.

### ADR-0006 — AI proposes; verified user approves; backend executes

- **Status:** `PROPOSED`
- **Outcome:** model freedom не становится direct database authority.
- **Must decide:** risk tiers, approver identity, tool/field policies and provenance.

### ADR-0007 — AI idempotency, audit and cross-service consistency

- **Status:** `PROPOSED`
- **Outcome:** retries and partial failures do not silently duplicate operations.
- **Must decide:** state machine, idempotency retention, audit/outbox and compensation.

### ADR-0008 — Local/test/main PostgreSQL topology

- **Status:** `PROPOSED`
- **Outcome:** стоимость test ниже, а main демонстрирует read replicas без HA overclaim.
- **Must decide:** routing, consistency, lag budget, failover responsibility and drills.

### ADR-0009 — Backup, restore, deploy checkpoints, RPO and RTO

- **Status:** `PROPOSED`
- **Outcome:** recovery promise becomes measurable.
- **Must decide:** backup method, encryption, retention, failure domain, restore
  cadence and release rollback.

### ADR-0010 — Redis cache and invalidation ownership

- **Status:** `PROPOSED`
- **Outcome:** performance does not create unexplained stale business data.
- **Must decide:** key ownership, invalidation graph, TTL, degradation and metrics.

### ADR-0011 — SeaweedFS file ownership and access

- **Status:** `PROPOSED`
- **Outcome:** files follow record authorization and lifecycle.
- **Must decide:** metadata source, signed URL lifetime, tenant scope, validation,
  deletion and backup.

### ADR-0012 — Dedicated PostgreSQL search/vector service

- **Status:** `PROPOSED`
- **Outcome:** search and RAG workloads scale without owning transactional truth.
- **Must decide:** source-of-truth, change propagation, stale-result SLO,
  replay/rebuild, ACL metadata and deletion.
- **Profiles:** `test` singleton; `main` replicated topology + pooler.

### ADR-0013 — Jenkins/DinD deployment trust boundary

- **Status:** `PROPOSED`
- **Outcome:** deployment convenience has explicit accepted security risk.
- **Must decide:** privileged daemon, Docker API/socket, bind mounts, credentials,
  concurrency, artifact provenance and network controls.

### ADR-0014 — Runtime artifact generation and activation

- **Status:** `PROPOSED`
- **Outcome:** generated configuration can be validated, activated and rolled back.
- **Must decide:** naming, schema, signatures, staging, consumer reload, health
  gate and audit.

### ADR-0015 — Environment and secret management

- **Status:** `PROPOSED`
- **Outcome:** one codebase supports profiles without committing deploy secrets.
- **Must decide:** external secret store, scope, rotation, revocation and local
  developer experience.

### ADR-0016 — Observability and SLO model

- **Status:** `PROPOSED`
- **Outcome:** reliability is measured from customer journeys.
- **Must decide:** telemetry schema, sampling, privacy, core SLIs, SLO windows,
  alerts, retention and cost.

### ADR-0017 — Public reusable package boundary

- **Status:** `PROPOSED`
- **Outcome:** external projects consume a stable contract rather than internal paths.
- **Must decide:** package API, semantic versioning, compatibility, deprecation,
  support and license.

### ADR-0018 — Conditional patterns intentionally not adopted

- **Status:** `PROPOSED`
- **Outcome:** отсутствие CQRS, event sourcing, service mesh or Kubernetes is a
  reasoned decision, not missing fashion.
- **Must decide:** counterindications and measurable reconsideration triggers.

## Recommended C4 and dynamic views

These are documentation backlog items, not evidence of implemented behavior.

### C4-01 — System context

Show visitors/admins, browser, AI provider, source control, email provider and
the Comfort system boundary.

### C4-02 — Container view

Show Next, CMS API, CRM API, planned search API, Python coding service, Redis,
owned Postgres databases, SeaweedFS, Caddy and Jenkins/DinD.

### C4-03 — CMS component view

Show auth, public reads, domain controllers, recommendations, audit and Prisma.

### C4-04 — CRM component and tenancy view

Show JWT identity, membership lookup, tenant/capability policy, relation
validation, controllers and Prisma.

### C4-05 — Deployment profiles

Use separate views for:

- local replicated demonstration;
- test singleton databases;
- main replicated topology;
- host Jenkins/DinD/Caddy control plane.

Do not label replicas as automatic HA without failover evidence.

### C4-06 — Trust boundaries

Show Internet, Caddy, edge, database, SeaweedFS and Jenkins private networks;
mark privileged DinD, Docker API/socket, bind mounts and public API boundaries.

### DYN-01 — AI recommendation and confirmation

Show prompt, provider, recommendation persistence, verified approver, atomic
state transition, backend authorization, mutation, audit and failure paths.

### DYN-02 — Search indexing and retrieval

Show transactional source, propagation, search storage, tenant ACL, stale-result
behavior, rebuild and GDPR deletion.

### DYN-03 — Release and rollback

Show checkout, quality/security gates, immutable build, migration, promotion,
smoke, health gate and rollback checkpoint.

### DYN-04 — Backup and recovery

Show backup source, encryption, retention, independent failure domain, restore
environment, integrity verification and RPO/RTO measurement.

## Review metadata

- Register owner: `TBD`
- Architecture reviewers: `TBD`
- Security/operations reviewers: `TBD`
- Last reviewed: `2026-08-19`
- Next review: `TBD`
