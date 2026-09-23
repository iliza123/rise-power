"use client";

import {
  Children,
  isValidElement,
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ReactNode,
} from "react";

type RevealVariant = "up" | "fade" | "left" | "right" | "scale";

type RevealProps = {
  children: ReactNode;
  className?: string;
  /** Animation style when entering viewport */
  variant?: RevealVariant;
  /** Delay in ms after becoming visible */
  delay?: number;
  /** Intersection threshold 0–1 */
  threshold?: number;
  /** Only animate once (default true) */
  once?: boolean;
  /** Root margin for earlier/later trigger */
  rootMargin?: string;
  as?: "div" | "section" | "article" | "li" | "span";
};

const variantClass: Record<RevealVariant, string> = {
  up: "reveal-up",
  fade: "reveal-fade",
  left: "reveal-left",
  right: "reveal-right",
  scale: "reveal-scale",
};

function isInViewport(node: HTMLElement, bottomInsetRatio = 0.04) {
  const rect = node.getBoundingClientRect();
  if (rect.width <= 0 || rect.height <= 0) return false;
  const vh = window.innerHeight || document.documentElement.clientHeight;
  const vw = window.innerWidth || document.documentElement.clientWidth;
  const bottomLimit = vh * (1 - bottomInsetRatio);
  return rect.top < bottomLimit && rect.bottom > 0 && rect.left < vw && rect.right > 0;
}

export function Reveal({
  children,
  className = "",
  variant = "up",
  delay = 0,
  threshold = 0,
  once = true,
  rootMargin = "0px 0px -4% 0px",
  as: Tag = "div",
}: RevealProps) {
  const ref = useRef<HTMLElement | null>(null);
  /** Arms opacity-0 animation only after JS mounts — SSR/HTML stays readable. */
  const [pending, setPending] = useState(false);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    if (typeof window !== "undefined") {
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (reduced.matches) {
        setVisible(true);
        return;
      }
    }

    let cancelled = false;
    let shown = false;

    const show = () => {
      if (cancelled || shown) return;
      shown = true;
      setVisible(true);
      setPending(false);
    };

    // Arm animation only when we are about to observe — keeps first paint readable
    setPending(true);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          show();
          if (once) observer.disconnect();
        } else if (!once) {
          shown = false;
          setVisible(false);
          setPending(true);
        }
      },
      { threshold, rootMargin },
    );

    observer.observe(node);

    const sync = () => {
      if (isInViewport(node)) {
        show();
        if (once) {
          observer.disconnect();
          window.removeEventListener("scroll", sync, true);
          window.removeEventListener("resize", sync);
        }
      }
    };

    // Next frame: if already on screen, reveal immediately (no flash of hidden)
    const raf = window.requestAnimationFrame(() => {
      window.requestAnimationFrame(sync);
    });
    const timeout = window.setTimeout(sync, 50);
    // Absolute failsafe — never leave copy invisible
    const failsafe = window.setTimeout(show, 1200);

    window.addEventListener("scroll", sync, { capture: true, passive: true });
    window.addEventListener("resize", sync, { passive: true });

    return () => {
      cancelled = true;
      observer.disconnect();
      window.removeEventListener("scroll", sync, true);
      window.removeEventListener("resize", sync);
      window.cancelAnimationFrame(raf);
      window.clearTimeout(timeout);
      window.clearTimeout(failsafe);
    };
  }, [once, rootMargin, threshold]);

  return (
    <Tag
      ref={ref as never}
      className={`reveal-base ${variantClass[variant]} ${pending ? "reveal-pending" : ""} ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: visible ? `${delay}ms` : "0ms" } as CSSProperties}
    >
      {children}
    </Tag>
  );
}

type RevealStaggerProps = {
  children: ReactNode;
  className?: string;
  /** Stagger between children in ms */
  step?: number;
  /** Base delay before first child */
  baseDelay?: number;
  variant?: RevealVariant;
  threshold?: number;
  as?: "div" | "ul" | "ol";
};

/** Wraps each direct child in Reveal with staggered delays. */
export function RevealStagger({
  children,
  className = "",
  step = 70,
  baseDelay = 0,
  variant = "up",
  threshold = 0,
  as: Tag = "div",
}: RevealStaggerProps) {
  return (
    <Tag className={className}>
      {Children.map(children, (child, index) => {
        if (!isValidElement(child)) return child;
        return (
          <Reveal
            key={child.key ?? index}
            variant={variant}
            delay={baseDelay + index * step}
            threshold={threshold}
            className="h-full"
          >
            {child}
          </Reveal>
        );
      })}
    </Tag>
  );
}
