# Checklist: restore drill

Проводить в изолированном namespace/host. Никогда не восстанавливать тестовую копию поверх main.
Значения credentials берутся из secret manager и не попадают в протокол.

## Подготовка

- [ ] Назначены владелец, наблюдатель, дата, целевые RPO/RTO и backup timestamp.
- [ ] Выбраны отдельные drills для CMS PostgreSQL, CRM PostgreSQL и SeaweedFS.
- [ ] Проверены checksum, размер, retention и доступность ключа шифрования backup.
- [ ] Подготовлены временные DNS/ports/network и single-node PostgreSQL для restore.
- [ ] Исходные main containers не изменяются; destructive-команды заблокированы.

## PostgreSQL CMS

- [ ] Создана пустая временная CMS database нужной версии PostgreSQL.
- [ ] Восстановлены роли/схема/данные через approved backup tooling.
- [ ] Выполнены integrity checks, row-count samples и проверка последних ожидаемых записей.
- [ ] `api-cms` запущен с временным URL БД.
- [ ] Прошли CMS `/health`, `/ready`, landing SSR и CMS admin smoke.

## PostgreSQL CRM

- [ ] Создана пустая временная CRM database нужной версии PostgreSQL.
- [ ] Восстановлены роли/схема/данные через approved backup tooling.
- [ ] Проверены tenant memberships и отсутствие чтения данных соседнего tenant.
- [ ] `api-crm` запущен с временным URL БД.
- [ ] Прошли CRM `/health`, `/ready` и CRM admin smoke.

## SeaweedFS

- [ ] Метаданные и volumes восстановлены в отдельное хранилище/bucket.
- [ ] Проверены object count, выборочные checksum и content type.
- [ ] Signed/read URL проверен без публикации credentials.
- [ ] Отсутствующие объекты и orphan metadata перечислены в отчёте.

## Проверка topology

- [ ] Functional restore сначала подтверждён на single-node.
- [ ] Отдельно проверено подключение восстановленного CMS/CRM к PgCat.
- [ ] На main-подобном стенде проверены replica bootstrap, read routing и controlled failover.
- [ ] Зафиксировано, что single-node drill не доказывает работоспособность failover.

## Завершение

- [ ] Измеренные RPO/RTO сопоставлены с целями.
- [ ] Записаны backup ID/timestamp, версии, checksum и результаты без секретов/PII.
- [ ] Созданы задачи на расхождения с владельцами и сроками.
- [ ] Временные databases, buckets, credentials и DNS удалены.
- [ ] Cleanup подтверждён вторым участником.
