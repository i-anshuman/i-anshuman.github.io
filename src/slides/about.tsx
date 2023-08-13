import SlideTitle from "@/components/slide-title";
import slides from "@/styles/slides/Slides.module.css";
import about from "@/styles/slides/About.module.css";
import portfolio from "@/portfolio.json";
import { SlideProps } from "@/types";


export default function About({ id }: SlideProps) {
  return (
    <section className={slides.slide} id={id}>
      <SlideTitle title="About Me" />
      <div className={about.main}>
        <div className={about.content}>
          <div>
            { portfolio.about.map((line, idx) => <p key={idx}>{line}</p>) }
          </div>
          <ul className={about.skills}>
            { portfolio.skills.map((skill, idx) => <li key={idx}>{skill}</li>) }
          </ul>
        </div>
        <div className={about.picture}></div>
      </div>
    </section>
  );
}
