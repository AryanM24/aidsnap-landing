import { GUIDES, URGENCY_LABEL, type Guide } from "@/lib/guides"
import type { LegalDoc } from "@/components/legal"
import { PLAY_URL, SITE_URL } from "@/components/site"

export const EMAIL = "aryan.mittal@aidsnap.com"

export const md = (body: string) =>
  new Response(body, { headers: { "Content-Type": "text/markdown; charset=utf-8" } })

const list = (items: string[]) => items.map((s) => `- ${s}`).join("\n")

export const FACTS = [
  `Available on Android (${PLAY_URL}). iOS is coming soon.`,
  "16 built-in first aid guides based on AHA, Red Cross, ERC and NHS guidance, with step mode, timers and a CPR beat at 110 a minute.",
  "Live: hands-free voice conversation that can also look through the camera.",
  "Medical ID: allergies, conditions, medications and emergency contacts in one place.",
  "AidSnap never calls on its own. It shows the right emergency number for the region, and the person taps and confirms.",
  "Optional connections: Apple Health, Health Connect, WHOOP, Oura, Withings and Dexcom. Off until the person connects one.",
  "Answers are generated with Google Gemini. No ads, no analytics or tracking software, and health data is never sold.",
]

export const SUMMARY =
  "AidSnap is an AI first aid assistant for people with no medical training. Describe an emergency by text, photo or voice and it answers with clear, numbered first aid steps, stays with you by voice, and keeps the emergency number one tap away. It gives first aid guidance, not a diagnosis. In an emergency, call your local emergency number first."

// Copy from app/page.tsx, word for word.
export const FEATURES = [
  ["Talk it through, hands free", "Start Live and speak. AidSnap listens, answers out loud and can look through your camera, so your hands stay where they're needed."],
  ["Medical ID", "Allergies, conditions, medications and who to call, ready for a responder."],
  ["Guides, one step at a time", "16 first aid guides based on AHA, Red Cross and NHS guidance, with timers and a CPR beat."],
  ["The right number, one tap away", "AidSnap knows the emergency numbers for your region. It never calls on its own: you tap, it asks once, you talk."],
  ["Your records stay on your phone", "Apple Health and Health Connect records never leave it. AidSnap sends only a short summary with your question."],
  ["No ads, no trackers, never sold", "No advertising or analytics software. Health data is used only to answer you."],
  ["Delete it all from Settings", "Forget what AidSnap remembers, disconnect a wearable, or delete your account and everything with it."],
]

export { FAQS } from "@/lib/faq"
import { FAQS } from "@/lib/faq"

export const faqMd = (level = "##") => FAQS.map(([q, a]) => `${level} ${q}\n\n${a}`).join("\n\n")

export const guideUrl = (g: Guide) => `${SITE_URL}/guides/${g.id}`

/** One guide as Markdown. `h` is the heading level of the guide title. */
export function guideMd(g: Guide, h = 1): string {
  const H = (n: number) => "#".repeat(h + n)
  const steps = g.steps
    .map((s, i) => `${i + 1}. **${s.action}**${s.detail ? ` ${s.detail}` : ""}${s.timerSec ? ` (timer: ${s.timerSec} seconds)` : ""}`)
    .join("\n")
  const related = g.related.map((id) => GUIDES.find((x) => x.id === id)).filter((x): x is Guide => !!x)
  return [
    `${H(0)} ${g.title}`,
    `${g.summary} (${URGENCY_LABEL[g.urgency]})`,
    `Web page: ${guideUrl(g)}`,
    `${H(1)} Call emergency services if\n\n${list(g.callEmergencyIf)}`,
    g.signs.length ? `${H(1)} Signs\n\n${list(g.signs)}` : "",
    `${H(1)} Steps\n\n${steps}`,
    g.donts.length ? `${H(1)} Do not\n\n${list(g.donts)}` : "",
    g.afterCare.length ? `${H(1)} After care\n\n${list(g.afterCare)}` : "",
    related.length ? `${H(1)} Related guides\n\n${list(related.map((r) => `[${r.title}](${guideUrl(r)})`))}` : "",
    `${H(1)} Source\n\n${g.source}`,
  ]
    .filter(Boolean)
    .join("\n\n")
}

/** A legal document as Markdown. */
export function legalMd(doc: LegalDoc, h = 1): string {
  const H = "#".repeat(h + 1)
  return [
    `${"#".repeat(h)} ${doc.title}`,
    `Effective ${doc.effective}`,
    ...doc.intro,
    ...doc.sections.map(
      (s) => `${H} ${s.heading}\n\n${s.body.map((b) => (typeof b === "string" ? b : list(b.list))).join("\n\n")}`,
    ),
  ].join("\n\n")
}
