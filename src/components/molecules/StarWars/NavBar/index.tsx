import React from "react";
import { useRouter } from "next/router";
import { Button } from "../../../atom";
import { MainContainer } from "./style";

const NavBar: React.FC = () => {
  const router = useRouter();
  return (
    <MainContainer>
      <Button onClick={() => router.push("/star-wars?currentPage=planets")}>
        Planets
      </Button>
      <Button onClick={() => router.push("/star-wars?currentPage=people")}>
        People
      </Button>
    </MainContainer>
  );
};

export { NavBar };
