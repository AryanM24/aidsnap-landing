import type React from "react"
import { Heart, KeyRound, Phone, ShieldOff, Trash2 } from "lucide-react"
import { Frame, PLAY_URL, SiteFooter, SiteHeader, button } from "@/components/site"
import { HeroPhone } from "@/components/hero-phone"
import { cn } from "@/lib/utils"

const i = (n: number) => ({ "--i": n }) as React.CSSProperties

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

/** Cells divided by 1px lines in the frame's color: the grid gap shows the border color behind. */
const cells = "grid gap-px bg-border"

const connectors = [
  { name: "Apple Health", icon: null },
  { name: "Health Connect", icon: "/connectors/health-connect.png", inset: true },
  { name: "WHOOP", icon: "/connectors/whoop.png" },
  { name: "Oura", icon: "/connectors/oura.png" },
  { name: "Withings", icon: "/connectors/withings.png" },
  { name: "Dexcom", icon: "/connectors/dexcom.png" },
]

function Cell({ title, body, children, className }: { title: string; body: string; children: React.ReactNode; className?: string }) {
  return (
    <div className={cn("flex flex-col justify-between gap-10 bg-background p-6 md:p-8", className)}>
      <div className="flex min-h-[260px] flex-1 items-center justify-center">{children}</div>
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
      <main className="overflow-x-clip">
        {/* Hero: the original structure, centered text with the product below it. */}
        <Frame className="px-4 pb-14 pt-20 text-center sm:px-8 md:pt-24">
          <h1 className="rise mx-auto max-w-4xl text-[40px] font-medium leading-[1.05] tracking-tight sm:text-5xl md:text-6xl lg:text-7xl">
            Know what to do
            <br />
            <span className="text-muted-foreground">before help arrives.</span>
          </h1>
          <p className="rise mx-auto mt-6 max-w-2xl text-lg text-muted-foreground md:text-xl" style={i(1)}>
            Tell AidSnap what happened, by text, photo or voice. It answers in clear steps, stays with you while you do
            them, and keeps the emergency number one tap away.
          </p>
        </Frame>
        <Frame>
          <HeroPhone />
        </Frame>

        <Frame className="px-4 py-16 text-center sm:px-8">
          <h2 className="text-2xl font-medium tracking-tight md:text-3xl">Works with the health data you already have</h2>
          <p className="mt-3 text-muted-foreground">Off until you connect one. Disconnect any time.</p>
        </Frame>
        <Frame>
          <ul className={cn(cells, "grid-cols-2 sm:grid-cols-3 lg:grid-cols-6")}>
            {connectors.map((c) => (
              <li key={c.name} className="flex flex-col items-center gap-4 bg-background px-4 py-10">
                <span className="flex size-16 items-center justify-center overflow-hidden rounded-[22.5%] bg-white outline outline-1 -outline-offset-1 outline-black/10">
                  {c.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={c.icon} alt="" className={c.inset ? "size-[68%]" : "size-full"} />
                  ) : (
                    <Heart className="size-7 text-zinc-500" strokeWidth={1.5} />
                  )}
                </span>
                <span className="text-sm text-muted-foreground">{c.name}</span>
              </li>
            ))}
          </ul>
        </Frame>

        <Frame id="features" className="px-4 py-16 sm:px-8 md:py-20">
          <Heading a="Everything for the next ten minutes." b="Nothing you have to learn first." />
        </Frame>
        <Frame>
          <div className={cn(cells, "grid-flow-dense lg:grid-cols-3")}>
            <Cell
              className="lg:col-span-2"
              title="Talk it through, hands free"
              body="Start Live and speak. AidSnap listens, answers out loud and can look through your camera, so your hands stay where they're needed."
            >
              <LiveVisual />
            </Cell>
            <Cell title="Medical ID" body="Allergies, conditions, medications and who to call, ready for a responder.">
              <MedicalIdVisual />
            </Cell>
            <Cell title="Guides, one step at a time" body="16 first aid guides based on AHA, Red Cross and NHS guidance, with timers and a CPR beat.">
              <StepVisual />
            </Cell>
            <Cell
              className="lg:col-span-2"
              title="The right number, one tap away"
              body="AidSnap knows the emergency numbers for your region. It never calls on its own: you tap, it asks once, you talk."
            >
              <CallVisual />
            </Cell>
          </div>
        </Frame>

        <Frame className="px-4 py-16 sm:px-8 md:py-20">
          <Heading a="Private by default." />
        </Frame>
        <Frame>
          <div className={cn(cells, "md:grid-cols-3")}>
            {privacy.map(({ icon: Icon, title, body }) => (
              <div key={title} className="space-y-3 bg-background p-6 md:p-8">
                <Icon className="size-6" strokeWidth={1.5} />
                <h3 className="pt-6 font-medium">{title}</h3>
                <p className="text-sm text-muted-foreground">{body}</p>
              </div>
            ))}
          </div>
        </Frame>

        <Frame className="flex flex-col items-center px-4 py-24 text-center sm:px-8 md:py-32">
          <Heading a="Keep it on your phone" b="before you need it." />
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={cn(button.primary, "mt-10")}>
            Get it on Android
          </a>
          <p className="mt-4 text-sm text-muted-foreground">iOS coming soon. Delete your account any time.</p>
        </Frame>
      </main>
      <SiteFooter />
    </>
  )
}
