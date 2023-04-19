import { ComponentPropsWithoutRef, ElementType } from "react";
import styles from "@/styles/components/Link.module.css";

type LinkProps<C extends ElementType> = {
  as?: C;
  children: string;
} & ComponentPropsWithoutRef<C>;

export default function Link<C extends ElementType>({as, children, ...props}: LinkProps<C>) {
  const Component = as || "a";
  return (
    <Component {...props} className={styles.link}>
      {children}
    </Component>
  );
}
