import { ButtonLink } from "@/components/ButtonLink";
import { CopyButton } from "@/components/CopyButton";
import { siteData } from "@/content/siteData";
import { createPageMetadata } from "@/lib/metadata";

type IconProps = {
  className?: string;
};

function DiscordIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="currentColor" aria-hidden>
      <path d="M19.2 5.8A16.6 16.6 0 0 0 15.5 4a.24.24 0 0 0-.25.12c-.16.29-.34.67-.47.97a15.7 15.7 0 0 0-5.56 0 10.6 10.6 0 0 0-.48-.97A.24.24 0 0 0 8.5 4a16.6 16.6 0 0 0-3.7 1.8.22.22 0 0 0-.1.08C2.4 9.4 1.8 12.8 2 16.1a.26.26 0 0 0 .1.2A16.6 16.6 0 0 0 6.6 18.4a.24.24 0 0 0 .26-.09c.35-.49.67-1 .95-1.56a.24.24 0 0 0-.13-.33c-.5-.19-.98-.42-1.44-.69a.24.24 0 0 1-.02-.4c.1-.07.21-.14.31-.22a.23.23 0 0 1 .24-.03c3 1.36 6.26 1.36 9.22 0a.23.23 0 0 1 .24.02c.1.08.21.15.32.23a.24.24 0 0 1-.02.4c-.46.27-.94.5-1.44.69a.24.24 0 0 0-.13.33c.29.55.61 1.07.95 1.56a.24.24 0 0 0 .26.09 16.5 16.5 0 0 0 4.5-2.1.26.26 0 0 0 .1-.2c.23-3.82-.38-7.2-2.7-10.24a.2.2 0 0 0-.1-.08ZM9.55 14.1c-.9 0-1.64-.83-1.64-1.84 0-1.02.72-1.85 1.64-1.85.92 0 1.65.84 1.64 1.85 0 1.01-.72 1.84-1.64 1.84Zm4.9 0c-.9 0-1.64-.83-1.64-1.84 0-1.02.72-1.85 1.64-1.85.92 0 1.65.84 1.64 1.85 0 1.01-.72 1.84-1.64 1.84Z" />
    </svg>
  );
}

function MailIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M3.5 6.5h17v11h-17z" />
      <path d="m4 7 8 6 8-6" />
    </svg>
  );
}

export const metadata = createPageMetadata({
  title: "Contact",
  description: "Contact 00202210 via Discord or email for Roblox Luau scripting opportunities.",
  path: "/contact",
});

export default function ContactPage() {
  const discordTag = siteData.contact.discordHandle;
  const email = siteData.contact.email;

  return (
    <div className="pb-20 pt-8 sm:pt-12">
      <header className="max-w-3xl motion-safe:animate-fade-up">
        <h1 className="text-balance text-3xl font-semibold tracking-tight text-text sm:text-[2.8rem]">Contact</h1>
        <p className="mt-3 text-base text-mute sm:text-lg">{siteData.contact.cta}</p>
      </header>

      <section className="surface mt-8 p-5 motion-safe:animate-fade-up sm:p-7">
        <h2 className="text-xl font-semibold tracking-tight text-text">Contact Options</h2>
        <p className="mt-2 text-sm text-mute">{siteData.contact.note}</p>

        <div className="mt-5 space-y-3">
          <div className="flex flex-col gap-3 rounded-xl border border-edge bg-canvas p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-edge bg-panel text-[#5865F2]">
                <DiscordIcon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-mute">Discord</p>
                <p className="text-lg font-semibold tracking-tight text-text">{discordTag}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <CopyButton
                value={discordTag}
                label="Copy Discord"
                copiedLabel="Copied"
                successMessage="Discord handle copied to clipboard."
              />
              <ButtonLink href="https://discord.com/app" variant="secondary" external>
                Open Discord
              </ButtonLink>
            </div>
          </div>

          <div className="flex flex-col gap-3 rounded-xl border border-edge bg-canvas p-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-2">
              <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-edge bg-panel text-accent">
                <MailIcon className="h-3.5 w-3.5" />
              </span>
              <div>
                <p className="text-xs font-semibold uppercase tracking-[0.08em] text-mute">Email</p>
                <p className="text-lg font-semibold tracking-tight text-text">{email}</p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3">
              <CopyButton
                value={email}
                label="Copy Email"
                copiedLabel="Copied"
                successMessage="Email copied to clipboard."
              />
              <ButtonLink href={`mailto:${email}`} variant="secondary" external>
                Send Email
              </ButtonLink>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
