import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  turbopack: {},
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Suppress deprecation warnings from dependencies
      const originalWarnings = config.ignoreWarnings || [];
      config.ignoreWarnings = [
        ...originalWarnings,
        { module: /node_modules/ },
      ];
    }
    return config;
  },
};

export default nextConfig;
