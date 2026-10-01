/** Макс. запросов доменных prisma-эндпоинтов на пользователя за окно; ≤0 — лимит выключен. */
export function domainPrismaThrottleLimit(): number {
  const raw = process.env.THROTTLE_DOMAIN_PRISMA_LIMIT ?? '0';
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) ? n : 0;
}

/** Длительность окна (мс) для request throttling layer. */
export function domainPrismaThrottleTtlMs(): number {
  const raw = process.env.THROTTLE_DOMAIN_PRISMA_TTL_MS ?? '60000';
  const n = Number.parseInt(raw, 10);
  return Number.isFinite(n) && n > 0 ? n : 60_000;
}
