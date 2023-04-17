/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/smo",
  trailingSlash: true,

  images: {
    path: `/smo/_next/image`,
  },
  output: 'standalone',
}

module.exports = nextConfig
