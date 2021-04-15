import React from "react"
import Link from "next/link";
import Layout from "../../components/Layout";
import styles from "./styles.module.scss";

const AboutMe = () => {
  React.useEffect(() => {
 //If you know from external means that an expression is not null or undefined, 
 // you can use the non-null assertion operator ! to coerce away those types:
    document.documentElement.scrollTop = 0
    document.scrollingElement!.scrollTop = 0
  }, [])

  return(
    <Layout title="About | Next.js + TypeScript Example">
      <h1>About ME</h1>
      <p>This is the about me page</p>
      <p>
        <Link href="/">
          <a className={styles.red}>Go home</a>
        </Link>
        <Link href="/about">
          <a className={styles.red}>Go to about me page</a>
        </Link>
      </p>
    </Layout>
  );
}

export default AboutMe;
