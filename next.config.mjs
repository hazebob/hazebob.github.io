import { withContentlayer } from 'next-contentlayer'

/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
  },
  reactStrictMode: true,
  swcMinify: true,
  // hydration 경고 무시 설정
  onRecoverableError: (error) => {
    if (error.message.includes('Extra attributes from the server')) {
      return;
    }
    console.error(error);
  },
}

export default withContentlayer(nextConfig) 
