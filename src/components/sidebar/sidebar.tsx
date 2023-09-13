import { SidebarProps } from "@/types";
import styles from "@/styles/components/Sidebar.module.css";

export default function Sidebar({ alignment, children }: SidebarProps) {
  return (
    <div className={styles.sidebar} data-alignment={alignment}>
      {children}
    </div>
  );
}
