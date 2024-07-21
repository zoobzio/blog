import type { ParsedContent } from "@nuxt/content/dist/runtime/types";

export interface BlogPage extends ParsedContent {
  category: string;
  date: `${string}-${string}-${string}`;
  img: {
    src: string;
    alt: string;
  };
  readIn: number;
  views: number;
}
