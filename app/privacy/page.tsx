import { meta } from "@/lib/seo"
import { LegalPage } from "@/components/legal"
import { privacy } from "@/lib/legal/privacy"

export const metadata = meta({
  title: "Privacy Policy",
  description:
    "How AidSnap collects, uses, shares, stores and deletes personal information, including health information, and the privacy rights you have.",
  path: "/privacy",
})

export default function Privacy() {
  return <LegalPage doc={privacy} />
}
