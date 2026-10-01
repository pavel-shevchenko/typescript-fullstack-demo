# ADR-0004: Cluster in main, single-node in test

- Статус: принято
- Дата: 2026-08-19

## Контекст

Main-среда должна валидировать эксплуатационную топологию с репликами и pooler.
Полная копия этой топологии в каждой test-ветке слишком дорога и замедляет feedback loop.

## Решение

- Main: отдельные PostgreSQL-кластеры CMS/CRM/Search (primary + replicas + PgCat).
- Test/local CI: по одному PostgreSQL-узлу на bounded context.
- API и schema contracts одинаковы между main/test; отличается только topology.
- Проверки failover/replication lag/restore drill выполняются на main-like стенде отдельно.

## Последствия

- Feature/test окружения дешевле и быстрее.
- Single-node CI не подтверждает HA/failover claims.
- Документация явно разделяет replicated topology и фактическую отказоустойчивость.