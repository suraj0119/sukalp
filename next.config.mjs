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
  },
  webpack: (config, { dev, isServer }) => {
    if (!dev && !isServer) {
      if (
        config.optimization &&
        Array.isArray(config.optimization.minimizer) &&
        config.optimization.minimizer[0]?.options?.minimizer
      ) {
        config.optimization.minimizer[0].options.minimizer.hashFunction = 'xxhash64';
      }
    }
    return config;
  },
}

export default nextConfig
