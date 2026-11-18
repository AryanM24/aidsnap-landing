import { meta } from "@/lib/seo"
import { Page } from "@/components/site"
import { MANIFESTO, MANIFESTO_LEAD, MANIFESTO_TITLE } from "@/lib/manifesto"

export const metadata = meta({
  title: "Manifesto",
  description:
    "Why AidSnap exists: in an emergency, the person standing there is the whole healthcare system for a few minutes. Most people freeze because they don't know what to do. No one should feel powerless when it matters most.",
  path: "/manifesto",
  type: "article",
})

export default function Manifesto() {
  return (
    <Page section="Manifesto" title={MANIFESTO_TITLE} lead={MANIFESTO_LEAD}>
      <article className="space-y-16">
        {MANIFESTO.map((s, n) => (
          <section key={s.heading} className="grid gap-4 md:grid-cols-[3rem_1fr]">
            <span className="font-mono text-sm tabular-nums leading-8 text-muted-foreground">{String(n + 1).padStart(2, "0")}</span>
            <div className="space-y-5">
              <h2 className="text-2xl font-medium tracking-tight">{s.heading}</h2>
              {s.paragraphs.map((p) => (
                <p key={p.slice(0, 32)} className="text-lg leading-relaxed text-muted-foreground [text-wrap:pretty]">
                  {p}
                </p>
              ))}
            </div>
          </section>
        ))}
      </article>
    </Page>
  )
}
