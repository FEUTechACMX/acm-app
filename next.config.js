const withPlugins = require('next-compose-plugins');
const runtimeCaching = require('next-pwa/cache');
const withPWA = require('next-pwa');

const nextDataIndex = runtimeCaching.findIndex(
  (entry) => entry.options.cacheName === 'next-data'
);
if (nextDataIndex !== -1) {
  runtimeCaching[nextDataIndex].handler = 'NetworkFirst';
} else {
  throw new Error('Failed to find next-data object in runtime caching');
}


const pwaConfig = {
  dest: "public",
  cacheOnFrontEndNav: process.env.NODE_ENV === 'production',
  dynamicStartUrlRedirect: '/2023',
  fallbacks: {
    image: '/android-chrome-512x512.png',
    document: 'src/app/2023/offline/page.tsx',
    font: '',
    audio: '',
    video: ''
  },
  cacheStartUrl: true,
  skipWaiting: true,
  scope: '/',
  cacheId: 'acmx',
  cleanupOutdatedCaches: true,
  clientsClaim: true,
  navigateFallback: '/2023/offline',
  navigationPreload: true,
  runtimeCaching,
  maximumFileSizeToCacheInBytes: 5_000_000,
  dynamicStartUrl: true,
  disable: process.env.NODE_ENV === 'development',
};


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

const withBundleAnalyzer = require('@next/bundle-analyzer')({
  enabled: process.env.ANALYZE === 'true',
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  poweredByHeader: false,
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
    optimizeCss: true,
    optimizeServerReact: true,
    appDocumentPreloading: true,
    workerThreads: true,
    // ppr: true,
    memoryBasedWorkersCount: true,
    // typedRoutes: true,
    optimisticClientCache: true,
    optimizePackageImports: ["@nextui-org/react", "react-icons", "next-auth", "prisma", "@reduxjs/toolkit", "framer-motion", "tsparticles", "zod"],
    // useWasmBinary: true,
    // useLightningcss: true,
    middlewarePrefetch: "strict",
    instrumentationHook: true,
    // staticWorkerRequestDeduping: true,
    forceSwcTransforms: true,
    // fullySpecified: true,
    // bundlePagesExternals: true,
    scrollRestoration: true,
    serverMinification: true,
    clientRouterFilter: true,
    // craCompat: true,
    webpackBuildWorker: true,
    isrFlushToDisk: true,
    strictNextHead: true,
    nextScriptWorkers: true,
    webVitalsAttribution: ['CLS', 'LCP'],
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
};


module.exports = withPlugins(
  [
    [withPWA, pwaConfig],
    [withBundleAnalyzer],
  ],
  nextConfig
);