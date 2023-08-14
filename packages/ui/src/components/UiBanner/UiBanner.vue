<template>
  <div
    :class="{
      'bg-surface': isDefault,
      'border-info': isInfo,
      'bg-info-subdued': isInfo,
      'border-success': isSuccess,
      'bg-success-subdued': isSuccess,
      'border-warning': isWarning,
      'bg-warning-subdued': isWarning,
      'border-critical': isCritical,
      'bg-critical-subdued': isCritical,
    }"
    class="flex rounded border p-6 dark:bg-surface"
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

<script lang="ts">
type BannerType = (typeof BannerTypes)[number];
export const BannerTypes = [
  "default",
  "info",
  "success",
  "warning",
  "critical",
] as const;
</script>

<script setup lang="ts">
import { computed, type Component } from "vue";
import AlertCircleOutline from "@/components/icons/AlertCircleOutline";
import AlertRhombusOutline from "@/components/icons/AlertRhombusOutline";
import CheckCircleOutline from "@/components/icons/CheckCircleOutline";
import InformationOutlineIcon from "@/components/icons/InformationOutlineIcon";


const props = withDefaults(defineProps<{ title: string; type?: BannerType }>(), {
  type: "default",
});

const bannerIcon = computed(() => {
  const iconRecord: Record<BannerType, { is: Component; class: string }> = {
    default: { is: InformationOutlineIcon, class: "text-default" },
    info: { is: InformationOutlineIcon, class: "text-info" },
    success: { is: CheckCircleOutline, class: "text-success" },
    warning: { is: AlertCircleOutline, class: "text-warning" },
    critical: { is: AlertRhombusOutline, class: "text-critical" },
  };

  return iconRecord[props.type];
});

const isDefault = computed(() => props.type === "default");
const isInfo = computed(() => props.type === "info");
const isSuccess = computed(() => props.type === "success");
const isWarning = computed(() => props.type === "warning");
const isCritical = computed(() => props.type === "critical");
</script>
