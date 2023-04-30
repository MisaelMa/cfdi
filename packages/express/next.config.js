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
  typescript: {
    // !! WARN !!
    // Dangerously allow production builds to successfully complete even if
    // your project has type errors.
    // !! WARN !!
    ignoreBuildErrors: true,
  },
}

module.exports = nextConfig
