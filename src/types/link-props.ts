import { ComponentPropsWithoutRef, ElementType, ReactNode } from "react";

type LinkProps<C extends ElementType> = {
  as?: C;
  children: ReactNode;
} & ComponentPropsWithoutRef<C>;

export default LinkProps;
