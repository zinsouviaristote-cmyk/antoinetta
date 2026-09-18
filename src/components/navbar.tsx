"use client"

import { useEffect, useState } from "react"
import { Menu } from "lucide-react"
import { motion, useReducedMotion } from "framer-motion"
import { cn } from "cn"

import { ThemeToggle } from "@/components/theme-toggle"
import { Button } from "@/components/ui/button"
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet"
import { useScrollSpy } from "@/hooks/use-scroll-spy"

const NAV_ITEMS = [
  { id: "about", label: "À propos" },
  { id: "skills", label: "Compétences" },
  { id: "projects", label: "Projets" },
  { id: "experience", label: "Expérience" },
  { id: "contact", label: "Contact" },
] as const

const NAV_IDS = NAV_ITEMS.map((item) => item.id)

export function Navbar() {
  const activeId = useScrollSpy(NAV_IDS)
  const shouldReduceMotion = useReducedMotion()
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener("scroll", onScroll, { passive: true })
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={cn(
        "sticky top-0 z-50 border-b border-border/50 backdrop-blur-md transition-colors duration-300 supports-[backdrop-filter]:bg-background/60",
        scrolled
          ? "bg-background/90 shadow-sm supports-[backdrop-filter]:bg-background/80"
          : "bg-background/70"
      )}
    >
      <div
        className={cn(
          "mx-auto flex w-full max-w-5xl items-center justify-between px-6 transition-[height] duration-300 sm:px-10",
          scrolled ? "h-14" : "h-16"
        )}
      >
        <a
          href="/"
          className="rounded-sm font-mono text-lg font-semibold tracking-tight focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
        >
          Antoinetta
        </a>

        <nav className="hidden items-center gap-6 md:flex" aria-label="Navigation principale">
          {NAV_ITEMS.map(({ id, label }) => {
            const isActive = activeId === id
            return (
              <a
                key={id}
                href={`#${id}`}
                aria-current={isActive ? "true" : undefined}
                className={cn(
                  "relative rounded-sm px-1 py-2 text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                  isActive
                    ? "text-foreground"
                    : "text-muted-foreground hover:text-foreground"
                )}
              >
                {label}
                {isActive && (
                  <motion.span
                    layoutId="nav-active-indicator"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-brand"
                    transition={
                      shouldReduceMotion
                        ? { duration: 0 }
                        : { type: "spring", stiffness: 380, damping: 30 }
                    }
                  />
                )}
              </a>
            )
          })}
        </nav>

        <div className="flex items-center gap-2">
          <ThemeToggle />

          <Sheet open={open} onOpenChange={setOpen}>
            <SheetTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                className="md:hidden"
                aria-label="Ouvrir le menu de navigation"
              >
                <Menu className="size-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right">
              <SheetHeader>
                <SheetTitle>Menu</SheetTitle>
                <SheetDescription className="sr-only">
                  Liens de navigation vers les sections du site
                </SheetDescription>
              </SheetHeader>
              <nav
                className="flex flex-col gap-1 px-4"
                aria-label="Navigation mobile"
              >
                {NAV_ITEMS.map(({ id, label }) => {
                  const isActive = activeId === id
                  return (
                    <a
                      key={id}
                      href={`#${id}`}
                      onClick={() => setOpen(false)}
                      aria-current={isActive ? "true" : undefined}
                      className={cn(
                        "rounded-md px-3 py-2 text-base font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
                        isActive
                          ? "bg-secondary text-foreground"
                          : "text-muted-foreground hover:bg-secondary hover:text-foreground"
                      )}
                    >
                      {label}
                    </a>
                  )
                })}
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
