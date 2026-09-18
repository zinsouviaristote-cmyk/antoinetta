import { MapPin } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { HeroVisual } from "@/components/sections/hero-visual"
import { Button } from "@/components/ui/button"
import { hero, profile } from "@/content/portfolio"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="relative scroll-mt-20 flex min-h-[calc(100svh-4rem)] items-center overflow-x-clip"
    >
      <div
        aria-hidden="true"
        className="hero-aurora pointer-events-none absolute -top-32 -right-24 -z-10 h-[36rem] w-[36rem] rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_22%,transparent),transparent_70%)] opacity-70 blur-3xl"
      />

      <div className="mx-auto grid w-full max-w-5xl items-center gap-16 px-6 sm:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
        <div className="order-2 flex flex-col items-center gap-6 text-center lg:order-1 lg:items-start lg:text-left">
          <Reveal>
            <p className="font-mono text-sm text-muted-foreground">
              {hero.greeting}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <h1 className="text-4xl font-semibold tracking-tight sm:text-5xl">
              {profile.name}
              <br />
              <span className="text-shimmer">{hero.headline}</span>
            </h1>
          </Reveal>

          <Reveal delay={0.2}>
            <p className="max-w-xl text-lg text-muted-foreground">
              {hero.tagline}
            </p>
          </Reveal>

          <Reveal delay={0.3}>
            <div className="flex flex-col items-center gap-3 sm:flex-row">
              <Button asChild size="lg">
                <a href="#projects">{hero.ctaPrimary}</a>
              </Button>
              <Button asChild size="lg" variant="outline">
                <a href="#contact">{hero.ctaSecondary}</a>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.4}>
            <span className="flex items-center gap-1.5 text-sm text-muted-foreground">
              <MapPin className="size-4" />
              {profile.location}
            </span>
          </Reveal>
        </div>

        <Reveal delay={0.15} className="order-1 lg:order-2">
          <HeroVisual />
        </Reveal>
      </div>
    </section>
  )
}
