import Link from "next/link"
import Layout from "../../components/Layout"
import styles from "./styles.module.scss"

const AboutPage = () => (
  <Layout title="About | Next.js + TypeScript Example">
    <h1>About</h1>
    <p>This is the about pagesss</p>
    <p>
      <Link href="/">
        <a className={styles.red}>Go home</a>
      </Link>
    </p>
  </Layout>
)

export default AboutPage
