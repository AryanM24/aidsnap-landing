import type React from "react"
import type { Metadata, Viewport } from "next"
import { GeistSans } from "geist/font/sans"
import { GeistMono } from "geist/font/mono"
import { SITE_URL } from "@/components/site"
import "./globals.css"

const description =
  "AidSnap is an AI first aid assistant. Describe an emergency by text, photo or voice and get clear step-by-step first aid, with the emergency number one tap away."

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: { default: "AidSnap: AI first aid, step by step", template: "%s · AidSnap" },
  description,
  applicationName: "AidSnap",
  category: "health",
  keywords: ["first aid app", "AI first aid assistant", "CPR steps", "how to stop bleeding", "choking first aid", "emergency first aid guide", "medical ID app", "AidSnap"],
  // Let search engines show large image previews and full snippets, which the guides need to be quoted well.
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } },
  openGraph: { type: "website", siteName: "AidSnap", title: "AidSnap: AI first aid, step by step", description, url: "/", locale: "en_US" },
  twitter: { card: "summary_large_image", title: "AidSnap: AI first aid, step by step", description },
  icons: { icon: "/favicon.ico", apple: "/apple-touch-icon.png" },
  other: { "google-play-app": "app-id=com.aidsnap.app" },
}

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#09090b" },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${GeistSans.variable} ${GeistMono.variable}`}>
      <body>{children}</body>
    </html>
  )
}
