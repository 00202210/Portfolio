import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("immortal-cultivation");

export const metadata = createPageMetadata({
  title: project?.title ?? "Immortal Cultivation",
  description: project?.summary ?? "Project details for Immortal Cultivation.",
  path: "/projects/immortal-cultivation",
  image: project?.heroImage,
});

export default function ImmortalCultivationPage() {
  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
