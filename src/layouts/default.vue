<script setup lang="ts">
const { profile } = useAppConfig();

const tabs = [
  {
    key: "blog",
    label: "Blog",
    icon: "blog" as const,
    link: {
      to: "/blog",
      label: "Blog",
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
    <Bar sticky flexible container :extend="{ inner: 'max-w-[1024px]' }">
      <template #left>
        <Avatar :src="profile.avatar" :alt="profile.name" />
        <Tabs :tabs="tabs" />
      </template>
      <template #right>
        <AppTranslate />
        <AppTheme />
        <AppColormode />
      </template>
    </Bar>
    <div class="container mx-auto max-w-[1024px]">
      <slot />
    </div>
  </Main>
</template>
