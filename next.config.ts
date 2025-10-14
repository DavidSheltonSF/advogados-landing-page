import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  compiler: {
    removeConsole: true,
  },
  images: {
    unoptimized: true // porque o export é estático
  },
};

export default nextConfig;
