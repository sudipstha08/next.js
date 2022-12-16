import Link from "next/link";
import Layout from "../../components/molecules/Layout/Layout";
import styles from "./styles.module.scss";

const AboutMe = () => (
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

export default AboutMe;
