"use client"

import Image from "next/image"
import Link from "next/link"
import { Shield, Camera, Mic } from "lucide-react"
import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { LiquidGlass } from "@/components/liquid-glass"
import { useEffect, useState, useRef } from "react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { InjuryAnalysis } from "@/components/injury-analysis"
import { EnvironmentAnalysis } from "@/components/environment-analysis"
import { TypewriterGuidance } from "@/components/typewriter-guidance"
import { AIGuidanceChat } from "@/components/ai-guidance-chat"
import { OfflineIndicator } from "@/components/offline-indicator"
import { CalmInterface } from "@/components/calm-interface"



gsap.registerPlugin(ScrollTrigger)

export default function HomePage() {
  const [isVisible, setIsVisible] = useState(false)
  const [isTyping, setIsTyping] = useState(false)
  const [hasTyped, setHasTyped] = useState(false)
  const [typedText, setTypedText] = useState("")
  const [videoLoaded, setVideoLoaded] = useState(false)
  const [videoError, setVideoError] = useState(false)
  const typingRef = useRef<HTMLElement>(null)
  const heroVideoRef = useRef<HTMLVideoElement>(null)
  const heroSectionRef = useRef<HTMLElement>(null)

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

    // Observe all scroll-reveal elements
    const scrollElements = document.querySelectorAll(".scroll-reveal")
    scrollElements.forEach((el) => observer.observe(el))

    // GSAP ScrollTrigger for video scrubbing (desktop only)
    const video = heroVideoRef.current
    const heroSection = heroSectionRef.current
    
    if (video && heroSection) {
      const handleVideoLoaded = () => {
        console.log('Video loaded successfully, duration:', video.duration)
        setVideoLoaded(true)
        
        // Only set up GSAP ScrollTrigger animation on desktop
        if (window.innerWidth >= 768) {
          gsap.to(video, {
            currentTime: video.duration,
            ease: "none",
            scrollTrigger: {
              trigger: heroSection,
              start: "top top",
              end: "bottom+=150% top", // Reduced from 200% to 150% for quicker completion
              scrub: true,
              pin: true,
              pinSpacing: true,
              onUpdate: (self) => {
                // Optional: Add any additional logic on scroll update
                if (self.progress >= 0.99) {
                  // Video scrubbing complete
                }
              }
            }
          })
        }
      }
      
      const handleVideoError = (e: any) => {
        console.error('Video loading failed:', e)
        setVideoError(true)
      }
      
      const handleResize = () => {
        // Kill ScrollTrigger on mobile
        if (window.innerWidth < 768) {
          ScrollTrigger.getAll().forEach(trigger => {
            if (trigger.vars.trigger === heroSection) {
              trigger.kill()
            }
          })
        } else if (video.readyState >= 1) {
          // Re-initialize on desktop if video is loaded
          handleVideoLoaded()
        }
      }
      
      if (video.readyState >= 1) {
        // Video metadata is already loaded
        handleVideoLoaded()
      } else {
        // Wait for video to load
        video.addEventListener('loadedmetadata', handleVideoLoaded)
        video.addEventListener('error', handleVideoError)
      }
      
      // Listen for window resize to handle mobile/desktop switching
      window.addEventListener('resize', handleResize)
      
      return () => {
        window.removeEventListener('resize', handleResize)
      }
    }

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
                setTimeout(typeText, 50) // Adjust speed here (lower = faster)
              } else {
                // Animation complete, mark as typed and stop observing
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

    // Observe the typing element
    if (typingRef.current) {
      typingObserver.observe(typingRef.current)
    }

    return () => {
      observer.disconnect()
      typingObserver.disconnect()
      // Clean up ScrollTrigger instances
      ScrollTrigger.getAll().forEach(trigger => trigger.kill())
    }
  }, [])

  return (
    <div className="bg-gradient-medical text-gray-900 min-h-screen">
      <Navbar />

      {/* Hero Section with GSAP Pin */}
      <section ref={heroSectionRef} className="hero-section relative bg-[#F3F7FB] md:bg-[#F3F7FB]">
        <main className="max-w-7xl mx-auto px-4 pt-32 pb-32 md:pt-56 md:pb-32">
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

            {/* Hero Video - Hidden on mobile */}
            <div className="mt-20 relative hidden md:block">
              <div className="relative mx-auto max-w-5xl px-4 md:px-0">
                {/* Scroll-driven Hero Video */}
                <div className="relative">
                  {!videoError ? (
                    <video
                      ref={heroVideoRef}
                      className="mx-auto rounded-3xl w-full h-auto max-w-full object-contain md:object-cover"
                      width={900}
                      height={700}
                      muted
                      playsInline
                      preload="auto"
                      onLoadedMetadata={() => {
                        console.log('Video metadata loaded')
                        setVideoLoaded(true)
                      }}
                      onError={(e) => {
                        console.error('Video error:', e)
                        setVideoError(true)
                      }}
                      onCanPlay={() => console.log('Video can play')}
                    >
                      <source src="/hero_video.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>
                  ) : (
                    /* Fallback image if video fails to load */
                    <Image
                      src="/placeholder.svg?height=700&width=900&text=AidSnap+Emergency+AI+Interface"
                      alt="AidSnap first aid AI assistant interface"
                      width={900}
                      height={700}
                      className="mx-auto rounded-3xl max-w-full h-auto"
                    />
                  )}
                </div>
              </div>
            </div>
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
                <h2 ref={typingRef} className="text-4xl md:text-5xl font-bold text-white mb-2">
                  {typedText.split("\n").map((line, index) => (
                    <span key={index}>
                      {line}
                      {index === 0 && <br />}
                      {index === 1 && !hasTyped && <span className="animate-pulse">|</span>}
                    </span>
                  ))}
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
                        poster="/placeholder.svg?height=300&width=400&text=Offline+Emergency+Protocols"
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
                  poster="/placeholder.svg?height=400&width=600&text=Emergency+Dashboard+Interface"
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
                <span>Coming Soon.</span>
              </button>
            </div>
          </div>
        </div>
      </section>

      <Footer />
      
      </div>
    </div>
  )
}
