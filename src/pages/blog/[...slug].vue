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
        <div class="flex items-center gap-spacing-xs">
          <Code inline>
            <Icon icon="calendar" />
            {{ new Date(String(page?.date)).toLocaleDateString() }}
          </Code>
          <Code inline>
            <Icon icon="hourglass" />
            7 minutes
          </Code>
          <Code inline>
            <Icon icon="reader" />
            456 views
          </Code>
          <Button icon="share" class="ml-auto" />
        </div>
        <h1>{{ page?.title }}</h1>
        <p>{{ page?.description }}</p>
      </div>
      <ContentRenderer v-if="page?.body" :value="page" />
    </Article>
    <Surround />
    <template v-if="page?.body?.toc?.links?.length" #right>
      <Toc :links="page.body.toc.links" :extend="{ wrapper: 'py-spacing-s' }" />
    </template>
  </Pane>
</template>
