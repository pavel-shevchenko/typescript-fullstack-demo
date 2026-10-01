# Checklist: новый домен Comfort

## Граница и данные

- [ ] Определён bounded context: CMS или CRM; внутренности другого контекста не импортируются.
- [ ] Prisma-модель добавлена только в `prisma_cms` или `prisma_crm`.
- [ ] Имя модели имеет `Cms`/`Crm` prefix, таблица — `cms_*`/`crm_*`.
- [ ] Relation-поля названы с большой буквы, обычные поля — с маленькой.
- [ ] Для ID выбран `bigint`, если нет обоснованного внешнего идентификатора.
- [ ] После схемы выполнен `npx prisma generate` в соответствующем Prisma-пакете.
- [ ] Seed идемпотентен и не содержит production-секретов.

## Backend scaffold

- [ ] Структура `domain-unified/<domain>/` скопирована с ближайшего полного CMS/CRM-домена:
      controller, module, access и exports.
- [ ] Controller использует `buildDomainController`; `id` отсутствует в `immutableFields`.
- [ ] `*-access.ts` задаёт role/tenant scopes рядом с доменом.
- [ ] CMS не получает tenant scope; CRM проверяет membership по `userId`.
- [ ] `includePermissions.admin` равен `true`.
- [ ] `includePermissions.customer` — минимальное дерево и никогда не `true`.
- [ ] `prismaAutoCacheInvalidation.enabled` включён; списки связанных моделей вручную не добавлены.
- [ ] DTO валидируются через class-validator и экспортируются публичным entrypoint.

## Прикладной слой и UI

- [ ] CRUD/use case добавлен в `packages/react_common/server-actions/<domain>/`.
- [ ] Next server action вызывает нужный API напрямую; gateway/relay не добавлен.
- [ ] Prisma Client и запросы к БД не попали в React/Next.
- [ ] JWT читается только из httpOnly cookie и не возвращается клиенту.
- [ ] Импорты идут через публичные entrypoint пакетов, без глубоких путей.
- [ ] Новый `include` отражён в whitelist соответствующего controller.

## Проверка

- [ ] Проверены admin/customer доступы и CRM tenant isolation.
- [ ] Добавлен contract test CRUD/DTO/access.
- [ ] Добавлен E2E для пользовательского use case.
- [ ] Мутации инвалидируют прямой и обратный include-граф Redis cache.
- [ ] Документация решения обновлена, если изменилась граница контекста.
