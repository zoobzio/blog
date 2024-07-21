import { defineNuxtConfig } from "nuxt/config";

export default defineNuxtConfig({
  srcDir: "src/",
  extends: ["../foundation"],
  i18n: {
    strategy: "no_prefix",
    defaultLocale: "en",
    langDir: "lang",
    lazy: true,
    locales: [
      {
        code: "en",
        file: "en.ts",
      },
      // TODO add more languages
    ],
  },
});
