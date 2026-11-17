import type { Metadata } from "next"
import { LegalPage } from "@/components/legal"
import { privacy } from "@/lib/legal/privacy"

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "How AidSnap collects, uses, discloses, stores and deletes personal information, including health information, and the rights you have.",
  alternates: { canonical: "/privacy" },
}

export default function Privacy() {
  return <LegalPage doc={privacy} />
}
