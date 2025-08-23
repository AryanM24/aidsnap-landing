"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { useRef } from "react"

const steps = [
  "For minor burns, follow these steps:",
  "1. Cool the burn immediately under cool (not cold) running water for 10-20 minutes.",
  "2. Gently remove any jewelry or clothing near the burn, unless it's stuck to the skin.",
  "3. Cover the burn loosely with a clean, sterile bandage or a clean cloth.",
  "4. Do not apply butter, ice, or creams.",
  "5. Watch for signs of infection like increased pain, swelling, or pus. If you see these, seek medical attention.",
  "6. Take an over-the-counter pain reliever if needed, following package instructions.",
]

const note =
  "*If the burn is larger than 3 inches, deeper than the surface of the skin, or on the face, hands, feet, or genitals, seek immediate medical attention."

function useTypewriter(texts: string[], delay = 30, stepDelay = 600) {
  const [displayed, setDisplayed] = useState<string[]>([""])
  const [done, setDone] = useState(false)
  const typeRef = useRef({ step: 0, char: 0, current: "" })

  useEffect(() => {
    setDisplayed([""])
    setDone(false)
    typeRef.current = { step: 0, char: 0, current: "" }
    let timeout: NodeJS.Timeout

    function type() {
      const { step, char } = typeRef.current
      if (step >= texts.length) {
        setDone(true)
        return
      }

      if (char < texts[step].length) {
        typeRef.current.current += texts[step][char]
        typeRef.current.char++
        setDisplayed((prev) => {
          const copy = [...prev]
          copy[step] = typeRef.current.current
          return copy
        })
        timeout = setTimeout(type, delay)
      } else {
        typeRef.current.step++
        typeRef.current.char = 0
        typeRef.current.current = ""
        setDisplayed((prev) => [...prev, ""])
        timeout = setTimeout(type, stepDelay)
      }
    }

    if (texts.length > 0) {
      timeout = setTimeout(type, delay)
    }

    return () => clearTimeout(timeout)
  }, [texts, delay, stepDelay])
  return [displayed, done] as const
}

export function AIGuidanceChat() {
  const [showSteps, setShowSteps] = useState(false)
  const [typedSteps, done] = useTypewriter(showSteps ? steps : [], 18, 500)
  const chatRef = useRef<HTMLDivElement>(null)

  // Scroll to bottom when steps update
  useEffect(() => {
    if (showSteps && chatRef.current) {
      chatRef.current.scrollTop = chatRef.current.scrollHeight
    }
  }, [typedSteps, showSteps])

  // Show steps after delay
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowSteps(true)
    }, 1500)
    return () => clearTimeout(timer)
  }, [])

  // Replay once done
  useEffect(() => {
    if (done) {
      const replayTimer = setTimeout(() => {
        setShowSteps(false)
        // Scroll to top before replay
        if (chatRef.current) {
          chatRef.current.scrollTop = 0
        }
        setTimeout(() => setShowSteps(true), 400)
      }, 1800)
      return () => clearTimeout(replayTimer)
    }
  }, [done])

  return (
    <div
      className="w-full bg-[#171717] rounded-2xl overflow-hidden flex flex-col"
      style={{ height: "calc(100% + 130px)" }}
    >
      {/* Header with status bar style */}
      <div className="bg-[#171717] px-4 py-3 flex items-center justify-between border-b border-gray-800">
        <div className="flex items-center space-x-3">
          <Image
            src="/logo.png?height=32&width=120&text=AidSnap+Logo"
            alt="AidSnap Logo"
            width={120}
            height={32}
            className="h-8 w-auto rounded-lg"
          />
          <span className="text-white font-medium">AidSnap</span>
        </div>
        <button className="p-1">
          <svg className="w-5 h-5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {/* Chat Content */}
      <div
        ref={chatRef}
        className="flex-1 p-4"
        style={{
          overflowY: "hidden",
          pointerEvents: "none",
          maxHeight: "100%",
        }}
      >
        {/* Initial prompt message */}
        <div className="bg-[#4a3030] rounded-lg px-4 py-3 mb-4">
          <p className="text-gray-300 text-sm">
            Get step-by-step guidance for treating minor burns.
          </p>
        </div>

        {/* Steps response */}
        {showSteps && (
          <div className="space-y-4">
            <p className="text-gray-300 text-sm mb-4">{typedSteps[0]}</p>
            <div className="space-y-3 text-gray-300 text-sm leading-relaxed">
              {typedSteps.slice(1, 7).map((step, i) => (
                <div className="flex" key={i}>
                  <span className="mr-3 text-gray-400">{i + 1}.</span>
                  <span>{step.replace(/^\d+\.\s*/, "")}</span>
                </div>
              ))}
            </div>
            <div className="mt-6 pt-4 border-t border-gray-800">
              <p className="text-gray-400 text-xs italic">
                {typedSteps[6] === steps[6] ? note : ""}
              </p>
            </div>
          </div>
        )}
      </div>

      {/* Input Bar */}
      <div className="bg-[#1f1f1f] border-t border-gray-800 px-4 py-3">
        <div className="flex items-center space-x-2">
          <button className="p-2">
            <svg className="w-5 h-5 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4v16m8-8H4" />
            </svg>
          </button>
          <div className="flex-1 bg-[#2a2a2a] rounded-full px-4 py-2.5">
            <span className="text-gray-500 text-sm">Ask AidSnap...</span>
          </div>
          <button className="p-2">
            <svg className="w-5 h-5 text-gray-400 rotate-45" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
