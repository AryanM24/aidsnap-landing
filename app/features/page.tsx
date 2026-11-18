import type React from "react"
import { ArrowUp, BellRing, Camera, ChevronRight, Globe, ListOrdered, MapPin, Mic, Phone, Plus, ShieldPlus } from "lucide-react"
import { Frame, PLAY_URL, PageTitle, Shell, button } from "@/components/site"
import { CONNECTORS, ConnectorIcon } from "@/components/connector-icon"
import { FEATURE_GROUPS, type Feature } from "@/lib/features"
import { GUIDES, URGENCY_LABEL } from "@/lib/guides"
import { meta } from "@/lib/seo"
import { cn } from "@/lib/utils"

export const metadata = meta({
  title: "Features",
  description:
    "Everything AidSnap does: first aid steps by text, photo or voice, hands-free Live with the camera, 16 built-in guides with timers and a CPR beat, a Medical ID, and health data from Apple Health, Health Connect and wearables.",
  path: "/features",
})

const stroke = 1.5
/** The tray each feature's preview sits in. */
const tray = "flex min-h-[240px] flex-1 items-center justify-center rounded-xl bg-muted/50 p-5"
const card = "rounded-xl border bg-background shadow-[0_8px_24px_-12px_rgb(0_0_0/0.15)]"

function Switch({ on }: { on?: boolean }) {
  return (
    <span className={cn("flex h-5 w-9 shrink-0 items-center rounded-full p-0.5", on ? "bg-foreground" : "bg-foreground/15")} aria-hidden>
      <span className={cn("size-4 rounded-full bg-background shadow-sm transition-transform", on && "translate-x-4")} />
    </span>
  )
}

function InputVisual() {
  return (
    <div className={cn(card, "w-full max-w-xs space-y-3 p-3 text-sm")}>
      <div className="flex items-center gap-2">
        <span className="flex size-10 items-center justify-center rounded-lg bg-muted text-muted-foreground">
          <Camera className="size-4" strokeWidth={stroke} />
        </span>
        <span className="text-xs text-muted-foreground">hand.jpg</span>
      </div>
      <p>My son touched the stove and his palm is red</p>
      <div className="flex items-center justify-between text-muted-foreground">
        <Plus className="size-4" strokeWidth={stroke} />
        <span className="flex items-center gap-3">
          <Mic className="size-4" strokeWidth={stroke} />
          <span className="flex size-7 items-center justify-center rounded-full bg-foreground text-background">
            <ArrowUp className="size-4" strokeWidth={2} />
          </span>
        </span>
      </div>
    </div>
  )
}

function StepsVisual() {
  const burns = GUIDES.find((g) => g.id === "burns")!.steps.slice(1, 4)
  return (
    <ol className="w-full max-w-xs list-decimal space-y-2 pl-5 text-sm marker:font-mono marker:text-muted-foreground">
      {burns.map((s) => (
        <li key={s.action} className="pl-1">
          {s.action}
        </li>
      ))}
    </ol>
  )
}

function SourcesVisual() {
  return (
    <div className="w-full max-w-xs space-y-3 text-sm">
      <p className="flex items-center gap-2 text-muted-foreground">
        <Globe className="size-4" strokeWidth={stroke} />
        Searched 3 trusted sites
      </p>
      <div className="flex flex-wrap gap-2">
        {["MedlinePlus", "CDC", "NHS"].map((s) => (
          <span key={s} className={cn(card, "px-2.5 py-1 text-xs shadow-none")}>
            {s}
          </span>
        ))}
      </div>
      <p className="text-muted-foreground">Read the FDA label for ibuprofen</p>
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
        <span className="font-mono tabular-nums">00:42</span>
      </div>
      <div className="w-full space-y-2 text-[15px]">
        <p className="ml-auto w-fit rounded-xl bg-background px-3 py-2">Can you see the cut? It&apos;s still bleeding.</p>
        <p className="w-fit rounded-xl bg-background px-3 py-2">I can. Press the cloth down hard with both hands and don&apos;t lift it.</p>
      </div>
      <div className="flex gap-3 text-muted-foreground" aria-hidden>
        {[Camera, Mic].map((Icon, n) => (
          <span key={n} className="flex size-11 items-center justify-center rounded-full bg-background">
            <Icon className="size-5" strokeWidth={stroke} />
          </span>
        ))}
        <span className="flex h-11 items-center rounded-full bg-background px-5 text-sm text-foreground">End</span>
      </div>
    </div>
  )
}

function LibraryVisual() {
  const groups = (["life-threatening", "soon", "everyday"] as const).map((u) => ({
    u,
    guides: GUIDES.filter((g) => g.urgency === u).slice(0, 2),
  }))
  return (
    <div className="w-full max-w-xs space-y-4 text-sm">
      {groups.map(({ u, guides }) => (
        <div key={u} className="space-y-1.5">
          <p className="text-xs text-muted-foreground">{URGENCY_LABEL[u]}</p>
          {guides.map((g) => (
            <p key={g.id} className={cn(card, "flex items-center justify-between px-3 py-2 shadow-none")}>
              {g.title}
              <ChevronRight className="size-4 text-muted-foreground" strokeWidth={stroke} />
            </p>
          ))}
        </div>
      ))}
    </div>
  )
}

function StepVisual() {
  return (
    <div className={cn(card, "w-full max-w-xs space-y-5 p-4")}>
      <span className="flex h-9 items-center justify-center gap-2 rounded-lg bg-signal text-sm font-medium text-signal-foreground">
        <Phone className="size-4" strokeWidth={stroke} />
        Call 911
      </span>
      <div className="space-y-2">
        <p className="font-mono text-xs tabular-nums text-muted-foreground">Step 2 of 5</p>
        <div className="h-1 rounded-full bg-muted">
          <div className="h-1 w-[40%] rounded-full bg-foreground" />
        </div>
      </div>
      <p className="text-xl font-medium leading-snug tracking-tight">Cool the burn under cool running water for 20 minutes.</p>
    </div>
  )
}

function TimersVisual() {
  return (
    <div className="w-full max-w-xs space-y-3">
      <div className={cn(card, "flex items-center justify-between p-4")}>
        <div>
          <p className="text-sm text-muted-foreground">Keep cooling</p>
          <p className="font-mono text-3xl tabular-nums tracking-tight">18:42</p>
        </div>
        <svg viewBox="0 0 36 36" className="size-12 -rotate-90" aria-hidden>
          <circle cx="18" cy="18" r="15" fill="none" className="stroke-muted" strokeWidth="3" />
          <circle cx="18" cy="18" r="15" fill="none" className="stroke-foreground" strokeWidth="3" strokeDasharray="94.2" strokeDashoffset="6.8" strokeLinecap="round" />
        </svg>
      </div>
      <div className={cn(card, "flex items-center gap-3 p-3")}>
        <span className="beat size-10 shrink-0 rounded-full bg-foreground" aria-hidden />
        <div className="text-sm">
          <p>Push to the beat</p>
          <p className="font-mono tabular-nums text-muted-foreground">110 a minute · swap in 1:12</p>
        </div>
      </div>
    </div>
  )
}

const actions = [
  { icon: Phone, title: "Call 911", body: "Asks once, then you talk", signal: true },
  { icon: ListOrdered, title: "Start the burns guide", body: "Step by step, with the timer" },
  { icon: BellRing, title: "Check the burn tomorrow at 9:00", body: "Set a reminder" },
  { icon: ShieldPlus, title: "Add penicillin allergy", body: "Save to your Medical ID" },
  { icon: MapPin, title: "Urgent care nearby", body: "Open in your maps app" },
]

function ActionsVisual() {
  return (
    <div className="w-full max-w-md space-y-2">
      {actions.map(({ icon: Icon, title, body, signal }) => (
        <div key={title} className={cn(card, "flex items-center gap-3 p-3 shadow-none")}>
          <span
            className={cn(
              "flex size-9 shrink-0 items-center justify-center rounded-lg",
              signal ? "bg-signal text-signal-foreground" : "bg-muted text-muted-foreground",
            )}
          >
            <Icon className="size-4" strokeWidth={stroke} />
          </span>
          <div className="min-w-0 flex-1 text-sm">
            <p className="truncate">{title}</p>
            <p className="truncate text-muted-foreground">{body}</p>
          </div>
          <span className="rounded-md bg-muted px-2.5 py-1 text-xs">Tap</span>
        </div>
      ))}
    </div>
  )
}

function MedicalVisual() {
  const rows = [
    ["Blood type", "O+"],
    ["Allergies", "Penicillin"],
    ["Conditions", "Asthma"],
    ["Emergency contact", "Ravi Patel"],
  ]
  return (
    <div className={cn(card, "w-full max-w-[260px] -rotate-2 p-5")}>
      <p className="text-xs text-muted-foreground">Medical ID</p>
      <p className="mt-1 text-xl font-medium tracking-tight">Maya Patel</p>
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

function MemoryVisual() {
  return (
    <div className="w-full max-w-xs space-y-3 text-sm">
      <div className={cn(card, "flex items-center justify-between px-3 py-2.5")}>
        <span>
          <span className="text-muted-foreground">Remembered </span>
          Allergic to penicillin
        </span>
        <span className="font-medium">Undo</span>
      </div>
      <div className={cn(card, "divide-y shadow-none")}>
        {[
          ["Health", "2"],
          ["People", "1"],
          ["Preferences", "3"],
        ].map(([k, v]) => (
          <p key={k} className="flex justify-between px-3 py-2.5">
            {k}
            <span className="font-mono tabular-nums text-muted-foreground">{v}</span>
          </p>
        ))}
      </div>
    </div>
  )
}

function RemindersVisual() {
  const rows: [string, boolean][] = [
    ["Follow-up reminders", true],
    ["Step timer alerts", true],
    ["CPR swap reminders", true],
    ["Weekly check-in", false],
  ]
  return (
    <div className={cn(card, "w-full max-w-xs divide-y text-sm shadow-none")}>
      {rows.map(([k, on]) => (
        <p key={k} className="flex items-center justify-between gap-4 px-3 py-3">
          {k}
          <Switch on={on} />
        </p>
      ))}
    </div>
  )
}

function ConnectorsVisual() {
  return (
    <div className="grid w-full gap-3 sm:grid-cols-2">
      {CONNECTORS.map((c, n) => (
        <div key={c.name} className={cn(card, "flex items-center gap-3 p-4 shadow-none")}>
          <ConnectorIcon c={c} className="size-10" />
          <div className="min-w-0 flex-1 text-sm">
            <p className="truncate">{c.name}</p>
            <p className="text-muted-foreground">Read only</p>
          </div>
          <Switch on={n === 0 || n === 5} />
        </div>
      ))}
    </div>
  )
}

const visuals: Record<string, () => React.ReactNode> = {
  input: InputVisual,
  steps: StepsVisual,
  sources: SourcesVisual,
  live: LiveVisual,
  library: LibraryVisual,
  step: StepVisual,
  timers: TimersVisual,
  cards: ActionsVisual,
  medical: MedicalVisual,
  memory: MemoryVisual,
  reminders: RemindersVisual,
  connectors: ConnectorsVisual,
}

function Item({ f, wide }: { f: Feature; wide: boolean }) {
  const Visual = visuals[f.key]
  return (
    <div className={cn("flex flex-col gap-6 bg-background p-4 sm:p-6", wide && "lg:grid lg:grid-cols-[1fr_2fr] lg:items-center lg:gap-10 lg:p-8")}>
      <div className="space-y-1">
        <h3 className="font-medium">{f.title}</h3>
        <p className="text-sm text-muted-foreground">{f.body}</p>
      </div>
      <div className={tray}>
        <Visual />
      </div>
    </div>
  )
}

export default function Features() {
  return (
    <Shell>
      <PageTitle
        section="Features"
        title="Everything for the next ten minutes."
        lead="What AidSnap does between something going wrong and help arriving. Nothing you have to learn first."
      >
        <nav aria-label="Sections" className="rise mt-8 flex flex-wrap gap-2" style={{ "--i": 3 } as React.CSSProperties}>
          {FEATURE_GROUPS.map((g) => (
            <a key={g.id} href={`#${g.id}`} className="rounded-full border bg-background px-3 py-1 text-sm text-muted-foreground transition-colors hover:text-foreground">
              {g.label}
            </a>
          ))}
        </nav>
      </PageTitle>

      {FEATURE_GROUPS.map((g) => (
        <div key={g.id}>
          <Frame id={g.id} className="px-4 pb-10 pt-16 sm:px-8 md:pt-20">
            <span className="rounded-full border px-3 py-1 text-sm text-muted-foreground">{g.label}</span>
            <h2 className="mt-6 max-w-2xl text-3xl font-medium leading-tight tracking-tight md:text-4xl">
              {g.title} <span className="text-muted-foreground">{g.sub}</span>
            </h2>
          </Frame>
          <Frame>
            <div className={cn("grid gap-px bg-border", g.items.length > 1 && "md:grid-cols-3")}>
              {g.items.map((f) => (
                <Item key={f.key} f={f} wide={g.items.length === 1} />
              ))}
            </div>
          </Frame>
        </div>
      ))}

      <Frame grow className="flex flex-col items-center justify-center px-4 py-24 text-center sm:px-8">
        <h2 className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
          Keep it on your phone
          <br />
          <span className="text-muted-foreground">before you need it.</span>
        </h2>
        <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={cn(button.primary, "mt-10")}>
          Get it on Android
        </a>
        <p className="mt-4 text-sm text-muted-foreground">
          First aid guidance, not a diagnosis. In an emergency, call your local emergency number first.
        </p>
      </Frame>
    </Shell>
  )
}
