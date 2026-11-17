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
      { href: "/#how", label: "How it works" },
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

export function SiteFooter() {
  return (
    <footer className="border-t">
      <div className="mx-auto grid max-w-6xl gap-12 px-4 py-16 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="max-w-xs space-y-4">
          <Link href="/" className="flex items-center gap-2 text-[17px] font-medium tracking-tight">
            <Mark className="size-6" />
            AidSnap
          </Link>
          <p className="text-sm text-muted-foreground">
            First aid guidance, not a diagnosis. In an emergency, call your local emergency number.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-16">
          {columns.map((c) => (
            <div key={c.title} className="space-y-3">
              <p className="text-sm text-muted-foreground">{c.title}</p>
              <ul className="space-y-2">
                {c.links.map((l) => (
                  <li key={l.label}>
                    <Link href={l.href} className="text-sm transition-colors hover:text-muted-foreground">
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-between gap-4 border-t px-4 py-6 text-sm text-muted-foreground sm:px-6">
        <p>© {new Date().getFullYear()} AidSnap Inc.</p>
        <ul className="flex gap-4">
          {social.map((s) => (
            <li key={s.label}>
              <a href={s.href} target="_blank" rel="noopener noreferrer" className="transition-colors hover:text-foreground">
                {s.label}
              </a>
            </li>
          ))}
        </ul>
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
