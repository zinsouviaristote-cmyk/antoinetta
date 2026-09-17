"use client"

import { motion, useReducedMotion } from "framer-motion"
import type { ComponentType, SVGProps } from "react"

import {
  FigmaIcon,
  JavascriptIcon,
  NextjsIcon,
  ReactIcon,
  TailwindcssIcon,
} from "@/components/icons/tool-icons"
import { cn } from "cn"

interface ToolChip {
  label: string
  Icon: ComponentType<SVGProps<SVGSVGElement>>
  position: string
  iconClassName?: string
}

// Position des puces autour de la photo — décalages réduits sur mobile pour
// rester dans l'écran, plus prononcés dès `sm`/`lg` pour l'effet "orbite".
const TOOL_CHIPS: ToolChip[] = [
  {
    label: "React",
    Icon: ReactIcon,
    position: "-left-3 top-[6%] sm:-left-7 sm:top-[8%] lg:-left-11 lg:top-[10%]",
  },
  {
    label: "Next.js",
    Icon: NextjsIcon,
    position:
      "-right-3 top-[14%] sm:-right-7 sm:top-[16%] lg:-right-11 lg:top-[18%]",
    iconClassName: "dark:invert",
  },
  {
    label: "JavaScript",
    Icon: JavascriptIcon,
    position:
      "hidden sm:block sm:-left-9 sm:top-[50%] lg:-left-14 lg:top-[48%]",
  },
  {
    label: "Tailwind CSS",
    Icon: TailwindcssIcon,
    position:
      "-right-3 top-[58%] sm:-right-8 sm:top-[60%] lg:-right-12 lg:top-[62%]",
  },
  {
    label: "Figma",
    Icon: FigmaIcon,
    position:
      "left-[14%] -bottom-4 sm:left-[10%] sm:-bottom-7 lg:left-[6%] lg:-bottom-9",
  },
]

export function HeroToolChips() {
  const shouldReduceMotion = useReducedMotion()

  return (
    <>
      {TOOL_CHIPS.map((chip, index) => {
        const chipBody = (
          <div className="flex size-11 items-center justify-center rounded-2xl border border-border bg-card shadow-lg sm:size-12 lg:size-14">
            <chip.Icon
              className={cn("size-5 sm:size-6 lg:size-7", chip.iconClassName)}
            />
          </div>
        )

        if (shouldReduceMotion) {
          return (
            <div
              key={chip.label}
              role="img"
              aria-label={chip.label}
              className={cn("absolute z-10", chip.position)}
            >
              {chipBody}
            </div>
          )
        }

        return (
          <motion.div
            key={chip.label}
            role="img"
            aria-label={chip.label}
            className={cn("absolute z-10", chip.position)}
            initial={{ opacity: 0, scale: 0.7 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.5 + index * 0.1 }}
          >
            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{
                duration: 3 + index * 0.4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: index * 0.25,
              }}
            >
              {chipBody}
            </motion.div>
          </motion.div>
        )
      })}
    </>
  )
}
