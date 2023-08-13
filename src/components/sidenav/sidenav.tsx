import { motion, Variants } from "framer-motion";
import { SidenavProps } from "@/types";
import Menu from "./menu";
import portfolio from "@/portfolio.json";
import styles from "@/styles/components/Sidenav.module.css";

const appear: Variants = {
  open: {
    opacity: 1,
    clipPath: `circle(1200px at calc(100% - 70px) 50px)`,
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

const fadeIn: Variants = {
  open: {
    x: 0,
    opacity: 1,
    transition: {
      duration: 0.5,
      delay: 0.6
    },
  },
  closed: {
    x: -100,
    opacity: 0,
    transition: {
      duration: 0.5,
      staggerDirection: -1,
    },
  },
};

export default function Sidenav({ open, children }: SidenavProps) {
  return (
    <motion.aside
      className={styles.sidenav}
      tabIndex={open ? 1 : -1}
      variants={appear}
      initial={false}
      animate={open ? "open" : "closed"}
    >
      <nav className={styles.nav}>
        <Menu links={portfolio.links} />
        <motion.div
          className={styles.resume}
          variants={fadeIn}
          initial={false}
          animate={open ? "open" : "closed"}
        >
          {children}
        </motion.div>
      </nav>
    </motion.aside>
  );
}
