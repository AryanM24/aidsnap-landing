"use client"

import Image from "next/image"
import { Star, Zap, Shield, Phone, AlertTriangle, Clock, Camera, Mic, MapPin, Heart } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { useEffect, useState } from "react"

export default function HomePage() {
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

  const steps = [
    {
      icon: <Camera className="w-6 h-6" />,
      step: "Step-01",
      title: "Point & Analyze",
      description:
        "Simply point your camera at the injury or describe symptoms. Our AI instantly analyzes the situation and provides immediate assessment.",
      mockupText: "AI Analysis",
      mockupSubtext: "Analyzing injury...",
    },
    {
      icon: <Mic className="w-6 h-6" />,
      step: "Step-02",
      title: "Follow Voice Guidance",
      description:
        "Receive clear, step-by-step voice instructions for immediate care. Our AI guides you through each action with calm, professional direction.",
      mockupText: "Voice Guidance",
      mockupSubtext: "Apply pressure to wound...",
    },
    {
      icon: <Phone className="w-6 h-6" />,
      step: "Step-03",
      title: "Connect Emergency Services",
      description:
        "When needed, instantly connect with emergency services. Your location and situation details are automatically shared with responders.",
      mockupText: "Emergency Services",
      mockupSubtext: "Connecting to 911...",
    },
  ]

  return (
    <div className="min-h-screen bg-[#222222] text-white overflow-hidden">
      <Navbar />

      {/* Hero Section */}
      <main className="max-w-7xl mx-auto px-4 pt-48 pb-32 md:pt-56 md:pb-40">
        <div
          className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
        >
          {/* Main Heading */}
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white leading-tight">
              AI that saves lives
              <br />
              <span className="text-[#F87171]">in emergencies</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 max-w-4xl mx-auto leading-relaxed">
              Get instant, life-saving first aid guidance powered by AI. AidSnap provides step-by-step emergency
              instructions when every second counts.
            </p>
          </div>

          {/* App Preview */}
          <div className="mt-20 relative">
            <div className="relative mx-auto max-w-5xl">
              {/* Main 3D Mockup */}
                <div className="relative float-animation">
                <video
                  src="/iphone-tabs-zoom-in.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mx-auto  w-full max-w-[900px]"
                />

                </div>
            </div>
          </div>
        </div>

        {/* Features Showcase */}
        <section id="features-section" className="mt-32 md:mt-40 scroll-reveal">
          <div className="text-center mb-20">
            <p className="text-[#F87171] text-sm font-medium mb-4 uppercase tracking-wider">Features</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Life-saving AI in your pocket</h2>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Advanced AI trained on medical protocols to provide instant, accurate first aid guidance when you need it
              most.
            </p>
          </div>

          {/* 2x3 Feature Grid */}
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12 mb-20 max-w-6xl mx-auto">
            {[
              {
                icon: <Zap className="w-8 h-8 text-white" />,
                title: "Instant Diagnosis",
                description:
                  "Describe symptoms or take a photo. Get immediate AI-powered assessment and step-by-step first aid instructions.",
              },
              {
                icon: <Phone className="w-8 h-8 text-white" />,
                title: "Emergency Contacts",
                description:
                  "One-tap access to emergency services. Automatically shares your location and situation details with responders.",
              },
              {
                icon: <Shield className="w-8 h-8 text-white" />,
                title: "Medical Grade AI",
                description:
                  "Trained on certified medical protocols and continuously updated with the latest first aid guidelines.",
              },
              {
                icon: <Camera className="w-8 h-8 text-white" />,
                title: "Visual Recognition",
                description:
                  "Point your camera at injuries or symptoms for instant AI-powered analysis and treatment recommendations.",
              },
              {
                icon: <Mic className="w-8 h-8 text-white" />,
                title: "Voice Guidance",
                description:
                  "Hands-free voice instructions guide you through critical first aid procedures step-by-step.",
              },
              {
                icon: <MapPin className="w-8 h-8 text-white" />,
                title: "Location Services",
                description:
                  "Automatic location detection helps emergency services find you faster in critical situations.",
              },
            ].map((feature, index) => (
              <div
                key={index}
                className="text-center space-y-6 p-8 bg-[#121212]/30 backdrop-blur-custom border border-white/5 rounded-3xl hover:border-[#F87171]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F87171]/10 scroll-reveal"
              >
                <div className="mx-auto w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center">
                  {feature.icon}
                </div>
                <h3 className="text-xl font-semibold text-white">{feature.title}</h3>
                <p className="text-gray-300 leading-relaxed text-sm">{feature.description}</p>
              </div>
            ))}
          </div>
        </section>

        {/* How It Works Section */}
        <section className="mt-32 md:mt-40 scroll-reveal">
          <div className="text-center mb-20">
            <p className="text-[#F87171] text-sm font-medium mb-4 uppercase tracking-wider">How it works</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Emergency Response Process</h2>
          </div>

          <div className="max-w-6xl mx-auto space-y-24">
            {/* Step 1 */}
            <div className="step-section grid md:grid-cols-2 gap-16 items-center" data-step={0}>
              <div className="space-y-6">
                <div className="flex items-start space-x-4">
                  <div
                    className={`w-12 h-12 rounded-lg flex items-center justify-center flex-shrink-0 transition-all duration-500 ${
                      activeStep === 0 ? "bg-[#F87171]" : "bg-gray-600"
                    }`}
                  >
                    <Camera className={`w-6 h-6 ${activeStep === 0 ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <p className="text-[#F87171] text-sm font-medium mb-2 uppercase tracking-wider">Step-01</p>
                    <h3 className="text-3xl font-bold text-white mb-4">Point & Analyze</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Simply point your camera at the injury or describe symptoms. Our AI instantly analyzes the
                      situation and provides immediate assessment.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Camera className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">AI Analysis</h4>
                  <p className="text-gray-600 mb-4">Analyzing injury...</p>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm text-gray-600">Analyzing...</span>
                      <span className="text-sm text-[#F87171]">85%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2">
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
                      activeStep === 1 ? "bg-[#F87171]" : "bg-gray-600"
                    }`}
                  >
                    <Mic className={`w-6 h-6 ${activeStep === 1 ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <p className="text-[#F87171] text-sm font-medium mb-2 uppercase tracking-wider">Step-02</p>
                    <h3 className="text-3xl font-bold text-white mb-4">Follow Voice Guidance</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      Receive clear, step-by-step voice instructions for immediate care. Our AI guides you through each
                      action with calm, professional direction.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Mic className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Voice Guidance</h4>
                  <p className="text-gray-600 mb-4">Step 2 of 5 complete</p>
                  <div className="bg-gray-100 rounded-lg p-4">
                    <div className="flex justify-between text-sm text-gray-500 mb-2">
                      <span>Progress</span>
                      <span>40%</span>
                    </div>
                    <div className="w-full bg-gray-200 rounded-full h-2 mb-3">
                      <div className="bg-[#F87171] h-2 rounded-full w-2/5"></div>
                    </div>
                    <p className="text-sm text-gray-700 text-left">
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
                      activeStep === 2 ? "bg-[#F87171]" : "bg-gray-600"
                    }`}
                  >
                    <Phone className={`w-6 h-6 ${activeStep === 2 ? "text-white" : "text-gray-400"}`} />
                  </div>
                  <div>
                    <p className="text-[#F87171] text-sm font-medium mb-2 uppercase tracking-wider">Step-03</p>
                    <h3 className="text-3xl font-bold text-white mb-4">Connect Emergency Services</h3>
                    <p className="text-gray-300 leading-relaxed text-lg">
                      When needed, instantly connect with emergency services. Your location and situation details are
                      automatically shared with responders.
                    </p>
                  </div>
                </div>
              </div>

              <div className="rounded-3xl p-8 h-80 flex items-center justify-center">
                <div className="bg-white rounded-2xl p-8 w-full max-w-sm text-center shadow-lg">
                  <div className="w-16 h-16 bg-[#F87171] rounded-full flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-8 h-8 text-white" />
                  </div>
                  <h4 className="text-xl font-semibold text-gray-800 mb-2">Emergency Services</h4>
                  <p className="text-gray-600 mb-4">Connected to 911</p>
                  <div className="bg-gray-100 rounded-lg p-4">
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
            {/* Disclaimer */}
            <div className="w-full flex justify-center">
              <p className="text-xs text-gray-400 text-center mt-2 max-w-md">
                Aidsnap Agent is currently in its beta-testing phase and will not be available for the near future.
              </p>
            </div>
          </div>
        </section>

        {/* Emergency Protocols Showcase */}
        <section id="emergency-section" className="mt-32 md:mt-40 scroll-reveal">
          <div className="text-center mb-20">
            <p className="text-[#F87171] text-sm font-medium mb-4 uppercase tracking-wider">Emergency</p>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Access life-saving protocols
              <br />
              when seconds count
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-start">
            {/* Left Column - Emergency Features */}
            <div className="lg:col-span-1 space-y-8">
              {/* Cardiac Emergency */}
              <div className="bg-[#121212]/30 backdrop-blur-custom border border-white/5 rounded-3xl p-8 hover:border-[#F87171]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F87171]/10 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#F87171] rounded-full flex items-center justify-center">
                    <Heart className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Cardiac Emergency</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  Get instant CPR instructions, AED guidance, and immediate response protocols for cardiac emergencies.
                </p>
              </div>

              {/* Voice Guidance */}
              <div className="bg-[#121212]/30 backdrop-blur-custom border border-white/5 rounded-3xl p-8 hover:border-[#F87171]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F87171]/10 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                    <div className="w-12 h-12 bg-[#F87171] rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                    </div>
                  <h3 className="text-xl font-semibold text-white">Scan Environment</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  With AidSnap Scan, you can scan your environment to find resources that can help you in an emergency.
                </p>
              </div>

              {/* Emergency Services */}
              <div className="bg-[#121212]/30 backdrop-blur-custom border border-white/5 rounded-3xl p-8 hover:border-[#F87171]/30 transition-all duration-500 hover:scale-105 hover:shadow-2xl hover:shadow-[#F87171]/10 cursor-pointer">
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#F87171] rounded-full flex items-center justify-center">
                    <Phone className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-white">Emergency Services</h3>
                </div>
                <p className="text-gray-300 leading-relaxed text-sm">
                  One-tap connection to 911 with automatic location sharing and situation details for faster response.
                </p>
              </div>
            </div>

            {/* Right Column - Large Mockup */}
            <div className="lg:col-span-2">
              <div className="rounded-3xl overflow-hidden">
                <video
                  src="/iphone-zoom-straight-out.mp4"
                  autoPlay
                  loop
                  muted
                  playsInline
                  className="mx-auto max-h-[800px]"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Download Section */}
        <section id="download-section" className="mt-32 md:mt-40 scroll-reveal">
          <div className="bg-gray-100 rounded-3xl py-24 md:py-32 px-8 max-w-6xl mx-auto text-center">
            <p className="text-gray-500 text-sm font-medium mb-6 uppercase tracking-wider">WELCOME TO</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-12 leading-tight">
              The Future of Emergency
              <br />
              Response.
            </h2>

            <div className="space-y-4">
              <button className="bg-black text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-colors inline-flex items-center space-x-3">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z" />
                </svg>
                <span>Download for iOS</span>
              </button>

              <div>
                <button className="text-gray-600 hover:text-gray-800 transition-colors underline text-lg">
                  Download for Android
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
