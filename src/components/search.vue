<script setup lang="ts">
const route = useRoute();

const { data: pages } = useLazyFetch<BlogPage[]>("/api/search.json", {
  default: () => [],
  server: false,
});

const options = computed(() =>
  pages.value.map((page) => ({
    key: page._path ?? page._id,
    label: page.title ?? "Invalid title",
    page,
  }))
);

function handleUpdate(slug: string) {
  navigateTo({ path: `/blog${slug}` });
}
</script>

<template>
  <Dialog :title="$t('searchTitle')" :description="$t('searchDescription')">
    <template #trigger>
      <slot name="trigger">
        <Button
          prepend-icon="search"
          :label="$t('search')"
          grow
          variant="outlined"
          shortcut="Cmd+k"
        >
          <template #append>
            <span class="flex items-center gap-spacing-2xs">
              <Kbd label="⌘" />
              <Kbd label="K" />
            </span>
          </template>
        </Button>
      </slot>
    </template>
    <template #content>
      <Command :options="options" @update:model-value="handleUpdate">
        <template #item="{ item }">
          <span
            :data-active="route.path.endsWith(item.key)"
            class="flex items-center gap-spacing-xs data-[active=true]:(text-ui-primary)"
          >
            <Icon icon="article" />
            {{ item.label }}
          </span>
          <span class="ml-auto opacity-60 font-bold">
            {{ item.page.category }}
          </span>
        </template>
      </Command>
    </template>
  </Dialog>
</template>
