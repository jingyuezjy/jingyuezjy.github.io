import type { NextConfig } from "next";
import { PHASE_DEVELOPMENT_SERVER } from "next/constants";

const nextConfig = (phase: string): NextConfig => ({
  // Static export is for deployment; dev should return normal 404s for removed pages.
  output: phase === PHASE_DEVELOPMENT_SERVER ? undefined : 'export',
  trailingSlash: true,
  devIndicators: false,
  images: {
    unoptimized: true,
  },
  /* config options here */
  webpack: (config) => {
    config.module.rules.push({
      test: /\.bib$/,
      type: 'asset/source',
    });
    return config;
  },
});

export default nextConfig;
