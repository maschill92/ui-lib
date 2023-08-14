<template>
  <TabGroup
    :selected-index="selectedIndex"
    @change="(newValue) => (selectedIndex = newValue)"
  >
    <slot />
  </TabGroup>
</template>

<script lang="ts" setup>
import { TabGroup } from "@headlessui/vue";
import { useVModel } from "@vueuse/core";

const props = defineProps<{ selectedIndex?: number }>();
const emit = defineEmits<{
  (e: "update:selectedIndex", value: number): void;
}>();

const selectedIndex = useVModel(props, "selectedIndex", emit, {
  defaultValue: 0,
  passive: true,
});
</script>
