import { AnimatedTextProps } from "@/types";
import { motion } from "framer-motion";
import { memo, ElementType } from "react";

function AnimatedText<C extends ElementType>({
  as,
  children,
  variants,
  ...restProps
}: AnimatedTextProps<C>) {
  const Component = motion(as || "span");
  return (
    <Component {...restProps}>
      {[...children].map((char, index) => (
        <motion.span
          key={char}
          {...variants?.(index)}
        >
          {char}
        </motion.span>
      ))}
    </Component>
  );
};

export default memo(AnimatedText) as typeof AnimatedText;
