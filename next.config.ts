import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**", // Matches all hostnames
      },
      {
        protocol: "http",
        hostname: "**", // For HTTP if needed
      },
    ],
  },
};

export default nextConfig;
