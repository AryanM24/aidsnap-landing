import { Page } from "@/components/site"

export const metadata = { title: "About", description: "AidSnap puts life-saving first aid knowledge in everyone's pocket, so ordinary people can act in the minutes that matter.", alternates: { canonical: "/about" } }

const values = [
  ["Life first", "Every decision we make is guided by our commitment to saving and protecting human life."],
  ["Trust and safety", "We hold ourselves to careful medical sources and keep your data under your control."],
  ["Global access", "Emergency care knowledge should be available to everyone, regardless of location or background."],
]

export default function About() {
  return (
    <Page
      title="About AidSnap"
      lead="We want to put life-saving first aid knowledge in everyone's pocket, so ordinary people can act in the minutes that matter."
    >
      <section className="space-y-6 text-lg leading-relaxed text-muted-foreground">
        <h2 className="text-2xl font-medium tracking-tight text-foreground">Our mission</h2>
        <p>
          In an emergency, the gap between an injury and the right action costs lives. Most people freeze, not because
          they don&apos;t care, but because they don&apos;t know what to do.
        </p>
        <p>
          AidSnap closes that gap. Describe what happened and it answers with clear first aid steps, stays with you by
          voice, and keeps the emergency number one tap away.
        </p>
      </section>
      <section className="mt-16">
        <h2 className="text-2xl font-medium tracking-tight">Our values</h2>
        <dl className="mt-6 divide-y border-y">
          {values.map(([title, body]) => (
            <div key={title} className="grid gap-2 py-6 md:grid-cols-[200px_1fr] md:gap-8">
              <dt className="font-medium">{title}</dt>
              <dd className="text-muted-foreground">{body}</dd>
            </div>
          ))}
        </dl>
      </section>
    </Page>
  )
}
