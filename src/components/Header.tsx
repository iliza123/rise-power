"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useId, useRef, useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Logo } from "./Logo";
import { AppLink } from "./nav/AppLink";
import { MegaMenuPanel } from "./nav/MegaMenuPanel";
import { NavMegaItem } from "./nav/NavMegaItem";
import { contactCta, megaNavItems } from "@/lib/home-content";
import type { MegaLink, MegaNavItem } from "@/lib/nav-menu";

/** Prefer flat `links`; else flatten legacy `columns` during data migration. */
function resolveMegaLinks(item: MegaNavItem): readonly MegaLink[] {
  if (item.links?.length) return item.links;

  const columns = (
    item as MegaNavItem & {
      columns?: readonly { links: readonly MegaLink[] }[];
    }
  ).columns;

  if (!columns?.length) return [];
  if (columns.length === 1) return columns[0].links;

  return columns.flatMap((column) => column.links);
}

export function Header() {
  const pathname = usePathname();
  const panelId = useId();

  const [open, setOpen] = useState(false);
  const [activeKey, setActiveKey] = useState<string | null>(null);
  const [mobileExpandedKey, setMobileExpandedKey] = useState<string | null>(
    null,
  );

  const [isVisible, setIsVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  const lastScrollY = useRef(0);
  const ticking = useRef(false);
  const headerRef = useRef<HTMLElement>(null);

  const isHome = pathname === "/";
  /** Dark heroes under a transparent bar — same mobile treatment as home. */
  const overDarkHero =
    isHome ||
    (!pathname.startsWith("/terms") && !pathname.startsWith("/privacy"));
  const megaOpen = activeKey !== null;

  const activeItem =
    megaNavItems.find((item) => item.label === activeKey) ?? null;

  const activeLinks = activeItem ? resolveMegaLinks(activeItem) : [];
  const activeHasLinks = Boolean(activeLinks.length);

  /*
   * Smart sticky header:
   *
   * - At the top over dark heroes (home + inner pages): transparent.
   * - Scrolled: premium dark translucent sticky surface.
   * - Legal / light pages: cream sticky surface.
   * - Scrolling down: hide.
   * - Scrolling up: show immediately.
   * - Open menus always keep the header visible.
   */
  useEffect(() => {
    const handleScroll = () => {
      if (ticking.current) return;

      ticking.current = true;

      window.requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        const previousScrollY = lastScrollY.current;

        setIsScrolled(currentScrollY > 20);

        // Always show header at the very top.
        if (currentScrollY <= 20) {
          setIsVisible(true);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        // Never hide the header while a menu is open.
        if (megaOpen || open) {
          setIsVisible(true);
          lastScrollY.current = currentScrollY;
          ticking.current = false;
          return;
        }

        // Scrolling down → hide.
        if (currentScrollY - previousScrollY > 8) {
          setIsVisible(false);
        }

        // Scrolling up → show immediately.
        if (previousScrollY - currentScrollY > 8) {
          setIsVisible(true);
        }

        lastScrollY.current = currentScrollY;
        ticking.current = false;
      });
    };

    lastScrollY.current = window.scrollY;
    setIsScrolled(window.scrollY > 20);

    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [megaOpen, open]);

  /*
   * Reset navigation state when the route changes.
   */
  useEffect(() => {
    setOpen(false);
    setActiveKey(null);
    setMobileExpandedKey(null);
    setIsVisible(true);
    setIsScrolled(window.scrollY > 20);
    lastScrollY.current = window.scrollY;
  }, [pathname]);

  /*
   * Escape closes the active mega / mobile menu.
   */
  useEffect(() => {
    if (!activeKey && !open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setActiveKey(null);
        setOpen(false);
        setMobileExpandedKey(null);
      }
    };

    document.addEventListener("keydown", onKeyDown);

    return () => document.removeEventListener("keydown", onKeyDown);
  }, [activeKey, open]);

  /*
   * Click / tap outside the header closes open menus.
   */
  useEffect(() => {
    if (!activeKey && !open) return;

    const onPointerDown = (event: PointerEvent) => {
      const target = event.target;
      if (!(target instanceof Node)) return;
      if (headerRef.current?.contains(target)) return;

      setActiveKey(null);
      setOpen(false);
      setMobileExpandedKey(null);
    };

    document.addEventListener("pointerdown", onPointerDown);

    return () => document.removeEventListener("pointerdown", onPointerDown);
  }, [activeKey, open]);

  /*
   * Desktop mega menu only exists at xl+. Close it if the viewport shrinks.
   */
  useEffect(() => {
    const onResize = () => {
      if (window.matchMedia("(max-width: 1279px)").matches) {
        setActiveKey(null);
      }
    };

    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, []);

  /** Frosted glass over the dark hero while parked at the top. */
  const onHeroGlass =
    overDarkHero && !isScrolled && !megaOpen && !open;
  /** Home scrolled/menu stays dark glass; inner pages use cream sticky. */
  const useDarkSticky = isHome && (isScrolled || megaOpen || open);

  const linkColor = onHeroGlass || useDarkSticky
    ? "text-white/80 hover:text-white"
    : "text-ink/75 hover:text-ink";

  const activeColor =
    onHeroGlass || useDarkSticky ? "text-white" : "text-ink";

  /*
   * Header styling.
   *
   * Home + inner pages over dark heroes:
   * - Top of page = frosted blur (hero shows through).
   * - Home scrolled / menu open = denser dark glass.
   * - Inner scrolled / menu open = cream sticky (not dark).
   *
   * Legal / light pages:
   * - Always cream sticky surface.
   */
  const headerSurface = (() => {
    const visibilityClass = isVisible
      ? "translate-y-0 opacity-100"
      : "-translate-y-[110%] opacity-0";

    if (onHeroGlass) {
      return `fixed top-0 right-0 left-0 z-50 will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${visibilityClass} border-b border-white/10 bg-[#07100d]/45 text-white shadow-[0_8px_28px_rgba(0,0,0,0.18)] backdrop-blur-xl backdrop-saturate-150`;
    }

    if (useDarkSticky) {
      return `fixed top-0 right-0 left-0 z-50 will-change-transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${visibilityClass} border-b border-white/10 bg-[#07100d]/85 text-white shadow-[0_10px_40px_rgba(0,0,0,0.25)] backdrop-blur-2xl`;
    }

    // Cream sticky — inner pages after scroll, menus, and legal pages.
    const borderClass = megaOpen ? "" : "border-b border-border";
    return `fixed top-0 right-0 left-0 z-50 will-change-transform ${borderClass} bg-cream text-ink shadow-[0_4px_20px_rgba(0,0,0,0.06)] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] ${visibilityClass}`;
  })();

  const logoOnDark = onHeroGlass || useDarkSticky;
  const chromeOnDark = onHeroGlass || useDarkSticky;

  const closeMega = () => setActiveKey(null);

  return (
    <header
      ref={headerRef}
      className={headerSurface}
      onMouseLeave={closeMega}
    >
      <div
        data-site-header-bar
        className="mx-auto flex h-16 w-full max-w-[1600px] items-center justify-between gap-2 px-4 sm:h-[4.5rem] sm:gap-3 sm:px-6 lg:px-8 xl:gap-4 xl:px-10"
      >
        {/* Logo */}
        <div className="relative z-10 shrink-0">
          <Logo variant={logoOnDark ? "onDark" : "onLight"} priority />
        </div>

        {/* Desktop Navigation — xl+ only so mid widths never crowd the CTA */}
        <nav
          className="hidden min-w-0 flex-1 items-center justify-center xl:flex"
          aria-label="Primary navigation"
        >
          <ul className="flex max-w-full items-center justify-center gap-x-3 2xl:gap-x-5">
            {megaNavItems.map((item) => {
              const itemPath = item.href.split("#")[0] || "/";
              const routeActive =
                itemPath !== "/" &&
                (pathname === itemPath || pathname.startsWith(`${itemPath}/`));
              const isMegaActive = activeKey === item.label;
              const highlight = isMegaActive || routeActive;

              return (
                <li key={item.label} className="shrink-0">
                  <NavMegaItem
                    item={item}
                    isActive={isMegaActive}
                    panelId={panelId}
                    onActivate={() => {
                      setActiveKey(item.label);
                      setIsVisible(true);
                    }}
                    className={`whitespace-nowrap rounded-sm px-2 py-2 text-[13px] font-semibold tracking-[0.02em] uppercase transition-colors 2xl:px-2.5 2xl:text-[14px] 2xl:tracking-[0.04em] ${
                      highlight ? activeColor : linkColor
                    } ${
                      isMegaActive
                        ? "underline decoration-sage decoration-2 underline-offset-[10px]"
                        : ""
                    }`}
                  />
                </li>
              );
            })}
          </ul>
        </nav>

        {/* Right Actions */}
        <div className="relative z-10 flex shrink-0 items-center gap-2 sm:gap-3">
          <Link
            href={contactCta.href}
            className="hidden min-h-10 items-center justify-center rounded-sm bg-[#849363] px-5 py-2.5 text-[12px] font-semibold tracking-[0.08em] text-white uppercase shadow-[0_1px_2px_rgba(0,0,0,0.18)] transition-opacity hover:opacity-90 xl:inline-flex 2xl:min-h-11 2xl:px-6"
          >
            {contactCta.label}
          </Link>

          <button
            className={`flex min-h-11 min-w-11 items-center justify-center xl:hidden ${
              chromeOnDark ? "text-white" : "text-ink"
            }`}
            aria-expanded={open}
            aria-controls="site-menu"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => {
              setOpen((value) => !value);
              setActiveKey(null);
              setIsVisible(true);
            }}
          >
            {open ? (
              <X size={22} strokeWidth={1.75} />
            ) : (
              <Menu size={22} strokeWidth={1.75} />
            )}
          </button>
        </div>
      </div>

      {/* Desktop Mega Menu */}
      {activeHasLinks && activeItem ? (
        <div className="hidden xl:block">
          <MegaMenuPanel
            id={panelId}
            title={activeItem.label}
            links={activeLinks}
            feature={activeItem.feature}
            viewAllHref={activeItem.href}
            onNavigate={closeMega}
          />
        </div>
      ) : null}

      {/* Mobile / tablet Navigation */}
      {open ? (
        <div
          id="site-menu"
          className={
            chromeOnDark || useDarkSticky
              ? "mobile-nav-drawer flex max-h-[min(80vh,640px)] flex-col border-t border-white/15 bg-[#07100d]/97 backdrop-blur-xl xl:hidden"
              : "mobile-nav-drawer flex max-h-[min(80vh,640px)] flex-col border-t border-border bg-cream xl:hidden"
          }
        >
          <nav
            className="mx-auto w-full max-w-[1440px] flex-1 overflow-y-auto px-6 py-4"
            aria-label="Mobile navigation"
          >
            <div className="flex flex-col gap-0.5">
              {megaNavItems.map((item) => {
                const links = resolveMegaLinks(item);
                const hasLinks = links.length > 0;
                const expanded = mobileExpandedKey === item.label;

                const textClass =
                  chromeOnDark || useDarkSticky ? "text-white/90" : "text-ink";
                const mutedClass =
                  chromeOnDark || useDarkSticky
                    ? "text-white/55"
                    : "text-ink/55";

                const rowBorder =
                  chromeOnDark || useDarkSticky
                    ? "border-white/10"
                    : "border-border/80";

                if (!hasLinks) {
                  return (
                    <div
                      key={item.label}
                      className={`border-b ${rowBorder} last:border-b-0`}
                    >
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`flex min-h-12 items-center py-3 text-base font-medium ${textClass}`}
                      >
                        {item.label}
                      </Link>
                    </div>
                  );
                }

                return (
                  <div
                    key={item.label}
                    className={`border-b ${rowBorder} last:border-b-0`}
                  >
                    <div className="flex min-h-12 items-center gap-1">
                      <Link
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={`min-w-0 flex-1 py-3 text-base font-medium ${textClass}`}
                      >
                        {item.label}
                      </Link>

                      <button
                        type="button"
                        className={`flex min-h-12 min-w-12 items-center justify-center rounded-sm ${textClass} focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage`}
                        aria-expanded={expanded}
                        aria-label={`${
                          expanded ? "Collapse" : "Expand"
                        } ${item.label} submenu`}
                        onClick={() =>
                          setMobileExpandedKey(
                            expanded ? null : item.label,
                          )
                        }
                      >
                        <ChevronDown
                          className={`size-5 transition-transform duration-200 ${
                            expanded ? "rotate-180 text-sage" : ""
                          }`}
                          strokeWidth={1.75}
                          aria-hidden="true"
                        />
                      </button>
                    </div>

                    {expanded ? (
                      <ul className="mobile-nav-accordion space-y-0.5 pb-4">
                        <li>
                          <Link
                            href={item.href}
                            onClick={() => setOpen(false)}
                            className="flex min-h-12 items-center gap-2 rounded-sm px-3 py-2.5 text-sm font-semibold tracking-wide text-sage uppercase transition-colors hover:bg-sage/10"
                          >
                            {item.label} overview
                            <span aria-hidden="true">→</span>
                          </Link>
                        </li>

                        {links.map((link) => (
                          <li key={`${link.href}-${link.label}`}>
                            <AppLink
                              href={link.href}
                              onClick={() => setOpen(false)}
                              className={`group flex min-h-12 flex-col justify-center rounded-sm px-3 py-2.5 transition-colors hover:bg-sage/10 focus-visible:bg-sage/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-sage ${textClass}`}
                            >
                              <span className="text-[15px] font-medium group-hover:text-sage">
                                {link.label}
                              </span>

                              {link.description ? (
                                <span
                                  className={`mt-0.5 text-sm leading-snug ${mutedClass}`}
                                >
                                  {link.description}
                                </span>
                              ) : null}
                            </AppLink>
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </div>
                );
              })}
            </div>
          </nav>

          {/* Mobile CTA */}
          <div
            className={
              chromeOnDark || useDarkSticky
                ? "sticky bottom-0 border-t border-white/10 bg-[#07100d]/97 px-6 py-4 backdrop-blur-xl"
                : "sticky bottom-0 border-t border-border bg-cream px-6 py-4"
            }
          >
            <Link
              href={contactCta.href}
              onClick={() => setOpen(false)}
              className="flex min-h-12 items-center justify-center rounded-sm bg-[#849363] px-5 py-3 text-center text-sm font-semibold tracking-[0.08em] text-white uppercase transition-opacity hover:opacity-90"
            >
              {contactCta.label}
            </Link>
          </div>
        </div>
      ) : null}
    </header>
  );
}
