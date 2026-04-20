import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./data/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        muted: "rgb(var(--muted) / <alpha-value>)",
        panel: "rgb(var(--panel) / <alpha-value>)",
        line: "rgb(var(--line))",
        accent: "rgb(var(--accent) / <alpha-value>)",
        accentSoft: "rgb(var(--accent-soft) / <alpha-value>)"
      },
      backgroundImage: {
        "grain-radial":
          "radial-gradient(circle at top, rgba(214, 164, 99, 0.18), transparent 35%), radial-gradient(circle at bottom right, rgba(93, 120, 147, 0.16), transparent 28%)"
      },
      boxShadow: {
        glow: "0 30px 80px rgba(0, 0, 0, 0.35)"
      },
      letterSpacing: {
        display: "-0.06em"
      }
    }
  },
  plugins: []
};

export default config;
