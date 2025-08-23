"use client"

import { useRef, useEffect, useState, RefObject, Suspense } from "react"
import Image from "next/image"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"
import { Canvas, useThree } from "@react-three/fiber"
import { useVideoTexture } from "@react-three/drei"

// Register the GSAP ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger)

interface HeroVideoProps {
  triggerRef: RefObject<HTMLElement>;
}

/**
 * A GPU-accelerated video plane controlled by scroll
 */
function VideoPlane({ videoSrc, videoRef }: { videoSrc: string, videoRef: RefObject<HTMLVideoElement> }) {
  const texture = useVideoTexture(videoSrc, {
    unsuspend: 'canplaythrough',
    start: false, // Don't auto-start the video
    crossOrigin: 'Anonymous',
    muted: true,
    loop: false,
    playsInline: true
  })
  
  const { viewport } = useThree()

  // Store the video element reference so GSAP can control it
  useEffect(() => {
    if (texture && texture.image && videoRef) {
      const video = texture.image as HTMLVideoElement
      video.pause() // Ensure it's paused
      video.currentTime = 0 // Start at beginning
      videoRef.current = video
    }
  }, [texture, videoRef])

  const videoAspectRatio = 16 / 9
  const planeWidth = viewport.width
  const planeHeight = planeWidth / videoAspectRatio

  return (
    <mesh scale={[planeWidth, planeHeight, 1]}>
      <planeGeometry />
      <meshBasicMaterial map={texture} toneMapped={false} />
    </mesh>
  )
}

/**
 * Hero video component with scroll-driven animation
 */
export function HeroSectionVideo({ triggerRef }: HeroVideoProps) {
  const videoElementRef = useRef<HTMLVideoElement | null>(null)
  const [videoError, setVideoError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)
  const videoSrc = "/hero_video.mp4"

  useEffect(() => {
    const triggerElement = triggerRef.current
    if (!triggerElement) return

    let scrollTriggerInstance: ScrollTrigger | null = null
    let cleanupFunction: (() => void) | null = null

    // Create ScrollTrigger immediately for pinning
    const mm = gsap.matchMedia()

    mm.add("(min-width: 768px)", () => {
      scrollTriggerInstance = ScrollTrigger.create({
        trigger: triggerElement,
        start: "top top",
        end: "bottom+=150% top",
        pin: true,
        pinSpacing: true,
        scrub: 0.5,
        onUpdate: (self) => {
          const video = videoElementRef.current
          if (video && video.duration && video.duration !== Infinity) {
            const progress = self.progress
            const targetTime = progress * video.duration
            
            // Only update if there's a meaningful difference
            if (Math.abs(video.currentTime - targetTime) > 0.1) {
              video.currentTime = targetTime
            }
          }
        }
      })

      cleanupFunction = () => {
        if (scrollTriggerInstance) {
          scrollTriggerInstance.kill()
        }
        mm.revert()
      }
    })

    // Set loading to false once ScrollTrigger is set up
    setIsLoading(false)

    return () => {
      if (cleanupFunction) {
        cleanupFunction()
      }
      ScrollTrigger.getAll().forEach(st => {
        if (st.trigger === triggerElement) {
          st.kill()
        }
      })
    }
  }, [triggerRef])

  const handleError = () => {
    setVideoError(true)
    setIsLoading(false)
  }

  return (
    <div className="mt-20 relative hidden md:block">
      <div className="relative mx-auto max-w-5xl px-4 md:px-0">
        <div className="relative aspect-video rounded-3xl overflow-hidden">
          {/* Loading Indicator */}
          {isLoading && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/50 z-10">
              <div className="w-12 h-12 border-4 border-white border-t-transparent rounded-full animate-spin"></div>
            </div>
          )}

          {/* Fallback UI */}
          {videoError && (
            <Image
              src="https://placehold.co/1280x720/f3f7fb/f87171?text=Video+Error"
              alt="Video could not be loaded"
              fill
              className="object-cover"
              unoptimized
            />
          )}

          {/* The Three.js Canvas for rendering the video */}
          {!videoError && (
            <div
              className={`transition-opacity duration-500 ${isLoading ? 'opacity-0' : 'opacity-100'}`}
              style={{ width: '100%', height: '100%' }}
            >
              <Canvas onError={handleError}>
                <Suspense fallback={null}>
                  <VideoPlane videoSrc={videoSrc} videoRef={videoElementRef} />
                </Suspense>
              </Canvas>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}