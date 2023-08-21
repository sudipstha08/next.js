import React from "react";
import Link from "next/link";
import Head from "next/head";
import { Header } from "../Header";

type Props = {
  children?: React.ReactNode;
  title?: string;
};

const Layout = ({ children, title = "This is the default title" }: Props) => (
  <div>
    <Head>
      <title>{title}</title>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    </Head>
    <Header />
    <div style={{ marginTop: 100, padding: 50 }}>
      <nav>
        <Link href="/">Home</Link> | <Link href="/about">About</Link> |{" "}
        <Link href="/users">Users List</Link> |{" "}
        <Link href="/api/users">Users API</Link>
      </nav>
    </div>
    {children}
    <footer style={{ position: "fixed", bottom: 0, width: "100%" }}>
      <hr />
      <span>I&rsquo;m here to stay (Footer)</span>
    </footer>
  </div>
);

export { Layout };
