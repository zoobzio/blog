<script setup lang="ts">
const route = useRoute();
const path = route.path.replace("/blog", "");

const { data: page } = await useAsyncData(path, () =>
  queryContent<BlogPage>(path).findOne()
);
if (!page.value) {
  throw createError({
    statusCode: 404,
    statusMessage: "Page not found",
    fatal: true,
  });
}
</script>

<template>
  <Pane>
    <template #left>
      <Nav />
    </template>
    <div class="h-[200px] bg-ui-primary rounded-b-2xl" />
    <Article>
      <div class="border-b border-ui-outline pt-spacing-m">
        <small class="opacity-60 font-bold">{{ page?.date }}</small>
        <h1 class="pb-none">{{ page?.title }}</h1>
        <p class="pt-none">{{ page?.description }}</p>
      </div>
      <ContentRenderer v-if="page?.body" :value="page" />
    </Article>
    <Surround />
    <template v-if="page?.body?.toc?.links?.length" #right>
      <Toc :links="page.body.toc.links" :extend="{ wrapper: 'py-spacing-s' }" />
    </template>
  </Pane>
</template>
