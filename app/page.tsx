"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, Camera, Mic, Phone } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LiquidGlass } from "@/components/liquid-glass"
import { useEffect, useState, useRef } from "react"
import { InjuryAnalysis } from "@/components/injury-analysis"
import { EnvironmentAnalysis } from "@/components/environment-analysis"
import { TypewriterGuidance } from "@/components/typewriter-guidance"
import { AIGuidanceChat } from "@/components/ai-guidance-chat"
import { OfflineIndicator } from "@/components/offline-indicator"
import { CalmInterface } from "@/components/calm-interface"
import { HeroSectionVideo } from "@/components/hero-section-video" // Import the new component

// GSAP imports are no longer needed here as they are handled in the child component

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [hasTyped, setHasTyped] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [activeStep, setActiveStep] = useState(0)
  const typingRef = useRef<HTMLElement>(null)
  
  // This ref will be for the entire hero section, which will be pinned.
  // It's passed to the HeroSectionVideo component to use as its trigger.
  const heroSectionRef = useRef<HTMLElement>(null)

  useEffect(() => {
    setIsVisible(true)

    // Scroll reveal functionality for other elements on the page
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

    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    // Typing animation observer
    const typingObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !isTyping && !hasTyped) {
            setIsTyping(true)
            const fullText = "It's like your mom.\nExcept it won't kiss your boo-boos."
            let currentIndex = 0

            const typeText = () => {
              if (currentIndex < fullText.length) {
                setTypedText(fullText.slice(0, currentIndex + 1))
                currentIndex++
                setTimeout(typeText, 50)
              } else {
                setHasTyped(true)
                setIsTyping(false)
                typingObserver.disconnect()
              }
            }
            typeText()
          }
        })
      },
      {
        threshold: 0.3,
        rootMargin: "0px 0px -20% 0px",
      },
    )

    if (typingRef.current) {
      typingObserver.observe(typingRef.current)
    }
    
    // Cleanup for observers
    return () => {
      observer.disconnect()
      typingObserver.disconnect()
    }
  }, [hasTyped, isTyping]) // Dependencies for the typing effect

  // Separate useEffect for step tracking after component mounts
  useEffect(() => {
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

    // Observe step elements
    const stepElements = document.querySelectorAll(".step-section")
    stepElements.forEach((el) => stepObserver.observe(el))

    return () => {
      stepObserver.disconnect()
    }
  }, []) // Run once after component mounts

  return (
    <div className="bg-gradient-medical text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section - The ref is attached here */}
      <section ref={heroSectionRef} className="hero-section relative bg-[#F3F7FB]">
        <main className="max-w-7xl mx-auto px-4 pt-40 pb-40 md:pt-56 md:pb-32">
          <div
            className={`text-center space-y-8 transition-all duration-1000 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"}`}
          >
            {/* Main Heading */}
            <div className="space-y-6">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-normal text-gray-900 leading-tight">
                AI that saves lives
                <br />
                <span className="text-[#F87171]">in emergencies</span>
              </h1>
              <p className="text-lg md:text-xl text-gray-600 max-w-4xl mx-auto leading-relaxed">
                Get instant, life-saving first aid guidance powered by AI. AidSnap provides step-by-step emergency
                instructions when every second counts.
              </p>
            </div>

            {/* The new video component is placed here, receiving the section ref */}
            <HeroSectionVideo triggerRef={heroSectionRef} />
          </div>
        </main>
      </section>

      {/* Main Content Container */}
      <div>
      
      {/* AI Capabilities Showcase */}
      <section id="features-section" className="py-20 md:py-32 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-[#F87171] text-sm font-medium mb-4 uppercase tracking-wider">
              The Turning Point of Emergency Care
            </p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Instant AI-powered emergency
              <br />
              response when seconds count.
            </h2>
          </div>

          <div className="max-w-6xl mx-auto bg-white/30 backdrop-blur-sm border border-white/20 p-8 md:p-12">
            {/* 2x2 Grid */}
            <div className="grid md:grid-cols-2 gap-0">
              {/* Top Left - Analyze visual injuries with QuickSnap */}
              <div className="space-y-6 p-8 border-r border-b border-gray-200">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <InjuryAnalysis />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-6 bg-[#F87171] rounded-full flex-shrink-0 mt-1"></div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Analyze visual injuries with QuickSnap
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        AidSnap's QuickSnap feature instantly analyzes wounds, burns, cuts, and symptoms through your
                        camera — providing immediate assessment and treatment guidance for any visible injury.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Top Right - Analyze your environment for first aid resources */}
              <div className="space-y-6 p-8 border-b border-gray-200">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <EnvironmentAnalysis />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-6 bg-[#F87171] rounded-full flex-shrink-0 mt-1"></div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">
                        Analyze your environment for resources
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        Upload an image of your surroundings and AidSnap identifies available first aid resources —
                        towels, ice, medications, or improvised tools for emergency care.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Left - Provides instant guidance */}
              <div className="space-y-6 p-8 border-r border-gray-200">
                <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                  <TypewriterGuidance />
                </div>
                <div className="space-y-3">
                  <div className="flex items-start space-x-3">
                    <div className="w-1 h-6 bg-[#F87171] rounded-full flex-shrink-0 mt-1"></div>
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">Provides instant guidance</h3>
                      <p className="text-gray-600 leading-relaxed">
                        Just describe the emergency. AidSnap knows what you're dealing with and responds with exactly
                        the right medical steps — no searching, no delays.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Bottom Right - AI Guidance Chat */}
              <div className="space-y-6 p-8">
                <div className="aspect-[4/3] rounded-2xl ">
                  <AIGuidanceChat />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* AidSnap Agent Section */}
      <section className="py-20 md:py-32 scroll-reveal hidden md:block">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">How it Works</h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              Experience the next generation of AI-powered emergency response. Our intelligent agent guides you through
              critical situations with unprecedented accuracy and speed.
            </p>
          </div>

          <div className="max-w-6xl mx-auto space-y-8">
            {/* Step 1 */}
            <div className="step-section bg-white/30 backdrop-blur-sm border border-white/20 p-8 md:p-12" data-step={0}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
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
            </div>

            {/* Step 2 */}
            <div className="step-section bg-white/30 backdrop-blur-sm border border-white/20 p-8 md:p-12" data-step={1}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
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
            </div>

            {/* Step 3 */}
            <div className="step-section bg-white/30 backdrop-blur-sm border border-white/20 p-8 md:p-12" data-step={2}>
              <div className="grid md:grid-cols-2 gap-16 items-center">
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
          </div>
        </div>
      </section>

      {/* Quote Section - Separate */}
      <section className="py-20 md:py-32 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center">
            <h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-8">"This could change everything."</h3>
            <Link
              href="/manifesto"
              className="bg-gray-900 text-white px-8 py-3 rounded-full text-lg font-medium hover:bg-gray-800 transition-all duration-300 hover:scale-105 inline-flex items-center space-x-2"
            >
              <span>We agree.</span>
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </Link>
          </div>
        </div>
      </section>

      {/* It's like your mom Section - Hidden on mobile */}
      <section className="scroll-reveal hidden md:block">
        <div className="bg-[#181B20] py-20 md:py-32 w-full">
          <div className="max-w-7xl mx-auto px-4">
            <div className="max-w-6xl mx-auto">
              {/* Header */}
              <div className="text-left mb-16">
                <h2 ref={typingRef} className="text-4xl md:text-5xl font-bold text-white mb-2 whitespace-pre-wrap">
                  {typedText}
                  {!hasTyped && <span className="animate-pulse">|</span>}
                </h2>
                <p className="text-gray-400 text-lg max-w-2xl mt-6">
                  AidSnap is always prepared with life-saving resources available offline, ready for any emergency
                  situation when you need it most.
                </p>
              </div>

              {/* 2x3 Grid without lines */}
              <div className="p-8 md:p-12">
                <div className="grid md:grid-cols-2 gap-0">
                  {/* Row 1 - Left: Text, Right: Image */}
                  <div className="space-y-6 p-8 border-r border-b border-gray-700/40">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-2">Works without internet</h3>
                      <p className="text-gray-400 leading-relaxed">
                        After AidSnap loads, our AI model works fully offline to provide emergency guidance when connectivity is limited. Core first aid protocols and medical assessments run directly on your device. No internet connection required when every second counts.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 p-8 border-b border-gray-700/40">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <OfflineIndicator />
                    </div>
                  </div>

                  {/* Row 2 - Left: Image, Right: Text */}
                  <div className="space-y-6 p-8 border-r border-b border-gray-700/40">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <video
                        src="/offline_protocols_demo.MP4"
                        width={400}
                        height={300}
                        className="w-full h-full object-cover pointer-events-none"
                        autoPlay
                        muted
                        playsInline
                        loop
                        poster="https://placehold.co/400x300/181b20/ffffff?text=Offline+Protocols"
                      >
                        Your browser does not support the video tag.
                      </video>
                    </div>
                  </div>

                  <div className="space-y-6 p-8 border-b border-gray-700/40">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-2">Always prepared</h3>
                      <p className="text-gray-400 leading-relaxed">
                        AidSnap is pre-loaded with comprehensive first aid guides and medical articles containing easy-to-understand, step-by-step instructions. These resources are downloaded and stored locally on your device for instant offline access during emergencies. No waiting, no buffering—just immediate, life-saving guidance when you need it most.
                      </p>
                    </div>
                  </div>

                  {/* Row 3 - Left: Text, Right: Image */}
                  <div className="space-y-6 p-8 border-r border-gray-700/40">
                    <div className="text-left">
                      <h3 className="text-xl font-semibold text-white mb-2">No panic, just action</h3>
                      <p className="text-gray-400 leading-relaxed">
                        AidSnap uses your phone's location services to instantly find the nearest emergency providers and medical facilities. You can call them directly from the app with one tap—no memorization needed, no searching for numbers required.
                      </p>
                    </div>
                  </div>

                  <div className="space-y-6 p-8">
                    <div className="aspect-[4/3] rounded-2xl overflow-hidden">
                      <CalmInterface />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Emergency Protocols Showcase */}
      <section id="emergency-section" className="py-20 md:py-32 scroll-reveal bg-[#F6F8FB]">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-20">
            <p className="text-[#F87171] text-sm font-medium mb-4 uppercase tracking-wider">Emergency Protocols</p>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Access life-saving protocols
              <br />
              when seconds count
            </h2>
          </div>

          <div className="max-w-6xl mx-auto grid lg:grid-cols-3 gap-16 items-stretch">
            {/* Left Column - Emergency Features - Hidden on mobile */}
            <div className="hidden lg:flex lg:col-span-1 flex-col justify-between space-y-8">
              {/* Visual Recognition */}
              <LiquidGlass
                className="rounded-3xl p-8 cursor-pointer scroll-reveal liquid-glass-card flex-1"
                intensity={1.3}
                viscosity={0.5}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#F87171] rounded-full flex items-center justify-center">
                    <Camera className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Visual Recognition</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Point your camera at injuries or symptoms for instant AI-powered analysis and treatment
                  recommendations.
                </p>
              </LiquidGlass>

              {/* Voice Guidance */}
              <LiquidGlass
                className="rounded-3xl p-8 cursor-pointer scroll-reveal liquid-glass-card flex-1"
                intensity={1.3}
                viscosity={0.5}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#F87171] rounded-full flex items-center justify-center">
                    <Mic className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Voice Guidance</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Hands-free voice instructions guide you through critical first aid procedures step-by-step.
                </p>
              </LiquidGlass>

              {/* Medical Grade AI */}
              <LiquidGlass
                className="rounded-3xl p-8 cursor-pointer scroll-reveal liquid-glass-card flex-1"
                intensity={1.3}
                viscosity={0.5}
              >
                <div className="flex items-center space-x-4 mb-4">
                  <div className="w-12 h-12 bg-[#F87171] rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-xl font-semibold text-gray-900">Medical Grade AI</h3>
                </div>
                <p className="text-gray-600 leading-relaxed text-sm">
                  Trained on certified medical protocols and continuously updated with the latest first aid guidelines.
                </p>
              </LiquidGlass>
            </div>

            {/* Right Column - Large Mockup (Autoplay Video) - Full width on mobile */}
            <div className="lg:col-span-2 col-span-full scroll-reveal flex items-stretch">
              <div className="rounded-3xl overflow-hidden w-full">
                <video
                  src="/emergency_mockup.mp4"
                  width={500}
                  height={400}
                  className="w-full h-full object-cover rounded-3xl"
                  autoPlay
                  muted
                  loop
                  playsInline
                  poster="https://placehold.co/500x400/f6f8fb/181b20?text=Emergency+Dashboard"
                  onError={(e) => {
                    console.error('Video failed to load:', e)
                  }}
                >
                  <source src="/emergency_mockup.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Download Section - Keep Pure White */}
      <section id="download-section" className="py-20 md:py-32 scroll-reveal">
        <div className="max-w-7xl mx-auto px-4">
          <div className="bg-white rounded-3xl py-24 md:py-32 px-8 max-w-6xl mx-auto text-center shadow-lg border border-gray-100">
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
                <a
                  href="https://play.google.com/store/apps/details?id=com.aidsnap.app&utm_source=na_Med"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block"
                >
                  <button className="text-gray-600 hover:text-gray-800 transition-colors underline text-lg">
                    Download for Android
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      </div>
    </div>
  )
}
