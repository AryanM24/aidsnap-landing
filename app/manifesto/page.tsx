import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"

export default function ManifestoPage() {
  return (
    <div className="min-h-screen bg-gradient-medical text-gray-900">
      <Navbar />

      <main className="max-w-3xl mx-auto px-4 pt-60 pb-60 md:pt-80 md:pb-80">
        {/* Main Content */}
        <div className="space-y-12">
          {/* Hero Statement */}
          <div className="space-y-8 text-center">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 leading-tight">
              We want to save
              <br />
              <span className="text-[#F87171]">every life.</span>
            </h1>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-gray-600 leading-relaxed">
            <p className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.2s_forwards]">
              Emergencies don't wait. Seconds matter. Yet in those critical moments, most people freeze — not because
              they don't care, but because they don't know what to do. That gap between injury and action{" "}
              <span className="text-gray-900 font-medium">costs lives</span>.
            </p>

            <p className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.4s_forwards]">
              AidSnap exists to close that gap. We bring advanced AI into the hands of everyday people, giving{" "}
              <span className="text-gray-900 font-medium">instant, accurate first aid guidance</span> the moment it's
              needed. No manuals. No guesswork. Just clear, reliable help when every second counts.
            </p>

            <p className="opacity-0 animate-[fadeInUp_0.8s_ease-out_0.6s_forwards]">
              AidSnap is not another health app. It is{" "}
              <span className="text-gray-900 font-medium">
                the standard for how people respond to emergencies in the 21st century
              </span>
              .
            </p>

            <div className="pt-8 opacity-0 animate-[fadeInUp_0.8s_ease-out_0.8s_forwards]">
              <div className="relative">
                <div className="absolute -left-4 top-0 w-1 h-full bg-gradient-to-b from-[#F87171] to-transparent rounded-full"></div>
                <p className="text-xl md:text-2xl text-gray-900 font-semibold leading-relaxed pl-8">
                  We are driven by one belief: no one should ever feel powerless when it matters most.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
