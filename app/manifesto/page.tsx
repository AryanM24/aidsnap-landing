import { Page } from "@/components/site"

export const metadata = { title: "Manifesto", description: "Why AidSnap exists: no one should ever feel powerless when it matters most.", alternates: { canonical: "/manifesto" } }

export default function Manifesto() {
  return (
    <Page section="Company" title="We want to save every life.">
      <div className="space-y-8 text-lg leading-relaxed text-muted-foreground">
        <p>
          Emergencies don&apos;t wait. Seconds matter. Yet in those critical moments, most people freeze, not because
          they don&apos;t care, but because they don&apos;t know what to do. That gap between injury and action{" "}
          <span className="text-foreground">costs lives</span>.
        </p>
        <p>
          AidSnap exists to close that gap. We bring advanced AI into the hands of everyday people, giving{" "}
          <span className="text-foreground">instant, clear first aid guidance</span> the moment it&apos;s needed. No
          manuals. No guesswork. Just clear, reliable help when every second counts.
        </p>
        <p>
          AidSnap is not another health app. We want it to become{" "}
          <span className="text-foreground">how people respond to emergencies in the 21st century</span>.
        </p>
        <p className="border-l-2 border-foreground pl-6 text-2xl font-medium leading-snug tracking-tight text-foreground">
          We are driven by one belief: no one should ever feel powerless when it matters most.
        </p>
      </div>
    </Page>
  )
}
