import styles from '@/styles/components/SlideTitle.module.css';
import { SlideTitleProps } from '@/types';

export default function SlideTitle({ title, direction }: SlideTitleProps) {
  return (
    <h2 className={styles.slide_title} data-direction={direction}>
      {title}
    </h2>
  );
}
