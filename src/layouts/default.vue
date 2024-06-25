<script setup lang="ts">
const { profile } = useAppConfig();

const tabs = [
  {
    key: "blog",
    label: "Blog",
    icon: "theme" as const,
    link: {
      to: "/blog",
      label: "Blog",
    },
  },
  {
    key: "projects",
    label: "Projects",
    icon: "home" as const,
    link: {
      to: "/projects",
      label: "Projects",
    },
  },
];

const handleSearch = () => {
  alert("Search!");
};

useHead({
  title: `${profile.name} | Blog`,
});
</script>

<template>
  <Main>
    <Bar sticky flexible container>
      <template #left>
        <Avatar :src="profile.avatar" :alt="profile.name" />
        <Tabs :tabs="tabs" />
      </template>
      <template #right>
        <Input
          prepend-icon="search"
          :placeholder="$t('navSearch')"
          readonly
          @click="handleSearch"
        >
          <template #append>
            <span class="flex items-center gap-spacing-2xs">
              <Kbd label="⌘" />
              <Kbd label="K" />
            </span>
          </template>
        </Input>
        <AppTranslate />
        <AppTheme />
        <AppColormode />
      </template>
    </Bar>
    <div class="container mx-auto">
      <slot />
    </div>
  </Main>
</template>
