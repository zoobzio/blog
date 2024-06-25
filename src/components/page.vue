<script lang="ts">
export const usePageUI = defineComponentUI({
  slots: {
    section: "grid grid-cols-5 gap-spacing-2xl",
    left: "",
    right: "",
    content: "",
  },
  variants: {
    panels: {
      1: {
        content: "col-span-5",
      },
      2: {
        content: "col-span-4",
      },
      3: {
        content: "col-span-3",
      },
    },
  },
});

export type PageUI = Parameters<typeof usePageUI>[0];

export interface PageProps {
  ui?: PageUI;
}
</script>

<script setup lang="ts">
const props = defineProps<PageProps>();
const slots = Object.keys(useSlots());
const ui = usePageUI(props.ui, {
  panels: slots.length,
});
</script>

<template>
  <section :class="ui.section()">
    <aside v-if="$slots.left" :class="ui.left()">
      <slot name="left" />
    </aside>
    <div :class="ui.content()">
      <slot />
    </div>
    <aside v-if="$slots.right" :class="ui.right()">
      <slot name="right" />
    </aside>
  </section>
</template>
