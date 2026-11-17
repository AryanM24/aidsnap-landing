import type { MetadataRoute } from "next"
import { SITE_URL } from "@/components/site"

const CRAWLERS = [
  "GPTBot", "OAI-SearchBot", "ChatGPT-User", "ClaudeBot", "Claude-User", "Claude-SearchBot", "anthropic-ai",
  "PerplexityBot", "Perplexity-User", "Google-Extended", "Googlebot", "Bingbot", "Applebot", "Applebot-Extended",
  "CCBot", "Amazonbot", "Meta-ExternalAgent", "DuckAssistBot", "cohere-ai", "YouBot", "MistralAI-User",
]

// Search engines and AI answer engines are all welcome: the guides are meant to be found and quoted.
export default function robots(): MetadataRoute.Robots {
  return {
    rules: [{ userAgent: "*", allow: "/" }, ...CRAWLERS.map((userAgent) => ({ userAgent, allow: "/" }))],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  }
}
