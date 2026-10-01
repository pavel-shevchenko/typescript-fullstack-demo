import { expect, test } from '@playwright/test';

test('search UI returns seeded CMS content when the route is available', async ({
  page,
  request,
}) => {
  const routeProbe = await request.get('/search', { failOnStatusCode: false });
  test.skip(
    routeProbe.status() === 404,
    'Search route is not integrated in this deployment',
  );
  expect(routeProbe.ok()).toBe(true);

  await page.goto('/search');
  const searchInput = page
    .getByRole('searchbox')
    .or(page.locator('input[type="search"]'))
    .or(page.getByPlaceholder(/поиск|search/i))
    .first();
  await expect(searchInput).toBeVisible();
  await searchInput.fill('Быстрый старт');

  const submit = page.getByRole('button', { name: /поиск|найти|search/i });
  if (await submit.count()) {
    await submit.first().click();
  } else {
    await searchInput.press('Enter');
  }

  await expect(page.getByText('Быстрый старт', { exact: false })).toBeVisible();
});
