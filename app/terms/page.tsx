import { Suspense } from "react"
import { LegalPage } from "@/components/legal"

export const metadata = { title: "Terms of service", description: "The terms that govern your use of AidSnap.", alternates: { canonical: "/terms" } }

export default function Terms() {
  return (
    <Suspense>
      <LegalPage initialTab="terms" />
    </Suspense>
  )
}
