import styles from "@/styles/components/Hamburger.module.css";
import { MouseEvent, useState } from "react";

type ButtonProps = {
  label: string;
  open: boolean;
  onClick: (event: MouseEvent) => void;
};

export default function Hamburger({ label, open, onClick }: ButtonProps) {
  return (
    <button
      type="button"
      aria-label={label}
      className={`${styles.button} ${open && styles.button__open}`}
      onClick={onClick}
    >
      <span className={styles.hamburger}></span>
    </button>
  );
}
