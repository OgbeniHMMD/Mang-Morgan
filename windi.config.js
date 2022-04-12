import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        mono: ["Space Mono", "monospace", "ui-monospace", "SFMono-Regular"],
        display: ["Poppins", "Oswald"],
        body: ["Cabin", "Open Sans"],
      },
      colors: {
        alt: "#1C3386",
        primary: "#DCBA40",
        black: "#121212",
      },
    },
  },
});
