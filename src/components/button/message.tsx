import { MouseEventHandler } from "react";
import { motion } from "framer-motion";
import styles from "@/styles/components/MessageButton.module.css"; 

type MessageButtonProps = {
  label: string;
  children: JSX.Element;
  onClick: MouseEventHandler<HTMLButtonElement>;
};

export default function MessageButton({ label, children, onClick, ...props }: MessageButtonProps) {
  return (
    <motion.button
      type="button"
      aria-label={label}
      onClick={onClick}
      className={styles.button}
      {...props}
    >
      { children }
    </motion.button>
  );
};
