import { defineComponent, h } from "vue";
import SvgIcon, { createIconProps } from "./SvgIcon.vue";

export function createIconComponent(path: string) {
  return defineComponent({
    props: {
      ...createIconProps(),
    },
    setup(props) {
      return () => h(SvgIcon, { ...props, path });
    },
  });
}
