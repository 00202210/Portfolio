import type { ProjectTag } from "@/content/siteData";
import { cn } from "@/lib/utils";

const tagStyles: Record<ProjectTag, string> = {
  Roblox: "border-sky-300/70 bg-sky-100/75 text-sky-900",
  GitHub: "border-slate-400/55 bg-slate-100/85 text-slate-900",
  Library: "border-emerald-300/70 bg-emerald-100/85 text-emerald-900",
  Service: "border-amber-300/70 bg-amber-100/85 text-amber-900",
};

type TagProps = {
  tag: ProjectTag;
  className?: string;
};

export function Tag({ tag, className }: TagProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border px-2.5 py-1 text-[0.7rem] font-semibold uppercase tracking-[0.08em]",
        tagStyles[tag],
        className,
      )}
    >
      {tag}
    </span>
  );
}
