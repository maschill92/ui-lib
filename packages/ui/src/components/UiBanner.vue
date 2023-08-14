<template>
  <div
    class="flex rounded border bg-surface p-6"
    :class="{
      'border-info': isInfo,
      'border-success': isSuccess,
      'border-warning': isWarning,
      'border-critical': isCritical,
    }"
    role="alert"
  >
    <div class="mr-5">
      <component :is="bannerIcon.is" :class="bannerIcon.class" />
    </div>
    <div class="grow">
      <div class="mb-1 font-medium leading-none">{{ title }}</div>
      <slot />
    </div>
  </div>
</template>

<script lang="ts"></script>

<script setup lang="ts">
import { computed, type Component } from "vue";
import AlertCircleOutline from "./icons/AlertCircleOutline";
import AlertRhombusOutline from "./icons/AlertRhombusOutline";
import CheckCircleOutline from "./icons/CheckCircleOutline";
import InformationOutlineIcon from "./icons/InformationOutlineIcon";

type Type = "default" | "info" | "success" | "warning" | "critical";

const props = withDefaults(defineProps<{ title: string; type?: Type }>(), {
  type: "default",
});

const bannerIcon = computed(() => {
  const iconRecord: Record<Type, { is: Component; class: string }> = {
    default: { is: InformationOutlineIcon, class: "text-default" },
    info: { is: InformationOutlineIcon, class: "text-info" },
    success: { is: CheckCircleOutline, class: "text-success" },
    warning: { is: AlertCircleOutline, class: "text-warning" },
    critical: { is: AlertRhombusOutline, class: "text-critical" },
  };

  return iconRecord[props.type];
});

const isInfo = computed(() => props.type === "info");
const isSuccess = computed(() => props.type === "success");
const isWarning = computed(() => props.type === "warning");
const isCritical = computed(() => props.type === "critical");
</script>
