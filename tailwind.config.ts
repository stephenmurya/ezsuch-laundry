import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./lib/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50: "#eff6ff",
          100: "#dbeafe",
          500: "#3b82f6",
          600: "#2563eb",
          700: "#1d4ed8",
        },
      },
      boxShadow: {
        soft: "0 20px 55px -30px rgba(15, 23, 42, 0.32)",
        card: "0 18px 45px -30px rgba(15, 23, 42, 0.22)",
      },
      backgroundImage: {
        "hero-glow":
          "radial-gradient(circle at top left, rgba(59,130,246,0.12), transparent 38%), radial-gradient(circle at top right, rgba(14,165,233,0.08), transparent 34%)",
      },
    },
  },
  plugins: [],
};

export default config;

