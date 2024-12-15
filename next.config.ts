import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 
    We will explicit explain, we don't want to cache dynamic page
  */
  experimental: {
    staleTimes: {
      dynamic: 0,
    },
  },
};

export default nextConfig;
