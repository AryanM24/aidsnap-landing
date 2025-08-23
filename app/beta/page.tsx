"use client"
import { Camera, Mic, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function BetaPage() {
  const [isVisible, setIsVisible] = useState(false)
  const [activeStep, setActiveStep] = useState(0)

  useEffect(() => {
    setIsVisible(true)

    // Scroll reveal functionality
    const observerOptions = {
      threshold: 0.1,
      rootMargin: "0px 0px -50px 0px",
    }

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("revealed")
        }
      })
    }, observerOptions)

    // Step tracking observer
    const stepObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            const stepIndex = Number.parseInt(entry.target.getAttribute("data-step") || "0")
            setActiveStep(stepIndex)
          }
        })
      },
      {
        threshold: 0.5,
        rootMargin: "-20% 0px -20% 0px",
      },
    )

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    // Observe step elements
    const stepElements = document.querySelectorAll(".step-section")
    stepElements.forEach((el) => stepObserver.observe(el))

    return () => {
      observer.disconnect()
      stepObserver.disconnect()
    }
  }, [])

  return (
    <div className="min-h-screen bg-gradient-medical text-gray-900 overflow-hidden">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-40 pb-12 md:pt-48 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <div className="inline-flex items-center px-4 py-2 bg-[#F87171]/10 border border-[#F87171]/20 rounded-full mb-6">
            <span className="text-[#F87171] text-sm font-medium">BETA</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">AidSnap Agent</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Experience the next generation of AI-powered emergency response. Our intelligent agent guides you through
            critical situations with unprecedented accuracy and speed.
          </p>
        </div>

        {/* How It Works Section */}
        <section className="scroll-reveal">
          <div className="max-w-6xl mx-auto space-y-24">
            {/* Step 1 */}
            <div className="step-section grid md:grid-cols-2 gap-16 items-center" data-step={0}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeStep === 0 ? "bg-[#F87171]" : "bg-gray-300"
                    }`}
                  >
                    <Camera className={`w-6 h-6 ${activeStep === 0 ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <p className="text-[#F87171] text-sm font-medium mb-2 uppercase tracking-wider">Step-01</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Point & Analyze</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Simply point your camera at the injury or describe symptoms. Our AI instantly analyzes the
                      situation and provides immediate assessment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 w-full max-w-sm text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">AI Analysis</h4>
                  <p className="text-gray-600 mb-4">Analyzing injury...</p>
                  <div className="bg-gray-100/80 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Analyzing...</span>
                      <span className="text-sm text-[#F87171]">85%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2">
                      <div className="bg-[#F87171] h-2 rounded-full w-4/5 transition-all duration-1000"></div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 2 */}
            <div className="step-section grid md:grid-cols-2 gap-16 items-center" data-step={1}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeStep === 1 ? "bg-[#F87171]" : "bg-gray-300"
                    }`}
                  >
                    <Mic className={`w-6 h-6 ${activeStep === 1 ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <p className="text-[#F87171] text-sm font-medium mb-2 uppercase tracking-wider">Step-02</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Follow Voice Guidance</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      Receive clear, step-by-step voice instructions for immediate care. Our AI guides you through each
                      action with calm, professional direction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 w-full max-w-sm text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Voice Guidance</h4>
                  <p className="text-gray-600 mb-4">Step 2 of 5 complete</p>
                  <div className="bg-gray-100/80 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-gray-600 mb-2">
                      <span>Progress</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-gray-300 rounded-full h-2 mb-3">
                      <div className="bg-[#F87171] h-2 rounded-full w-2/5"></div>
                    </div>
                    <p className="text-sm text-gray-600 text-left">
                      "Apply direct pressure to the wound using a clean cloth..."
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Step 3 */}
            <div className="step-section grid md:grid-cols-2 gap-16 items-center" data-step={2}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeStep === 2 ? "bg-[#F87171]" : "bg-gray-300"
                    }`}
                  >
                    <Phone className={`w-6 h-6 ${activeStep === 2 ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <p className="text-[#F87171] text-sm font-medium mb-2 uppercase tracking-wider">Step-03</p>
                    <h3 className="text-3xl font-bold text-gray-900 mb-4">Connect Emergency Services</h3>
                    <p className="text-gray-600 leading-relaxed text-lg">
                      When needed, instantly connect with emergency services. Your location and situation details are
                      automatically shared with responders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white/70 backdrop-blur-sm border border-white/40 rounded-2xl p-8 w-full max-w-sm text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-900 mb-2">Emergency Services</h4>
                  <p className="text-gray-600 mb-4">Connected to 911</p>
                  <div className="bg-gray-100/80 rounded-lg p-4">
                    <div className="flex items-center justify-center space-x-2 mb-3">
                      <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                      <span className="text-sm text-gray-600">Connected</span>
                    </div>
                    <div className="text-left space-y-2">
                      <p className="text-sm text-gray-600">📍 Location shared</p>
                      <p className="text-sm text-gray-600">🚑 ETA: 7 minutes</p>
                      <p className="text-sm text-gray-600">📋 Medical info sent</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
