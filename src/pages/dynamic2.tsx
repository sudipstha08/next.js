import { GetServerSideProps } from "next";

// CALLED ALWAYS ON EVERY PAGE REQUEST. EVEN ON PRODUCTION
// NO CACHING BENIFIT
// TRY TO AVOID IT
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {
      myFavNum: Math.random(),
    },
  };
};

export default function Dynamic2(props: any) {
  return <h1>Dynamic number - {props.myFavNum}</h1>;
}
