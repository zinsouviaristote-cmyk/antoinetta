import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { education, experience } from "@/content/portfolio"

export function ExperienceSection() {
  return (
    <Section id="experience">
      <Reveal>
        <SectionHeading eyebrow="Expérience" title="Mon parcours" />
      </Reveal>

      <div className="mt-12">
        <Reveal>
          <h3 className="mb-6 text-lg font-semibold tracking-tight">
            Expérience professionnelle
          </h3>
        </Reveal>

        <div className="space-y-8">
          {experience.map((entry, index) => {
            const isLast = index === experience.length - 1

            return (
              <Reveal key={`${entry.role}-${entry.period}`} delay={index * 0.1}>
                <div className="group flex gap-5 sm:gap-6">
                  <div className="hidden w-40 shrink-0 pt-1 text-right font-mono text-sm whitespace-nowrap text-muted-foreground sm:block">
                    {entry.period}
                  </div>

                  <div className="flex flex-col items-center">
                    <span className="mt-1.5 size-3 shrink-0 rounded-full border-2 border-border bg-background transition-colors duration-300 group-hover:border-brand group-hover:bg-brand" />
                    {!isLast && (
                      <span
                        aria-hidden="true"
                        className="mt-1 w-px flex-1 bg-border"
                      />
                    )}
                  </div>

                  <div className="-mt-1 flex-1 rounded-xl border border-transparent p-4 pt-1 transition-colors duration-300 group-hover:border-border/80 group-hover:bg-card/60">
                    <p className="font-mono text-xs text-muted-foreground sm:hidden">
                      {entry.period}
                    </p>
                    <h4 className="mt-1 font-semibold sm:mt-0">
                      {entry.role}
                      <span className="font-normal text-muted-foreground">
                        {" "}
                        · {entry.org}
                      </span>
                    </h4>
                    <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                      {entry.points.map((point) => (
                        <li key={point} className="flex gap-2.5">
                          <span
                            aria-hidden="true"
                            className="mt-[0.55rem] size-1 shrink-0 rounded-full bg-muted-foreground/50"
                          />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="mt-4 flex flex-wrap gap-2">
                      {entry.tags.map((tag) => (
                        <Badge
                          key={tag}
                          variant="outline"
                          className="border-brand/20 bg-brand/10 font-normal text-brand-text"
                        >
                          {tag}
                        </Badge>
                      ))}
                    </div>
                  </div>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>

      <div className="mt-16">
        <Reveal>
          <h3 className="mb-6 text-lg font-semibold tracking-tight">
            Formation
          </h3>
        </Reveal>

        <div className="space-y-4">
          {education.map((entry, index) => (
            <Reveal key={entry.title} delay={index * 0.08}>
              <div className="flex flex-col gap-1 border-b border-border/60 pb-4 last:border-b-0 last:pb-0 sm:flex-row sm:items-baseline sm:gap-4">
                <span className="shrink-0 font-mono text-sm whitespace-nowrap text-muted-foreground sm:w-40">
                  {entry.period}
                </span>
                <div>
                  <p className="font-medium">{entry.title}</p>
                  {entry.org && (
                    <p className="text-sm text-muted-foreground">{entry.org}</p>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  )
}
