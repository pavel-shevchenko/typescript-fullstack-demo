/** @type {import('next').NextConfig} */
function allowedDevOriginsFromEnv() {
  const fromList = (process.env.ALLOWED_DEV_ORIGINS ?? '')
    .split(',')
    .map((s) => s.trim())
    .filter(Boolean);
  const fromPublicUrl = (() => {
    const raw = process.env.NEXT_PUBLIC_SERVER_URL?.trim();
    if (!raw) return [];
    try {
      return [new URL(raw).hostname];
    } catch {
      return [];
    }
  })();
  return [...new Set([...fromList, ...fromPublicUrl])];
}

const isDev = process.env.NODE_ENV !== 'production';

const csp = [
  "default-src 'self'",
  "base-uri 'self'",
  "form-action 'self'",
  "frame-ancestors 'none'",
  "object-src 'none'",
  "img-src 'self' data: blob:",
  "font-src 'self' data:",
  "style-src 'self' 'unsafe-inline'",
  // React/Next dev overlay needs eval(); production build does not.
  `script-src 'self' 'unsafe-inline'${isDev ? " 'unsafe-eval'" : ''}`,
  // HMR / Turbopack websocket in `next dev`.
  isDev ? "connect-src 'self' ws: wss:" : "connect-src 'self'",
  "worker-src 'self' blob:",
].join('; ');

const securityHeaders = [
  { key: 'Content-Security-Policy', value: csp },
  { key: 'X-Content-Type-Options', value: 'nosniff' },
  { key: 'X-Frame-Options', value: 'DENY' },
  { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
  {
    key: 'Permissions-Policy',
    value: 'camera=(), microphone=(), geolocation=(), payment=()',
  },
  ...(process.env.NODE_ENV === 'production'
    ? [{ key: 'Strict-Transport-Security', value: 'max-age=31536000; includeSubDomains' }]
    : []),
];

const nextConfig = {
  transpilePackages: ['react_common', 'types_consts_utils'],
  allowedDevOrigins: allowedDevOriginsFromEnv(),
  async headers() {
    return [{ source: '/:path*', headers: securityHeaders }];
  },
};

module.exports = nextConfig;
