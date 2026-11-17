import type { MetadataRoute } from "next"
import { GUIDES } from "@/lib/guides"
import { SITE_URL } from "@/components/site"

const pages = ["", "/guides", "/manifesto", "/about", "/support", "/careers", "/press", "/coming-soon", "/privacy", "/terms", "/delete-account"]

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    ...pages.map((p) => ({ url: `${SITE_URL}${p}`, priority: p === "" ? 1 : p === "/guides" ? 0.9 : 0.5 })),
    ...GUIDES.map((g) => ({ url: `${SITE_URL}/guides/${g.id}`, priority: 0.8 })),
  ]
}
