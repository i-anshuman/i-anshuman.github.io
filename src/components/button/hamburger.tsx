import { MenuButtonProps } from "@/types";
import styles from "@/styles/components/Hamburger.module.css";

export default function Hamburger({ label, open, onClick }: MenuButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`${styles.button} ${open ? styles.button__open : ''}`}
      onClick={onClick}
    >
      <div className={styles.hambox}>
        <span className={styles.hamburger}></span>
      </div>
    </button>
  );
}
