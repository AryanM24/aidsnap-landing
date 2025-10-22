"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import Link from "next/link"

// Press article data structure
interface PressArticle {
  publicationName: string
  headline: string
  articleLink: string
}

// Press articles array - currently contains one article
const pressArticles: PressArticle[] = [
  {
    publicationName: "TapInto Edison",
    headline: "Edison High School Students Create First Aid App Using AI Model",
    articleLink: "https://www.tapinto.net/towns/edison/sections/business-and-finance/articles/edison-high-school-students-create-first-aid-app-using-ai-model"
  }
]

export default function PressPage() {
  return (
    <div className="min-h-screen bg-white">
      <Navbar />
      
      {/* Main Content */}
      <main className="pt-40 md:pt-48 pb-32 md:pb-40">
        <div className="max-w-4xl mx-auto px-4 md:px-6">
          {/* Header Section */}
          <div className="text-center mb-12 md:mb-20">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-3 md:mb-4">
              AidSnap In the Press
            </h1>
            <p className="text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              See what the media has to say about us.
            </p>
          </div>

          {/* Year Section */}
          <div className="mb-8 md:mb-12">
            <h2 className="text-base md:text-lg font-light text-gray-400 mb-4 md:mb-6">2025</h2>
            
            {/* Articles List */}
            <div className="space-y-0 border-t border-gray-200 border-b border-gray-200">
              {pressArticles.map((article, index) => (
                <Link
                  key={index}
                  href={article.articleLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block border-b border-gray-200 py-6 md:py-8 last:border-b-0 hover:bg-gray-50 transition-colors duration-200 group"
                >
                  <div className="flex flex-col space-y-2 md:space-y-3">
                    {/* Publication Name */}
                    <h3 className="text-base md:text-lg font-semibold text-gray-900 group-hover:text-[#F87171] transition-colors duration-200">
                      {article.publicationName}
                    </h3>
                    
                    {/* Article Headline */}
                    <p className="text-sm md:text-base text-gray-700 group-hover:text-[#F87171] transition-colors duration-200 leading-relaxed">
                      {article.headline}
                    </p>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
