"use client"

import { useEffect, useRef, useState } from "react"
import Image from "next/image"
import { motion, useReducedMotion, useScroll, useTransform } from "framer-motion"

import { HeroToolChips } from "@/components/sections/hero-tool-chips"

export function HeroVisual() {
  const containerRef = useRef<HTMLDivElement>(null)
  const shouldReduceMotion = useReducedMotion()
  // The scroll-linked value below only matches between server and client
  // once real scroll/layout measurements exist, so it's gated behind a
  // post-mount flag (same pattern as ThemeToggle) to avoid a hydration
  // mismatch — the parallax simply switches on a beat after paint.
  const [mounted, setMounted] = useState(false)
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  })
  // Gentle drift as the hero scrolls past — a few pixels either way, never
  // enough to disturb the layout or the floating chips anchored beside it.
  const y = useTransform(scrollYProgress, [0, 1], [-18, 18])

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- guards against SSR/client scroll-parallax hydration mismatch
    setMounted(true)
  }, [])

  const enableParallax = mounted && !shouldReduceMotion

  return (
    <div
      ref={containerRef}
      className="relative isolate mx-auto w-full max-w-[260px] sm:max-w-sm lg:max-w-md"
    >
      <div
        aria-hidden="true"
        className="hero-glow absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_50%,transparent),transparent_75%)] blur-3xl"
      />

      <div
        aria-hidden="true"
        className="absolute -right-4 top-6 bottom-12 hidden w-px bg-gradient-to-b from-transparent via-brand/50 to-transparent sm:block lg:-right-6"
      />

      <motion.div
        style={enableParallax ? { y } : undefined}
        className="relative aspect-[1002/1435]"
      >
        <Image
          src="/images/antoinetta.png"
          alt="Portrait d'Antoinetta Amoussou"
          fill
          priority
          unoptimized
          className="object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
        />
      </motion.div>

      <HeroToolChips />
    </div>
  )
}
