"use client"

import { useMemo, useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { ExternalLink, ImageOff, ArrowLeft } from "lucide-react"

import { Navbar } from "@/components/navbar"
import { Footer } from "@/components/footer"
import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
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

// Strictement limité aux langages et frameworks de programmation
const LANGUAGE_TAGS = [
  "JavaScript",
  "TypeScript",
  "React",
  "React Native",
  "Next.js",
  "Angular",
  "HTML",
  "CSS",
]

export default function AllProjectsPage() {
  // Sélectionne uniquement les filtres de langages présents dans tes projets
  const tags = useMemo(() => {
    const unique = new Set<string>()
    for (const project of projects) {
      for (const tag of project.tags) {
        if (LANGUAGE_TAGS.includes(tag)) {
          unique.add(tag)
        }
      }
    }
    return [ALL_TAG, ...Array.from(unique)]
  }, [])

  const [activeTag, setActiveTag] = useState(ALL_TAG)

  // Filtrage selon le langage sélectionné
  const filteredProjects =
    activeTag === ALL_TAG
      ? projects
      : projects.filter((project) => project.tags.includes(activeTag))

  return (
    <>
      <Navbar />
      <main className="min-h-screen pb-12">
        <Section id="all-projects" className="pt-2 sm:pt-4">
          {/* Bouton retour vers la page d'accueil */}
          <Reveal>
            <div className="mb-4">
              <Button
                asChild
                variant="ghost"
                size="sm"
                className="gap-2 text-muted-foreground hover:text-foreground"
              >
                <Link href="/">
                  <ArrowLeft className="size-4" />
                  Retour à l'accueil
                </Link>
              </Button>
            </div>
          </Reveal>

          <Reveal delay={0.05}>
            <SectionHeading
              eyebrow="Portfolio complet"
              title={`Tous mes projets & réalisations (${projects.length})`}
            />
            <p className="mt-2 max-w-2xl text-muted-foreground">
              Retrouvez ici l'ensemble de mes {projects.length} réalisations web : applications SaaS, plateformes sur mesure, sites vitrines et projets e-commerce.
            </p>
          </Reveal>

          <Tabs value={activeTag} onValueChange={setActiveTag} className="mt-6">
            {tags.length > 1 && (
              <Reveal delay={0.1}>
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
              </Reveal>
            )}

            <TabsContent value={activeTag} className="mt-6 pt-0">
              <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
                {filteredProjects.map((project, index) => (
                  <Reveal key={project.title} delay={index * 0.05}>
                    <ProjectCard project={project} />
                  </Reveal>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </Section>
      </main>
      <Footer />
    </>
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
      </CardFooter>
    </Card>
  )
}