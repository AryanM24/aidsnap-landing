/** @type {import('next').NextConfig} */
const nextConfig = {
  // ESLint is not installed; type errors still fail the build.
  eslint: { ignoreDuringBuilds: true },
  poweredByHeader: false,
  // Markdown twins of the pages: /privacy.md is served by app/md/[slug].
  async rewrites() {
    return [
      { source: "/guides/:id.md", destination: "/md/guides/:id" },
      { source: "/:slug(index|guides|privacy|terms|consumer-health-data|support|about|manifesto|delete-account).md", destination: "/md/:slug" },
    ]
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          { key: "X-Frame-Options", value: "DENY" },
          { key: "Permissions-Policy", value: "camera=(), microphone=(), geolocation=()" },
        ],
      },
      // Brand icons never change at the same URL: cache them for a year.
      { source: "/connectors/:file*", headers: [{ key: "Cache-Control", value: "public, max-age=31536000, immutable" }] },
    ]
  },
}

export default nextConfig
