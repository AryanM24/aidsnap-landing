import { meta } from "@/lib/seo"
import { ArrowUpRight } from "lucide-react"
import { Page } from "@/components/site"

export const metadata = meta({
  title: "Press",
  description:
    "News coverage of AidSnap, the AI first aid app created by Edison High School students.",
  path: "/press",
  markdown: false,
})

const article = {
  year: "2025",
  publication: "TapInto Edison",
  headline: "Edison High School Students Create First Aid App Using AI Model",
  href: "https://www.tapinto.net/towns/edison/sections/business-and-finance/articles/edison-high-school-students-create-first-aid-app-using-ai-model",
}

export default function Press() {
  return (
    <Page section="Company" title="Press" lead="What the media has written about AidSnap.">
      <a
        href={article.href}
        target="_blank"
        rel="noopener noreferrer"
        className="group flex flex-col justify-between gap-10 rounded-2xl border bg-card p-6 transition-colors hover:bg-muted/40 md:p-8"
      >
        <div className="space-y-3">
          <p className="text-sm text-muted-foreground">
            {article.publication} <span className="px-1">·</span> <span className="font-mono tabular-nums">{article.year}</span>
          </p>
          <p className="text-2xl font-medium leading-snug tracking-tight md:text-3xl">{article.headline}</p>
        </div>
        <span className="flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
          Read the article
          <ArrowUpRight className="size-4" strokeWidth={1.5} />
        </span>
      </a>
    </Page>
  )
}
