import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#3E63DD",
        terracotta: "#E8794F",
        offwhite: "#F7F9FB",
        ink: "#1B1E28",
        muted: "#6B7280",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        display: ["Outfit", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
