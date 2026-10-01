import { expect, test } from '@playwright/test';
import { loginAsSeededAdmin } from './helpers/auth';

test('@smoke admin exposes CMS, CRM, and AI tabs', async ({ page }) => {
  await loginAsSeededAdmin(page);

  await expect(page.getByRole('heading', { name: 'Pages' })).toBeVisible();
  await expect(page.getByRole('heading', { name: 'Articles' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Добавить/i }).first()).toBeVisible();

  await page.getByRole('button', { name: 'CRM', exact: true }).click();
  await expect(page.getByRole('heading', { name: 'Contacts' })).toBeVisible();
  await expect(page.getByRole('button', { name: /Добавить/i }).first()).toBeVisible();

  await page.getByRole('button', { name: 'AI', exact: true }).click();
  await expect(
    page.getByRole('heading', { name: 'AI — подтверждаемые рекомендации' }),
  ).toBeVisible();
});
