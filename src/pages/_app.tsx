// Next.js uses the App component to initialize pages
import React, { useEffect } from "react";
import Head from "next/head";
import { QueryClient, QueryClientProvider } from "react-query";
import { useRouter } from "next/router";
import * as Sentry from "@sentry/browser";
import { Integrations } from "@sentry/tracing";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { AuthProvider } from "../store/AuthContext";
import { isIE } from "../utils/isIE";
import "mapbox-gl/dist/mapbox-gl.css";
import { GlobalStyles } from "../styles/global-styles";
/**
 *To prevent TypeScript errors on the css prop on arbitrary elements
 *
 */
// import {} from "styled-components/cssprop";
// import * as _ from "styled-components/cssprop";
// The {} from is important to tell TypeScript it's OK to remove the import from the code --
// we just want the types. If that import remains you'll get an error.
import "../styles/main.scss";

const queryClient = new QueryClient({ defaultOptions: {} });

// GLOBAL AUGUMENTATION
declare global {
  interface Document {
    documentMode?: any;
  }
}

if (process.env.NODE_ENV === "production") {
  Sentry.init({
    dsn: process.env.NEXT_PUBLIC_SENTRY_DSN,
    // Alternatively, use `process.env.npm_package_version` for a dynamic release version
    // if your build tool supports it.
    release: "next.js@1.0.1",
    integrations: [new Integrations.BrowserTracing()],
    environment: `next-js-${process.env.NODE_ENV}`,
    // Set tracesSampleRate to 1.0 to capture 100%
    // of transactions for performance monitoring.
    // We recommend adjusting this value in production
    tracesSampleRate: 1.0,
  });

  Sentry.configureScope(function (scope) {
    scope.setLevel(Sentry.Severity.Warning);
  });
}

const App = ({ Component, pageProps }) => {
  const router = useRouter();
  useEffect(() => {
    if (isIE()) {
      router.push("/browser-not-supported");
    }
  }, []);

  useEffect(() => {
    router.events.on("routeChangeStart", () => {
      NProgress.start();
    });
    router.events.on("routeChangeComplete", () => NProgress.done());
    router.events.on("routeChangeError", () => NProgress.done());
  }, []);

  return (
    <>
      <Head>
        <title>NEXT | HOME</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <meta name="description" content="Next js research and documentation" />
        <script
          src="https://www.line-website.com/social-plugins/js/thirdparty/loader.min.js"
          defer
        />
        {/* <script
          async
          custom-element="amp-fx-collection"
          src="https://cdn.ampproject.org/v0/amp-fx-collection-0.1.js"
        ></script> */}
      </Head>
      <GlobalStyles />
      <QueryClientProvider client={queryClient}>
        <AuthProvider>
          <Component {...pageProps} />
        </AuthProvider>
      </QueryClientProvider>
    </>
  );
};

export default App;
