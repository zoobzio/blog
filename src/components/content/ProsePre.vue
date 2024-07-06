<script lang="ts">
const usePreUI = defineComponentUI({
  slots: {
    pre: "rounded border border-ui-outline pa-spacing-m",
  },
});

export type PreUI = Parameters<typeof usePreUI>[0];

export interface PreProps {
  code?: string;
  language?: string;
  filename?: string;
  highlights?: number[];
  meta?: string;
  ui?: PreUI;
  extend?: {
    [K in "pre"]: string;
  };
}
</script>

<script setup lang="ts">
const props = defineProps<PreProps>();
const ui = usePreUI(props.ui);

const copied = ref(false);

function handleCopy() {
  if (copied.value || !props.code) return;
  copied.value = true;
  navigator.clipboard.writeText(props.code);
  setTimeout(() => (copied.value = false), 2000);
}
</script>

<template>
  <div class="relative">
    <pre :class="ui.pre({ class: extend?.pre })"><slot /></pre>
    <Button
      :icon="copied ? 'check' : 'copy'"
      variant="outlined"
      extend="absolute top-spacing-m right-spacing-m"
      :disabled="copied"
      @click="handleCopy"
    />
  </div>
</template>

<style>
pre {
  background-color: var(--ui-surface-container) !important;
}

pre code .line {
  display: block;
}
</style>
