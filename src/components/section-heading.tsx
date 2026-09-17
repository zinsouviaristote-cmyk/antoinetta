import { cn } from "cn"

interface SectionHeadingProps {
  eyebrow: string
  title: string
  className?: string
}

export function SectionHeading({ eyebrow, title, className }: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col gap-2", className)}>
      <span className="font-mono text-sm uppercase tracking-widest text-brand-text">
        {eyebrow}
      </span>
      <h2 className="text-3xl font-semibold tracking-tight sm:text-4xl">
        {title}
      </h2>
    </div>
  )
}
