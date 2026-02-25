import { ButtonLink } from "@/components/ButtonLink";

export default function NotFound() {
  return (
    <div className="flex min-h-[60vh] flex-col items-center justify-center py-16 text-center">
      <p className="rounded-full border border-edge bg-panel px-3 py-1 text-xs font-semibold uppercase tracking-wide text-mute">
        404
      </p>
      <h1 className="mt-5 text-3xl font-semibold tracking-tight text-text sm:text-4xl">Page not found</h1>
      <p className="mt-3 max-w-md text-sm text-mute">
        This route does not exist in the portfolio export. Use the links below to continue.
      </p>
      <div className="mt-6 flex flex-wrap justify-center gap-3">
        <ButtonLink href="/">Back home</ButtonLink>
        <ButtonLink href="/projects" variant="secondary">
          View projects
        </ButtonLink>
      </div>
    </div>
  );
}
