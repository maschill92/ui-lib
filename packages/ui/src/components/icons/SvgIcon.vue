<template>
  <span class="block max-w-full max-h-full m-auto w-5 h-5">
    <svg
      class="relative block w-full max-w-full max-h-full"
      viewBox="0 0 24 24"
      :style="iconStyle"
    >
      <path :d="path" />
    </svg>
  </span>
</template>

<script lang="ts">
import {
  type ComponentPropsOptions,
  type PropType,
  computed,
  defineComponent,
} from "vue";
type Flip = "horizontal" | "vertical" | "both" | "none";

export function createIconProps() {
  return {
    flip: {
      type: String as PropType<Flip>,
      required: false,
      default: "none" satisfies Flip,
    },
    rotate: {
      type: Number,
      required: false,
      default: 0,
    },
  } as const satisfies ComponentPropsOptions;
}

export default defineComponent({
  props: {
    path: {
      type: String,
      required: true,
    },
    ...createIconProps(),
  },
  setup(props) {
    const iconStyle = computed(() => ({
      "--sx": ["both", "horizontal"].includes(props.flip) ? "-1" : "1",
      "--sy": ["both", "vertical"].includes(props.flip) ? "-1" : "1",
      "--r": `${props.rotate}deg`,
    }));

    return { iconStyle };
  },
});
</script>

<style scoped lang="css">
svg {
  transform: rotate(var(--r, 0deg)) scale(var(--sx, 1), var(--sy, 1));
}

path {
  fill: currentColor;
}
</style>
