<script setup lang="ts">
import type { HeadingProps } from "../../../../foundation/src/components/heading.vue";
const props = defineProps<HeadingProps>();
</script>

<template>
  <Heading v-bind="props" as="h2">
    <slot />
  </Heading>
</template>
