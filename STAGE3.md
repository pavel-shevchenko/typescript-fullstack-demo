# Comfort improvement backlog

Этот документ отделяет **проверенные артефакты текущей демонстрации** от будущих
рекомендаций. Он не утверждает production parity: operational readiness требует
автотестов, security controls, наблюдаемости, recovery drills и измеримых SLO.

Статусы практик и доказательства находятся в
[PRACTICES.md](./PRACTICES.md). Универсальный catalog backlog находится в
[docs/catalog/universal-practices.md](./docs/catalog/universal-practices.md).

## 1. Текущая база — не future backlog

Следующие артефакты присутствуют в репозитории и не должны повторно описываться
как будущая реализация:

- отдельные CMS/CRM Hono applications (declarative decorators) и Prisma packages;
- httpOnly cookie helper и login/register flow;
- domain CRUD controllers с scopes, DTO и include whitelist;
- persisted AI recommendations, confirm/reject flow и базовый audit log;
- Redis-backed domain throttling/cache configuration;
- local, test и main Compose profiles;
- Jenkins/DinD jobs с базовым HTTP smoke;
- SSR landing и admin tabs CMS/CRM/AI;
- Python schema/recommend endpoints, heuristic/GROQ paths и correlation data;
- generated JSON/YAML runtime artifacts;
- SeaweedFS containers и bucket initialization;
- ручное описание backup/restore каталогов.

Этот список не повышает соответствующие пункты до production-ready. Ограничения
и non-claims остаются в `PRACTICES.md`.

## 2. P0 — authorization, tenant integrity, AI safety

### P0-COMFORT-01 — Server-derived confirmation authority

- **Outcome:** customer не может выдать себя за admin при подтверждении AI action.
- **Acceptance:** роль извлекается только из проверенной session/JWT; action input
  не влияет на authorization; negative integration test проходит.
- **Evidence when done:** backend policy code + test for forged role.

### P0-COMFORT-02 — Idempotent recommendation state machine

- **Outcome:** повторный click/retry не применяет бизнес-операцию дважды.
- **Acceptance:** atomic compare-and-set из `pending`; idempotency key; concurrent
  confirmation test; определены failed/compensated states.
- **Risk addressed:** apply, status update и audit сейчас не доказаны как единая
  атомарная операция.

### P0-COMFORT-03 — Server-owned CRM tenant assignment

- **Outcome:** create/update/relation payload не может сослаться на чужой tenant.
- **Acceptance:** tenant выводится из membership либо строго проверяется; relation
  IDs валидируются в том же tenant; tests покрывают чужие tenant/contact/service.

### P0-COMFORT-04 — CRM membership capability matrix

- **Outcome:** owner, manager и staff получают понятные бизнес-права.
- **Acceptance:** документированная read/create/update/delete matrix; backend
  enforcement; negative tests для каждой роли.

### P0-COMFORT-05 — Artifact compile hardening

- **Outcome:** generated artifacts не позволяют path traversal или несанкционированную activation.
- **Acceptance:** allowlisted artifact names, schema/size limits, auth policy,
  staging directory, activation audit и negative tests.

### P0-COMFORT-06 — Auth and AI abuse controls

- **Outcome:** registration/login/recommend/compile устойчивы к простому brute force и resource abuse.
- **Acceptance:** IP/user budgets, body/time limits, structured rejection metrics,
  tests для exhaustion and retry.

### P0-COMFORT-07 — CSP and threat model

- **Outcome:** основные browser, API, AI, upload и DinD attack paths управляются явно.
- **Acceptance:** CSP/security headers tests; threat model включает XSS, CSRF,
  SSRF, prompt injection, path traversal, tenant escape и Docker trust boundary.

## 3. P1 — delivery, recovery, search and customer-visible completeness

### P1-COMFORT-01 — Versioned database migrations

- **Outcome:** schema rollout сохраняет данные и поддерживает предсказуемый deploy.
- **Acceptance:** versioned migrations вместо production `db push`; expand/contract
  policy; forward-fix/rollback runbook; migration test on populated snapshot.

### P1-COMFORT-02 — Automated backup and restore drill

- **Outcome:** потеря VPS или volume имеет измеримый recovery path.
- **Acceptance:** encrypted scheduled backups, retention, checksum, restore test,
  declared RPO/RTO and last-drill record.

### P1-COMFORT-03 — Honest replica/failover capability

- **Outcome:** заказчик понимает реальный availability level.
- **Acceptance:** replication lag metric and consistency contract; либо automated
  failover + drill, либо документация сохраняет термин «replicated topology», не HA.

### P1-COMFORT-04 — Immutable build and rollback checkpoint

- **Outcome:** test и main запускают один проверенный artifact, а не пересобирают
  разные состояния source tree.
- **Acceptance:** tagged immutable images, provenance, release manifest, database
  compatibility check, previous release rollback and smoke.

### P1-COMFORT-05 — CI quality and supply-chain gates

- **Outcome:** дефекты и уязвимости блокируются до deploy.
- **Acceptance:** lint, typecheck, unit, integration, E2E, secret/dependency/container
  scans; SBOM; signed provenance; serialized deploys; pinned images.

### P1-COMFORT-06 — Dedicated PostgreSQL search service

- **Outcome:** полнотекстовый поиск и vector retrieval не нагружают transactional
  CMS/CRM ownership databases.
- **Acceptance:**
  - отдельные Hono API, Prisma package и database ownership;
  - `test`: один Postgres без pooler/replicas;
  - `main`: primary + replicas + pooler, без необоснованного HA claim;
  - PostgreSQL full-text indexes for CMS search;
  - pgvector for semantic retrieval;
  - source-of-truth, sync, replay/rebuild and consistency ADR;
  - tenant metadata and ACL filtering for CRM-derived documents;
  - integration, relevance, stale-index and rebuild tests.
- **Non-goal:** Elasticsearch/OpenSearch не является частью выбранного решения.

### P1-COMFORT-07 — RAG privacy and authorization

- **Outcome:** AI использует релевантный контекст без утечки CRM данных.
- **Acceptance:** tenant-aware retrieval, field redaction, retention policy,
  provenance, prompt-injection corpus and authorization tests.

### P1-COMFORT-08 — Complete SeaweedFS file feature

- **Outcome:** hero images and CRM attachments проходят тот же authorization
  boundary, что и records.
- **Acceptance:** upload/download/remove, signed URLs, size/type validation,
  tenant scope, lifecycle, UI rendering and E2E.

### P1-COMFORT-09 — Playwright business journeys

- **Outcome:** публично показываемые сценарии проверяются перед deploy.
- **Acceptance:** login, role denial, CMS edit, CRM tenant denial, AI
  confirm/reject, duplicate confirm, file upload, search and SSR landing.

## 4. P2 — observability, privacy and AI governance

### P2-COMFORT-01 — OpenTelemetry and SLOs

- **Outcome:** команда видит, где ломается путь browser → AI → API → database.
- **Acceptance:** structured logs, traces, RED metrics, correlation propagation,
  dashboards, alerts and SLOs for core journeys.

### P2-COMFORT-02 — GDPR/privacy workflow

- **Outcome:** personal data can be exported, deleted or retained by documented policy.
- **Acceptance:** data inventory, lawful-purpose/retention fields, export/delete E2E,
  audit policy and backup implications.

### P2-COMFORT-03 — AI evaluation and prompt governance

- **Outcome:** смена model/prompt не ухудшает безопасность и качество незаметно.
- **Acceptance:** versioned prompts/models, offline eval set, adversarial prompt
  injection tests, quality thresholds and approval before promotion.

### P2-COMFORT-04 — AI cost and provider degradation

- **Outcome:** расходы ограничены, а outage провайдера не ломает core CMS/CRM.
- **Acceptance:** token/cost budgets by use case, timeout/retry policy, provider
  fallback, circuit breaker and cost dashboard.

### P2-COMFORT-05 — Accessibility and frontend quality

- **Outcome:** ключевые сценарии доступны большему числу пользователей.
- **Acceptance:** WCAG 2.2 AA target, keyboard/focus/screen-reader tests, Core Web
  Vitals and frontend error-recovery tests.

### P2-COMFORT-06 — Safe runtime artifact activation

- **Outcome:** проверенная спецификация может применяться без полного rebuild с
  контролируемым rollback.
- **Acceptance:** schema validation, signature/version, staged activation,
  consumer reload, health gate, rollback and audit.
- **Non-claim:** существующая запись JSON/YAML сама по себе не является hot reload.

### P2-COMFORT-07 — Reusable package productization

- **Outcome:** внешние проекты могут безопасно переиспользовать manager-facing APIs.
- **Acceptance:** public package boundary, semantic versioning, API docs,
  compatibility matrix, consumer fixture and deprecation policy.

## 5. Documentation and governance backlog

### Completed in this documentation change

- [x] `PRACTICES.md` uses auditable statuses, profiles, evidence and non-claims.
- [x] Universal catalog normalizes baseline and conditional patterns.
- [x] ADR register defines decisions and reconsideration triggers.
- [x] Search roadmap uses a dedicated PostgreSQL service, not Elasticsearch.
- [x] Production-parity, HA, backup, runtime reload and CI/CD claims are narrowed.

### Future documentation work

- [ ] Write accepted ADRs from `docs/catalog/decision-register.md`.
- [ ] Add C4 system-context, container, component and deployment views.
- [ ] Add trust-boundary and AI confirmation dynamic diagrams.
- [ ] Add domain scaffold checklist and architecture fitness tests.
- [ ] Add secret rotation and incident-response runbooks.
- [ ] Record owner, review date and evidence links for every accepted practice.

## 6. Exit criteria for the next maturity milestone

- [ ] P0 authorization and tenant tests pass.
- [ ] Duplicate AI confirmation cannot duplicate a mutation.
- [ ] Search service returns CMS results and tenant-safe vector results.
- [ ] File upload renders on landing and enforces tenant/role policy.
- [ ] CI blocks a failing E2E and produces SBOM/provenance.
- [ ] Backup restore drill meets declared RPO/RTO.
- [ ] Core journey has trace, SLO dashboard and alert.
- [ ] GDPR export/delete journey passes.
- [ ] Runtime artifacts are either safely activated or clearly remain generated proposals.
