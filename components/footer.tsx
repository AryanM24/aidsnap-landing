"use client"

import React from "react"

import Link from "next/link"
import { Mail, Instagram, Linkedin } from "lucide-react"
import Image from "next/image"
import { Separator } from "@/components/ui/separator"

export function Footer() {
  const solutionsLinks = [
    { label: "Use Cases", href: "#" },
    { label: "Emergency", href: "#" },
    { label: "Download", href: "#" },
  ]

  const resourcesLinks = [
    { label: "Help Center", href: "/support" },
    { label: "Careers", href: "/careers" },
    { label: "Manifesto", href: "/manifesto" },
    { label: "Press", href: "/press" },
    { label: "Legal", href: "/legal" },
  ]



  const [email, setEmail] = React.useState("")
  const [isValid, setIsValid] = React.useState(false)
  const [isSubmitted, setIsSubmitted] = React.useState(false)

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    return emailRegex.test(email)
  }

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    setEmail(value)
    setIsValid(validateEmail(value))
  }

  const handleWaitlistSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (isValid) {
      setIsSubmitted(true)
      // Handle waitlist submission
      console.log("Email submitted:", email)
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false)
        setEmail("")
        setIsValid(false)
      }, 3000)
    }
  }

  return (
    <footer className="bg-[#181B20] text-white rounded-t-[48px] font-poppins">
      {/* Main Footer Content */}
      <div className="px-6 py-12 md:px-12 md:py-16">
        {/* Mobile Navigation Links */}
        <div className="md:hidden">
          {/* Mobile Brand Logo & Tagline */}
          <div className="flex flex-col items-start gap-2 mb-6">
            <Image
              src="/logo.png?height=32&width=120&text=AidSnap+Logo"
              alt="AidSnap Logo"
              width={120}
              height={32}
              className="h-8 w-auto rounded-lg"
            />
            <p className="text-gray-400 text-sm leading-relaxed text-left">Saving lives with AI technology.</p>
          </div>
          
          {/* Line under logo subtext */}
          <div className="w-full mb-6">
            <Separator className="bg-gray-600/20" />
          </div>

          <div className="flex flex-col gap-8 mb-8">
            {/* Solutions and Resources Side by Side */}
            <div className="flex gap-8">
              {/* Solutions Section */}
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-4 opacity-90">Solutions</h3>
                <div className="flex flex-col gap-3">
                  {solutionsLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-base font-light hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>

              {/* Resources Section */}
              <div className="flex-1">
                <h3 className="font-semibold text-base mb-4 opacity-90">Resources</h3>
                <div className="flex flex-col gap-3">
                  {resourcesLinks.map((link) => (
                    <Link
                      key={link.label}
                      href={link.href}
                      className="text-base font-light hover:opacity-80 transition-opacity"
                    >
                      {link.label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            
            {/* Line under nav items */}
            <div className="w-full mb-6">
              <Separator className="bg-gray-600/20" />
            </div>

            {/* iOS Waitlist Section */}
            <div className="flex flex-col mb-4">
              <h3 className="font-semibold text-base mb-4 opacity-90">iOS Waitlist</h3>
              <form onSubmit={handleWaitlistSubmit} className="flex gap-2 mb-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={handleEmailChange}
                  className={`flex-1 px-4 py-2 rounded-lg text-white placeholder-white/60 text-base focus:outline-none focus:ring-2 transition-all ${
                    isSubmitted 
                      ? "bg-green-500/20 border border-green-500" 
                      : isValid 
                        ? "bg-white/20 border border-green-500" 
                        : "bg-white/20 border border-transparent focus:ring-white/40"
                  }`}
                />
                <button
                  type="submit"
                  disabled={!isValid || isSubmitted}
                  className={`px-4 py-2 rounded-lg text-white font-medium text-base transition-colors whitespace-nowrap ${
                    isSubmitted
                      ? "bg-green-500 cursor-not-allowed"
                      : "bg-[#F87171] hover:bg-[#F87171]/80"
                  }`}
                >
                  {isSubmitted ? "✓" : "Send"}
                </button>
              </form>
              <p className="text-xs opacity-70">2k+ waiting...</p>
            </div>
          </div>
        </div>

        {/* Desktop Navigation Links */}
        <div className="hidden md:flex md:items-start md:gap-12 mb-16">
          {/* Solutions Section */}
          <div>
            <h3 className="font-semibold text-base mb-4 opacity-90">Solutions</h3>
            <div className="flex flex-col gap-3">
              {solutionsLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                    className="text-base font-light hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Resources Section */}
          <div>
            <h3 className="font-semibold text-base mb-4 opacity-90">Resources</h3>
            <div className="flex flex-col gap-3">
              {resourcesLinks.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                    className="text-base font-light hover:opacity-80 transition-opacity"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>


          {/* iOS Waitlist Section */}
          <div className="flex flex-col gap-3">
            <h3 className="font-semibold text-base opacity-90">iOS Waitlist</h3>
            <form onSubmit={handleWaitlistSubmit} className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={handleEmailChange}
                className={`flex-1 px-4 py-2 rounded-lg text-white placeholder-white/60 text-base focus:outline-none focus:ring-2 min-w-0 transition-all ${
                  isSubmitted 
                    ? "bg-green-500/20 border border-green-500" 
                    : isValid 
                      ? "bg-white/20 border border-green-500" 
                      : "bg-white/20 border border-transparent focus:ring-white/40"
                }`}
              />
              <button
                type="submit"
                disabled={!isValid || isSubmitted}
                className={`px-4 py-2 rounded-lg text-white font-medium text-base transition-colors whitespace-nowrap ${
                  isSubmitted
                    ? "bg-green-500 cursor-not-allowed"
                    : "bg-[#F87171] hover:bg-[#F87171]/80"
                }`}
              >
                {isSubmitted ? "✓" : "Send"}
              </button>
            </form>
            <p className="text-xs opacity-70">2k+ waiting...</p>
          </div>

          {/* Brand & Social Section */}
          <div className="flex flex-col items-end gap-4 ml-auto">
            {/* Brand Logo & Tagline */}
            <div className="flex flex-col items-end gap-2">
              <Image
                src="/logo.png?height=32&width=120&text=AidSnap+Logo"
                alt="AidSnap Logo"
                width={120}
                height={32}
                className="h-8 w-auto rounded-lg"
              />
              <p className="text-gray-400 text-sm leading-relaxed">Saving lives with AI technology.</p>
            </div>
            
            {/* Social Media Links */}
            <div className="flex items-center space-x-4 mt-4">
              <a
                href="https://instagram.com/aidsnap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F87171] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com/company/aidsnap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F87171] transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="https://tiktok.com/@aidsnap"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-[#F87171] transition-colors"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                </svg>
              </a>
              <a
                href="mailto:aryan.mittal@aidsnap.com"
                className="text-gray-400 hover:text-[#F87171] transition-colors"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright & Legal Section */}
      <div className="flex flex-col items-center justify-center py-12 md:py-16">
        <div className="w-full px-6 md:px-12 mb-4">
          <Separator className="bg-gray-600/20" />
        </div>
        
        {/* Mobile: Copyright + Social Links */}
        <div className="md:hidden flex items-center justify-between w-full gap-4 px-6">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AidSnap Inc.</p>
          {/* Mobile Social Media Links */}
          <div className="flex items-center space-x-3">
            <a
              href="https://instagram.com/aidsnap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F87171] transition-colors"
            >
              <Instagram className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/company/aidsnap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F87171] transition-colors"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="https://tiktok.com/@aidsnap"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-[#F87171] transition-colors"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
              </svg>
            </a>
            <a
              href="mailto:aryan.mittal@aidsnap.com"
              className="text-gray-400 hover:text-[#F87171] transition-colors"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>
        </div>

        {/* Desktop: Copyright Only */}
        <div className="hidden md:block text-center">
          <p className="text-gray-400 text-sm">© {new Date().getFullYear()} AidSnap Inc.</p>
        </div>
      </div>
    </footer>
  )
}
