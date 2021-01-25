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
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Staatliches&display=swap"
          rel="stylesheet"
        />
        <script
          src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
          // async
          // defer
        ></script>
      </Head>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </>
  );
};

export default App;

// Next.js uses the App component to initialize pages
