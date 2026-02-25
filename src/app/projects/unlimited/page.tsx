import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("unlimited");

export const metadata = createPageMetadata({
  title: project?.title ?? "unLimited",
  description: project?.summary ?? "Project details for unLimited.",
  path: "/projects/unlimited",
  image: project?.heroImage,
});

export default function UnlimitedPage() {
  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
