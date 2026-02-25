import Image from "next/image";

import type { ProjectEntry } from "@/content/siteData";
import { withBasePath } from "@/lib/basePath";
import { cn } from "@/lib/utils";

import { ButtonLink } from "./ButtonLink";
import { Tag } from "./Tag";

type ProjectDetailPageProps = {
  project: ProjectEntry;
};

type BulletListProps = {
  items: string[];
};

function BulletList({ items }: BulletListProps) {
  return (
    <ul className="mt-3 space-y-2.5 text-sm text-mute">
      {items.map((item) => (
        <li key={item} className="flex gap-2.5">
          <span aria-hidden className="mt-[0.55rem] h-1.5 w-1.5 rounded-full bg-accent" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export function ProjectDetailPage({ project }: ProjectDetailPageProps) {
  const isSquareHero = project.heroImageLayout === "square";

  return (
    <div className="space-y-10 pb-16 pt-8 sm:space-y-12 sm:pt-12">
      <header className="motion-safe:animate-fade-up">
        <div className="flex flex-wrap gap-1.5">
          {project.tags.map((tag) => (
            <Tag key={`${project.slug}-${tag}`} tag={tag} />
          ))}
        </div>

        <h1 className="mt-4 text-balance text-3xl font-semibold tracking-tight text-text sm:text-[2.8rem]">
          {project.title}
        </h1>
        <p className="mt-3 max-w-3xl text-base text-mute sm:text-lg">{project.summary}</p>

        <div className="mt-5 flex flex-wrap gap-2.5">
          {project.links.map((link) => (
            <ButtonLink key={link.url} href={link.url} external>
              {link.label}
            </ButtonLink>
          ))}
        </div>
      </header>

      <section className="motion-safe:animate-fade-up">
        <div
          className={cn(
            "relative w-full overflow-hidden rounded-2xl border border-edge bg-panel shadow-premium",
            isSquareHero ? "mx-auto aspect-square max-w-[42rem]" : "aspect-[16/9]",
          )}
        >
          <Image
            src={withBasePath(project.heroImage)}
            alt={`${project.title} preview`}
            fill
            className="object-cover transition duration-500 ease-out motion-reduce:transition-none"
            sizes={isSquareHero ? "(min-width: 1280px) 42rem, 100vw" : "100vw"}
            priority
          />
          <div
            className={cn(
              "absolute inset-0 pointer-events-none",
              isSquareHero
                ? "bg-[radial-gradient(70%_80%_at_20%_15%,rgba(125,182,255,0.08),rgba(0,0,0,0))]"
                : "bg-gradient-to-t from-slate-950/10 to-transparent",
            )}
            aria-hidden
          />
        </div>
      </section>

      <section className="grid gap-4 md:grid-cols-2 motion-safe:animate-fade-up">
        <article className="surface p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-text">Role</h2>
          <p className="mt-2 text-sm text-mute">{project.role}</p>

          <h3 className="mt-5 text-xs font-semibold uppercase tracking-[0.08em] text-text">Highlights</h3>
          <BulletList items={project.highlights} />
        </article>

        <article className="surface p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-text">Responsibilities</h2>
          <BulletList items={project.responsibilities} />
        </article>
      </section>

      <section className="grid gap-4 md:grid-cols-2 motion-safe:animate-fade-up">
        <article className="surface p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-text">Tech Stack</h2>
          <ul className="mt-3 flex flex-wrap gap-2">
            {project.techStack.map((stack) => (
              <li
                key={stack}
                className="rounded-full border border-edge bg-canvas px-3 py-1 text-xs font-semibold text-text"
              >
                {stack}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-text">Status</h3>
          <p className="mt-2 text-sm text-mute">{project.status}</p>
        </article>

        <article className="surface p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-text">Impact</h2>
          <BulletList items={project.impactPoints} />
        </article>
      </section>

      <section className="motion-safe:animate-fade-up">
        <article className="surface p-5 sm:p-6">
          <h2 className="text-lg font-semibold text-text">Architecture Notes</h2>
          <BulletList items={project.architectureNotes} />
        </article>
      </section>
    </div>
  );
}
