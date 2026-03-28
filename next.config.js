/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
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
    ]
  },
}

module.exports = nextConfig
