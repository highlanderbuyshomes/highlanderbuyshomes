import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      { source: "/how-it-works", destination: "/cash-offer", permanent: true },
      { source: "/sell", destination: "/get-my-cash-offer", permanent: true },
    ];
  },
};

export default nextConfig;
