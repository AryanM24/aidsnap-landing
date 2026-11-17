import { Suspense } from "react"
import { LegalPage } from "@/components/legal"

export const metadata = { title: "Privacy policy", description: "How AidSnap collects, uses and protects your information.", alternates: { canonical: "/privacy" } }

export default function Privacy() {
  return (
    <Suspense>
      <LegalPage />
    </Suspense>
  )
}
