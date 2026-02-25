import { ButtonLink } from "@/components/ButtonLink";
import { siteData } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

export const metadata = createPageMetadata({
  title: "About",
  description: "About 00202210: Roblox Luau scripter focused on scalable networking and backend system design.",
  path: "/about",
});

export default function AboutPage() {
  return (
    <div className="pb-20 pt-8 sm:pt-12">
      <header className="max-w-3xl motion-safe:animate-fade-up">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-[2.8rem]">About</h1>
        <p className="mt-3 text-base text-mute sm:text-lg">
          I script Roblox experiences in Luau with a systems-first mindset. My work prioritizes predictable
          networking behavior, scalable structures, and backend reliability for live games.
        </p>
      </header>

      <section className="mt-8 grid gap-4 lg:grid-cols-2 motion-safe:animate-fade-up">
        <article className="surface p-5 sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">What I Focus On</h2>
          <ul className="mt-4 space-y-2 text-sm text-mute">
            <li className="flex gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Designing maintainable game systems with explicit boundaries.</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Building networking flows that stay responsive without sacrificing trust.</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Structuring backend logic to survive growth and ongoing iteration.</span>
            </li>
            <li className="flex gap-2">
              <span aria-hidden className="mt-1.5 h-1.5 w-1.5 rounded-full bg-accent" />
              <span>Reducing long-term complexity with reusable modules and service patterns.</span>
            </li>
          </ul>
        </article>

        <article className="surface p-5 sm:p-6">
          <h2 className="text-xl font-semibold tracking-tight text-text">Core Skills</h2>
          <ul className="mt-4 flex flex-wrap gap-2">
            {siteData.skills.map((skill) => (
              <li key={skill} className="chip">
                {skill}
              </li>
            ))}
          </ul>

          <h3 className="mt-6 text-xs font-semibold uppercase tracking-[0.08em] text-text">Experience Snapshot</h3>
          <p className="mt-2 text-sm text-mute">{siteData.profile.yearsActive}</p>
          <p className="mt-1 text-sm text-mute">{siteData.profile.availability}</p>
        </article>
      </section>

      <section className="surface mt-8 p-5 motion-safe:animate-fade-up sm:p-6">
        <h2 className="text-xl font-semibold tracking-tight text-text">Systems and Architecture Approach</h2>
        <div className="mt-4 grid gap-3 md:grid-cols-2">
          {siteData.systemsAndArchitecture.map((item) => (
            <article key={item.title} className="rounded-xl border border-edge bg-canvas p-4">
              <h3 className="text-sm font-semibold text-text">{item.title}</h3>
              <p className="mt-2 text-sm text-mute">{item.detail}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="surface mt-8 p-5 motion-safe:animate-fade-up sm:p-6">
        <h2 className="text-xl font-semibold tracking-tight text-text">Working Style</h2>
        <p className="mt-3 text-sm text-mute">
          I prefer clear scope, observable system behavior, and measurable progress across milestones. I keep
          codebases organized for handoff and collaboration, and I optimize for long-term maintainability.
        </p>
        <div className="mt-5">
          <ButtonLink href="/contact">Contact Me!</ButtonLink>
        </div>
      </section>
    </div>
  );
}
