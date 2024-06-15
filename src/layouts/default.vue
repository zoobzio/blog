<script setup lang="ts">
const { mode, theme } = useUntheme();
const themes = useThemes();
const { profile } = useAppConfig();

const tabs = [
  {
    key: "blog",
    label: "Blog",
    to: "/blog",
    icon: "theme",
  },
  {
    key: "projects",
    label: "Projects",
    to: "/projects",
    icon: "home",
  },
];

const handleSearch = () => {
  alert("Search!");
};

const handleTranslate = () => {
  alert("Translate!");
};

// TODO turn this into a module w/ a theme selector
const handleToggleTheme = () => {
  const index = themes.findIndex((t) => t === theme.value);
  theme.value = index === themes.length - 1 ? themes[0] : themes[index + 1];
};

const handleToggleColorMode = () => {
  mode.value = mode.value === "dark" ? "light" : "dark";
};

useHead({
  title: `${profile.name} | Blog`,
});
</script>

<template>
  <Main>
    <ClientOnly>
      <Bar sticky flexible container>
        <template #left>
          <Avatar :src="profile.avatar" :alt="profile.name" />
          <Tabs :tabs="tabs" />
        </template>
        <template #right>
          <Input
            prepend-icon="search"
            placeholder="Search..."
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
          <Tooltip>
            <Button
              variant="outlined"
              icon="translate"
              shortcut="Cmd+G"
              @click="handleTranslate"
            />
            <template #tip> Language </template>
          </Tooltip>
          <Tooltip>
            <Button
              variant="outlined"
              icon="theme"
              shortcut="Cmd+H"
              @click="handleToggleTheme"
            />
            <template #tip> Theme </template>
          </Tooltip>
          <Tooltip>
            <Button
              variant="outlined"
              :icon="mode === 'dark' ? 'moon' : 'sun'"
              shortcut="Cmd+J"
              @click="handleToggleColorMode"
            />
            <template #tip>
              {{ mode === "dark" ? "Dark Mode" : "Light Mode" }}
            </template>
          </Tooltip>
        </template>
      </Bar>
      <div class="container mx-auto">
        <slot />
      </div>
    </ClientOnly>
  </Main>
</template>
