import Image from "next/image";

import type { ProjectEntry } from "@/content/siteData";
import { withBasePath } from "@/lib/basePath";

import { ButtonLink } from "./ButtonLink";
import { Tag } from "./Tag";

type ProjectCardProps = {
  project: ProjectEntry;
  priority?: boolean;
};

export function ProjectCard({ project, priority = false }: ProjectCardProps) {
  return (
    <article className="surface interactive-card group flex h-full flex-col overflow-hidden">
      <div className="relative h-44 w-full overflow-hidden border-b border-edge sm:h-48">
        <Image
          src={withBasePath(project.heroImage)}
          alt={`${project.title} project preview`}
          fill
          priority={priority}
          className="object-cover transition duration-500 ease-out group-hover:scale-[1.03] motion-reduce:transition-none"
          style={{ objectPosition: project.heroCardPosition ?? "50% 50%" }}
          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
        />
        <div
          className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/15 to-transparent"
          aria-hidden
        />
      </div>

      <div className="flex flex-1 flex-col p-5 sm:p-6">
        <div className="flex flex-wrap items-center gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={`${project.slug}-${tag}`} tag={tag} />
          ))}
        </div>

        <h3 className="mt-4 text-xl font-semibold tracking-tight text-text">{project.title}</h3>
        <p className="mt-2 text-sm text-mute">{project.summary}</p>

        <dl className="mt-4 space-y-1.5 text-xs text-mute">
          <div>
            <dt className="inline font-medium text-text">Role:</dt> <dd className="inline">{project.role}</dd>
          </div>
          <div>
            <dt className="inline font-medium text-text">Status:</dt> <dd className="inline">{project.status}</dd>
          </div>
        </dl>

        <div className="relative z-10 mt-6 flex flex-wrap items-center gap-2.5">
          <ButtonLink href={`/projects/${project.slug}/`} variant="secondary">
            View details
          </ButtonLink>
          {project.links.map((link) => (
            <ButtonLink key={link.url} href={link.url} variant="primary" external>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </div>
    </article>
  );
}
