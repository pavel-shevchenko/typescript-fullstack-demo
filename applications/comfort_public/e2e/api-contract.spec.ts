import { test } from '@playwright/test';
import { serviceUrls } from './helpers/environment';
import { probeServiceContract } from './helpers/service-contract';

test('@contract CMS exposes /health and /ready', async ({ request }) => {
  await probeServiceContract(request, {
    name: 'cms',
    baseUrl: serviceUrls.cms,
  });
});

test('@contract CRM exposes /health and /ready', async ({ request }) => {
  await probeServiceContract(request, {
    name: 'crm',
    baseUrl: serviceUrls.crm,
  });
});

test('@contract search exposes /health and /ready when integrated', async ({
  request,
}) => {
  const availability = await probeServiceContract(request, {
    name: 'search',
    baseUrl: serviceUrls.search,
    optional: true,
  });

  test.skip(
    availability === 'unavailable',
    'Search service is not integrated in this deployment',
  );
});
