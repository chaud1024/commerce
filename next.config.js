/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['picsum.photos', 'raw.githubusercontent.com'],
  },
  compiler: {
    emotion: true,
  },
}

module.exports = nextConfig
