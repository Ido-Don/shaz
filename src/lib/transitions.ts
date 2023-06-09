import { quartIn } from "svelte/easing";

export function change_font(node: HTMLDivElement, { duration }: { duration: number }) {
  return {
    duration,
    css: (t: number) => {
      const ease = quartIn(t);
      return `
					font-size: ${ease}rem;
					`;
    },
  };
}
