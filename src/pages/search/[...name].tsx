import { useEffect } from "react";
import styled from "styled-components";
import Link from "next/link";

const Button = styled(Link).attrs({
  width: (props: any) => props.width || "100%",
})`
  display: block;
  width: ${(props) => props.width};
  text-align: center;
  color: #fff;
  background-color: ${(props) => (props.gray ? "#bababa" : "#ea352d")};
`;

export default function Search() {
  useEffect(() => {
    const checkUserData = () => {
      const test = localStorage.getItem("user");
    };
    window.addEventListener("storage", checkUserData);

    return () => {
      window.removeEventListener("storage", checkUserData);
    };
  }, []);
  return (
    <Button gray to="path/to/page">
      Test Console
      {test}
    </Button>
  );
}

// /search/1/2/3/4/5/6
// CATCH ALL ROUTES ^

// OPTIONAL CATCH ALL

// Use [[...name]] - for /search to work
// QUERY WILL be empty
