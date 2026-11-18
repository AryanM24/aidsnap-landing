import type { MetadataRoute } from "next"
import { GUIDES } from "@/lib/guides"
import { SITE_URL } from "@/components/site"

// The date the current content was last changed. Bump it when a page's content changes.
const lastModified = new Date("2026-11-17")

const pages: [string, number, MetadataRoute.Sitemap[number]["changeFrequency"]][] = [
  ["", 1, "weekly"],
  ["/guides", 0.9, "monthly"],
  ["/features", 0.8, "monthly"],
  ["/support", 0.6, "monthly"],
  ["/about", 0.5, "monthly"],
  ["/manifesto", 0.5, "yearly"],
  ["/press", 0.4, "monthly"],
  ["/coming-soon", 0.4, "monthly"],
  ["/delete-account", 0.4, "yearly"],
  ["/privacy", 0.3, "yearly"],
  ["/terms", 0.3, "yearly"],
  ["/consumer-health-data", 0.3, "yearly"],
]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map(([p, priority, changeFrequency]) => ({ url: `${SITE_URL}${p}`, lastModified, changeFrequency, priority })),
    ...GUIDES.map((g) => ({
      url: `${SITE_URL}/guides/${g.id}`,
      lastModified,
      changeFrequency: "monthly" as const,
      priority: 0.8,
      images: [`${SITE_URL}/guides/${g.id}/opengraph-image`],
    })),
  ]
}
