import { expect, test } from '@playwright/test';

test('@smoke landing content is server-rendered', async ({ page, request }) => {
  const response = await request.get('/');
  expect(response.ok()).toBe(true);

  const html = await response.text();
  expect(html).toContain('Управляйте CMS и CRM одним интерфейсом');
  expect(html).toContain('Comfort — AI-first CMS + CRM');

  await page.goto('/');
  await expect(
    page.getByRole('heading', { name: 'Управляйте CMS и CRM одним интерфейсом' }),
  ).toBeVisible();
  await expect(page.getByRole('link', { name: 'Вход' })).toHaveAttribute(
    'href',
    '/login',
  );
});
