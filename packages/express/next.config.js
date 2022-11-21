const {
  NODE_ENV
} = process.env;
const isProdMode = NODE_ENV === 'production';

const nextConfig = {
  distDir: '.next',
  swcMinify: true,
  reactStrictMode: true,
  compiler: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  experimental: {
    externalDir: true,
  },
  eslint: {
    ignoreDuringBuilds: isProdMode,
  },
}

module.exports = nextConfig
