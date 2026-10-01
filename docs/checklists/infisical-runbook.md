# Runbook: Infisical без секретов в репозитории

Этот runbook описывает процесс. Значения token, client secret, паролей и ключей в Git, CI logs,
артефакты Playwright и документы не записываются.

## Однократная настройка

- [ ] Создать отдельный Infisical project для Comfort.
- [ ] Создать environments `test` и `main`; не переиспользовать production credentials в test.
- [ ] Разнести paths: `/shared`, `/cms`, `/crm`, `/web`, `/coding`, `/deploy`.
- [ ] Создать machine identity для Jenkins с read-only доступом к нужному environment/path.
- [ ] Ограничить identity по возможности runner/VPS и задать короткий TTL.
- [ ] Сохранить bootstrap credential в Jenkins Credentials, не в `.env` и не в параметре job.
- [ ] Включить audit log и уведомления о чтении/изменении секретов.

## Запуск deploy/test

1. Jenkins получает machine identity credential через защищённое credential binding.
2. Infisical CLI аутентифицируется без печати token.
3. Команда запускается через инъекцию окружения:

   ```sh
   infisical run --env=test --path=/shared -- docker compose up -d
   ```

4. Для нескольких paths использовать утверждённый export во временный файл с mode `0600`;
   зарегистрировать cleanup trap и удалить файл сразу после `docker compose` config/up.
5. Отключить shell xtrace (`set +x`) до аутентификации и инъекции.
6. Проверить, что console log не содержит значений переменных.

## Ротация

- [ ] Создать новое значение у провайдера/БД.
- [ ] Обновить Infisical сначала в `test`.
- [ ] Перезапустить только зависимые containers и выполнить health/ready + E2E smoke.
- [ ] Повторить для `main` в окно изменений.
- [ ] Отозвать старое значение после подтверждения.
- [ ] Зафиксировать actor, время, paths и результат без значения секрета.

## Аварийный доступ

- [ ] Break-glass identity хранится отдельно, выключена по умолчанию и требует двух участников.
- [ ] После использования credential немедленно отзывается и создаётся incident record.
- [ ] При недоступности Infisical существующие containers продолжают работать; новый deploy
      останавливается, а не использует секреты из репозитория.

## Проверка утечек

- [ ] Просмотреть Jenkins log, JUnit, HTML report, trace/video/screenshots.
- [ ] Убедиться, что `.env`, Infisical export и auth storage не попали в artifacts.
- [ ] При подозрении на утечку сначала отозвать credential, затем расследовать.
