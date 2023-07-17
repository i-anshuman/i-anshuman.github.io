import { MouseEventHandler, useState } from "react";
import { Variants, motion } from "framer-motion";
import InputField from "../input-field";
import structure from "./structure";
import { MessageStructure as Message, MessageFormProps } from "@/types";
import styles from "@/styles/components/MessageForm.module.css";

const fadeIn: Variants = {
  show: { opacity: 1, x: 0, transition: { duration: 0.5 } },
  hide: { opacity: 0, x: -20, transition: { duration: 0.5 } },
};

export default function MessageForm({ onClose }: MessageFormProps) {
  const [index, setIndex] = useState<number>(0);
  const [shake, setShake] = useState<boolean>(false);
  const [error, setError] = useState<string>("");
  const [message, setMessage] = useState<Message>({
    name: "",
    email: "",
    message: ""
  });

  const handleError = () => {
    if (error || !message[structure[index].name]) {
      setShake(true);
      setTimeout(() => {
        setShake(false);
      }, 500);
      return true;
    }
    return false;
  };

  const handlePrevious: MouseEventHandler<HTMLButtonElement> = (event) => {
    if (index > 0) {
      setError("");
      setIndex(index - 1);
    };
  };

  const handleNext: MouseEventHandler<HTMLButtonElement> = (event) => {
    if(handleError()) return;
    if (index < structure.length - 1) {
      setIndex(index + 1);
    };
  };

  const handleSend: MouseEventHandler<HTMLButtonElement> = (event) => {
    if(handleError()) return;
    alert("Sending message");
  };

  return (
    <motion.div
      className={styles.messageform}
    >
      <div className={styles.controls} data-position="top">
        <button
          type="button"
          aria-label="Close message box"
          className={styles.close}
          onClick={onClose}
        >
          <i className="fa-solid fa-xmark fa-xl"></i>
        </button>
        <motion.button
          variants={fadeIn}
          initial="hide"
          animate={(index > 0) ? "show" : "hide"}
          type="button"
          aria-label="Previous"
          onClick={handlePrevious}
        >
          <i className="fa-solid fa-chevron-left fa-xl"></i>
        </motion.button>
      </div>
      <div className={styles.form}>
        <InputField
          id={structure[index].id}
          name={structure[index].name}
          label={structure[index].label}
          type={structure[index]?.type}
          value={message[structure[index].id]}
          onChange={(event) => {
            setMessage({
              ...message,
              [structure[index].name]: event.target.value
            });
          }}
          onBlur={(event) => {
            setError(structure[index].validate(event.target.value));
          }}
          error={error}
          shake={shake}
        />
      </div>
      <div className={styles.controls} data-position="bottom">
        <button
          type="button"
          aria-label={(index === structure.length - 1) ? "Send message" : "Next"}
          className={styles.next}
          onClick={(index === structure.length - 1) ? handleSend : handleNext}
        >
          {
            (index === structure.length - 1)
            ? (
              <>
                <span>Send</span>
                <i className="fa-solid fa-paper-plane fa-xl"></i>
              </>
            )
            : (
              <>
                <span>Next</span>
                <i className="fa-solid fa-chevron-right fa-xl"></i>
              </>
            )
          }
        </button>
      </div>
    </motion.div>
  );
};
