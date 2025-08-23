"use client"

import { useState, useEffect } from "react"

export function EnvironmentAnalysis() {
  const [activeResource, setActiveResource] = useState(0)
  const [colors, setColors] = useState<string[]>([])

  const resources = [
    { id: 1, x: 15, y: 25, width: 20, height: 15, label: "First Aid Kit", available: true },
    { id: 2, x: 65, y: 35, width: 18, height: 12, label: "Clean Towels", available: true },
    { id: 3, x: 40, y: 55, width: 25, height: 18, label: "Ice Pack", available: false },
    { id: 4, x: 20, y: 70, width: 22, height: 14, label: "Antiseptic", available: true },
  ]

  useEffect(() => {
    // Generate colors on client side only
    const generatedColors = Array.from({ length: 60 }).map(() => 
      `hsl(${Math.random() * 120 + 180}, ${Math.random() * 30 + 40}%, ${Math.random() * 20 + 70}%)`
    )
    setColors(generatedColors)
    
    const interval = setInterval(() => {
      setActiveResource((prev) => (prev + 1) % resources.length)
    }, 1800)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-[#171717] rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        {/* Dark pixelated background grid */}
        <div className="grid grid-cols-10 grid-rows-6 h-full w-full">
          {colors.length > 0 ? colors.map((color, i) => (
            <div
              key={i}
              className="opacity-10"
              style={{
                backgroundColor: color,
              }}
            />
          )) : (
            // Fallback static colors for SSR
            Array.from({ length: 60 }).map((_, i) => (
              <div
                key={i}
                className="opacity-10 bg-blue-400"
              />
            ))
          )}
        </div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* Resource bounding boxes */}
      {resources.map((resource, index) => (
        <div
          key={resource.id}
          className={`absolute border-2 transition-all duration-500 ${
            activeResource === index
              ? `${resource.available ? "border-green-500 bg-green-500/30 shadow-lg shadow-green-500/20" : "border-orange-500 bg-orange-500/30 shadow-lg shadow-orange-500/20"} scale-105`
              : `${resource.available ? "border-green-400/50 bg-green-400/10" : "border-orange-400/50 bg-orange-400/10"}`
          }`}
          style={{
            left: `${resource.x}%`,
            top: `${resource.y}%`,
            width: `${resource.width}%`,
            height: `${resource.height}%`,
          }}
        >
          {activeResource === index && (
            <div
              className={`absolute -top-8 left-0 px-2 py-1 rounded text-xs font-medium whitespace-nowrap backdrop-blur-sm ${
                resource.available ? "bg-green-500/90 text-white" : "bg-orange-500/90 text-white"
              }`}
            >
              {resource.label} {resource.available ? "✓" : "✗"}
            </div>
          )}
        </div>
      ))}

      {/* Scan indicator */}
      <div className="absolute bottom-4 right-4 bg-[#2a2a2a] backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-blue-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-400">AI Scanning...</span>
        </div>
      </div>
    </div>
  )
}
