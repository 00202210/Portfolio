export type ProjectTag = "Roblox" | "GitHub" | "Library" | "Service";

export type ProjectLink = {
  label: string;
  url: string;
  kind: "roblox" | "github" | "external";
};

export type ProjectEntry = {
  slug: "immortal-cultivation" | "unlimited" | "cutesignal" | "weatherservice" | "chattowebhook";
  title: string;
  summary: string;
  status: string;
  role: string;
  tags: ProjectTag[];
  responsibilities: string[];
  highlights: string[];
  techStack: string[];
  impactPoints: string[];
  architectureNotes: string[];
  heroImage: string;
  heroImageLayout: "landscape" | "square";
  heroCardPosition?: string;
  links: ProjectLink[];
};

export const siteData = {
  site: {
    title: "00202210 | Luau Scripter Portfolio",
    description:
      "Portfolio for 00202210, a Roblox Luau scripter focused on networking, scalable systems, and backend architecture for live experiences.",
    url: "https://00202210.dev",
  },
  profile: {
    handle: "00202210",
    displayName: "00202210",
    headline: "Roblox Scripter (Luau) building scalable gameplay and backend systems",
    availability: "Open to studio and long-term contract opportunities",
    location: "Remote",
    yearsActive: "3+ years scripting in Roblox ecosystem",
  },
  navLinks: [
    { href: "/", label: "Home" },
    { href: "/projects", label: "Projects" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ],
  skills: ["Luau", "Networking", "Scalable structures", "Backend architecture"],
  systemsAndArchitecture: [
    {
      title: "Network Ownership and Predictive Flow",
      detail:
        "Designing client/server boundaries around latency-critical paths, with server validation for integrity and clear replication contracts.",
    },
    {
      title: "Modular Domain Boundaries",
      detail:
        "Structuring systems by domain so features are independently testable, easier to onboard into, and safer to extend.",
    },
    {
      title: "Scale-Oriented Data and Service Layers",
      detail:
        "Building service abstractions for persistence, session state, and cross-system communication to support live updates and future growth.",
    },
    {
      title: "Operational Reliability",
      detail:
        "Using defensive programming, instrumentation hooks, and graceful failure paths to keep live servers stable under load.",
    },
  ],
  contact: {
    discordHandle: "00202210",
    email: "contact@00202210.dev",
    cta: "Let's talk about your game's scripting needs.",
    note: "Discord preferred for fastest response. Email is also available.",
  },
} as const;

export const projects: ProjectEntry[] = [
  {
    slug: "immortal-cultivation",
    title: "Immortal Cultivation",
    summary:
      "Contributed Luau gameplay and backend scripting for Immortal Cultivation, focusing on server-authoritative progression and combat systems for a live Roblox experience.",
    status: "Active developer",
    role: "Gameplay and systems scripter",
    tags: ["Roblox", "Service"],
    responsibilities: [
      "Implemented progression and combat features in Luau with clear client/server ownership boundaries.",
      "Maintained remote communication handlers with server-side validation and anti-abuse checks.",
      "Refactored gameplay code into modular services to reduce coupling across combat, economy, and progression domains.",
      "Profiled high-frequency server script paths and removed avoidable overhead in live update cycles.",
    ],
    highlights: [
      "Standardized RemoteEvent and RemoteFunction contracts so client actions map to explicit backend handlers.",
      "Introduced reusable state modules for combat and progression to improve consistency across new features.",
    ],
    techStack: ["Luau", "RemoteEvents/RemoteFunctions", "Profile-backed data flow", "Modular services"],
    impactPoints: [
      "Improved release stability by standardizing combat/progression remotes and server-side validation paths.",
      "Accelerated feature iteration by reusing modular Luau systems instead of rebuilding core logic per update.",
    ],
    architectureNotes: [
      "Clear separation of simulation logic from presentation to keep client behavior lightweight.",
      "Event contracts defined per domain to avoid implicit cross-system coupling.",
      "Guard clauses and fail-safe defaults added for live reliability.",
    ],
    heroImage: "/images/projects/immortal-cultivation.png",
    heroImageLayout: "landscape",
    links: [
      {
        label: "View on Roblox",
        url: "https://www.roblox.com/games/137354043762275/Immortal-Cultivation",
        kind: "roblox",
      },
    ],
  },
  {
    slug: "unlimited",
    title: "unLimited",
    summary:
      "Created and developed unLimited end-to-end in Luau, owning networking, gameplay systems, and scalable backend architecture decisions.",
    status: "Developer + creator",
    role: "Lead creator and systems architect",
    tags: ["Roblox", "Service"],
    responsibilities: [
      "Owned architecture and implementation for gameplay and backend services as lead creator.",
      "Designed networking patterns with server validation for security-critical player actions.",
      "Built service-layer modules for session state, orchestration, and cross-system communication.",
      "Planned and shipped iterative updates while preserving compatibility in live environments.",
    ],
    highlights: [
      "Defined clear API boundaries between services, controllers, and shared utilities to support scale.",
      "Centralized validation and shared utility flows to keep backend behavior consistent across systems.",
    ],
    techStack: ["Luau", "Service-oriented architecture", "Networking patterns", "Gameplay systems"],
    impactPoints: [
      "Reduced refactor churn during growth by enforcing clear service boundaries and shared backend utilities.",
      "Improved live-update confidence with validation-first networking and consistent backend orchestration patterns.",
    ],
    architectureNotes: [
      "Domain-specific services expose narrow APIs for easier maintenance.",
      "Centralized networking adapters for auditability and payload discipline.",
      "Shared type and validation utilities reduce edge-case failures.",
    ],
    heroImage: "/images/projects/unlimited.png",
    heroImageLayout: "landscape",
    links: [
      {
        label: "View on Roblox",
        url: "https://www.roblox.com/games/14417300475/unLimited",
        kind: "roblox",
      },
    ],
  },
  {
    slug: "cutesignal",
    title: "CuteSignal",
    summary:
      "Built CuteSignal as a lightweight Luau event library for predictable, maintainable communication patterns in scalable Roblox codebases.",
    status: "Creator",
    role: "Library author",
    tags: ["GitHub", "Library"],
    responsibilities: [
      "Designed and implemented a Luau signal API focused on readability and deterministic event flow.",
      "Prioritized low runtime overhead for frequent event dispatch in client and server contexts.",
      "Documented usage patterns, lifecycle behavior, and cleanup expectations for team adoption.",
      "Maintained a stable, low-complexity interface to reduce integration and upgrade risk.",
    ],
    highlights: [
      "Supports explicit connect and disconnect workflows suitable for long-lived Roblox processes.",
      "Small API surface composes cleanly with modular service and controller architectures.",
    ],
    techStack: ["Luau", "Library design", "API ergonomics", "Developer tooling mindset"],
    impactPoints: [
      "Improved code consistency across scripts by standardizing event flow through one lightweight abstraction.",
      "Reduced event-lifecycle bugs by making connect/disconnect and cleanup behavior explicit in Luau workflows.",
    ],
    architectureNotes: [
      "API surface intentionally small to reduce misuse and future breaking changes.",
      "Explicit disconnect and cleanup flows prevent hidden memory growth.",
      "Designed for integration into modular service and controller patterns.",
    ],
    heroImage: "/images/projects/cutesignal.png",
    heroImageLayout: "square",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/00202210/CuteSignal",
        kind: "github",
      },
    ],
  },
  {
    slug: "chattowebhook",
    title: "ChatToWebhook",
    summary:
      "Built ChatToWebhook as a server-side Luau utility that captures TextChatService messages and forwards them to webhook endpoints in rate-limit-safe batches.",
    status: "Creator",
    role: "Backend utility author",
    tags: ["GitHub", "Service"],
    responsibilities: [
      "Implemented a server-only, event-driven pipeline that listens to TextChatService and queues messages for outbound delivery.",
      "Designed batching and timed flush behavior to reduce webhook pressure and handle rate-limited endpoints more safely.",
      "Integrated HttpService delivery flows with modular configuration for webhook URL, interval, payload size, and filtering.",
      "Structured code into isolated modules (Config / Types / Externalize) to improve maintainability and integration in existing projects.",
    ],
    highlights: [
      "Webhook-agnostic design supports Discord, Slack, and custom HTTP endpoints without changing core flow.",
      "No per-frame work; runtime cost is mostly network I/O, making the utility practical for live Roblox servers.",
    ],
    techStack: ["Luau", "TextChatService", "HttpService", "Batch queue design"],
    impactPoints: [
      "Increases delivery reliability by buffering chat bursts into controlled webhook batches instead of immediate per-message sends.",
      "Improves moderation and analytics workflows by externalizing in-game chat logs to existing webhook-based tooling.",
    ],
    architectureNotes: [
      "Producer-consumer flow separates chat capture from network dispatch.",
      "Flush strategy supports both size-triggered and time-triggered sends.",
      "Validation and sanitization hooks are positioned before outbound payload construction.",
    ],
    heroImage: "/images/projects/chattowebhook.png",
    heroImageLayout: "square",
    heroCardPosition: "50% 52%",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/00202210/ChatToWebhook",
        kind: "github",
      },
    ],
  },
  {
    slug: "weatherservice",
    title: "WeatherService",
    summary:
      "Built WeatherService as a Luau backend module for deterministic weather state transitions and reusable environment orchestration.",
    status: "Creator",
    role: "Service author",
    tags: ["GitHub", "Service"],
    responsibilities: [
      "Implemented a single service boundary for weather transitions, scheduling, and current-state queries.",
      "Designed deterministic state transition logic for consistent behavior across server sessions.",
      "Structured configuration-driven rules so designers can tune behavior without changing core logic.",
      "Documented integration patterns for gameplay systems that consume weather and environment state.",
    ],
    highlights: [
      "Service architecture supports predictable replication hooks for environment updates.",
      "Modular design avoids scene-specific coupling and is reusable across multiple Roblox projects.",
    ],
    techStack: ["Luau", "Service patterns", "State transitions", "Modular architecture"],
    impactPoints: [
      "Simplified environment feature development by centralizing weather behavior behind one service interface.",
      "Improved long-term maintainability by replacing scene-specific scripts with config-driven transitions.",
    ],
    architectureNotes: [
      "Finite-state style transition handling keeps weather behavior predictable.",
      "Single service endpoint allows consistent system-level orchestration.",
      "Config-driven behavior enables quick balancing and iteration.",
    ],
    heroImage: "/images/projects/weatherservice.png",
    heroImageLayout: "square",
    heroCardPosition: "50% 36%",
    links: [
      {
        label: "View on GitHub",
        url: "https://github.com/00202210/WeatherService",
        kind: "github",
      },
    ],
  },
];

export function getProjectBySlug(slug: string) {
  return projects.find((project) => project.slug === slug);
}
