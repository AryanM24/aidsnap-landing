import { GUIDES } from "@/lib/guides"
import { SITE_URL } from "@/components/site"

export const dynamic = "force-static"

export function GET() {
  const guides = GUIDES.map((g) => ({ ...g, url: `${SITE_URL}/guides/${g.id}`, markdown: `${SITE_URL}/guides/${g.id}.md` }))
  return Response.json({ name: "AidSnap first aid guides", url: `${SITE_URL}/guides`, count: guides.length, guides })
}
