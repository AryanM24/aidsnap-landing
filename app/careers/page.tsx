"use client"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { MapPin, Clock, Code, Megaphone, Shield, ArrowRight, Users, Palette, Camera } from "lucide-react"
import { useState } from "react"

export default function CareersPage() {
  const [hoveredPosition, setHoveredPosition] = useState<number | null>(null)

  const openPositions = [
    {
      title: "Founding Engineers",
      department: "Engineering",
      location: "NYC Hybrid",
      type: "Full-time",
      salary: "",
      icon: <Code className="w-6 h-6 text-[#F87171]" />,
      description:
        "Build the core AidSnap platform with React Native, Firebase, and AI integration. Shape the future of emergency response technology.",
      skills: ["React Native", "Firebase", "Google Cloud", "AI Integration", "Healthcare Security"],
    },
    {
      title: "Backend/AI Engineer",
      department: "Engineering",
      location: "Remote",
      type: "Full-time",
      salary: "",
      icon: <Shield className="w-6 h-6 text-[#F87171]" />,
      description:
        "Develop and deploy AI models for emergency medical diagnosis. Work with CNNs, YOLO, and MLOps on Google Cloud.",
      skills: ["Python/Node.js", "AI Model Training", "CNN/YOLO", "GCP APIs", "MLOps"],
    },
    {
      title: "Product/Project Manager",
      department: "Product",
      location: "NYC Hybrid",
      type: "Full-time",
      salary: "",
      icon: <Users className="w-6 h-6 text-[#F87171]" />,
      description:
        "Drive product roadmap and sprint management. Bridge engineering, design, and marketing for healthcare technology.",
      skills: ["Roadmap Planning", "Sprint Management", "Healthcare Tech", "Cross-functional Leadership"],
    },
    {
      title: "Marketing Interns",
      department: "Marketing",
      location: "Remote",
      type: "Internship",
      salary: "$10-$15/hr",
      icon: <Megaphone className="w-6 h-6 text-[#F87171]" />,
      description:
        "Manage social media presence and create engaging content. Learn growth hacking and SEO tactics in healthcare tech.",
      skills: ["Social Media", "Canva/Adobe Express", "SEO", "Growth Hacking"],
    },
    {
      title: "UGC Content Creators",
      department: "Marketing",
      location: "Remote",
      type: "Contract",
      salary: "",
      icon: <Camera className="w-6 h-6 text-[#F87171]" />,
      description:
        "Create compelling short-form content for TikTok, Instagram Reels, and YouTube Shorts. Health/first-aid credibility preferred.",
      skills: ["TikTok/Instagram", "Video Editing", "Short-form Content", "Health Knowledge"],
    },
    {
      title: "Design Interns (UI/UX)",
      department: "Design",
      location: "Remote",
      type: "Internship",
      salary: "$10 - $15/hr",
      icon: <Palette className="w-6 h-6 text-[#F87171]" />,
      description:
        "Design intuitive mobile interfaces for emergency situations. Work with Figma, prototyping, and motion graphics.",
      skills: ["Figma", "Prototyping", "Mobile Design", "Motion Graphics"],
    },
    {
      title: "Engineering Interns",
      department: "Engineering",
      location: "Remote",
      type: "Internship",
      salary: "$18 - $25/hr",
      icon: <Code className="w-6 h-6 text-[#F87171]" />,
      description:
        "Contribute to React Native features and Firebase integration. Perfect for students looking to gain real-world experience.",
      skills: ["React Native", "Firebase", "Mobile Development", "Bug Fixes"],
    },
    {
      title: "Anything Else",
      department: "",
      location: "Remote",
      type: "Full time/Part time",
      salary: "",
      icon: <Shield className="w-6 h-6 text-[#F87171]" />,
      description:
        "",
      skills: ["Any relevant skills"],
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-medical text-gray-900">
      <Navbar />

      <main className="max-w-7xl mx-auto px-4 pt-40 pb-12 md:pt-48 md:pb-20">
        {/* Hero Section */}
        <div className="text-center mb-20">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight">
            Join Our Mission
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            We're building the future of emergency response. Join a team of passionate individuals working to make
            life-saving technology accessible to everyone, everywhere.
          </p>
        </div>

        {/* Open Positions */}
        <section className="mb-20">
          <div className="space-y-6 max-w-5xl mx-auto">
            {openPositions.map((position, index) => (
              <div
                key={index}
                className={`bg-white/60 backdrop-blur-sm border border-white/40 rounded-2xl p-8 transition-all duration-300 cursor-pointer ${
                  hoveredPosition === index
                    ? "bg-white/80 border-[#F87171]/30 scale-[1.02] shadow-lg"
                    : "hover:bg-white/70"
                }`}
                onMouseEnter={() => setHoveredPosition(index)}
                onMouseLeave={() => setHoveredPosition(null)}
              >
                <div className="flex items-start justify-between mb-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-14 h-14 bg-[#F87171]/10 border border-[#F87171]/20 rounded-xl flex items-center justify-center flex-shrink-0">
                      {position.icon}
                    </div>
                    <div>
                      <h3 className="text-xl md:text-2xl font-semibold text-gray-900 mb-1">{position.title}</h3>
                      <p className="text-[#F87171] text-sm font-medium mb-2">{position.department}</p>
                      <p className="text-gray-600 leading-relaxed mb-4">{position.description}</p>
                    </div>
                  </div>
                  <button className="bg-[#F87171] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-[#F87171]/90 transition-all duration-300 hover:scale-105 flex items-center space-x-2 flex-shrink-0">
                    <span>Apply Now</span>
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Skills */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-2">
                    {position.skills.map((skill, skillIndex) => (
                      <span
                        key={skillIndex}
                        className="px-3 py-1 bg-gray-100/80 border border-gray-200/60 rounded-full text-xs text-gray-700"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Details */}
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center space-x-6">
                    <div className="flex items-center space-x-2">
                      <MapPin className="w-4 h-4" />
                      <span>{position.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="w-4 h-4" />
                      <span>{position.type}</span>
                    </div>
                  </div>
                  <div className="text-[#F87171] font-medium">{position.salary}</div>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      <Footer />
    </div>
  )
}
