import { useContext } from "react";
import { Logo } from "@/components/logo";
import { Sidenav } from "@/components/sidenav";
import { NavMenu } from "@/components/navmenu";
import { DownloadResumeButton, Hamburger } from "@/components/button";
import { SidebarContext } from "@/context";
import { ScrollDirection } from "@/hooks/useScrollDirection";
import { useScrollDirection } from "@/hooks";
import portfolio from "@/portfolio.json";
import { HeaderProps } from "@/types";
import styles from "@/styles/components/Header.module.css";

const scrollConfiguration = {
  initialDirection: ScrollDirection.UP,
  thresholdPixels: 20,
};

const headerClass = (scroll: number, scrollDirection: ScrollDirection): string => {
  if(scroll === 0) return "";
  return scrollDirection === ScrollDirection.UP
          ? styles.header_show
          : styles.header_hide;
};

export default function Header(props: HeaderProps) {
  const {
    state: { open },
    toggle,
  } = useContext(SidebarContext);

  const { scrollDirection, scroll } = useScrollDirection(scrollConfiguration);

  return (
    <header
      className={`${styles.header} ${headerClass(scroll, scrollDirection)}`}
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
            href={portfolio.social.resume}
          />
        </div>
        <div className={styles.nav__menu__drawer}>
          <Hamburger label="menu" open={open} onClick={toggle} />
          <Sidenav open={open}>
            <DownloadResumeButton
              label="Download Resume"
              title="Resume"
              href={portfolio.social.resume}
            />
          </Sidenav>
        </div>
      </nav>
    </header>
  );
}
