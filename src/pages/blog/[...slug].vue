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

const { data: surround } = await useAsyncData(
  `${route.path}-surround`,
  () => {
    return queryContent<BlogPage>()
      .where({
        _extension: "md",
        navigation: { $ne: false },
      })
      .only(["created", "title", "description", "_path"])
      .findSurround(path);
  },
  { default: () => [] }
);
</script>

<template>
  <Page>
    <template #left>
      <Nav />
    </template>
    <Article>
      <div class="pb-spacing-m border-b border-ui-outline">
        <p class="py-spacing-2xs text-ui-primary">{{ page?.category }}</p>
        <h1>{{ page?.title }}</h1>
        <p>{{ page?.description }}</p>
      </div>
      <ContentRenderer v-if="page?.body" :value="page" />
      <div class="flex items-center gap-spacing-m py-spacing-m">
        <Button
          v-if="surround[0]"
          variant="text"
          :link="{
            to: `/blog${surround[0]._path}`,
            label: surround[0].title,
          }"
          :label="surround[0].title"
          prepend-icon="left"
        />
        <Button
          v-if="surround[1]"
          variant="text"
          :link="{
            to: `/blog${surround[1]._path}`,
            label: surround[1].title,
          }"
          :label="surround[1].title"
          append-icon="right"
          class="ml-auto"
        />
      </div>
    </Article>
    <template v-if="page?.body?.toc?.links?.length" #right>
      <Toc :links="page.body.toc.links" :extend="{ wrapper: 'py-spacing-s' }" />
    </template>
  </Page>
</template>
