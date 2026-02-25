"use client";

import { useSyncExternalStore } from "react";
import { cn } from "@/lib/utils";

type Theme = "light" | "dark";

const THEME_STORAGE_KEY = "theme-preference";
const THEME_CHANGE_EVENT = "theme-change";

function getSystemTheme(): Theme {
  if (typeof window === "undefined") {
    return "light";
  }

  return window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
}

function readThemeFromEnvironment(): Theme {
  if (typeof document === "undefined") {
    return "light";
  }

  const documentTheme = document.documentElement.dataset.theme;
  if (documentTheme === "light" || documentTheme === "dark") {
    return documentTheme;
  }

  const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
  if (stored === "light" || stored === "dark") {
    return stored;
  }

  return getSystemTheme();
}

function applyTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  document.documentElement.style.colorScheme = theme;
}

function notifyThemeChange() {
  if (typeof window !== "undefined") {
    window.dispatchEvent(new Event(THEME_CHANGE_EVENT));
  }
}

function subscribeThemeStore(onStoreChange: () => void) {
  if (typeof window === "undefined") {
    return () => {};
  }

  const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

  const handleThemeChange = () => onStoreChange();
  const handleSystemThemeChange = () => {
    const stored = window.localStorage.getItem(THEME_STORAGE_KEY);
    if (stored === "light" || stored === "dark") {
      return;
    }

    applyTheme(mediaQuery.matches ? "dark" : "light");
    onStoreChange();
  };

  const handleStorage = (event: StorageEvent) => {
    if (event.key !== THEME_STORAGE_KEY) {
      return;
    }

    const value = event.newValue;
    if (value === "light" || value === "dark") {
      applyTheme(value);
    } else {
      applyTheme(getSystemTheme());
    }

    onStoreChange();
  };

  window.addEventListener(THEME_CHANGE_EVENT, handleThemeChange);
  window.addEventListener("storage", handleStorage);
  mediaQuery.addEventListener("change", handleSystemThemeChange);

  return () => {
    window.removeEventListener(THEME_CHANGE_EVENT, handleThemeChange);
    window.removeEventListener("storage", handleStorage);
    mediaQuery.removeEventListener("change", handleSystemThemeChange);
  };
}

type IconProps = {
  className?: string;
};

function SunIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2.5M12 19.5V22M22 12h-2.5M4.5 12H2M19.1 4.9l-1.8 1.8M6.7 17.3l-1.8 1.8M19.1 19.1l-1.8-1.8M6.7 6.7L4.9 4.9" />
    </svg>
  );
}

function MoonIcon({ className }: IconProps) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className={className} aria-hidden>
      <path d="M20 15.2A8 8 0 1 1 8.8 4 6.6 6.6 0 0 0 20 15.2Z" />
    </svg>
  );
}

export function ThemeToggle() {
  const theme = useSyncExternalStore(subscribeThemeStore, readThemeFromEnvironment, () => "light");

  function handleToggle() {
    const nextTheme: Theme = theme === "light" ? "dark" : "light";
    window.localStorage.setItem(THEME_STORAGE_KEY, nextTheme);
    applyTheme(nextTheme);
    notifyThemeChange();
  }

  return (
    <button
      type="button"
      onClick={handleToggle}
      className={cn(
        "relative inline-flex h-8 w-14 items-center rounded-full border border-edge shadow-premium transition duration-200 ease-out active:translate-y-px focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent motion-reduce:transition-none",
        theme === "dark" ? "bg-slate-800/95 hover:border-slate-500" : "bg-panel hover:border-accent/45",
      )}
      aria-label={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
      aria-pressed={theme === "dark"}
      title={theme === "light" ? "Switch to dark mode" : "Switch to light mode"}
    >
      <span className="sr-only">Toggle theme</span>
      <span
        aria-hidden
        className={cn(
          "pointer-events-none absolute left-1 top-1 grid h-6 w-6 place-items-center rounded-full bg-white ring-1 ring-black/15 shadow transition duration-200 ease-out motion-reduce:transition-none",
          theme === "dark" && "translate-x-6",
        )}
      >
        {theme === "light" ? (
          <SunIcon className="h-3 w-3 text-amber-500" />
        ) : (
          <MoonIcon className="h-3 w-3 text-slate-900" />
        )}
      </span>
    </button>
  );
}
