/** @type {import('next').NextConfig} */
const nextConfig = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/i,
      use: ['@svgr/webpack'],
    });

    return config;
  },
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'tqklhszfkvzk6518638.cdn.ntruss.com',
        port: '',
        pathname: '/**',
      },
    ],
  },
};

module.exports = nextConfig;
