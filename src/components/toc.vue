<script lang="ts">
export const useTocUI = defineComponentUI({
  slots: {
    wrapper: "sticky top-[51px]",
    title:
      "font-bold text-ui-on-surface py-spacing-xs flex items-center gap-spacing-xs",
  },
});

export type TocUI = Parameters<typeof useTocUI>[0];
export type TocLink = {
  id: string;
  text: string;
  depth?: number;
  children?: TocLink[];
};

export interface TocProps {
  links: TocLink[];
  ui?: TocUI;
  extend?: {
    [K in "wrapper" | "title" | "list" | "link"]?: string;
  };
}
</script>

<script setup lang="ts">
const props = defineProps<TocProps>();
const ui = useTocUI(props.ui);
const visibility = ref<Ref<boolean>[]>([]);

// TODO support more depth than just 2
const toc = props.links.map((l) => ({
  to: `#${l.id}`,
  label: l.text,
  depth: l.depth,
  children: l.children?.map((c) => ({
    to: `#${c.id}`,
    label: c.text,
    depth: c.depth,
  })),
}));

const linkList = props.links.reduce((x, y) => {
  const extract = (link: TocLink) => {
    x.push(link.id);
    if (link.children) {
      link.children.forEach(extract);
    }
  };
  extract(y);
  return x;
}, [] as string[]);

const active = computed(() =>
  linkList.filter((_, i) => visibility.value[i]?.value).map((l) => `#${l}`)
);

const attachVisibility = (id: string) => {
  const el = ref(document.getElementById(id));
  return useElementVisibility(el);
};

onMounted(() => {
  visibility.value = linkList.map(attachVisibility);
});
</script>

<template>
  <div :class="ui.wrapper({ class: extend?.wrapper })">
    <h3 :class="ui.title()">On this page</h3>
    <Links :links="toc" :active="active" />
  </div>
</template>
