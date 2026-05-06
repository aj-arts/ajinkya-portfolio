import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  devIndicators: false,
  turbopack: {
    root: __dirname,
  },
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "d112y698adiu2z.cloudfront.net",
      },
    ],
  },
};

export default nextConfig;
