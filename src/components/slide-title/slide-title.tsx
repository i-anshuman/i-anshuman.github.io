import styles from '@/styles/components/SlideTitle.module.css';

type SlideTitleProps = {
  title: string,
  direction?: 'left' | 'center' | 'right';
};

export default function SlideTitle({ title, direction }: SlideTitleProps) {
  return (
    <h2 className={styles.slide_title} data-direction={direction}>
      {title}
    </h2>
  );
}
