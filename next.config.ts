import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 🔴 CRITICAL: disable turbopack (WASM unsupported)
  experimental: {
    turbo: false,
  },

  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.pexels.com",
      },
      {
        protocol: "https",
        hostname: "i.ytimg.com",
      },
    ],
  },
};

export default nextConfig;

