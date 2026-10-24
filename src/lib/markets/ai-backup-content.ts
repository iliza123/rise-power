import type { AiBackupPageContent } from "./ai-backup-page-types";

/**
 * Live AI Backup landing — site content for /markets/ai-backup.
 * Page-local closing CTA omitted (global ClosingCta + Footer).
 * Claims aligned with commercial callouts, FAQ, and data-centers insight.
 * Client mockup wording lives in `ai-backup-reference-content.ts` (/markets/ai-backup2).
 */
export const aiBackupPage: AiBackupPageContent = {
  eyebrow: "AI Backup",
  titleLine1: "AI Never Sleeps.",
  titleAccent: "Backup Power Shouldn't Either.",
  heroBody:
    "Mission-critical hydrogen backup for AI infrastructure, data centers, and a more resilient tomorrow — indoor-safe, zero emissions at the point of use.",
  cta: { label: "Request a Briefing", href: "/contact" },
  secondaryCta: {
    label: "View Products",
    href: "/products",
  },
  hero: {
    src: "/media/markets/ai-backup-hero-renewable.png",
    mobileSrc: "/media/markets/ai-backup-hero-renewable-mobile.png",
    alt: "RISE Mission Power stations with a hydrogen canister, wind turbines, solar panels, and a data center",
  },
  badges: [
    { label: "AI Ready" },
    { label: "Mission Critical" },
    { label: "Always-On Power" },
  ],

  features: {
    eyebrow: "Built For Always-On AI",
    items: [
      {
        title: "Modular Power Systems",
        body: "Scalable hydrogen backup that grows with AI data centers and edge facilities — add capacity as loads grow.",
        imageSrc: "/media/markets/ai-backup-feature-modular-unit.png",
        imageAlt: "Olive RISE power unit on a pad with wind turbines and mountains",
        href: "/products#titan",
      },
      {
        title: "Zero-Downtime Operations",
        body: "Instant failover in under 10 seconds. Pair with your UPS bridge for seamless handoff when the grid drops.",
        imageSrc: "/media/markets/ai-backup-feature-zero-downtime-canister.png",
        imageAlt: "RISE hydrogen canister at a harbor at sunset",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Intelligent Energy Control",
        body: "RFID-monitored cartridges track fuel level and health — clearer inventory for AI backup reserves.",
        imageSrc: "/media/markets/ai-backup-feature-energy-control-console.png",
        imageAlt: "RISE tactical command console showing a live energy map",
        href: "/products#cartridge-kit",
      },
    ],
  },

  resilient: {
    eyebrow: "Resilient Energy",
    headingBefore: "Resilient Energy For An",
    headingAccent: "Always-On World.",
    body: "Clean, scalable hydrogen backup for AI data centers and critical infrastructure — without diesel pads, exhaust, or fuel-truck dependency.",
    cta: { label: "Meet Our Products", href: "/products" },
    imageSrc: "/media/markets/ai-backup-resilient-campus.png",
    imageAlt:
      "RISE Mission Power units on a campus plaza with solar panels, wind turbines, and a glass building",
    imageFrameClassName:
      "relative aspect-video w-full overflow-hidden rounded-[7px] bg-[#101820]",
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
    body: "Rise Mission Power portable hydrogen systems deliver indoor-rated backup for AI facilities — cartridge-fueled runtime without diesel generators.",
    imageSrc: "/media/markets/ai-backup-hydrogen-sea.png",
    imageAlt:
      "RISE Mission Power units and a hydrogen canister beside the sea, with wind turbines and a hydrogen plant",
    cta: {
      label: "See How It Works",
      href: "/insights/hydrogen-power-data-centers",
    },
    bullets: [
      "Modular for multiple deployment scales — from edge rooms to facility backup.",
      "Clean, emission-free operation at the point of use.",
      "Integrates with existing UPS and power infrastructure for seamless failover.",
    ],
  },

  steps: {
    eyebrow: "How It Works",
    headingBefore: "From Hydrogen To",
    headingAccent: "Always-On Power.",
    items: [
      {
        number: "01",
        title: "Produce",
        body: "Source clean hydrogen from renewable electrolysis or industrial supply networks.",
        imageSrc: "/media/markets/ai-backup-step-produce.png",
        imageAlt: "High-tech hydrogen processing facility",
      },
      {
        number: "02",
        title: "Store",
        body: "Stockpile and distribute RFID-monitored cartridges with long shelf life for your 24–72 hour backup window.",
        imageSrc: "/media/markets/ai-backup-step-store.png",
        imageAlt: "Inventory scan in the RISE energy warehouse",
      },
      {
        number: "03",
        title: "Generate",
        body: "Run Rise-Titan or Rise-Sentinel for reliable indoor-safe power when the grid fails.",
        imageSrc: "/media/markets/ai-backup-step-generate.png",
        imageAlt: "Military power unit at golden hour",
      },
      {
        number: "04",
        title: "Keep Online",
        body: "Keep AI halls, edge nodes, and critical infrastructure online — anywhere you deploy.",
        imageSrc: "/media/markets/ai-backup-step-keep-online.png",
        imageAlt: "Rise off-grid power station in the mountains",
      },
    ],
  },

  applications: {
    eyebrow: "Applications",
    headingBefore: "Where AI Backup",
    headingAccent: "Matters Most.",
    items: [
      {
        title: "Data Centers",
        body: "High-density backup for always-on AI — critical racks, edge facilities, and server halls.",
        imageSrc: "/media/markets/ai-backup-app-data-centers.png",
        imageAlt: "Military power station in a warehouse",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Telecom",
        body: "Quiet portable power for telecom backup and edge sites that must stay connected.",
        imageSrc: "/media/markets/ai-backup-app-telecom.png",
        imageAlt: "Tactical mission power in the mountains",
        href: "/markets/commercial",
      },
      {
        title: "Medical",
        body: "Indoor-safe backup when life-critical systems cannot tolerate diesel exhaust or downtime.",
        imageSrc: "/media/markets/ai-backup-app-medical.png",
        imageAlt: "Rugged mission power station at dusk",
        href: "/contact",
      },
      {
        title: "Industrial",
        body: "Resilient hydrogen backup for industrial facilities moving off diesel generators.",
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
    body: "Monitor, manage, and optimize your entire fleet with Rise Mission Power's intelligent energy management platform — clearer status for AI backup reserves and field deployments.",
    cta: { label: "See The Platform", href: "/contact" },
    imageSrc: "/media/markets/ai-backup-platform.png",
    imageAlt:
      "Rugged mission power station in the field",
  },
};
