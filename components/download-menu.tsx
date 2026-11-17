"use client"

import { useEffect, useRef, useState } from "react"
import { Apple, ChevronDown, Play } from "lucide-react"
import { cn } from "@/lib/utils"

const PLAY_URL = "https://play.google.com/store/apps/details?id=com.aidsnap.app"

/** The header's Download button: opens a small menu with Google Play, and the App Store greyed out until iOS ships. */
export function DownloadMenu() {
  const [open, setOpen] = useState(false)
  const root = useRef<HTMLDivElement>(null)

  useEffect(() => {
    if (!open) return
    const close = (e: MouseEvent) => !root.current?.contains(e.target as Node) && setOpen(false)
    const esc = (e: KeyboardEvent) => e.key === "Escape" && setOpen(false)
    document.addEventListener("mousedown", close)
    document.addEventListener("keydown", esc)
    return () => {
      document.removeEventListener("mousedown", close)
      document.removeEventListener("keydown", esc)
    }
  }, [open])

  return (
    <div ref={root} className="relative ml-2">
      <button
        type="button"
        aria-haspopup="menu"
        aria-expanded={open}
        onClick={() => setOpen((o) => !o)}
        className="inline-flex h-9 items-center gap-1.5 rounded-full bg-primary pl-4 pr-3 text-sm font-medium text-primary-foreground transition-[background-color,transform] duration-150 hover:bg-primary/90 active:scale-[0.96]"
      >
        Download
        <ChevronDown className={cn("size-4 transition-transform duration-200", open && "rotate-180")} strokeWidth={1.5} />
      </button>
      <div
        role="menu"
        className={cn(
          "absolute right-0 top-full mt-2 w-56 origin-top-right rounded-xl border bg-background p-1.5 shadow-[0_12px_32px_-12px_rgb(0_0_0/0.25)] transition-[opacity,transform] duration-150",
          open ? "scale-100 opacity-100" : "pointer-events-none scale-95 opacity-0",
        )}
      >
        <a
          role="menuitem"
          href={PLAY_URL}
          target="_blank"
          rel="noopener noreferrer"
          tabIndex={open ? 0 : -1}
          onClick={() => setOpen(false)}
          className="flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm transition-colors hover:bg-muted"
        >
          <Play className="size-4" strokeWidth={1.5} />
          Google Play
        </a>
        <div role="menuitem" aria-disabled="true" className="flex cursor-not-allowed items-center gap-3 rounded-lg px-3 py-2.5 text-sm text-muted-foreground/60">
          <Apple className="size-4" strokeWidth={1.5} />
          App Store
          <span className="ml-auto text-xs">Coming soon</span>
        </div>
      </div>
    </div>
  )
}
