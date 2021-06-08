import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body, html {
    padding: 0;
    margin: 0;
  }

  button {
    cursor: pointer;
  }
`;
