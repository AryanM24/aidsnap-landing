import { Page, PLAY_URL, button } from "@/components/site"

export const metadata = { title: "AidSnap for iPhone", description: "AidSnap is on Android today. The iPhone app is coming soon.", alternates: { canonical: "/coming-soon" } }

export default function ComingSoon() {
  return (
    <Page section="Download" title="AidSnap for iPhone is on its way" lead="AidSnap is on Android today. The iPhone app is coming soon.">
      <a href={PLAY_URL} target="_blank" rel="noopener noreferrer" className={button.primary}>
        Get it on Android
      </a>
    </Page>
  )
}
