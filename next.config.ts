import type { NextConfig } from "next";
import path from "node:path";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? (isGithubPages ? "/oldbury-mot-centre" : "");

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  trailingSlash: true,
  // Pin the workspace root so Turbopack doesn't pick up a stray parent lockfile
  // and resolve dependencies from the wrong node_modules directory.
  turbopack: {
    root: path.resolve(process.cwd()),
  },
  images: {
    unoptimized: true,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.unsplash.com",
      },
    ],
  },
};

export default nextConfig;
