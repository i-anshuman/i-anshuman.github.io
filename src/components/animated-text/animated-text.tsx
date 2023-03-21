import { motion, Variants } from "framer-motion";
import { ComponentPropsWithoutRef, ElementType } from "react";

type AnimatedTextProps<C extends ElementType> = {
  as?: C;
  children: string;
} & ComponentPropsWithoutRef<C>;

export default function AnimatedText<C extends ElementType>({
  as,
  children,
  ...restProps
}: AnimatedTextProps<C>) {
  const Component = motion(as || "span");
  return (
    <Component {...restProps}>
      {[...children].map((char, index) => (
        <motion.span key={index}>{char}</motion.span>
      ))}
    </Component>
  );
}
