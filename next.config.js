// /** @type {import('next').NextConfig} */

// const withBundleAnalyzer = require('@next/bundle-analyzer')({
//  enabled: process.env.ANALYZE === 'true',
// });
// const nextConfig = {
//  reactStrictMode: false,
//  swcMinify: true,
// };

// module.exports = withBundleAnalyzer(nextConfig);
// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    unoptimized: true,
  },
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
