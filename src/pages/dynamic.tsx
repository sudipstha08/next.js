import { GetStaticProps } from "next";
import path from "path";
const fs = require("fs");

// executes on server before default func
export const getStaticProps: GetStaticProps = async () => {
  const txt = fs.readFileSync(
    path.join(process.cwd(), "public/robots.txt"),
    "utf8",
  );
  return {
    props: {
      reValidate: 10,
      myFavNum: txt,
    },
  };
};

// EXECUTION BOTH ON SERVER & CLIENT
export default function Dynamic(props: any) {
  return <h1>Dynamic Number - {props.myFavNum}</h1>;
}
