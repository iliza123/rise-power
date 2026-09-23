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

export type EcosystemStep = {
  step: string;
  title: string;
  blurb: string;
  image: string;
  imageSrc?: string;
  caption?: string;
  highlighted?: boolean;
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
  "product-ecosystem",
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

/** Exact Frame 1 product CTA / stat labels */
export const productUiLabels = {
  runtime: "Runtime",
  weight: "Weight",
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
  primaryCta: { label: "Request a Trial", href: "/contact" } satisfies Cta,
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
      value: "40",
      unit: "lb",
      title: "Titan portable generator weight",
      body: "Portable and easy to move where power is needed.",
      percent: 60,
    },
  ] satisfies readonly PerformanceGauge[],
};

export const threeMarkets = {
  eyebrow: "WHERE POWER IS NEEDED",
  headingBefore: "EVERYDAY",
  headingAccent: "RESILIENCE.",
  body: "Select a scenario to see how Rise Power systems support municipal, community, and emergency backup.",
  cards: [
    {
      title: "Municipalities & Public Works",
      body: "Quiet backup for city facilities, public works, and neighbourhood operations.",
      theater: "CIVIC",
      points: ["City Facilities", "Public Works", "Quiet Ops"],
      detail:
        "Rapidly deployable zero-emission power when the grid is down — ready for product trials and clean-energy pilots.",
      href: "/use-cases#use-cases",
      cta: "View Municipal",
      image: "Municipalities and public works market imagery",
      imageSrc: "/media/markets/municipal.png",
    },
    {
      title: "Utilities & Remote Communities",
      body: "Field support for service crews and off-grid power for remote and Indigenous communities.",
      theater: "FIELD",
      points: ["Utility Crews", "Remote Sites", "Off-Grid"],
      detail:
        "Pre-position cartridges and operate from −22 °C to +50 °C without a fuel truck.",
      href: "/use-cases#remote-operations",
      cta: "View Field Support",
      image: "Utilities and remote communities market imagery",
      imageSrc: "/media/markets/utilities.png",
    },
    {
      title: "Homes & Emergency Response",
      body: "Backup during outages and severe weather for homes, gathering spaces, and emergency kits.",
      theater: "BACKUP",
      points: ["Home Outages", "Shelters", "Emergency Kits"],
      detail:
        "Indoor-safe zero exhaust. Refillable cartridges stockpile indefinitely; swap in seconds.",
      href: "/use-cases#disaster-response",
      cta: "View Emergency Backup",
      image: "Homes and emergency response market imagery",
      imageSrc: "/media/markets/emergency.png",
    },
  ] satisfies readonly MarketCard[],
};

export const productEcosystem = {
  eyebrow: "OUR ECOSYSTEM. ENDLESS POWER.",
  headingBefore: "THE",
  headingAccent: "HYDROGEN POWER",
  headingAfter: "ECOSYSTEM",
  body: "A closed-loop system engineered for performance, sustainability, and mission-ready reliability.",
  steps: [
    {
      step: "01",
      title: "Hydrogen Supply",
      blurb: "Clean hydrogen is produced and delivered.",
      image: "Hydrogen supply",
      imageSrc: "/media/ecosystem/01.png",
    },
    {
      step: "02",
      title: "Refill Station",
      blurb: "Hydrogen is safely transferred at certified stations.",
      image: "H2 refill station",
      imageSrc: "/media/ecosystem/02.png",
    },
    {
      step: "03",
      title: "Plug & Play Cartridge",
      blurb: "Standardized cartridges enable rapid, tool-free swaps.",
      image: "Plug & play cartridge",
      imageSrc: "/media/ecosystem/03.png",
      highlighted: true,
    },
    {
      step: "04",
      title: "Mission Power",
      blurb: "Reliable, silent power for the toughest missions.",
      image: "Mission power unit",
      imageSrc: "/media/ecosystem/04.png",
    },
    {
      step: "05",
      title: "Return & Refill",
      blurb: "Used cartridges are returned, refilled, and redeployed.",
      image: "Return & refill",
      imageSrc: "/media/ecosystem/05-return-refill.png",
      caption: "RENEW. REFILL. REDEPLOY.",
    },
  ] satisfies readonly EcosystemStep[],
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
      weight: "LIGHTWEIGHT",
      weightNote: "Easy to Carry",
      power: "ZERO EMISSIONS",
      powerNote: "At Point of Use",
      idealFor: ["Camping & Outdoor", "Home Outages", "Emergency Kits"],
      detailsHref: "/products#sentinel",
      datasheetHref: "/datasheets",
      image: "SENTINEL portable hydrogen power system",
      imageSrc: "/media/products/featured-sentinel.png",
    },
    {
      name: "FALCON",
      trademark: "",
      subtitle: "Hydrogen Drone Range Extender",
      body: "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation and quick-swap hydrogen cartridges.",
      runtime: "UP TO 5×",
      runtimeNote: "Extended Flight Range",
      weight: "COLD WEATHER",
      weightNote: "−20 °C to +50 °C",
      power: "UNDER 30 SEC",
      powerNote: "Cartridge Load Time",
      idealFor: ["Inspection", "Mapping", "Public Safety"],
      detailsHref: "/products#falcon",
      datasheetHref: "/datasheets",
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
      weight: "40 LB",
      weightNote: "24 × 18 × 24 in",
      power: "1.5 kW",
      powerNote: "Capacity",
      idealFor: ["Municipalities", "Utilities", "Home Backup"],
      detailsHref: "/products#titan",
      datasheetHref: "/datasheets",
      image: "TITAN zero-emission generator",
      imageSrc: "/media/products/featured-titan.png",
    },
    {
      name: "HYDROGEN CARTRIDGE KIT",
      trademark: "",
      subtitle: "Universal Fuel System",
      body: "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
      runtime: "15 YEARS",
      runtimeNote: "Shelf Life",
      weight: "LEAK PROOF",
      weightNote: "Lightweight Design",
      power: "RFID SMART",
      powerNote: "Monitoring Enabled",
      idealFor: ["Fuel Cell Systems", "Field Operations", "Rapid Replenishment"],
      detailsHref: "/products#cartridge-kit",
      datasheetHref: "/datasheets",
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
      alt: "Military drone operating over snowy mountain terrain at dusk",
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
    imageSrc: "/media/capabilities/field-deployment.png",
    imageAlt: "Engineered for the field. Validated in it.",
    secondaryImageSrc: "/media/capabilities/field-validation-secondary.png",
    secondaryImageAlt: "Mission landscape supporting field-validated hydrogen power",
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
      imageAlt:
        "Rise Power engineers reviewing a fuel cell stack and CAD exploded view.",
      secondaryImageSrc: "/media/company/company-v2.png",
      secondaryImageAlt:
        "Rise Power enclosure and harnessing during engineering development",
      gallery: [
        {
          src: "/media/capabilities/engineering.png",
          alt: "Engineering diagram of Rise Power hydrogen system architecture",
        },
        {
          src: "/media/missions/mountain.png",
          alt: "Mission environment where engineered systems are deployed",
        },
        {
          src: "/media/use-cases/uc-defence.png",
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
        "Gloved hands mating a stainless quick-disconnect coupler into a control cabinet.",
      secondaryImageSrc: "/media/use-cases/uc-deployment.png",
      secondaryImageAlt:
        "Rise Sentinel integrated with field shelter and communications rack",
      gallery: [
        {
          src: "/media/capabilities/system-integration.png",
          alt: "Platform integration with communications and field power",
        },
        {
          src: "/media/use-cases/defense-security.jpg",
          alt: "Integrated power supporting defense communications hardware",
        },
        {
          src: "/media/use-cases/uc-grid1.png",
          alt: "Integrated hydrogen power components for vehicle and facility use",
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
        "Canadian Armed Forces soldiers unloading a Rise Power power cube from a military truck at golden hour.",
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
          alt: "Field deployment of Rise Mission Power systems",
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
      imageAlt:
        "Safety technician in nitrile gloves testing a hydrogen cartridge with a handheld leak detector.",
      secondaryImageSrc: "/media/use-cases/disaster-response.jpg",
      secondaryImageAlt:
        "Disaster response deployment with safety-first hydrogen power",
      gallery: [
        {
          src: "/media/company/company-v4.png",
          alt: "Quality and compliance review of Rise Power hardware",
        },
        {
          src: "/media/products/product-sentinal.png",
          alt: "Rise Power Sentinel configured for safe field deployment",
        },
        {
          src: "/media/cases/emergency.png",
          alt: "Emergency response power with safety systems engineered in",
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
  diagramImage: "Capabilities engineering diagram",
  diagramImageSrc: "/media/capabilities/engineering.png",
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
      image: "Home and community backup case",
      imageSrc: "/media/cases/homes-community.png",
    },
    {
      category: "UTILITIES & REMOTE",
      title: "Clean Power for Field and Off-Grid Sites",
      body: "Robust, low-maintenance power for utility crews and remote communities where diesel logistics are a liability.",
      stats: [
        { value: "LOW MAINT.", label: "Fewer Moving Parts" },
        { value: "40 LB", label: "Titan Portable Weight" },
        { value: "1.5 kW", label: "Titan Capacity" },
      ],
      href: "/use-cases#use-cases",
      image: "Utility and remote site case",
      imageSrc: "/media/cases/utilities-remote.png",
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
  partnerHeading: "PARTNERING WITH INNOVATORS AND INDUSTRY LEADERS",
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
      image: "CIMtech Green Energy facility and clean energy infrastructure",
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
      href: "https://www.drpaulghotra.com/",
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
  primaryCta: { label: "REQUEST A TRIAL", href: "/contact" } satisfies Cta,
  secondaryCta: { label: "VIEW PRODUCTS", href: "/products" } satisfies Cta,
  chips: [
    { title: "ZERO EMISSIONS", subtitle: "Clean power at point of use." },
    { title: "QUIET OPERATION", subtitle: "Neighbourhood and public-space ready." },
    { title: "RAPID REFUEL", subtitle: "Under-30-second cartridge exchange." },
    { title: "BC-BUILT", subtitle: "Engineered and built in British Columbia." },
  ] satisfies readonly HeroChip[],
  image: "Closing CTA mission landscape",
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
        { label: "Use Cases", href: "/use-cases" },
        { label: "Capabilities", href: "/capabilities" },
        { label: "Product Ecosystem", href: "/#product-ecosystem" },
      ],
    },
    {
      heading: "Markets",
      links: [
        { label: "Municipalities & Public Works", href: "/use-cases#use-cases" },
        { label: "Small Business & Mobile Sites", href: "/use-cases#critical-infrastructure" },
        { label: "Utilities & Remote Communities", href: "/use-cases#remote-operations" },
        { label: "Homes & Emergency Response", href: "/use-cases#disaster-response" },
      ],
    },
    {
      heading: "Company",
      links: [
        { label: "About", href: "/company" },
        { label: "Investors", href: "/investors" },
        { label: "Careers", href: "/contact" },
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
        { label: "Privacy", href: "/privacy" },
        { label: "Terms", href: "/terms" },
      ],
    },
  ] satisfies readonly FooterGroup[],
  newsletter: {
    heading: "Stay Connected",
    body: "Subscribe for updates on new products, deployments, and industry insights.",
    placeholder: "Enter your email address",
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
    { label: "Cookies Policy", href: "/privacy" },
  ] satisfies readonly NavItem[],
  copyright: "© 2026 Rise Power, Inc. All rights reserved.",
  badgeBefore: "CANADIAN-ENGINEERED.",
  badgeAccent: "FIELD-VALIDATED.",
};
