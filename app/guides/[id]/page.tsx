import type { Metadata } from "next"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Ban } from "lucide-react"
import { GUIDES, URGENCY_LABEL, getGuide } from "@/lib/guides"
import { Frame, JsonLd, Keycap, PLAY_URL, SITE_URL, SiteFooter, SiteHeader, button } from "@/components/site"
import { cn } from "@/lib/utils"

export const dynamicParams = false

export function generateStaticParams() {
  return GUIDES.map((g) => ({ id: g.id }))
}

export async function generateMetadata({ params }: { params: Promise<{ id: string }> }): Promise<Metadata> {
  const g = getGuide((await params).id)
  if (!g) return {}
  return {
    title: `${g.title}: first aid steps`,
    description: `${g.summary} When to call emergency services, what to do step by step, and what not to do.`,
    alternates: { canonical: `/guides/${g.id}` },
    openGraph: { title: `${g.title}: first aid steps`, description: g.summary, url: `/guides/${g.id}`, type: "article" },
  }
}

function List({ title, items, className }: { title: string; items: string[]; className?: string }) {
  if (!items.length) return null
  return (
    <section className={className}>
      <h2 className="mb-4 text-xl font-medium tracking-tight">{title}</h2>
      <ul className="list-disc space-y-2 pl-5 text-muted-foreground marker:text-muted-foreground">
        {items.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
    </section>
  )
}

export default async function GuidePage({ params }: { params: Promise<{ id: string }> }) {
  const g = getGuide((await params).id)
  if (!g) notFound()
  const related = g.related.map(getGuide).filter((r) => r !== undefined)
  const url = `${SITE_URL}/guides/${g.id}`

  return (
    <>
      <SiteHeader />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "MedicalWebPage",
          name: `${g.title}: first aid steps`,
          description: g.summary,
          url,
          about: { "@type": "MedicalCondition", name: g.title },
          audience: { "@type": "MedicalAudience", audienceType: "Patient" },
          citation: g.source,
          publisher: { "@type": "Organization", name: "AidSnap", url: SITE_URL },
          mainEntity: {
            "@type": "HowTo",
            name: `First aid for ${g.title.toLowerCase()}`,
            step: g.steps.map((s, i) => ({ "@type": "HowToStep", position: i + 1, name: s.action, text: s.detail ?? s.action })),
          },
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "First aid guides", item: `${SITE_URL}/guides` },
            { "@type": "ListItem", position: 2, name: g.title, item: url },
          ],
        }}
      />
      <main>
        <Frame className="px-4 py-16 sm:px-8 md:py-20">
          <div className="max-w-3xl">
            <nav aria-label="Breadcrumb" className="mb-6 text-sm text-muted-foreground">
              <Link href="/guides" className="transition-colors hover:text-foreground">
                First aid guides
              </Link>
              <span className="px-2">/</span>
              <span>{URGENCY_LABEL[g.urgency]}</span>
            </nav>
            <h1 className="text-4xl font-medium tracking-tight md:text-5xl">{g.title}</h1>
            <p className="mt-4 text-lg text-muted-foreground">{g.summary}</p>
          </div>
        </Frame>

        {g.callEmergencyIf.length ? (
          <Frame className="px-4 py-10 sm:px-8">
            <div className="max-w-3xl rounded-2xl border border-signal/30 bg-signal/10 p-6">
              <h2 className="flex items-center gap-2 font-medium">
                <span className="size-2 rounded-full bg-signal" />
                Call emergency services if
              </h2>
              <ul className="mt-3 list-disc space-y-1.5 pl-5">
                {g.callEmergencyIf.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          </Frame>
        ) : null}

        <Frame className="px-4 py-14 sm:px-8">
          <div className="max-w-3xl space-y-14">
            <section>
              <h2 className="mb-6 text-xl font-medium tracking-tight">What to do</h2>
              <ol className="space-y-5">
                {g.steps.map((s, i) => (
                  <li key={s.action} className="flex gap-3">
                    <span className="mt-0.5">
                      <Keycap n={i + 1} />
                    </span>
                    <span>
                      <span className="block font-medium">{s.action}</span>
                      {s.detail ? <span className="mt-1 block text-muted-foreground">{s.detail}</span> : null}
                    </span>
                  </li>
                ))}
              </ol>
            </section>

            {g.donts.length ? (
              <section>
                <h2 className="mb-4 text-xl font-medium tracking-tight">Do not</h2>
                <ul className="space-y-2.5">
                  {g.donts.map((s) => (
                    <li key={s} className="flex gap-3 text-muted-foreground">
                      <Ban className="mt-1 size-4 shrink-0" strokeWidth={1.5} />
                      {s}
                    </li>
                  ))}
                </ul>
              </section>
            ) : null}

            <List title="Signs" items={g.signs} />
            <List title="After this" items={g.afterCare} />

            <p className="text-sm text-muted-foreground">
              Source: {g.source}. First aid guidance, not a diagnosis.
            </p>
          </div>
        </Frame>

        {related.length ? (
          <Frame className="px-4 py-12 sm:px-8">
            <h2 className="mb-4 text-sm text-muted-foreground">Related guides</h2>
            <div className="flex flex-wrap gap-2">
              {related.map((r) => (
                <Link key={r.id} href={`/guides/${r.id}`} className={cn(button.secondary, "h-10 px-4 text-sm")}>
                  {r.title}
                </Link>
              ))}
            </div>
          </Frame>
        ) : null}

        <Frame className="flex flex-col items-start justify-between gap-6 px-4 py-12 sm:px-8 md:flex-row md:items-center">
          <p className="max-w-md text-lg">
            AidSnap walks you through this guide one step at a time
            {g.tool === "metronome" ? ", with a CPR beat" : g.steps.some((s) => s.timerSec) ? ", with a timer" : ""}, and keeps
            the emergency number one tap away.
          </p>
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
            Get it on Android
          </a>
        </Frame>
      </main>
      <SiteFooter />
    </>
  )
}
