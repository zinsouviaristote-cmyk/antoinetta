"use client"

import { type ChangeEvent, type FormEvent, useId, useState } from "react"
import { Mail, MapPin, Phone } from "lucide-react"
import { toast } from "sonner"

import { Reveal } from "@/components/reveal"
import { Section } from "@/components/section"
import { SectionHeading } from "@/components/section-heading"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { contact, profile } from "@/content/portfolio"

// Pas de backend ici : le formulaire ouvre le client mail du visiteur via un
// lien "mailto:" pré-rempli avec les champs saisis. Pour recevoir de vraies
// soumissions sans dépendre d'un client mail (ex. Formspree, https://formspree.io) :
//   1. Créez un formulaire sur le service choisi et récupérez son endpoint.
//   2. Renseignez-le ci-dessous.
//   3. Décommentez l'appel `fetch` dans `handleSubmit`.
// eslint-disable-next-line @typescript-eslint/no-unused-vars -- utilisé une fois décommenté dans handleSubmit
const FORMSPREE_ENDPOINT = "" // ex. "https://formspree.io/f/abcdwxyz"

interface FormValues {
  name: string
  email: string
  message: string
}

const EMPTY_VALUES: FormValues = { name: "", email: "", message: "" }

const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

function validate(values: FormValues) {
  const errors: Partial<FormValues> = {}
  if (!values.name.trim()) errors.name = "Votre nom est requis."
  if (!values.email.trim()) {
    errors.email = "Votre email est requis."
  } else if (!EMAIL_PATTERN.test(values.email.trim())) {
    errors.email = "Adresse email invalide."
  }
  if (!values.message.trim()) errors.message = "Un message est requis."
  return errors
}

export function ContactSection() {
  const [values, setValues] = useState<FormValues>(EMPTY_VALUES)
  const [errors, setErrors] = useState<Partial<FormValues>>({})
  const nameId = useId()
  const emailId = useId()
  const messageId = useId()

  function handleChange(field: keyof FormValues) {
    return (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
      const value = event.target.value
      setValues((prev) => ({ ...prev, [field]: value }))
      setErrors((prev) => ({ ...prev, [field]: undefined }))
    }
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()

    const nextErrors = validate(values)
    setErrors(nextErrors)
    if (Object.keys(nextErrors).length > 0) return

    // --- Formspree (optionnel) ---
    // if (FORMSPREE_ENDPOINT) {
    //   fetch(FORMSPREE_ENDPOINT, {
    //     method: "POST",
    //     headers: { "Content-Type": "application/json", Accept: "application/json" },
    //     body: JSON.stringify(values),
    //   })
    // }

    const subject = `Message de ${values.name} via le portfolio`
    const body = `${values.message}\n\n— ${values.name} (${values.email})`
    window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`

    toast.success("Merci, votre message est prêt à être envoyé")
    setValues(EMPTY_VALUES)
    setErrors({})
  }

  return (
    <Section id="contact">
      <Reveal>
        <SectionHeading eyebrow="Contact" title={contact.heading} />
      </Reveal>

      <div className="mt-12 grid gap-12 lg:grid-cols-2 lg:gap-16">
        <div className="flex flex-col gap-8">
          <Reveal delay={0.05}>
            <p className="max-w-[65ch] text-lg text-muted-foreground">
              {contact.text}
            </p>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="flex flex-col gap-4">
              <a
                href={`mailto:${profile.email}`}
                className="group flex items-center gap-3 rounded-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-text">
                  <Mail className="size-4" />
                </span>
                <span className="text-foreground transition-colors group-hover:text-brand-text">
                  {profile.email}
                </span>
              </a>

              <a
                href={`tel:${profile.phone.replace(/\s+/g, "")}`}
                className="group flex items-center gap-3 rounded-sm text-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
              >
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-text">
                  <Phone className="size-4" />
                </span>
                <span className="text-foreground transition-colors group-hover:text-brand-text">
                  {profile.phone}
                </span>
              </a>

              <div className="flex items-center gap-3 text-sm">
                <span className="flex size-9 shrink-0 items-center justify-center rounded-lg bg-brand/10 text-brand-text">
                  <MapPin className="size-4" />
                </span>
                <span className="text-foreground">{profile.location}</span>
              </div>
            </div>
          </Reveal>
        </div>

        <Reveal delay={0.15}>
          <form noValidate onSubmit={handleSubmit} className="flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor={nameId}>Nom</Label>
              <Input
                id={nameId}
                name="name"
                autoComplete="name"
                required
                value={values.name}
                onChange={handleChange("name")}
                aria-invalid={!!errors.name}
                aria-describedby={errors.name ? `${nameId}-error` : undefined}
              />
              {errors.name && (
                <p id={`${nameId}-error`} className="text-sm text-destructive">
                  {errors.name}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor={emailId}>Email</Label>
              <Input
                id={emailId}
                name="email"
                type="email"
                autoComplete="email"
                required
                value={values.email}
                onChange={handleChange("email")}
                aria-invalid={!!errors.email}
                aria-describedby={errors.email ? `${emailId}-error` : undefined}
              />
              {errors.email && (
                <p id={`${emailId}-error`} className="text-sm text-destructive">
                  {errors.email}
                </p>
              )}
            </div>

            <div className="flex flex-col gap-2">
              <Label htmlFor={messageId}>Message</Label>
              <Textarea
                id={messageId}
                name="message"
                rows={5}
                required
                value={values.message}
                onChange={handleChange("message")}
                aria-invalid={!!errors.message}
                aria-describedby={errors.message ? `${messageId}-error` : undefined}
              />
              {errors.message && (
                <p id={`${messageId}-error`} className="text-sm text-destructive">
                  {errors.message}
                </p>
              )}
            </div>

            <Button type="submit" size="lg" className="self-start">
              Envoyer le message
            </Button>
          </form>
        </Reveal>
      </div>
    </Section>
  )
}
