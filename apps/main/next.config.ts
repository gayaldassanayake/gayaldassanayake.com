import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  transpilePackages: ["@repo/ui", "@repo/design-tokens", "@repo/content-utils"],
  env: {
    NEXT_PUBLIC_FINANCE_URL: process.env.NEXT_PUBLIC_FINANCE_URL ?? "http://localhost:3001",
  },
};

export default nextConfig;
