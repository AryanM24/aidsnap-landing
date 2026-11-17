import type { MetadataRoute } from "next"
import { SITE_URL } from "@/components/site"

// Search engines and AI answer engines are all welcome: the guides are meant to be found and quoted.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
