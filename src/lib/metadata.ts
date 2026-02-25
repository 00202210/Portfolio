import type { Metadata } from "next";

import { siteData } from "@/content/siteData";
import { withBasePath } from "@/lib/basePath";

type MetadataInput = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

function normalizePath(path: string) {
  if (!path.startsWith("/")) {
    return `/${path}`;
  }
  return path;
}

export function createPageMetadata({ title, description, path, image }: MetadataInput): Metadata {
  const cleanPath = normalizePath(path);
  const imagePath = withBasePath(image ?? "/images/og-cover.svg");
  const canonicalPath = withBasePath(cleanPath);

  return {
    title,
    description,
    alternates: {
      canonical: canonicalPath,
    },
    openGraph: {
      title,
      description,
      type: "website",
      url: canonicalPath,
      images: [
        {
          url: imagePath,
          width: 1200,
          height: 630,
          alt: `${siteData.profile.handle} portfolio preview`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [imagePath],
    },
  };
}
