import { meta } from "@/lib/seo"
import Link from "next/link"
import { ChevronRight } from "lucide-react"
import { GUIDES, URGENCY_LABEL, type Urgency } from "@/lib/guides"
import { JsonLd, Page, SITE_URL } from "@/components/site"

export const metadata = meta({
  title: "First aid guides",
  description:
    "Free step-by-step first aid for 16 emergencies, including CPR, choking, severe bleeding, heart attack, stroke, burns and seizures. Based on AHA, Red Cross, ERC and NHS guidance.",
  path: "/guides",
})

const order: Urgency[] = ["life-threatening", "soon", "everyday"]

export default function Guides() {
  return (
    <Page
      section="First aid"
      wide
      title="First aid guides"
      lead="Clear steps for 16 emergencies, the same guides AidSnap walks you through in the app. In an emergency, call your local emergency number first."
    >
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          name: "First aid guides",
          url: `${SITE_URL}/guides`,
          hasPart: GUIDES.map((g) => ({ "@type": "MedicalWebPage", name: g.title, url: `${SITE_URL}/guides/${g.id}` })),
        }}
      />
      <div className="space-y-14">
        {order.map((u) => (
          <section key={u}>
            <h2 className="mb-4 flex items-center gap-2 text-sm text-muted-foreground">
              {u === "life-threatening" ? <span className="size-2 rounded-full bg-signal" /> : null}
              {URGENCY_LABEL[u]}
            </h2>
            <ul className="divide-y border-y">
              {GUIDES.filter((g) => g.urgency === u).map((g) => (
                <li key={g.id}>
                  <Link href={`/guides/${g.id}`} className="group flex items-center justify-between gap-6 py-5">
                    <span>
                      <span className="block text-lg">{g.title}</span>
                      <span className="block text-muted-foreground">{g.summary}</span>
                    </span>
                    <ChevronRight className="size-[18px] shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
                  </Link>
                </li>
              ))}
            </ul>
          </section>
        ))}
      </div>
    </Page>
  )
}
