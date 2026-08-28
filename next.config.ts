import path from 'path'
import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  reactStrictMode: true,
  outputFileTracingRoot: path.join(__dirname),
  async redirects() {
    return [
      { source: '/case-studies/cryo-sculpting-lab', destination: '/projects/cryo-sculpting-boca', permanent: true },
      { source: '/case-studies/utcli-production-systems', destination: '/projects/utcli-solutions', permanent: true },
      { source: '/case-studies/vivacity-na-crm', destination: '/projects/vivacity-crm', permanent: true },
      { source: '/case-studies', destination: '/projects', permanent: true },
      { source: '/case-studies/:slug', destination: '/projects', permanent: true },
      { source: '/portfolio', destination: '/projects', permanent: true },
    ]
  },
}

export default nextConfig
