import type { Config } from "tailwindcss";
import preset from "@repo/design-tokens";
import typography from "@tailwindcss/typography";

const config: Config = {
  presets: [preset as Config],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "../../packages/ui/src/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            "--tw-prose-body": "#1B1624",
            "--tw-prose-headings": "#1B1624",
            "--tw-prose-links": "#1B1624",
            "--tw-prose-bold": "#1B1624",
            "--tw-prose-code": "#1B1624",
            h2: { fontFamily: "var(--font-playfair), Georgia, serif" },
            h3: { fontFamily: "var(--font-playfair), Georgia, serif" },
          },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
