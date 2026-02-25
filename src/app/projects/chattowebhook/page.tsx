import { notFound } from "next/navigation";

import { ProjectDetailPage } from "@/components/ProjectDetailPage";
import { getProjectBySlug } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

const project = getProjectBySlug("chattowebhook");

export const metadata = createPageMetadata({
  title: project?.title ?? "ChatToWebhook",
  description: project?.summary ?? "Project details for ChatToWebhook.",
  path: "/projects/chattowebhook",
  image: project?.heroImage,
});

export default function ChatToWebhookPage() {
  if (!project) {
    notFound();
  }

  return <ProjectDetailPage project={project} />;
}
