/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.snipcart.com',
      },
      {
        protocol: 'https',
        hostname: 'app.snipcart.com',
      },
    ],
  },
}

export default nextConfig
