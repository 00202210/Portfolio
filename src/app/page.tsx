import { ButtonLink } from "@/components/ButtonLink";
import { ProjectCard } from "@/components/ProjectCard";
import { siteData, projects } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "Home",
  description:
    "00202210 is a Roblox Luau scripter focused on scalable gameplay systems, networking, and backend architecture.",
  path: "/",
});

const featuredProjectSlugs = new Set(["immortal-cultivation", "unlimited", "cutesignal"]);
const featuredProjects = projects.filter((project) => featuredProjectSlugs.has(project.slug));

export default function HomePage() {
  return (
    <div className="pb-20 pt-8 sm:pt-12">
      <section className="motion-safe:animate-fade-up">
        <p className="inline-flex rounded-full border border-edge bg-panel px-3 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.12em] text-mute">
          {siteData.profile.availability}
        </p>

        <h1 className="mt-5 max-w-4xl text-balance text-3xl font-semibold tracking-tight text-text sm:text-[2.9rem]">
          {siteData.profile.headline}
        </h1>

        <p className="mt-4 max-w-2xl text-base text-mute sm:text-lg">
          I build stable, clean Luau systems for live Roblox experiences with a focus on networking quality,
          maintainable architecture, and long-term scalability.
        </p>

        <div className="mt-7 flex flex-wrap gap-2.5">
          <ButtonLink href="/projects">Explore projects</ButtonLink>
          <ButtonLink href="/contact" variant="secondary">
            Contact on Discord
          </ButtonLink>
        </div>

        <dl className="surface mt-9 grid gap-4 p-5 sm:grid-cols-3 sm:p-6">
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.1em] text-mute">Handle</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight text-text">{siteData.profile.handle}</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.1em] text-mute">Focus</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight text-text">Luau + Systems</dd>
          </div>
          <div>
            <dt className="text-[0.7rem] uppercase tracking-[0.1em] text-mute">Location</dt>
            <dd className="mt-1 text-lg font-semibold tracking-tight text-text">{siteData.profile.location}</dd>
          </div>
        </dl>
      </section>

      <section className="mt-14 motion-safe:animate-fade-up sm:mt-16">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-text sm:text-3xl">Featured Projects</h2>
            <p className="mt-2 text-sm text-mute">Production work and creator-owned systems.</p>
          </div>
          <ButtonLink href="/projects" variant="secondary">
            See all projects
          </ButtonLink>
        </div>

        <div className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {featuredProjects.map((project, index) => (
            <ProjectCard key={project.slug} project={project} priority={index === 0} />
          ))}
        </div>
      </section>

      <section className="mt-14 grid gap-4 lg:grid-cols-2 motion-safe:animate-fade-up sm:mt-16">
        <article className="surface p-5 sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">Core Skills</h2>
          <p className="mt-2 text-sm text-mute">What I bring to Roblox teams building ambitious games.</p>
          <ul className="mt-5 flex flex-wrap gap-2">
            {siteData.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>
        </article>

        <article className="surface p-5 sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">Systems and Architecture</h2>
          <p className="mt-2 text-sm text-mute">
            Recruiter-friendly view of how I approach reliability, scale, and maintainability.
          </p>
          <ul className="mt-5 space-y-3">
            {siteData.systemsAndArchitecture.map((item) => (
              <li key={item.title}>
                <h3 className="text-sm font-semibold tracking-tight text-text">{item.title}</h3>
                <p className="mt-1 text-sm text-mute">{item.detail}</p>
              </li>
            ))}
          </ul>
        </article>
      </section>

      <section className="surface mt-14 p-6 text-center motion-safe:animate-fade-up sm:mt-16 sm:p-7">
        <h2 className="text-2xl font-semibold tracking-tight text-text">Open to Roblox studio opportunities</h2>
        <p className="mt-3 text-sm text-mute">
          If you need a Luau scripter who can own systems end-to-end, let&apos;s connect.
        </p>
        <div className="mt-5">
          <ButtonLink href="/contact">Start the conversation</ButtonLink>
        </div>
      </section>
    </div>
  );
}
