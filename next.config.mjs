/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true, // Make sure App Router is enabled
  },
  webpack(config, { isServer }) {
    // If running on server, fix app directory location
    if (!isServer) {
      config.resolve.modules.push(path.resolve('./src')); // This allows imports from `src`
    }
    return config;
  },
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
