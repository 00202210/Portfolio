import Link from "next/link";

import { siteData } from "@/content/siteData";

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-edge/70 bg-panel/60">
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-4 py-10 sm:px-6 md:grid-cols-2 lg:px-8">
        <div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-text">{siteData.profile.handle}</p>
          <p className="mt-3 max-w-sm text-sm text-mute">{siteData.profile.headline}</p>
        </div>

        <div className="md:justify-self-end">
          <h2 className="text-sm font-semibold text-text">Quick Links</h2>
          <ul className="mt-3 space-y-1.5 text-sm">
            {siteData.navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className="inline-flex rounded-md px-1 py-0.5 text-mute transition duration-150 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent"
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className="border-t border-edge/70 px-4 py-4 text-center text-xs text-mute sm:px-6 lg:px-8">
        <p>
          Copyright {year} {siteData.profile.handle}. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
