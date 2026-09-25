export const site = {
  name: "Rise Power",
  legalName: "Rise Power Corp.",
  parent: "CIMtech Green Energy",
  email: "paul@risepower.com",
  phone: "+1 (604) 575-8854",
  phoneHref: "tel:+16045758854",
  address: {
    line1: "Vancouver",
    city: "Vancouver",
    region: "BC",
    postalCode: "",
    country: "Canada",
  },
  url: "https://www.risepower.com",
};

export const nav = [
  { href: "/", label: "Home" },
  { href: "/company", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/use-cases", label: "Case Studies" },
  { href: "/investors", label: "Investors" },
] as const;

export const stats = [
  { value: "Quiet", label: "Neighbourhood-friendly operation" },
  { value: "0 Emissions", label: "Zero exhaust at point of use" },
  { value: "∞ Runtime", label: "Unlimited with cartridge swap" },
  { value: "40 lb", label: "Titan portable generator weight" },
];

export const products = [
  {
    slug: "sentinel",
    number: "01",
    name: "Rise Sentinel™",
    tagline: "Power Cube for everyday backup",
    description:
      "Compact hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play setup with refillable hydrogen cartridges. Lightweight and easy to carry — no grid connection required, zero-emissions power at the point of use.",
    image: "/media/products/product-sentinal.png",
    specs: [
      "Quiet operation for everyday settings",
      "Plug-and-play setup with simple controls",
      "Refillable hydrogen cartridge system",
      "Lightweight and easy to carry",
      "Zero-emissions power at point of use",
    ],
  },
  {
    slug: "falcon",
    number: "02",
    name: "Rise Falcon™",
    tagline: "Drone range extender",
    description:
      "Plug-and-play hydrogen range extender for compatible drones. Up to 5x extended flight range with low-noise, zero-emission operation. Quick-swap hydrogen cartridges, reliable in cold weather, and a lightweight modular design for inspection, mapping, public safety, and remote operations.",
    image: "/media/products/product-falcon.png",
    specs: [
      "Up to 5x extended flight range",
      "Low noise, zero-emission operation",
      "Quick-swap hydrogen cartridge system",
      "Reliable in cold-weather missions (−20 °C to +50 °C)",
      "Cartridge load time under 30 seconds",
    ],
  },
  {
    slug: "titan",
    number: "03",
    name: "Rise Titan™",
    tagline: "1.5 kW portable generator",
    description:
      "Clean backup power for everyday and emergency use. A 1.5 kW zero-emissions portable generator with quiet operation, plug-and-play setup, and refillable hydrogen cartridges. Built for municipalities, utilities, communities, and businesses.",
    image: "/media/products/product-titan.png",
    specs: [
      "1.5 kW capacity",
      "40 lb portable weight · 24 × 18 × 24 in",
      "Operates −22 °C to +50 °C",
      "Unlimited runtime with 3-cartridge support",
      "Cartridge swap in less than 30 seconds",
    ],
  },
  {
    slug: "cartridge-kit",
    number: "04",
    name: "Hydrogen Cartridge Kit",
    tagline: "Universal fuel logistics",
    description:
      "Universal fuel cell compatible cartridges with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
    image: "/media/products/product-hydro-kit.png",
    specs: [
      "Universal fuel cell compatibility",
      "RFID enabled smart monitoring",
      "Leak proof technology",
      "Tool free cartridge exchange",
      "15 year shelf life",
    ],
  },
];

export const useCases = [
  {
    slug: "defense-security",
    title: "Municipalities & Public Works",
    description:
      "Quiet, zero-emission backup for city facilities, public works, and neighbourhood operations when the grid is down. Rapidly deployable portable hydrogen power for civic teams.",
    image: "/media/cases/municipalities.png",
    howItWorks: [
      "Deploy Sentinel or Titan at city facilities and public works sites",
      "Power lights, communications, charging, and essential devices",
      "Extend drone inspection and mapping flights with Falcon",
      "Swap refillable hydrogen cartridges in under 30 seconds",
      "Operate quietly with zero emissions at the point of use",
    ],
  },
  {
    slug: "remote-operations",
    title: "Utilities & Remote Communities",
    description:
      "Field support for utility service and repair crews, plus reliable off-grid power for remote and Indigenous communities where grid access is limited.",
    image: "/media/cases/utilities-remote.png",
    howItWorks: [
      "Pre-position refillable cartridges at remote and community sites",
      "Support utility crews with portable power for tools and communications",
      "Operate without a grid connection for days of continuous use",
      "Run Titan from −22 °C to +50 °C in real-world field conditions",
      "Eliminate fuel spill and contamination risk at sensitive sites",
    ],
  },
  {
    slug: "disaster-response",
    title: "Homes & Emergency Response",
    description:
      "Backup during outages and severe weather for homes, community gathering spaces, and emergency kits. Zero exhaust enables indoor-safe operation when the grid drops.",
    image: "/media/cases/homes-emergency.png",
    howItWorks: [
      "Keep Sentinel or Titan ready in home and community emergency kits",
      "Power lights, laptops, charging, and essential small devices",
      "Deploy to shelters and gathering spaces with zero emissions indoors",
      "Swap cartridges in seconds to extend runtime",
      "Stockpile cartridges indefinitely for seasonal readiness",
    ],
  },
  {
    slug: "critical-infrastructure",
    title: "Small Business & Mobile Sites",
    description:
      "Temporary power for essential small-business operations, community facilities, events, and mobile work sites where grid access is limited or unreliable.",
    image: "/media/use-cases/uc-grid4.png",
    howItWorks: [
      "Set up Titan plug-and-play for temporary or event power",
      "Run lights, communications, charging, and small tools",
      "Move a 40 lb portable generator where power is needed",
      "Scale runtime with refillable cartridges — no fuel truck required",
      "Pilot clean-energy programs with municipalities and businesses",
    ],
  },
];

export const values = [
  {
    number: "01",
    title: "Everyday Resilience",
    body: "Portable hydrogen power engineered for backup, outdoor, and off-grid use when the grid cannot be trusted.",
  },
  {
    number: "02",
    title: "Safety Engineered In",
    body: "Pressure vessels, leak detection, and thermal management are designed in from day one.",
  },
  {
    number: "03",
    title: "Canadian Manufacturing",
    body: "Engineered and built in British Columbia for quiet, reliable, rapidly deployable operations.",
  },
  {
    number: "04",
    title: "Clean & Sustainable",
    body: "Zero-emissions at the point of use. Refillable cartridges and long service life reduce waste.",
  },
];

export const team = [
  {
    name: "Dr. Paul Ghotra",
    role: "Founder & Chief Executive Officer",
    bio: "Two decades scaling Canadian advanced manufacturing and clean energy. Founder of CIMtech Green Energy. Recognized as Surrey Business Person of the Year for hydrogen leadership.",
  },
  {
    name: "[Team Member TBA]",
    role: "VP Engineering",
    bio: "Hydrogen fuel cell systems, power electronics, and ruggedized field hardware. Bio to be announced.",
  },
  {
    name: "[Team Member TBA]",
    role: "VP Programs & Business Development",
    bio: "Municipal programs, partnerships, and customer engagement. Bio to be announced.",
  },
];

export { insights } from "@/lib/insights";
export const standards = [
  "Transport Canada",
  "UN 38.3",
  "DOT-39",
  "MIL-STD-810",
  "MIL-STD-461",
  "ISO 9001",
];
