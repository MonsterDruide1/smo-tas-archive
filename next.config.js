/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/smo",
  trailingSlash: true,
  images: {
    unoptimized: true,
  },
}

module.exports = nextConfig
