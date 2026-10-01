# ADR-0002: Dedicated PostgreSQL search service before dedicated engine

- Статус: принято
- Дата: 2026-08-19

## Контекст

Поиск и AI retrieval формируют отдельный профиль нагрузки (FTS + pgvector), который
не должен деградировать transactional пути CMS/CRM. Для MVP важно сохранить
простую эксплуатацию и единый стек PostgreSQL.

## Решение

Выделить отдельный bounded context поиска:

- сервис `applications/comfort_backends/api-search` (Hono.js, declarative decorators);
- отдельный Prisma package `packages/prisma_search` и отдельная БД `comfort_search`;
- PostgreSQL FTS (`comfort_fts`: unaccent + hunspell RU/EN + snowball, GIN) + `pgvector` для semantic retrieval;
- стабильный публичный API-контракт поиска, независимый от внутреннего индекса.

Elasticsearch/OpenSearch не вводится до подтвержденной необходимости.

## Последствия

- Поисковая нагрузка изолирована от ownership БД CMS/CRM.
- Search можно масштабировать и развивать отдельно при сохранении API.
- Будущий переход на отдельный search engine потребует rebuild/dual-write стратегии.