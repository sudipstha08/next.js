import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }
`;
