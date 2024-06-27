<script setup lang="ts">
defineProps<{
  post: BlogPage;
  icon: IconAlias;
}>();
</script>

<template>
  <Card :extend="{ card: 'hover:border-ui-primary' }">
    <Button :icon="icon" class="my-spacing-m" />
    <NuxtLink
      v-text="post.title"
      :to="`/blog${post._path}`"
      class="font-bold"
    />
    <div v-text="post.description" />
  </Card>
</template>
