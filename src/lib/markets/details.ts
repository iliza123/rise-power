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
    overview: {
      eyebrow: "Defense",
      headingBefore: "Tactical Communications, UAV Operations &",
      headingAccent: "ISR Systems.",
    },
    href: "/markets/defense",
    images: {
      hero: {
        src: "/media/markets/defense-military.png",
        alt: "Military and defence market imagery",
      },
      secondary: {
        src: "/media/use-cases/uc-defence-deployment.png",
        alt: "Military and defence market imagery",
      },
    },
    gallery: [
      {
        src: "/media/markets/defense-gallery-lead.png",
        alt: "MultiCam soldiers at a desert forward operating base running command and communications from stacked Rise Mission Power units",
        title: "Forward Ops",
        caption: "Silent power for tactical communications.",
      },
      {
        src: "/media/markets/defense-gallery-1.png",
        alt: "Rise Mission Power units at a snowy mountain outpost with a communications tower, tent, and field technicians",
        title: "Cold Weather",
        caption: "Mission-ready in austere climates.",
      },
      {
        src: "/media/markets/defense-gallery-2.png",
        alt: "Rise hexacopter drone surveying a flooded valley while emergency responders monitor the flight from a ridgeline",
        title: "ISR Support",
        caption: "Range extension for critical missions.",
      },
      {
        src: "/media/markets/defense-gallery-3.png",
        alt: "Stacked camouflage Rise Mission Power units at a coastal field station with operators and expedition gear",
        title: "Expeditionary",
        caption: "Quiet power for remote deployments.",
      },
      {
        src: "/media/markets/defense-gallery-4.png",
        alt: "Tactical glove lifting a Rise Mission Power hydrogen cartridge from a foam-lined hard case with three more cartridges secured inside",
        title: "Cartridge Logistics",
        caption: "Rapid refuel for extended missions.",
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
      imageSrc: "/media/use-cases/uc-defence-spotlight.png",
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
    productUses: {
      eyebrow: "Systems",
      headingBefore: "Products Built",
      headingAccent: "For This Theater.",
      intro:
        "Silent portable power for bases, troops, and surveillance drones — Sentinel, Falcon, and Titan sized to the mission.",
      items: [
        {
          slug: "sentinel",
          role: "Forward node power",
          body: "Deploy Sentinel to forward positions for communications and surveillance equipment. Lightweight, silent, and cartridge-refueled when diesel logistics are unacceptable.",
          imageSrc: "/media/markets/defense-product-sentinel.png",
        },
        {
          slug: "falcon",
          role: "ISR range extension",
          body: "Extend drone ISR missions with Falcon. Up to 5× flight range with low-noise, zero-emission operation and quick-swap hydrogen cartridges.",
          imageSrc: "/media/markets/defense-product-falcon.png",
        },
        {
          slug: "titan",
          role: "FOB & base power",
          body: "Deploy Titan where loads exceed a Power Cube — 1.5 kW portable generation for bases and heavier tactical equipment with unlimited runtime via cartridge swap.",
          imageSrc: "/media/markets/defense-product-titan.png",
        },
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
    galleryHeading: { before: "In the", accent: "field." },
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
    overview: {
      eyebrow: "Commercial",
      headingBefore: "Construction Sites, Telecom Backup &",
      headingAccent: "Mining.",
    },
    href: "/markets/commercial",
    images: {
      hero: {
        src: "/media/markets/commercial-hero.png",
        mobileSrc: "/media/markets/commercial-hero-mobile.png",
        alt: "Commercial market imagery",
      },
      secondary: {
        src: "/media/cases/mining.png",
        alt: "Mining company case study",
      },
    },
    gallery: [
      {
        src: "/media/markets/commercial-gallery-lead.png",
        alt: "Rise hydrogen cartridges and open hard case on a medical table in a clinic with healthcare workers treating a patient in the background",
        title: "Critical Sites",
        caption: "Clean power for essential operations.",
      },
      {
        src: "/media/markets/commercial-gallery-2.png",
        alt: "City Public Works crew using stacked Rise Mission Power units at an open street utility vault beside a municipal truck",
        title: "Public Works",
        caption: "Quiet power for night operations.",
      },
      {
        src: "/media/markets/commercial-gallery-3.png",
        alt: "Hi-vis technician servicing industrial electrical cabinets with a stacked Rise Mission Power unit providing field power",
        title: "Utilities",
        caption: "Backup when the line goes down.",
      },
      {
        src: "/media/markets/commercial-gallery-4.png",
        alt: "Open-pit mining crew running survey and field tools from a Rise Mission Power stack at a remote job site",
        title: "Job Sites",
        caption: "Tools and lighting without generators.",
      },
      {
        src: "/media/markets/commercial-gallery-5.png",
        alt: "Alpine emergency and telecom crew with a Rise-branded hexacopter over snowy peaks near a ridge communications tower",
        title: "Emergency",
        caption: "Rapid deploy for storm response.",
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
    productUses: {
      eyebrow: "In This Market",
      headingBefore: "Products Built",
      headingAccent: "For The Job Site.",
      intro:
        "Reliable hydrogen power for construction, telecom, and mining — without fuel-truck dependency.",
      items: [
        {
          slug: "titan",
          role: "Primary site backup",
          body: "Clean backup power for construction sites and industrial pads. 1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
          imageSrc: "/media/markets/commercial-product-titan.png",
        },
        {
          slug: "falcon",
          role: "Industrial aerial survey",
          body: "Up to 5× extended flight range for inspection, mapping, public safety, and remote operations over corridors, pits, and remote sites.",
          imageSrc: "/media/markets/commercial-product-falcon.png",
        },
        {
          slug: "sentinel",
          role: "Site & telecom support",
          body: "Compact portable power for telecom backup and early-site loads when permanent power is not live — quiet, plug-and-play, no grid connection required.",
          imageSrc: "/media/markets/commercial-product-sentinel.png",
        },
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
    galleryHeading: { before: "Built for", accent: "industry." },
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
    overview: {
      eyebrow: "Consumer",
      headingBefore: "Camping, RV Power &",
      headingAccent: "Emergency Home Backup.",
    },
    href: "/markets/consumer",
    images: {
      hero: {
        src: "/media/markets/consumer-hero.png",
        mobileSrc: "/media/markets/consumer-hero-mobile.png",
        alt: "Camper using a laptop powered by Rise portable hydrogen system at a mountain overlook at sunset",
      },
      secondary: {
        src: "/media/cases/homes-emergency.png",
        alt: "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits",
      },
    },
    gallery: [
      {
        src: "/media/markets/consumer-gallery-events.png",
        alt: "Stacked camouflage Rise Mission Power units on wheels at an outdoor sunset festival with a stage, crowd, and sound engineer in the background",
        title: "Events",
        caption: "Quiet power for outdoor gatherings.",
      },
      {
        src: "/media/markets/consumer-gallery-home.png",
        alt: "Woman working on a laptop in a living room at night with a Rise portable power unit and hydrogen cylinder nearby and a dog resting on the rug",
        title: "Home Life",
        caption: "Quiet power for everyday essentials.",
      },
      {
        src: "/media/markets/consumer-gallery-cartridge.png",
        alt: "Rise hydrogen cartridges and open hard case on a medical table in a clinic with healthcare workers treating a patient in the background",
        title: "Cartridge Ready",
        caption: "Clean fuel when you need it most.",
      },
      {
        src: "/media/markets/consumer-gallery-patio.png",
        alt: "Rise portable power system on a stone patio at dusk beside a modern glass home",
        title: "Patio Ready",
        caption: "Rugged power for outdoor living.",
      },
      {
        src: "/media/markets/consumer-gallery-outdoor.png",
        alt: "Camper cooking at an RV site at sunset with a Rise portable power unit powering an electric cooktop on a folding table",
        title: "Outdoor Living",
        caption: "Clean energy for camping and RV.",
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
    productUses: {
      eyebrow: "For Home & Trail",
      headingBefore: "Products Built",
      headingAccent: "For Everyday Use.",
      intro:
        "Quiet neighbourhood-ready power for camping, RV, and emergency home backup — each system sized to the job.",
      items: [
        {
          slug: "sentinel",
          role: "Camp & kit power",
          body: "Compact hydrogen power for camping and outdoor use. Lightweight enough for an RV cubby or home emergency kit — quiet, plug-and-play setup with refillable cartridges.",
          imageSrc: "/media/markets/consumer-product-sentinel.png",
        },
        {
          slug: "titan",
          role: "Home essentials backup",
          body: "Clean backup for homes and community spaces during outages and severe weather. 1.5 kW capacity with unlimited runtime via cartridge swap — neighbourhood-quiet, zero exhaust at the point of use.",
          imageSrc: "/media/markets/consumer-product-titan.png",
        },
        {
          slug: "falcon",
          role: "Property & recreation UAV",
          body: "Plug-and-play hydrogen range extender for compatible drones. Up to 5× extended flight range for property, mapping, and outdoor use with quick-swap cartridges.",
          imageSrc: "/media/markets/consumer-product-falcon.png",
        },
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
    galleryHeading: { before: "Ready when", accent: "you are." },
    metaTitle: "Consumer",
    metaDescription:
      "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted.",
  },
];
