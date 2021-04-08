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
// import BrowserNotSupported from "../pages/browser-not-supported";
import "antd/dist/antd.css";
import "../styles/main.scss";

// const path = require("path");
// Initialize query client outside a component to prevent reinitialization
// everytime the component renders
const queryClient = new QueryClient();

// GLOBAL AUGUMENTATION
declare global {
  interface Document {
    documentMode?: any;
  }
}

const App = ({ Component, pageProps }: AppProps) => {
  // const [isIE, setIsIE] = useState(false);
  // console.log("path", path.resolve(__dirname, "/.env.example"));
  const router = useRouter();
  useEffect(() => {
    // CHECK IF THE BROWSER IS INTERNET EXPLORER

    // Please note this approach is unreliable since users can modify
    // the browser user agent string.
    // const browser = navigator.userAgent;
    // const isIE = /MSIE|Trident/.test(browser);
    // Instead, you should use document.documentMode property which is IE specific
    const isIE = !!window.document.documentMode;
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
          // async
          // defer
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

// Next.js uses the App component to initialize pages
