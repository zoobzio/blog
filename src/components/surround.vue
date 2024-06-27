<script setup lang="ts">
const route = useRoute();
const path = route.path.replace("/blog", "");

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () => {
    return queryContent<BlogPage>()
      .where({
        _extension: "md",
        navigation: { $ne: false },
      })
      .findSurround(path);
  },
  { default: () => [] }
);
</script>

<template>
  <div class="flex items-center gap-spacing-m py-spacing-m">
    <div class="flex items-center gap-spacing-m" v-if="surround[0]">
      <Button
        icon="left"
        :link="{
          to: `/blog${surround[0]._path}`,
          label: surround[0].title,
        }"
        :disabled="!surround[0]"
      />
      <div>
        <div v-text="surround[0].title" class="font-bold" />
        <div v-text="surround[0].description" class="opacity-60" />
      </div>
    </div>
    <div class="ml-auto flex items-center gap-spacing-m" v-if="surround[1]">
      <div class="text-right">
        <div v-text="surround[1].title" class="font-bold" />
        <div v-text="surround[1].description" class="opacity-60" />
      </div>
      <Button
        icon="right"
        :link="{
          to: `/blog${surround[1]._path}`,
          label: surround[1].title,
        }"
        :disabled="!surround[1]"
      />
    </div>
  </div>
</template>
