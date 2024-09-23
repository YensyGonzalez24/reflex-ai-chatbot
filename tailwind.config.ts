import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
      borderColor: {
        "ct-white": "#f1f1f1",
        "ct-light": "#f0f0f0",
        "ct-dark": "#333333",
      },
      textColor: {
        "ct-white": "#f1f1f1",
        "ct-light": "#777777",
        "ct-dark": "#333333",
      },
      backgroundColor: {
        "ct-light": "#d9d9d9",
      },
    },
  },
  plugins: [],
};

export default config;
