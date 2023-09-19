import SlideTitle from "@/components/slide-title";
import slides from "@/styles/slides/Slides.module.css";
import { SlideProps } from "@/types";

export default function Works({ id }: SlideProps) {
  return (
    <section className={slides.slide} id={id}>
      <SlideTitle title="Things I&apos;ve Built" />
    </section>
  );
}
