/** Signature: numbered steps sit in small mono keycaps. Its own file so client components can use it without pulling in the site chrome. */
export function Keycap({ n, active }: { n: number; active?: boolean }) {
  return (
    <span
      className={`inline-flex size-5 shrink-0 items-center justify-center rounded-sm font-mono text-xs tabular-nums transition-colors duration-300 ${
        active ? "bg-foreground text-background" : "bg-muted text-foreground"
      }`}
    >
      {n}
    </span>
  )
}
