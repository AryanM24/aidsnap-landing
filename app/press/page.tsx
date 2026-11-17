import { ArrowUpRight } from "lucide-react"
import { Page } from "@/components/site"

export const metadata = { title: "Press · AidSnap" }

const articles = [
  {
    year: "2025",
    publication: "TapInto Edison",
    headline: "Edison High School Students Create First Aid App Using AI Model",
    href: "https://www.tapinto.net/towns/edison/sections/business-and-finance/articles/edison-high-school-students-create-first-aid-app-using-ai-model",
  },
]

export default function Press() {
  return (
    <Page title="Press" lead="What the media has written about AidSnap.">
      <p className="mb-4 font-mono text-sm tabular-nums text-muted-foreground">2025</p>
      <ul className="divide-y border-y">
        {articles.map((a) => (
          <li key={a.href}>
            <a href={a.href} target="_blank" rel="noopener noreferrer" className="group flex items-start justify-between gap-6 py-6">
              <span className="space-y-1">
                <span className="block text-sm text-muted-foreground">{a.publication}</span>
                <span className="block text-lg">{a.headline}</span>
              </span>
              <ArrowUpRight className="mt-1 size-[18px] shrink-0 text-muted-foreground transition-colors group-hover:text-foreground" strokeWidth={1.5} />
            </a>
          </li>
        ))}
      </ul>
    </Page>
  )
}
