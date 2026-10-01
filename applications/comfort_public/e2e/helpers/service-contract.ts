import {
  expect,
  type APIRequestContext,
  type APIResponse,
} from '@playwright/test';

export type ServiceProbe = {
  name: 'cms' | 'crm' | 'search';
  baseUrl?: string;
  optional?: boolean;
};

function endpointUrl(baseUrl: string, endpoint: '/health' | '/ready') {
  return `${baseUrl.replace(/\/+$/, '')}${endpoint}`;
}

async function assertHealthyResponse(
  response: APIResponse,
  serviceName: ServiceProbe['name'],
  endpoint: '/health' | '/ready',
) {
  expect(
    response.ok(),
    `${serviceName} ${endpoint} returned ${response.status()} from ${response.url()}`,
  ).toBe(true);

  const contentType = response.headers()['content-type'] ?? '';
  if (contentType.includes('application/json')) {
    const body = (await response.json()) as Record<string, unknown>;
    if ('status' in body) {
      expect(['ok', 'ready', 'healthy']).toContain(
        String(body.status).toLowerCase(),
      );
    }
  }
}

export async function probeServiceContract(
  request: APIRequestContext,
  service: ServiceProbe,
): Promise<'available' | 'unavailable'> {
  if (!service.baseUrl) {
    if (service.optional) return 'unavailable';
    throw new Error(`Missing base URL for required ${service.name} service`);
  }

  for (const endpoint of ['/health', '/ready'] as const) {
    let response: APIResponse;
    try {
      response = await request.get(endpointUrl(service.baseUrl, endpoint), {
        failOnStatusCode: false,
        timeout: 10_000,
      });
    } catch (error) {
      if (service.optional) return 'unavailable';
      throw error;
    }

    if (service.optional && [404, 501, 502, 503].includes(response.status())) {
      return 'unavailable';
    }
    await assertHealthyResponse(response, service.name, endpoint);
  }

  return 'available';
}
