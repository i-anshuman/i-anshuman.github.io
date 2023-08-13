import { useRef } from "react";
import { useInView } from "framer-motion";
import AnimatedText from "@/components/animated-text";
import slides from "@/styles/slides/Slides.module.css";
import intro from "@/styles/slides/Introduction.module.css";
import portfolio from "@/portfolio.json";
import { SlideProps } from "@/types";

export default function Introduction({ id }: SlideProps) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  return (
    <section className={slides.slide} id={id} ref={ref}>
      <AnimatedText as="p" className={intro.greeting}>
        Hello, I&apos;m
      </AnimatedText>
      <AnimatedText as="h2" className={intro.fullname}>
        {portfolio.fullname}
      </AnimatedText>
      <AnimatedText
        as="h3"
        className={`${intro.tagline} ${intro.cursor}`}
      >
        {portfolio.tagline}
      </AnimatedText>
    </section>
  );
}
