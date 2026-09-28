import Link from "next/link";
import type { ComponentProps } from "react";

type AppLinkProps = ComponentProps<typeof Link>;

function hrefString(href: AppLinkProps["href"]): string {
  if (typeof href === "string") return href;
  if (href && typeof href === "object" && "pathname" in href) {
    return `${href.pathname ?? ""}${href.hash ?? ""}`;
  }
  return "";
}

function isFileHref(href: string): boolean {
  const path = href.split(/[?#]/)[0] ?? href;
  return /\.(pdf|zip|docx?|xlsx?|pptx?)$/i.test(path);
}

function isNativeHref(href: string): boolean {
  if (/^(https?:|mailto:|tel:)/i.test(href)) return true;
  if (href.includes("#")) return true;
  return isFileHref(href);
}

export function AppLink({
  href,
  replace: _replace,
  scroll: _scroll,
  prefetch: _prefetch,
  locale: _locale,
  target,
  rel,
  ...props
}: AppLinkProps) {
  const url = hrefString(href);

  if (isNativeHref(url)) {
    const openInNewTab = isFileHref(url);
    const resolvedTarget = target ?? (openInNewTab ? "_blank" : undefined);
    const resolvedRel =
      rel ??
      (resolvedTarget === "_blank" ? "noopener noreferrer" : undefined);

    return (
      <a href={url} target={resolvedTarget} rel={resolvedRel} {...props} />
    );
  }

  return <Link href={href} target={target} rel={rel} {...props} />;
}
