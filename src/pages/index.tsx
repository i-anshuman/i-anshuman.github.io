import Head from "next/head";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Anshuman Gupta</title>
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, minimum-scale=1.0"
        />
      </Head>
      <main className={styles.main}>
        <h1>Portfolio will go here...</h1>
      </main>
    </>
  );
}
