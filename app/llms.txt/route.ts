import { GUIDES, URGENCY_LABEL } from "@/lib/guides"
import { PLAY_URL, SITE_URL } from "@/components/site"

export const dynamic = "force-static"

// llms.txt (llmstxt.org): a plain summary of the site for AI answer engines, built from the same guide data as the pages.
export function GET() {
  const body = `# AidSnap

> AidSnap is an AI first aid assistant for people with no medical training. Describe an emergency by text, photo or voice and it answers with clear, numbered first aid steps, stays with you by voice, and keeps the emergency number one tap away. It gives first aid guidance, not a diagnosis. In an emergency, call your local emergency number first.

## Facts
- Available on Android (${PLAY_URL}). iOS is coming soon.
- 16 built-in first aid guides based on AHA, Red Cross, ERC and NHS guidance, with step mode, timers and a CPR beat at 110 a minute.
- Live: hands-free voice conversation that can also look through the camera.
- Medical ID: allergies, conditions, medications and emergency contacts in one place.
- AidSnap never calls on its own. It shows the right emergency number for the region, and the person taps and confirms.
- Optional connections: Apple Health, Health Connect, WHOOP, Oura, Withings and Dexcom. Off until the person connects one.
- Answers are generated with Google Gemini. No ads, no analytics or tracking software, and health data is never sold.

## First aid guides
${GUIDES.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.id}): ${g.summary} (${URGENCY_LABEL[g.urgency]})`).join("\n")}

## Pages
- [Home](${SITE_URL}/)
- [Support and FAQ](${SITE_URL}/support)
- [Privacy policy](${SITE_URL}/privacy)
- [Terms of service](${SITE_URL}/terms)
- [Consumer health data privacy policy](${SITE_URL}/consumer-health-data)
- [Delete your account](${SITE_URL}/delete-account)
- [Manifesto](${SITE_URL}/manifesto)
- [About](${SITE_URL}/about)

## Optional
- [Full site as one Markdown document](${SITE_URL}/llms-full.txt)
- [Guides as JSON](${SITE_URL}/guides.json)
- [Guides RSS feed](${SITE_URL}/feed.xml)

## Markdown
Every page below also has a Markdown version at the same URL with .md added.
- [Home](${SITE_URL}/index.md)
- [First aid guides](${SITE_URL}/guides.md)
${GUIDES.map((g) => `- [${g.title}](${SITE_URL}/guides/${g.id}.md)`).join("\n")}
- [Support and FAQ](${SITE_URL}/support.md)
- [Privacy policy](${SITE_URL}/privacy.md)
- [Terms of service](${SITE_URL}/terms.md)
- [Consumer health data privacy policy](${SITE_URL}/consumer-health-data.md)
- [Delete your account](${SITE_URL}/delete-account.md)
- [About](${SITE_URL}/about.md)
- [Manifesto](${SITE_URL}/manifesto.md)
`
  return new Response(body, { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
