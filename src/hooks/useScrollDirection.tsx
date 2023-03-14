import { useState } from "react";
import { useMotionValueEvent, useScroll } from "framer-motion";

export const enum ScrollDirection {
  UP = "up",
  DOWN = "down",
}

type UseScrollDirectionProps = {
  initialDirection: ScrollDirection;
  thresholdPixels: number;
};

export default function useScrollDirection({
  initialDirection,
  thresholdPixels,
}: UseScrollDirectionProps) {
  const { scrollY } = useScroll();
  const [scrollDirection, setScrollDirection] = useState<ScrollDirection>(initialDirection);
  const [scroll, setScroll] = useState<number>(0);

  useMotionValueEvent(scrollY, "change", (latest) => {
    if (Math.abs(scroll - Math.round(latest)) >= thresholdPixels) {
      setScrollDirection(
        scroll < Math.round(latest) ? ScrollDirection.DOWN : ScrollDirection.UP
      );
    }
    setScroll(latest);
  });

  return { scrollDirection, scroll };
}
