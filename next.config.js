/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: "/smo",
  trailingSlash: true,

  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.discordapp.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'yt3.ggpht.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'avatars.githubusercontent.com',
        pathname: '/u/**',
      },
      {
        protocol: 'https',
        hostname: 'www.speedrun.com',
        pathname: '/userasset/**',
      },
    ],
    path: `/smo/_next/image`,
  },
}

module.exports = nextConfig
