import React, { useState } from "react";
import { ReactQueryDevtools } from "react-query/devtools";
import { NavBar, Planets, People } from "../../components";
import { Wrapper } from "./style";

const StarWarsPage: React.FC = () => {
  const [page, setPage] = useState("planets" as any);

  return (
    <Wrapper>
      <h1>STAR WARS INFO</h1>
      <NavBar setPage={setPage} page={page} />
      <section>{page === "planets" ? <Planets /> : <People />}</section>
      <ReactQueryDevtools initialIsOpen={false} />
    </Wrapper>
  );
};

export default StarWarsPage;
