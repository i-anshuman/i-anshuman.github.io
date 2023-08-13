import styles from "@/styles/components/Navmenu.module.css";
import Link from "next/link";
import { NavMenuProps } from "@/types";

export default function NavMenu({ links }: NavMenuProps) {
  return (
    <ol className={styles.menu}>
      {links.map(({ id, title }) => (
        <li className={styles.menu_item} key={id}>
          <Link href={id} scroll={false} aria-label={`Go to ${title}`} title={title}>
            {title}
          </Link>
        </li>
      ))}
    </ol>
  );
}
