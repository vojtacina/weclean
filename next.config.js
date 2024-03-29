/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  experimental: {
    scrollRestoration: true
  },
  i18n: {
    locales: ["cs"],
    defaultLocale: "cs",
  },
}

module.exports = nextConfig
