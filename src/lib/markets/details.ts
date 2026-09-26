import type { MarketDetailPage } from "./types";

/**
 * Market detail pages — copy is quoted from existing site sources only:
 * - `threeMarkets` + `featuredProducts` + `customerPartners` (home-content)
 * - `products` + `stats` + Homes use-case lines (content.ts)
 * - Live Defense & Security use case (`_content-inventory/live-pages/use-cases.json`)
 *
 * Do not invent marketing claims here.
 */
export const marketDetails: readonly MarketDetailPage[] = [
  {
    slug: "defense",
    id: "defense",
    layout: "defense",
    label: "Defense",
    title: "Military & Defence",
    eyebrow: "Defense",
    heading:
      "Silent hydrogen power for tactical communications, UAV operations, and ISR systems in forward deployments.",
    body: "Ultra-quiet, zero-emission power with rapid cartridge swaps for mission-critical operations where diesel logistics and acoustic signature are unacceptable.",
    heroBody:
      "Silent portable power for bases, troops, and surveillance drones. Reduces reliance on fuel convoys. Eliminates the acoustic, thermal, and emissions signatures that compromise operational security.",
    href: "/markets/defense",
    images: {
      hero: {
        src: "/media/markets/defense-military.png",
        alt: "Military and defence market imagery",
      },
      secondary: {
        src: "/media/use-cases/uc-defence.png",
        alt: "Military and defence market imagery",
      },
    },
    gallery: [
      {
        src: "/media/use-cases/defense-security.jpg",
        alt: "Military and defence market imagery",
      },
      {
        src: "/media/insights/defense-fob.png",
        alt: "Military and defence market imagery",
      },
      {
        src: "/media/insights/military-drone.png",
        alt: "Military and defence market imagery",
      },
    ],
    applicationsIntro:
      "Ultra-quiet, zero-emission power with rapid cartridge swaps for mission-critical operations where diesel logistics and acoustic signature are unacceptable.",
    applications: [
      "Deploy Sentinel or Titan to forward positions",
      "Operate communications and surveillance equipment silently",
      "Extend drone ISR missions with Falcon range extender",
      "Swap fuel cartridges for extended mission duration",
      "Maintain zero thermal and acoustic signature",
    ],
    productsIntro:
      "Four portable hydrogen systems. One refillable cartridge ecosystem.",
    products: [
      {
        name: "Rise Sentinel™",
        tagline: "Power Cube for everyday backup",
        body: "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges. Lightweight and easy to carry — no grid connection required.",
        href: "/products#sentinel",
        imageSrc: "/media/use-cases/uc-product-sentinel.png",
        imageAlt: "Rise Sentinel portable hydrogen power system",
      },
      {
        name: "Rise Falcon™",
        tagline: "Drone range extender",
        body: "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation and quick-swap hydrogen cartridges.",
        href: "/products#falcon",
        imageSrc: "/media/use-cases/uc-product-falcon.png",
        imageAlt: "Rise Falcon hydrogen drone range extender",
      },
      {
        name: "Rise Titan™",
        tagline: "1.5 kW portable generator",
        body: "Clean backup power for everyday and emergency use. 1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
        href: "/products#titan",
        imageSrc: "/media/use-cases/uc-product-titan.png",
        imageAlt: "Rise Titan portable hydrogen generator",
      },
      {
        name: "Hydrogen Cartridge Kit",
        tagline: "Universal fuel logistics",
        body: "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
        href: "/products#cartridge-kit",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Rise Power hydrogen cartridge kit",
      },
    ],
    spotlight: {
      number: "01",
      label: "Military & Defence",
      headingBefore: "Silent Power",
      headingAccent: "For Forward Deployments.",
      body: "Silent portable power for bases, troops, and surveillance drones. Reduces reliance on fuel convoys. Eliminates the acoustic, thermal, and emissions signatures that compromise operational security.",
      imageSrc: "/media/use-cases/uc-defence.png",
      imageAlt: "Military and defence market imagery",
      features: [
        "Quiet portable power",
        "Zero emissions at point of use",
        "No grid connection required",
        "Unlimited runtime with cartridge swap",
        "Drone range extension up to 5×",
      ],
      featuredProducts: [
        { label: "Sentinel", href: "/products#sentinel" },
        { label: "Falcon", href: "/products#falcon" },
        { label: "Titan", href: "/products#titan" },
      ],
    },
    cta: { label: "Request a Briefing", href: "/contact" },
    stats: [
      {
        value: "Silent",
        label: "Acoustic Signature",
        body: "Eliminates the acoustic, thermal, and emissions signatures that compromise operational security.",
      },
      {
        value: "Zero",
        label: "Emissions At Use",
        body: "Zero-emissions power at the point of use.",
      },
      {
        value: "<30s",
        label: "Cartridge Swap",
        body: "Swap a cartridge and restore full runtime without tools or specialized training.",
      },
      {
        value: "5×",
        label: "Extended Flight Range",
        body: "Up to 5x extended flight range with low-noise, zero-emission operation.",
      },
    ],
    callouts: [
      {
        title: "Tactical Communications",
        body: "Silent hydrogen power for tactical communications, UAV operations, and ISR systems in forward deployments.",
      },
      {
        title: "UAV Operations",
        body: "Extend drone ISR missions with Falcon range extender.",
      },
      {
        title: "ISR Systems",
        body: "Operate communications and surveillance equipment silently.",
      },
    ],
    galleryHeading: { before: "Defense in", accent: "focus." },
    metaTitle: "Military & Defence",
    metaDescription:
      "Silent hydrogen power for tactical communications, UAV operations, and ISR systems in forward deployments.",
  },
  {
    slug: "commercial",
    id: "commercial",
    layout: "commercial",
    label: "Commercial",
    title: "Commercial",
    eyebrow: "Commercial",
    heading:
      "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications.",
    body: "Robust, low-maintenance hydrogen power for electrified drilling, remote site infrastructure, and off-grid operations without fuel-truck dependency.",
    heroBody:
      "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications.",
    href: "/markets/commercial",
    images: {
      hero: {
        src: "/media/markets/commercial.png",
        alt: "Commercial market imagery",
      },
      secondary: {
        src: "/media/cases/mining.png",
        alt: "Mining company case study",
      },
    },
    gallery: [
      {
        src: "/media/cases/telecom.png",
        alt: "Commercial market imagery",
      },
      {
        src: "/media/cases/mining.png",
        alt: "Clean Power for Extreme Environments",
      },
      {
        src: "/media/cases/utilities-remote.png",
        alt: "Commercial market imagery",
      },
    ],
    applicationsIntro:
      "Robust, low-maintenance hydrogen power for electrified drilling, remote site infrastructure, and off-grid operations without fuel-truck dependency.",
    applications: [
      "Construction Sites — clean backup power for everyday and emergency use with Titan",
      "Telecom Backup — portable hydrogen power without fuel-truck dependency",
      "Delivered robust, low-maintenance power solutions for electrified drilling and site infrastructure",
      "Up to 5x extended flight range for inspection, mapping, public safety, and remote operations",
      "Swap a cartridge and restore full runtime without tools or specialized training",
    ],
    productsIntro:
      "Four portable hydrogen systems. One refillable cartridge ecosystem.",
    products: [
      {
        name: "Rise Titan™",
        tagline: "1.5 kW portable generator",
        body: "Clean backup power for everyday and emergency use. 1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
        href: "/products#titan",
        imageSrc: "/media/use-cases/uc-product-titan.png",
        imageAlt: "Rise Titan portable hydrogen generator",
      },
      {
        name: "Rise Falcon™",
        tagline: "Drone range extender",
        body: "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation and quick-swap hydrogen cartridges.",
        href: "/products#falcon",
        imageSrc: "/media/use-cases/uc-product-falcon.png",
        imageAlt: "Rise Falcon hydrogen drone range extender",
      },
      {
        name: "Rise Sentinel™",
        tagline: "Power Cube for everyday backup",
        body: "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges. Lightweight and easy to carry — no grid connection required.",
        href: "/products#sentinel",
        imageSrc: "/media/use-cases/uc-product-sentinel.png",
        imageAlt: "Rise Sentinel portable hydrogen power system",
      },
      {
        name: "Hydrogen Cartridge Kit",
        tagline: "Universal fuel logistics",
        body: "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
        href: "/products#cartridge-kit",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Rise Power hydrogen cartridge kit",
      },
    ],
    spotlight: {
      number: "02",
      label: "Commercial",
      headingBefore: "Reliable Power",
      headingAccent: "Without Fuel-Truck Dependency.",
      body: "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications. Robust, low-maintenance hydrogen power for electrified drilling, remote site infrastructure, and off-grid operations without fuel-truck dependency.",
      imageSrc: "/media/markets/commercial.png",
      imageAlt: "Commercial market imagery",
      features: [
        "Quiet portable power",
        "Zero emissions at point of use",
        "No grid connection required",
        "Unlimited runtime with cartridge swap",
        "Drone range extension up to 5×",
      ],
      featuredProducts: [
        { label: "Titan", href: "/products#titan" },
        { label: "Falcon", href: "/products#falcon" },
        { label: "Sentinel", href: "/products#sentinel" },
      ],
    },
    cta: { label: "Request a Briefing", href: "/contact" },
    stats: [
      {
        value: "1.5 kW",
        label: "Capacity",
        body: "1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
      },
      {
        value: "40 lb",
        label: "Titan portable generator weight",
        body: "40 lb portable weight · 24 × 18 × 24 in",
      },
      {
        value: "−22°C",
        label: "To +50°C",
        body: "Operates −22 °C to +50 °C",
      },
      {
        value: "∞",
        label: "Unlimited with cartridge swap",
        body: "Unlimited runtime with 3-cartridge support",
      },
    ],
    callouts: [
      {
        title: "Construction Sites",
        body: "Clean backup power for everyday and emergency use. 1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
      },
      {
        title: "Telecom Backup",
        body: "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications.",
      },
      {
        title: "Mining",
        body: "Delivered robust, low-maintenance power solutions for electrified drilling and site infrastructure.",
      },
    ],
    galleryHeading: { before: "Commercial in", accent: "focus." },
    metaTitle: "Commercial",
    metaDescription:
      "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications.",
  },
  {
    slug: "consumer",
    id: "consumer",
    layout: "consumer",
    label: "Consumer",
    title: "Consumer",
    eyebrow: "Consumer",
    heading:
      "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted.",
    body: "Quiet neighbourhood-ready operation with zero exhaust at the point of use. Refillable cartridges swap in under 30 seconds.",
    heroBody:
      "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted.",
    href: "/markets/consumer",
    images: {
      hero: {
        src: "/media/markets/field-consumer.png",
        alt: "Consumer market imagery",
      },
      secondary: {
        src: "/media/cases/homes-emergency.png",
        alt: "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits",
      },
    },
    gallery: [
      {
        src: "/media/markets/consumer.png",
        alt: "Consumer market imagery",
      },
      {
        src: "/media/cases/homes-community.png",
        alt: "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits",
      },
      {
        src: "/media/use-cases/disaster-response.jpg",
        alt: "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits",
      },
    ],
    applicationsIntro:
      "Quiet neighbourhood-ready operation with zero exhaust at the point of use. Refillable cartridges swap in under 30 seconds.",
    applications: [
      "Keep Sentinel or Titan ready in home and community emergency kits",
      "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted",
      "Power lights, laptops, charging, and essential small devices",
      "Stockpile cartridges indefinitely for seasonal readiness",
      "Swap cartridges in seconds to extend runtime",
    ],
    productsIntro:
      "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges.",
    products: [
      {
        name: "Rise Sentinel™",
        tagline: "Power Cube for everyday backup",
        body: "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges. Lightweight and easy to carry — no grid connection required.",
        href: "/products#sentinel",
        imageSrc: "/media/use-cases/uc-product-sentinel.png",
        imageAlt: "Rise Sentinel portable hydrogen power system",
      },
      {
        name: "Rise Titan™",
        tagline: "1.5 kW portable generator",
        body: "Clean backup power for everyday and emergency use. 1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
        href: "/products#titan",
        imageSrc: "/media/use-cases/uc-product-titan.png",
        imageAlt: "Rise Titan portable hydrogen generator",
      },
      {
        name: "Rise Falcon™",
        tagline: "Drone range extender",
        body: "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation and quick-swap hydrogen cartridges.",
        href: "/products#falcon",
        imageSrc: "/media/use-cases/uc-product-falcon.png",
        imageAlt: "Rise Falcon hydrogen drone range extender",
      },
      {
        name: "Hydrogen Cartridge Kit",
        tagline: "Universal fuel logistics",
        body: "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment.",
        href: "/products#cartridge-kit",
        imageSrc: "/media/use-cases/uc-product-cartridge.png",
        imageAlt: "Rise Power hydrogen cartridge kit",
      },
    ],
    spotlight: {
      number: "03",
      label: "Consumer",
      headingBefore: "Quiet Power",
      headingAccent: "For Everyday Resilience.",
      body: "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted. Quiet neighbourhood-ready operation with zero exhaust at the point of use. Refillable cartridges swap in under 30 seconds.",
      imageSrc: "/media/cases/homes-emergency.png",
      imageAlt:
        "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits",
      features: [
        "Quiet portable power",
        "Zero emissions at point of use",
        "No grid connection required",
        "Unlimited runtime with cartridge swap",
        "Drone range extension up to 5×",
      ],
      featuredProducts: [
        { label: "Sentinel", href: "/products#sentinel" },
        { label: "Falcon", href: "/products#falcon" },
        { label: "Titan", href: "/products#titan" },
      ],
    },
    cta: { label: "Request a Briefing", href: "/contact" },
    stats: [
      {
        value: "Quiet",
        label: "Neighbourhood-friendly operation",
        body: "Quiet operation for neighbourhoods and public spaces.",
      },
      {
        value: "0 Emissions",
        label: "Zero exhaust at point of use",
        body: "Zero-emissions power at the point of use.",
      },
      {
        value: "<30s",
        label: "Cartridge Swap",
        body: "Refillable cartridges swap in under 30 seconds.",
      },
      {
        value: "15 yr",
        label: "Shelf Life",
        body: "Stockpile cartridges indefinitely for seasonal readiness.",
      },
    ],
    callouts: [
      {
        title: "Camping",
        body: "Compact hydrogen power for everyday backup and outdoor use. Lightweight and easy to carry.",
      },
      {
        title: "RV Power",
        body: "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted.",
      },
      {
        title: "Emergency Home Backup",
        body: "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits.",
      },
    ],
    galleryHeading: { before: "Consumer in", accent: "focus." },
    metaTitle: "Consumer",
    metaDescription:
      "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted.",
  },
];
