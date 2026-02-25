import { ProjectCard } from "@/components/ProjectCard";
import { projects } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Projects",
  description: "Explore Roblox and GitHub projects by 00202210 with architecture and impact-focused breakdowns.",
  path: "/projects",
});

export default function ProjectsPage() {
  return (
    <div className="pb-20 pt-8 sm:pt-12">
      <header className="motion-safe:animate-fade-up">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-[2.8rem]">Projects</h1>
        <p className="mt-3 max-w-2xl text-base text-mute sm:text-lg">
          Real work across Roblox experiences and reusable Luau services/libraries.
        </p>
      </header>

      <section className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3 motion-safe:animate-fade-up">
        {projects.map((project, index) => (
          <ProjectCard key={project.slug} project={project} priority={index === 0} />
        ))}
      </section>
    </div>
  );
}
