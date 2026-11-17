import type { Metadata } from "next"
import { LegalPage } from "@/components/legal"
import { terms } from "@/lib/legal/terms"

export const metadata: Metadata = {
  title: "Terms of Service",
  description: "The agreement that governs your use of AidSnap, including its limits as first aid guidance and how disputes are resolved.",
  alternates: { canonical: "/terms" },
}

export default function Terms() {
  return <LegalPage doc={terms} />
}
