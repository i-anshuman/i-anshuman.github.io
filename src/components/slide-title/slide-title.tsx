import styles from '@/styles/components/SlideTitle.module.css';
import { Component } from 'react';

type SlideTitleProps = {
  title: string
};

export default function SlideTitle({title}: SlideTitleProps) {
  return (
    <h2 className={styles.slide_title}>
      {title}
    </h2>
  );
}
