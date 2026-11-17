import { GUIDES } from "@/lib/guides"
import { privacy } from "@/lib/legal/privacy"
import { terms } from "@/lib/legal/terms"
import { health } from "@/lib/legal/health"
import { EMAIL, FACTS, FEATURES, SUMMARY, faqMd, guideMd, legalMd } from "@/lib/markdown"

export const dynamic = "force-static"

// llms-full.txt (llmstxt.org): the whole site as one Markdown document, built from the same data as the pages.
export function GET() {
  const body = [
    `# AidSnap\n\n> ${SUMMARY}`,
    `## Facts\n\n${FACTS.map((s) => `- ${s}`).join("\n")}`,
    `## Features\n\n${FEATURES.map(([t, b]) => `### ${t}\n\n${b}`).join("\n\n")}`,
    `## First aid guides\n\n${GUIDES.map((g) => guideMd(g, 2).replace(/^(#+) /gm, "$1# ")).join("\n\n")}`,
    `## Support and FAQ\n\n${faqMd("###")}\n\nEmail: ${EMAIL}`,
    legalMd(privacy, 2),
    legalMd(terms, 2),
    legalMd(health, 2),
  ].join("\n\n")
  return new Response(body + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
