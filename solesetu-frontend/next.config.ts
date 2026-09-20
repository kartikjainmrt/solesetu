import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_ACTIONS || process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  /* config options here */
  output: "export",
  reactCompiler: true,

  basePath: isGithubPages ? "/solesetu" : "",

  images: {
    unoptimized: true,
  },
};

export default nextConfig;
