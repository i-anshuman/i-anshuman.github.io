import { Variants } from "framer-motion";
import { ComponentPropsWithoutRef, ElementType } from "react";

type AnimatedTextProps<C extends ElementType> = {
  as?: C;
  children: string;
  variants?: (index: number) => Variants;
} & ComponentPropsWithoutRef<C>;

export default AnimatedTextProps;
