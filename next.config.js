/** @type {import('next').NextConfig} */
const nextConfig = {
    
    images: {
      remotePatterns: [
      {
        protocol: 'https',
        hostname: 'm.media-amazon.com',
        // port: '',
        // pathname: '/account123/**',
      },
    ],
    }
  }
  
  module.exports = nextConfig

// /** @type {import('next').NextConfig} */
// const nextConfig = {
//   async rewrites() {
//     return [
//       {
//         source: '/:path*',
//         destination: '/',
//       },
//     ];
//   },
// };

// module.exports = nextConfig;