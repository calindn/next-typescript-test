/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'api.slingacademy.com',
        port: '',
        pathname: '/public/sample-blog-posts/**',
      },
    ],
  }
}

module.exports = nextConfig
