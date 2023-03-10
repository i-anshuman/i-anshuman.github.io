import styles from "@/styles/components/ResumeButton.module.css";

type DownloadResumeButtonProps = {
  label: string;
  href: string;
  title: string;
};

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
