import { expect, type Page } from '@playwright/test';
import { adminCredentials } from './environment';

export async function loginAsSeededAdmin(page: Page) {
  await page.goto('/login');
  await page.locator('input[type="email"]').fill(adminCredentials.email);
  await page.locator('input[type="password"]').fill(adminCredentials.password);
  await page.getByRole('button', { name: 'Войти' }).click();

  await expect(page).toHaveURL(/\/admin\/?$/);
  await expect(page.getByRole('heading', { name: 'Comfort Admin' })).toBeVisible();

  const authCookie = (await page.context().cookies()).find(
    (cookie) => cookie.name === 'auth_token',
  );
  expect(authCookie, 'login must create the auth_token cookie').toBeDefined();
  expect(
    authCookie?.httpOnly,
    'auth_token must remain inaccessible to client JavaScript',
  ).toBe(true);
}
