import { profile } from "@/content/portfolio"
import { socialLinks } from "@/lib/social-links"

export function Footer() {
  return (
    <footer className="border-t border-border/50">
      <div className="mx-auto flex w-full max-w-5xl flex-col items-center gap-4 px-6 py-10 text-center sm:flex-row sm:justify-between sm:px-10 sm:text-left">
        <div>
          <p className="font-medium">{profile.name}</p>
          <p className="text-sm text-muted-foreground">
            {profile.role} · {profile.location}
          </p>
        </div>

        <div className="flex items-center gap-2">
          {socialLinks.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="rounded-full p-2 text-muted-foreground transition-colors hover:text-brand-text focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
            >
              <Icon className="size-5" />
            </a>
          ))}
        </div>
      </div>

      <div className="border-t border-border/50 py-4 text-center text-xs text-muted-foreground">
        Fait avec Next.js et Tailwind
      </div>
    </footer>
  )
}
