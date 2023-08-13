<template>
  <UiButton
    class="m-3 rounded bg-default p-4 shadow hover:bg-default-hover"
    @click="isDark = !isDark"
  >
    Toggle dark
  </UiButton>
  <main class="m-3 mx-auto max-w-lg space-y-3 ">
    <UiButton>Default Button</UiButton>
    <UiCard title="Noteworthy technology acquisitions 2021" subtitle="This is the subtitle!">
      <p>
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </UiCard>

    <UiBanner title="USPS has updated their rates" type="default">
      <p>Make sure you know how these changes affect your store.</p>
      <p class="text-subdued">More subtle stuff here.</p>
    </UiBanner>
    <UiBanner title="USPS has updated their rates" type="info">
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
    <hr />

    <UiList></UiList>
  </main>
</template>

<script setup lang="ts">
import UiBanner from "@/components/UiBanner.vue";
import { useMediaQuery, useLocalStorage } from "@vueuse/core";
import { watchEffect } from "vue";
import UiList from "./components/UiList.vue";
import UiCard from "./components/UiCard.vue";
import UiButton from "./components/UiButton.vue";

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
