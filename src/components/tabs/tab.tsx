import { useState } from "react";
import TabList from "./tablist";
import TabPanel from "./tabpanel";
import { AnimatePresence } from "framer-motion";
import { Job } from "@/types";
import styles from "@/styles/components/Tabs.module.css";

type TabProps = {
  tabs: Job[];
};

export default function Tab({ tabs }: TabProps) {
  const [tabIndex, setTabIndex] = useState<number>(0);
  const companies = tabs.map((tab) => tab.company.title);
  return (
    <>
      <TabList
        tabs={companies}
        tabIndex={tabIndex}
        onClick={(idx) => setTabIndex(idx)}
      />
      <div className={styles.content}>
        <AnimatePresence mode="wait">
          <TabPanel content={tabs[tabIndex]} />
        </AnimatePresence>
      </div>
    </>
  );
}
