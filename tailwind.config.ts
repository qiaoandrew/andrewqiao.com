import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      transparent: "transparent",
      background: "hsl(var(--background))",
      foreground: "hsl(var(--foreground))",
      primary: {
        DEFAULT: "hsl(var(--primary))",
        foreground: "hsl(var(--primary-foreground))",
      },
      secondary: {
        foreground: "hsl(var(--secondary-foreground))",
      },
      muted: {
        foreground: "hsl(var(--muted-foreground))",
      },
      border: "hsl(var(--border))",
      ring: "hsl(var(--ring))",
    },
    fontFamily: {
      sans: ["var(--font-inter)", "sans-serif"],
      display: ["var(--font-inter-display)", "sans-serif"],
    },
    fontSize: {
      3: ["12px", "20px"],
      3.5: ["14px", "24px"],
      4: ["16px", "28px"],
      4.5: ["18px", "28px"],
      5: ["20px", "32px"],
      6: ["24px", "36px"],
      8: ["32px", "44px"],
      9: ["36px", "48px"],
      10: ["40px", "52px"],
      12: ["48px", "60px"],
    },
    extend: {
      animation: {
        "scale-in": "scale-in 0.2s ease",
        "scale-out": "scale-out 0.2s ease",
        "fade-in": "fade-in 200ms ease",
        "fade-out": "fade-out 200ms ease",
      },
      backgroundImage: {
        "dark-text-gradient":
          "linear-gradient(90deg, #808A98 0%, #F7F7F7 50%, #808A98 100%)",
        "dark-border-gradient":
          "linear-gradient(180deg, #202124 0%, #3B434E 50%, #202124 100%)",
        "dark-button-gradient":
          "linear-gradient(180deg, #0F0F0F 0%, #0F0F0F 50%, #2F2F2F 100%)",
      },
      keyframes: {
        "scale-in": {
          from: { opacity: "0", transform: "rotateX(-10deg) scale(0.9)" },
          to: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
        },
        "scale-out": {
          from: { opacity: "1", transform: "rotateX(0deg) scale(1)" },
          to: { opacity: "0", transform: "rotateX(-10deg) scale(0.95)" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "fade-out": {
          from: { opacity: "1" },
          to: { opacity: "0" },
        },
      },
    },
  },
  plugins: ["prettier-plugin-tailwind", require("tailwindcss-animate")],
};
export default config;
