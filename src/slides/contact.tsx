import { useState } from "react";
import { Variants, motion } from "framer-motion";
import { MessageButton } from "@/components/button";
import { MessageForm } from "@/components/message-box";
import SlideTitle from "@/components/slide-title";
import portfolio from "@/portfolio.json";
import contact from "@/styles/slides/Contact.module.css";
import slides from "@/styles/slides/Slides.module.css";

const fadeIn: Variants = {
  show: { opacity: 1, scale: 1.0, display: "block", transition: { duration: 0.5 } },
  hide: { opacity: 0, scale: 0.9, display: "none", transition: { duration: 0.5 } }
};

export default function Contact({ id }: { id: string }) {
  const [openMessageBox, handleMessageBox] = useState<boolean>(false);

  return (
    <section className={slides.slide} id={id}>
      <SlideTitle title="Get In Touch" direction="center" />
      <div className={contact.main}>
        <div className={contact.message}>
          <p>{portfolio.message}</p>
        </div>
        <motion.div
          className={contact.messagebox}
          layout
        >
          <motion.div
            variants={fadeIn}
            initial="hide"
            animate={!openMessageBox ? "show" : "hide"}
          >
            <MessageButton
              label="Send me a message"
              onClick={() => handleMessageBox(!openMessageBox)}
              data-open={openMessageBox}
            >
              <span>Send me a message!</span>
            </MessageButton>
          </motion.div>
          <motion.div
            variants={fadeIn}
            initial="hide"
            animate={openMessageBox ? "show" : "hide"}
          >
            <MessageForm 
              onClose={() => handleMessageBox(!openMessageBox)}
            />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
