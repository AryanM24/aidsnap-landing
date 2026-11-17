import type { MetadataRoute } from "next"

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "AidSnap: AI first aid, step by step",
    short_name: "AidSnap",
    description: "Describe an emergency by text, photo or voice and get clear step-by-step first aid, with the emergency number one tap away.",
    start_url: "/",
    display: "standalone",
    background_color: "#09090b",
    theme_color: "#09090b",
    categories: ["health", "medical", "lifestyle"],
    icons: [
      { src: "/android-chrome-192x192.png", sizes: "192x192", type: "image/png" },
      { src: "/android-chrome-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    related_applications: [{ platform: "play", url: "https://play.google.com/store/apps/details?id=com.aidsnap.app", id: "com.aidsnap.app" }],
  }
}
