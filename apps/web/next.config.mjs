// Importing env files here to validate on build
import "./src/env.mjs";
import { withContentlayer } from "next-contentlayer";

import "@aiabit/auth/env.mjs";

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,
  /** Enables hot reloading for local packages without a build step */
  transpilePackages: ["@aiabit/api", "@aiabit/auth", "@aiabit/db"],
  /** We already do linting and typechecking as separate tasks in CI */
  eslint: { ignoreDuringBuilds: true },
  experimental: {
    mdxRs: false,
  },
  webpack(config) {
    config.infrastructureLogging = { level: "error" };
    return config;
  },
  typescript: { ignoreBuildErrors: true },
};

export default withContentlayer(config);
