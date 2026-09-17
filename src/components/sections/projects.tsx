"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import { ExternalLink, ImageOff } from "lucide-react"

import { GithubIcon } from "@/components/icons/brand-icons"
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

// Pour publier de vraies captures d'écran : déposer les fichiers dans
// `public/images/projects/` (ex. "public/images/projects/site-vitrine.png"),
// puis renseigner `image: "/images/projects/site-vitrine.png"` pour le projet
// correspondant dans `src/content/portfolio.ts`. Pour les vrais liens,
// remplacer les `live` / `github` marqués "#" (PLACEHOLDER) du même fichier
// par l'URL de démo et le dépôt GitHub réels.

const ALL_TAG = "Tous"

export function ProjectsSection() {
  const tags = useMemo(() => {
    const unique = new Set<string>()
    for (const project of projects) {
      for (const tag of project.tags) unique.add(tag)
    }
    return [ALL_TAG, ...unique]
  }, [])

  const [activeTag, setActiveTag] = useState(ALL_TAG)

  const filteredProjects =
    activeTag === ALL_TAG
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag))

  return (
    <Section id="projects">
      <Reveal>
        <SectionHeading eyebrow="Projets" title="Réalisations récentes" />
      </Reveal>

      <Tabs value={activeTag} onValueChange={setActiveTag} className="mt-12 gap-0">
        {tags.length > 2 && (
          <Reveal delay={0.1}>
            <TabsList className="h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
              {tags.map((tag) => (
                <TabsTrigger
                  key={tag}
                  value={tag}
                  className="rounded-full border border-border bg-transparent px-3.5 py-1.5 text-muted-foreground shadow-none data-[state=active]:border-brand/40 data-[state=active]:bg-brand/10 data-[state=active]:text-brand-text data-[state=active]:shadow-none dark:data-[state=active]:border-brand/40 dark:data-[state=active]:bg-brand/10 dark:data-[state=active]:text-brand-text"
                >
                  {tag}
                </TabsTrigger>
              ))}
            </TabsList>
          </Reveal>
        )}

        <TabsContent value={activeTag} className="mt-10">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredProjects.map((project, index) => (
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
      <div className="relative aspect-[16/10] w-full overflow-hidden bg-muted">
        {project.image ? (
          <Image
            src={project.image}
            alt={project.alt}
            fill
            sizes="(min-width: 1024px) 360px, (min-width: 640px) 45vw, 90vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
        ) : (
          // Emplacement de la capture d'écran : tant que `image` vaut `null`
          // dans le fichier de contenu, ce bloc affiche un placeholder visible.
          <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 border-b border-dashed border-border bg-[repeating-linear-gradient(135deg,transparent,transparent_10px,var(--border)_10px,var(--border)_11px)] px-6 text-center">
            <span className="flex size-10 items-center justify-center rounded-full bg-background/80 text-muted-foreground">
              <ImageOff className="size-5" />
            </span>
            <p className="text-xs text-muted-foreground">{project.alt}</p>
            <Badge variant="outline" className="border-border bg-background/80 font-normal text-muted-foreground">
              Aperçu à venir
            </Badge>
          </div>
        )}
      </div>

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
        <a
          href={project.github}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-1.5 rounded-sm text-sm font-medium text-foreground transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          <GithubIcon className="size-4" />
          Code
        </a>
      </CardFooter>
    </Card>
  )
}
