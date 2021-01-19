import { GetStaticProps, GetServerSideProps } from "next";

// CALLED ALWAYS ON EVERY PAGE REQUEST. EVEN ON PRODUCTION
// NO CACHING BENIFIT
// TRY TO AVOID IT
export const getServerSideProps: GetServerSideProps = async (context) => {
  return {
    props: {
      myFavNum: Math.random(),
    },
  };
};

export default function Dynamic2(props) {
  return <h1>Dynamic number - {props.myFavNum}</h1>;
}
