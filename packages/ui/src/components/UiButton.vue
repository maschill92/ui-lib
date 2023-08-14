<template>
  <button
    type="button"
    class="h-8 grid-cols-[max-content_auto_max-content] items-center rounded border bg-default px-4 shadow hover:bg-default-hover focus:outline-none focus:ring align-middle justify-center"
    :class="{
      'inline-grid': !block,
      flex: block,
      'min-w-full': block
    }"
  >
    <span class="me-2"><slot name="prepend" /></span>
    <span class="flex items-center justify-center"><slot /></span>
    <span class="ms-2"><slot name="append" /></span>
  </button>
</template>

<script setup lang="ts">
defineProps<{ block?: boolean }>();
</script>
