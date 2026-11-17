import { GUIDES, URGENCY_LABEL } from "@/lib/guides"
import { privacy } from "@/lib/legal/privacy"
import { terms } from "@/lib/legal/terms"
import { health } from "@/lib/legal/health"
import { PLAY_URL, SITE_URL } from "@/components/site"
import { EMAIL, FACTS, FEATURES, SUMMARY, faqMd, guideUrl, legalMd, md } from "@/lib/markdown"

export const dynamic = "force-static"

const li = (items: string[]) => items.map((s) => `- ${s}`).join("\n")

// Pages whose copy lives in JSX are written out here, word for word from the page.
const pages: Record<string, () => string> = {
  index: () => `# AidSnap

${SUMMARY}

AI that saves lives in emergencies. Get instant, life-saving first aid guidance powered by AI. AidSnap provides step-by-step emergency instructions when every second counts.

[Get it on Android](${PLAY_URL}). iOS coming soon. Delete your account any time.

## Facts

${li(FACTS)}

## Works with the health data you already have

Off until you connect one. Disconnect any time. Apple Health, Health Connect, WHOOP, Oura, Withings, Dexcom.

## Everything for the next ten minutes. Nothing you have to learn first.

${FEATURES.slice(0, 4).map(([t, b]) => `### ${t}\n\n${b}`).join("\n\n")}

## Private by default.

${FEATURES.slice(4).map(([t, b]) => `### ${t}\n\n${b}`).join("\n\n")}

## More

- [First aid guides](${SITE_URL}/guides.md)
- [Support and FAQ](${SITE_URL}/support.md)
- [Full site as one document](${SITE_URL}/llms-full.txt)
`,
  guides: () => `# First aid guides

Clear steps for 16 emergencies, the same guides AidSnap walks you through in the app. In an emergency, call your local emergency number first.

${GUIDES.map((g) => `- [${g.title}](${guideUrl(g)}.md): ${g.summary} (${URGENCY_LABEL[g.urgency]})`).join("\n")}
`,
  privacy: () => legalMd(privacy),
  terms: () => legalMd(terms),
  "consumer-health-data": () => legalMd(health),
  support: () => `# Support

Answers to common questions. For anything else, email us.

${faqMd()}

Email: ${EMAIL}
`,
  about: () => `# About AidSnap

We want to put life-saving first aid knowledge in everyone's pocket, so ordinary people can act in the minutes that matter.

## Our mission

In an emergency, the gap between an injury and the right action costs lives. Most people freeze, not because they don't care, but because they don't know what to do.

AidSnap closes that gap. Describe what happened and it answers with clear first aid steps, stays with you by voice, and keeps the emergency number one tap away.

## Our values

- **Life first:** Every decision we make is guided by our commitment to saving and protecting human life.
- **Trust and safety:** We hold ourselves to careful medical sources and keep your data under your control.
- **Global access:** Emergency care knowledge should be available to everyone, regardless of location or background.
`,
  manifesto: () => `# We want to save every life.

Emergencies don't wait. Seconds matter. Yet in those critical moments, most people freeze, not because they don't care, but because they don't know what to do. That gap between injury and action costs lives.

AidSnap exists to close that gap. We bring advanced AI into the hands of everyday people, giving instant, clear first aid guidance the moment it's needed. No manuals. No guesswork. Just clear, reliable help when every second counts.

AidSnap is not another health app. We want it to become how people respond to emergencies in the 21st century.

We are driven by one belief: no one should ever feel powerless when it matters most.
`,
  "delete-account": () => `# Delete your account

You can delete your AidSnap account and everything stored with it at any time. It cannot be undone.

## In the app

1. Open AidSnap and tap the menu.
2. Go to Settings, then Account.
3. Tap Delete account and enter your password to confirm.

## What is deleted

${li([
    "Your chats, including Live transcripts",
    "Everything AidSnap remembers about you",
    "Connections to wearables, and their access tokens",
    "Your Medical ID, emergency contacts and insurance cards, including card photos",
    "Your account and sign-in",
  ])}

## Can't open the app?

Email ${EMAIL} from the address you signed up with, and we will delete your account and its data.
`,
}

export const dynamicParams = false
export const generateStaticParams = () => Object.keys(pages).map((slug) => ({ slug }))

export async function GET(_: Request, { params }: { params: Promise<{ slug: string }> }) {
  return md(pages[(await params).slug]())
}
