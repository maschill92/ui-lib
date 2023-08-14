<template>
  <TabList class="border-b text-center text-sm font-medium text-subdued">
    <div class="-mb-px flex flex-wrap space-x-2">
      <slot />
    </div>
  </TabList>
</template>

<script lang="ts" setup>
import { TabList } from "@headlessui/vue";
</script>
