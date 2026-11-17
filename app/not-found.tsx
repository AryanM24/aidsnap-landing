import Link from "next/link"
import { Page, button } from "@/components/site"

export default function NotFound() {
  return (
    <Page title="This page doesn't exist" lead="The link may be old, or the address mistyped.">
      <div className="flex flex-wrap gap-3">
        <Link href="/" className={button.primary}>
          Go home
        </Link>
        <Link href="/guides" className={button.secondary}>
          First aid guides
        </Link>
      </div>
    </Page>
  )
}
