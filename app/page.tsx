import type React from "react"
import { ArrowUp, AudioLines, ChevronRight, ListOrdered, Menu, Phone, SquarePen } from "lucide-react"
import { Keycap, PLAY_URL, SiteFooter, SiteHeader, button } from "@/components/site"
import { ScrubLine, Steps } from "@/components/home-motion"
import { cn } from "@/lib/utils"

const i = (n: number) => ({ "--i": n }) as React.CSSProperties

/** Two-tone heading: the claim in ink, the second line in muted. */
function Heading({ a, b, className }: { a: string; b: string; className?: string }) {
  return (
    <h2 className={cn("text-3xl font-medium leading-tight tracking-tight md:text-5xl", className)}>
      {a}
      <br />
      <span className="text-muted-foreground">{b}</span>
    </h2>
  )
}

/** The bright element: AidSnap's chat, answering with the real Severe bleeding guide. */
function ChatPreview() {
  const steps = [
    ["Press firmly and directly on the wound with a clean cloth.", "Use gauze, a towel or clothing."],
    ["Keep pressing hard without lifting to check.", "Hold steady pressure for at least 10 minutes."],
    ["If blood soaks through, add more cloth on top and press harder.", "Leave the first layer in place."],
  ]
  return (
    <div className="mx-auto w-full max-w-[400px] rounded-3xl border bg-background p-2 shadow-[0_24px_64px_-24px_rgb(0_0_0/0.25)]">
      <div className="overflow-hidden rounded-2xl bg-background">
        <div className="flex h-12 items-center justify-between px-3 text-muted-foreground">
          <Menu className="size-[18px]" strokeWidth={1.5} />
          <div className="flex items-center gap-2">
            <span className="inline-flex h-7 items-center rounded-full bg-signal px-3 text-xs font-medium text-signal-foreground">SOS</span>
            <SquarePen className="size-[18px]" strokeWidth={1.5} />
          </div>
        </div>
        <div className="space-y-4 px-4 pb-4 pt-2 text-[15px] leading-6">
          <p className="ml-auto w-fit max-w-[80%] rounded-2xl bg-muted px-4 py-2">
            My dad cut his hand on a kitchen knife. It won&apos;t stop bleeding.
          </p>
          <p>Press on the cut now and don&apos;t let go. Here is what to do:</p>
          <ol className="space-y-3">
            {steps.map(([action, detail], n) => (
              <li key={n} className="flex gap-2">
                <span className="mt-0.5">
                  <Keycap n={n + 1} />
                </span>
                <span>
                  {action}
                  <span className="block text-sm text-muted-foreground">{detail}</span>
                </span>
              </li>
            ))}
          </ol>
          <div className="space-y-3 rounded-xl border bg-card p-4">
            <div>
              <p className="font-medium">Severe bleeding</p>
              <p className="text-sm text-muted-foreground">Stop heavy bleeding from a wound with firm, direct pressure.</p>
            </div>
            <span className="flex h-11 items-center justify-center gap-2 rounded-lg bg-primary text-sm font-medium text-primary-foreground">
              <ListOrdered className="size-4" strokeWidth={1.5} />
              Start step by step
            </span>
          </div>
        </div>
        <div className="p-2">
          <div className="flex items-center justify-between rounded-2xl border bg-muted/30 p-2 pl-3">
            <span className="text-[15px] text-muted-foreground">Describe what happened</span>
            <span className="flex items-center gap-2">
              <AudioLines className="size-[18px] text-muted-foreground" strokeWidth={1.5} />
              <span className="flex size-8 items-center justify-center rounded-full bg-primary text-primary-foreground">
                <ArrowUp className="size-4" strokeWidth={2} />
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

function Card({ title, body, children, className }: { title: string; body: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col justify-between gap-8 overflow-hidden rounded-3xl border bg-card p-6", className)}>
      <div className="flex flex-1 items-center justify-center">{children}</div>
      <div className="space-y-1">
        <h3 className="font-medium">{title}</h3>
        <p className="text-sm text-muted-foreground">{body}</p>
      </div>
    </div>
  )
}

function LiveVisual() {
  return (
    <div className="flex w-full max-w-md flex-col items-center gap-6">
      <div className="orb size-24 rounded-full" aria-hidden />
      <div className="flex items-center gap-2 text-sm text-muted-foreground">
        <span className="size-2 rounded-full bg-positive" />
        Listening
        <span className="font-mono tabular-nums">01:24</span>
      </div>
      <div className="w-full space-y-2 text-[15px]">
        <p className="ml-auto w-fit rounded-xl bg-muted/60 px-3 py-2">I&apos;ve been pressing for five minutes.</p>
        <p className="w-fit rounded-xl bg-muted/60 px-3 py-2">Good. Keep pressing and don&apos;t lift the cloth to check.</p>
      </div>
    </div>
  )
}

function MedicalIdVisual() {
  const rows = [
    ["Blood type", "O+"],
    ["Allergies", "Penicillin"],
    ["Conditions", "Asthma"],
    ["Emergency contact", "Ravi Patel"],
  ]
  return (
    <div className="w-full max-w-[280px] -rotate-2 rounded-2xl border bg-background p-5 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.2)]">
      <p className="text-xs text-muted-foreground">Medical ID</p>
      <p className="mt-1 text-[22px] font-medium tracking-tight">Maya Patel</p>
      <dl className="mt-4 space-y-2 text-sm">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-4 border-t pt-2">
            <dt className="text-muted-foreground">{k}</dt>
            <dd>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  )
}

function StepVisual() {
  return (
    <div className="w-full max-w-[280px] space-y-5">
      <div className="space-y-2">
        <p className="font-mono text-xs tabular-nums text-muted-foreground">Step 6 of 10</p>
        <div className="h-1 rounded-full bg-muted">
          <div className="h-1 w-[60%] rounded-full bg-foreground" />
        </div>
      </div>
      <p className="text-xl font-medium leading-snug tracking-tight">Push hard and fast in the center of the chest.</p>
      <div className="flex items-center gap-3 rounded-2xl bg-muted/60 p-3">
        <span className="beat size-10 shrink-0 rounded-full bg-foreground" aria-hidden />
        <div className="text-sm">
          <p>Push to the beat</p>
          <p className="font-mono tabular-nums text-muted-foreground">110 a minute</p>
        </div>
      </div>
    </div>
  )
}

function CallVisual() {
  return (
    <div className="w-full max-w-sm rounded-3xl border bg-background p-5 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.2)]">
      <div className="mx-auto mb-4 h-1 w-9 rounded-full bg-muted" />
      <p className="text-center text-lg font-medium">Call 911?</p>
      <p className="mt-1 text-center text-sm text-muted-foreground">
        Emergency services <span className="font-mono tabular-nums">911</span>
      </p>
      <div className="mt-5 grid grid-cols-2 gap-2">
        <span className="flex h-11 items-center justify-center rounded-lg bg-muted text-sm">Cancel</span>
        <span className="flex h-11 items-center justify-center gap-2 rounded-lg bg-signal text-sm font-medium text-signal-foreground">
          <Phone className="size-4" strokeWidth={1.5} />
          Call 911
        </span>
      </div>
    </div>
  )
}

const sources = [
  ["Apple Health", true],
  ["Health Connect", false],
  ["WHOOP", true],
  ["Oura", false],
  ["Withings", false],
  ["Dexcom", false],
] as const

const how = [
  {
    title: "Say what happened",
    body: "Type it, say it or add a photo. You don't need medical words. AidSnap asks what it needs to know.",
  },
  {
    title: "Follow short steps",
    body: "Answers come as numbered steps. Open the full guide to go one step at a time, with timers and a CPR beat.",
  },
  {
    title: "Call when it's serious",
    body: "AidSnap puts your region's emergency number on screen. It never dials on its own: you tap, confirm and talk.",
  },
]

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 md:pt-24 lg:grid-cols-[1.25fr_1fr] lg:pb-32">
          <div className="space-y-8">
            <h1 className="rise text-[40px] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-[64px]">
              Know what to do
              <br />
              <span className="text-muted-foreground">before help arrives.</span>
            </h1>
            <p className="rise max-w-lg text-lg text-muted-foreground" style={i(1)}>
              Tell AidSnap what happened, by text, photo or voice. It answers in clear steps, stays with you while you do
              them, and keeps the emergency number one tap away.
            </p>
            <div className="rise flex flex-wrap gap-3" style={i(2)}>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
                Get it on Android
              </a>
              <a href="#how" className={button.secondary}>
                See how it works
              </a>
            </div>
          </div>
          <div className="rise" style={i(3)}>
            <ChatPreview />
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 md:py-32">
          <Heading a="Everything for the next ten minutes." b="Nothing you have to learn first." className="mb-12 md:mb-16" />
          <div className="grid grid-flow-dense gap-4 lg:grid-cols-3">
            <Card
              className="lg:col-span-2"
              title="Talk it through, hands free"
              body="Start Live and speak. AidSnap listens, answers out loud and can look through your camera, so your hands stay where they're needed."
            >
              <LiveVisual />
            </Card>
            <Card title="Medical ID" body="Allergies, conditions, medications and who to call, ready for a responder.">
              <MedicalIdVisual />
            </Card>
            <Card title="Guides, one step at a time" body="16 first aid guides based on AHA, Red Cross and NHS guidance, with timers and a CPR beat.">
              <StepVisual />
            </Card>
            <Card
              className="lg:col-span-2"
              title="The right number, one tap away"
              body="AidSnap knows the emergency numbers for your region. It never calls on its own: you tap, it asks once, you talk."
            >
              <CallVisual />
            </Card>
            <div className="flex flex-col gap-8 rounded-3xl border bg-card p-6 md:flex-row md:items-center md:justify-between lg:col-span-3">
              <div className="max-w-md space-y-1">
                <h3 className="font-medium">Answers that know you, if you want</h3>
                <p className="text-sm text-muted-foreground">
                  Connect your health apps and wearables, and AidSnap can read your heart rate, sleep or glucose when you
                  ask. Off until you turn it on.
                </p>
              </div>
              <ul className="grid grid-cols-2 gap-x-8 gap-y-2 text-sm sm:grid-cols-3">
                {sources.map(([name, on]) => (
                  <li key={name} className="flex items-center gap-2">
                    <span className={cn("size-2 rounded-full", on ? "bg-positive" : "bg-muted-foreground/30")} />
                    {name}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        <section id="how" className="mx-auto grid max-w-6xl scroll-mt-16 gap-12 px-4 py-24 sm:px-6 md:py-32 lg:grid-cols-2">
          <div>
            <Heading a="It starts with one question." b="What happened?" className="lg:sticky lg:top-32" />
          </div>
          <Steps steps={how} />
        </section>

        <section className="mx-auto max-w-4xl px-4 py-24 sm:px-6 md:py-40">
          <ScrubLine text="No one should ever feel powerless when it matters most." />
          <a href="/manifesto" className="mt-8 inline-flex items-center gap-1 text-muted-foreground transition-colors hover:text-foreground">
            Read the manifesto
            <ChevronRight className="size-4" strokeWidth={1.5} />
          </a>
        </section>

        <section id="download" className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
          <div className="flex flex-col items-start justify-between gap-8 rounded-3xl bg-muted/60 p-8 md:flex-row md:items-end md:p-12">
            <Heading a="Keep it on your phone" b="before you need it." />
            <div className="space-y-3">
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
                Get it on Android
              </a>
              <p className="text-sm text-muted-foreground">iOS is coming soon.</p>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
