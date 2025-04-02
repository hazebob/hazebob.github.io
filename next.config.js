/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  basePath: '/heemblog',
  assetPrefix: '/heemblog',
}

module.exports = nextConfig 
