"use client"

import { useEffect, useState } from "react"
import { AnimatePresence, motion, useReducedMotion } from "framer-motion"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme()
  const [mounted, setMounted] = useState(false)
  const shouldReduceMotion = useReducedMotion()

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect -- guards against SSR/client theme hydration mismatch
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <Button variant="ghost" size="icon" aria-label="Changer de thème" disabled>
        <Sun className="size-5" />
      </Button>
    )
  }

  const isDark = resolvedTheme === "dark"

  return (
    <Button
      variant="ghost"
      size="icon"
      aria-label={isDark ? "Activer le thème clair" : "Activer le thème sombre"}
      onClick={() => setTheme(isDark ? "light" : "dark")}
      className="overflow-hidden"
    >
      <AnimatePresence mode="wait" initial={false}>
        {isDark ? (
          <motion.span
            key="sun"
            initial={shouldReduceMotion ? false : { rotate: -90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { rotate: 90, opacity: 0, scale: 0.5 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="flex"
          >
            <Sun className="size-5" />
          </motion.span>
        ) : (
          <motion.span
            key="moon"
            initial={shouldReduceMotion ? false : { rotate: 90, opacity: 0, scale: 0.5 }}
            animate={{ rotate: 0, opacity: 1, scale: 1 }}
            exit={shouldReduceMotion ? undefined : { rotate: -90, opacity: 0, scale: 0.5 }}
            transition={{ duration: shouldReduceMotion ? 0 : 0.25, ease: "easeInOut" }}
            className="flex"
          >
            <Moon className="size-5" />
          </motion.span>
        )}
      </AnimatePresence>
    </Button>
  )
}
