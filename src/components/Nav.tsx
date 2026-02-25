"use client";

import { useEffect, useId, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

import { siteData } from "@/content/siteData";
import { cn } from "@/lib/utils";
import { basePath } from "@/lib/basePath";
import { ThemeToggle } from "@/components/ThemeToggle";

function isActivePath(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

function normalizePathname(pathname: string) {
  if (!basePath) {
    return pathname;
  }

  if (pathname === basePath) {
    return "/";
  }

  if (pathname.startsWith(`${basePath}/`)) {
    const withoutBasePath = pathname.slice(basePath.length);
    return withoutBasePath.startsWith("/") ? withoutBasePath : `/${withoutBasePath}`;
  }

  return pathname;
}

export function Nav() {
  const pathname = usePathname() ?? "/";
  const normalizedPathname = normalizePathname(pathname);
  const [open, setOpen] = useState(false);
  const mobilePanelId = useId();

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeydown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
      }
    }

    window.addEventListener("keydown", onKeydown);
    return () => window.removeEventListener("keydown", onKeydown);
  }, [open]);

  useEffect(() => {
    if (!open) {
      return;
    }

    const previousOverflow = document.body.style.overflow;
    const previousPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = "hidden";
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = previousOverflow;
      document.body.style.paddingRight = previousPaddingRight;
    };
  }, [open]);

  return (
    <header className="sticky top-0 z-40 border-b border-edge/70 bg-canvas/85 backdrop-blur-lg relative">
      <div className="mx-auto flex w-full max-w-6xl items-center justify-between gap-4 px-4 py-3 pr-16 sm:px-6 sm:pr-20 lg:px-8 lg:pr-24">
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="rounded-full px-1 py-1 text-sm font-semibold tracking-[0.18em] text-text transition hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
        >
          {siteData.profile.handle}
        </Link>

        <div className="flex items-center gap-2">
          <nav aria-label="Primary" className="hidden md:block">
            <ul className="flex items-center gap-1">
              {siteData.navLinks.map((item) => {
                const active = isActivePath(normalizedPathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={() => setOpen(false)}
                      className={cn(
                        "inline-flex rounded-full border border-transparent px-3.5 py-2 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px",
                        active
                          ? "border border-accent/20 bg-accent-soft text-accent"
                          : "text-mute hover:border-edge-strong hover:bg-panel hover:text-text",
                      )}
                      aria-current={active ? "page" : undefined}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <button
            type="button"
            className="inline-flex items-center justify-center rounded-full border border-edge bg-panel px-3 py-2 text-sm font-medium text-text shadow-premium transition hover:border-accent/45 hover:text-accent active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent md:hidden"
            aria-expanded={open}
            aria-controls={mobilePanelId}
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((value) => !value)}
          >
            {open ? "Close" : "Menu"}
          </button>
        </div>
      </div>

      <div className="absolute right-3 top-1/2 -translate-y-1/2 sm:right-4 lg:right-6">
        <ThemeToggle />
      </div>

      <div id={mobilePanelId} hidden={!open} className="mx-auto w-full max-w-6xl px-4 pb-3 sm:px-6 md:hidden">
        <nav aria-label="Mobile primary" className="rounded-2xl border border-edge bg-panel p-2 shadow-premium motion-safe:animate-fade-up">
          <ul className="space-y-1">
            {siteData.navLinks.map((item) => {
              const active = isActivePath(normalizedPathname, item.href);

              return (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className={cn(
                      "flex w-full items-center justify-between rounded-xl px-3 py-2.5 text-sm font-medium transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px",
                      active
                        ? "bg-accent-soft text-accent"
                        : "text-mute hover:bg-canvas hover:text-text",
                    )}
                    aria-current={active ? "page" : undefined}
                  >
                    <span>{item.label}</span>
                    {active ? <span className="h-1.5 w-1.5 rounded-full bg-accent" aria-hidden /> : null}
                  </Link>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </header>
  );
}
