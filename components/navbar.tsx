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

  useEffect(() => {
    const handleScroll = () => {
      // Check if we've scrolled past the main heading (roughly 60vh instead of 80vh)
      const heroHeight = window.innerHeight
      setIsScrolled(window.scrollY > heroHeight * 0.025)
    }

    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
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

      {/* Navigation */}
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

      {/* Actions */}
      <div className="flex items-center relative z-10">
        <Button
          onClick={scrollToDownload}
          className="bg-[#F87171] text-white hover:bg-[#F87171]/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#F87171]/25 relative z-10 border-0"
        >
          Get Started
        </Button>
      </div>
    </nav>
  )

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        isScrolled ? "md:top-6 md:left-6 md:right-6" : ""
      } ${!isScrolled ? "md:border-none border-b border-white/20 backdrop-blur-sm" : ""}`}
    >
      {isScrolled ? (
        <LiquidGlass
          className="liquid-glass-navbar-light md:rounded-full px-8 py-4 max-w-6xl mx-auto backdrop-blur-md md:backdrop-blur-sm"
          intensity={0.8}
          viscosity={0.9}
        >
          <NavContent />
        </LiquidGlass>
      ) : (
        <div className="px-8 py-4 max-w-6xl mx-auto">
          <NavContent />
        </div>
      )}
    </header>
  )
}
