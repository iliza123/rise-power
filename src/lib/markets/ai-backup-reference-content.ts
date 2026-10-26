import type { AiBackupPageContent } from "./ai-backup-page-types";

/**
 * Client reference copy from the original AI BACKUP.png mockup.
 * Used on /markets/ai-backup2 so the client can compare their existing
 * content against the live /markets/ai-backup page.
 * Same section structure; wording matches the mockup.
 * Image paths live only in this file (`/media/markets/ai-backup2/`).
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
    src: "/media/markets/ai-backup2/ai-backup2-hero.png",
    mobileSrc: "/media/markets/ai-backup2/ai-backup2-hero-mobile.png",
    alt: "RISE Mission Power stations and a hydrogen canister at dusk beside a mountain lake and a lit data center",
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
        imageSrc: "/media/markets/ai-backup2/ai-backup2-feature-modular.png",
        imageAlt: "Large modular RISE power container on a wet pad at sunset with mountains behind it",
        href: "/products#titan",
      },
      {
        title: "Zero-Downtime Operations",
        body: "Uninterrupted power for critical systems.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-feature-zero-downtime.png",
        imageAlt: "Camouflage RISE hydrogen canister on a wet industrial pad at sunset",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Intelligent Energy Control",
        body: "Smarter power for a resilient world.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-feature-energy-control.png",
        imageAlt: "Wide monitor showing a live global energy map in a data center control room",
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
    imageSrc: "/media/markets/ai-backup2/ai-backup2-resilient.png",
    imageAlt: "RISE Mission Power containers outside a data center at dusk with mountains behind them",
    benefits: [
      {
        title: "Clean & Reliable Power",
        body: "Low-emission solutions for a sustainable tomorrow.",
        icon: "bolt",
      },
      {
        title: "Scalable Deployment",
        body: "Modular systems that grow with your power demands.",
        icon: "modular",
      },
      {
        title: "Built For Any Environment",
        body: "Rugged, reliable, and ready for the world's toughest conditions.",
        icon: "cycle",
      },
      {
        title: "Lower Total Cost Of Ownership",
        body: "More uptime. Less risk. Greater long-term value.",
        icon: "chart",
      },
    ],
  },

  hydrogen: {
    eyebrow: "Hydrogen Technology",
    headingBefore: "Cleaner, Stronger, Smarter Power",
    headingAccent: "Fueled By Hydrogen.",
    body: "A next-generation fuel source for backup power systems that delivers high-energy density, zero emissions, and reliable performance when it matters most.",
    imageSrc: "/media/markets/ai-backup2/ai-backup2-hydrogen.png",
    imageAlt: "RISE hydrogen canister beside stacked Mission Power units at dusk",
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
        imageSrc: "/media/markets/ai-backup2/ai-backup2-step-produce.png",
        imageAlt: "White hydrogen storage tanks marked H2 at a production facility at dusk",
      },
      {
        number: "02",
        title: "Store",
        body: "Store and distribute for flexible use.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-step-store.png",
        imageAlt: "Camouflage RISE hydrogen canister standing on a wet airfield at sunset",
      },
      {
        number: "03",
        title: "Generate",
        body: "Generate reliable power with Rise Mission Power systems.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-step-generate.png",
        imageAlt: "RISE Mission Power generator container on a wet pad at sunset",
      },
      {
        number: "04",
        title: "Keep Online",
        body: "Keep critical infrastructure online and resilient anywhere in the world.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-step-keep-online.png",
        imageAlt: "Data center with glowing server halls at dusk in front of mountains",
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
        imageSrc: "/media/markets/ai-backup2/ai-backup2-app-data-centers.png",
        imageAlt: "Rows of server racks with green status lights in a data center aisle",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Medical",
        body: "Life-saving power when it matters most.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-app-telecom-alpine.png",
        imageAlt: "Alpine medical center with a glowing cross at sunset in front of snowy mountains",
        href: "/contact",
      },
      {
        title: "Telecommunications",
        body: "Keeping our communities connected.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-app-medical.png",
        imageAlt: "Cell towers on a mountain ridge at sunset",
        href: "/markets/commercial",
      },
      {
        title: "Industrial",
        body: "Powering a stronger, more resilient world.",
        imageSrc: "/media/markets/ai-backup2/ai-backup2-app-industrial.png",
        imageAlt: "Industrial power facility with cooling louvers at sunset in front of mountains",
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
    imageSrc: "/media/markets/ai-backup2/ai-backup2-platform.png",
    imageAlt:
      "RISE fleet dashboard on an outdoor monitor beside a Mission Power unit at dusk",
  },
};
