import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  *, 
  *::before, 
  *::after  {
    box-sizing: border-box;
    padding: 0;
    margin: 0;
  }

  html {
    scroll-behavior: smooth;
  }

  button {
    cursor: pointer;
  }

  li {
    list-style-type: none;
  }

  :root {
    --clr-primary-200: #F3EED9;
    --clr-neutral-100: #fff;
  }
`;
