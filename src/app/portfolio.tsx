import { SidebarContext } from "@/context";
import { useOrientation } from "@/hooks";
import { useContext, useEffect } from "react";
import { Introduction, About, Experience, Contact } from "@/slides";
import styles from "@/styles/app/Portfolio.module.css";

export default function Portfolio(props: {}) {
  const orientation = useOrientation();
  const { hide } = useContext(SidebarContext);

  useEffect(() => {
    hide();
  }, [orientation, hide]);

  return (
    <main className={styles.main}>
      <Introduction id="home" />
      <About id="about" />
      <Experience id="jobs" />
      <Contact id="contact" />
    </main>
  );
}
