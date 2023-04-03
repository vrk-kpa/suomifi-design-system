/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  basePath: process.env.BASE_PATH ? process.env.BASE_PATH : '',
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
