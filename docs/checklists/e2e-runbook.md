# Runbook: Playwright E2E

Тесты не запускают и не собирают frontend. Перед запуском deployment должен быть доступен.

## Переменные

- `E2E_BASE_URL` — URL Next.js, default `http://127.0.0.1:4500`.
- `E2E_CMS_URL` — CMS API с prefix, default `http://127.0.0.1:4501/api-cms`.
- `E2E_CRM_URL` — CRM API с prefix, default `http://127.0.0.1:4502/api-crm`.
- `E2E_SEARCH_URL` — search API с prefix; не задавать до интеграции.
- `E2E_ADMIN_EMAIL` / `E2E_ADMIN_PASSWORD` — credentials seeded admin.

Для branch deployment все URL задаются внешними HTTPS URL этого deployment. Не передавать
credential значениями в командной строке; использовать Jenkins Credentials/secret manager.

## Команды

```sh
bun install --frozen-lockfile
bunx playwright install --with-deps chromium
bun run e2e:smoke
```

Полный набор: `bun run e2e`. CI-набор с одним worker: `bun run e2e:ci`. Contract tests требуют
`/health` и `/ready` у CMS/CRM; search contract и `/search` UI пропускаются только пока search
service/route отсутствуют.

## Артефакты

- `applications/comfort_public/test-results/junit/results.xml`
- `applications/comfort_public/playwright-report/`
- failure screenshots, video и retained traces в `applications/comfort_public/test-results/`

Публиковать JUnit всегда, HTML/test-results — при любом результате. Не публиковать `.env` или
Playwright storage state.
