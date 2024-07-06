<script setup lang="ts">
import type { CodeProps } from "../../../../foundation/src/components/code.vue";
const props = defineProps<CodeProps>();
</script>

<template>
  <Code inline v-bind="props">
    <slot />
  </Code>
</template>
