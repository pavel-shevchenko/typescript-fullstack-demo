import { expect, test } from '@playwright/test';
import { loginAsSeededAdmin } from './helpers/auth';

test('registration creates a cookie-backed session', async ({
  page,
}, testInfo) => {
  const email = `e2e-${Date.now()}-${testInfo.workerIndex}@comfort.test`;
  const password = `comfort-e2e-${Date.now()}`;

  await page.goto('/register');
  await page.locator('input[type="email"]').fill(email);
  await page.locator('input[type="password"]').fill(password);
  await page.getByRole('button', { name: 'Создать аккаунт' }).click();

  await expect(page).toHaveURL(/\/admin\/?$/);
  await expect(page.getByText(email, { exact: false })).toBeVisible();

  const authCookie = (await page.context().cookies()).find(
    (cookie) => cookie.name === 'auth_token',
  );
  expect(authCookie).toBeDefined();
  expect(authCookie?.httpOnly).toBe(true);

  await page.goto('/admin');
  await expect(page.getByRole('heading', { name: 'Comfort Admin' })).toBeVisible();
});

test('@smoke seeded admin login creates a cookie-backed session', async ({
  page,
}) => {
  await loginAsSeededAdmin(page);
});
