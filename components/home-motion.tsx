"use client"

import { useEffect, useRef, useState } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Keycap } from "@/components/site"

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches

/** A sentence whose words light up as it scrolls through the viewport (focus-mode reading). */
export function ScrubLine({ text }: { text: string }) {
  const ref = useRef<HTMLParagraphElement>(null)
  useEffect(() => {
    if (!ref.current || reduced()) return
    gsap.registerPlugin(ScrollTrigger)
    const ctx = gsap.context(() => {
      gsap.fromTo(
        "[data-word]",
        { opacity: 0.15 },
        { opacity: 1, stagger: 0.1, ease: "none", scrollTrigger: { trigger: ref.current, start: "top 80%", end: "bottom 40%", scrub: true } },
      )
    }, ref)
    return () => ctx.revert()
  }, [])
  return (
    <p ref={ref} className="text-3xl font-medium leading-tight tracking-tight md:text-5xl">
      {text.split(" ").map((w, i) => (
        <span key={i} data-word>
          {w}{" "}
        </span>
      ))}
    </p>
  )
}

type Step = { title: string; body: string }

/** Steps whose keycap fills as each one reaches the middle of the screen. */
export function Steps({ steps }: { steps: Step[] }) {
  const ref = useRef<HTMLOListElement>(null)
  const [active, setActive] = useState(0)
  useEffect(() => {
    if (!ref.current) return
    gsap.registerPlugin(ScrollTrigger)
    const items = Array.from(ref.current.children)
    const triggers = items.map((el, i) =>
      ScrollTrigger.create({ trigger: el, start: "top 60%", end: "bottom 60%", onToggle: (s) => s.isActive && setActive(i) }),
    )
    return () => triggers.forEach((t) => t.kill())
  }, [])
  return (
    <ol ref={ref} className="space-y-4">
      {steps.map((s, i) => (
        <li
          key={s.title}
          className={`flex gap-4 rounded-2xl border p-6 transition-colors duration-300 md:p-8 ${i === active ? "bg-card" : "border-transparent"}`}
        >
          <span className="mt-1">
            <Keycap n={i + 1} active={i === active} />
          </span>
          <div className="space-y-2">
            <h3 className="text-xl font-medium">{s.title}</h3>
            <p className="text-muted-foreground">{s.body}</p>
          </div>
        </li>
      ))}
    </ol>
  )
}
