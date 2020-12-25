import Link from "next/link"
import Layout from "../components/Layout"
import styles from "../styles/index.module.scss"

const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1 className={styles.text}>Hello Next.js 👋</h1>
    <p className="desp">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eveniet, soluta!</p>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
    {/* <style jsx> */}
    {/* {`
        h1 {
          color: blue;
        }

        a {
          color: red;
        }

        .desp {
          color: white;
          background: #888;
        }
      `} */}
    {/* </style> */}
  </Layout>
)

export default IndexPage
