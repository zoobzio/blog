<script setup lang="ts">
const route = useRoute();

const open = useState<string[]>(() => []);

const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation({ sort: { date: 1 } })
);
if (!navigation) {
  throw createError({
    statusCode: 400,
    statusMessage: "Content navigation unavailable!",
  });
}

const groups =
  navigation.value?.map((n) => ({
    key: n._path,
    label: n.title,
    links: n.children?.map((c) => ({
      key: c._path,
      label: c.title,
      to: `/blog${c._path}`,
    })),
  })) ?? [];

const routeIndex = groups.findIndex((g) =>
  g?.links?.find((l) => l.to === route.path)
);
if (routeIndex >= 0) {
  open.value.push(groups[routeIndex].key);
}
</script>

<template>
  <nav class="pt-spacing-m">
    <Button
      prepend-icon="search"
      :label="$t('navSearch')"
      grow
      variant="outlined"
    >
      <template #append>
        <span class="flex items-center gap-spacing-2xs">
          <Kbd label="⌘" />
          <Kbd label="K" />
        </span>
      </template>
    </Button>
    <Accordion
      v-model="open"
      :groups="groups"
      :extend="{
        wrapper: 'sticky top-[51px] py-spacing-s',
        content: 'flex flex-col gap-spacing-xs',
      }"
    >
      <template #content="{ group }">
        <Links :links="group.links" :active="route.path" />
      </template>
    </Accordion>
  </nav>
</template>
