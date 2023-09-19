import Head from "next/head";
import dynamic from "next/dynamic";
import { useContext } from "react";
import { Inter } from "@next/font/google";
import { Loader } from "@/components/loader";
import { SidebarContext } from "@/context";
import portfolio from "@/portfolio.json";
import styles from "@/styles/Home.module.css";

const inter = Inter({ subsets: ["latin"] });

const Portfolio = dynamic(() => import("@/app").then(mod => mod.default), {
  loading: () => <Loader show />,
  ssr: true
});

export default function Home() {
  const {state: { open }} = useContext(SidebarContext);

  return (
    <>
      <Head>
        <title>{portfolio.fullname}</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <div className={styles.container} data-open={open}>
        <Portfolio  />
      </div>
    </>
  );
}
