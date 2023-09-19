import type { AppProps } from "next/app";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { Provider } from "@/components/provider";
import "@/styles/globals.css";

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Provider>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </Provider>
  );
}
