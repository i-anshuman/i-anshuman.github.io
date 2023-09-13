import portfolio from "@/portfolio.json";
import { SocialButton } from "@/components/button";
import styles from "@/styles/components/Footer.module.css";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <footer className={styles.footer}>
      <div className={styles.social}>
        {
          portfolio.social
            .filter(({ hidden }) => !hidden)
            .map(({title, url, username, icon}) => (
              <SocialButton
                key={title}
                url={url}
                username={username}
                icon={icon}
                aria-label={title}
              />
          ))
        }
      </div>
      <p className={styles.note}>
        Developed with <i className="fa-solid fa-heart"></i> by {portfolio.fullname}
      </p>
    </footer>
  );
}
