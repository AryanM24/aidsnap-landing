import { GUIDES, getGuide } from "@/lib/guides"
import { guideMd, md } from "@/lib/markdown"

export const dynamic = "force-static"
export const dynamicParams = false
export const generateStaticParams = () => GUIDES.map((g) => ({ id: g.id }))

export async function GET(_: Request, { params }: { params: Promise<{ id: string }> }) {
  return md(guideMd(getGuide((await params).id)!))
}
