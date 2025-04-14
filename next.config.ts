import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    includePaths: ["assets/styles"],
    prependData: `@use "_mantine.scss" as *;`,
  },
  images: {
    remotePatterns: [
      {
        hostname: "cdn.builder.io",
      },
    ],
    minimumCacheTTL: 1500000,
  },
};

export default nextConfig;
