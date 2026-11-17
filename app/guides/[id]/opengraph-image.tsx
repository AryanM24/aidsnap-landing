import { ImageResponse } from "next/og"
import { GUIDES, URGENCY_LABEL, getGuide } from "@/lib/guides"

export const alt = "AidSnap first aid guide"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

export function generateStaticParams() {
  return GUIDES.map((g) => ({ id: g.id }))
}

// Each guide's share card: the mark, the guide's title and summary, its urgency.
export default async function GuideImage({ params }: { params: Promise<{ id: string }> }) {
  const g = getGuide((await params).id)
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#09090b", color: "#fafafa", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between", fontSize: 32 }}>
          <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="2" strokeLinecap="round">
              <path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2" />
              <path d="M12 8v8M8 12h8" strokeWidth="3" />
            </svg>
            AidSnap first aid guide
          </div>
          {g ? <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>{URGENCY_LABEL[g.urgency]}</div> : null}
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <div style={{ display: "flex", fontSize: 96, letterSpacing: -3, lineHeight: 1 }}>{g?.title ?? "First aid guides"}</div>
          <div style={{ display: "flex", fontSize: 34, color: "#a1a1aa", lineHeight: 1.3, maxWidth: 960 }}>{g?.summary ?? ""}</div>
        </div>
        <div style={{ display: "flex", fontSize: 26, color: "#a1a1aa" }}>aidsnap.com/guides/{g?.id ?? ""}</div>
      </div>
    ),
    size,
  )
}
