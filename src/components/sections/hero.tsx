import Image from "next/image"
import { MapPin } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { HeroToolChips } from "@/components/sections/hero-tool-chips"
import { Button } from "@/components/ui/button"
import { hero, profile } from "@/content/portfolio"

export function HeroSection() {
  return (
    <section
      id="hero"
      className="scroll-mt-20 flex min-h-[calc(100svh-4rem)] items-center overflow-x-clip"
    >
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
              <span className="text-brand">{hero.headline}</span>
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
          <div className="relative isolate mx-auto w-full max-w-[260px] sm:max-w-sm lg:max-w-md">
            <div
              aria-hidden="true"
              className="absolute left-1/2 top-1/2 -z-10 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(closest-side,color-mix(in_oklch,var(--brand)_50%,transparent),transparent_75%)] blur-3xl"
            />

            <div
              aria-hidden="true"
              className="absolute -right-4 top-6 bottom-12 hidden w-px bg-gradient-to-b from-transparent via-brand/50 to-transparent sm:block lg:-right-6"
            />

            <div className="relative aspect-[1002/1435]">
              <Image
                src="/images/antoinetta.png"
                alt="Portrait d'Antoinetta Amoussou"
                fill
                priority
                unoptimized
                className="object-contain [mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)] [-webkit-mask-image:linear-gradient(to_bottom,black_82%,transparent_100%)]"
              />
            </div>

            <HeroToolChips />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
