import { meta } from "@/lib/seo"
import { FAQS } from "@/lib/faq"
import { ChevronDown } from "lucide-react"
import { CONTACT, JsonLd, Page } from "@/components/site"

export const metadata = meta({
  title: "Support and FAQ",
  description:
    "AidSnap help and FAQ: where answers come from, whether it can call for you, offline use, what happens to your data, and how to delete your account.",
  path: "/support",
})

const faqs = FAQS.map(([q, a]) => ({ q, a }))

export default function Support() {
  return (
    <Page section="Help" title="Support" lead="Answers to common questions. For anything else, email us.">
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "FAQPage",
          mainEntity: faqs.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
        }}
      />
      <div className="divide-y border-y">
        {faqs.map((f) => (
          <details key={f.q} className="group">
            <summary className="flex cursor-pointer list-none items-center justify-between gap-6 py-5 text-lg [&::-webkit-details-marker]:hidden">
              {f.q}
              <ChevronDown className="size-[18px] shrink-0 text-muted-foreground transition-transform duration-200 group-open:rotate-180" strokeWidth={1.5} />
            </summary>
            <p className="pb-6 pr-10 text-muted-foreground">{f.a}</p>
          </details>
        ))}
      </div>
      <a href={CONTACT} className="mt-10 inline-block text-muted-foreground underline underline-offset-4 transition-colors hover:text-foreground">
        aryan.mittal@aidsnap.com
      </a>
    </Page>
  )
}
