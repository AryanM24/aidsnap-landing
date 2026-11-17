import type { Metadata } from "next"

/**
 * One page's search and share metadata. Open Graph and Twitter need their own title and URL;
 * without this every page would share the home page's preview. Each page also points crawlers at its
 * markdown twin (served by app/md through the .md rewrites) and at the guides feed.
 */
export function meta({
  title,
  description,
  path,
  type = "website",
  markdown = true,
  image = "/opengraph-image",
}: {
  title: string
  description: string
  path: string
  type?: "website" | "article"
  /** False for pages with no .md twin. */
  markdown?: boolean
  /** The share image; the site card unless the page has its own. */
  image?: string
}): Metadata {
  const full = `${title} · AidSnap`
  return {
    title,
    description,
    alternates: {
      canonical: path,
      types: {
        "application/rss+xml": "/feed.xml",
        ...(markdown ? { "text/markdown": path === "/" ? "/index.md" : `${path}.md` } : {}),
      },
    },
    openGraph: { title: full, description, url: path, type, siteName: "AidSnap", locale: "en_US", images: [image] },
    twitter: { card: "summary_large_image", title: full, description, images: [image] },
  }
}
