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
    github: "https://github.com/antoinettaams",
    linkedin: "https://www.linkedin.com/in/antoinette-ams-2830743b6",
    instagram: "https://www.instagram.com/fafa.ams",
    whatsapp: "https://wa.me/2290153998359",
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
    items: [
      "JavaScript",
      "TypeScript",
      "React",
      "React Native",
      "Next.js",
      "Angular",
      "Tailwind CSS",
      "HTML",
      "CSS",
    ],
  },
  {
    category: "Bases de données & Backend",
    items: [
      "Supabase",
      "Firebase",
      "Neon",
      "MySQL",
      "phpMyAdmin",
      "Clerk",
    ],
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
    title: "Petits Savants",
    description: "Site e-commerce de présentation de cahiers d'activités pour enfants.",
    tags: ["Éducation", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "#",
    github: "https://petits-savants-nine.vercel.app/",
    image: null,
    alt: "Aperçu du projet Petits Savants",
  },
  {
    title: "WellSteven",
    description: "Site vitrine institutionnel pour un cabinet d'expertise comptable et de conseil financier.",
    tags: ["Site Vitrine", "Corporate", "Next.js", "TypeScript"],
    live: "https://www.wellsteven.com/",
    github: "#",
    image: null,
    alt: "Aperçu du site WellSteven",
  },
  {
    title: "Aure-a",
    description: "Site e-commerce / vitrine de bracelets de luxe.",
    tags: ["E-commerce", "Next.js", "React", "Tailwind CSS", "TypeScript"],
    live: "https://aure-a.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu du projet Aure-a",
  },
  {
    title: "Luxhe",
    description: "Site e-commerce / vitrine haut de gamme dédié à la vente de sacs de voyage.",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://luxhe-854g.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu du projet Luxhe",
  },
  {
    title: "CEFORA Formation",
    description: "Site vitrine de présentation officielle pour le centre de formation professionnelle CEFORA FORMATION.",
    tags: ["Site Vitrine", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://cefora.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu du site CEFORA Formation",
  },
  {
    title: "SchoolFlow",
    description: "Plateforme centralisée de gestion administrative et pédagogique pour les établissements scolaires.",
    tags: ["SaaS", "Next.js", "Éducation", "Tailwind CSS", "TypeScript"],
    live: "https://schoolflow-three.vercel.app",
    github: "#",
    image: null,
    alt: "Aperçu de la plateforme SchoolFlow",
  },
  {
    title: "Griot",
    description: "Plateforme SaaS de génération de chansons à partir de textes.",
    tags: ["SaaS", "Next.js", "AI", "Tailwind CSS", "TypeScript"],
    live: "https://griot-six.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu de la plateforme Griot",
  },
  {
    title: "CamionGo",
    description: "Plateforme de mise en relation et de gestion logistique pour le transport de marchandises.",
    tags: ["SaaS", "Next.js", "React", "Tailwind CSS", "TypeScript"],
    live: "https://camion-go.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu de la plateforme CamionGo",
  },
  {
    title: "Immo-Benin",
    description: "Plateforme immobilière facilitant la recherche, la publication et la gestion de biens au Bénin.",
    tags: ["SaaS", "Immobilier", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://www.immo-benin.com/",
    github: "#",
    image: null,
    alt: "Aperçu de la plateforme Immo-Benin",
  },
  {
    title: "Allô-Bénin",
    description: "Service en ligne et annuaire interactif pour la mise en relation avec des professionnels locaux.",
    tags: ["SaaS", "Next.js", "Services", "Tailwind CSS", "TypeScript"],
    live: "https://antoinettaams-benin-allo.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu de la plateforme Allô-Bénin",
  },
  {
    title: "Sav-Ads",
    description: "Solution SaaS dédiée à la gestion, l'analyse et l'optimisation des performances publicitaires.",
    tags: ["SaaS", "Marketing", "Dashboard", "Next.js", "TypeScript"],
    live: "https://savads.vercel.app",
    github: "#",
    image: null,
    alt: "Aperçu de la plateforme Sav-Ads",
  },
  {
    title: "Café Antoine",
    description: "Site web élégant et immersif conçu pour valoriser les services et l'ambiance du restaurant Café Antoine.",
    tags: ["Site Vitrine", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://caf-antoine-3xfz.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu du site Café Antoine",
  },
  {
    title: "Ferme Saveur & Nature",
    description: "Présentation de la ferme écologique, valorisant la production locale et les produits frais.",
    tags: ["Site Vitrine", "Agriculture", "React", "Tailwind CSS", "TypeScript"],
    live: "https://ferme-saveur-nature.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu du site Ferme Saveur & Nature",
  },
  {
    title: "Velors",
    description: "Landing page e-commerce pour semelles orthopédiques.",
    tags: ["E-commerce", "React", "Tailwind CSS", "JavaScript"],
    live: "https://velors-three.vercel.app/",
    github: "#",
    image: null,
    alt: "Aperçu de Velors Insoles",
  },
  {
    title: "RamadanBénin",
    description: "Landing page e-commerce de présentation de produits pour le Ramadan.",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://ramadan-opal-theta.vercel.app//",
    github: "#",
    image: null,
    alt: "Aperçu de Ramadan",
  },
  {
    title: "Aliver",
    description: "Site e-commerce de présentation de produits anti-transpirants.",
    tags: ["E-commerce", "Next.js", "Tailwind CSS", "TypeScript"],
    live: "https://aliver-mu.vercel.app/",
    github: "#",
    image: null,
    alt: "Aliver",
  },
  {
    title: "Cocoon",
    description: "Landing page e-commerce de présentation de coussin pour femme enceinte.",
    tags: ["Landing Page", "Design", "React", "Tailwind CSS", "TypeScript"],
    live: "https://cocoon-coral.vercel.app/",
    github: "#",
    image: null,
    alt: "Cocoon",
  },
  
  {
    title: "Inhalo",
    description: "Landing page e-commerce de présentation d'inhalateur sans produits adictifs.",
    tags: ["Landing Page", "Design", "React", "Tailwind CSS", "TypeScript"],
    live: "https://inhalo.vercel.app",
    github: "#",
    image: null,
    alt: "Inhalo",
  },
]

export const experience: ExperienceEntry[] = [
  {
    period: "2024 — Aujourd'hui",
    role: "Développeur web full-stack",
    org: "Freelance / Projets clients",
    points: [
      "Conception et développement d'applications SaaS interactives et performantes",
      "Réalisation et optimisation de sites vitrines sur mesure pour entreprises et institutions",
      "Intégration d'interfaces modernes, adaptatives (responsive) et optimisées pour l'expérience utilisateur",
    ],
    tags: [
      "Next.js",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "Supabase",
      "Firebase",
      "MySQL",
      "Clerk",
    ],
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