export const site = {
  name: "Rise Mission Power",
  legalName: "Rise Power Corp.",
  parent: "CIMtech Green Energy",
  email: "info@risepower.com",
  phone: "+1 (604) 575-8853",
  phoneHref: "tel:+16045758853",
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
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/use-cases", label: "Case Studies" },
  { href: "/investors", label: "Investors" },
] as const;

export const stats = [
  { value: "Quiet", label: "Neighbourhood-friendly operation" },
  { value: "0 Emissions", label: "Zero exhaust at point of use" },
  { value: "∞ Runtime", label: "Unlimited with cartridge swap" },
  { value: "40 lb", label: "Rise-Titan portable generator weight" },
];

export const products = [
  {
    slug: "sentinel",
    number: "01",
    name: "Rise-Sentinel",
    tagline: "Power Cube for everyday backup",
    description:
      "Compact portable hydrogen power for everyday backup and outdoor use. Quiet, plug-and-play hydrogen cartridge setup. Lightweight and easy to carry — no grid connection required, zero-emission power at the point of use.",
    image: "/media/products/product-sentinal.png",
    specs: [
      "Quiet operation for everyday settings",
      "Plug-and-play hydrogen cartridge setup",
      "Refillable hydrogen cartridge system",
      "Lightweight and easy to carry",
      "Zero-emission power at point of use",
    ],
  },
  {
    slug: "falcon",
    number: "02",
    name: "Rise-Falcon",
    tagline: "UAV hydrogen fuel cell range extender",
    description:
      "UAV hydrogen fuel cell and plug-and-play hydrogen range extender for drones. Up to 5× extended flight range with low-noise, zero-emission operation. Quick-swap hydrogen cartridges for inspection, mapping, public safety, and remote operations.",
    image: "/media/products/product-falcon.png",
    specs: [
      "Up to 5× extended flight range",
      "UAV hydrogen fuel cell — low noise, zero emission",
      "Quick-swap hydrogen cartridge system",
      "Reliable in cold-weather missions (−20 °C to +50 °C)",
      "Cartridge load time under 30 seconds",
    ],
  },
  {
    slug: "titan",
    number: "03",
    name: "Rise-Titan",
    tagline: "1.5 kW portable hydrogen fuel cell generator",
    description:
      "Portable hydrogen fuel cell generator and clean emergency backup power. A 1.5 kW zero-emission diesel generator alternative with quiet operation, plug-and-play setup, and refillable hydrogen cartridges. Built for municipalities, utilities, construction sites, and businesses.",
    image: "/media/products/product-titan.png",
    specs: [
      "1.5 kW portable hydrogen fuel cell generator",
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
    tagline: "Plug-and-play hydrogen cartridge system",
    description:
      "Plug-and-play hydrogen cartridge system with RFID smart monitoring. Leak proof, lightweight, and designed for rapid field replenishment. Swap a cartridge and restore full runtime without tools or specialized training.",
    image: "/media/products/product-hydro-kit.png",
    specs: [
      "Universal fuel cell compatibility",
      "Plug-and-play hydrogen cartridge system",
      "RFID enabled smart monitoring",
      "Leak proof technology",
      "15 year shelf life",
    ],
  },
];

export const useCases = [
  {
    slug: "defence-security",
    title: "Municipalities & Public Works",
    description:
      "Quiet, zero-emission backup power without diesel for city facilities, public works, and neighbourhood operations. Rapidly deployable portable hydrogen power for civic teams.",
    image: "/media/cases/municipalities.png",
    howItWorks: [
      "Deploy Rise-Sentinel or Rise-Titan at city facilities and public works sites",
      "Power lights, communications, charging, and essential devices",
      "Extend drone inspection and mapping flights with Rise-Falcon",
      "Swap refillable hydrogen cartridges in under 30 seconds",
      "Operate quietly with zero emissions at the point of use",
    ],
  },
  {
    slug: "remote-operations",
    title: "Utilities & Remote Communities",
    description:
      "Clean power for remote locations — field support for utility crews plus reliable off-grid hydrogen backup power for remote and Indigenous communities where grid access is limited.",
    image: "/media/cases/utilities-remote.png",
    howItWorks: [
      "Pre-position refillable cartridges at remote and community sites",
      "Support utility crews with portable power for tools and communications",
      "Operate without a grid connection for days of continuous use",
      "Run Rise-Titan from −22 °C to +50 °C in real-world field conditions",
      "Eliminate fuel spill and contamination risk at sensitive sites",
    ],
  },
  {
    slug: "disaster-response",
    title: "Homes & Emergency Response",
    description:
      "Clean emergency generators and indoor safe backup power for homes, community gathering spaces, and emergency kits. Zero exhaust enables indoor operation when the grid drops.",
    image: "/media/cases/homes-emergency.png",
    howItWorks: [
      "Keep Rise-Sentinel or Rise-Titan ready in home and community emergency kits",
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
      "Portable power for construction sites, events, and mobile work sites — temporary hydrogen backup power where grid access is limited or unreliable.",
    image: "/media/use-cases/uc-grid4.png",
    howItWorks: [
      "Set up Rise-Titan plug-and-play for temporary or event power",
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
    bio: "Two decades scaling Canadian advanced manufacturing and clean energy. Recognized as Surrey Business Person of the Year for hydrogen leadership.",
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
