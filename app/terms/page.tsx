import { meta } from "@/lib/seo"
import { LegalPage } from "@/components/legal"
import { terms } from "@/lib/legal/terms"

export const metadata = meta({
  title: "Terms of Service",
  description:
    "The agreement that governs your use of AidSnap, including its limits as first aid guidance and how disputes are resolved.",
  path: "/terms",
})

export default function Terms() {
  return <LegalPage doc={terms} />
}
