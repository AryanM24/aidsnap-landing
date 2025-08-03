"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MessageCircle, Mail, Phone, Book, Video, Users, ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

export default function SupportPage() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(null)

  const toggleFAQ = (index: number) => {
    setOpenFAQ(openFAQ === index ? null : index)
  }

  const faqs = [
    {
      question: "How accurate is AidSnap's AI diagnosis?",
      answer:
        "AidSnap's AI has been trained on thousands of medical cases and protocols, achieving 95% accuracy in emergency situation assessment. However, it should always be used as a supplement to, not a replacement for, professional medical care.",
    },
    {
      question: "Does AidSnap work without internet connection?",
      answer:
        "Yes! AidSnap's core first aid protocols and basic AI assessment work offline. However, features like emergency calling and location sharing require an internet connection.",
    },
    {
      question: "Is my medical information kept private?",
      answer:
        "Absolutely. All medical data is processed locally on your device and encrypted. We never store personal medical information on our servers without your explicit consent.",
    },
    {
      question: "Can AidSnap replace professional medical training?",
      answer:
        "No, AidSnap is designed to assist in emergency situations, not replace proper first aid training. We strongly recommend taking certified first aid and CPR courses alongside using our app.",
    },
    {
      question: "What languages does AidSnap support?",
      answer:
        "Currently, AidSnap supports English, Spanish, French, German, and Mandarin. We're continuously adding more languages to serve our global community.",
    },
  ]

  return (
    <div className="min-h-screen bg-[#222222] text-white">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-40 pb-12 md:pt-48 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-6">We're Here to Help</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Get the support you need to use AidSnap effectively. From basic tutorials to emergency protocols, we've got
            you covered.
          </p>
        </div>

        {/* Resources Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Learning Resources</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-[#121212]/50 backdrop-blur-custom border border-white/10 rounded-3xl p-8 text-center hover:border-[#F87171]/30 transition-all duration-300 hover:scale-105">
              <Book className="w-12 h-12 text-[#F87171] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">User Guide</h3>
              <p className="text-gray-300 mb-6">Complete documentation on using all AidSnap features</p>
              <button className="text-[#F87171] hover:text-[#F87171]/80 transition-colors">Read Guide →</button>
            </div>

            <div className="bg-[#121212]/50 backdrop-blur-custom border border-white/10 rounded-3xl p-8 text-center hover:border-[#F87171]/30 transition-all duration-300 hover:scale-105">
              <Video className="w-12 h-12 text-[#F87171] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Video Tutorials</h3>
              <p className="text-gray-300 mb-6">Step-by-step video guides for emergency procedures</p>
              <button className="text-[#F87171] hover:text-[#F87171]/80 transition-colors">Watch Videos →</button>
            </div>

            <div className="bg-[#121212]/50 backdrop-blur-custom border border-white/10 rounded-3xl p-8 text-center hover:border-[#F87171]/30 transition-all duration-300 hover:scale-105">
              <Users className="w-12 h-12 text-[#F87171] mx-auto mb-6" />
              <h3 className="text-xl font-semibold text-white mb-4">Community</h3>
              <p className="text-gray-300 mb-6">Connect with other users and share experiences</p>
              <button className="text-[#F87171] hover:text-[#F87171]/80 transition-colors">Join Community →</button>
            </div>
          </div>
        </section>


        {/* FAQ Section */}
        <section className="mb-16">
          <h2 className="text-3xl font-bold text-white text-center mb-12">Frequently Asked Questions</h2>
          <div className="space-y-4 max-w-4xl mx-auto">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-[#121212]/50 backdrop-blur-custom border border-white/10 rounded-3xl overflow-hidden"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-8 text-left flex items-center justify-between hover:bg-white/5 transition-colors"
                >
                  <h3 className="text-xl font-semibold text-white pr-4">{faq.question}</h3>
                  {openFAQ === index ? (
                    <ChevronUp className="w-6 h-6 text-[#F87171] flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-6 h-6 text-[#F87171] flex-shrink-0" />
                  )}
                </button>
                {openFAQ === index && (
                  <div className="px-8 pb-8">
                    <p className="text-gray-300 leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        

        
      </main>

      <Footer />
    </div>
  )
}
