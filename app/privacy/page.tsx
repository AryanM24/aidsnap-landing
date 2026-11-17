import { Suspense } from "react"
import { LegalPage } from "@/components/legal"

export const metadata = { title: "Privacy policy · AidSnap" }

export default function Privacy() {
  return (
    <Suspense>
      <LegalPage />
    </Suspense>
  )
}
