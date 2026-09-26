import { site } from "./content";
import { megaNavItems } from "./nav-menu";

export type {
  MegaFeature,
  MegaLink,
  MegaNavItem,
} from "./nav-menu";
export { megaNavItems } from "./nav-menu";

export type NavItem = {
  label: string;
  href: string;
};

export type Cta = {
  label: string;
  href: string;
};

export type HeroChip = {
  title: string;
  subtitle: string;
};

export type PerformanceGauge = {
  value: string;
  unit?: string;
  title: string;
  body: string;
  percent: number;
};

export type MarketCard = {
  title: string;
  body: string;
  theater: string;
  points: readonly string[];
  detail: string;
  href: string;
  cta: string;
  image: string;
  imageSrc?: string;
};

export type FeaturedProduct = {
  name: string;
  trademark: string;
  subtitle: string;
  body: string;
  runtime: string;
  runtimeNote: string;
  weight: string;
  weightNote: string;
  power: string;
  powerNote: string;
  idealFor: readonly string[];
  detailsHref: string;
  datasheetHref: string;
  image: string;
  imageSrc?: string;
  /** Optional object-position / framing for the card image. */
  imageClassName?: string;
};

export type CapabilityStat = {
  value: string;
  label: string;
  body: string;
};

export type CapabilityCallout = {
  title: string;
  body: string;
};

export type CapabilityMedia = {
  src: string;
  alt: string;
};

export type CapabilityTab = {
  id: string;
  label: string;
  title: string;
  eyebrow: string;
  heading: string;
  body: string;
  heroBody: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
  /** Optional stacked-hero image below xl. */
  mobileImageSrc?: string;
  secondaryImageSrc: string;
  secondaryImageAlt: string;
  gallery: readonly CapabilityMedia[];
  deliverablesIntro: string;
  deliverables: readonly string[];
  cta: Cta;
  stats: readonly CapabilityStat[];
  callouts: readonly CapabilityCallout[];
  quote?: {
    text: string;
    name: string;
    role: string;
  };
};

export type CertificationRoadmapItem = {
  status: string;
  standard: string;
  description: string;
};

export type CaseCard = {
  category: string;
  title: string;
  body: string;
  stats: readonly { value: string; label: string }[];
  href: string;
  image: string;
  imageSrc?: string;
  /** Optional Next/Image object-* classes (e.g. object-fill to show full frame). */
  imageClassName?: string;
};

export type GroupCompanyCard = {
  name: string;
  body?: string;
  image: string;
  imageSrc: string;
  href: string;
  cta: string;
  external?: boolean;
  featured?: boolean;
};

export type FooterGroup = {
  heading: string;
  links: readonly NavItem[];
};

export type SocialLink = {
  label: string;
  href: string;
};

export const sectionOrder = [
  "hero",
  "performance-metrics",
  "three-markets",
  "how-it-works",
  "why-hydrogen",
  "featured-products",
  "customer-partners",
  "businesses-companies",
  "closing-cta",
] as const;

export const navItems: readonly NavItem[] = megaNavItems.map(
  ({ label, href }) => ({ label, href }),
);

export const contactCta: Cta = {
  label: "Request a Briefing",
  href: "/contact",
};

/** Hero background from approved Frame 1 reference (photo lane, UI baked out). */
export const heroImageSrc = "/media/hero.png";

/** Home hero banner for stacked layout below xl (phones / tablets). */
export const heroMobileImageSrc = "/media/hero-mobile.png";

/** Exact Frame 1 product CTA / stat labels */
export const productUiLabels = {
  runtime: "Runtime",
  weight: "Temperature",
  power: "Power Output",
  idealFor: "Ideal For",
  viewDetails: "View Details",
  downloadSpec: "Download Spec Sheet (PDF)",
  viewSuccessStory: "View Success Story",
} as const;

export const hero = {
  eyebrow: "PORTABLE HYDROGEN POWER",
  headlineLine1: "for everyday",
  headlineLine2: "resilience.",
  body: "Zero-emissions portable power for municipal, emergency, field, and off-grid applications. Quiet, rapidly deployable, and engineered in British Columbia.",
  primaryCta: { label: "Request a Demo", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "See Products", href: "/products" } satisfies Cta,
  chips: [
    { title: "Everyday Backup", subtitle: "When the grid is down" },
    { title: "Zero Emissions", subtitle: "At point of use" },
    { title: "Under 30 Seconds", subtitle: "Cartridge Swap" },
    { title: "Quiet Operation", subtitle: "Neighbourhood-ready" },
  ] satisfies readonly HeroChip[],
  image: "Hero — portable hydrogen for everyday resilience",
};

export const performanceMetrics = {
  eyebrow: "ENGINEERED FOR REAL-WORLD USE",
  headingBefore: "BUILT TO",
  headingAccent: "OUTPERFORM.",
  body: "Every Rise Mission Power system is engineered for quiet, dependable power with zero emissions at the point of use.",
  gauges: [
    {
      value: "Quiet",
      unit: "",
      title: "Neighbourhood-friendly operation",
      body: "Quiet operation for neighbourhoods and public spaces.",
      percent: 75,
    },
    {
      value: "0",
      unit: "Emissions",
      title: "Zero exhaust at point of use",
      body: "Zero emissions at the point of use.",
      percent: 55,
    },
    {
      value: "∞",
      unit: "Runtime",
      title: "Unlimited with cartridge swap",
      body: "Unlimited runtime with rapid cartridge swaps.",
      percent: 88,
    },
    {
      value: "−22°",
      unit: "to +50°C",
      title: "Operating temperature for all products",
      body: "Rated from −22 °C to +50 °C across the Rise Power product line.",
      percent: 60,
    },
  ] satisfies readonly PerformanceGauge[],
};

export const threeMarkets = {
  eyebrow: "THREE MARKETS. ONE MISSION.",
  headingBefore: "POWERING",
  headingAccent: "EVERY MISSION.",
  body: "Rise Mission Power systems are engineered to perform in the toughest environments across military, commercial, and consumer applications.",
  cards: [
    {
      title: "Military & Defence",
      body: "Silent hydrogen power for tactical communications, UAV operations, and ISR systems in forward deployments.",
      theater: "DEFENCE",
      points: ["Tactical Communications", "UAV Operations", "ISR Systems"],
      detail:
        "Ultra-quiet, zero-emission power with rapid cartridge swaps for mission-critical operations where diesel logistics and acoustic signature are unacceptable.",
      href: "/use-cases#defense-security",
      cta: "Explore Solutions",
      image: "Military and defence market imagery",
      imageSrc: "/media/markets/defense-military.png",
    },
    {
      title: "Commercial",
      body: "Reliable power for construction sites, telecom backup, mining, and other demanding industrial applications.",
      theater: "COMMERCIAL",
      points: ["Construction Sites", "Telecom Backup", "Mining"],
      detail:
        "Robust, low-maintenance hydrogen power for electrified drilling, remote site infrastructure, and off-grid operations without fuel-truck dependency.",
      href: "/use-cases#remote-operations",
      cta: "Explore Solutions",
      image: "Commercial market imagery",
      imageSrc: "/media/markets/commercial.png",
    },
    {
      title: "Consumer",
      body: "Portable backup for camping, RV power, and emergency home use when the grid cannot be trusted.",
      theater: "CONSUMER",
      points: ["Camping", "RV Power", "Emergency Home Backup"],
      detail:
        "Quiet neighbourhood-ready operation with zero exhaust at the point of use. Refillable cartridges swap in under 30 seconds.",
      href: "/use-cases#disaster-response",
      cta: "Explore Solutions",
      image: "Consumer market imagery",
      imageSrc: "/media/markets/field-consumer.png",
    },
  ] satisfies readonly MarketCard[],
};

export type ComparisonRow = {
  metric: string;
  hydrogen: string;
  diesel: string;
};

export type WhyHydrogenBenefit = {
  title: string;
  body: string;
};

export type WhyHydrogenPillar = {
  title: string;
  body: string;
};

export const howItWorks = {
  eyebrow: "HOW IT WORKS",
  heading: "CLEAN HYDROGEN. ENDLESS POSSIBILITIES.",
  body: "Hydrogen is converted into electricity through a chemical reaction in the fuel cell—producing only water and heat. Our cartridge-based system makes power simple, scalable, and sustainable.",
  cta: { label: "Explore Technology", href: "/capabilities" } satisfies Cta,
  diagram: {
    stackLabel: "FUEL CELL STACK",
    inputs: [
      {
        label: "HYDROGEN",
        sublabel: "H2",
        imageSrc: "/media/ecosystem/hydrogen.png",
        alt: "Hydrogen input",
      },
    ],
    stackImageSrc: "/media/ecosystem/fuel-cell.png",
    stackAlt: "Fuel cell stack",
    outputs: [
      {
        label: "ELECTRICITY",
        imageSrc: "/media/ecosystem/electricity.png",
        alt: "Electricity output",
      },
      {
        label: "WATER",
        sublabel: "H2O",
        imageSrc: "/media/ecosystem/water.png",
        alt: "Water output",
      },
      {
        label: "HEAT",
        imageSrc: "/media/ecosystem/heat.png",
        alt: "Heat output",
      },
    ],
    legend: [
      "HYDROGEN IN",
      "OXYGEN IN",
      "ELECTRICITY OUT",
      "WATER OUT",
      "HEAT",
    ] as const,
  },
  zeroEmissions: {
    title: "ZERO EMISSIONS",
    subtitle: "At the point of use.",
    bullets: ["No exhaust", "No noise"] as const,
  },
};

export const whyHydrogen = {
  eyebrow: "WHY HYDROGEN WINS",
  headingBefore: "CLEANER.",
  headingAccent: "QUIETER.",
  headingAfter: "STRONGER.",
  body: "Hydrogen fuel cells provide silent, zero-emission power while reducing maintenance and enabling rapid cartridge refueling for mission-critical operations.",
  tableHeading: "HYDROGEN VS DIESEL",
  tableHeaders: {
    metric: "METRIC",
    hydrogen: "HYDROGEN",
    diesel: "DIESEL",
  },
  comparison: [
    { metric: "Noise", hydrogen: "<65 dB", diesel: ">90 dB" },
    { metric: "Emissions", hydrogen: "Water only", diesel: "CO₂ + NOₓ" },
    { metric: "Maintenance", hydrogen: "Low", diesel: "High" },
    { metric: "Runtime", hydrogen: "Unlimited swap", diesel: "Fuel logistics" },
    { metric: "Refueling", hydrogen: "30 sec", diesel: "Minutes" },
  ] satisfies readonly ComparisonRow[],
  /** Prior design visual: Rise unit + cartridge swap vs diesel smoke */
  productImageSrc: "/media/why-hydrogen/vs-diesel-visual.jpg",
  productImageAlt:
    "Rise Power hydrogen unit with cartridge swap compared to a diesel generator",
  benefits: [
    {
      title: "ZERO EMISSIONS",
      body: "Produces only water vapor—no harmful exhaust, no carbon footprint.",
    },
    {
      title: "ULTRA-QUIET OPERATION",
      body: "Operates at <65 dB for stealth and low acoustic signature.",
    },
    {
      title: "LOW MAINTENANCE",
      body: "Fewer moving parts mean lower wear, less downtime, and reduced lifecycle costs.",
    },
    {
      title: "RAPID CARTRIDGE REFUELING",
      body: "Swap cartridges in 30 seconds and stay powered without long refueling delays.",
    },
  ] satisfies readonly WhyHydrogenBenefit[],
  pillars: [
    {
      title: "MISSION READY",
      body: "Reliable power in any environment.",
    },
    {
      title: "HIGH EFFICIENCY",
      body: "Maximum power, minimal waste.",
    },
    {
      title: "SUSTAINABLE",
      body: "Clean energy today for a better tomorrow.",
    },
    {
      title: "FUTURE PROOF",
      body: "Scalable technology for a changing world.",
    },
    {
      title: "SECURE POWER",
      body: "Resilient systems for critical missions and operations.",
    },
  ] satisfies readonly WhyHydrogenPillar[],
};

export const featuredProducts = {
  eyebrow: "FEATURED SYSTEMS",
  headingBefore: "POWER YOU CAN",
  headingAccent: "DEPEND ON.",
  headingAfter: "",
  body: "Four portable hydrogen systems. One refillable cartridge ecosystem.",
  products: [
    {
      name: "SENTINEL",
      trademark: "",
      subtitle: "Power Cube",
      body: "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges. Lightweight and easy to carry — no grid connection required.",
      runtime: "QUIET",
      runtimeNote: "Everyday Operation",
      weight: "−22 °C to +50 °C",
      weightNote: "Operating Range",
      power: "ZERO EMISSIONS",
      powerNote: "At Point of Use",
      idealFor: ["Camping & Outdoor", "Home Outages", "Emergency Kits"],
      detailsHref: "/products#sentinel",
      datasheetHref: "/media/brochures/sentinel-power-cube.pdf",
      image: "Hiker with a backpack facing mountain scenery",
      imageSrc: "/media/products/featured-sentinel.png",
      // Bias right so the backpack Power Cube stays in frame; woman sits mid-left.
      imageClassName: "object-cover object-[70%_40%]",
    },
    {
      name: "FALCON",
      trademark: "",
      subtitle: "Hydrogen Drone Range Extender",
      body: "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation and quick-swap hydrogen cartridges.",
      runtime: "UP TO 5×",
      runtimeNote: "Extended Flight Range",
      weight: "−22 °C to +50 °C",
      weightNote: "Operating Range",
      power: "UNDER 30 SEC",
      powerNote: "Cartridge Load Time",
      idealFor: ["Inspection", "Mapping", "Public Safety"],
      detailsHref: "/products#falcon",
      datasheetHref: "/media/brochures/falcon-drone-range-extender.pdf",
      image: "FALCON hydrogen drone range extender",
      imageSrc: "/media/products/featured-falcon.png",
    },
    {
      name: "TITAN",
      trademark: "",
      subtitle: "Portable Generator",
      body: "Clean backup power for everyday and emergency use. 1.5 kW capacity, 40 lb portable weight, and unlimited runtime with refillable hydrogen cartridges.",
      runtime: "UNLIMITED",
      runtimeNote: "With Cartridge Swap",
      weight: "−22 °C to +50 °C",
      weightNote: "Operating Range",
      power: "1.5 kW",
      powerNote: "Capacity",
      idealFor: ["Construction Sites", "Mining Operations", "Telecom Backup"],
      detailsHref: "/products#titan",
      datasheetHref: "/media/brochures/rise-mission-power-brochure.pdf",
      image: "Soldiers with a camouflage portable generator",
      imageSrc: "/media/products/featured-titan.png",
    },
    {
      name: "HYDROGEN CARTRIDGE KIT",
      trademark: "",
      subtitle: "Universal Fuel System",
      body: "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
      runtime: "15 YEARS",
      runtimeNote: "Shelf Life",
      weight: "−22 °C to +50 °C",
      weightNote: "Operating Range",
      power: "RFID SMART",
      powerNote: "Monitoring Enabled",
      idealFor: ["Fuel Cell Systems", "Field Operations", "Rapid Replenishment"],
      detailsHref: "/products#cartridge-kit",
      // TODO: Add hydrogen-cartridge-kit spec PDF when available from client.
      datasheetHref: "/contact",
      image: "Hydrogen Cartridge Kit with RFID smart monitoring",
      imageSrc: "/media/products/featured-cartridge.png",
    },
  ] satisfies readonly FeaturedProduct[],
};

export const capabilities = {
  eyebrow: "WHAT WE DO",
  headingBefore: "OUR",
  headingAccent: "CAPABILITIES.",
  body: "From early-stage prototypes to production-ready hardware, our engineering team delivers hydrogen power systems designed for the environment where they will actually operate.",
  hero: {
    eyebrow: "CAPABILITIES",
    headlineLine1: "Capabilities",
    headlineAccent: "",
    body: "End to end hydrogen power engineering, from concept to deployment.",
    imageSrc: "/media/capabilities/capabilities-hero.png",
    primaryCta: { label: "Explore Capabilities", href: "#pillars" } satisfies Cta,
    secondaryCta: { label: "Request a Briefing", href: "/contact" } satisfies Cta,
  },
  atmosphere: {
    eyebrow: "IN THE FIELD",
    headingBefore: "BUILT FOR",
    headingAccent: "REAL THEATERS.",
    body: "From alpine ridges to forward operating bases, Rise Power systems are photographed and proven where operators actually work.",
    imageSrc: "/media/hero.png",
    imageAlt: "Rise Power hydrogen system in a tactical field deployment",
  },
  metricsBand: {
    imageSrc: "/media/missions/mountain.png",
    imageAlt: "Mountain deployment environment for portable hydrogen power",
  },
  gallery: [
    {
      src: "/media/capabilities/systems-context-1.png",
      alt: "Tactical portable power unit supporting field communications in a forest at sunset",
    },
    {
      src: "/media/capabilities/systems-context-2.png",
      alt: "Two hikers facing glacier mountains",
    },
    {
      src: "/media/capabilities/systems-context-3.png",
      alt: "Operators guiding a drone-lifted equipment crate in dry hill country",
    },
    {
      src: "/media/capabilities/systems-context-4.png",
      alt: "Stacked portable power units supporting a snowfield drone deployment",
    },
  ] satisfies readonly CapabilityMedia[],
  proof: {
    eyebrow: "FIELD VALIDATION",
    headingBefore: "ENGINEERED FOR THE FIELD.",
    headingAccent: "VALIDATED IN IT.",
    body: "Rise Power systems are designed from operator requirements outward. Sealed against dust and salt spray. Validated across coastal British Columbia, arctic, and high altitude conditions. Built for mission duration in environments where commercial hardware fails.",
    imageSrc: "/media/capabilities/field-validation-primary.png",
    imageAlt: "Engineered for the field. Validated in it.",
    secondaryImageSrc: "/media/capabilities/field-validation-secondary.png",
    secondaryImageAlt: "Soldier with laptop beside a generator in a forest",
  },
  closingBand: {
    imageSrc: "/media/use-cases/uc-defence.png",
    imageAlt: "Defense operations powered by Rise Mission Power",
  },
  certificationRoadmap: {
    eyebrow: "CERTIFICATION ROADMAP",
    heading: "Standards in active development.",
    body: "Rise Power is beta-stage technology. The standards below are in active compliance and testing work. Final certification status will be published as each program completes. Defense and infrastructure procurement teams can request the current compliance brief during a capability review.",
    items: [
      {
        status: "IN PROGRESS",
        standard: "Transport Canada. Hydrogen Cartridge Transport",
        description:
          "Ground and air transport of pressurized hydrogen cartridges within Canada.",
      },
      {
        status: "IN PROGRESS",
        standard: "UN 38.3. Lithium / Pressure Vessel Transport",
        description:
          "International transport qualification for cartridge assemblies.",
      },
      {
        status: "IN PROGRESS",
        standard: "DOT-39 Certified Cartridge Vessels",
        description:
          "United States DOT-compliant hydrogen cartridge vessels designed for the Rise return-and-refill logistics program.",
      },
      {
        status: "IN PROGRESS",
        standard: "MIL-STD-810. Environmental Engineering",
        description:
          "Shock, vibration, temperature, humidity, dust, and altitude qualification for field deployment.",
      },
      {
        status: "IN PROGRESS",
        standard: "MIL-STD-461. Electromagnetic Interference",
        description:
          "EMI and EMC qualification for collocated military electronics and comms equipment.",
      },
      {
        status: "IN PROGRESS",
        standard: "ISO 9001. Quality Management System",
        description: "Manufacturing quality system for production scaling.",
      },
      {
        status: "IN PROGRESS",
        standard: "CSA and NFPA 2. Hydrogen Indoor Use",
        description:
          "Indoor operation safety for data center, shelter, and command facility deployment.",
      },
    ] satisfies readonly CertificationRoadmapItem[],
  },
  tabs: [
    {
      id: "engineering",
      label: "Engineering",
      title: "Engineering & Development",
      eyebrow: "CONCEPT TO DEPLOYMENT",
      heading: "Engineering & Development",
      body: "From early-stage prototypes to production-ready hardware, our engineering team delivers hydrogen power systems designed for the environment where they will actually operate.",
      heroBody:
        "Hydrogen fuel cell design, power electronics, and ruggedized system development from concept through production.",
      href: "/capabilities/engineering-development",
      imageSrc: "/media/capabilities/engineering-development.png",
      imageAlt: "Soldiers with backpacks walking through grassland",
      mobileImageSrc: "/media/capabilities/engineering-development-mobile.png",
      secondaryImageSrc: "/media/capabilities/engineering-scope.png",
      secondaryImageAlt:
        "Soldier using a laptop beside a camouflage generator in a forest",
      gallery: [
        {
          src: "/media/capabilities/engineering.png",
          alt: "Soldiers in a forest with a portable generator",
        },
        {
          src: "/media/missions/mountain.png",
          alt: "Mission environment where engineered systems are deployed",
        },
        {
          src: "/media/capabilities/engineering-focus-3.png",
          alt: "Fielded Rise Power hardware in operational use",
        },
      ],
      deliverablesIntro:
        "Rise Power engineering covers hydrogen fuel cell systems, power electronics, and ruggedized system design. We work from early stage concepts through detailed engineering, prototyping, and production readiness, with the operating environment defined up front.",
      deliverables: [
        "Hydrogen fuel cell system design and optimization",
        "Power electronics and control system development",
        "Ruggedized enclosure and thermal management design",
        "Prototype fabrication and iterative testing",
        "Production engineering and manufacturing support",
      ],
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "FUEL CELL",
          label: "SYSTEM DESIGN",
          body: "Hydrogen fuel cell design and optimization.",
        },
        {
          value: "POWER",
          label: "ELECTRONICS",
          body: "Control systems for field loads.",
        },
        {
          value: "RUGGED",
          label: "ENCLOSURES",
          body: "Thermal management for austere use.",
        },
        {
          value: "PROD.",
          label: "READY",
          body: "Prototype through production support.",
        },
      ],
      callouts: [
        {
          title: "FUEL CELL STACK",
          body: "Hydrogen system design and optimization.",
        },
        {
          title: "POWER ELECTRONICS",
          body: "Controls engineered for field loads.",
        },
        {
          title: "THERMAL MANAGEMENT",
          body: "Ruggedized enclosure design.",
        },
        {
          title: "PRODUCTION SUPPORT",
          body: "From prototype to manufacturing.",
        },
      ],
    },
    {
      id: "integration",
      label: "Integration",
      title: "System Integration",
      eyebrow: "PLATFORMS. NETWORKS. INFRASTRUCTURE.",
      heading: "System Integration",
      body: "Integration with existing vehicle platforms, communications systems, and facility power networks.",
      heroBody:
        "Integration with existing vehicle platforms, communications systems, and facility power networks.",
      href: "/capabilities/system-integration",
      imageSrc: "/media/capabilities/system-integration.png",
      imageAlt:
        "Rise Mission Power module on a workbench beside a Rise-branded vehicle at a facility",
      secondaryImageSrc: "/media/use-cases/uc-deployment.png",
      secondaryImageAlt:
        "Military personnel, drone, and truck in a snowy field",
      gallery: [
        {
          src: "/media/capabilities/system-integration.png",
          alt: "Rise Mission Power module with blueprints and vehicle for system integration",
        },
        {
          src: "/media/use-cases/defense-security.jpg",
          alt: "Integrated power supporting defense communications hardware",
        },
        {
          src: "/media/use-cases/uc-grid1.png",
          alt: "Soldier on a mountain with a portable generator and cartridge props",
        },
      ],
      deliverablesIntro:
        "Rise Power systems are designed from the start to work within existing infrastructure. Integration covers vehicle platforms, communications systems, facility power networks, and legacy power management hardware.",
      deliverables: [
        "Platform specific integration engineering",
        "Power management and load balancing",
        "Communications and control interface design",
        "Hybrid power system architecture",
        "Legacy system compatibility assessment",
      ],
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "VEHICLE",
          label: "PLATFORMS",
          body: "Platform-specific integration engineering.",
        },
        {
          value: "COMMS",
          label: "INTERFACES",
          body: "Control and communications design.",
        },
        {
          value: "FACILITY",
          label: "POWER",
          body: "Works with existing site networks.",
        },
        {
          value: "HYBRID",
          label: "ARCHITECTURE",
          body: "Legacy power compatibility assessed.",
        },
      ],
      callouts: [
        {
          title: "VEHICLE PLATFORMS",
          body: "Integration with existing platforms.",
        },
        {
          title: "COMMS SYSTEMS",
          body: "Interfaces for mission networks.",
        },
        {
          title: "FACILITY POWER",
          body: "Fits existing infrastructure.",
        },
        {
          title: "LOAD BALANCING",
          body: "Power management for mixed loads.",
        },
      ],
    },
    {
      id: "field",
      label: "Field",
      title: "Field Deployment",
      eyebrow: "LOGISTICS. TRAINING. SUPPORT.",
      heading: "Field Deployment",
      body: "Logistics planning, operator training, and field service for deployed hydrogen power systems.",
      heroBody:
        "Logistics planning, operator training, and field service for deployed hydrogen power systems.",
      href: "/capabilities/field-deployment",
      imageSrc: "/media/capabilities/field-deployment-hero.png",
      imageAlt:
        "Rise portable power units at a desert field camp with solar panels, tent, and communications tower at sunset",
      secondaryImageSrc: "/media/products/hydrogen-cartridge-kit.png",
      secondaryImageAlt:
        "Hydrogen cartridge kit ready for rapid field replenishment",
      gallery: [
        {
          src: "/media/missions/mountain.png",
          alt: "Alpine field deployment for portable hydrogen power",
        },
        {
          src: "/media/use-cases/uc-defence.png",
          alt: "Defense field operations with Rise Power systems",
        },
        {
          src: "/media/capabilities/field-deployment-hero.png",
          alt: "Desert field camp with Rise portable power, solar panels, and a drone overhead",
        },
      ],
      deliverablesIntro:
        "Deployment is end to end. Rise Power provides logistics planning, operator training, field service, and cartridge supply chain management for every fielded system.",
      deliverables: [
        "Deployment planning and logistics support",
        "Operator and maintainer training programs",
        "Field service and technical support",
        "Spare parts and cartridge supply chain management",
        "Performance monitoring and optimization",
      ],
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "LOGISTICS",
          label: "PLANNING",
          body: "End-to-end deployment support.",
        },
        {
          value: "OPERATOR",
          label: "TRAINING",
          body: "Maintainer and operator programs.",
        },
        {
          value: "FIELD",
          label: "SERVICE",
          body: "Technical support for deployed systems.",
        },
        {
          value: "CARTRIDGE",
          label: "SUPPLY",
          body: "Spare parts and fuel logistics.",
        },
      ],
      callouts: [
        {
          title: "DEPLOYMENT PLANNING",
          body: "Logistics support for fielding.",
        },
        {
          title: "OPERATOR TRAINING",
          body: "Ready teams before first use.",
        },
        {
          title: "FIELD SERVICE",
          body: "Support where systems operate.",
        },
        {
          title: "CARTRIDGE CHAIN",
          body: "Supply managed for mission duration.",
        },
      ],
    },
    {
      id: "safety",
      label: "Safety",
      title: "Safety & Compliance",
      eyebrow: "ENGINEERED IN FROM DAY ONE",
      heading: "Safety & Compliance",
      body: "Safety engineered in from day one. Active certification across defense, transport, and indoor industrial standards.",
      heroBody:
        "Safety engineered in from day one. Active certification across defense, transport, and indoor industrial standards.",
      href: "/capabilities/safety-compliance",
      imageSrc: "/media/capabilities/safety-compliance.png",
      mobileImageSrc: "/media/capabilities/safety-compliance-mobile.png",
      imageAlt:
        "RISE hydrogen safety inspection lab with technicians and camo power units",
      secondaryImageSrc: "/media/use-cases/disaster-response.jpg",
      secondaryImageAlt:
        "Disaster-response camp with rubble and temporary shelters",
      gallery: [
        {
          src: "/media/capabilities/safety-compliance.png",
          alt: "RISE hydrogen safety inspection lab with H2 testing rack",
        },
        {
          src: "/media/products/product-sentinal.png",
          alt: "Couple cooking at a campsite",
        },
        {
          src: "/media/cases/emergency.png",
          alt: "Soldiers in a field deployment",
        },
      ],
      deliverablesIntro:
        "Pressure vessels, leak detection, and thermal management are designed in from the start. Rise Power works directly with the regulatory bodies and standards organizations relevant to defense, transport, and indoor industrial deployment.",
      deliverables: [
        "Safety by design engineering methodology",
        "Regulatory compliance assessment and documentation",
        "Hazard analysis and risk mitigation",
        "Environmental testing and qualification",
        "Certification support documentation",
      ],
      cta: { label: "Request a Briefing", href: "/contact" },
      stats: [
        {
          value: "PRESSURE",
          label: "VESSELS",
          body: "Designed in from day one.",
        },
        {
          value: "LEAK",
          label: "DETECTION",
          body: "Active monitoring for safe operation.",
        },
        {
          value: "THERMAL",
          label: "MGMT",
          body: "Managed heat for field and indoor use.",
        },
        {
          value: "REGS",
          label: "ALIGNED",
          body: "Defense, transport, and indoor standards.",
        },
      ],
      callouts: [
        {
          title: "PRESSURE VESSELS",
          body: "Safety designed into the fuel path.",
        },
        {
          title: "LEAK DETECTION",
          body: "Monitoring from the start.",
        },
        {
          title: "THERMAL MANAGEMENT",
          body: "Controlled for austere and indoor use.",
        },
        {
          title: "COMPLIANCE WORK",
          body: "Defense, transport, and industrial bodies.",
        },
      ],
    },
  ] satisfies readonly CapabilityTab[],
  diagramImage: "Soldiers in a forest with a portable generator",
  diagramImageSrc: "/media/capabilities/engineering.png",
};

export const hydrogenEcosystem = {
  eyebrow: "ONE HYDROGEN ECOSYSTEM",
  headingBefore: "SAME HYDROGEN.",
  headingAccent: "MORE POSSIBILITIES.",
  body: "One refillable cartridge powers Sentinel, Falcon, Titan, and field deployments — cleaner energy, greater independence, a stronger tomorrow.",
  imageSrc: "/media/home/one-hydrogen-ecosystem.png",
  imageAlt:
    "One hydrogen ecosystem diagram showing Rise Mission Power systems for UAV range extender, tactical generator, home backup, outdoor, commercial, and portable field power",
  cta: { label: "Explore Products", href: "/products" },
};

export const customerPartners = {
  eyebrow: "CUSTOMERS & PARTNERS",
  headingBefore: "BUILT FOR REAL-WORLD USE.",
  headingAccent: "EVERYDAY RESILIENCE FIRST.",
  body: "Rise Power systems are engineered for municipalities, utilities, communities, and organizations that need quiet, zero-emission backup when the grid cannot be trusted.",
  cases: [
    {
      category: "MUNICIPALITIES",
      title: "Quiet backup for city facilities and public works.",
      body: "A municipal operations team needed quiet, zero-emission backup for civic facilities during outages. Sentinel and Titan units ran on refillable cartridges swapped in under 30 seconds — no diesel truck, no neighbourhood noise, no exhaust at the point of use.",
      stats: [
        { value: "QUIET", label: "Neighbourhood-Friendly" },
        { value: "0 EMISSIONS", label: "At Point of Use" },
        { value: "<30 SEC", label: "Cartridge Swap" },
      ],
      href: "/use-cases#use-cases",
      image: "Municipal backup case",
      imageSrc: "/media/cases/municipalities.png",
    },
    {
      category: "HOMES & COMMUNITY",
      title: "Reliable Backup Power Anywhere, Anytime",
      body: "Hydrogen power systems for uninterrupted backup during outages, severe weather, and community emergency readiness.",
      stats: [
        { value: "ZERO EXHAUST", label: "Indoor-Safe Power" },
        { value: "QUIET", label: "Backup Operation" },
        { value: "CARTRIDGE", label: "Logistics Ready" },
      ],
      href: "/use-cases#use-cases",
      image: "Soldiers with Rise power systems at a mountain overlook at sunset",
      imageSrc: "/media/cases/homes-community.png",
      imageClassName: "object-cover object-center",
    },
    {
      category: "MINING COMPANY",
      title: "Clean Power for Extreme Environments",
      body: "Delivered robust, low-maintenance power solutions for electrified drilling and site infrastructure.",
      stats: [
        { value: "30% LOWER TCO", label: "vs Diesel" },
        { value: "70% LESS MAINT.", label: "Downtime Reduced" },
        { value: "BUILT TOUGH", label: "For Harsh Sites" },
      ],
      href: "/use-cases#remote-operations",
      image: "Mining company case study",
      imageSrc: "/media/cases/mining.png",
    },
    {
      category: "DISASTER RESPONSE",
      title: "Rapid Response. Indoor-Safe Power.",
      body: "Quiet, emission-free power for field hospitals, shelters, and emergency response operations.",
      stats: [
        { value: "INDOOR-SAFE", label: "Zero Exhaust" },
        { value: "SILENT", label: "Low Acoustic" },
        { value: "RAPID", label: "Field Deployment" },
      ],
      href: "/use-cases#use-cases",
      image: "Emergency services case",
      imageSrc: "/media/cases/disaster-response.png",
    },
  ] satisfies readonly CaseCard[],
  partnerHeading: "ENGINEERING THE FUTURE OF HYDROGEN",
  partners: [
    "ENGINEERED FOR RELIABILITY",
    "CANADIAN-ENGINEERED. FIELD-VALIDATED.",
    "SILENT. ZERO-EMISSION. MISSION READY.",
    "BUILT FOR OPERATORS.",
    "A CIMTECH GREEN ENERGY COMPANY",
  ] as const,
};

export const businessesCompanies = {
  eyebrow: "BUSINESSES & COMPANIES",
  headingBefore: "ENGINEERED IN CANADA.",
  headingAccent: "DEPLOYED WORLDWIDE.",
  body: "Rise Mission Power is part of a Canadian advanced manufacturing group—bringing precision engineering, hydrogen innovation, and field-validated power systems for everyday resilience.",
  companies: [
    {
      name: "CIMtech Green Energy",
      body: "Canadian advanced manufacturing for hydrogen systems—precision engineering, production capability, and field-ready energy platforms.",
      image: "Manufacturing plant image with mountains and a non-official logo",
      imageSrc: "/media/businesses/cimtech-green-energy.png",
      href: "https://www.cimtechgreenenergy.com",
      cta: "Visit CIMtech Green Energy",
      external: true,
    },
    {
      name: "Dr. Paul Ghotra",
      body: "Founder & CEO of CIMtech Green Energy and Rise Mission Power—visionary entrepreneur and award-winning leader in Canadian green energy.",
      image: "Portrait of Dr. Paul Ghotra",
      imageSrc: "/media/businesses/dr-paul-ghotra.png",
      href: "https://mediumspringgreen-penguin-228172.hostingersite.com/",
      cta: "Visit Dr. Paul Ghotra",
      external: true,
    },
  ] satisfies readonly GroupCompanyCard[],
};

export const closingCta = {
  headingBefore: "REQUEST A",
  headingAccent: "PRODUCT TRIAL.",
  body: "We welcome municipalities, utilities, and community partners to explore product trials and clean-energy pilot programs. Tell us your backup or field power need and we will respond with specs and a deployment summary.",
  panelEyebrow: "READY TO DISCUSS YOUR REQUIREMENTS?",
  primaryCta: { label: "REQUEST A DEMO", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "VIEW PRODUCTS", href: "/products" } satisfies Cta,
  chips: [
    { title: "ZERO EMISSIONS", subtitle: "Clean power at point of use." },
    { title: "QUIET OPERATION", subtitle: "Neighbourhood and public-space ready." },
    { title: "RAPID REFUEL", subtitle: "Under-30-second cartridge exchange." },
    { title: "BC-BUILT", subtitle: "Engineered and built in British Columbia." },
  ] satisfies readonly HeroChip[],
  image: "Camouflage generator by a forest lake with mountains",
  imageSrc: "/media/cta/closing.png",
};

export const footer = {
  brand: "RISE POWER",
  tagline: "Quiet. Zero-Emission. Everyday Resilience.",
  blurb:
    "Portable hydrogen fuel cell systems for municipal, emergency, field, and off-grid applications. Engineered and built in British Columbia.",
  groups: [
    {
      heading: "Solutions",
      links: [
        { label: "Products", href: "/products" },
        { label: "Case Studies", href: "/use-cases" },
        { label: "Capabilities", href: "/capabilities" },
        { label: "How It Works", href: "/#how-it-works" },
      ],
    },
    {
      heading: "Markets",
      links: [
        { label: "Military & Defence", href: "/use-cases#defense-security" },
        { label: "Commercial", href: "/use-cases#remote-operations" },
        { label: "Consumer", href: "/use-cases#disaster-response" },
        { label: "Municipalities & Public Works", href: "/use-cases#use-cases" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/company" },
        { label: "Investors", href: "/investors" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      heading: "Resources",
      links: [
        { label: "Resource Center", href: "/resources" },
        { label: "Datasheets", href: "/datasheets" },
        { label: "Procurement FAQ", href: "/resources/faq" },
        { label: "Insights", href: "/insights" },
      ],
    },
  ] satisfies readonly FooterGroup[],
  newsletter: {
    heading: "Stay Connected",
    body: "Subscribe for updates on new products, deployments, and industry insights.",
    placeholder: "Enter your email address",
    comingSoonMessage:
      "Thanks for your interest. Email updates aren’t live yet — please reach us through Contact and we’ll follow up.",
  },
  contact: {
    email: site.email,
    phone: site.phone,
    phoneHref: site.phoneHref,
    location: `${site.name} · ${site.address.city}, ${site.address.country}`,
  },
  social: [
    { label: "LinkedIn", href: "#" },
    { label: "YouTube", href: "#" },
    { label: "X", href: "#" },
  ] satisfies readonly SocialLink[],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Use", href: "/terms" },
    { label: "Cookies Policy", href: "/privacy#cookies" },
  ] satisfies readonly NavItem[],
  copyright: "© 2026 Rise Power, Inc. All rights reserved.",
  badgeBefore: "CANADIAN-ENGINEERED.",
  badgeAccent: "FIELD-VALIDATED.",
};
