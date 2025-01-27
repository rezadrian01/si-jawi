import type { Config } from "tailwindcss";

export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        "primary-color": "#F8DF7C",
        "secondary-color": "#452A00",
        "third-color": "#FF8F1B"
      },
    },
  },
  plugins: [],
} satisfies Config;
