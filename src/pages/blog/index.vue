<script setup lang="ts"></script>

<template>
  <Page>
    <template #left>
      <Nav />
    </template>
    <Article> </Article>
    <template #right>
      <Toc
        :links="[]"
        :extend="{ wrapper: 'sticky top-[51px] py-spacing-s' }"
      />
    </template>
  </Page>
</template>
