import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Clock } from "lucide-react"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-gradient-medical text-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-48 pb-32 md:pt-64 md:pb-48">
        {/* Hero Section */}
        <div className="text-center my-32 md:my-48">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Clock className="w-12 h-12 text-[#F87171]" />
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900">Coming Soon</h1>
          </div>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            We're working hard to bring you something amazing. Stay tuned for updates!
          </p>
        </div>
      </main>

      <Footer />
    </div>
  )
}
