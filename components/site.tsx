import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"

export const SITE_URL = "https://www.aidsnap.com"
export const PLAY_URL = "https://play.google.com/store/apps/details?id=com.aidsnap.app"
export const CONTACT = "mailto:aryan.mittal@aidsnap.com"

const base =
  "inline-flex h-11 items-center justify-center gap-2 rounded-full px-5 text-[15px] font-medium transition-[background-color,transform] duration-150 active:scale-[0.96]"
export const button = {
  primary: cn(base, "bg-primary text-primary-foreground hover:bg-primary/90"),
  secondary: cn(base, "bg-muted text-foreground hover:bg-foreground/10"),
}

/** Structured data for search and answer engines. `<` is escaped so no string can close the script tag. */
export function JsonLd({ data }: { data: object }) {
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data).replace(/</g, "\\u003c") }} />
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

/** Small squares where the rails meet a section line, echoing the viewfinder in the mark. */
function Marks({ dark }: { dark?: boolean }) {
  const m = cn("absolute -bottom-[4.5px] z-10 size-2 border", dark ? "border-white/20 bg-ink" : "bg-background")
  return (
    <>
      <span className={cn(m, "-left-[4.5px]")} aria-hidden />
      <span className={cn(m, "-right-[4.5px]")} aria-hidden />
    </>
  )
}

/**
 * The page frame: two rails down the content edges, a full-width line under every section,
 * and a square where they cross. Everything sits inside it.
 */
export function Frame({ children, className, id, dark }: { children: React.ReactNode; className?: string; id?: string; dark?: boolean }) {
  return (
    <section id={id} className={cn("scroll-mt-16 border-b", dark && "border-white/10")}>
      <div className={cn("relative mx-auto max-w-6xl border-x", dark && "border-white/10", className)}>
        <Marks dark={dark} />
        {children}
      </div>
    </section>
  )
}

const nav = [
  { href: "/guides", label: "Guides" },
  { href: "/manifesto", label: "Manifesto" },
  { href: "/about", label: "About" },
  { href: "/support", label: "Support" },
]

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b bg-background">
      <div className="relative mx-auto flex h-16 max-w-6xl items-center justify-between border-x px-4 sm:px-6">
        <Marks />
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
      { href: "/guides", label: "First aid guides" },
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
      { href: "/delete-account", label: "Delete account" },
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
    <footer className="overflow-hidden bg-ink text-white">
      <Frame dark className="grid gap-12 px-4 pb-16 pt-20 sm:px-6 md:grid-cols-[1fr_auto]">
        <div className="max-w-sm space-y-6">
          <Link href="/" className="flex w-fit items-center gap-2 text-[17px] font-medium tracking-tight">
            <Mark className="size-6" />
            AidSnap
          </Link>
          <p className="text-2xl font-medium leading-snug tracking-tight">
            Made for the minutes
            <br />
            <span className="text-white/50">before help arrives.</span>
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
      </Frame>
      <Frame dark className="flex flex-wrap items-center justify-between gap-4 px-4 py-6 text-sm text-white/50 sm:px-6">
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
      </Frame>
      <div className="relative mx-auto flex max-w-6xl justify-center border-x border-white/10 px-4 pt-12" aria-hidden>
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
      <main>
        <Frame className="px-4 py-20 sm:px-8 md:py-28">
          <div className={cn(!wide && "max-w-3xl")}>
            <h1 className="rise text-4xl font-medium tracking-tight md:text-5xl">{title}</h1>
            {lead ? (
              <p className="rise mt-4 max-w-2xl text-lg text-muted-foreground" style={{ "--i": 1 } as React.CSSProperties}>
                {lead}
              </p>
            ) : null}
          </div>
        </Frame>
        <Frame className="px-4 py-16 sm:px-8 md:py-20">
          <div className={cn(!wide && "max-w-3xl")}>{children}</div>
        </Frame>
      </main>
      <SiteFooter />
    </>
  )
}
