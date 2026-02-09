import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      { protocol: 'https', hostname: 'cdn.sanity.io' },
    ],
  },
  async rewrites() {
    return [
      { source: '/', destination: '/home.html' },
      { source: '/polityka-prywatnosci', destination: '/polityka-prywatnosci.html' },
    ]
  },
}

export default nextConfig
