export const CONNECTORS = [
  // Apple's HIG: show the Health icon exactly as supplied, with no mask, border or backing.
  { name: "Apple Health", icon: "/connectors/apple-health.png", bare: true },
  { name: "Health Connect", icon: "/connectors/health-connect.png", inset: true },
  { name: "WHOOP", icon: "/connectors/whoop.png" },
  { name: "Oura", icon: "/connectors/oura.png" },
  { name: "Withings", icon: "/connectors/withings.png" },
  { name: "Dexcom", icon: "/connectors/dexcom.png" },
]

/** A connector's app icon at a given size class. Brand icons sit on white in both themes. */
export function ConnectorIcon({ c, className = "size-16" }: { c: (typeof CONNECTORS)[number]; className?: string }) {
  if (c.bare) {
    // eslint-disable-next-line @next/next/no-img-element
    return <img src={c.icon} alt="" width={64} height={64} loading="lazy" decoding="async" className={className} />
  }
  return (
    <span className={`flex shrink-0 items-center justify-center overflow-hidden rounded-[22.5%] bg-white outline outline-1 -outline-offset-1 outline-black/10 ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img src={c.icon} alt="" width={64} height={64} loading="lazy" decoding="async" className={c.inset ? "size-[68%]" : "size-full"} />
    </span>
  )
}
