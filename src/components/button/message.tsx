import { motion } from "framer-motion";
import { MessageButtonProps } from "@/types";
import styles from "@/styles/components/MessageButton.module.css"; 

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
