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
    mobileSrc: "/media/markets/ai-backup-hero-mobile.jpg",
    alt: "Camo Mission Power System installed in a data center",
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
        imageAlt: "Tactical power station installed in a data center",
        href: "/products#titan",
      },
      {
        title: "Zero-Downtime Operations",
        body: "Uninterrupted power for critical systems.",
        imageSrc: "/media/markets/ai-backup-feature-zero-downtime.png",
        imageAlt: "Rise Mission Power unit operating in a control room",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Intelligent Energy Control",
        body: "Smarter power for a resilient world.",
        imageSrc: "/media/markets/ai-backup-feature-energy-control.png",
        imageAlt: "Industrial drone operations facility powered by hydrogen backup",
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
    imageAlt: "Industrial control room at dusk with mission-critical backup power",
    benefits: [
      {
        title: "Clean & Reliable Power",
        body: "Low-emission solutions for a sustainable tomorrow.",
        imageSrc: "/media/markets/ai-backup-benefit-clean.png",
        imageAlt: "Rise Mission Power station operating in mountain terrain",
      },
      {
        title: "Scalable Deployment",
        body: "Modular systems that grow with your power demands.",
        imageSrc: "/media/markets/ai-backup-benefit-scalable.png",
        imageAlt: "Rugged telecom power station in mountain terrain",
      },
      {
        title: "Built For Any Environment",
        body: "Rugged, reliable, and ready for the world's toughest conditions.",
        imageSrc: "/media/markets/ai-backup-benefit-environment.png",
        imageAlt: "Rise Mission Power system in a technical server room",
      },
      {
        title: "Lower Total Cost Of Ownership",
        body: "More uptime. Less risk. Greater long-term value.",
        imageSrc: "/media/markets/ai-backup-benefit-tco.png",
        imageAlt: "Technician inspecting a rugged mission generator",
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
        imageAlt: "Modern hydrogen plant with solar fields",
      },
      {
        number: "02",
        title: "Store",
        body: "Store and distribute for flexible use.",
        imageSrc: "/media/markets/ai-backup-step-store.png",
        imageAlt: "Inventory scan in the Rise Mission Power energy warehouse",
      },
      {
        number: "03",
        title: "Generate",
        body: "Generate reliable power with Rise Mission Power systems.",
        imageSrc: "/media/markets/ai-backup-step-generate.png",
        imageAlt: "Tactical power station at a mountain telecom site",
      },
      {
        number: "04",
        title: "Keep Online",
        body: "Keep critical infrastructure online and resilient anywhere in the world.",
        imageSrc: "/media/markets/ai-backup-step-keep-online.png",
        imageAlt: "Off-grid environmental monitoring station staying online",
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
        imageAlt: "Rise Mission Power in an industrial utility room",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Medical",
        body: "Life-saving power when it matters most.",
        imageSrc: "/media/markets/ai-backup-app-medical.png",
        imageAlt: "Stormy field command power station",
        href: "/contact",
      },
      {
        title: "Telecommunications",
        body: "Keeping our communities connected.",
        imageSrc: "/media/markets/ai-backup-app-telecom.png",
        imageAlt: "Rise Mission Power field command post",
        href: "/markets/commercial",
      },
      {
        title: "Industrial",
        body: "Powering a stronger, more resilient world.",
        imageSrc: "/media/markets/ai-backup-app-industrial.png",
        imageAlt: "Rise Mission Power at a worksite",
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
      "Rise Mission Power energy management dashboard showing fleet status and output",
  },
};
