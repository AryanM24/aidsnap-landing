import { GUIDES } from "@/lib/guides"
import { SITE_URL } from "@/components/site"

export const dynamic = "force-static"

const esc = (s: string) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;")

export function GET() {
  const items = GUIDES.map((g) => {
    const url = `${SITE_URL}/guides/${g.id}`
    return `    <item>
      <title>${esc(g.title)}</title>
      <link>${url}</link>
      <guid isPermaLink="true">${url}</guid>
      <description>${esc(g.summary)}</description>
      <pubDate>Mon, 17 Nov 2026 00:00:00 GMT</pubDate>
    </item>`
  }).join("\n")
  const body = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>AidSnap first aid guides</title>
    <link>${SITE_URL}/guides</link>
    <description>Step-by-step first aid for 16 emergencies, based on AHA, Red Cross, ERC and NHS guidance.</description>
    <language>en</language>
    <atom:link href="${SITE_URL}/feed.xml" rel="self" type="application/rss+xml" />
${items}
  </channel>
</rss>
`
  return new Response(body, { headers: { "Content-Type": "application/rss+xml; charset=utf-8" } })
}
