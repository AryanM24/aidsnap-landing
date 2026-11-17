import { ChevronDown } from "lucide-react"
import { CONTACT, JsonLd, Page } from "@/components/site"

export const metadata = { title: "Support", description: "Answers to common questions about AidSnap: where answers come from, calling for help, privacy and deleting your data.", alternates: { canonical: "/support" } }

const faqs = [
  {
    q: "Does AidSnap replace emergency services?",
    a: "No. AidSnap gives first aid guidance, not a diagnosis. If someone may be in danger, call your local emergency number first, then follow the steps while you wait.",
  },
  {
    q: "Where do the answers come from?",
    a: "AidSnap uses Google Gemini, guided by 16 first aid guides based on AHA, Red Cross and NHS guidance. Like any AI it can make mistakes, so follow the guide steps and trust the responders.",
  },
  {
    q: "Can AidSnap call for me?",
    a: "No. It shows the right emergency number for your region, and you tap to call. It asks once before dialing, so a call never happens by accident.",
  },
  {
    q: "Does it work without internet?",
    a: "Chat and Live need a connection. The first aid guides are built into the app.",
  },
  {
    q: "What happens to my information?",
    a: "What you ask is sent to Google Gemini to get an answer. Health data from Apple Health, Health Connect or a wearable is read only when you ask about it. You can delete what AidSnap remembers in Settings, and delete your account in the app.",
  },
  {
    q: "Can AidSnap replace a first aid course?",
    a: "No. AidSnap is designed to help in the moment, not to replace proper training. We strongly recommend a certified first aid and CPR course.",
  },
]

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
