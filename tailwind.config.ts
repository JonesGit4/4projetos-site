import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        // Design System — Layout Prévio 4Projetos
        navy: {
          DEFAULT: "#0F1A2E",
          light: "#1B2D4A",
        },
        copper: {
          DEFAULT: "#C8956C",
          light: "#E8C9AB",
        },
        offwhite: "#FAFAF8",
        charcoal: "#1A1A1A",
        // Brand logo color (accent — not primary site color)
        brand: {
          light: "#81c8e0",
          DEFAULT: "#458594",
          dark: "#1a2a3a",
          muted: "#cddfe5",
        },
      },
      fontFamily: {
        heading: ["var(--font-dm-serif)", "Georgia", "serif"],
        body: ["var(--font-dm-sans)", "system-ui", "sans-serif"],
      },
      borderRadius: {
        btn: "3px",
      },
    },
  },
  plugins: [],
};
export default config;
