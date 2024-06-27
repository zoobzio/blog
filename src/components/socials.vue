<script setup lang="ts">
const { profile } = useAppConfig();
const keys = Object.keys(profile.socials) as (keyof typeof profile.socials)[];
</script>

<template>
  <div class="flex items-center gap-spacing-xs">
    <Button
      v-for="k in keys"
      :key="k"
      :icon="k"
      variant="outlined"
      :link="{
        to: profile.socials[k],
        label: k,
        target: '_blank',
      }"
    />
  </div>
</template>
