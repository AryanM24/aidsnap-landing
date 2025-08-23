"use client"

import { useState, useEffect } from "react"
import { WifiOff } from "lucide-react"

export function OfflineIndicator() {
  const [typedText, setTypedText] = useState("")
  const [showCursor, setShowCursor] = useState(true)

  const fullResponse =
    "I can help you treat that cut even without internet. First, clean your hands thoroughly. Then, apply direct pressure to the wound with a clean cloth..."

  useEffect(() => {
    let currentIndex = 0
    const typingInterval = setInterval(() => {
      if (currentIndex < fullResponse.length) {
        setTypedText(fullResponse.slice(0, currentIndex + 1))
        currentIndex++
      } else {
        clearInterval(typingInterval)
      }
    }, 50)

    // Cursor blinking
    const cursorInterval = setInterval(() => {
      setShowCursor((prev) => !prev)
    }, 500)

    return () => {
      clearInterval(typingInterval)
      clearInterval(cursorInterval)
    }
  }, [])

  return (
    <div
      className="w-full h-full rounded-2xl p-6 flex flex-col text-white relative overflow-hidden"
      style={{ backgroundColor: "#171717" }}
    >
      <div className="flex items-center space-x-2 mb-4">
        <WifiOff className="w-4 h-4 text-red-400" />
        <span className="text-xs text-red-400 font-medium">OFFLINE</span>
        <div className="w-2 h-2 rounded-full bg-red-400 animate-pulse"></div>
      </div>

      <div className="flex-1 flex flex-col">
        <div className="bg-gray-700/60 rounded-lg p-4 mb-3">
          <div className="text-xs text-gray-400 mb-2">You</div>
          <div className="text-sm">How do I treat a small cut on my finger?</div>
        </div>

        <div className="bg-gray-600/40 rounded-lg p-4 flex-1">
          <div className="text-xs text-blue-400 mb-2">AidSnap</div>
          <div className="text-sm leading-relaxed">
            {typedText}
            {showCursor && <span className="text-blue-400">|</span>}
          </div>
        </div>
      </div>
    </div>
  )
}
