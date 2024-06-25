import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface BlogPage extends ParsedContent {
  date: `${string}-${string}-${string}`;
  category: string;
}
