import type { Metadata } from "next";
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
        layout="split"
        imageSrc="/media/contact/hero-banner.png"
        imageAlt="Soldiers in a forest"
        imageWidth={1920}
        imageHeight={600}
        imageClassName="translate-x-[14%]"
        quality={100}
        tone="#101820"
      >
        <div className="hero-animate-copy w-full text-left">
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

      <section
        id="briefing"
        className="relative scroll-mt-28 bg-[#fbfaf7] py-16 sm:py-20 lg:py-24"
      >
        <div className="mx-auto max-w-[1440px] px-6 lg:px-10">
          <div className="grid items-start gap-8 lg:grid-cols-2 lg:gap-10">
            <Reveal variant="left">
              <div className="flex h-full flex-col">
                <SectionEyebrow>Contact</SectionEyebrow>

                <h2 className="mt-4 type-section-h2 text-[#101820]">
                  Tell us your operating environment.
                </h2>

                <p className="type-section-body mt-4 text-[#626e7a]">
                  We respond with specs, runtime data, and a deployment summary
                  tailored to your mission. For procurement, programs,
                  integration, and serious technical evaluation.
                </p>

                <ul className="mt-8 space-y-4">
                  {[
                    {
                      label: "Technical package",
                      detail: "Datasheets, runtime curves, and system architecture.",
                    },
                    {
                      label: "Deployment summary",
                      detail: "Fit for your environment, duty cycle, and timeline.",
                    },
                    {
                      label: "Direct follow-up",
                      detail: "A specialist reply within one to two business days.",
                    },
                  ].map((item) => (
                    <li key={item.label} className="flex gap-3">
                      <span
                        aria-hidden="true"
                        className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#849363]"
                      />
                      <div>
                        <p className="text-base font-semibold tracking-wide text-[#101820] uppercase">
                          {item.label}
                        </p>
                        <p className="mt-1 text-base leading-snug text-[#626e7a] sm:text-lg">
                          {item.detail}
                        </p>
                      </div>
                    </li>
                  ))}
                </ul>

                {/* Email / Phone / Address — one row under the copy */}
                <div className="mt-auto grid gap-6 border-t border-[#d9dfe3] pt-8 sm:grid-cols-3 sm:gap-0 sm:divide-x sm:divide-[#d9dfe3] lg:mt-10">
                  <div className="sm:pr-5">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Email
                    </p>
                    <a
                      href={`mailto:${site.email}`}
                      className="mt-2 block break-words text-base leading-snug text-[#101820] transition-colors hover:text-[#6e7f42] sm:text-lg"
                    >
                      {site.email}
                    </a>
                  </div>

                  <div className="border-t border-[#d9dfe3] pt-6 sm:border-t-0 sm:px-5 sm:pt-0">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Phone
                    </p>
                    <a
                      href={site.phoneHref}
                      className="mt-2 block text-base leading-snug text-[#101820] transition-colors hover:text-[#6e7f42] sm:text-lg"
                    >
                      {site.phone}
                    </a>
                  </div>

                  <div className="border-t border-[#d9dfe3] pt-6 sm:border-t-0 sm:pl-5 sm:pt-0">
                    <p className="text-[11px] font-semibold tracking-[0.18em] text-[#6e7f42] uppercase">
                      Address
                    </p>
                    <p className="mt-2 text-base leading-snug text-[#101820] sm:text-lg">
                      {site.name}
                      <br />
                      {site.address.city}, {site.address.country}
                    </p>
                  </div>
                </div>
              </div>
            </Reveal>

            <Reveal variant="right" delay={80}>
              <div className="border border-[#d9dfe3] bg-white p-6 sm:p-8">
                <ContactForm />
              </div>
            </Reveal>
          </div>
        </div>
      </section>
    </main>
  );
}
