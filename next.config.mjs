/** @type {import('next').NextConfig} */
import path from 'path'
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: '*',
          },
        ],
      },
};

export default nextConfig;
