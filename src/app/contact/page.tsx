import type { Metadata } from "next";
import Image from "next/image";
import { ArrowRight } from "lucide-react";

import { ContactForm } from "@/components/ContactForm";
import { Reveal } from "@/components/motion/Reveal";
import { StackedPageHero } from "@/components/StackedPageHero";
import { site } from "@/lib/content";
import { pageMetadata } from "@/lib/seo";

export const metadata: Metadata = pageMetadata({
  title: "Contact",
  description:
    "Request a Rise Power briefing. Specs, runtime data, and a deployment summary for procurement, programs, and integration leads.",
  path: "/contact",
});

const sage = "#6e7f42";

function ContourDecoration({
  position = "left",
}: {
  position?: "left" | "right";
}) {
  return (
    <div
      aria-hidden="true"
      className={`pointer-events-none absolute top-0 h-[280px] w-[440px] overflow-hidden opacity-40 ${
        position === "left" ? "-left-24" : "-right-24"
      }`}
    >
      <svg viewBox="0 0 440 330" className="h-full w-full" fill="none">
        <path
          d="M-20 35C55 80 85 0 165 28C240 55 275 4 350 36C405 60 430 40 465 15"
          stroke="#e2e7e1"
          strokeWidth="1"
        />
        <path
          d="M-25 65C45 108 88 25 164 57C238 88 284 29 354 65C405 91 432 70 465 45"
          stroke="#e5e9e5"
          strokeWidth="1"
        />
        <path
          d="M-25 95C42 137 91 54 164 87C237 119 288 59 355 94C405 121 433 101 465 75"
          stroke="#e8ece8"
          strokeWidth="1"
        />
        <path
          d="M-25 125C43 167 92 84 165 117C238 150 287 90 356 124C406 151 434 131 465 105"
          stroke="#ebeeeb"
          strokeWidth="1"
        />
        <path
          d="M-25 155C42 197 93 114 165 147C238 180 288 120 357 154C406 181 434 161 465 135"
          stroke="#edf0ed"
          strokeWidth="1"
        />
        <path
          d="M-25 185C42 227 94 144 166 177C238 210 288 150 357 184C406 211 434 191 465 165"
          stroke="#eff2ef"
          strokeWidth="1"
        />
      </svg>
    </div>
  );
}

function SectionEyebrow({
  children,
  light = false,
}: {
  children: React.ReactNode;
  light?: boolean;
}) {
  const color = light ? "#ffffff" : sage;

  return (
    <div className="flex items-center gap-3">
      <span aria-hidden="true" className="relative block h-[13px] w-[38px]">
        <span
          className="absolute top-1/2 left-0 h-px w-full -translate-y-1/2"
          style={{ backgroundColor: color }}
        />
        <span
          className="absolute top-1/2 left-0 h-[9px] w-[9px] -translate-y-1/2 rotate-45 border-b border-l"
          style={{ borderColor: color }}
        />
      </span>
      <p
        className={`text-mm font-semibold tracking-[0.18em] uppercase ${light ? "text-white" : ""}`}
        style={{ color }}
      >
        {children}
      </p>
    </div>
  );
}

export default function ContactPage() {
  return (
    <main className="overflow-hidden bg-[#fbfaf7] text-[#101820]">
      <StackedPageHero
        imageSrc="/media/contact/hero-banner.png"
        imageAlt="Rise Power field deployment — request a capability briefing"
        tone="#101820"
      >
        <div className="hero-animate-copy max-w-[760px]">
          <SectionEyebrow light>{site.name}</SectionEyebrow>

          <h1 className="mt-5 type-page-h1">
            Request a
            <br />
            Briefing
          </h1>

          <p className="type-section-body mt-5 max-w-[650px] text-white">
            For procurement, programs, and integration leads. Tell us your
            operating environment and we will respond with specs, runtime data,
            and a deployment summary.
          </p>

          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href="#briefing"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm bg-[#849363] px-8 text-sm font-semibold tracking-wide text-white uppercase transition-opacity hover:opacity-90"
            >
              Request Briefing
              <ArrowRight className="size-5" />
            </a>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-sm border border-white/50 px-7 text-sm font-semibold tracking-wide text-white uppercase transition-colors hover:bg-white/10"
            >
              Email Us
              <ArrowRight className="size-5" />
            </a>
          </div>
        </div>
      </StackedPageHero>

      {/* Briefing form + channels */}
      <section
        id="briefing"
        className="relative overflow-hidden bg-[#fbfaf7] py-16 sm:py-20 lg:py-24"
      >
        <ContourDecoration position="left" />

        <div className="relative mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-10 lg:grid-cols-2 lg:gap-14 xl:gap-16">
            <Reveal variant="left">
              <div className="flex flex-col gap-8">
                <div className="relative aspect-[16/11] overflow-hidden rounded-[7px]">
                  <Image
                    src="/media/contact/rise-mission-power.png"
                    alt="Rise Mission Power systems in the field"
                    fill
                    sizes="(min-width: 1024px) 45vw, 100vw"
                    className="object-cover"
                  />
                </div>

                <div className="flex flex-col gap-5">
                  <SectionEyebrow>Contact</SectionEyebrow>

                  <h2 className="type-section-h2 text-[#101820]">
                    Tell us your operating environment.
                  </h2>

                  <p className="type-section-body max-w-[420px] text-[#626e7a]">
                    We respond with specs, runtime data, and a deployment
                    summary tailored to your mission. For procurement, programs,
                    integration, and serious technical evaluation.
                  </p>
                </div>

                <ul className="relative z-10 max-w-[420px] divide-y divide-[#d9dfe3] border-y border-[#d9dfe3]">
                  {[
                    {
                      label: "Email",
                      href: `mailto:${site.email}`,
                      value: site.email,
                    },
                    {
                      label: "Phone",
                      href: site.phoneHref,
                      value: site.phone,
                    },
                  ].map((item) => (
                    <li key={item.label} className="py-5">
                      <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                        {item.label}
                      </p>
                      <a
                        href={item.href}
                        className="mt-2 block text-lg leading-snug text-[#101820] transition-colors hover:text-[#6e7f42]"
                      >
                        {item.value}
                      </a>
                    </li>
                  ))}
                  <li className="py-5">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Address
                    </p>
                    <p className="mt-2 text-lg leading-snug text-[#101820]">
                      {site.name}
                      <br />
                      {site.address.city}, {site.address.country}
                    </p>
                  </li>
                </ul>
              </div>
            </Reveal>

            <Reveal variant="right" delay={100}>
              <div className="flex flex-col gap-6 lg:sticky lg:top-28">
                <div className="relative hidden aspect-[21/9] overflow-hidden rounded-[7px] lg:block">
                  <Image
                    src="/media/products/falcon.png"
                    alt="Rise Power Falcon hydrogen drone range extender"
                    fill
                    sizes="45vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#071016]/40 to-transparent" />
                </div>
                <div className="border border-[#d9dfe3] bg-white p-6 sm:p-8">
                  <ContactForm />
                </div>
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
