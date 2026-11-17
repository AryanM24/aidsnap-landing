import type React from "react"
import { ArrowUp, AudioLines, BatteryFull, Heart, KeyRound, ListOrdered, Menu, Phone, ShieldOff, Signal, SquarePen, Trash2, Wifi } from "lucide-react"
import { Keycap, PLAY_URL, SiteFooter, SiteHeader, button } from "@/components/site"
import { cn } from "@/lib/utils"

const i = (n: number) => ({ "--i": n }) as React.CSSProperties
const d = (s: number) => ({ "--d": `${s}s` }) as React.CSSProperties

/** Two-tone heading: the claim in ink, the second line in muted. */
function Heading({ a, b, className }: { a: string; b?: string; className?: string }) {
  return (
    <h2 className={cn("text-3xl font-medium leading-tight tracking-tight md:text-5xl", className)}>
      {a}
      {b ? (
        <>
          <br />
          <span className="text-muted-foreground">{b}</span>
        </>
      ) : null}
    </h2>
  )
}

/** An iPhone drawn in code, playing one AidSnap conversation (the real Severe bleeding guide) on load. */
function IPhone() {
  const steps = [
    ["Press firmly and directly on the wound with a clean cloth.", "Use gauze, a towel or clothing."],
    ["Keep pressing hard without lifting to check.", "Hold steady pressure for at least 10 minutes."],
    ["If blood soaks through, add more cloth on top and press harder.", "Leave the first layer in place."],
  ]
  return (
    <div className="relative mx-auto w-[320px] shrink-0" role="img" aria-label="AidSnap on an iPhone answering a question about a deep cut with numbered first aid steps">
      {/* side buttons */}
      <span className="absolute -left-[3px] top-[110px] h-8 w-[3px] rounded-l bg-ink/80" />
      <span className="absolute -left-[3px] top-[160px] h-14 w-[3px] rounded-l bg-ink/80" />
      <span className="absolute -left-[3px] top-[226px] h-14 w-[3px] rounded-l bg-ink/80" />
      <span className="absolute -right-[3px] top-[180px] h-20 w-[3px] rounded-r bg-ink/80" />
      <div className="rounded-[56px] bg-ink p-[11px] ring-1 ring-foreground/15 shadow-[0_40px_80px_-32px_rgb(0_0_0/0.45),inset_0_0_0_1px_rgb(255_255_255/0.12)]">
        <div className="relative flex h-[640px] flex-col overflow-hidden rounded-[45px] bg-background" aria-hidden>
          {/* status bar and Dynamic Island */}
          <div className="flex h-12 shrink-0 items-center justify-between px-7 pt-1 text-[13px] font-semibold">
            <span className="tabular-nums">9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="size-3.5" strokeWidth={2.5} />
              <Wifi className="size-3.5" strokeWidth={2.5} />
              <BatteryFull className="size-5" strokeWidth={1.5} />
            </span>
          </div>
          <span className="absolute left-1/2 top-[11px] h-[30px] w-[100px] -translate-x-1/2 rounded-full bg-ink" />

          {/* app header */}
          <div className="flex h-11 shrink-0 items-center justify-between px-4 text-muted-foreground">
            <Menu className="size-[18px]" strokeWidth={1.5} />
            <div className="flex items-center gap-3">
              <span className="inline-flex h-7 items-center rounded-full bg-signal px-3 text-xs font-medium text-signal-foreground">SOS</span>
              <SquarePen className="size-[18px]" strokeWidth={1.5} />
            </div>
          </div>

          {/* thread */}
          <div className="flex-1 space-y-3 overflow-hidden px-4 pt-2 text-[13.5px] leading-[1.45]">
            <p className="seq ml-auto w-fit max-w-[82%] rounded-2xl bg-muted px-3.5 py-2" style={d(0.5)}>
              My dad cut his hand on a kitchen knife. It won&apos;t stop bleeding.
            </p>
            <div className="relative">
              <div className="typing absolute left-0 top-1 flex gap-1">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                <span className="size-1.5 rounded-full bg-muted-foreground" />
              </div>
              <p className="seq" style={d(2.5)}>
                Press on the cut now and don&apos;t let go. Here is what to do:
              </p>
            </div>
            <ol className="space-y-2.5">
              {steps.map(([action, detail], n) => (
                <li key={n} className="seq flex gap-2" style={d(2.8 + n * 0.35)}>
                  <span className="mt-px">
                    <Keycap n={n + 1} />
                  </span>
                  <span>
                    {action}
                    <span className="block text-[12px] text-muted-foreground">{detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div className="seq space-y-2.5 rounded-xl border bg-card p-3" style={d(4.1)}>
              <div>
                <p className="font-medium">Severe bleeding</p>
                <p className="text-[12px] text-muted-foreground">Stop heavy bleeding with firm, direct pressure.</p>
              </div>
              <span className="flex h-9 items-center justify-center gap-2 rounded-lg bg-primary text-[12.5px] font-medium text-primary-foreground">
                <ListOrdered className="size-3.5" strokeWidth={1.5} />
                Start step by step
              </span>
            </div>
          </div>

          {/* composer and home indicator */}
          <div className="shrink-0 px-2.5 pb-2 pt-2">
            <div className="flex items-center justify-between rounded-[18px] border bg-muted/30 p-1.5 pl-3">
              <span className="text-[13.5px] text-muted-foreground">Describe what happened</span>
              <span className="flex items-center gap-2">
                <AudioLines className="size-4 text-muted-foreground" strokeWidth={1.5} />
                <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowUp className="size-3.5" strokeWidth={2} />
                </span>
              </span>
            </div>
            <div className="mx-auto mt-2.5 h-[5px] w-[120px] rounded-full bg-foreground" />
          </div>
        </div>
      </div>
    </div>
  )
}

const connectors = [
  { name: "Apple Health", icon: null },
  { name: "Health Connect", icon: "/connectors/health-connect.png", inset: true },
  { name: "WHOOP", icon: "/connectors/whoop.png" },
  { name: "Oura", icon: "/connectors/oura.png" },
  { name: "Withings", icon: "/connectors/withings.png" },
  { name: "Dexcom", icon: "/connectors/dexcom.png" },
]

function Connectors() {
  return (
    <ul className="flex flex-wrap justify-center gap-x-6 gap-y-8 sm:gap-x-10">
      {connectors.map((c) => (
        <li key={c.name} className="flex w-20 flex-col items-center gap-3">
          <span className="relative flex size-16 items-center justify-center overflow-hidden rounded-[22.5%] bg-white shadow-[0_1px_2px_rgb(0_0_0/0.06)] outline outline-1 -outline-offset-1 outline-black/10">
            {c.icon ? (
              // eslint-disable-next-line @next/next/no-img-element
              <img src={c.icon} alt="" className={c.inset ? "size-[68%]" : "size-full"} />
            ) : (
              <Heart className="size-7 text-zinc-500" strokeWidth={1.5} />
            )}
          </span>
          <span className="text-center text-xs text-muted-foreground">{c.name}</span>
        </li>
      ))}
    </ul>
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

const privacy = [
  {
    icon: KeyRound,
    title: "Your records stay on your phone",
    body: "Apple Health and Health Connect records never leave it. AidSnap sends only a short summary with your question.",
  },
  {
    icon: ShieldOff,
    title: "No ads, no trackers, never sold",
    body: "No advertising or analytics software. Health data is used only to answer you.",
  },
  {
    icon: Trash2,
    title: "Delete it all from Settings",
    body: "Forget what AidSnap remembers, disconnect a wearable, or delete your account and everything with it.",
  },
]

export default function Home() {
  return (
    <>
      <SiteHeader />
      <main className="overflow-x-hidden">
        <section className="mx-auto grid max-w-6xl items-center gap-16 px-4 pb-24 pt-16 sm:px-6 md:pt-20 lg:grid-cols-[1fr_auto] lg:gap-24 lg:pb-32">
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
            <div className="rise flex flex-wrap items-center gap-4" style={i(2)}>
              <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
                Get it on Android
              </a>
              <span className="text-sm text-muted-foreground">iOS coming soon</span>
            </div>
          </div>
          <div className="rise" style={i(2)}>
            <IPhone />
          </div>
        </section>

        <section className="border-y bg-muted/40 px-4 py-20 sm:px-6 md:py-24">
          <h2 className="mb-12 text-center text-2xl font-medium tracking-tight md:text-3xl">
            Works with the health data you already have
          </h2>
          <Connectors />
          <p className="mt-10 text-center text-sm text-muted-foreground">Off until you connect one. Disconnect any time.</p>
        </section>

        <section id="features" className="mx-auto max-w-6xl scroll-mt-16 px-4 py-24 sm:px-6 md:py-32">
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
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
          <Heading a="Private by default." className="mb-12 text-center md:mb-16" />
          <div className="grid gap-10 md:grid-cols-3 md:gap-12">
            {privacy.map(({ icon: Icon, title, body }) => (
              <div key={title} className="space-y-3">
                <Icon className="size-6" strokeWidth={1.5} />
                <h3 className="font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto max-w-6xl px-4 pb-24 sm:px-6 md:pb-32">
          <div className="flex flex-col items-center rounded-3xl bg-muted/60 px-6 py-20 text-center md:py-24">
            <Heading a="Keep it on your phone" b="before you need it." />
            <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={cn(button.primary, "mt-10")}>
              Get it on Android
            </a>
            <p className="mt-4 text-sm text-muted-foreground">iOS coming soon. Delete your account any time.</p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  )
}
