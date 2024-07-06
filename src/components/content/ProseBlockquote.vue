<script setup lang="ts">
import type { BlockquoteProps } from "../../../../foundation/src/components/blockquote.vue";
const props = defineProps<BlockquoteProps>();
</script>

<template>
  <Blockquote v-bind="props">
    <slot />
  </Blockquote>
</template>
