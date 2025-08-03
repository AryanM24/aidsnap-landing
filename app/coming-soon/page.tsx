import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Clock, Bell, ArrowRight } from "lucide-react"
import Image from "next/image"

export default function ComingSoonPage() {
  return (
    <div className="min-h-screen bg-[#222222] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-40 pb-12 md:pt-48 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <div className="flex items-center justify-center space-x-4 mb-8">
            <Clock className="w-12 h-12 text-[#F87171]" />
            <h1 className="text-4xl md:text-5xl font-bold text-white">Coming Soon</h1>
          </div>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            We're working hard to bring you something amazing. Stay tuned for updates!
          </p>
        </div>

        
      </main>

      <Footer />
    </div>
  )
}
