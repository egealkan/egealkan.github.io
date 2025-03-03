import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0A192F",    // Deep navy blue
          light: "#172A46",   // Lighter navy
        },
        accent: {
          primary: "#64FFDA", // Teal
          secondary: "#8892B0" // Slate gray
        },
        text: {
          primary: "#E6F1FF",  // White/off-white
          secondary: "#8892B0" // Slate gray
        }
      },
      fontFamily: {
        sans: ["Inter", "SF Pro Display", "Helvetica", "sans-serif"],
        mono: ["Fira Code", "JetBrains Mono", "monospace"],
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
      }
    },
  },
  plugins: [],
}

export default config