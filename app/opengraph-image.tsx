import { ImageResponse } from "next/og"

export const alt = "AidSnap: AI first aid, step by step"
export const size = { width: 1200, height: 630 }
export const contentType = "image/png"

// The site's social card: ink background, the viewfinder mark, the two-tone headline.
export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div style={{ width: "100%", height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between", padding: 80, background: "#09090b", color: "#fafafa", fontFamily: "sans-serif" }}>
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 36 }}>
          <svg width="44" height="44" viewBox="0 0 24 24" fill="none" stroke="#fafafa" strokeWidth="2" strokeLinecap="round">
            <path d="M3 8V6a3 3 0 0 1 3-3h2M16 3h2a3 3 0 0 1 3 3v2M21 16v2a3 3 0 0 1-3 3h-2M8 21H6a3 3 0 0 1-3-3v-2" />
            <path d="M12 8v8M8 12h8" strokeWidth="3" />
          </svg>
          AidSnap
        </div>
        <div style={{ display: "flex", flexDirection: "column", fontSize: 84, lineHeight: 1.05, letterSpacing: -2 }}>
          <span>AI that saves lives</span>
          <span style={{ color: "#a1a1aa" }}>in emergencies</span>
        </div>
        <div style={{ display: "flex", fontSize: 28, color: "#a1a1aa" }}>Step-by-step first aid by text, photo or voice</div>
      </div>
    ),
    size,
  )
}
