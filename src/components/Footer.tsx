"use client";

import { ArrowRight, ChevronDown, Mail, MapPin, Phone } from "lucide-react";
import { useState, type ReactNode } from "react";
import { Logo } from "./Logo";
import { AppLink } from "@/components/nav/AppLink";
import { footer } from "@/lib/home-content";
import { Reveal } from "@/components/motion/Reveal";

const sage = "#6e7f42";
const footerBg = "#061018";

function SocialIcon({ name }: { name: "LinkedIn" | "YouTube" | "X" }) {
  const className = "h-[22px] w-[22px]";

  if (name === "LinkedIn") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="2"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M8 10v7M8 7.5v.01M12 17v-4.5a2 2 0 1 1 4 0V17"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinecap="round"
        />
      </svg>
    );
  }

  if (name === "YouTube") {
    return (
      <svg
        viewBox="0 0 24 24"
        className={className}
        fill="none"
        aria-hidden="true"
      >
        <rect
          x="3"
          y="6"
          width="18"
          height="12"
          rx="3"
          stroke="currentColor"
          strokeWidth="1.75"
        />
        <path
          d="M10 9.5v5l5-2.5-5-2.5Z"
          stroke="currentColor"
          strokeWidth="1.75"
          strokeLinejoin="round"
        />
      </svg>
    );
  }

  return (
    <svg
      viewBox="0 0 24 24"
      className={className}
      fill="none"
      aria-hidden="true"
    >
      <path
        d="M5 5h4.2l3.3 4.6L16.5 5H19l-5.1 6.7L19.2 19h-4.2l-3.5-4.9L7.5 19H5l5.4-7.1L5 5Z"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function MissionFlagMark() {
  return (
    <svg
      viewBox="0 0 28 20"
      className="h-5 w-7 shrink-0"
      fill="none"
      aria-hidden="true"
    >
      <rect
        x="0.5"
        y="0.5"
        width="27"
        height="19"
        rx="1.5"
        stroke="currentColor"
        strokeWidth="1"
      />
      <rect
        x="1.5"
        y="1.5"
        width="10"
        height="8"
        fill={sage}
        opacity="0.85"
      />
      <path
        d="M6.5 3.2l.55 1.7h1.8l-1.45 1.05.55 1.7-1.45-1.05-1.45 1.05.55-1.7L4.15 4.9h1.8L6.5 3.2Z"
        fill="currentColor"
      />
      <path
        d="M13 3.5h13M13 6.5h13M13 9.5h13M2 12.5h24M2 15.5h24M2 18.5h24"
        stroke="currentColor"
        strokeWidth="1"
        opacity="0.75"
      />
    </svg>
  );
}

function FooterHeading({ children }: { children: ReactNode }) {
  return (
    <>
      <p className="font-display text-[13px] font-semibold tracking-[0.12em] text-white uppercase sm:text-sm">
        {children}
      </p>
      <div className="mt-3 h-[2px] w-9" style={{ background: sage }} />
    </>
  );
}

function FooterNavGroup({
  group,
}: {
  group: (typeof footer.groups)[number];
}) {
  return (
    <div className="min-w-0">
      <FooterHeading>{group.heading}</FooterHeading>
      <ul className="mt-5 space-y-3">
        {group.links.map((item) => (
          <li key={`${group.heading}-${item.label}`}>
            <AppLink
              href={item.href}
              className="block text-[14px] leading-5 text-white/90 transition-colors hover:text-sage"
            >
              {item.label}
            </AppLink>
          </li>
        ))}
      </ul>
    </div>
  );
}

function FooterNavGroups() {
  const [openHeading, setOpenHeading] = useState<string | null>(null);

  return (
    <>
      {/* Mobile / tablet accordion */}
      <div className="border-t border-white/15 lg:hidden">
        {footer.groups.map((group) => {
          const expanded = openHeading === group.heading;
          const panelId = `footer-nav-${group.heading
            .toLowerCase()
            .replace(/\s+/g, "-")}`;

          return (
            <div key={group.heading} className="border-b border-white/15">
              <button
                type="button"
                className="flex min-h-12 w-full items-center justify-between gap-3 py-3.5 text-left focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage"
                aria-expanded={expanded}
                aria-controls={panelId}
                onClick={() =>
                  setOpenHeading(expanded ? null : group.heading)
                }
              >
                <span className="font-display text-lg font-semibold tracking-wide text-white uppercase">
                  {group.heading}
                </span>
                <ChevronDown
                  className={`size-5 shrink-0 text-cream/70 transition-transform duration-200 ${
                    expanded ? "rotate-180 text-sage" : ""
                  }`}
                  strokeWidth={1.75}
                  aria-hidden="true"
                />
              </button>

              {expanded ? (
                <ul
                  id={panelId}
                  className="mobile-nav-accordion relative grid grid-cols-2 gap-x-6 gap-y-3 pb-4"
                >
                  <span
                    aria-hidden="true"
                    className="pointer-events-none absolute top-0 bottom-4 left-1/2 w-px -translate-x-1/2"
                    style={{ backgroundColor: sage }}
                  />
                  {group.links.map((item) => (
                    <li key={`${group.heading}-${item.label}`}>
                      <AppLink
                        href={item.href}
                        className="block text-[15px] leading-5 text-white transition-colors hover:text-sage"
                      >
                        {item.label}
                      </AppLink>
                    </li>
                  ))}
                </ul>
              ) : null}
            </div>
          );
        })}
      </div>

      {/*
        Desktop nav:
        - lg–2xl: 3 columns (wraps to 2 rows) so long headings never collide
        - 2xl+: 5 columns with room to breathe
      */}
      <nav
        aria-label="Footer"
        className="hidden lg:grid lg:grid-cols-3 lg:gap-x-8 lg:gap-y-10 2xl:grid-cols-5 2xl:gap-x-7"
      >
        {footer.groups.map((group) => (
          <FooterNavGroup key={group.heading} group={group} />
        ))}
      </nav>
    </>
  );
}

export function Footer() {
  const [newsletterNote, setNewsletterNote] = useState<string | null>(null);

  return (
    <footer
      className="relative overflow-hidden text-cream"
      style={{ background: footerBg }}
    >
      <Reveal
        variant="fade"
        className="mx-auto grid w-full max-w-[1716px] gap-10 px-6 py-12 sm:px-8 sm:py-14 lg:grid-cols-[minmax(200px,0.85fr)_minmax(0,1.9fr)_minmax(220px,0.9fr)] lg:items-start lg:gap-8 lg:px-10 lg:py-14 xl:grid-cols-[minmax(240px,0.85fr)_minmax(0,2.4fr)_minmax(260px,0.9fr)] xl:gap-10 2xl:grid-cols-[minmax(260px,0.9fr)_minmax(0,2.6fr)_minmax(280px,0.95fr)]"
      >
        {/* Brand */}
        <div className="flex flex-col lg:border-r lg:border-white/15 lg:pr-8 xl:pr-10">
          <Logo variant="onDark" />

          <p className="mt-6 text-lg font-semibold text-cream">
            {footer.tagline}
          </p>

          <p className="type-section-body mt-5 max-w-[340px] !text-white/90">
            {footer.blurb}
          </p>

          <div className="mt-8 flex gap-3 lg:mt-auto lg:pt-10">
            {footer.social.map((item) => {
              const isPlaceholder = !item.href || item.href === "#";
              const className =
                "inline-flex size-10 items-center justify-center rounded-md border border-white/20 text-cream/85 transition-colors hover:border-sage hover:text-cream";

              if (isPlaceholder) {
                return (
                  <span
                    key={item.label}
                    aria-label={item.label}
                    className={className}
                  >
                    <SocialIcon
                      name={item.label as "LinkedIn" | "YouTube" | "X"}
                    />
                  </span>
                );
              }

              return (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className={className}
                >
                  <SocialIcon
                    name={item.label as "LinkedIn" | "YouTube" | "X"}
                  />
                </a>
              );
            })}
          </div>
        </div>

        <FooterNavGroups />

        {/* Newsletter + Contact */}
        <div className="lg:border-l lg:border-white/15 lg:pl-8 xl:pl-10">
          <FooterHeading>{footer.newsletter.heading}</FooterHeading>

          <p className="type-section-body mt-5 max-w-[320px] !text-white/90">
            {footer.newsletter.body}
          </p>

          {newsletterNote ? (
            <p
              role="status"
              className="mt-5 max-w-[340px] border border-sage/40 bg-[#0b151b] px-4 py-3 text-sm leading-snug text-cream"
            >
              {newsletterNote}
            </p>
          ) : (
            <form
              className="mt-5 flex h-12 max-w-[340px] overflow-hidden rounded-sm border border-white/20"
              onSubmit={(event) => {
                event.preventDefault();
                setNewsletterNote(footer.newsletter.comingSoonMessage);
              }}
            >
              <label className="sr-only" htmlFor="footer-email">
                Email
              </label>

              <input
                id="footer-email"
                type="email"
                name="email"
                required
                placeholder={footer.newsletter.placeholder}
                className="min-w-0 flex-1 bg-[#0b151b] px-4 text-mm text-cream outline-none placeholder:text-cream/40"
              />

              <button
                type="submit"
                aria-label="Subscribe"
                className="inline-flex w-12 shrink-0 items-center justify-center bg-[#849363] text-cream transition-opacity hover:opacity-85"
              >
                <ArrowRight className="size-5" />
              </button>
            </form>
          )}

          <ul className="mt-6 space-y-3.5 text-mm text-white/90">
            <li>
              <a
                href={`mailto:${footer.contact.email}`}
                className="flex items-center gap-2.5 transition-colors hover:text-sage"
              >
                <Mail className="size-[18px] shrink-0 text-sage" />
                <span>{footer.contact.email}</span>
              </a>
            </li>

            <li>
              <a
                href={footer.contact.phoneHref}
                className="flex items-center gap-2.5 transition-colors hover:text-sage"
              >
                <Phone className="size-[18px] shrink-0 text-sage" />
                <span>{footer.contact.phone}</span>
              </a>
            </li>

            <li className="flex items-center gap-2.5">
              <MapPin className="size-[18px] shrink-0 text-sage" />
              <span>{footer.contact.location}</span>
            </li>
          </ul>
        </div>
      </Reveal>

      <div className="border-t border-white/15">
        <div className="mx-auto flex w-full max-w-[1716px] flex-col gap-6 px-6 py-6 sm:px-8 lg:grid lg:grid-cols-[1fr_auto_1fr] lg:items-center lg:px-10">
          <p className="text-center text-mm tracking-wide text-white/70 lg:text-left">
            {footer.copyright}
          </p>

          <nav
            aria-label="Legal"
            className="flex flex-wrap items-center justify-center gap-y-2"
          >
            {footer.legal.map((item, index) => (
              <span key={item.label} className="inline-flex items-center">
                {index > 0 ? (
                  <span
                    className="mx-3 select-none text-white/35"
                    aria-hidden
                  >
                    |
                  </span>
                ) : null}

                <AppLink
                  href={item.href}
                  className="text-mm text-white/80 transition-colors hover:text-sage"
                >
                  {item.label}
                </AppLink>
              </span>
            ))}
          </nav>

          <p className="inline-flex items-center justify-center gap-3 text-center lg:justify-self-end lg:text-left">
            <MissionFlagMark />
            <span className="font-display text-xs font-semibold tracking-wide text-white uppercase sm:text-sm">
              {footer.badgeBefore}{" "}
              <span style={{ color: sage }}>{footer.badgeAccent}</span>
            </span>
          </p>
        </div>
      </div>
    </footer>
  );
}
