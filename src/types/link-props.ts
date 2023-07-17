import { ComponentPropsWithoutRef, ElementType } from "react";

type LinkProps<C extends ElementType> = {
  as?: C;
  children: string;
} & ComponentPropsWithoutRef<C>;

export default LinkProps;
