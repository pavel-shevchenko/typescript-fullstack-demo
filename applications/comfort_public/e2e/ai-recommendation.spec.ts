import { expect, test } from '@playwright/test';
import { loginAsSeededAdmin } from './helpers/auth';

test('@smoke AI recommendation moves from request to pending to confirmed', async ({
  page,
}) => {
  await loginAsSeededAdmin(page);
  await page.getByRole('button', { name: 'AI', exact: true }).click();

  const panel = page
    .getByRole('heading', {
      name: 'AI — подтверждаемые рекомендации',
    })
    .locator('..');
  await panel.getByRole('button', { name: 'Обновить pending' }).click();

  const confirmButtons = panel.getByRole('button', { name: 'Confirm + Apply' });
  const pendingBefore = await confirmButtons.count();
  const uniquePrompt = `Stage 3 E2E draft article ${Date.now()}`;

  await panel
    .getByPlaceholder('Запрос: обнови promo, добавь CRM-контакт…')
    .fill(uniquePrompt);
  await panel.getByRole('button', { name: 'Запросить рекомендации' }).click();

  await expect(
    panel.getByRole('heading', { name: 'Черновики от Python' }),
  ).toBeVisible();
  await expect
    .poll(() => confirmButtons.count(), {
      message: 'a requested recommendation should be persisted as pending',
    })
    .toBeGreaterThan(pendingBefore);

  const pendingAfterRequest = await confirmButtons.count();
  await confirmButtons.first().click();
  await expect
    .poll(() => confirmButtons.count(), {
      message: 'confirm should optimistically remove the pending recommendation',
    })
    .toBe(pendingAfterRequest - 1);
  await expect(panel.locator('.text-destructive')).toHaveCount(0);
});
