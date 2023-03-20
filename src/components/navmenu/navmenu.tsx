import styles from "@/styles/components/Navmenu.module.css";
import Link from "next/link";

type NavMenuProps = {
  links: { id: string; title: string; desktop?: boolean }[];
};

export default function NavMenu({ links }: NavMenuProps) {
  return (
    <ol className={styles.menu}>
      {links.map(({ id, title }) => (
        <li className={styles.menu_item} key={id}>
          <Link href={id} scroll={false} aria-label={`Go to ${title}`}>
            {title}
          </Link>
        </li>
      ))}
    </ol>
  );
}
