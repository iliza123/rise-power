import type { AiBackupPageContent } from "./ai-backup-page-types";

/**
 * Client reference copy from the original AI BACKUP.png mockup.
 * Used on /markets/ai-backup2 so the client can compare their existing
 * content against the live /markets/ai-backup page.
 * Same section structure + site imagery; wording matches the mockup.
 */
export const aiBackupReferencePage: AiBackupPageContent = {
  eyebrow: "AI Backup",
  titleLine1: "AI Never Sleeps.",
  titleAccent: "Backup Power Shouldn't Either.",
  heroBody:
    "Mission-critical power solutions for AI infrastructure, data centers, and a more resilient tomorrow.",
  cta: { label: "Get a Free Demo", href: "/contact" },
  secondaryCta: {
    label: "Watch Video",
    href: "/products",
  },
  hero: {
    src: "/media/markets/ai-backup-hero.png",
    mobileSrc: "/media/markets/ai-backup-hero-mobile.png",
    alt: "Camouflaged mission power station in a server room",
  },
  badges: [
    { label: "AI Ready" },
    { label: "Mission Critical" },
    { label: "Always On Power" },
  ],

  features: {
    eyebrow: "Built For Always-On AI",
    items: [
      {
        title: "Modular Power Systems",
        body: "Scalable solutions for any environment.",
        imageSrc: "/media/markets/ai-backup-feature-modular.png",
        imageAlt: "Rugged RISE military power station",
        href: "/products#titan",
      },
      {
        title: "Zero-Downtime Operations",
        body: "Uninterrupted power for critical systems.",
        imageSrc: "/media/markets/ai-backup-feature-zero-downtime.png",
        imageAlt: "RISE mission power station",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Intelligent Energy Control",
        body: "Smarter power for a resilient world.",
        imageSrc: "/media/markets/ai-backup-feature-energy-control.png",
        imageAlt: "Industrial drone at a mountain facility",
        href: "/products#cartridge-kit",
      },
    ],
  },

  resilient: {
    eyebrow: "Resilient Energy",
    headingBefore: "Resilient Energy For An",
    headingAccent: "Always-On World.",
    body: "From data centers to remote locations, Rise Mission Power delivers clean, scalable backup power solutions that ensure uninterrupted operations for a more connected, more resilient tomorrow.",
    cta: { label: "Meet Our Products", href: "/products" },
    imageSrc: "/media/markets/ai-backup-resilient.png",
    imageAlt: "Industrial RISE power unit in a control room",
    benefits: [
      {
        title: "Clean & Reliable Power",
        body: "Low-emission solutions for a sustainable tomorrow.",
        imageSrc: "/media/markets/ai-backup-benefit-clean.png",
        imageAlt: "RISE mission power station in mountain terrain",
      },
      {
        title: "Scalable Deployment",
        body: "Modular systems that grow with your power demands.",
        imageSrc: "/media/markets/ai-backup-benefit-scalable.png",
        imageAlt: "Rugged RISE generator at a mountain telecom site",
      },
      {
        title: "Built For Any Environment",
        body: "Rugged, reliable, and ready for the world's toughest conditions.",
        imageSrc: "/media/markets/ai-backup-benefit-environment.png",
        imageAlt: "RISE mission power station in a tech lab",
      },
      {
        title: "Lower Total Cost Of Ownership",
        body: "More uptime. Less risk. Greater long-term value.",
        imageSrc: "/media/markets/ai-backup-benefit-tco.png",
        imageAlt: "Military-grade power station in a workshop",
      },
    ],
  },

  hydrogen: {
    eyebrow: "Hydrogen Technology",
    headingBefore: "Cleaner, Stronger, Smarter Power",
    headingAccent: "Fueled By Hydrogen.",
    body: "A next-generation fuel source for backup power systems that delivers high-energy density, zero emissions, and reliable performance when it matters most.",
    imageSrc: "/media/markets/ai-backup-hydrogen.png",
    imageAlt: "Rise Mission Power data center hub with hydrogen backup systems",
    cta: {
      label: "See How It Works",
      href: "/insights/hydrogen-power-data-centers",
    },
    bullets: [
      "Modular for multiple deployment scales.",
      "Clean, emission-free operation.",
      "Integrates with existing power infrastructure.",
    ],
  },

  steps: {
    eyebrow: "How It Works",
    headingBefore: "A Flexible Hydrogen",
    headingAccent: "Power Ecosystem.",
    items: [
      {
        number: "01",
        title: "Produce",
        body: "Produce clean hydrogen from renewable sources.",
        imageSrc: "/media/markets/ai-backup-step-produce.png",
        imageAlt: "High-tech hydrogen processing facility",
      },
      {
        number: "02",
        title: "Store",
        body: "Store and distribute for flexible use.",
        imageSrc: "/media/markets/ai-backup-step-store.png",
        imageAlt: "Inventory scan in the RISE energy warehouse",
      },
      {
        number: "03",
        title: "Generate",
        body: "Generate reliable power with Rise Mission Power systems.",
        imageSrc: "/media/markets/ai-backup-step-generate.png",
        imageAlt: "Military power unit at golden hour",
      },
      {
        number: "04",
        title: "Keep Online",
        body: "Keep critical infrastructure online and resilient anywhere in the world.",
        imageSrc: "/media/markets/ai-backup-step-keep-online.png",
        imageAlt: "Rise off-grid power station in the mountains",
      },
    ],
  },

  applications: {
    eyebrow: "Applications",
    headingBefore: "Supporting Critical",
    headingAccent: "Infrastructure.",
    items: [
      {
        title: "Data Centers",
        body: "High-density power for Always-On AI.",
        imageSrc: "/media/markets/ai-backup-app-data-centers.png",
        imageAlt: "Military power station in a warehouse",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Telecommunications",
        body: "Keeping our communities connected.",
        imageSrc: "/media/markets/ai-backup-app-telecom.png",
        imageAlt: "Tactical mission power in the mountains",
        href: "/markets/commercial",
      },
      {
        title: "Medical",
        body: "Life-saving power when it matters most.",
        imageSrc: "/media/markets/ai-backup-app-medical.png",
        imageAlt: "Rugged mission power station at dusk",
        href: "/contact",
      },
      {
        title: "Industrial",
        body: "Powering a stronger, more resilient world.",
        imageSrc: "/media/markets/ai-backup-app-industrial.png",
        imageAlt: "Olive green mission power at a refinery",
        href: "/markets/commercial",
      },
    ],
  },

  platform: {
    eyebrow: "Platform",
    headingBefore: "Visibility Across Every",
    headingAccent: "Power Asset.",
    body: "Monitor, manage, and optimize your entire fleet with Rise Mission Power's intelligent energy management platform.",
    cta: { label: "See The Platform", href: "/contact" },
    imageSrc: "/media/markets/ai-backup-platform.png",
    imageAlt:
      "Rugged mission power station in the field",
  },
};
