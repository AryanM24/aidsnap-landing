"use client"

import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { usePathname } from "next/navigation"

export function Navbar() {
  const pathname = usePathname()

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

  return (
    <header className="fixed top-6 left-6 right-6 z-50">
      <nav className="bg-zinc-900/90 backdrop-blur-xl border border-zinc-800 rounded-full px-8 py-4 flex items-center justify-between max-w-6xl mx-auto shadow-2xl">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png?height=32&width=120&text=AidSnap+Logo"
            alt="AidSnap Logo"
            width={120}
            height={32}
            className="h-8 w-auto rounded-lg"
          />
        </Link>

        {/* Navigation */}
        <div className="hidden md:flex items-center space-x-8">
          <button
            onClick={() => scrollToSection("features-section")}
            className="text-sm transition-all duration-300 hover:text-[#F87171] text-gray-300"
          >
            Features
          </button>
          <button
            onClick={() => scrollToSection("emergency-section")}
            className="text-sm transition-all duration-300 hover:text-[#F87171] text-gray-300"
          >
            Emergency
          </button>
          <Link
            href="/support"
            className={`text-sm transition-all duration-300 hover:text-[#F87171] ${pathname === "/support" ? "text-[#F87171]" : "text-gray-300"}`}
          >
            Help
          </Link>
          
        </div>

        {/* Actions */}
        <div className="flex items-center">
          <Button
            onClick={scrollToDownload}
            className="bg-[#F87171] text-white hover:bg-[#F87171]/90 rounded-full px-6 py-2 text-sm font-medium transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-[#F87171]/25"
          >
            Get Started
          </Button>
        </div>
      </nav>
    </header>
  )
}
