import React, { useState, useEffect } from "react";
import { useRouter } from "next/router";
import { NavBar, Planets, People } from "../../components";
import { Wrapper } from "./style";

const StarWarsPage: React.FC = () => {
  const [page, setPage] = useState("planets" as any);
  const router = useRouter();
  useEffect(() => {
    setPage(router?.query?.currentPage);
  }, [router?.query]);
  return (
    <Wrapper>
      <h1>Star Wars Info</h1>
      <NavBar />
      <section>{page === "planets" ? <Planets /> : <People />}</section>
    </Wrapper>
  );
};

export default StarWarsPage;
