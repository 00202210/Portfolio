import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: "var(--canvas)",
        panel: "var(--panel)",
        "panel-strong": "var(--panel-strong)",
        edge: "var(--edge)",
        "edge-strong": "var(--edge-strong)",
        text: "var(--text)",
        mute: "var(--mute)",
        accent: "var(--accent)",
        "accent-soft": "var(--accent-soft)",
      },
      boxShadow: {
        premium: "0 12px 40px -24px rgba(15, 23, 42, 0.5)",
      },
      animation: {
        "fade-up": "fadeUp 500ms ease-out both",
      },
      keyframes: {
        fadeUp: {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
