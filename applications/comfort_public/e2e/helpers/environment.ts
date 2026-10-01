export function requiredEnv(name: string, fallback?: string): string {
  const value = process.env[name] ?? fallback;
  if (!value) {
    throw new Error(`${name} must be set for this E2E environment`);
  }
  return value;
}

export function serviceUrl(name: string, fallback?: string): string {
  return requiredEnv(name, fallback).replace(/\/+$/, '');
}

export const adminCredentials = {
  email: requiredEnv('E2E_ADMIN_EMAIL', 'admin@comfort.local'),
  password: requiredEnv('E2E_ADMIN_PASSWORD', 'comfort123'),
};

export const serviceUrls = {
  cms: serviceUrl('E2E_CMS_URL', 'http://127.0.0.1:4501/api-cms'),
  crm: serviceUrl('E2E_CRM_URL', 'http://127.0.0.1:4502/api-crm'),
  search: process.env.E2E_SEARCH_URL ? serviceUrl('E2E_SEARCH_URL') : undefined,
};
