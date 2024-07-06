<script setup lang="ts">
import type { AProps } from "../../../../foundation/src/components/a.vue";
const props = defineProps<AProps>();
</script>

<template>
  <A class="booty" v-bind="props">
    <slot />
  </A>
</template>
