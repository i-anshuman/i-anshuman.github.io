import styles from "@/styles/components/Loader.module.css";
import { AnimatePresence, motion, Variants } from "framer-motion";

type LoaderProps = {
  show: boolean;
};

const outline: Variants = {
  hidden: {
    opacity: 0,
    pathLength: 0,
  },
  visible: {
    opacity: 1,
    pathLength: 1,
    transition: {
      default: { duration: 2, ease: "easeInOut" },
    },
  },
};

const initial: Variants = {
  hidden: {
    opacity: 0,
    transform: "translate(26%, 100%) scale(0)",
  },
  visible: (delay: number) => ({
    opacity: 1,
    transform: "translate(26%, 30%) scale(1)",
    transition: {
      default: { duration: 1, ease: "easeInOut", delay },
    },
  }),
};

export default function Loader({show}: LoaderProps): JSX.Element {

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          className={styles.loader}
          exit={{ opacity: 0 }}
        >
          <motion.svg
            viewBox="0 0 102 98"
            xmlns="http://www.w3.org/2000/svg"
            className={styles.icon}
          >
            <motion.path
              fillRule="nonzero"
              clipRule="evenodd"
              d="M55.6742 3.82951L96.1995 33.0052C99.0291 35.0423 100.213 38.6773 99.1271 41.9903L83.6851 89.0841C82.6077 92.3698 79.5412 94.5914 76.0833 94.5914H25.9167C22.4588 94.5914 19.3923 92.3698 18.3149 89.0841L2.87285 41.9903C1.78652 38.6773 2.97091 35.0423 5.80045 33.0052L46.3258 3.82951C49.1178 1.81946 52.8822 1.81946 55.6742 3.82951Z"
              variants={outline}
              initial="hidden"
              animate="visible"
            />
            <motion.path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M15 51.3C12.24 51.3 9.74 50.62 7.5 49.26C5.3 47.9 3.56 45.94 2.28 43.38C1 40.78 0.36 37.72 0.36 34.2C0.36 28.12 1.66 22.5 4.26 17.34C6.86 12.14 10.7 7.98 15.78 4.86C20.86 1.7 26.96 0.119997 34.08 0.119997C35.92 0.119997 37.88 0.259998 39.96 0.539999C42.08 0.819998 44 1.24 45.72 1.8C46.84 2.12 47.4 2.92 47.4 4.2C47.4 5.24 47 6.22 46.2 7.14C45.44 8.06 44.54 8.52 43.5 8.52C43.18 8.52 42.94 8.5 42.78 8.46C40.7 7.98 38.92 7.64 37.44 7.44C35.96 7.2 34.4 7.08 32.76 7.08C27.68 7.08 23.36 8.32 19.8 10.8C16.24 13.24 13.58 16.48 11.82 20.52C10.06 24.56 9.18 28.92 9.18 33.6C9.18 37 9.84 39.64 11.16 41.52C12.52 43.36 14.28 44.28 16.44 44.28C18.88 44.28 21.02 43.28 22.86 41.28C24.7 39.28 26.38 36.04 27.9 31.56C29.42 27.08 30.92 21 32.4 13.32C32.64 12.2 33.12 11.44 33.84 11.04C34.56 10.64 35.52 10.44 36.72 10.44C39.56 10.44 40.98 11.36 40.98 13.2C40.98 13.52 40.92 13.92 40.8 14.4C39.76 18.28 38.8 22.58 37.92 27.3C37.08 31.98 36.66 35.54 36.66 37.98C36.66 40.14 36.98 41.72 37.62 42.72C38.26 43.68 39.24 44.16 40.56 44.16C41.84 44.16 43.06 43.74 44.22 42.9C45.38 42.02 46.84 40.54 48.6 38.46C49.08 37.9 49.62 37.62 50.22 37.62C50.74 37.62 51.14 37.86 51.42 38.34C51.74 38.82 51.9 39.48 51.9 40.32C51.9 41.88 51.52 43.12 50.76 44.04C48.8 46.4 46.88 48.2 45 49.44C43.12 50.68 40.82 51.3 38.1 51.3C35.3 51.3 33.04 50.5 31.32 48.9C29.6 47.26 28.52 44.96 28.08 42C25.12 48.2 20.76 51.3 15 51.3Z"
              variants={initial}
              initial="hidden"
              animate="visible"
              className={styles.initial}
              custom={2}
            />
          </motion.svg>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
