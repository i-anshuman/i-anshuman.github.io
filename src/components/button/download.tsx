import { DownloadResumeButtonProps } from "@/types";
import styles from "@/styles/components/ResumeButton.module.css";

export default function DownloadResumeButton({
  label,
  href,
  title,
}: DownloadResumeButtonProps) {
  return (
    <a
      href={href}
      role="button"
      target="_blank"
      rel="noopener noreferrer"
      aria-label={label}
      className={styles.button}
    >
      {title}
    </a>
  );
}
