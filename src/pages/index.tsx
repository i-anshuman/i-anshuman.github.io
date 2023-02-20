import Head from "next/head";
import { useEffect, useState } from "react";
import { Inter } from "@next/font/google";
import { Loader } from "@/components/loader";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {

  const [isLoading, setIsLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 3600);
  }, []);

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
        <Loader show={isLoading} />
        <h1>Portfolio will go here...</h1>
      </main>
    </>
  );
}
