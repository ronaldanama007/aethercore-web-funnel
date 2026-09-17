import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        obsidian: {
          DEFAULT: "#060608",
          surface: "#0f0f14",
          elevated: "#16161c",
          card: "#121218",
          dark: "#040406",
        },
        violet: {
          accent: "#7c5cff",
          hover: "#6944fa",
          light: "#c9bcff",
          glow: "rgba(124, 92, 255, 0.35)",
        },
        silver: {
          text: "#f5f5f7",
          muted: "#8a8a94",
          dim: "#62626e",
        },
      },
      fontFamily: {
        display: ["'Clash Display'", "system-ui", "-apple-system", "sans-serif"],
        sans: ["'Inter'", "system-ui", "-apple-system", "sans-serif"],
        mono: ["'JetBrains Mono'", "monospace"],
      },
      boxShadow: {
        glow: "0 0 35px rgba(124, 92, 255, 0.35)",
        "glow-sm": "0 0 16px rgba(124, 92, 255, 0.25)",
        "glow-lg": "0 0 50px rgba(124, 92, 255, 0.45)",
      },
      borderRadius: {
        pill: "9999px",
        bento: "20px",
        "bento-lg": "24px",
      },
    },
  },
  plugins: [],
};

export default config;
