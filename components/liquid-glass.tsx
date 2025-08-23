"use client"

import type React from "react"
import { useEffect, useRef, useState } from "react"

interface LiquidGlassProps {
  children: React.ReactNode
  className?: string
  intensity?: number
  viscosity?: number
}

export function LiquidGlass({ children, className = "", intensity = 1, viscosity = 0.8 }: LiquidGlassProps) {
  const elementRef = useRef<HTMLDivElement>(null)
  const backgroundRef = useRef<HTMLDivElement>(null)
  const [ripples, setRipples] = useState<Array<{ id: number; x: number; y: number }>>([])
  const animationFrameRef = useRef<number>()
  const mousePositionRef = useRef({ x: 0, y: 0 })
  const targetTransformRef = useRef({
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    borderRadius: 24,
  })
  const currentTransformRef = useRef({
    scaleX: 1,
    scaleY: 1,
    translateX: 0,
    translateY: 0,
    borderRadius: 24,
  })

  useEffect(() => {
    const element = elementRef.current
    const background = backgroundRef.current
    if (!element || !background) return

    const lerp = (start: number, end: number, factor: number) => {
      return start + (end - start) * factor
    }

    const animate = () => {
      const current = currentTransformRef.current
      const target = targetTransformRef.current
      const lerpFactor = 0.1 * viscosity

      // Smooth interpolation
      current.scaleX = lerp(current.scaleX, target.scaleX, lerpFactor)
      current.scaleY = lerp(current.scaleY, target.scaleY, lerpFactor)
      current.translateX = lerp(current.translateX, target.translateX, lerpFactor)
      current.translateY = lerp(current.translateY, target.translateY, lerpFactor)
      current.borderRadius = lerp(current.borderRadius, target.borderRadius, lerpFactor)

      // Apply transform to both container and background
      const transform = `
        scaleX(${current.scaleX}) 
        scaleY(${current.scaleY}) 
        translateX(${current.translateX}px) 
        translateY(${current.translateY}px)
      `

      element.style.transform = transform
      background.style.transform = transform

      // Create organic border radius
      const r1 = current.borderRadius
      const r2 = current.borderRadius * 0.8
      const r3 = current.borderRadius * 1.2
      const r4 = current.borderRadius * 0.9

      const borderRadius = `${r1}px ${r2}px ${r3}px ${r4}px`
      element.style.borderRadius = borderRadius
      background.style.borderRadius = borderRadius

      animationFrameRef.current = requestAnimationFrame(animate)
    }

    const handleMouseMove = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = ((e.clientX - rect.left) / rect.width) * 100
      const y = ((e.clientY - rect.top) / rect.height) * 100

      mousePositionRef.current = { x, y }

      // Calculate distance from center for liquid physics
      const centerX = 50
      const centerY = 50
      const distanceFromCenter = Math.sqrt(Math.pow(x - centerX, 2) + Math.pow(y - centerY, 2))
      const maxDistance = Math.sqrt(Math.pow(50, 2) + Math.pow(50, 2))
      const normalizedDistance = Math.min(distanceFromCenter / maxDistance, 1)

      // Liquid attraction effect - stronger near center
      const attraction = (1 - normalizedDistance) * intensity

      // Dynamic scaling with liquid physics
      const baseScale = 1
      const scaleVariation = 0.15 * intensity * attraction
      const scaleX = baseScale + scaleVariation * (1 + Math.sin((x / 100) * Math.PI * 2) * 0.1)
      const scaleY = baseScale + scaleVariation * (1 + Math.cos((y / 100) * Math.PI * 2) * 0.1)

      // Liquid deformation - pull towards mouse
      const pullStrength = 8 * intensity * attraction
      const deformX = (x - 50) * 0.01 * pullStrength
      const deformY = (y - 50) * 0.01 * pullStrength

      // Dynamic border radius for organic blob effect
      const baseRadius = 24
      const radiusVariation = 20 * intensity * attraction
      const organicRadius = baseRadius + radiusVariation * (1 + Math.sin(Date.now() * 0.001) * 0.2)

      // Update target values
      targetTransformRef.current = {
        scaleX,
        scaleY,
        translateX: deformX,
        translateY: deformY,
        borderRadius: organicRadius,
      }

      // Update CSS custom properties for gradients (only on background)
      background.style.setProperty("--mouse-x", `${x}%`)
      background.style.setProperty("--mouse-y", `${y}%`)
      background.style.setProperty("--shimmer-x", `${x - 50}%`)
      background.style.setProperty("--shimmer-y", `${y - 50}%`)
    }

    const handleMouseEnter = () => {
      animate()
    }

    const handleMouseLeave = () => {
      // Reset to default state
      targetTransformRef.current = {
        scaleX: 1,
        scaleY: 1,
        translateX: 0,
        translateY: 0,
        borderRadius: 24,
      }

      background.style.setProperty("--mouse-x", "50%")
      background.style.setProperty("--mouse-y", "50%")
      background.style.setProperty("--shimmer-x", "-100%")
      background.style.setProperty("--shimmer-y", "-100%")
    }

    const handleClick = (e: MouseEvent) => {
      const rect = element.getBoundingClientRect()
      const x = e.clientX - rect.left
      const y = e.clientY - rect.top

      // Create ripple effect
      const rippleId = Date.now()
      setRipples((prev) => [...prev, { id: rippleId, x, y }])

      // Remove ripple after animation
      setTimeout(() => {
        setRipples((prev) => prev.filter((ripple) => ripple.id !== rippleId))
      }, 800)
    }

    element.addEventListener("mousemove", handleMouseMove)
    element.addEventListener("mouseenter", handleMouseEnter)
    element.addEventListener("mouseleave", handleMouseLeave)
    element.addEventListener("click", handleClick)

    return () => {
      element.removeEventListener("mousemove", handleMouseMove)
      element.removeEventListener("mouseenter", handleMouseEnter)
      element.removeEventListener("mouseleave", handleMouseLeave)
      element.removeEventListener("click", handleClick)

      if (animationFrameRef.current) {
        cancelAnimationFrame(animationFrameRef.current)
      }
    }
  }, [intensity, viscosity])

  return (
    <>
      {/* SVG Filter for liquid blob effect */}
      <svg className="liquid-svg-filter">
        <defs>
          <filter id="liquid-filter">
            <feGaussianBlur in="SourceGraphic" stdDeviation="2" result="blur" />
            <feColorMatrix
              in="blur"
              mode="matrix"
              values="1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 15 -7"
              result="liquid"
            />
            <feComposite in="SourceGraphic" in2="liquid" operator="over" />
          </filter>
        </defs>
      </svg>

      <div ref={elementRef} className={`liquid-container ${className}`}>
        {/* Background layer with all blur effects */}
        <div ref={backgroundRef} className="liquid-background" />

        {/* Content layer - completely separate from blur effects */}
        <div className="liquid-content">{children}</div>

        {/* Ripple effects */}
        {ripples.map((ripple) => (
          <div
            key={ripple.id}
            className="liquid-ripple"
            style={{
              left: ripple.x - 25,
              top: ripple.y - 25,
              width: 50,
              height: 50,
            }}
          />
        ))}
      </div>
    </>
  )
}
