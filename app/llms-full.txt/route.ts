import { GUIDES } from "@/lib/guides"
import { privacy } from "@/lib/legal/privacy"
import { terms } from "@/lib/legal/terms"
import { health } from "@/lib/legal/health"
import { FEATURE_GROUPS } from "@/lib/features"
import { MANIFESTO } from "@/lib/manifesto"
import { EMAIL, FACTS, SUMMARY, faqMd, guideMd, legalMd } from "@/lib/markdown"

export const dynamic = "force-static"

// llms-full.txt (llmstxt.org): the whole site as one Markdown document, built from the same data as the pages.
export function GET() {
  const body = [
    `# AidSnap\n\n> ${SUMMARY}`,
    `## Facts\n\n${FACTS.map((s) => `- ${s}`).join("\n")}`,
    `## Features\n\n${FEATURE_GROUPS.map((g) => `### ${g.title}\n\n${g.sub}\n\n${g.items.map((f) => `- **${f.title}:** ${f.body}`).join("\n")}`).join("\n\n")}`,
    `## Manifesto\n\n${MANIFESTO.map((m) => `### ${m.heading}\n\n${m.paragraphs.join("\n\n")}`).join("\n\n")}`,
    `## First aid guides\n\n${GUIDES.map((g) => guideMd(g, 2).replace(/^(#+) /gm, "$1# ")).join("\n\n")}`,
    `## Support and FAQ\n\n${faqMd("###")}\n\nEmail: ${EMAIL}`,
    legalMd(privacy, 2),
    legalMd(terms, 2),
    legalMd(health, 2),
  ].join("\n\n")
  return new Response(body + "\n", { headers: { "Content-Type": "text/plain; charset=utf-8" } })
}
