import { Page, PLAY_URL, button } from "@/components/site"

export const metadata = { title: "iOS · AidSnap" }

export default function ComingSoon() {
  return (
    <Page title="AidSnap for iPhone is on its way" lead="AidSnap is on Android today. The iPhone app is coming soon.">
      <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
        Get it on Android
      </a>
    </Page>
  )
}
