"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUp, AudioLines, ListOrdered, Menu, Plus, SquarePen } from "lucide-react"
import { Keycap } from "@/components/site"
import { cn } from "@/lib/utils"

const key = "absolute w-[3px] bg-[linear-gradient(90deg,#8d8f96,#d9dade)]"

/** iOS status bar glyphs: four signal bars, Wi-Fi fan, and the rounded battery with its cap. */
function StatusIcons() {
  return (
    <span className="flex items-center gap-[5px] text-foreground">
      <svg viewBox="0 0 18 12" className="h-[11px] w-[17px]" fill="currentColor" aria-hidden>
        <rect x="0" y="8" width="3" height="4" rx="0.8" />
        <rect x="5" y="5.5" width="3" height="6.5" rx="0.8" />
        <rect x="10" y="3" width="3" height="9" rx="0.8" />
        <rect x="15" y="0" width="3" height="12" rx="0.8" />
      </svg>
      <svg viewBox="0 0 16 12" className="h-[11px] w-[15px]" fill="currentColor" aria-hidden>
        <path d="M8 2.4c2.3 0 4.4.9 6 2.4l1.2-1.3A10.4 10.4 0 0 0 8 .6 10.4 10.4 0 0 0 .8 3.5L2 4.8a8.6 8.6 0 0 1 6-2.4Z" />
        <path d="M8 5.8c1.4 0 2.6.5 3.6 1.4l1.2-1.3A7 7 0 0 0 8 4a7 7 0 0 0-4.8 1.9l1.2 1.3c1-.9 2.2-1.4 3.6-1.4Z" />
        <path d="M8 9.2c.5 0 1 .2 1.3.5L8 11.2 6.7 9.7c.3-.3.8-.5 1.3-.5Z" />
      </svg>
      <svg viewBox="0 0 27 13" className="h-[12px] w-[25px]" aria-hidden>
        <rect x="0.5" y="0.5" width="23" height="12" rx="3.8" fill="none" stroke="currentColor" strokeOpacity="0.4" />
        <rect x="2" y="2" width="20" height="9" rx="2.5" fill="currentColor" />
        <path d="M25 4.5v4c.8-.3 1.3-1.1 1.3-2s-.5-1.7-1.3-2Z" fill="currentColor" fillOpacity="0.4" />
      </svg>
    </span>
  )
}

const beats = [
  { title: "Say what happened", body: "Type it, say it or add a photo." },
  { title: "Get short steps", body: "Numbered, plain, one action each." },
  { title: "Go one step at a time", body: "The full guide, with timers and a CPR beat." },
  { title: "Help is one tap away", body: "SOS opens your region's emergency numbers." },
]

// The app's welcome suggestions (app/(app)/_layout.tsx).
const suggestions = [
  ["Someone is bleeding", "and it won't stop"],
  ["A burn", "from a stove or hot water"],
  ["Someone collapsed", "and isn't responding"],
  ["Check a photo", "of a wound or rash"],
]

/** The app's composer: the input on top, attach on the left, voice and send on the right. Send is dimmed while empty. */
function Composer() {
  return (
    <div className="space-y-1.5 rounded-[16px] border border-foreground/10 bg-muted/30 p-1.5">
      <p className="px-1.5 pt-0.5 text-[13.5px] text-muted-foreground">Describe what happened</p>
      <div className="flex items-center justify-between">
        <Plus className="ml-1 size-[18px] text-muted-foreground" strokeWidth={1.5} />
        <span className="flex items-center gap-2.5">
          <AudioLines className="size-[18px] text-foreground" strokeWidth={1.5} />
          <span className="flex size-7 items-center justify-center rounded-full bg-primary text-primary-foreground opacity-50">
            <ArrowUp className="size-3.5" strokeWidth={2} />
          </span>
        </span>
      </div>
    </div>
  )
}

const steps = [
  ["Press firmly and directly on the wound with a clean cloth.", "Use gauze, a towel or clothing."],
  ["Keep pressing hard without lifting to check.", "Hold steady pressure for at least 10 minutes."],
  ["If blood soaks through, add more cloth on top and press harder.", "Leave the first layer in place."],
]

function Beat({ n, side }: { n: number; side: "left" | "right" }) {
  const b = beats[n]
  return (
    <div data-beat={n} className={`max-w-[220px] space-y-2 ${side === "left" ? "ml-auto text-right" : ""}`}>
      <div className={`flex items-center gap-2 ${side === "left" ? "justify-end" : ""}`}>
        <span className="relative flex">
          <Keycap n={n + 1} />
          <span data-cap={n} className="absolute inset-0 flex">
            <Keycap n={n + 1} active />
          </span>
        </span>
        <p className="font-medium">{b.title}</p>
      </div>
      <p className="text-sm text-muted-foreground">{b.body}</p>
    </div>
  )
}

/** An iPhone drawn in code. On desktop the stage pins and scrolling plays one AidSnap conversation, beat by beat. */
export function HeroPhone() {
  const stage = useRef<HTMLDivElement>(null)

  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger)
    const mm = gsap.matchMedia()
    mm.add("(min-width: 1024px) and (prefers-reduced-motion: no-preference)", () => {
      const q = gsap.utils.selector(stage)
      // A beat lights up and its keycap fills as the conversation reaches it.
      const light = (n: number) => [
        gsap.fromTo(q(`[data-beat="${n}"]`), { opacity: 0.3 }, { opacity: 1, duration: 0.3 }),
        gsap.fromTo(q(`[data-cap="${n}"]`), { opacity: 0 }, { opacity: 1, duration: 0.3 }),
      ]
      const tl = gsap.timeline({
        defaults: { ease: "power2.out", duration: 0.4 },
        // Pins just under the 64px sticky header.
        scrollTrigger: { trigger: stage.current, start: "top 64px", end: "+=1600", pin: true, scrub: 0.6, invalidateOnRefresh: true },
      })
      // Start on the welcome screen; the chat is hidden until a suggestion is tapped.
      gsap.set(q("[data-m='welcome']"), { opacity: 1 })
      gsap.set(q("[data-m='chat']"), { opacity: 0 })
      tl.from(q("[data-phone]"), { rotateX: 16, scale: 0.94, duration: 1 })
        .add(light(0))
        .to(q("[data-m='pick']"), { opacity: 1, duration: 0.2 })
        .to(q("[data-m='welcome']"), { opacity: 0, y: -8, duration: 0.3 })
        .to(q("[data-m='chat']"), { opacity: 1, duration: 0.3 }, "<0.1")
        .from(q("[data-m='user']"), { opacity: 0, y: 12 })
        .fromTo(q("[data-m='typing']"), { opacity: 0 }, { opacity: 1, duration: 0.2 })
        .to(q("[data-m='typing']"), { opacity: 0, duration: 0.2 }, "+=0.3")
        .add(light(1))
        .from(q("[data-m='intro']"), { opacity: 0, y: 8 })
        .from(q("[data-m='step']"), { opacity: 0, y: 8, stagger: 0.25 })
        .add(light(2))
        .from(q("[data-m='guide']"), { opacity: 0, y: 12 })
        // The thread scrolls up as the guide card arrives, like a real chat.
        .to(
          q("[data-m='thread']"),
          {
            // Scroll exactly enough to show the guide card at the bottom of the chat.
            y: () => {
              const el = q("[data-m='thread']")[0] as HTMLElement
              const view = q("[data-m='viewport']")[0] as HTMLElement
              return -Math.max(0, el.scrollHeight - view.clientHeight + 12)
            },
          },
          "<",
        )
        .to(q("[data-m='start']"), { scale: 0.96, duration: 0.15 })
        .to(q("[data-m='start']"), { scale: 1, duration: 0.15 })
        .add(light(3))
        .to(q("[data-m='sos']"), { scale: 1.12, duration: 0.25 })
        .to(q("[data-m='sos']"), { scale: 1, duration: 0.25 })
        .to({}, { duration: 0.4 })
    })
    return () => mm.revert()
  }, [])

  return (
    <div ref={stage} className="flex items-start justify-center px-4 py-10 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:gap-16 lg:px-12">
      <div className="hidden space-y-16 lg:block">
        <Beat n={0} side="left" />
        <Beat n={1} side="left" />
      </div>
      <div style={{ perspective: 1200 }}>
        <Phone />
      </div>
      <div className="hidden space-y-16 lg:block">
        <Beat n={2} side="right" />
        <Beat n={3} side="right" />
      </div>
    </div>
  )
}

function Phone() {
  return (
    <div data-phone className="relative mx-auto w-[300px]" role="img" aria-label="AidSnap on an iPhone answering a question about a deep cut with numbered first aid steps">
      {/* Buttons, in the aluminum of the rim: Action and volume on the left, side button and Camera Control on the right. */}
      <span className={cn(key, "-left-[3px] top-[118px] h-[26px] rounded-l-[2px]")} />
      <span className={cn(key, "-left-[3px] top-[168px] h-[46px] rounded-l-[2px]")} />
      <span className={cn(key, "-left-[3px] top-[226px] h-[46px] rounded-l-[2px]")} />
      <span className={cn(key, "-right-[3px] top-[180px] h-[74px] rounded-r-[2px]")} />
      <span className={cn(key, "-right-[3px] top-[372px] h-[38px] rounded-r-[2px] opacity-70")} />
      {/* Aluminum rim, then a thin even black bezel around the glass. */}
      <div className="rounded-[50px] bg-[linear-gradient(145deg,#d9dade,#9a9ca3_30%,#e6e7ea_55%,#8d8f96_80%,#c7c8cd)] p-[2.5px] shadow-[0_40px_80px_-32px_rgb(0_0_0/0.45),0_2px_6px_rgb(0_0_0/0.12)]">
        <div className="rounded-[47.5px] bg-black p-[7px]">
          <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[41px] bg-background" aria-hidden>
            <div className="flex h-[46px] shrink-0 items-center justify-between pl-[30px] pr-[26px] pt-[3px]">
              <span className="w-[54px] text-center text-[15px] font-semibold tabular-nums tracking-[-0.01em]">9:41</span>
              <StatusIcons />
            </div>
            {/* Dynamic Island, smaller on iPhone 18: about 13.5 mm wide at rest. */}
            <span className="absolute left-1/2 top-[11px] h-[25px] w-[64px] -translate-x-1/2 rounded-full bg-black" />

          <div className="flex h-11 shrink-0 items-center justify-between px-4 text-muted-foreground">
            <Menu className="size-[18px]" strokeWidth={1.5} />
            <div className="flex items-center gap-3">
              <span data-m="sos" className="inline-flex h-7 items-center rounded-full bg-signal px-3 text-xs font-medium text-signal-foreground">
                SOS
              </span>
              <SquarePen className="size-[18px]" strokeWidth={1.5} />
            </div>
          </div>

          <div className="relative flex-1 text-[13px] leading-[1.45]">
          {/* Start screen, as in the app: the question, the composer, four suggestions. Shown first on desktop. */}
          <div data-m="welcome" className="absolute inset-0 flex flex-col justify-center px-3 pb-12 opacity-0">
            <p className="px-2 text-[19px] font-medium tracking-tight">What happened?</p>
            <div className="mt-4">
              <Composer />
            </div>
            <ul className="mt-3 space-y-px text-[12.5px]">
              {suggestions.map(([title, label]) => (
                <li key={title} className="relative flex flex-wrap gap-x-1.5 rounded-md px-2 py-1.5">
                  {title === "Someone is bleeding" ? <span data-m="pick" className="absolute inset-0 rounded-md bg-foreground/[0.07] opacity-0" /> : null}
                  <span className="relative">{title}</span>
                  <span className="relative text-muted-foreground">{label}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* The chat that the tapped suggestion starts. */}
          <div data-m="chat" className="absolute inset-0 flex flex-col">
          <div data-m="viewport" className="flex-1 overflow-hidden px-4 pt-2">
            <div data-m="thread" className="space-y-3">
            <p data-m="user" className="ml-auto w-fit max-w-[82%] rounded-2xl bg-muted px-3.5 py-2">
              Someone is bleeding and it won&apos;t stop
            </p>
            <div className="relative">
              <div data-m="typing" className="absolute left-0 top-1 flex gap-1 opacity-0">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                <span className="size-1.5 rounded-full bg-muted-foreground" />
              </div>
              <p data-m="intro">Press on the wound now and don&apos;t let go. Here is what to do:</p>
            </div>
            <ol className="space-y-2.5">
              {steps.map(([action, detail], n) => (
                <li key={n} data-m="step" className="flex gap-2">
                  <span className="mt-px">
                    <Keycap n={n + 1} />
                  </span>
                  <span>
                    {action}
                    <span className="block text-[11.5px] text-muted-foreground">{detail}</span>
                  </span>
                </li>
              ))}
            </ol>
            <div data-m="guide" className="space-y-2.5 rounded-xl border bg-card p-3">
              <div>
                <p className="font-medium">Severe bleeding</p>
                <p className="text-[11.5px] text-muted-foreground">Stop heavy bleeding with firm, direct pressure.</p>
              </div>
              <span data-m="start" className="flex h-9 items-center justify-center gap-2 rounded-lg bg-primary text-[12.5px] font-medium text-primary-foreground">
                <ListOrdered className="size-3.5" strokeWidth={1.5} />
                Start step by step
              </span>
            </div>
            </div>
          </div>
          <div className="shrink-0 px-2.5 pt-2">
            <Composer />
          </div>
          </div>
          </div>

          <div className="shrink-0 pb-2 pt-3">
            <div className="mx-auto h-[5px] w-[120px] rounded-full bg-foreground" />
          </div>
        </div>
      </div>
      </div>
    </div>
  )
}
