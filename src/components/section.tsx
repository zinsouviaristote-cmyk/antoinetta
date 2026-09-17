import { cn } from "cn"
import type { ReactNode } from "react"

interface SectionProps {
  id: string
  className?: string
  children: ReactNode
}

export function Section({ id, className, children }: SectionProps) {
  return (
    <section id={id} className={cn("scroll-mt-20 py-20 sm:py-28", className)}>
      <div className="mx-auto w-full max-w-5xl px-6 sm:px-10">{children}</div>
    </section>
  )
}
