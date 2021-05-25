// Next.js uses the App component to initialize pages
import React, { useEffect } from "react";
import Head from "next/head";
import { AppProps } from "next/app";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import { AuthProvider } from "../context/AuthContext";
//To prevent TypeScript errors on the css prop on arbitrary elements
// import {} from "styled-components/cssprop";
// import * as _ from "styled-components/cssprop";
// The {} from is important to tell TypeScript it's OK to remove the import from the code --
// we just want the types. If that import remains you'll get an error.
import "antd/dist/antd.css";
import "../styles/main.scss";
import { isIE } from "../utils/isIE";

const queryClient = new QueryClient();

// GLOBAL AUGUMENTATION
declare global {
  interface Document {
    documentMode?: any;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  const router = useRouter();
  useEffect(() => {
    if (isIE) {
      router.push("/browser-not-supported");
    }
  }, []);
  return (
    <>
      <Head>
        <title>NEXT</title>
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <link
          href="https://fonts.googleapis.com/css2?family=Anton&family=Staatliches&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Spicy+Rice&display=swap"
          rel="stylesheet"
        ></link>
        <script
          src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
          defer
        ></script>
      </Head>
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
