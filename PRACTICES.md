# Comfort practices catalog

Этот документ отвечает на два разных вопроса:

1. **Что получает бизнес** от архитектурной практики.
2. **Какими проверяемыми артефактами** Comfort подтверждает реализацию.

Comfort — исполняемая демонстрация архитектурных механизмов, а не сертификат
production-ready. Наличие контейнера, реплики или конфигурации показывает
топологию, но само по себе не доказывает отказоустойчивость, безопасность или
операционную зрелость.

Универсальный справочник и правила отбора практик:
[docs/catalog/universal-practices.md](./docs/catalog/universal-practices.md).
Реестр предлагаемых ADR:
[docs/catalog/decision-register.md](./docs/catalog/decision-register.md).
Будущие улучшения вынесены в [STAGE3.md](./STAGE3.md).

## 1. Статусы и правила доказательности

| Статус | Значение |
|---|---|
| `IMPLEMENTED` | Механизм присутствует в текущем коде или конфигурации, а его граница применения понятна. |
| `DEMO` | Рабочая или конфигурационная демонстрация с существенными production-ограничениями. |
| `PLANNED` | Реализации пока нет; есть цель и критерии готовности в `STAGE3.md`. |
| `NOT_APPLICABLE` | Решение намеренно не используется; нужен ADR с причиной и триггером пересмотра. |
| `RISK` | Механизм существует, но обнаруженное ограничение не позволяет считать его безопасной или завершённой практикой. |

Статусы основаны на инспекции репозитория. Если в пункте не указан выполненный
автотест или drill, эксплуатационное поведение не считается доказанным.

Для каждого пункта используются поля:

- **Outcome** — результат для бизнеса.
- **Profiles** — где практика применима: `local`, `test`, `main`.
- **Evidence** — конкретный код, конфигурация или документ.
- **Verification** — воспроизводимая проверка либо явно указанное отсутствие проверки.
- **Limitations / non-claims** — что нельзя заключать из текущей реализации.
- **Next** — следующий уровень зрелости.
- **ADR** — решение из реестра, фиксирующее причины и триггеры пересмотра.

## 2. Deployment profiles

### `local`

- CMS и CRM имеют отдельные конфигурации Postgres.
- Для каждого контекста Compose описывает primary, две streaming replicas и pgcat.
- API и Python coding service публикуются на локальные host-порты.
- Это среда демонстрации и разработки, а не модель безопасной публичной сети.

### `test`

- Один Postgres для CMS и один для CRM.
- Нет реплик и pgcat.
- SeaweedFS работает без репликации.
- Сниженная стоимость и простота тестового стенда — намеренное решение.

### `main`

- Для CMS и CRM описаны primary, две streaming replicas и pgcat.
- SeaweedFS имеет отдельный volume replica.
- Приложения разворачиваются Jenkins pipeline внутри DinD и публикуются через Caddy.
- [!] Автоматический failover Postgres, подтверждённые RPO/RTO и immutable release
  promotion пока не реализованы.

## 3. Architecture and domain boundaries

### ARC-001 — Разделение CMS и CRM → независимое развитие бизнес-направлений

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** изменения контента и клиентских процессов локализованы в разных
  сервисах и схемах данных.
- **Evidence:** `applications/comfort_backends/api-cms`,
  `applications/comfort_backends/api-crm`, `packages/prisma_cms`,
  `packages/prisma_crm`.
- **Verification:** статически проверить отсутствие общей Prisma-схемы и
  отдельные `CMS_DATABASE_URL` / `CRM_DATABASE_URL`.
- **Limitations / non-claims:** разделение схем демонстрирует bounded-context
  boundary, но не доказывает полное применение DDD, aggregate invariants или
  независимый жизненный цикл команд.
- **Next:** добавить context map, владельцев данных и contract tests.
- **ADR:** `ADR-0001`.

### ARC-002 — Database per service → изоляция изменений и нагрузки

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** CMS и CRM не изменяют одну физическую схему через общий Prisma client.
- **Evidence:** отдельные Prisma packages, datasource variables и Compose services.
- **Verification:** `docker compose config` должен показать разные datasource
  endpoints; schema generation выполняется отдельно для обоих packages.
- **Limitations / non-claims:** межсервисная согласованность не является
  транзакционной; её политика пока не документирована.
- **Next:** определить consistency model, idempotency и reconciliation.
- **ADR:** `ADR-0001`, `ADR-0007`.

### ARC-003 — Monorepo + workspaces → согласованные изменения общих контрактов

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** приложения и общие пакеты версионируются совместно.
- **Evidence:** корневой `package.json`, `applications/*`, `packages/*`.
- **Verification:** `bun install` из корня разрешает workspace dependencies.
- **Limitations / non-claims:** monorepo сам по себе не гарантирует корректные
  package boundaries.
- **Next:** architecture fitness tests для imports и ownership.
- **ADR:** `ADR-0001`.

### ARC-004 — Backend domain boundary → права нельзя обойти прямым HTTP-вызовом

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** Prisma Client не переносится в React; опубликованные CRUD-операции
  проходят Prisma scopes, DTO и ограничения запросов.
- **Evidence:** `packages/domain_unified`, controller configs в
  `applications/comfort_backends/*/src/domain-unified`.
- **Verification:** проверить, что public controller routes используют
  `buildDomainController`, guard, DTO и scope callbacks.
- **Limitations / non-claims:** кастомные endpoints требуют отдельной проверки;
  Next server actions не являются границей безопасности.
- **Next:** автоматический fitness test для каждого публичного mutation endpoint.
- **ADR:** `ADR-0003`.

### ARC-005 — Gateway/BFF не используется → меньше операционных компонентов

- **Status:** `NOT_APPLICABLE`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** Next server actions обращаются напрямую к CMS/CRM API, снижая
  стоимость и сложность демо.
- **Evidence:** `BASE_URL_OF_API_CMS`, `BASE_URL_OF_API_CRM`, Caddy routes.
- **Verification:** container/deployment diagram не должен содержать relay или gateway.
- **Limitations / non-claims:** это не универсальная рекомендация.
- **Next:** пересмотреть при появлении нескольких внешних клиентов, protocol
  aggregation, централизованной edge-policy или отдельной API-команды.
- **ADR:** `ADR-0002`.

## 4. Identity, authorization and tenancy

### SEC-001 — JWT в httpOnly cookie → снижение риска кражи токена browser script

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** клиентский JavaScript не получает JWT после login.
- **Evidence:** `packages/react_common/server/auth-cookie.ts`, auth server actions.
- **Verification:** browser cookie должен иметь `HttpOnly`, `SameSite=Lax` и
  `Secure` в production.
- **Limitations / non-claims:** нет доказанной revocation/rotation стратегии,
  полноценного session refresh и security E2E.
- **Next:** session lifecycle, CSRF review, short-lived access token и revocation.
- **ADR:** `ADR-0004`.

### SEC-002 — Backend role scopes → операции ограничиваются ролью

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** `admin` и `customer` получают разные выборки и mutation rights.
- **Evidence:** `*-access.ts`, controller `checkPermissions` и
  `checkPermAndGetScope`.
- **Verification:** integration matrix должна проверять read/create/update/delete
  для обеих ролей.
- **Limitations / non-claims:** это базовая двухролевая модель, не универсальная
  система editor/publisher/reviewer.
- **Next:** capability matrix и негативные authorization tests.
- **ADR:** `ADR-0003`, `ADR-0005`.

### SEC-003 — CRM tenant scopes → участник не читает чужой tenant

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** read/update/delete scopes строятся из `CrmTenantMember`.
- **Evidence:** `api-crm/src/domain-unified/crm/crm-access.ts`.
- **Verification:** нужны negative tests для чужого `tenantId`, relation IDs,
  include/select и create payload.
- **Limitations / non-claims:** наличие membership scope ещё не доказывает
  безопасное назначение tenant при create; роли `owner/manager/staff` не
  образуют подтверждённую capability matrix.
- **Next:** server-owned tenant assignment, relation validation и tenant-escape tests.
- **ADR:** `ADR-0005`.

### SEC-004 — Join whitelist → ограничение утечки связанных данных

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** customer не может произвольно раскрывать Prisma relation graph.
- **Evidence:** controller `includePermissions`; `customer` задаётся деревом или `{}`.
- **Verification:** unit/integration tests должны отклонять неразрешённые
  `include`, relation fields в `select` и вложенные joins.
- **Limitations / non-claims:** корректность зависит от актуальности whitelist
  при добавлении клиентских include.
- **Next:** architecture test, сопоставляющий frontend queries и whitelist.
- **ADR:** `ADR-0003`.

### SEC-005 — DTO и query ceilings → ограничение опасных публичных запросов

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** лишние поля отбрасываются, а unbounded read/bulk mutation ограничены.
- **Evidence:** global `ValidationPipe`, `packages/domain_unified/request-guards.ts`.
- **Verification:** проверить default/max `take`, batch ceiling и запрет пустого
  `deleteMany.where`.
- **Limitations / non-claims:** это не заменяет threat model, payload limits для
  всех custom routes или WAF.
- **Next:** abuse tests и endpoint-level size/time budgets.
- **ADR:** `ADR-0003`.

## 5. Data, storage and recovery

### DATA-001 — Replicated PostgreSQL topology → демонстрация read scaling

- **Status:** `DEMO`
- **Profiles:** `local`, `main`; в `test` намеренно отсутствует
- **Outcome:** pgcat может направлять запросы к primary/replicas согласно своей
  конфигурации.
- **Evidence:** `docker-compose.yml`,
  `docker-compose-for-main-branch.yml`, `infrastructure/pgcat`.
- **Verification:** поднять профиль, проверить streaming status, routing и
  replication lag; автоматизированного drill в репозитории не зафиксировано.
- **Limitations / non-claims:** это не доказанная HA: нет автоматического primary
  election/failover, lag SLO и failover test.
- **Next:** определить consistency contract и либо реализовать failover, либо
  сохранять точное название «replicated topology».
- **ADR:** `ADR-0008`.

### DATA-002 — Backup/restore runbook → понятный путь ручного восстановления

- **Status:** `DEMO`
- **Profiles:** `test`, `main`
- **Outcome:** описано, какие bind-mounted каталоги необходимо сохранять.
- **Evidence:** backup/restore section в `README.md`.
- **Verification:** пока нет scheduled job, checksum, retention policy или
  зафиксированного restore drill.
- **Limitations / non-claims:** наличие инструкции не доказывает backup
  capability, PITR, RPO или RTO.
- **Next:** автоматический encrypted backup, retention, restore test и метрики.
- **ADR:** `ADR-0009`.

### DATA-003 — Redis cache/throttling → снижение повторной нагрузки и abuse

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** общий Redis используется domain throttling и Prisma cache extension.
- **Evidence:** `ComfortThrottlerModule`, Prisma services,
  `prismaAutoCacheInvalidation`.
- **Verification:** cache hit/invalidation и per-user throttling должны быть
  подтверждены integration tests; эксплуатационные метрики пока не заявляются.
- **Limitations / non-claims:** Redis single instance не является HA.
- **Next:** metrics, cache consistency tests и degradation policy при отказе Redis.
- **ADR:** `ADR-0010`.

### DATA-004 — SeaweedFS S3 topology → база для файлового контента

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** hero-images и файловые metadata-потоки работают через domain_unified file mixin.
- **Evidence:** SeaweedFS services, bucket init script, `CmsArticle` file handlers + admin UI.
- **Verification:** typecheck + focused tests; E2E file journey покрыт частично, полный сценарий остаётся в roadmap.
- **Limitations / non-claims:** нет signed URLs policy и полного lifecycle governance.
- **Next:** расширить E2E и retention policy.
- **ADR:** `ADR-0011`.

### DATA-005 — Dedicated PostgreSQL search service → изолируемая поисковая нагрузка

- **Status:** `DEMO`
- **Profiles:** `test` — singleton Postgres; `main` — replicated topology + pooler
- **Outcome:** полнотекстовый и vector/RAG поиск вынесен в отдельный `api-search` + `prisma_search`.
- **Evidence:** `applications/comfort_backends/api-search`, `packages/prisma_search`, pgvector migration, tenant-aware customer endpoint.
- **Verification:** focused tests + typecheck + compose overlays.
- **Limitations / non-claims:** реплики не объявляются автоматическим HA/failover.
- **Next:** consistency drills и relevance regression set.
- **ADR:** `ADR-0012`.
## 6. AI safety and governance

### AI-001 — Individually reviewable recommendations → человек контролирует изменения

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** модель предлагает отдельные `ComfortAiRecommendation`, а не пишет
  напрямую в Postgres.
- **Evidence:** Python `/recommend`, recommendation model, confirm/reject actions.
- **Verification:** E2E должен доказать pending → confirm/reject → result.
- **Limitations / non-claims:** одна recommendation может содержать bounded bulk
  operation; это не означает отсутствие batch semantics.
- **Next:** риск-ориентированная approval policy и Playwright journey.
- **ADR:** `ADR-0006`.

### AI-002 — Model/operation whitelist + backend checks → ограничение полномочий модели

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** неизвестная модель или операция не отправляется на published CRUD.
- **Evidence:** `packages/react_common/server-actions/comfort-ai/apply-whitelist.ts`
  и Hono controllers.
- **Verification:** negative tests для unknown model/op, forbidden fields, tenant
  escape и destructive payload.
- **Limitations / non-claims:** whitelist модели/операции не заменяет field policy,
  prompt-injection defense и idempotency.
- **Next:** tool-level schemas, field allowlists и adversarial evals.
- **ADR:** `ADR-0006`, `ADR-0007`.

### AI-003 — Confirmation state and audit → прослеживаемость AI-изменений

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** recommendation проходит через claim/apply/finish state machine с фиксированным confirmer и audit trail.
- **Evidence:** `ComfortAiRecommendation`, `ComfortAuditEvent`,
  `ComfortAiCallLog`, confirm action, `claim-apply` / `finish-apply` compare-and-set flow.
- **Verification:** `comfort-ai-recommendation.test.ts` покрывает intent audit,
  success/failure audit, deterministic retry from `failed`, duplicate claim after
  success, invalid proof rejection и actor mismatch conflict.
- **Limitations / non-claims:** целевая CMS/CRM мутация остаётся отдельной
  transaction boundary относительно CMS state machine; это даёт прослеживаемость
  и идемпотентный claim, но не превращает весь cross-service apply в single DB transaction.
- **Next:** при росте требований можно добавить outbox/compensation policy и
  end-to-end crash recovery drills.
- **ADR:** `ADR-0007`.

### AI-004 — Runtime artifact generation → быстрое создание проверяемых спецификаций

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** `/artifacts/compile` записывает JSON/YAML в `generated/runtime`.
- **Evidence:** `services/python_coding/main.py`, compile server action.
- **Verification:** проверить allowlisted artifact name, schema validation и
  содержимое generated files; эти hardening-проверки ещё не заявлены готовыми.
- **Limitations / non-claims:** запись файла не означает hot reload или применение
  без redeploy. Runtime consumers пока запланированы.
- **Next:** безопасная staging/activation/rollback модель.
- **ADR:** `ADR-0014`.

## 7. Frontend and product delivery

### UI-001 — Server actions → use cases скрыты от client bundle

- **Status:** `IMPLEMENTED`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** браузер не получает Prisma client и серверные credentials.
- **Evidence:** `packages/react_common/server-actions`,
  `applications/comfort_public`.
- **Verification:** inspect client bundles/import boundaries; E2E для auth and admin.
- **Limitations / non-claims:** server actions не заменяют backend authorization.
- **Next:** architecture import test и contract tests.
- **ADR:** `ADR-0003`.

### UI-002 — Reducer-based complex state → предсказуемые admin interactions

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** recommendations panel централизует сложные state transitions.
- **Evidence:** admin AI recommendations component with `useReducer` + immer.
- **Verification:** component tests для optimistic confirm/reject and rollback.
- **Limitations / non-claims:** это не подтверждает accessibility, performance,
  error recovery или весь frontend state architecture.
- **Next:** WCAG review, component tests и performance budget.
- **ADR:** не требуется.

## 8. Delivery and operations

### OPS-001 — Branch-specific Compose deployment → воспроизводимые test/main profiles

- **Status:** `DEMO`
- **Profiles:** `test`, `main`
- **Outcome:** один pipeline выбирает явный topology overlay и env-driven ports.
- **Evidence:** `docker-compose-prod-common.yml`, branch overlays, Groovy jobs.
- **Verification:** `docker compose ... config`; Jenkins smoke проверяет schema
  endpoints, frontend и Python health.
- **Limitations / non-claims:** pipeline не доказывает полноценный CI/CD:
  отсутствуют зафиксированные lint/type/unit/security gates, immutable artifact
  promotion, progressive delivery и automatic rollback.
- **Next:** package `P1-COMFORT-05`.
- **ADR:** `ADR-0013`.

### OPS-002 — Jenkins + DinD control plane → отделение deployment Docker state

- **Status:** `RISK`
- **Profiles:** host control plane для `test`, `main`
- **Outcome:** application containers запускаются Docker daemon внутри DinD, а
  не host daemon.
- **Evidence:** `docker-compose-host.yml`, Jenkins JCasC.
- **Verification:** deployment containers должны появляться только в DinD daemon.
- **Limitations / non-claims:** privileged DinD, Docker API/socket и host bind
  mounts остаются высокой trust boundary; это не security isolation guarantee.
- **Next:** threat model, least privilege, credentials/provenance и network tests.
- **ADR:** `ADR-0013`.

### OPS-003 — Environment-driven configuration → один код для разных deploy profiles

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** domains, ports, URLs and credentials передаются через environment.
- **Evidence:** `.env.example`, `.env.template`, Compose substitutions.
- **Verification:** generated `.env` не должен попадать в git; каждый профиль
  разрешает полный `docker compose config`.
- **Limitations / non-claims:** единый root `.env` — удобство demo, а не
  доказательство полного 12-factor compliance или безопасного secret lifecycle.
- **Next:** external secret store, rotation runbook и per-environment ownership.
- **ADR:** `ADR-0015`.

### OPS-004 — Correlation data → начало сквозной диагностики AI flow

- **Status:** `DEMO`
- **Profiles:** `local`, `test`, `main`
- **Outcome:** AI calls и audit events могут связываться correlation ID.
- **Evidence:** request action, Python service, `ComfortAiCallLog`.
- **Verification:** один ID должен находиться в frontend request, Python log,
  backend audit and resulting mutation.
- **Limitations / non-claims:** это не observability stack; нет доказанных traces,
  metrics, SLO dashboards или alerts.
- **Next:** OpenTelemetry package in `STAGE3.md`.
- **ADR:** `ADR-0016`.

## 9. Planned/Risk quality capabilities

Эти пункты не считаются реализованными:

- `DEMO` — CSP/security headers включены для текущего публичного приложения; полный threat model остаётся roadmap.
- `DEMO` — Playwright smoke (auth/landing/search/api-contract/ai) уже есть; полный negative matrix остаётся roadmap.
- `PLANNED` — OpenTelemetry traces, metrics, SLO and alerts.
- `PLANNED` — GDPR export/delete, retention and privacy workflow.
- `PLANNED` — automated backup, restore drill, RPO/RTO.
- `PLANNED` — SBOM, provenance, dependency/container/secret scanning.
- `PLANNED` — accessibility review and WCAG acceptance.
- `PLANNED` — AI evals, prompt-injection tests, privacy redaction and cost budgets.
- `PLANNED` — public reusable package boundary, semantic versioning and consumer tests.

## 10. Explicit non-goals and reconsideration triggers

| Decision | Status | Business reason now | Reconsider when |
|---|---|---|---|
| Gateway/BFF | `NOT_APPLICABLE` | меньше сервисов и latency в demo | несколько внешних clients, aggregation или central edge policy |
| Tenant semantics in CMS | `NOT_APPLICABLE` | CMS content общий для сайта | white-label sites или tenant-owned content |
| Separate auth microservice | `NOT_APPLICABLE` | один identity source и небольшой контур | несколько продуктов/teams или federated identity |
| Service mesh/Kubernetes | `NOT_APPLICABLE` | Compose соответствует масштабу demo | большое число services, orchestration/SLO demands или multi-node scheduling |

## 11. Catalog maintenance

- Владелец документа: `TBD`.
- Review cadence: `TBD`, рекомендуется раз в квартал и перед публичным релизом.
- Last reviewed: `2026-08-19`.
- Новый `IMPLEMENTED` пункт требует evidence и verification.
- Если проверка отсутствует, использовать `DEMO`, `PLANNED` или `RISK`.
- Перенос из `PLANNED` выполняется только после обновления acceptance criteria,
  evidence и non-claims.
