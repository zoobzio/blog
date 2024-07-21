<script setup lang="ts">
import type { AProps } from "../../../../foundation/src/components/a.vue";
const props = defineProps<AProps>();
</script>

<template>
  <A v-bind="props">
    <slot />
  </A>
</template>
