import type { MarketDetailPage } from "./types";

/**
 * Market detail pages for Defense, Commercial, and Consumer.
 * Copy draws from home `threeMarkets`, live risepower.com use-case content,
 * and product/idealFor mappings already used on this site.
 */
export const marketDetails: readonly MarketDetailPage[] = [
  {
    slug: "defense",
    id: "defense",
    layout: "defense",
    label: "Defense",
    title: "Military & Defence",
    eyebrow: "Defense",
    heading: "Silent Power For Forward Missions.",
    body: "Rise Mission Power systems deliver ultra-quiet, zero-emission hydrogen power for tactical communications, UAV operations, and ISR systems in forward deployments. Cartridge swaps restore full runtime in under 30 seconds — without diesel logistics or acoustic signature.",
    heroBody:
      "Silent portable power for bases, troops, and surveillance drones. Cut fuel-convoy reliance and remove acoustic, thermal, and emissions signatures that compromise OPSEC.",
    href: "/markets/defense",
    images: {
      hero: {
        src: "/media/markets/defense-military.png",
        alt: "Military and defence operations powered by Rise Mission Power",
      },
      secondary: {
        src: "/media/use-cases/uc-defence.png",
        alt: "Defense field operations with Rise Power systems",
      },
    },
    gallery: [
      {
        src: "/media/use-cases/defense-security.jpg",
        alt: "Integrated power supporting defense communications hardware",
      },
      {
        src: "/media/insights/defense-fob.png",
        alt: "Portable power at a forward operating base",
      },
      {
        src: "/media/insights/military-drone.png",
        alt: "Military drone endurance extended with hydrogen fuel cells",
      },
    ],
    applicationsIntro:
      "Engineered for mission environments where diesel generators fail OPSEC and logistics requirements.",
    applications: [
      "Deploy Sentinel or Titan at forward positions for silent communications and surveillance power",
      "Extend drone ISR missions with Falcon — up to 5× flight range vs battery-only platforms",
      "Pre-position refillable hydrogen cartridges for rapid field replenishment",
      "Operate without fuel convoys, acoustic signature, or thermal plume at the point of use",
      "Support tactical communications, UAV operations, and ISR systems in austere theaters",
    ],
    productsIntro:
      "One cartridge ecosystem across portable generators and drone range extenders for defense programs.",
    products: [
      {
        name: "Rise Sentinel™",
        tagline: "Man-portable power cube",
        body: "Quiet, plug-and-play hydrogen power for forward positions and tactical loads.",
        href: "/products#sentinel",
        imageSrc: "/media/use-cases/uc-product-sentinel.png",
        imageAlt: "Rise Sentinel portable hydrogen power system",
      },
      {
        name: "Rise Falcon™",
        tagline: "Drone range extender",
        body: "Up to 5× extended flight range for ISR, mapping, and remote surveillance missions.",
        href: "/products#falcon",
        imageSrc: "/media/use-cases/uc-product-falcon.png",
        imageAlt: "Rise Falcon hydrogen drone range extender",
      },
      {
        name: "Rise Titan™",
        tagline: "1.5 kW portable generator",
        body: "Higher-capacity backup for bases, command nodes, and sustained field operations.",
        href: "/products#titan",
        imageSrc: "/media/use-cases/uc-product-titan.png",
        imageAlt: "Rise Titan portable hydrogen generator",
      },
      {
        name: "Hydrogen Cartridge Kit",
        tagline: "Universal fuel logistics",
        body: "RFID-monitored, leak-proof cartridges with tool-free swaps in under 30 seconds.",
        href: "/products#cartridge-kit",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Rise Power hydrogen cartridge kit",
      },
    ],
    cta: { label: "Request a Briefing", href: "/contact" },
    stats: [
      {
        value: "Silent",
        label: "Acoustic Signature",
        body: "Neighbourhood-quiet operation where diesel generators compromise OPSEC.",
      },
      {
        value: "Zero",
        label: "Emissions At Use",
        body: "No exhaust plume at the point of use — lower thermal and emissions signature.",
      },
      {
        value: "<30s",
        label: "Cartridge Swap",
        body: "Restore full runtime without tools or specialized fuel handling.",
      },
      {
        value: "5×",
        label: "Drone Endurance",
        body: "Falcon extends compatible UAV missions far beyond battery-only flight time.",
      },
    ],
    callouts: [
      {
        title: "Tactical Communications",
        body: "Silent power for radios, networking, and command loads in forward deployments.",
      },
      {
        title: "UAV Operations",
        body: "Hydrogen range extension for ISR and autonomous surveillance platforms.",
      },
      {
        title: "ISR Systems",
        body: "Sustained power for sensors and ground stations without generator noise.",
      },
      {
        title: "FOB Logistics",
        body: "Cut fuel-convoy dependency with pre-positioned cartridge stockpiles.",
      },
    ],
    galleryHeading: { before: "Defense in", accent: "focus." },
    metaTitle: "Defense & Military Power",
    metaDescription:
      "Silent hydrogen power for tactical communications, UAV operations, and ISR systems. Rise Mission Power for forward deployments.",
  },
  {
    slug: "commercial",
    id: "commercial",
    layout: "commercial",
    label: "Commercial",
    title: "Commercial Power",
    eyebrow: "Commercial",
    heading: "Reliable Power For Demanding Sites.",
    body: "Rise Mission Power systems deliver robust, low-maintenance hydrogen power for construction sites, telecom backup, mining, and other industrial applications. Electrify remote infrastructure without fuel-truck dependency or diesel downtime.",
    heroBody:
      "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications — without diesel fuel-truck dependency.",
    href: "/markets/commercial",
    images: {
      hero: {
        src: "/media/markets/commercial.png",
        alt: "Commercial and industrial hydrogen power applications",
      },
      secondary: {
        src: "/media/cases/mining.png",
        alt: "Mining and remote industrial site powered by Rise systems",
      },
    },
    gallery: [
      {
        src: "/media/cases/telecom.png",
        alt: "Telecom backup powered by portable hydrogen systems",
      },
      {
        src: "/media/cases/mining.png",
        alt: "Clean power for electrified drilling and mining infrastructure",
      },
      {
        src: "/media/cases/utilities-remote.png",
        alt: "Remote industrial and utility field operations",
      },
    ],
    applicationsIntro:
      "Built for industrial sites where resupply is expensive, generators are noisy, and downtime is unacceptable.",
    applications: [
      "Power construction tools, lighting, and temporary site infrastructure with Titan",
      "Provide telecom and remote-site backup without diesel spill or service-truck cycles",
      "Support mining and electrified drilling with low-maintenance field power",
      "Extend industrial inspection and mapping flights with Falcon",
      "Scale runtime with refillable cartridges — no fuel truck required on site",
    ],
    productsIntro:
      "Portable generators and cartridge logistics sized for industrial duty cycles.",
    products: [
      {
        name: "Rise Titan™",
        tagline: "1.5 kW portable generator",
        body: "Primary system for construction, mining, and telecom backup — 40 lb portable weight.",
        href: "/products#titan",
        imageSrc: "/media/use-cases/uc-product-titan.png",
        imageAlt: "Rise Titan portable hydrogen generator",
      },
      {
        name: "Rise Falcon™",
        tagline: "Drone range extender",
        body: "Up to 5× flight range for industrial inspection, mapping, and public safety UAVs.",
        href: "/products#falcon",
        imageSrc: "/media/use-cases/uc-product-falcon.png",
        imageAlt: "Rise Falcon hydrogen drone range extender",
      },
      {
        name: "Rise Sentinel™",
        tagline: "Compact site power",
        body: "Lightweight cube for smaller loads, crew communications, and mobile work cells.",
        href: "/products#sentinel",
        imageSrc: "/media/use-cases/uc-product-sentinel.png",
        imageAlt: "Rise Sentinel portable hydrogen power system",
      },
      {
        name: "Hydrogen Cartridge Kit",
        tagline: "Universal fuel logistics",
        body: "RFID smart monitoring and tool-free swaps for continuous site runtime.",
        href: "/products#cartridge-kit",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Rise Power hydrogen cartridge kit",
      },
    ],
    cta: { label: "Request a Briefing", href: "/contact" },
    stats: [
      {
        value: "1.5 kW",
        label: "Titan Capacity",
        body: "Portable generator output sized for tools, lighting, and site infrastructure.",
      },
      {
        value: "40 lb",
        label: "Portable Weight",
        body: "Move Titan where power is needed without a fuel truck or crane.",
      },
      {
        value: "−22°C",
        label: "To +50°C",
        body: "Validated operating range for real-world industrial field conditions.",
      },
      {
        value: "∞",
        label: "Runtime",
        body: "Unlimited operation with cartridge swaps — no generator fuel cycle.",
      },
    ],
    callouts: [
      {
        title: "Construction Sites",
        body: "Quiet temporary power for tools, lighting, and crew facilities.",
      },
      {
        title: "Telecom Backup",
        body: "Off-grid and failover power for towers and remote network nodes.",
      },
      {
        title: "Mining",
        body: "Low-maintenance power for electrified drilling and harsh-site infrastructure.",
      },
      {
        title: "Remote Industry",
        body: "Sustained operation where diesel resupply and maintenance fail.",
      },
    ],
    galleryHeading: { before: "Commercial in", accent: "focus." },
    metaTitle: "Commercial & Industrial Power",
    metaDescription:
      "Hydrogen power for construction sites, telecom backup, mining, and remote industrial operations. Rise Mission Power systems.",
  },
  {
    slug: "consumer",
    id: "consumer",
    layout: "consumer",
    label: "Consumer",
    title: "Consumer Power",
    eyebrow: "Consumer",
    heading: "Quiet Backup When The Grid Fails.",
    body: "Rise Mission Power systems bring portable hydrogen backup to camping, RV power, and emergency home use. Quiet neighbourhood-ready operation with zero exhaust at the point of use — refillable cartridges swap in under 30 seconds.",
    heroBody:
      "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted — quiet, zero-emission, and ready when you need it.",
    href: "/markets/consumer",
    images: {
      hero: {
        src: "/media/markets/field-consumer.png",
        alt: "Consumer outdoor and home backup powered by Rise Mission Power",
      },
      secondary: {
        src: "/media/cases/homes-emergency.png",
        alt: "Home and emergency backup with quiet hydrogen power",
      },
    },
    gallery: [
      {
        src: "/media/markets/consumer.png",
        alt: "Portable consumer hydrogen power for outdoor use",
      },
      {
        src: "/media/cases/homes-community.png",
        alt: "Community and home backup readiness",
      },
      {
        src: "/media/use-cases/disaster-response.jpg",
        alt: "Emergency response and outage backup power",
      },
    ],
    applicationsIntro:
      "Designed for households and outdoor users who need clean backup without generator noise or exhaust.",
    applications: [
      "Keep Sentinel ready for camping, outdoor trips, and off-grid weekends",
      "Power RV loads and mobile living without diesel fumes or neighbourhood noise",
      "Back up lights, laptops, charging, and essential devices during home outages",
      "Stockpile cartridges indefinitely for seasonal and severe-weather readiness",
      "Swap cartridges in seconds to extend runtime — no fuel mixing or pull-cord starts",
    ],
    productsIntro:
      "Everyday systems sized for outdoor use, RV living, and home emergency kits.",
    products: [
      {
        name: "Rise Sentinel™",
        tagline: "Power cube for everyday backup",
        body: "Compact, quiet hydrogen power for camping, outdoor use, and home outages.",
        href: "/products#sentinel",
        imageSrc: "/media/use-cases/uc-product-sentinel.png",
        imageAlt: "Rise Sentinel portable hydrogen power system",
      },
      {
        name: "Rise Titan™",
        tagline: "1.5 kW home & emergency backup",
        body: "Higher capacity for whole-kit backup, community spaces, and longer outages.",
        href: "/products#titan",
        imageSrc: "/media/use-cases/uc-product-titan.png",
        imageAlt: "Rise Titan portable hydrogen generator",
      },
      {
        name: "Hydrogen Cartridge Kit",
        tagline: "Fuel on demand",
        body: "Long shelf life and tool-free swaps — stockpile for seasonal readiness.",
        href: "/products#cartridge-kit",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Rise Power hydrogen cartridge kit",
      },
    ],
    cta: { label: "Contact Us", href: "/contact" },
    stats: [
      {
        value: "Quiet",
        label: "Neighbourhood Ready",
        body: "Run backup power without the noise of a conventional generator.",
      },
      {
        value: "Zero",
        label: "Exhaust At Use",
        body: "Clean operation at the point of use for outdoor and emergency settings.",
      },
      {
        value: "<30s",
        label: "Cartridge Swap",
        body: "Extend runtime in seconds — no fuel mixing or specialized training.",
      },
      {
        value: "15 yr",
        label: "Cartridge Shelf Life",
        body: "Stockpile fuel for camping seasons and emergency readiness.",
      },
    ],
    callouts: [
      {
        title: "Camping",
        body: "Lightweight portable power for outdoor trips without generator noise.",
      },
      {
        title: "RV Power",
        body: "Clean energy for mobile living and off-grid travel days.",
      },
      {
        title: "Emergency Home Backup",
        body: "Keep essentials running when the grid drops or severe weather hits.",
      },
      {
        title: "Seasonal Readiness",
        body: "Cartridges store for years — ready when outage season arrives.",
      },
    ],
    galleryHeading: { before: "Consumer in", accent: "focus." },
    metaTitle: "Consumer & Home Backup Power",
    metaDescription:
      "Portable hydrogen backup for camping, RV power, and emergency home use. Quiet, zero-emission Rise Mission Power systems.",
  },
];
