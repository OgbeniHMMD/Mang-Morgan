import { defineConfig } from "windicss/helpers";

export default defineConfig({
  extract: {
    include: ["**/*.{jsx,tsx,css}"],
    exclude: ["node_modules", ".git", ".next"],
  },
  theme: {
    extend: {
      fontFamily: {
        display: ["Playfair Display"],
        body: ["tt-commons"],
      },
      colors: {
        alt: "#1C3386",
        primary: "#DCBA40",
        black: "#121212",
      },
    },
  },
  plugins: [
    require("windicss/plugin/scroll-snap"),
    require("windicss/plugin/aspect-ratio"),
  ],
});
