import { ElementType } from "react";
import { LinkProps } from "@/types";
import styles from "@/styles/components/Link.module.css";

export default function Link<C extends ElementType>({as, children, ...props}: LinkProps<C>) {
  const Component = as ?? "a";
  return (
    <Component {...props} className={styles.link}>
      {children}
    </Component>
  );
}
