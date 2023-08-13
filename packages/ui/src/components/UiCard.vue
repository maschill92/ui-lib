<template>
  <div
    class="block rounded bg-default dark:bg-surface p-6 shadow dark:border dark:shadow-none"
  >
    <slot name="title">
      <div
        class="mb-2 text-lg font-bold tracking-tight"
      >
        {{ title }}
      </div>
    </slot>
    <slot name="subtitle">
      <div
        class="mb-2 text-sm text-subdued -mt-2"
      >
        {{ subtitle }}
      </div>
    </slot>
    <slot />
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ title?: string, subtitle?: string; }>();
</script>
