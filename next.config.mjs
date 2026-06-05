import createMDX from '@next/mdx';

const withMDX = createMDX({
  extension: /\.mdx?$/
});

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['ts', 'tsx', 'mdx'],
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'razibdash.com'
          }
        ],
        destination: 'https://www.razibdash.com/:path*',
        permanent: true
      }
    ];
  },
  images: {
    formats: ['image/avif', 'image/webp']
  }
};

export default withMDX(nextConfig);
