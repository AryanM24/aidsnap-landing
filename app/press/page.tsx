import { ArrowUpRight, Download } from "lucide-react"
import { CONTACT, Frame, Mark, PageTitle , Shell } from "@/components/site"

export const metadata = {
  title: "Press",
  description: "News coverage of AidSnap, a short description to quote, fast facts, brand assets and the press contact.",
  alternates: { canonical: "/press" },
}

const coverage = [
  {
    year: "2025",
    publication: "TapInto Edison",
    headline: "Edison High School Students Create First Aid App Using AI Model",
    href: "https://www.tapinto.net/towns/edison/sections/business-and-finance/articles/edison-high-school-students-create-first-aid-app-using-ai-model",
  },
]

const facts = [
  ["What it is", "An AI first aid assistant for people with no medical training"],
  ["How it works", "Chat, photo or hands-free voice, answered in short numbered steps"],
  ["Built-in guides", "16, based on AHA, Red Cross, ERC and NHS guidance"],
  ["Calling for help", "Shows the region's emergency number; the person always taps to call"],
  ["Platforms", "Android now, iPhone coming soon"],
]

const assets = [
  { label: "Mark, white on transparent", file: "/logo.png" },
  { label: "Wordmark, black on transparent", file: "/logo2.png" },
]

export default function Press() {
  return (
    <Shell>
        <PageTitle section="Company" title="Press" lead="Coverage of AidSnap, and everything you need to write about it." />

        <Frame className="px-4 py-14 sm:px-8 md:py-16">
          <h2 className="mb-6 text-sm text-muted-foreground">Coverage</h2>
          {coverage.map((a) => (
            <a
              key={a.href}
              href={a.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex flex-col justify-between gap-10 rounded-2xl border bg-card p-6 transition-colors hover:bg-muted/40 md:flex-row md:items-end md:p-8"
            >
              <div className="max-w-2xl space-y-3">
                <p className="text-sm text-muted-foreground">
                  {a.publication} <span className="px-1">·</span> <span className="font-mono tabular-nums">{a.year}</span>
                </p>
                <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">{a.headline}</p>
              </div>
              <span className="flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                Read the article
                <ArrowUpRight className="size-4" strokeWidth={1.5} />
              </span>
            </a>
          ))}
        </Frame>

        <Frame>
          <div className="grid gap-px bg-border md:grid-cols-2">
            <section className="space-y-4 bg-background p-6 md:p-8">
              <h2 className="text-sm text-muted-foreground">About AidSnap</h2>
              <p className="text-lg leading-relaxed">
                AidSnap is an AI first aid assistant for the minutes before help arrives. People describe what happened by text,
                photo or voice, and AidSnap answers with clear, numbered first aid steps, can talk them through it hands free, and
                keeps the right emergency number one tap away. It never calls on its own. AidSnap is available on Android.
              </p>
            </section>
            <section className="bg-background p-6 md:p-8">
              <h2 className="mb-4 text-sm text-muted-foreground">Fast facts</h2>
              <dl className="divide-y border-y">
                {facts.map(([k, v]) => (
                  <div key={k} className="grid gap-1 py-3 sm:grid-cols-[150px_1fr] sm:gap-6">
                    <dt className="text-sm text-muted-foreground">{k}</dt>
                    <dd className="text-sm">{v}</dd>
                  </div>
                ))}
              </dl>
            </section>
          </div>
        </Frame>

        <Frame grow>
          <div className="grid h-full gap-px bg-border md:grid-cols-[2fr_1fr]">
            <section className="bg-background p-6 md:p-8">
              <h2 className="mb-6 text-sm text-muted-foreground">Brand assets</h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="flex aspect-[16/9] items-center justify-center rounded-xl bg-ink text-white">
                  <Mark className="size-14" />
                </div>
                <div className="flex aspect-[16/9] items-center justify-center gap-3 rounded-xl border bg-white text-[28px] font-medium tracking-tight text-black">
                  <Mark className="size-9" />
                  AidSnap
                </div>
              </div>
              <ul className="mt-6 space-y-2">
                {assets.map((a) => (
                  <li key={a.file}>
                    <a href={a.file} download className="inline-flex items-center gap-2 text-sm transition-colors hover:text-muted-foreground">
                      <Download className="size-4" strokeWidth={1.5} />
                      {a.label} <span className="text-muted-foreground">PNG</span>
                    </a>
                  </li>
                ))}
              </ul>
              <p className="mt-6 text-sm text-muted-foreground">
                Please don&apos;t recolor, stretch or add effects to the mark. The emergency red is reserved for calls for help, never for the logo.
              </p>
            </section>
            <section className="space-y-3 bg-background p-6 md:p-8">
              <h2 className="text-sm text-muted-foreground">Press contact</h2>
              <p>For interviews, quotes and images.</p>
              <a href={`${CONTACT}?subject=${encodeURIComponent("Press inquiry")}`} className="inline-block underline underline-offset-4">
                aryan.mittal@aidsnap.com
              </a>
            </section>
          </div>
        </Frame>
    </Shell>
  )
}
