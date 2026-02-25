import type { Metadata } from "next";
import type { ReactNode } from "react";
import Script from "next/script";

import { Footer } from "@/components/Footer";
import { Nav } from "@/components/Nav";
import { siteData } from "@/content/siteData";
import { withBasePath } from "@/lib/basePath";

import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteData.site.url),
  title: {
    default: siteData.site.title,
    template: `%s | ${siteData.profile.handle}`,
  },
  description: siteData.site.description,
  applicationName: siteData.profile.handle,
  openGraph: {
    type: "website",
    siteName: siteData.profile.handle,
    title: siteData.site.title,
    description: siteData.site.description,
    images: [
      {
        url: withBasePath("/images/og-cover.svg"),
        width: 1200,
        height: 630,
        alt: `${siteData.profile.handle} portfolio cover`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: siteData.site.title,
    description: siteData.site.description,
    images: [withBasePath("/images/og-cover.svg")],
  },
  icons: {
    icon: withBasePath("/favicon.svg"),
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="antialiased">
        <Script
          id="theme-init"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              (function () {
                try {
                  var key = "theme-preference";
                  var saved = localStorage.getItem(key);
                  var theme = (saved === "light" || saved === "dark")
                    ? saved
                    : (window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light");
                  document.documentElement.dataset.theme = theme;
                  document.documentElement.style.colorScheme = theme;
                } catch (e) {}
              })();
            `,
          }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <div className="relative isolate min-h-screen">
          <Nav />
          <main id="main-content" className="mx-auto w-full max-w-6xl px-4 sm:px-6 lg:px-8">
            {children}
          </main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
