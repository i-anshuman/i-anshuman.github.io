import portfolio from "@/portfolio.json";
import { SocialButton } from "@/components/button";
import { Sidebar } from "@/components/sidebar";
import { Alignment } from "@/types";
import styles from "@/styles/components/Footer.module.css";

type FooterProps = {};

export default function Footer(props: FooterProps) {
  return (
    <>
      <footer className={styles.footer}>
        <div className={styles.container}>
          <ul className={styles.social}>
            {
              portfolio.social
                .filter(({ hidden }) => !hidden)
                .map(({title, url, username, icon}) => (
                  <li key={title}>
                    <SocialButton
                      url={url}
                      username={username}
                      icon={icon}
                      aria-label={title}
                    />
                  </li>
              ))
            }
          </ul>
        </div>
        <p className={styles.note}>
          Developed with <i className="fa-solid fa-heart"></i> by {portfolio.firstname}
        </p>
      </footer>
      <div className={styles.sidebar}>
        <Sidebar alignment={Alignment.LEFT}>
          <ul className={`${styles.social} ${styles.line}`}>
            {
              portfolio.social
                .filter(({ hidden }) => !hidden)
                .map(({title, url, username, icon}) => (
                  <li key={title}>
                    <SocialButton
                      url={url}
                      username={username}
                      icon={icon}
                      aria-label={title}
                    />
                  </li>
              ))
            }
          </ul>
        </Sidebar>
        <Sidebar alignment={Alignment.RIGHT}>
          <div className={`${styles.email} ${styles.line}`}>
            <a href={`mailto:${portfolio.contact.email}`} aria-label="Send me a mail">
              {portfolio.contact.email}
            </a>
          </div>
        </Sidebar>
      </div>
    </>
  );
}
