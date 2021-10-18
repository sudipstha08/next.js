import { useRouter } from "next/router";
import { GetStaticProps, GetStaticPaths } from "next";

// import path from 'path'
// const fs = require('fs')

export const getStaticProps: GetStaticProps = async () => {
  // const txt = fs.readFileSync(
  //   path.join(process.cwd(), 'public/robots.txt'),
  //   'utf8',
  // )
  return {
    props: {
      reValidate: 10,
      myFavNum: Math.random(),
    },
  };
};

// GET STATIC PROPS RUNS AT BUILD TIME. IT DOES NOT RUN AT RUNTIME
export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [{ params: { name: "video1" } }, { params: { name: "video2" } }],
    // fallback: false, // defines only the path array is permissible
    fallback: true,
  };
};

// EXECUTION BOTH ON SERVER & CLIENT
export default function Videos(props: any) {
  const router = useRouter();

  if (router.isFallback) {
    return <h1>Loading</h1>;
  }
  return <h1>Hello {props.myFavNUm} </h1>;
}
