import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  trailingSlash: true,
  // basePath wird via Env-Variable gesetzt (z.B. /daily-demotivation-web für GitHub Pages)
  basePath: process.env.NEXT_BASE_PATH ?? "",
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
