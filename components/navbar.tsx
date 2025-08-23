"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { LiquidGlass } from "@/components/liquid-glass"
import { usePathname } from "next/navigation"
import { useEffect, useState } from "react"

export function Navbar() {
  const pathname = usePathname()
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [scrollPosition, setScrollPosition] = useState(0)

  // Handle body scroll when mobile menu opens/closes
  useEffect(() => {
    if (isMobileMenuOpen) {
      setScrollPosition(window.scrollY)
      document.body.style.overflow = 'hidden'
      document.body.style.position = 'fixed'
      document.body.style.top = `-${window.scrollY}px`
      document.body.style.width = '100%'
    } else {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
      window.scrollTo(0, scrollPosition)
    }

    return () => {
      document.body.style.overflow = ''
      document.body.style.position = ''
      document.body.style.top = ''
      document.body.style.width = ''
    }
  }, [isMobileMenuOpen, scrollPosition])

  useEffect(() => {
    const handleScroll = () => {
      // Only apply dynamic navbar behavior on desktop
      if (window.innerWidth >= 768) {
        const heroHeight = window.innerHeight
        setIsScrolled(window.scrollY > heroHeight * 0.025)
      } else {
        setIsScrolled(false) // Always keep navbar static on mobile
      }
    }

    window.addEventListener("scroll", handleScroll)
    window.addEventListener("resize", handleScroll)
    handleScroll() // Initial check
    return () => {
      window.removeEventListener("scroll", handleScroll)
      window.removeEventListener("resize", handleScroll)
    }
  }, [])

  const scrollToSection = (sectionId: string) => {
    if (pathname === "/") {
      const section = document.getElementById(sectionId)
      section?.scrollIntoView({ behavior: "smooth" })
    } else {
      window.location.href = `/#${sectionId}`
    }
  }

  const scrollToDownload = () => {
    scrollToSection("download-section")
  }

  const NavContent = () => (
    <>
      <nav className="flex items-center justify-between relative z-10">
        {/* Logo */}
        <Link href="/" className="flex items-center relative z-10">
          <Image
            src="/logo2.png?height=32&width=120&text=AidSnap+Logo"
            alt="AidSnap Logo"
            width={120}
            height={32}
            className="h-8 w-auto rounded-lg"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-8 relative z-10">
          <button
            onClick={() => scrollToSection("features-section")}
            className="text-sm transition-all duration-300 hover:text-gray-900 text-gray-600 relative z-10"
          >
            Use Cases
          </button>
          <button
            onClick={() => scrollToSection("emergency-section")}
            className="text-sm transition-all duration-300 hover:text-gray-900 text-gray-600 relative z-10"
          >
            Emergency
          </button>
          <Link
            href="/careers"
            className={`text-sm transition-all duration-300 hover:text-gray-900 relative z-10 ${pathname === "/careers" ? "text-gray-900" : "text-gray-600"}`}
          >
            Careers
          </Link>
          <Link
            href="/support"
            className={`text-sm transition-all duration-300 hover:text-gray-900 relative z-10 ${pathname === "/coming-soon" ? "text-gray-900" : "text-gray-600"}`}
          >
            Help Center
          </Link>
        </div>

        {/* Desktop Actions & Mobile Menu Button */}
        <div className="flex items-center relative z-10">
          <Button
            onClick={scrollToDownload}
            className="hidden md:inline-flex bg-[#F87171] text-white hover:bg-[#F87171]/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#F87171]/25 relative z-10 border-0"
          >
            Get Started
          </Button>
          
          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors relative z-10"
            aria-label="Toggle mobile menu"
          >
            <svg
              className="w-6 h-6 text-gray-700"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isMobileMenuOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </nav>

      {/* Mobile Side Menu Overlay */}
      {isMobileMenuOpen && (
        <>
          {/* Overlay backdrop */}
          <div 
            className="md:hidden fixed inset-0 bg-black/50 backdrop-blur-sm mobile-menu-backdrop"
            onClick={() => setIsMobileMenuOpen(false)}
            style={{zIndex: 9998}}
          />
          
          {/* Side menu */}
          <div className="md:hidden fixed top-0 right-0 h-full w-80 bg-white shadow-2xl mobile-side-menu transform transition-all duration-300 ease-in-out" style={{zIndex: 9999}}>
            <div className="p-6">
              {/* Close button */}
              <div className="flex justify-between items-center mb-8">
                <Image
                  src="/logo2.png?height=32&width=120&text=AidSnap+Logo"
                  alt="AidSnap Logo"
                  width={120}
                  height={32}
                  className="h-8 w-auto rounded-lg"
                />
                <button
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
                  aria-label="Close menu"
                >
                  <svg
                    className="w-6 h-6 text-gray-700"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
              
              {/* Menu items */}
              <div className="space-y-6">
                <button
                  onClick={() => {
                    scrollToSection("features-section")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-3 text-lg font-medium transition-colors border-b border-gray-100"
                >
                  Use Cases
                </button>
                <button
                  onClick={() => {
                    scrollToSection("emergency-section")
                    setIsMobileMenuOpen(false)
                  }}
                  className="block w-full text-left text-gray-700 hover:text-gray-900 py-3 text-lg font-medium transition-colors border-b border-gray-100"
                >
                  Emergency
                </button>
                <Link
                  href="/careers"
                  className="block text-gray-700 hover:text-gray-900 py-3 text-lg font-medium transition-colors border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Careers
                </Link>
                <Link
                  href="/support"
                  className="block text-gray-700 hover:text-gray-900 py-3 text-lg font-medium transition-colors border-b border-gray-100"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  Help Center
                </Link>
                
                {/* Get Started button */}
                <div className="pt-6">
                  <Button
                    onClick={() => {
                      scrollToDownload()
                      setIsMobileMenuOpen(false)
                    }}
                    className="w-full bg-[#F87171] text-white hover:bg-[#F87171]/90 rounded-full px-6 py-4 text-lg font-medium transition-all duration-300 border-0"
                  >
                    Get Started
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "md:top-6 md:left-6 md:right-6" : ""
      } ${!isScrolled ? "md:border-none border-b border-white/20 md:backdrop-blur-sm bg-[#F3F7FB]" : ""}`}
    >
      {isScrolled ? (
        <LiquidGlass
          className="liquid-glass-navbar-light rounded-none md:rounded-full px-4 md:px-8 py-4 max-w-6xl mx-auto backdrop-blur-md md:backdrop-blur-sm"
          intensity={0.8}
          viscosity={0.9}
        >
          <NavContent />
        </LiquidGlass>
      ) : (
        <div className="px-4 md:px-8 py-4 max-w-6xl mx-auto md:backdrop-blur-sm bg-[#F3F7FB]">
          <NavContent />
        </div>
      )}
    </header>
  )
}
