"use client"

import { useState, useEffect } from "react"

export function TypewriterGuidance() {
  const [currentStep, setCurrentStep] = useState(0)
  const [displayedText, setDisplayedText] = useState("")
  const [isTyping, setIsTyping] = useState(false)

  const steps = [
    "1. Check for responsiveness",
    "2. Check airway and breathing",
    "3. Apply direct pressure to wound",
    "4. Elevate injured area if possible",
    "5. Call emergency services",
  ]

  useEffect(() => {
    if (currentStep < steps.length) {
      setIsTyping(true)
      const fullText = steps[currentStep]
      let charIndex = 0

      const typeInterval = setInterval(() => {
        if (charIndex <= fullText.length) {
          setDisplayedText(fullText.slice(0, charIndex))
          charIndex++
        } else {
          clearInterval(typeInterval)
          setIsTyping(false)

          // Move to next step after a pause
          setTimeout(() => {
            setCurrentStep((prev) => (prev + 1) % steps.length)
            setDisplayedText("")
          }, 1500)
        }
      }, 80)

      return () => clearInterval(typeInterval)
    }
  }, [currentStep])

  return (
    <div className="relative w-full h-full bg-[#171717] rounded-2xl overflow-hidden p-6 flex flex-col justify-center">
      {/* Terminal-like background */}
      <div className="absolute inset-0 bg-gray-900/5 rounded-2xl"></div>

      {/* Previous steps (faded) */}
      <div className="space-y-2 mb-4">
      {steps.slice(0, currentStep).map((step, index) => (
        <div key={index} className="text-gray-400 text-sm font-mono">
        {step} ✓
        </div>
      ))}
      </div>

      {/* Current typing step */}
      <div className="text-gray-100 text-sm font-mono font-medium">
      {displayedText}
      {isTyping && <span className="animate-pulse">|</span>}
      </div>

      {/* Progress indicator */}
      <div className="absolute bottom-4 left-6 right-6">
      <div className="flex space-x-1">
        {steps.map((_, index) => (
        <div
          key={index}
          className={`h-1 flex-1 rounded ${index <= currentStep ? "bg-[#F87171]" : "bg-gray-200"}`}
        />
        ))}
      </div>
      </div>
    </div>
  )
}
