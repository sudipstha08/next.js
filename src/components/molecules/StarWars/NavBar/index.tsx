import React from "react";
import { Button } from "../../../atom";
import { MainContainer } from "./style";

interface IProps {
  setPage?: any;
  page?: string;
}

const NavBar = ({ setPage, page }: IProps) => {
  return (
    <MainContainer>
      <Button
        onClick={() => setPage("planets")}
        className={page === "planets" && "nav--active"}
      >
        Planets
      </Button>
      <Button
        onClick={() => setPage("people")}
        className={page === "people" && "nav--active"}
      >
        People
      </Button>
    </MainContainer>
  );
};

export { NavBar };
