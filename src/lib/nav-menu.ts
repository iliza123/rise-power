export type MegaLink = {
  label: string;
  href: string;
  description?: string;
};

export type MegaFeature = {
  title: string;
  body: string;
  href: string;
  cta: string;
};

export type MegaNavItem = {
  label: string;
  href: string;
  /** Single flat list for the mega drawer — keep lean */
  links?: readonly MegaLink[];
  /** Optional one highlight card */
  feature?: MegaFeature;
};

/**
 * Primary navigation — client proposed main nav:
 * About (Company) | Defense | Consumer | Commercial | Capabilities | Investors | Resources | Careers
 *
 * Previous items (Products, Case Studies) are commented out as backup — do not delete.
 */
export const megaNavItems: readonly MegaNavItem[] = [
  // {
  //   label: "Products",
  //   href: "/products",
  //   links: [
  //     {
  //       label: "Rise Sentinel™",
  //       href: "/products#sentinel",
  //       description: "Power Cube for everyday backup and outdoor use.",
  //     },
  //     {
  //       label: "Rise Falcon™",
  //       href: "/products#falcon",
  //       description: "Plug-and-play drone range extender — up to 5x flight range.",
  //     },
  //     {
  //       label: "Rise Titan™",
  //       href: "/products#titan",
  //       description: "1.5 kW portable generator for everyday and emergency backup.",
  //     },
  //     {
  //       label: "Hydrogen Cartridge Kit",
  //       href: "/products#cartridge-kit",
  //       description: "Universal slim cartridges with quick-connect.",
  //     },
  //   ],
  //   feature: {
  //     title: "All Products",
  //     body: "Four systems. One cartridge ecosystem. Portable hydrogen power for everyday resilience.",
  //     href: "/products",
  //     cta: "View All Products",
  //   },
  // },

  // /* No links → no desktop chevron / no mobile accordion */
  // {
  //   label: "Case Studies",
  //   href: "/use-cases",
  // },

  {
    label: "About",
    href: "/about",
    links: [
      // {
      //   label: "About Rise Power",
      //   href: "/about",
      //   description: "The mission behind portable hydrogen power.",
      // },
      {
        label: "How We Work",
        href: "/about#how-we-work",
        description:
          "Engineering, Canadian manufacturing, and field validation.",
      },
      {
        label: "Contact",
        href: "/contact",
        description: "Ask about product trials and clean-energy pilots.",
      },
    ],
    feature: {
      title: "Canadian-Built",
      body: "Engineered and built in British Columbia. A CIMtech Green Energy company.",
      href: "/about",
      cta: "About Rise Power",
    },
  },

  /* No links → no desktop chevron / no mobile accordion */
  {
    label: "Defense",
    href: "/markets/defense",
  },
  {
    label: "Consumer",
    href: "/markets/consumer",
  },
  {
    label: "Commercial",
    href: "/markets/commercial",
  },

  {
    label: "Capabilities",
    href: "/capabilities",
    links: [
      {
        label: "Engineering & Development",
        href: "/capabilities/engineering-development",
        description: "From prototypes to production-ready hardware.",
      },
      {
        label: "System Integration",
        href: "/capabilities/system-integration",
        description: "Works with existing platforms and infrastructure.",
      },
      {
        label: "Field Deployment",
        href: "/capabilities/field-deployment",
        description: "Rapid deployment with end-to-end logistics support.",
      },
      {
        label: "Safety & Compliance",
        href: "/capabilities/safety-compliance",
        description: "Safety and compliance engineered in from day one.",
      },
    ],
    feature: {
      title: "Our Capabilities",
      body: "Engineering, integration, field deployment, and safety — built for real operating environments.",
      href: "/capabilities",
      cta: "See Capabilities",
    },
  },

  {
    label: "Investors",
    href: "/investors",
    links: [
      {
        label: "Investor Overview",
        href: "/investors",
        description: "Materials for qualified investors.",
      },
      {
        label: "Investor Deck",
        href: "/rise-power-deck.pdf",
        description: "Download the Rise Power investor briefing (PDF).",
      },
      {
        label: "Company Brochure",
        href: "/media/brochures/rise-mission-power-brochure.pdf",
        description: "Company overview and product brochure (PDF).",
      },
      {
        label: "Press & Updates",
        href: "/investors#press",
        description: "Company news, milestones, and press releases.",
      },
    ],
    feature: {
      title: "Investor Materials",
      body: "Deck, one-pager, and contact for qualified investors evaluating the round.",
      href: "/investors",
      cta: "Investor Overview",
    },
  },

  {
    label: "Resources",
    href: "/resources",
    links: [
      {
        label: "Products",
        href: "/products",
        description: "Sentinel, Falcon, Titan, and hydrogen cartridge systems.",
      },
      {
        label: "Resource Center",
        href: "/resources",
        description: "Specs, insights, and field notes.",
      },
      {
        label: "Company One Pager",
        href: "/datasheets",
        description: "Engineering targets and specifications.",
      },
      {
        label: "Procurement FAQ",
        href: "/resources/faq",
        description: "Answers for procurement and program teams.",
      },
      {
        label: "Insights",
        href: "/insights",
        description: "Technical articles and field analysis.",
      },
    ],
    feature: {
      title: "Browse Resources",
      body: "Products, Company One Pager, FAQ, and insights for procurement, programs, and integration leads.",
      href: "/resources",
      cta: "Open Resource Center",
    },
  },

  /* No links → no desktop chevron / no mobile accordion */
  {
    label: "Careers",
    href: "/contact",
  },
];
