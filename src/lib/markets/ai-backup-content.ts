/**
 * Short AI Backup page copy — every section is AI data-center backup specific.
 * Sourced from existing site claims (insights data-centers article, FAQ, commercial callouts).
 */
export const aiBackupPage = {
  eyebrow: "AI Backup",
  title: "AI Data Center Backup Power",
  heroBody:
    "Zero-emission hydrogen backup for AI data centers — indoor-safe failover for GPU halls, edge AI sites, and critical racks.",
  cta: { label: "Request a Briefing", href: "/contact" },
  secondaryCta: {
    label: "Data Centers Insight",
    href: "/insights/hydrogen-power-data-centers",
  },
  hero: {
    src: "/media/insights/data-centers.png",
    alt: "Hydrogen backup power for AI data centers and critical facilities",
  },
  overview: {
    eyebrow: "Why AI Backup Needs Hydrogen",
    headingBefore: "Diesel Can't Keep Up",
    headingAccent: "With AI Uptime.",
    body: "AI data centers need backup that starts instantly, runs for hours, and meets net-zero goals. Hydrogen fuel cells replace diesel generators — indoor-safe, zero emissions at the point of use, modular as GPU loads grow.",
    points: [
      {
        title: "On the data floor",
        body: "Install hydrogen backup beside AI racks — warm air and water vapour only. No outdoor diesel pads or heavy exhaust ventilation.",
      },
      {
        title: "Zero AI downtime",
        body: "Full power in under 10 seconds. Pair with your UPS bridge for seamless failover when the grid drops.",
      },
      {
        title: "Scales with AI loads",
        body: "Add fuel cells rack by rack as GPU halls expand. Cartridge storage covers 24–72 hour backup windows.",
      },
    ],
  },
  fit: {
    eyebrow: "AI Backup Applications",
    headingBefore: "Built For AI Halls,",
    headingAccent: "Not Job Sites.",
    body: "This page is for AI data center backup power — GPU halls, inference clusters, and edge AI rooms that cannot run diesel indoors. Rise-Titan is indoor-rated; larger AI halls are scoped with your facilities team.",
    imageSrc: "/media/insights/infrastructure-backup.png",
    imageAlt: "Infrastructure backup power for AI data center facilities",
    bullets: [
      "GPU halls and AI training / inference clusters",
      "Edge AI nodes and colo / micro data centers",
      "UPS-to-hydrogen failover for critical AI racks",
    ],
  },
  systems: {
    eyebrow: "AI Backup Systems",
    headingBefore: "Sized For AI",
    headingAccent: "Backup Duty.",
    body: "Three pieces of the AI backup stack — facility-level generation, edge-node power, and cartridge reserves for your runtime target.",
    items: [
      {
        name: "Rise Titan™",
        role: "AI hall & rack backup",
        body: "Indoor-rated 1.5 kW hydrogen generator for AI data center backup and critical rack loads — unlimited runtime via cartridges.",
        imageSrc: "/media/markets/commercial-product-titan.png",
        imageAlt: "Rise Titan for AI data center backup power",
      },
      {
        name: "Rise Sentinel™",
        role: "Edge AI & support power",
        body: "Compact Power Cube for edge AI rooms, network closets, and support loads when permanent power is not live.",
        imageSrc: "/media/markets/commercial-product-sentinel.png",
        imageAlt: "Rise Sentinel for edge AI backup power",
      },
      {
        name: "Hydrogen Cartridge Kit",
        role: "AI backup fuel reserve",
        body: "RFID-monitored cartridges sized to your AI facility’s 24–72 hour backup window — long shelf life for on-site reserves.",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Hydrogen cartridges for AI data center backup runtime",
      },
    ],
  },
} as const;
