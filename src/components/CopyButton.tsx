"use client";

import { useState } from "react";

type CopyButtonProps = {
  value: string;
  label?: string;
  copiedLabel?: string;
  successMessage?: string;
};

export function CopyButton({
  value,
  label = "Copy",
  copiedLabel = "Copied",
  successMessage = "Copied to clipboard.",
}: CopyButtonProps) {
  const [copied, setCopied] = useState(false);

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(value);
      setCopied(true);
      window.setTimeout(() => setCopied(false), 1500);
    } catch {
      setCopied(false);
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleCopy}
        className="inline-flex items-center justify-center rounded-full border border-edge bg-panel px-4 py-2 text-sm font-semibold text-text shadow-premium transition duration-200 ease-out hover:border-accent/45 hover:text-accent focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-accent active:translate-y-px motion-reduce:transition-none"
      >
        {copied ? copiedLabel : label}
      </button>
      <span className="sr-only" aria-live="polite">
        {copied ? successMessage : ""}
      </span>
    </>
  );
}
