import styles from '@/styles/components/Tabs.module.css';
import { getKey } from '@/utils';
import { ReactNode } from 'react';

type TabListProps = {
  tabs: string[];
  tabIndex: number;
  onClick: (idx: number) => void;
};

type TabButtonProps = {
  children: ReactNode;
  controls: string;
  selected: boolean;
  index: number;
  onClick: (idx: number) => void;
};

function TabButton({ children, controls, selected, index, onClick }: TabButtonProps) {
  return (
    <button type='button'
      role="tab"
      aria-controls={controls}
      aria-selected={selected}
      tabIndex={selected ? 0 : -1}
      className={styles.tab}
      onClick={() => onClick(index)}
    >
      {children}
    </button>
  );
}

export default function TabList({ tabs, tabIndex, onClick }: TabListProps) {
  return (
    <div role="tablist" aria-label="Job tabs" className={styles.tablist}>
      {
        tabs.map((tab, idx) => (
          <TabButton selected={idx === tabIndex}
            controls={tab}
            key={getKey(idx)}
            index={idx}
            onClick={onClick}
          >
            <span>{ tab }</span>
          </TabButton>
        ))
      }
      <span className={styles.highlight} tabIndex={tabIndex} />
    </div>
  );
}
