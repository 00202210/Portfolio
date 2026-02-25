import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("cutesignal");

export const metadata = createPageMetadata({
  title: project?.title ?? "CuteSignal",
  description: project?.summary ?? "Project details for CuteSignal.",
  path: "/projects/cutesignal",
  image: project?.heroImage,
});

export default function CuteSignalPage() {
  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
