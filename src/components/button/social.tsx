import { SocialButtonProps } from "@/types";
import styles from "@/styles/components/SocialButton.module.css";

export default function SocialButton({url, username, icon, ...props}: SocialButtonProps) {
  const Component = "a";
  return (
    <Component
      href={url}
      target="_blank"
      rel="noreferrer"
      className={styles.social}
      {...props}
    >
      <i className={icon}></i>
      <span>{username}</span>
    </Component>
  );
};
