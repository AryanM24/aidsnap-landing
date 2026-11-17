import { CONTACT, Page, button } from "@/components/site"

export const metadata = { title: "Careers", description: "Join the team building AidSnap, first aid help for the minutes before responders arrive.", alternates: { canonical: "/careers" } }

const roles = [
  { title: "Founding engineers", team: "Engineering", where: "NYC hybrid", type: "Full time", pay: "", about: "Build the core AidSnap platform with React Native, Firebase and AI integration.", skills: "React Native, Firebase, Google Cloud, AI integration, healthcare security" },
  { title: "Backend and AI engineer", team: "Engineering", where: "Remote", type: "Full time", pay: "", about: "Build and run the AI services behind AidSnap's guidance on Google Cloud.", skills: "Python or Node.js, model training, GCP APIs, MLOps" },
  { title: "Product and project manager", team: "Product", where: "NYC hybrid", type: "Full time", pay: "", about: "Drive the roadmap and sprints, and bridge engineering, design and marketing.", skills: "Roadmap planning, sprint management, healthcare tech, cross-functional leadership" },
  { title: "Marketing interns", team: "Marketing", where: "Remote", type: "Internship", pay: "$10–15/hr", about: "Run our social presence and create content. Learn growth and SEO in healthcare tech.", skills: "Social media, Canva or Adobe Express, SEO" },
  { title: "UGC content creators", team: "Marketing", where: "Remote", type: "Contract", pay: "", about: "Create short-form video for TikTok, Instagram Reels and YouTube Shorts. Health or first aid credibility preferred.", skills: "Short-form video, video editing, health knowledge" },
  { title: "Design interns (UI/UX)", team: "Design", where: "Remote", type: "Internship", pay: "$10–15/hr", about: "Design mobile interfaces for people under stress, from prototype to motion.", skills: "Figma, prototyping, mobile design, motion" },
  { title: "Engineering interns", team: "Engineering", where: "Remote", type: "Internship", pay: "$18–25/hr", about: "Ship React Native features and Firebase integrations. Built for students who want real experience.", skills: "React Native, Firebase, mobile development" },
  { title: "Anything else", team: "", where: "Remote", type: "Full or part time", pay: "", about: "Don't see your role? Tell us what you'd bring.", skills: "" },
]

export default function Careers() {
  return (
    <Page
      wide
      title="Careers"
      lead="Join a small team building first aid help for the minutes before responders arrive."
    >
      <ul className="divide-y border-y">
        {roles.map((r) => (
          <li key={r.title} className="grid gap-4 py-8 md:grid-cols-[1fr_auto] md:items-start md:gap-12">
            <div className="space-y-2">
              <h2 className="text-xl font-medium">{r.title}</h2>
              <p className="text-sm text-muted-foreground">
                {[r.team, r.where, r.type].filter(Boolean).join(" · ")}
                {r.pay ? <span className="font-mono tabular-nums"> · {r.pay}</span> : null}
              </p>
              <p className="max-w-2xl text-muted-foreground">{r.about}</p>
              {r.skills ? <p className="text-sm text-muted-foreground">{r.skills}</p> : null}
            </div>
            <a href={`${CONTACT}?subject=${encodeURIComponent(`Application: ${r.title}`)}`} className={button.secondary}>
              Apply
            </a>
          </li>
        ))}
      </ul>
    </Page>
  )
}
