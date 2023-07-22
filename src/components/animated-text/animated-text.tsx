import { motion } from "framer-motion";
import { memo, ElementType } from "react";
import { AnimatedTextProps } from "@/types";
import { getKey } from "@/utils";

function AnimatedText<C extends ElementType>({
  as,
  children,
  variants,
  ...restProps
}: AnimatedTextProps<C>) {
  const Component = motion(as ?? "span");
  return (
    <Component {...restProps}>
      {[...children].map((char, index) => (
        <motion.span
          key={getKey(index)}
          {...variants?.(index)}
        >
          {char}
        </motion.span>
      ))}
    </Component>
  );
};

export default memo(AnimatedText) as typeof AnimatedText;
