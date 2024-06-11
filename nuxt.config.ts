import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src/",
  extends: ["@zoobzio/foundation"],
  icon: {
    moon: "i-ic-twotone-dark-mode",
    sun: "i-ic-twotone-light-mode",
    theme: "i-ic-twotone-color-lens",
    translate: "i-ic-twotone-translate",
    search: "i-ic-twotone-search",
  },
  vite: {
    resolve: {
      dedupe: ["vue"],
    },
  },
});
