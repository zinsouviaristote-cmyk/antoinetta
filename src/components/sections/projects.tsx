"use client"

import { useMemo, useState } from "react"
import Link from "next/link"
import { ExternalLink, ArrowRight } from "lucide-react"

import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { projects, type Project } from "@/content/portfolio"

const ALL_TAG = "Tous"

// Titres des 6 projets à afficher sur l'accueil
const FEATURED_TITLES = [
  "Petits Savants",
  "WellSteven",
  "CEFORA Formation",
  "Aure-a",
  "Luxhe",
  "SchoolFlow",
]

// Langages et technologies essentiels uniquement
const TECH_TAGS = ["Next.js", "React", "TypeScript", "Tailwind CSS", "AI", "SaaS"]

export function ProjectsSection() {
  const featuredProjects = useMemo(() => {
    return projects.filter((p) =>
      FEATURED_TITLES.some(
        (title) => title.toLowerCase() === p.title.toLowerCase()
      )
    )
  }, [])

  const tags = useMemo(() => {
    const unique = new Set<string>()
    for (const project of featuredProjects) {
      for (const tag of project.tags) {
        if (TECH_TAGS.includes(tag)) {
          unique.add(tag)
        }
      }
    }
    return [ALL_TAG, ...Array.from(unique)]
  }, [featuredProjects])

  const [activeTag, setActiveTag] = useState(ALL_TAG)

  const displayedProjects =
    activeTag === ALL_TAG
      ? featuredProjects
      : featuredProjects.filter((project) => project.tags.includes(activeTag))

  return (
    <Section id="projects">
      <Reveal>
        <div className="flex items-end justify-between md:justify-start md:gap-3">
          <SectionHeading eyebrow="Projets" title="Réalisations récentes" />

          <Link
            href="/projets"
            aria-label="Voir tous les projets"
            className="group inline-flex items-center text-muted-foreground transition-colors hover:text-brand-text md:mb-1"
          >
            <ArrowRight className="size-6 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>
        </div>
      </Reveal>

      <Tabs value={activeTag} onValueChange={setActiveTag} className="mt-8">
        <Reveal delay={0.1}>
          {tags.length > 1 && (
            <TabsList className="h-auto flex flex-wrap items-center justify-start gap-2.5 bg-transparent p-0">
              {tags.map((tag) => (
                <TabsTrigger
                  key={tag}
                  value={tag}
                  className="rounded-full border border-border bg-transparent px-4 py-1.5 text-xs sm:text-sm text-muted-foreground shadow-none transition-colors data-[state=active]:border-brand/50 data-[state=active]:bg-brand/10 data-[state=active]:text-brand-text dark:data-[state=active]:border-brand/50 dark:data-[state=active]:bg-brand/10 dark:data-[state=active]:text-brand-text"
                >
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
          )}
        </Reveal>

        <TabsContent value={activeTag} className="mt-8 pt-2">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {displayedProjects.map((project, index) => (
              <Reveal key={project.title} delay={index * 0.08}>
                <ProjectCard project={project} />
              </Reveal>
            ))}
          </div>
        </TabsContent>
      </Tabs>
    </Section>
  )
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <Card className="group flex h-full flex-col gap-0 overflow-hidden border-border/70 bg-card/60 py-0 transition-all duration-300 hover:-translate-y-1.5 hover:border-brand/50 hover:shadow-[0_24px_48px_-28px_color-mix(in_oklch,var(--brand)_55%,transparent)]">
      <CardHeader className="gap-1.5 pt-5">
        <CardTitle className="text-base">{project.title}</CardTitle>
        <CardDescription>{project.description}</CardDescription>
      </CardHeader>

      <CardContent className="flex flex-wrap gap-2 py-3">
        {project.tags.map((tag) => (
          <Badge
            key={tag}
            variant="outline"
            className="border-brand/20 bg-brand/10 font-normal text-brand-text"
          >
            {tag}
          </Badge>
        ))}
      </CardContent>

      <CardFooter className="mt-auto gap-4 border-t border-border/60 pt-4 pb-5">
        <a
          href={project.live}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <ExternalLink className="size-4" />
          Démo
        </a>
      </CardFooter>
    </Card>
  )
}