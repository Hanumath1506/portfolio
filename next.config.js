/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === 'production'

const nextConfig = {
  output: 'export',
  ...(isProd && {
    basePath: '/portfolio',
    assetPrefix: '/portfolio/',
  }),
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig
