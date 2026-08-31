import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/services/:slug",
        destination: "/:slug",
        permanent: true,
      },
      {
        source: "/products/:slug",
        destination: "/:slug",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
