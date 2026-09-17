import { Code2, Languages, Palette, Wrench } from "lucide-react"
import type { LucideIcon } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { skills } from "@/content/portfolio"

const CATEGORY_ICONS: Record<string, LucideIcon> = {
  Développement: Code2,
  Outils: Wrench,
  Design: Palette,
  Langues: Languages,
}

export function SkillsSection() {
  return (
    <Section id="skills">
      <Reveal>
        <SectionHeading eyebrow="Compétences" title="Ce que je maîtrise" />
      </Reveal>

      <div className="mt-12 grid gap-6 sm:grid-cols-2">
        {skills.map((group, index) => {
          const Icon = CATEGORY_ICONS[group.category] ?? Code2

          return (
            <Reveal key={group.category} delay={index * 0.08}>
              <Card className="h-full bg-card/60">
                <CardHeader className="flex items-center gap-3">
                  <div className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-text">
                    <Icon className="size-5" />
                  </div>
                  <CardTitle className="text-base">{group.category}</CardTitle>
                </CardHeader>
                <CardContent className="flex flex-wrap gap-2">
                  {group.items.map((item) => (
                    <Badge
                      key={item}
                      variant="outline"
                      className="border-brand/20 bg-brand/10 font-normal text-brand-text"
                    >
                      {item}
                    </Badge>
                  ))}
                </CardContent>
              </Card>
            </Reveal>
          )
        })}
      </div>
    </Section>
  )
}
