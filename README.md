# Comfort — AI-first CMS + CRM (demo monorepo)

Forgejo-ready демо: Hono.js бэкенды с declarative decorators (`api-cms`, `api-crm`, `api-search`), **Next.js** фронт, **Python coding** без полного redeploy, **Jenkins + DinD** и **self-hosted Forgejo** на той же VPS. Без gateway/relay — микросервисы открыты напрямую через порты и Caddy.

---

## 1. Развёртывание (сначала это)

### 1.1 Локально — один стек

```bash
cd comfort
# Если .env нет или устарел после добавления search — скопируйте шаблон:
#   cp .env.example .env
docker compose up -d --build
```

| Сервис | URL |
|--------|-----|
| Frontend | http://localhost:4500 |
| api-cms | http://localhost:4501/api-cms/ |
| api-crm | http://localhost:4502/api-crm/ |
| python-coding | http://localhost:4503/health |
| api-search | http://localhost:4504/api-search/ |

Демо-логин (после seed): `admin@comfort.local` / `comfort123`

### 1.2 VPS — Jenkins + DinD + Caddy + Forgejo (host)

Один compose на VPS: сеть `comfort_host` (Jenkins `172.20.0.10`, DinD `172.20.0.12`, Forgejo `172.20.0.20`, Caddy `172.20.0.18`).

```bash
cd /path/to/comfort
cp .env.example .env   # домены, Jenkins, Forgejo, SSH deploy key
getent group docker | cut -d: -f3   # заменить 988 в compose если GID другой
mkdir -p /srv/comfort_apps && chgrp -R docker /srv/comfort_apps && chmod -R 2770 /srv/comfort_apps
sysctl -w net.ipv4.ip_forward=1
docker compose -f docker-compose-host.yml up -d
```

Первый вход в Forgejo: `https://$DOMAIN_FORGEJO/` (Caddy) или `http://VPS:3008`. Создайте пользователя, организацию `comfort`, репозиторий `comfort`. Deploy key (read-only): `ssh-keygen -t ed25519`; приватный ключ в `.env`:

```bash
base64 -w0 ~/.ssh/comfort-jenkins
# FORGEJO_SSH_PRIVATE_KEY_IN_BASE64=<output>
```

Люди клонируют через опубликованный SSH-порт хоста:

```bash
git clone ssh://git@<vps-or-DOMAIN_FORGEJO>:2222/comfort/comfort.git
```

Jenkins-агент внутри DinD клонирует по `COMFORT_FORGEJO_REPOSITORY_SSH_URL` (`ssh://git@comfort-forgejo:22/comfort/comfort.git`).

Webhook в репозитории Forgejo (Push events):

`http://172.20.0.10:8080/generic-webhook-trigger/invoke?token=<FORGEJO_WEBHOOK_TOKEN>`

`comfort_main_branch_pipeline` срабатывает на `refs/heads/main`, `comfort_test_branch_pipeline` — на `refs/heads/test`. Общий lock `comfort-production-deployment`.

**Безопасность host → Jenkins subnet:**

```bash
iptables -I OUTPUT 1 -d 172.20.0.12 -p tcp -m multiport --dports 80,443,2000,2001,2002,2003,2004,2005,2006,2007 -j ACCEPT
iptables -I OUTPUT 2 -d 172.20.0.20 -p tcp -m multiport --dports 22,3000 -j ACCEPT
iptables -I OUTPUT 3 -d 172.20.0.0/24 -j DROP
netfilter-persistent save
```

Приложения — внутри DinD; Forgejo/Jenkins/Caddy — на `comfort_host`.

### 1.3 Единый `.env`

Host secrets and Jenkins/Forgejo credentials live only in the ignored root `.env` (copy `.env.example` on the VPS). The application-only **`.env.template`** contains `${_VAR}` placeholders but no Jenkins/Forgejo credentials; the agent validates required values before deployment.

```bash
docker compose -p comfort-main -f docker-compose-prod-common.yml -f docker-compose-for-main-branch.yml up -d --build
# или test overlay:
docker compose -p comfort-test -f docker-compose-prod-common.yml -f docker-compose-for-test-branch.yml up -d --build
```

Имена Compose-проектов обязательны: `comfort-main` и `comfort-test` изолируют сети, контейнеры и `down --remove-orphans` каждой ветки. Main публикует search на `MAIN_BRANCH_API_SEARCH_PORT` (по умолчанию `2006`), test — на `TEST_BRANCH_API_SEARCH_PORT` (`2007`). Caddy проксирует `/api-search/*`.

Main использует PgCat `ghcr.io/postgresml/pgcat:v1.2.0` для CMS, CRM и search; `SEARCH_DATABASE_URL` идёт через pool `search-pgcat:6434`, а prepare всегда использует прямой `SEARCH_DATABASE_DIRECT_URL`. Test запускает только `search-pg-1`, без PgCat.

### 1.4 Backup app data only

Только bind-деревья Postgres + SeaweedFS (`*_branch_backup_data/`). Код — в Forgejo; Jenkins/Forgejo home сюда не входят.

```bash
# cron, ежедневно
infrastructure/scripts/backup-app-data.sh main /backup/comfort
infrastructure/scripts/backup-app-data.sh test /backup/comfort
```

Restore main: `compose down` ветки → `rsync -a /backup/comfort/main/ /srv/comfort_apps/comfort_main_branch_backup_data/` → `compose up`. Для согласованности лучше остановить ветку перед rsync; online — `pg_dump` по трём БД вместо копирования PGDATA.

---

## 2. Архитектура (для агентов IDE)

```
comfort/
├── applications/
│   ├── comfort_backends/
│   │   ├── api-cms/      Hono.js, JWT auth, CMS + AI recommendations
│   │   └── api-crm/      Hono.js, tenant только здесь (CrmTenantMember)
│   └── comfort_public/   Next.js 16, server actions, useReducer+immer
├── packages/
│   ├── prisma_cms|crm/   Database per service, capitalized prefixes Cms*/Crm*
│   ├── domain_unified/   buildDomainController, includePermissions, *-access.ts
│   ├── validation/       class-validator DTO implements Prisma models
│   ├── types_consts_utils/
│   └── react_common/     comfort-ai server actions
├── services/python_coding/  schemas + recommend + artifacts → generated/runtime
├── docker-compose.yml              локальный полный стек
├── docker-compose-prod-common.yml  prod: prepare, Redis, SeaweedFS
├── docker-compose-for-main-branch.yml / docker-compose-for-test-branch.yml
├── docker-compose-host.yml         Jenkins + DinD + Caddy + Forgejo на VPS
└── infrastructure/            pgcat, postgres, seaweedfs, jenkins, caddy, forgejo, scripts
```

### Поток AI

```
prompt → react_common server action → python-coding /recommend (N вариантов)
  → каждый вариант = ComfortAiRecommendation (status: pending)
  → пользователь/admin подтверждает → domain_unified CRUD apply
```

Python `/artifacts/compile` пишет JSON/YAML в `generated/runtime/` — подхват без полного image rebuild (этап 2: hot-reload hooks в Hono/Next).

### RBAC

| Контекст | Роли | Tenant |
|----------|------|--------|
| CMS | `admin` / `customer` | **нет** |
| CRM | те же JWT-роли + membership | **да**, scope через `CrmTenantMember.userId` |

`includePermissions`: `admin: true`, `customer` — только дерево join, **никогда** `customer: true`.

### Прямые порты (без BFF)

- Next server actions → `BASE_URL_OF_API_CMS` / `BASE_URL_OF_API_CRM` / `BASE_URL_OF_API_SEARCH`
- Caddy на prod проксирует `/api-cms/public/*`, `/api-crm/public/*` и `/api-search/*` в DinD-порты ветки

---

## 3. Этапы доработки (roadmap)

### Этап 2 (текущий) — выполнено

- [x] httpOnly cookie auth + login/register pages
- [x] Полный набор domain controllers CMS + CRM
- [x] Admin UI: CMS / CRM / AI / search / privacy, confirm/reject + optimistic UI
- [x] SSR лендинг через `public/cms-read/landing`
- [x] AI: whitelist apply, audit log, `ComfortAiCallLog`, Python DMMF + GROQ fallback
- [x] docker-compose-prod-common + branch overlays, Jenkins smoke
- [x] Throttler (api-cms + api-crm), Prisma Redis cache
- [x] `.cursorrules`, `.env.template`, backup/restore README
- [x] `CmsAiPromptSlot` seed + отображение в админке
- [x] File mixin SeaweedFS (hero images) + metadata-only listing

### Этап 3 — реализован как reference/demo, см. [STAGE3.md](./STAGE3.md)

- Пакет **E:** отдельный PostgreSQL search/pgvector (без Elasticsearch), tenant-aware RAG,
  GDPR, CSP, file mixin, observability, E2E
- Пакет **F:** PRACTICES catalog mapping, Mermaid, ADR «нет BFF», scaffold checklist

См. также [PRACTICES.md](./PRACTICES.md).

---

## 4. Как надёжно тестировать use cases

Демо-логин после seed: `admin@comfort.local` / `comfort123`.

### 4.1 Быстрый health-check (до UI)

```bash
curl -sf http://localhost:4503/health          # python-coding
curl -sf http://localhost:4501/api-cms/         # или /system/ready если есть
curl -sf -X POST http://localhost:4501/api-cms/public/cms-read/landing \
  -H 'content-type: application/json' -d '{}'
docker compose ps
```

На VPS замените `localhost` на IP/`WEB_PORT` (фронт), `CMS_API_PORT` и т.д.

### 4.2 Ручной сценарий (главное)

| # | Use case | Как проверить | Ожидание |
|---|----------|---------------|----------|
| 1 | Auth gate | Открыть `/admin` без cookie | 307 → `/login`, стили + переключатель темы |
| 2 | Login | `admin@comfort.local` / `comfort123` | Cookie `auth_token`, `/admin` с email/role |
| 3 | Landing SSR | `/` | Hero/страница/статьи из seed (не пустой 500) |
| 4 | CMS snapshot | Админка → CMS → карандаш / «Добавить» | попапы create/update; файлы — только в попапе Articles |
| 5 | CRM snapshot | CRM → карандаш / «Добавить» | Tenants / Contacts / Services / Appointments |
| 6 | **AI confirm flow** | вкладка **AI** (см. ниже) | request → pending → Confirm+Apply |
| 7 | **Search (FTS)** | `/search` (см. §4.4) | CMS-контент из seed без ручной индексации |
| 8 | Privacy | вкладка PRIVACY | export/erase UI отвечает |

### 4.3 AI — подробный happy path

Поток: **prompt → python-coding `/recommend` → draft → save pending → Confirm+Apply → domain CRUD**.

GROQ/OpenAI **не обязательны**: без ключей Python отдаёт heuristic-рекомендации (E2E это и гоняет). Ключи `GROQ_API_KEY` / `OPENAI_API_KEY` лишь улучшают качество черновиков.

1. Залогинься админом → `/admin` → вкладка **AI**.
2. Проверь python: `curl -sf http://localhost:4503/health` (или `:4503` с VPS). Если Connection refused — контейнер не жив:

```bash
docker compose ps python-coding
docker compose up -d --build python-coding
docker logs -f comfort-python-coding-1
curl -sf http://localhost:4503/health
```
3. В textarea введи уникальный промпт, например:  
   `обнови promo hero-main: новый заголовок про комфорт {unix_ts}`  
   (уникальность нужна, чтобы отличить новую запись).
4. Нажми **Запросить рекомендации** → должны появиться **Черновики от Python** и кнопки **Confirm + Apply** в pending.
5. Нажми **Confirm + Apply** → pending уменьшается на 1, красной ошибки нет.
6. Проверь эффект: вкладка **CMS** / **CRM** (в зависимости от `targetService` черновика) — данные изменились или audit/recommendation ушли из pending.
7. Опционально: поле «дозапрос» (`fullName`, `tenantId`) → в черновике `askUserFor`, такой draft **не** сохраняется в pending, пока поле не закрыто сценарием.

Если AI падает: смотри `docker logs comfort-python-coding-1` и `comfort-api-cms-1`; Next покажет `python-coding failed: …` или `domain-unified … -> 4xx/5xx`.

### 4.4 Полнотекстовый поиск (FTS)

После `docker compose up` seed **автоматически** индексирует опубликованные CMS-материалы (страницы, статьи, promo) и CRM-контакты. Дополнительно мутации через админку/AI **синхронизируют** индекс (`comfortSearchSync` на `cmsPage`, `cmsArticle`, `cmsPromoBlock`, `crmContact`).

**Публичный поиск** (`/search`, без логина) видит только документы без `tenantKey` — то есть CMS-контент.

FTS-конфиг `comfort_fts`: **unaccent** → **hunspell** RU/EN → **snowball**. Словари **не лежат в git**: при `docker compose build search-pg-1` пакеты `hunspell-en-us` и `hunspell-ru` ставятся в образ и копируются в `tsearch_data` (`en_us.*`, `ru_ru.*`). Если пакетов нет, **сборка падает**, а не молча откатывается на snowball.

```bash
docker compose build search-pg-1
# в логе сборки должно быть: tsearch: hunspell dictionaries ready
docker compose up -d search-pg-1
docker compose up migrate
docker compose restart api-search
```

| Запрос | Ожидание |
|--------|----------|
| `Comfort` | лендинг / intro-документ |
| `Быстрый старт` | статья seed `getting-started` |
| `старте` / `старта` | та же статья (морфология) |
| `рекомендацию` | body «AI-рекомендации» |
| `AI-first CMS` | home page |
| `Управляйте CMS` | promo `hero-main` |

```bash
# API напрямую (локально)
curl -sf -X POST http://localhost:4504/api-search/public/search/query \
  -H 'content-type: application/json' \
  -d '{"query":"Быстрый старт","page":1,"pageSize":5}'
```

На VPS: замените хост/порт (`SEARCH_API_PORT`, обычно `4504` или `2006`/`2007` на prod-ветках).

**CRM-контакты** tenant-scoped: в UI `/search` без cookie их не видно. После логина админом можно проверить через customer search (вкладка SEARCH в админке или `customerSearchAction`):

| Запрос (под admin) | Ожидание |
|--------------------|----------|
| `Анна Клиентова` | seed-контакт `demo-salon` |
| `Anton` | контакт, созданный через AI confirm flow |

Если `/search` пустой после первого поднятия стека:

```bash
docker compose logs migrate | tail -30   # должно быть: Search seed ok, reindexed=N
docker compose restart api-cms api-crm api-search
```

Ручная переиндексация (опционально, из каталога `comfort`):

```bash
CMS_DATABASE_URL=... CRM_DATABASE_URL=... SEARCH_DATABASE_URL=... \
  bun run --bun packages/prisma_search/prisma/seeds/init.seed.ts
```

### 4.5 Playwright (регресс)

Из каталога `applications/comfort_public` (или через контейнер, если так заведено в CI):

```bash
# smoke: auth + AI confirm + landing
bun run e2e:smoke

# всё
bun run e2e
```

Ключевые спеки: `e2e/auth.spec.ts`, `e2e/ai-recommendation.spec.ts`, `e2e/landing.spec.ts`, `e2e/admin.spec.ts`, `e2e/search.spec.ts`.

Для внешнего URL задайте baseURL Playwright (см. `playwright.config.ts` / `e2e/helpers/environment.ts`).

### 4.6 Тема

Кнопка солнце/луна на `/`, `/login`, `/register`, `/admin`. `next-themes` + `class` на `<html>`, как в Анне (`defaultTheme=system`).
