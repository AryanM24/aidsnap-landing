import { Suspense } from "react"
import { LegalPage } from "@/components/legal"

export const metadata = { title: "Terms of service · AidSnap" }

export default function Terms() {
  return (
    <Suspense>
      <LegalPage initialTab="terms" />
    </Suspense>
  )
}
