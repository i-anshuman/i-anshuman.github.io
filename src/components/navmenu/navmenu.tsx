import styles from "@/styles/components/Navmenu.module.css";
import Link from "next/link";
import { MenuProps } from "@/types";

export default function NavMenu({ links }: MenuProps) {
  return (
    <ol className={styles.menu}>
      {
        links
        .filter(({ hidden }) => !hidden )
        .map(({ id, title }) => (
          <li className={styles.menu_item} key={id}>
            <Link href={id} scroll={false} aria-label={`Go to ${title}`} title={title}>
              {title}
            </Link>
          </li>
        ))
      }
    </ol>
  );
}
