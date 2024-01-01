const runtimeCaching = require('next-pwa/cache');
const nextDataIndex = runtimeCaching.findIndex(
  (entry) => entry.options.cacheName === 'next-data'
);
if (nextDataIndex !== -1) {
  runtimeCaching[nextDataIndex].handler = 'NetworkFirst';
} else {
  throw new Error('Failed to find next-data object in runtime caching');
}

const withPWA = require('next-pwa')({
  dest: 'public',
  runtimeCaching,
  cacheOnFrontEndNav: process.env.NODE_ENV === 'production',
  fallbacks: {
    image: '/android-chrome-512x512.png',
    document: '/2023/offline',
    // font: '',
    // audio: '',
    // video: ''
  },
  skipWaiting: true,
  scope: '/',
  maximumFileSizeToCacheInBytes: 5_000_000,
  dynamicStartUrl: true,
  disable: process.env.NODE_ENV === 'development',
});
;

// https://nextjs.org/docs/advanced-features/security-headers
const securityHeaders = [
  {
    key: 'X-DNS-Prefetch-Control',
    value: 'on'
  },
  {
    key: 'Strict-Transport-Security',
    value: 'max-age=63072000; includeSubDomains; preload'
  },
  {
    key: 'X-XSS-Protection',
    value: '1; mode=block'
  },
  {
    key: 'X-Frame-Options',
    value: 'SAMEORIGIN'
  },
  {
    key: 'X-Content-Type-Options',
    value: 'nosniff'
  }
];

module.exports = withPWA({
  // reactStrictMode: true,
  swcMinify: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
        pathname: '**',
      },
    ],
  },
  experimental: {
    nextScriptWorkers: true,
  },
  output: 'standalone',
  async headers () {
    return [
      {
        // Apply these headers to all routes in your application.
        source: '/:path*',
        headers: securityHeaders,
      },
    ];
  },
  async redirects () {
    return [
      {
        source: '/',
        destination: '/2023',
        permanent: false,
      },
      {
        source: '/legal/privacy-policy',
        destination: 'https://portal.termshub.io/acmx.vercel.app/privacy_policy/',
        permanent: false,
      },
      {
        source: '/404',
        destination: '/2023/404',
        permanent: false,
      },
      {
        source: '/dashboard',
        destination: '/app/dashboard',
        permanent: false,
      }
    ];
  },
});