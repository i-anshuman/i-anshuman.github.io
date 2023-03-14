import { useContext } from "react";
import { Logo } from "@/components/logo";
import { Sidenav } from "@/components/sidenav";
import { NavMenu } from "@/components/navmenu";
import { DownloadResumeButton, Hamburger } from "@/components/button";
import { SidebarContext } from "@/context";
import { ScrollDirection } from "@/hooks/useScrollDirection";
import { useScrollDirection } from "@/hooks";
import portfolio from "@/portfolio.json";
import styles from "@/styles/components/Header.module.css";

const scrollConfiguration = {
  initialDirection: ScrollDirection.UP,
  thresholdPixels: 50,
};

type HeaderProps = {};

export default function Header(props: HeaderProps) {
  const {
    state: { open },
    toggle,
  } = useContext(SidebarContext);

  const { scrollDirection, scroll } = useScrollDirection(scrollConfiguration);

  return (
    <header
      className={`${styles.header} ${
        scroll !== 0
          ? scrollDirection === ScrollDirection.UP
            ? styles.header_show
            : styles.header_hide
          : ""
      }`}
      data-open={open}
    >
      <nav className={styles.nav} aria-labelledby="Top Navigation">
        <div className={styles.nav__logo} tabIndex={-1}>
          <Logo />
        </div>
        <div className={styles.nav_menu_links}>
          <NavMenu links={portfolio.links} />
          <DownloadResumeButton
            label="Download Resume"
            title="Resume"
            href="#"
          />
        </div>
        <div className={styles.nav__menu__drawer}>
          <Hamburger label="menu" open={open} onClick={toggle} />
          <Sidenav open={open}>
            <DownloadResumeButton
              label="Download Resume"
              title="Resume"
              href="#"
            />
          </Sidenav>
        </div>
      </nav>
    </header>
  );
}
