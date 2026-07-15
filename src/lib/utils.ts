export function cn(...classes: (string | undefined | false)[]) {
  return classes.filter(Boolean).join(" ");
}

// On GitHub Pages the site is served under a sub-path (e.g. /ambi-floors-living).
// Next.js does not prepend basePath to <Image> sources when images are
// unoptimized (static export), so local /public assets 404. Prefix them here.
export const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(path: string): string {
  // Leave absolute URLs (http/https) untouched; only prefix root-relative paths.
  return path.startsWith("/") ? `${basePath}${path}` : path;
}
