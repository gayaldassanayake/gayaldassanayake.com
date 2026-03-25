import type { Config } from "tailwindcss";

const preset: Partial<Config> = {
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#5DCDF1",
          orange: "#FD976D",
          yellow: "#FDD46B",
          purple: "#C9B1FB",
        },
        surface: {
          DEFAULT: "#FFFFFF",
          warm: "#F9F6F3",
          muted: "#ECE5E1",
        },
        foreground: {
          DEFAULT: "#1B1624",
        },
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        body: ["var(--font-inter)", "sans-serif"],
      },
      borderRadius: {
        "2xl": "1rem",
        "3xl": "1.5rem",
      },
    },
  },
};

export default preset;
