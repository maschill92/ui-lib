<template>
  <main class="m-3 mx-auto max-w-lg space-y-3">
    <h1 class="text-4xl tracking-tighter">UI Library</h1>
    <UiButton block @click="isDark = !isDark">
      <template #prepend><ThemeLightDark /></template>
      Toggle dark
    </UiButton>

    <h2 class="text-3xl tracking-tight">Tabs</h2>
    <div>
      <UiTabGroup>
        <UiTabList>
          <UiTab>Recent</UiTab>
          <UiTab>Popular</UiTab>
          <UiTab>Trending</UiTab>
        </UiTabList>
        <UiTabPanels>
          <UiTabPanel><UiCard title="Recent Content">Additional stuff here!</UiCard></UiTabPanel>
          <UiTabPanel><UiCard title="Popular Content">Additional stuff here!</UiCard></UiTabPanel>
          <UiTabPanel><UiCard title="Trending Content">Additional stuff here!</UiCard></UiTabPanel>
        </UiTabPanels>
      </UiTabGroup>
    </div>

    <h2 class="text-3xl tracking-tight">Cards</h2>
    <UiCard
      title="Noteworthy technology acquisitions 2021"
      subtitle="This is the subtitle!"
    >
      <p>
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </UiCard>

    <h2 class="text-3xl tracking-tight">Banners</h2>
    <UiBanner title="Information for You!" type="default">
      <p>Details about the application are here</p>
      <p class="text-subdued">More subtle stuff here.</p>
    </UiBanner>
    <UiBanner title="Hey! Just so you know!" type="info">
      <p>Make sure you know how these changes affect your store.</p>
      <p class="text-subdued">More subtle stuff here.</p>
    </UiBanner>
    <UiBanner title="USPS has updated their rates" type="success">
      <p>Make sure you know how these changes affect your store.</p>
      <p class="text-subdued">More subtle stuff here.</p>
    </UiBanner>
    <UiBanner title="USPS has updated their rates" type="warning">
      <p>Make sure you know how these changes affect your store.</p>
      <p class="text-subdued">More subtle stuff here.</p>
    </UiBanner>
    <UiBanner title="USPS has updated their rates" type="critical">
      <p>Make sure you know how these changes affect your store.</p>
      <p class="text-subdued">More subtle stuff here.</p>
    </UiBanner>

    <h2 class="text-3xl tracking-tight">Lists</h2>
    <UiList></UiList>
  </main>
</template>

<script setup lang="ts">
import { watchEffect } from "vue";
import { useMediaQuery, useLocalStorage } from "@vueuse/core";
import UiBanner from "./components/UiBanner.vue";
import UiList from "./components/UiList.vue";
import UiCard from "./components/UiCard.vue";
import UiButton from "./components/UiButton.vue";
import ThemeLightDark from "./components/icons/ThemeLightDark";
import {
  UiTabGroup,
  UiTabList,
  UiTab,
  UiTabPanels,
  UiTabPanel,
} from "./components/tabs";

const isPreferredDark = useMediaQuery("(prefers-color-scheme: dark)");
const isDark = useLocalStorage<boolean>("theme", isPreferredDark.value);

watchEffect(() => {
  if (isDark.value) {
    document.documentElement.classList.add("dark");
  } else {
    document.documentElement.classList.remove("dark");
  }
});
</script>
