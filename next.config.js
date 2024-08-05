// /** @type {import('next').NextConfig} */
// const nextConfig = {
// #  reactStrictMode: false,
//  swcMinify: true,
// };

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",  // <=== enables static exports
  reactStrictMode: true,
};

module.exports = nextConfig;
