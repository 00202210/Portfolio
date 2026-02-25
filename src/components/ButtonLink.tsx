import Link from "next/link";
import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary";
  external?: boolean;
};

const baseClass =
  "inline-flex touch-manipulation items-center justify-center rounded-full border px-5 py-2.5 text-sm font-semibold shadow-premium transition duration-200 ease-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px motion-reduce:transition-none";

const variantClass: Record<NonNullable<ButtonLinkProps["variant"]>, string> = {
  primary:
    "border-transparent bg-accent text-white hover:bg-[#0c3f79] hover:shadow-[0_14px_34px_-20px_rgba(16,72,138,0.65)]",
  secondary: "border-edge bg-panel text-text hover:border-accent/45 hover:text-accent",
};

export function ButtonLink({
  href,
  children,
  className,
  variant = "primary",
  external = false,
}: ButtonLinkProps) {
  const classes = cn(baseClass, variantClass[variant], className);

  if (external) {
    const openInNewTab = /^https?:\/\//i.test(href);

    return (
      <a
        href={href}
        className={classes}
        target={openInNewTab ? "_blank" : undefined}
        rel={openInNewTab ? "noreferrer noopener" : undefined}
      >
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
    </Link>
  );
}
