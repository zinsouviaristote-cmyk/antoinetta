"use client"

import { useEffect, useState } from "react"
import { motion, useReducedMotion } from "framer-motion"
import type { ReactNode } from "react"

interface RevealProps {
  children: ReactNode
  className?: string
  delay?: number
  y?: number
}

export function Reveal({ children, className, delay = 0, y = 20 }: RevealProps) {
  const shouldReduceMotion = useReducedMotion()
  // useReducedMotion() resolves synchronously on the client from the real
  // media query, but SSR has no way to know it — branching the rendered
  // structure on it directly would mismatch during hydration for anyone
  // with reduced motion enabled. Gating behind a post-mount flag keeps the
  // very first client render identical to the server's, then swaps a beat
  // later (see the same pattern in ThemeToggle / HeroVisual).
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- guards against SSR/client reduced-motion hydration mismatch
    setMounted(true)
  }, [])

  if (mounted && shouldReduceMotion) {
    return <div className={className}>{children}</div>
  }

  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y, scale: 0.98 }}
      whileInView={{ opacity: 1, y: 0, scale: 1 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.5, delay, ease: [0.21, 0.47, 0.32, 0.98] }}
    >
      {children}
    </motion.div>
  )
}
