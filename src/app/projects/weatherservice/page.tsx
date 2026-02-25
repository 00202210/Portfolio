import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("weatherservice");

export const metadata = createPageMetadata({
  title: project?.title ?? "WeatherService",
  description: project?.summary ?? "Project details for WeatherService.",
  path: "/projects/weatherservice",
  image: project?.heroImage,
});

export default function WeatherServicePage() {
  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
