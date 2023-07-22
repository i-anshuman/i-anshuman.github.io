import { motion } from "framer-motion";
import { Job } from "@/types";
import { Link } from "../button";
import { dateRangeToPeriod, getKey } from "@/utils";
import styles from "@/styles/components/Tabs.module.css";

type TabPanelProps = {
  content: Job;
};

export default function TabPanel({ content }: TabPanelProps) {
  const period = dateRangeToPeriod(content.duration.from, content.duration.to);
  return (
    <motion.div role="tabpanel"
      className={styles.panel}
      id={content.company.title}
      key={content ? content.company.title : "empty"}
      initial={{ y: 10, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <h3 className={styles.title}>
        <span>{content.role}</span>
        <span className={styles.link}>
          &nbsp;&nbsp;@&nbsp;&nbsp;
          <Link as="a"
            target="_blank"
            rel="noreferrer"
            href={content.company.url}
          >
            {content.company.title}
          </Link>
        </span>
      </h3>
      <p className={styles.duration}>
        {content.duration.from} <b>-</b> {content.duration.to} <span>( {period} )</span></p>
      <ul className={styles.description}>
        { content.description.map((desc, idx) => <li key={getKey(idx)}>{desc}</li>) }
      </ul>
    </motion.div>
  );
}
