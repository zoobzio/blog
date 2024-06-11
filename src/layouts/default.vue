<script setup lang="ts">
const { mode, theme } = useUntheme();
const themes = useThemes();
const { profile } = useAppConfig();

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
    <Bar container>
      <template #left>
        <h1 class="font-bold">{{ profile.name }}</h1>
      </template>
      <template #center>
        <Input
          prepend-icon="search"
          placeholder="Search..."
          readonly
          @click="handleSearch"
        >
          <template #append>
            <Kbd label="⌘ K" />
          </template>
        </Input>
      </template>
      <template #right>
        <Tooltip>
          <Button
            variant="outlined"
            icon="translate"
            @click="handleTranslate"
          />
          <template #tip>
            Language
            <Kbd label="⌘ X" />
          </template>
        </Tooltip>
        <Tooltip>
          <Button variant="outlined" icon="theme" @click="handleToggleTheme" />
          <template #tip>
            Theme
            <Kbd label="⌘ X" />
          </template>
        </Tooltip>
        <Tooltip>
          <Button
            variant="outlined"
            :icon="mode === 'dark' ? 'moon' : 'sun'"
            @click="handleToggleColorMode"
          />
          <template #tip>
            {{ mode === "dark" ? "Dark Mode" : "Light Mode" }}
            <Kbd label="⌘ X" />
          </template>
        </Tooltip>
      </template>
    </Bar>
    <slot />
  </Main>
</template>
