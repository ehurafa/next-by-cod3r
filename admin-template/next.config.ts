import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: '/ajustes',
        destination: '/settings',
      },
      {
        source: '/notificacoes',
        destination: '/notifications',
      },
    ];
  },
};

export default nextConfig;
