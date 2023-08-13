import SlideTitle from "@/components/slide-title";
import slides from "@/styles/slides/Slides.module.css";
import jobs from "@/styles/slides/Experience.module.css";
import { Tab } from "@/components/tabs";
import portfolio from "@/portfolio.json";
import { SlideProps } from "@/types";

export default function Experience({ id }: SlideProps) {
  return (
    <section className={slides.slide} id={id}>
      <SlideTitle title="Where I&#39;ve Worked" />
      <div className={jobs.main}>
        <Tab tabs={portfolio.jobs} />
      </div>
    </section>
  );
}
