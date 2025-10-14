import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',
  images: {
    unoptimized: true // porque o export é estático
  },
  async headers() {
    return [
      {
        // para todos os arquivos estáticos em /public
        source: "/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          }
        ]
      }
    ]
  }
};

export default nextConfig;
