import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.aidsnap.app"
export const CONTACT = "mailto:aryan.mittal@aidsnap.com"

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-medium transition-[background-color,transform] duration-150 active:scale-[0.96]"
export const button = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-primary/90"),
  secondary: cn(base, "bg-muted text-foreground hover:bg-foreground/10"),
}

/** The AidSnap mark: a viewfinder around a cross, drawn in the current text color. */
export function Mark({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" className={className} aria-hidden>
      <path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2" />
      <path d="M12 8v8M8 12h8" strokeWidth={3} />
    </svg>
  )
}

/** Signature: numbered steps sit in small mono keycaps, here and in the app, nowhere else. */
export function Keycap({ n, active }: { n: number; active?: boolean }) {
  return (
    <span
      className={cn(
        "inline-flex size-5 shrink-0 items-center justify-center rounded-sm font-mono text-xs tabular-nums transition-colors duration-300",
        active ? "bg-foreground text-background" : "bg-muted text-foreground",
      )}
    >
      {n}
    </span>
  )
}

const nav = [
  { href: "/manifesto", label: "Manifesto" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="flex items-center gap-2 text-[17px] font-medium tracking-tight">
          <Mark className="size-6" />
          AidSnap
        </Link>
        <nav className="flex items-center gap-1">
          {nav.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="hidden h-9 items-center rounded-full px-3 text-sm text-muted-foreground transition-colors hover:text-foreground sm:inline-flex"
            >
              {l.label}
            </Link>
          ))}
          <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={cn(button.primary, "ml-2 h-9 px-4 text-sm")}>
            Get the app
          </a>
        </nav>
      </div>
    </header>
  )
}

const columns = [
  {
    title: "Product",
    links: [
      { href: "/#features", label: "Features" },
      { href: PLAY_URL, label: "Android" },
      { href: "/coming-soon", label: "iOS" },
    ],
  },
  {
    title: "Company",
    links: [
      { href: "/manifesto", label: "Manifesto" },
      { href: "/about", label: "About" },
      { href: "/careers", label: "Careers" },
      { href: "/press", label: "Press" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/support", label: "Support" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: CONTACT, label: "Contact" },
    ],
  },
]

const social = [
  { href: "https://instagram.com/aidsnap", label: "Instagram" },
  { href: "https://linkedin.com/company/aidsnap", label: "LinkedIn" },
  { href: "https://tiktok.com/@aidsnap", label: "TikTok" },
]

/** Viewfinder corners from the mark, drawn around any block. */
function Corners() {
  const c = "absolute size-[6vw] max-w-16 max-h-16 border-white/25"
  return (
    <>
      <span className={cn(c, "left-0 top-0 rounded-tl-2xl border-l-2 border-t-2")} />
      <span className={cn(c, "right-0 top-0 rounded-tr-2xl border-r-2 border-t-2")} />
      <span className={cn(c, "bottom-0 left-0 rounded-bl-2xl border-b-2 border-l-2")} />
      <span className={cn(c, "bottom-0 right-0 rounded-br-2xl border-b-2 border-r-2")} />
    </>
  )
}

export function SiteFooter() {
  return (
    <footer className="overflow-hidden border-t border-white/10 bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 pb-16 pt-20 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="max-w-sm space-y-6">
          <p className="text-2xl font-medium leading-snug tracking-tight">
            Made for the minutes
            <br />
            <span className="text-white/50">before help arrives.</span>
          </p>
          <p className="flex items-start gap-2 text-sm text-white/60">
            <span className="mt-1.5 size-2 shrink-0 rounded-full bg-signal" />
            First aid guidance, not a diagnosis. In an emergency, call your local emergency number first.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
          {columns.map((c) => (
            <div key={c.title} className="space-y-3">
              <p className="text-sm text-white/50">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm transition-colors hover:text-white/60">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t border-white/10 px-4 py-6 text-sm text-white/50 sm:px-6">
        <p>© {new Date().getFullYear()} AidSnap Inc.</p>
        <ul className="flex gap-4">
          {social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-white">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
      </div>
      <div className="mt-8 flex justify-center px-4" aria-hidden>
        <div className="relative translate-y-[22%] px-[3vw] pt-[2.5vw]">
          <Corners />
          <p className="select-none text-[19vw] font-medium leading-[0.8] tracking-[-0.06em] text-white/[0.08] xl:text-[260px]">
            AidSnap
          </p>
        </div>
      </div>
    </footer>
  )
}

/** Shell for every inner page: header, a titled column, footer. */
export function Page({ title, lead, children, wide }: { title: string; lead?: string; children?: React.ReactNode; wide?: boolean }) {
  return (
    <>
      <SiteHeader />
      <main className={cn("mx-auto px-4 pb-24 pt-20 sm:px-6 md:pt-28", wide ? "max-w-6xl" : "max-w-3xl")}>
        <h1 className="rise text-4xl font-medium tracking-tight md:text-5xl">{title}</h1>
        {lead ? (
          <p className="rise mt-4 max-w-2xl text-lg text-muted-foreground" style={{ "--i": 1 } as React.CSSProperties}>
            {lead}
          </p>
        ) : null}
        <div className="mt-16">{children}</div>
      </main>
      <SiteFooter />
    </>
  )
}
