"use client"

import { useState, useEffect } from "react"

export function InjuryAnalysis() {
  const [activeBox, setActiveBox] = useState(0)
  const [colors, setColors] = useState<string[]>([])

  const boundingBoxes = [
    { id: 1, x: 20, y: 30, width: 25, height: 15, label: "Laceration", severity: "Moderate" },
    { id: 2, x: 60, y: 45, width: 20, height: 20, label: "Swelling", severity: "Mild" },
    { id: 3, x: 35, y: 65, width: 30, height: 12, label: "Bruising", severity: "Minor" },
  ]

  useEffect(() => {
    // Generate colors on client side only
    const generatedColors = Array.from({ length: 96 }).map(() => 
      `hsl(${Math.random() * 60 + 340}, ${Math.random() * 30 + 40}%, ${Math.random() * 20 + 70}%)`
    )
    setColors(generatedColors)
    
    const interval = setInterval(() => {
      setActiveBox((prev) => (prev + 1) % boundingBoxes.length)
    }, 2000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="relative w-full h-full bg-[#171717] rounded-2xl overflow-hidden">
      <div className="absolute inset-0">
        {/* Dark pixelated background grid */}
        <div className="grid grid-cols-12 grid-rows-8 h-full w-full">
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
            Array.from({ length: 96 }).map((_, i) => (
              <div
                key={i}
                className="opacity-10 bg-red-400"
              />
            ))
          )}
        </div>
        {/* Subtle overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/20"></div>
      </div>

      {/* Bounding boxes */}
      {boundingBoxes.map((box, index) => (
        <div
          key={box.id}
          className={`absolute border-2 transition-all duration-500 ${
            activeBox === index ? "border-red-500 bg-red-500/30 scale-105 shadow-lg shadow-red-500/20" : "border-red-400/50 bg-red-400/10"
          }`}
          style={{
            left: `${box.x}%`,
            top: `${box.y}%`,
            width: `${box.width}%`,
            height: `${box.height}%`,
          }}
        >
          {activeBox === index && (
            <div className="absolute -top-8 left-0 bg-red-500/90 backdrop-blur-sm text-white px-2 py-1 rounded text-xs font-medium whitespace-nowrap">
              {box.label} - {box.severity}
            </div>
          )}
        </div>
      ))}

      {/* Analysis indicator */}
      <div className="absolute bottom-4 left-4 bg-[#2a2a2a] backdrop-blur-sm rounded-lg px-3 py-2 border border-gray-800">
        <div className="flex items-center space-x-2">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-xs font-medium text-gray-400">AI Analyzing...</span>
        </div>
      </div>
    </div>
  )
}
