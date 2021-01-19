import Head from "next/head";
import { AppProps } from "next/app";
import { Header, Footer } from "../components";
import "antd/dist/antd.css";
import "../styles/main.scss";

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <>
      <Head>
        <title>NEXT</title>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
      );
    </>
  );
};

export default App;

// Next.js uses the App component to initialize pages
