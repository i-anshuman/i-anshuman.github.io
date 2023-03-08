import { SidebarContext } from "@/context";
import useOrientation from "@/hooks/useOrientation";
import styles from "@/styles/app/Portfolio.module.css";
import { useContext, useEffect } from "react";

type PortfolioProps = {};

export default function Portfolio(props: PortfolioProps) {
  const orientation = useOrientation();
  const { hide } = useContext(SidebarContext);

  useEffect(() => {
    hide();
  }, [orientation, hide]);

  return (
    <main className={styles.main}>
      <section>
        <h1 className={styles.h1}>Portfolio will go here</h1>
        <h1 className={styles.h1}>Portfolio will go here</h1>
        <h1 className={styles.h1}>Portfolio will go here</h1>
        <h1 className={styles.h1}>Portfolio will go here</h1>
        <h1 className={styles.h1}>Portfolio will go here</h1>
      </section>
    </main>
  );
}
