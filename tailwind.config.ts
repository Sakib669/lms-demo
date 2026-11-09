import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#EEF2FF",
          100: "#E0E7FF",
          200: "#C7D2FE",
          300: "#A5B4FC",
          400: "#818CF8",
          500: "#6366F1",
          600: "#4F46E5",
          700: "#4338CA",
          800: "#3730A3",
          900: "#312E81",
          // Hermes Electric Cobalt & Cyan Palette
          cobalt: "#0000F2",
          cobaltDark: "#0000A8",
          cobaltLight: "#3B82F6",
          cyan: "#00D2FF",
          navy: "#060814",
          cardDark: "#0B0F19",
          borderDark: "#1E293B",
          // Enterprise slate accents
          slateMuted: "#64748B",
          slateLight: "#F8FAFC",
        },
      },
      fontFamily: {
        sans: [
          '"Plus Jakarta Sans"',
          "-apple-system",
          "BlinkMacSystemFont",
          '"Segoe UI"',
          "Roboto",
          "sans-serif",
        ],
        display: [
          '"Space Grotesk"',
          '"Plus Jakarta Sans"',
          "system-ui",
          "sans-serif",
        ],
      },
      boxShadow: {
        subtle: "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
        posh: "0 10px 30px -10px rgba(0, 0, 0, 0.05), 0 4px 6px -2px rgba(0, 0, 0, 0.02)",
        "posh-hover": "0 20px 40px -12px rgba(0, 0, 242, 0.08), 0 8px 16px -4px rgba(15, 23, 42, 0.04)",
        "cobalt-glow": "0 0 25px rgba(0, 0, 242, 0.22)",
        "cyan-glow": "0 0 25px rgba(0, 210, 255, 0.3)",
        glass: "0 8px 32px 0 rgba(0, 0, 0, 0.06)",
      },
    },
  },
  plugins: [],
};
export default config;
