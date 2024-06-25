<script setup lang="ts">
const route = useRoute();
const { data: navigation } = await useAsyncData("navigation", () =>
  fetchContentNavigation({ sort: { date: 1 } })
);

const open = useState<string[]>(() => []);

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
</script>

<template>
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
</template>
