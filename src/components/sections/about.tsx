import { MapPin, Languages as LanguagesIcon } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Card, CardContent } from "@/components/ui/card"
import { about, profile, skills } from "@/content/portfolio"

const languageSummary = skills
  .find((group) => group.category === "Langues")
  ?.items.join(" · ")

export function AboutSection() {
  return (
    <Section id="about">
      <Reveal>
        <SectionHeading eyebrow="À propos" title="Qui je suis" />
      </Reveal>

      <div className="mt-12 grid gap-10 lg:grid-cols-[1fr_300px] lg:items-start lg:gap-16">
        <div className="space-y-5">
          {about.map((paragraph, index) => (
            <Reveal key={paragraph} delay={index * 0.1}>
              <p className="max-w-[65ch] text-base leading-relaxed text-muted-foreground sm:text-lg">
                {paragraph}
              </p>
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.2}>
          <Card className="bg-card/60">
            <CardContent className="space-y-5 px-6">
              <QuickFact icon={MapPin} label="Localisation" value={profile.location} />
              {languageSummary && (
                <QuickFact
                  icon={LanguagesIcon}
                  label="Langues"
                  value={languageSummary}
                />
              )}
              <div className="flex items-center gap-2.5 pt-1">
                <span className="relative flex size-2">
                  <span className="absolute inline-flex size-full animate-ping rounded-full bg-brand opacity-75" />
                  <span className="relative inline-flex size-2 rounded-full bg-brand" />
                </span>
                <span className="text-sm font-medium">
                  {profile.availability}
                </span>
              </div>
            </CardContent>
          </Card>
        </Reveal>
      </div>
    </Section>
  )
}

interface QuickFactProps {
  icon: LucideIcon
  label: string
  value: string
}

function QuickFact({ icon: Icon, label, value }: QuickFactProps) {
  return (
    <div className="flex items-start gap-3">
      <div className="mt-0.5 flex size-8 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-text">
        <Icon className="size-4" />
      </div>
      <div>
        <p className="text-xs font-medium uppercase tracking-wide text-muted-foreground">
          {label}
        </p>
        <p className="text-sm font-medium">{value}</p>
      </div>
    </div>
  )
}
