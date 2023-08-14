<template>
  <ul
    class="border rounded"
  >
    <li
      v-for="item in listItems"
      :key="item"
      class="w-full px-4 py-2 border-b"
    >
      {{ item }}
    </li>
  </ul>
</template>

<script setup lang="ts">
import { ref } from "vue";
const listItems = ["Profile", "Settings", "Messages"];
</script>
