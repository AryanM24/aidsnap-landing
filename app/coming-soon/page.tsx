import { meta } from "@/lib/seo"
import { Page, PLAY_URL, button } from "@/components/site"

export const metadata = meta({
  title: "AidSnap for iPhone",
  description:
    "AidSnap, the AI first aid assistant, is available on Android today. The iPhone app is coming soon.",
  path: "/coming-soon",
  markdown: false,
})

export default function ComingSoon() {
  return (
    <Page section="Download" title="AidSnap for iPhone is on its way" lead="AidSnap is on Android today. The iPhone app is coming soon.">
      <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
        Get it on Android
      </a>
    </Page>
  )
}
