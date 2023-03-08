import styles from "@/styles/components/Sidenav.module.css";
import { motion, Variants } from "framer-motion";
import Menu from "./menu";
import portfolio from "@/portfolio.json";

type SidenavProps = {
  open: boolean;
};

const appear: Variants = {
  open: {
    opacity: 1,
    clipPath: `circle(1000px at calc(100% - 70px) 50px)`,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    opacity: 0,
    clipPath: `circle(30px at calc(100% - 65px) 50px)`,
    transition: {
      duration: 0.5,
    },
  },
};

const spread: Variants = {
  open: {
    clipPath: `circle(1000px at calc(100% - 70px) 50px)`,
    transition: {
      duration: 0.5,
    },
  },
  closed: {
    clipPath: `circle(30px at calc(100% - 65px) 50px)`,
    transition: {
      duration: 0.5,
    },
  },
};

export default function Sidenav({ open }: SidenavProps) {
  return (
    <motion.aside
      className={styles.sidenav}
      tabIndex={open ? 1 : -1}
      variants={appear}
      initial={false}
      animate={open ? "open" : "closed"}
    >
      <motion.nav
        className={styles.nav}
        variants={spread}
        initial={false}
        animate={open ? "open" : "closed"}
      >
        <Menu links={portfolio.links} />
      </motion.nav>
    </motion.aside>
  );
}
