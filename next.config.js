// thewell.guide next config
/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    minimumCacheTTL: 31536000,
    formats: ['image/avif', 'image/webp'],
  },
  async headers() {
    return [
      {
        source: '/_next/static/:path*',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
      {
        source: '/:path*.(jpg|jpeg|png|webp|avif|gif|svg|ico|woff|woff2|ttf|otf)',
        headers: [
          { key: 'Cache-Control', value: 'public, max-age=31536000, immutable' },
        ],
      },
    ]
  },
  async redirects() {
    return [
      {
        source: '/guides/well-water-testing',
        destination: '/guides/how-to-test-well-water',
        permanent: true,
      },
      {
        source: '/problems/well-water-pressure-problems',
        destination: '/problems/well-water-pressure-low',
        permanent: true,
      },
      {
        source: '/reviews/best-well-water-filters',
        destination: '/reviews/best-whole-house-water-filters',
        permanent: true,
      },
      {
        source: '/cost-guides/well-water-treatment-cost',
        destination: '/cost-guides/whole-house-water-filter-cost',
        permanent: true,
      },
    ]
  },
}

module.exports = nextConfig
