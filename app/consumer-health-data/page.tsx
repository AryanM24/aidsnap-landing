import type { Metadata } from "next"
import { LegalPage } from "@/components/legal"
import { health } from "@/lib/legal/health"

export const metadata: Metadata = {
  title: "Consumer Health Data Privacy Policy",
  description:
    "How AidSnap collects, uses, shares and deletes consumer health data, and your rights under the Washington My Health My Data Act and similar state laws.",
  alternates: { canonical: "/consumer-health-data" },
}

export default function ConsumerHealthData() {
  return <LegalPage doc={health} />
}
