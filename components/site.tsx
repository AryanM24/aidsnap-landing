import type React from "react"
import Link from "next/link"
import { cn } from "@/lib/utils"
import { DownloadMenu } from "@/components/download-menu"

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

export { Keycap } from "@/components/keycap"

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
export function Frame({
  children,
  className,
  id,
  dark,
  band,
  grow,
}: {
  children: React.ReactNode
  className?: string
  id?: string
  dark?: boolean
  /** A tinted full-width band, for page title areas. */
  band?: boolean
  /** Stretch to fill the rest of the screen, rails and all, so the footer sits at the bottom. */
  grow?: boolean
}) {
  return (
    <section id={id} className={cn("scroll-mt-16 border-b", dark && "border-white/10", band && "bg-muted/50", grow && "flex flex-1 flex-col")}>
      <div className={cn("relative mx-auto w-full max-w-6xl border-x", dark && "border-white/10", grow && "flex-1", className)}>
        <Marks dark={dark} />
        {children}
      </div>
    </section>
  )
}

const nav = [
  { href: "/#features", label: "Features" },
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
          <DownloadMenu />
        </nav>
      </div>
    </header>
  )
}

const columns = [
  {
    title: "First aid",
    links: [
      { href: "/guides/cpr", label: "CPR" },
      { href: "/guides/choking", label: "Choking" },
      { href: "/guides/severe-bleeding", label: "Severe bleeding" },
      { href: "/guides/heart-attack", label: "Heart attack" },
      { href: "/guides/stroke", label: "Stroke" },
      { href: "/guides/burns", label: "Burns" },
      { href: "/guides", label: "All 16 guides" },
    ],
  },
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
      { href: "/press", label: "Press" },
    ],
  },
  {
    title: "Help",
    links: [
      { href: "/support", label: "Support" },
      { href: "/privacy", label: "Privacy" },
      { href: "/terms", label: "Terms" },
      { href: "/consumer-health-data", label: "Consumer health data" },
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
        <div className="grid grid-cols-2 gap-8 sm:grid-cols-4 sm:gap-12">
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

const compactLinks = [
  { href: "/guides", label: "Guides" },
  { href: "/support", label: "Support" },
  { href: "/press", label: "Press" },
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
  { href: "/consumer-health-data", label: "Consumer health data" },
  { href: "/delete-account", label: "Delete account" },
  { href: CONTACT, label: "Contact" },
]

/** The one-row footer for inner pages; the big stylized footer is for the home page. */
export function CompactFooter() {
  return (
    <footer>
      <Frame className="flex flex-col gap-6 px-4 py-8 sm:px-8 md:flex-row md:items-center md:justify-between">
        <Link href="/" className="flex w-fit items-center gap-2 text-[15px] font-medium tracking-tight">
          <Mark className="size-5" />
          AidSnap
        </Link>
        <ul className="flex flex-wrap gap-x-5 gap-y-2 text-sm text-muted-foreground">
          {compactLinks.map((l) => (
            <li key={l.label}>
              <Link href={l.href} className="transition-colors hover:text-foreground">
                {l.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="text-sm text-muted-foreground">© {new Date().getFullYear()} AidSnap Inc.</p>
      </Frame>
    </footer>
  )
}

/** The title band at the top of every inner page: a small section name, the title, the lead. */
export function PageTitle({ section, title, lead, children }: { section?: string; title: string; lead?: string; children?: React.ReactNode }) {
  return (
    <Frame band className="px-4 pb-14 pt-16 sm:px-8 md:pb-20 md:pt-24">
      <div className="max-w-3xl">
        {section ? <p className="rise mb-5 text-sm text-muted-foreground">{section}</p> : null}
        <h1 className="rise text-4xl font-medium tracking-tight md:text-6xl" style={{ "--i": 1 } as React.CSSProperties}>
          {title}
        </h1>
        {lead ? (
          <p className="rise mt-5 max-w-2xl text-lg text-muted-foreground md:text-xl" style={{ "--i": 2 } as React.CSSProperties}>
            {lead}
          </p>
        ) : null}
        {children}
      </div>
    </Frame>
  )
}

/** Inner pages fill at least the screen: the last Frame (with `grow`) takes the space, the footer sits at the bottom. */
export function Shell({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-svh flex-col">
      <SiteHeader />
      <main className="flex flex-1 flex-col">{children}</main>
      <CompactFooter />
    </div>
  )
}

/** Shell for every inner page: header, the title band, the content, the compact footer. */
export function Page({
  section,
  title,
  lead,
  children,
  wide,
}: {
  section?: string
  title: string
  lead?: string
  children?: React.ReactNode
  wide?: boolean
}) {
  return (
    <Shell>
      <PageTitle section={section} title={title} lead={lead} />
      <Frame grow className="px-4 py-16 sm:px-8 md:py-20">
        <div className={cn(!wide && "max-w-3xl")}>{children}</div>
      </Frame>
    </Shell>
  )
}
