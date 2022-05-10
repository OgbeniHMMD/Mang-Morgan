import "windi.css";
import "../styles/globals.css";
import type { AppProps } from "next/app";
import Head from "next/head";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <div className="font-body scroll-smooth">
      <Head>
        <title>Mang Morgan</title>
      </Head>

      <Component {...pageProps} />
    </div>
  );
}

export default MyApp;
