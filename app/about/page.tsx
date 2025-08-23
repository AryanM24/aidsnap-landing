import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Heart, Globe, Shield } from "lucide-react"
import Image from "next/image"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-medical text-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-40 pb-12 md:pt-48 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            About <span className="text-[#F87171]">AidSnap</span>
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're on a mission to democratize emergency medical care through AI technology, making life-saving knowledge
            accessible to everyone, everywhere.
          </p>
        </div>

        {/* Mission Section */}
        <section className="mb-16">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                Every year, thousands of lives are lost due to lack of immediate medical knowledge during emergencies.
                AidSnap was created to bridge this gap by putting professional-grade first aid guidance in everyone's
                pocket.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our AI-powered assistant provides instant, accurate medical guidance when seconds count, empowering
                ordinary people to become life-savers in critical moments.
              </p>
            </div>
            <div className="float-animation">
              <Image
                src="/placeholder.svg?height=400&width=500&text=Mission+Illustration"
                alt="Our Mission"
                width={500}
                height={400}
                className="rounded-3xl border border-gray-200 shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: <Heart className="w-8 h-8 text-[#F87171]" />,
                title: "Life First",
                description: "Every decision we make is guided by our commitment to saving and protecting human life.",
              },
              {
                icon: <Shield className="w-8 h-8 text-[#F87171]" />,
                title: "Trust & Safety",
                description:
                  "We maintain the highest standards of medical accuracy and data security in everything we do.",
              },
              {
                icon: <Globe className="w-8 h-8 text-[#F87171]" />,
                title: "Global Access",
                description:
                  "Emergency care knowledge should be available to everyone, regardless of location or background.",
              },
            ].map((value, index) => (
              <div
                key={index}
                className="text-center bg-white/60 backdrop-blur-sm border border-white/40 rounded-3xl p-8 hover:border-[#F87171]/30 hover:bg-white/80 transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <div className="w-16 h-16 bg-[#F87171]/10 border border-[#F87171]/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  {value.icon}
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
