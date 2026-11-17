import Link from "next/link"
import { Frame, PageTitle , Shell } from "@/components/site"
import { cn } from "@/lib/utils"

/** A paragraph, or a list of short items when a policy has to enumerate. */
export type Block = string | { list: string[] }
export type Section = { id: string; heading: string; body: Block[] }
export type LegalDoc = { slug: string; title: string; effective: string; intro: string[]; sections: Section[] }

const docs = [
  { href: "/privacy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms of Service" },
  { href: "/consumer-health-data", label: "Consumer Health Data" },
]

function Paragraphs({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((b, i) =>
        typeof b === "string" ? (
          <p key={i}>{b}</p>
        ) : (
          <ul key={i} className="list-disc space-y-2 pl-5 marker:text-muted-foreground">
            {b.list.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        ),
      )}
    </>
  )
}

/** A legal document: a contents rail on the left and numbered sections of plain paragraphs. */
export function LegalPage({ doc }: { doc: LegalDoc }) {
  return (
    <Shell>
        <PageTitle section="Legal" title={doc.title} lead={`Effective ${doc.effective}`}>
          <nav aria-label="Legal documents" className="mt-8 flex flex-wrap gap-2">
            {docs.map((d) => (
              <Link
                key={d.href}
                href={d.href}
                aria-current={d.href === `/${doc.slug}` ? "page" : undefined}
                className={cn(
                  "inline-flex h-9 items-center rounded-full px-4 text-sm transition-colors",
                  d.href === `/${doc.slug}` ? "bg-foreground text-background" : "bg-background text-muted-foreground hover:text-foreground",
                )}
              >
                {d.label}
              </Link>
            ))}
          </nav>
        </PageTitle>
        <Frame grow>
          <div className="grid h-full lg:grid-cols-[260px_1fr]">
            <aside className="border-b p-6 lg:border-b-0 lg:border-r lg:p-8">
              <div className="lg:sticky lg:top-24">
                <p className="mb-3 text-sm text-muted-foreground">Contents</p>
                <ol className="space-y-1.5 text-sm">
                  {doc.sections.map((s, i) => (
                    <li key={s.id} className="flex gap-2">
                      <span className="w-5 shrink-0 font-mono text-xs tabular-nums leading-5 text-muted-foreground">{i + 1}</span>
                      <a href={`#${s.id}`} className="text-muted-foreground transition-colors hover:text-foreground">
                        {s.heading}
                      </a>
                    </li>
                  ))}
                </ol>
              </div>
            </aside>
            <article className="px-6 py-10 lg:px-12 lg:py-14">
              <div className="max-w-[68ch] space-y-5 text-[15.5px] leading-7 text-foreground/85">
                <Paragraphs blocks={doc.intro} />
              </div>
              {doc.sections.map((s, i) => (
                <section key={s.id} id={s.id} className="mt-12 max-w-[68ch] scroll-mt-24">
                  <h2 className="mb-4 flex gap-3 text-xl font-medium tracking-tight">
                    <span className="font-mono text-base tabular-nums leading-7 text-muted-foreground">{i + 1}.</span>
                    {s.heading}
                  </h2>
                  <div className="space-y-4 text-[15.5px] leading-7 text-foreground/85">
                    <Paragraphs blocks={s.body} />
                  </div>
                </section>
              ))}
            </article>
          </div>
        </Frame>
    </Shell>
  )
}
