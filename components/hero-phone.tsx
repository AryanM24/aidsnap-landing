"use client"

import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { ArrowUp, AudioLines, BatteryFull, ListOrdered, Menu, Signal, SquarePen, Wifi } from "lucide-react"
import { Keycap } from "@/components/site"

const beats = [
  { title: "Say what happened", body: "Type it, say it or add a photo." },
  { title: "Get short steps", body: "Numbered, plain, one action each." },
  { title: "Go one step at a time", body: "The full guide, with timers and a CPR beat." },
  { title: "Help is one tap away", body: "SOS opens your region's emergency numbers." },
]

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
        scrollTrigger: { trigger: stage.current, start: "top 64px", end: "+=1600", pin: true, scrub: 0.6 },
      })
      tl.from(q("[data-phone]"), { rotateX: 16, scale: 0.94, duration: 1 })
        .add(light(0))
        .from(q("[data-m='user']"), { opacity: 0, y: 12 })
        .fromTo(q("[data-m='typing']"), { opacity: 0 }, { opacity: 1, duration: 0.2 })
        .to(q("[data-m='typing']"), { opacity: 0, duration: 0.2 }, "+=0.3")
        .add(light(1))
        .from(q("[data-m='intro']"), { opacity: 0, y: 8 })
        .from(q("[data-m='step']"), { opacity: 0, y: 8, stagger: 0.25 })
        .add(light(2))
        .from(q("[data-m='guide']"), { opacity: 0, y: 12 })
        // The thread scrolls up as the guide card arrives, like a real chat.
        .to(q("[data-m='thread']"), { y: -96 }, "<")
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
      <span className="absolute -left-[3px] top-[104px] h-8 w-[3px] rounded-l bg-ink/80" />
      <span className="absolute -left-[3px] top-[150px] h-14 w-[3px] rounded-l bg-ink/80" />
      <span className="absolute -left-[3px] top-[212px] h-14 w-[3px] rounded-l bg-ink/80" />
      <span className="absolute -right-[3px] top-[170px] h-20 w-[3px] rounded-r bg-ink/80" />
      <div className="rounded-[54px] bg-ink p-[10px] shadow-[0_40px_80px_-32px_rgb(0_0_0/0.45),inset_0_0_0_1px_rgb(255_255_255/0.12)] ring-1 ring-foreground/15">
        <div className="relative flex h-[600px] flex-col overflow-hidden rounded-[44px] bg-background" aria-hidden>
          <div className="flex h-11 shrink-0 items-center justify-between px-7 pt-1 text-[13px] font-semibold">
            <span className="tabular-nums">9:41</span>
            <span className="flex items-center gap-1">
              <Signal className="size-3.5" strokeWidth={2.5} />
              <Wifi className="size-3.5" strokeWidth={2.5} />
              <BatteryFull className="size-5" strokeWidth={1.5} />
            </span>
          </div>
          <span className="absolute left-1/2 top-[10px] h-[28px] w-[94px] -translate-x-1/2 rounded-full bg-ink" />

          <div className="flex h-11 shrink-0 items-center justify-between px-4 text-muted-foreground">
            <Menu className="size-[18px]" strokeWidth={1.5} />
            <div className="flex items-center gap-3">
              <span data-m="sos" className="inline-flex h-7 items-center rounded-full bg-signal px-3 text-xs font-medium text-signal-foreground">
                SOS
              </span>
              <SquarePen className="size-[18px]" strokeWidth={1.5} />
            </div>
          </div>

          <div className="flex-1 overflow-hidden px-4 pt-2 text-[13px] leading-[1.45]">
            <div data-m="thread" className="space-y-3">
            <p data-m="user" className="ml-auto w-fit max-w-[82%] rounded-2xl bg-muted px-3.5 py-2">
              My dad cut his hand on a kitchen knife. It won&apos;t stop bleeding.
            </p>
            <div className="relative">
              <div data-m="typing" className="absolute left-0 top-1 flex gap-1 opacity-0">
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                <span className="size-1.5 rounded-full bg-muted-foreground" />
                <span className="size-1.5 rounded-full bg-muted-foreground" />
              </div>
              <p data-m="intro">Press on the cut now and don&apos;t let go. Here is what to do:</p>
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

          <div className="shrink-0 px-2.5 pb-2 pt-2">
            <div className="flex items-center justify-between rounded-[18px] border bg-muted/30 p-1.5 pl-3">
              <span className="text-[13px] text-muted-foreground">Describe what happened</span>
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
