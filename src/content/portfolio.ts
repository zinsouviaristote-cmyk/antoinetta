// Contenu éditable du portfolio — modifier uniquement ce fichier pour mettre à jour les textes, projets, expériences et liens.

export interface Profile {
  name: string
  role: string
  location: string
  availability: string
  email: string
  phone: string
  socials: {
    github: string
    linkedin: string
    instagram: string
    whatsapp: string
  }
}

export interface Hero {
  greeting: string
  headline: string
  tagline: string
  ctaPrimary: string
  ctaSecondary: string
}

export type About = string[]

export interface SkillGroup {
  category: string
  items: string[]
}

export interface Project {
  title: string
  description: string
  tags: string[]
  live: string
  github: string
  image: string | null
  alt: string
}

export interface ExperienceEntry {
  period: string
  role: string
  org: string
  points: string[]
  tags: string[]
}

export interface EducationEntry {
  period: string
  title: string
  org?: string
}

export interface Contact {
  heading: string
  text: string
}

export const profile: Profile = {
  name: "Antoinetta Amoussou",
  role: "Développeuse web full-stack",
  location: "Cotonou, Bénin",
  availability: "Disponible pour de nouveaux projets",
  email: "antoinettaams@gmail.com",
  phone: "+229 01 53 99 83 59",
  socials: {
    github: "#", // PLACEHOLDER
    linkedin: "#", // PLACEHOLDER
    instagram: "#", // PLACEHOLDER
    whatsapp: "#", // PLACEHOLDER — deviendra un lien https://wa.me/
  },
}

export const hero: Hero = {
  greeting: "Bonjour, je suis Antoinetta",
  headline: "Développeuse web full-stack",
  tagline:
    "Je conçois et développe des sites et applications web modernes, rapides et soignés, avec un vrai souci du détail et de l'expérience utilisateur.",
  ctaPrimary: "Voir mes projets",
  ctaSecondary: "Me contacter",
}

export const about: About = [
  "Diplômée en développement web et passionnée par la programmation, l'innovation et la conception d'interfaces, je crée des expériences web claires et efficaces. Mon parcours en design graphique me pousse à soigner autant l'esthétique que le code.",
  "J'accompagne des entreprises locales dans la création et la refonte de leurs sites, ainsi que dans le développement d'applications web. Toujours en apprentissage, j'aime relever de nouveaux défis techniques.",
]

export const skills: SkillGroup[] = [
  {
    category: "Développement",
    items: ["React", "Next.js", "JavaScript", "Tailwind CSS", "HTML", "CSS"],
  },
  {
    category: "Outils",
    items: ["Git", "GitHub", "VS Code"],
  },
  {
    category: "Design",
    items: ["Adobe Photoshop", "Adobe Illustrator"],
  },
  {
    category: "Langues",
    items: ["Français (natif)", "Mina (natif)", "Anglais (intermédiaire)"],
  },
]

export const projects: Project[] = [
  {
    title: "Site vitrine — Entreprise locale",
    description:
      "PLACEHOLDER — courte description du projet, du problème résolu et du résultat.",
    tags: ["Next.js", "Tailwind CSS", "React"],
    live: "#", // PLACEHOLDER
    github: "#", // PLACEHOLDER
    image: null, // PLACEHOLDER
    alt: "Aperçu du site vitrine (à ajouter)",
  },
  {
    title: "Refonte de site web",
    description:
      "PLACEHOLDER — refonte complète : design, performances et responsive.",
    tags: ["React", "Tailwind CSS"],
    live: "#", // PLACEHOLDER
    github: "#", // PLACEHOLDER
    image: null, // PLACEHOLDER
    alt: "Aperçu de la refonte (à ajouter)",
  },
  {
    title: "Application web",
    description:
      "PLACEHOLDER — application web interactive développée avec React/Next.js.",
    tags: ["Next.js", "JavaScript"],
    live: "#", // PLACEHOLDER
    github: "#", // PLACEHOLDER
    image: null, // PLACEHOLDER
    alt: "Aperçu de l'application web (à ajouter)",
  },
]

export const experience: ExperienceEntry[] = [
  {
    period: "2024 — Aujourd'hui",
    role: "Développeuse web",
    org: "Freelance / Projets clients",
    points: [
      "Réalisation de sites web pour des entreprises locales",
      "Refonte de sites web existants",
      "Développement d'une application web",
    ],
    tags: ["React", "Next.js", "Tailwind CSS"],
  },
]

export const education: EducationEntry[] = [
  {
    period: "2024",
    title: "Formation en développement web full-stack",
  },
  {
    period: "—",
    title: "Formation en design graphique",
  },
  {
    period: "2023 — 2024",
    title: "Baccalauréat série D",
    org: "Collège Catholique Mgr Isidore De Souza",
  },
]

export const contact: Contact = {
  heading: "Travaillons ensemble",
  text: "Un projet, une idée ou une opportunité ? Écrivez-moi, je réponds rapidement.",
}
