const basePath = process.env.BASE_PATH ? process.env.BASE_PATH : '';

const nextConfig = {
  reactStrictMode: true,
  basePath,
  env: { NEXT_PUBLIC_BASE_PATH: basePath },
  images: { unoptimized: true },
  trailingSlash: true,
  output: 'export',
};
module.exports = nextConfig;
