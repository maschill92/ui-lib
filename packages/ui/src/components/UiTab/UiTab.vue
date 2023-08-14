<template>
  <Tab v-slot="{ selected }" as="template">
    <button
      class="inline-block rounded-t border-b p-4 ring-inset hover:bg-surface focus:outline-none focus:ring"
      :class="{
        'text-primary': selected,
        'border-primary': selected,
        'hover:border-inherit': !selected,
        'border-transparent': !selected,
      }"
    >
      <slot />
    </button>
  </Tab>
</template>

<script lang="ts" setup>
import { Tab } from "@headlessui/vue";
</script>
