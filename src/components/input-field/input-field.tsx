import { Variants, motion } from "framer-motion";
import { InputFieldProps } from "@/types";
import { useEffect, useRef } from "react";
import AnimatedText from "../animated-text";
import styles from "@/styles/components/InputField.module.css";

const fadeIn: Variants = {
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  hide: { opacity: 0, y: 100, transition: { duration: 0.5 } },
};

const flip = (index: number): Variants => ({
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.2, delay: index * 0.05 }},
  exit: { opacity: 0, y: 20, transition: { duration: 0.2, delay: index * 0.05 }}
});

export default function InputField({
  id, name, type, label, placeholder, value, error, shake, onChange, onBlur
}: InputFieldProps) {
  const input = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (input.current) {
      input.current.focus();
    }
  }, [name]);

  return (
    <>
      <div className={styles.field} data-shake={shake}>
        <input
          id={id}
          name={name}
          type={type ?? "text"}
          value={value}
          placeholder={placeholder ?? " "}
          onChange={onChange}
          onBlur={onBlur}
          autoComplete="off"
          autoCorrect="off"
          autoFocus={true}
          className={styles.input}
          ref={input}
        />
        <AnimatedText
          as="label"
          htmlFor={id}
          className={styles.label}
          variants={flip}
        >
          {label}
        </AnimatedText>
      </div>
      <motion.small
        variants={fadeIn}
        initial="hide"
        animate={error ? "show" : "hide"}
        className={styles.error}
        data-shake={shake}
      >
        { error }
      </motion.small>
    </>
  );
};
