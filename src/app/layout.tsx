import type { Metadata, Viewport } from "next";
import { Barlow, Rajdhani } from "next/font/google";
import { DeferredAnalytics } from "@/components/DeferredAnalytics";
import { HashScroll } from "@/components/HashScroll";
import { ClosingCta } from "@/components/home/ClosingCta";
import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { site } from "@/lib/content";
import { siteDescription, siteKeywords, siteTitle } from "@/lib/seo";
import "./globals.css";

const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": ["Organization", "Corporation"],
  name: site.name,
  alternateName: ["Rise Mission Power", "Rise Mission Power Corp."],
  legalName: site.legalName,
  parentOrganization: {
    "@type": "Organization",
    name: site.parent,
  },
  url: site.url,
  logo: `${site.url}/media/brand/rise-mission-power-logo.svg`,
  image: `${site.url}/media/brand/rise-mission-power-logo.svg`,
  description: siteDescription,
  slogan:
    "Portable hydrogen power — quiet, zero-emission fuel cell systems engineered in Canada.",
  email: site.email,
  telephone: site.phoneHref.replace("tel:", ""),
  address: {
    "@type": "PostalAddress",
    addressLocality: site.address.city,
    addressRegion: site.address.region,
    ...(site.address.postalCode
      ? { postalCode: site.address.postalCode }
      : {}),
    addressCountry: "CA",
  },
  areaServed: ["CA", "US", "Worldwide"],
  knowsAbout: [
    "Portable hydrogen power",
    "Portable hydrogen fuel cell generator",
    "Hydrogen backup power",
    "Military portable power",
    "Tactical hydrogen generator",
    "Hydrogen-powered drones",
    "UAV hydrogen fuel cell",
    "Hydrogen range extender for drones",
    "Hydrogen cartridge system",
    "Plug-and-play hydrogen cartridge",
    "Zero-emission generator",
    "Diesel generator alternative",
    "Clean power for remote locations",
    "Portable power for construction sites",
    "Clean emergency generator",
    "Backup power without diesel",
    "Indoor safe backup power",
    "AI data center backup power",
    "Engineering and manufacturing company",
    "Prototype manufacturing services",
    "New product introduction manufacturing",
    "Design for manufacturing services",
    "Aerospace manufacturing Canada",
    "Defence manufacturing Canada",
    "Fuel cell component manufacturing",
    "Hydrogen component manufacturing",
    "Electrolyzer component manufacturing",
  ],
  makesOffer: {
    "@type": "OfferCatalog",
    name: "Rise Mission Power Systems",
    itemListElement: [
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Rise-Sentinel",
          description:
            "Portable hydrogen power cube for everyday backup and outdoor use with plug-and-play hydrogen cartridges.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Rise-Falcon",
          description:
            "UAV hydrogen fuel cell range extender for drones — up to 5× flight range.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Rise-Titan",
          description:
            "Portable hydrogen fuel cell generator — clean emergency and backup power without diesel.",
        },
      },
      {
        "@type": "Offer",
        itemOffered: {
          "@type": "Product",
          name: "Hydrogen Cartridge Kit",
          description:
            "Plug-and-play hydrogen cartridge system for rapid field replenishment.",
        },
      },
    ],
  },
};

const barlow = Barlow({
  variable: "--font-barlow",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
  preload: true,
});

/** Display headings match the Figma mockup (Rajdhani Bold family). */
const rajdhani = Rajdhani({
  variable: "--font-rajdhani",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
  display: "swap",
  preload: true,
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: siteTitle,
    template: `%s | ${siteTitle}`,
  },
  description: siteDescription,
  applicationName: site.name,
  authors: [{ name: site.legalName, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "technology",
  keywords: [...siteKeywords],
  referrer: "origin-when-cross-origin",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_CA",
    siteName: site.name,
    title: siteTitle,
    description: siteDescription,
  },
  twitter: {
    card: "summary_large_image",
    title: siteTitle,
    description: siteDescription,
  },
  appleWebApp: {
    capable: true,
    title: site.name,
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#f3f0e8" },
    { media: "(prefers-color-scheme: dark)", color: "#6e7f42" },
  ],
  colorScheme: "light",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-CA"
      className={`${barlow.variable} ${rajdhani.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-background font-sans text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationJsonLd) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "WebSite",
              name: siteTitle,
              alternateName: ["Rise Mission Power", "Rise Mission Power Corp."],
              url: site.url,
              description: siteDescription,
              publisher: {
                "@type": "Organization",
                name: site.name,
                url: site.url,
              },
              inLanguage: "en-CA",
            }),
          }}
        />
        <HashScroll />
        <Header />
        <main className="flex-1">{children}</main>
        <ClosingCta />
        <Footer />
        <DeferredAnalytics />
      </body>
    </html>
  );
}
