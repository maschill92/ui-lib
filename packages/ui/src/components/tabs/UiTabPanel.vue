<template>
  <TabPanel :unmount="false" class="focus:outline-none focus:ring rounded">
    <slot />
  </TabPanel>
</template>

<script lang="ts" setup>
import { TabPanel } from "@headlessui/vue";
</script>
