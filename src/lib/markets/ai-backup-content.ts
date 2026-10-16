/**
 * AI Backup landing — full client AI BACKUP.png section set (1–6).
 * Software-platform section omitted (no product UI).
 * Page-local closing CTA omitted (global ClosingCta + Footer).
 * Claims aligned with commercial callouts, FAQ, and data-centers insight.
 * Hero desktop image: /media/markets/ai-backup-hero.png; mobile keeps data-centers.png.
 */
export const aiBackupPage = {
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
    src: "/media/markets/ai-backup-hero.png",
    mobileSrc: "/media/insights/data-centers.png",
    alt: "Camo Mission Power System installed in a data center",
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
        imageSrc: "/media/markets/ai-backup-feature-modular.png",
        imageAlt: "Tactical power station installed in a data center",
        href: "/products#titan",
      },
      {
        title: "Zero-Downtime Operations",
        body: "Instant failover in under 10 seconds. Pair with your UPS bridge for seamless handoff when the grid drops.",
        imageSrc: "/media/markets/ai-backup-feature-zero-downtime.png",
        imageAlt: "Rise power unit operating in a control room",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Intelligent Energy Control",
        body: "RFID-monitored cartridges track fuel level and health — clearer inventory for AI backup reserves.",
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
    body: "Clean, scalable hydrogen backup for AI data centers and critical infrastructure — without diesel pads, exhaust, or fuel-truck dependency.",
    cta: { label: "Meet Our Products", href: "/products" },
    imageSrc: "/media/markets/ai-backup-resilient.png",
    imageAlt: "Industrial control room at dusk with mission-critical backup power",
    benefits: [
      {
        title: "Clean & Reliable Power",
        body: "Zero emissions at the point of use — warm air and water vapour only.",
        imageSrc: "/media/markets/ai-backup-benefit-clean.png",
        imageAlt: "Rise power station operating in mountain terrain",
      },
      {
        title: "Scalable Deployment",
        body: "Modular capacity that scales with AI loads, not fixed diesel generator sizes.",
        imageSrc: "/media/markets/ai-backup-benefit-scalable.png",
        imageAlt: "Rugged telecom power station in mountain terrain",
      },
      {
        title: "Built For Any Environment",
        body: "Indoor-safe operation for data floors, edge rooms, and space-constrained halls.",
        imageSrc: "/media/markets/ai-backup-benefit-environment.png",
        imageAlt: "Rise power system in a technical server room",
      },
      {
        title: "Lower Total Cost Of Ownership",
        body: "Avoid diesel logistics, aftertreatment, and compliance overhead over the backup lifecycle.",
        imageSrc: "/media/markets/ai-backup-benefit-tco.png",
        imageAlt: "Technician inspecting a rugged mission generator",
      },
    ],
  },

  hydrogen: {
    eyebrow: "Hydrogen Technology",
    headingBefore: "Cleaner, Stronger, Smarter Power",
    headingAccent: "Fueled By Hydrogen.",
    body: "Rise portable hydrogen systems deliver indoor-rated backup for AI facilities — cartridge-fueled runtime without diesel generators.",
    imageSrc: "/media/markets/ai-backup-hydrogen.png",
    imageAlt: "Rise Mission Power data center hub with hydrogen backup systems",
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
        imageAlt: "Modern hydrogen plant with solar fields",
      },
      {
        number: "02",
        title: "Store",
        body: "Stockpile and distribute RFID-monitored cartridges with long shelf life for your 24–72 hour backup window.",
        imageSrc: "/media/markets/ai-backup-step-store.png",
        imageAlt: "Inventory scan in the Rise energy warehouse",
      },
      {
        number: "03",
        title: "Generate",
        body: "Run Rise Titan or Sentinel for reliable indoor-safe power when the grid fails.",
        imageSrc: "/media/markets/ai-backup-step-generate.png",
        imageAlt: "Tactical power station at a mountain telecom site",
      },
      {
        number: "04",
        title: "Keep Online",
        body: "Keep AI halls, edge nodes, and critical infrastructure online — anywhere you deploy.",
        imageSrc: "/media/markets/ai-backup-step-keep-online.png",
        imageAlt: "Off-grid environmental monitoring station staying online",
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
        imageAlt: "Rise Mission Power in an industrial utility room",
        href: "/insights/hydrogen-power-data-centers",
      },
      {
        title: "Medical",
        body: "Indoor-safe backup when life-critical systems cannot tolerate diesel exhaust or downtime.",
        imageSrc: "/media/markets/ai-backup-app-medical.png",
        imageAlt: "Stormy field command power station",
        href: "/contact",
      },
      {
        title: "Telecom",
        body: "Quiet portable power for telecom backup and edge sites that must stay connected.",
        imageSrc: "/media/markets/ai-backup-app-telecom.png",
        imageAlt: "Rise Mission Power field command post",
        href: "/markets/commercial",
      },
      {
        title: "Industrial",
        body: "Resilient hydrogen backup for industrial facilities moving off diesel generators.",
        imageSrc: "/media/markets/ai-backup-app-industrial.png",
        imageAlt: "Rise Mission Power at a worksite",
        href: "/markets/commercial",
      },
    ],
  },
} as const;
