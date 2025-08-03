import Link from "next/link"
import Image from "next/image"
import { Instagram, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="mt-32 border-t border-zinc-800 py-16 bg-black">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="space-y-6">
            <Image
              src="/logo.png?height=32&width=120&text=AidSnap+Logo"
              alt="AidSnap Logo"
              width={120}
              height={32}
              className="h-8 w-auto rounded-lg"
            />
            <p className="text-gray-400 text-sm leading-relaxed">Saving lives with AI technology.</p>

            {/* Social Links */}
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
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Solutions</h3>
            <div className="space-y-3">
              <Link
                href="/#features-section"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                How it works
              </Link>
              <Link
                href="/#emergency-section"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                Emergency
              </Link>
              <Link
                href="/#download-section"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                Download
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Resources</h3>
            <div className="space-y-3">
              <Link href="/support" className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors">
                Help
              </Link>
              <Link href="/coming-soon" className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors">
                Careers
              </Link>
              <Link href="/coming-soon" className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors">
                Press
              </Link>
            </div>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-6">Legal</h3>
            <div className="space-y-3">
              <Link
                href="/privacy?tab=privacy"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/privacy?tab=terms"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                Terms of Service
              </Link>
              <Link
                href="/privacy?tab=data-transfer"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                Data Transfer Agreement
              </Link>
              <Link
                href="/privacy?tab=marketing"
                className="block text-gray-400 hover:text-[#F87171] text-sm transition-colors"
              >
                Marketing Disclosure
              </Link>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center">
          <p className="text-gray-400 text-sm">© 2025 AidSnap. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
