import { meta } from "@/lib/seo"
import { CONTACT, Keycap, Page } from "@/components/site"

export const metadata = meta({
  title: "Delete your account",
  description:
    "How to delete your AidSnap account and everything stored with it, in the app or by email, and exactly what gets deleted.",
  path: "/delete-account",
})

const steps = ["Open AidSnap and tap the menu.", "Go to Settings, then Account.", "Tap Delete account and enter your password to confirm."]

// What runDeleteAccount (lib/delete-account.ts) and DELETE /aidsnap/me remove.
const removed = [
  "Your chats, including Live transcripts",
  "Everything AidSnap remembers about you",
  "Connections to wearables, and their access tokens",
  "Your Medical ID, emergency contacts and insurance cards, including card photos",
  "Your account and sign-in",
]

export default function DeleteAccount() {
  return (
    <Page section="Help" title="Delete your account" lead="You can delete your AidSnap account and everything stored with it at any time. It cannot be undone.">
      <div className="space-y-14">
        <section>
          <h2 className="mb-5 text-xl font-medium tracking-tight">In the app</h2>
          <ol className="space-y-4">
            {steps.map((s, i) => (
              <li key={s} className="flex gap-3">
                <span className="mt-0.5">
                  <Keycap n={i + 1} />
                </span>
                {s}
              </li>
            ))}
          </ol>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-medium tracking-tight">What is deleted</h2>
          <ul className="list-disc space-y-2 pl-5 text-muted-foreground">
            {removed.map((s) => (
              <li key={s}>{s}</li>
            ))}
          </ul>
        </section>
        <section>
          <h2 className="mb-4 text-xl font-medium tracking-tight">Can&apos;t open the app?</h2>
          <p className="text-muted-foreground">
            Email{" "}
            <a href={`${CONTACT}?subject=${encodeURIComponent("Delete my AidSnap account")}`} className="text-foreground underline underline-offset-4">
              aryan.mittal@aidsnap.com
            </a>{" "}
            from the address you signed up with, and we will delete your account and its data.
          </p>
        </section>
      </div>
    </Page>
  )
}
