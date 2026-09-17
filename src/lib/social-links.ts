import {
  GithubIcon,
  InstagramIcon,
  LinkedinIcon,
  WhatsappIcon,
} from "@/components/icons/brand-icons"
import { profile } from "@/content/portfolio"

export const socialLinks = [
  { href: profile.socials.github, label: "GitHub", Icon: GithubIcon },
  { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedinIcon },
  { href: profile.socials.instagram, label: "Instagram", Icon: InstagramIcon },
  { href: profile.socials.whatsapp, label: "WhatsApp", Icon: WhatsappIcon },
]
