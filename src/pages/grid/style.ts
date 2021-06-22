import styled from "styled-components";

const colors = {
  blue: "#007bff",
  green: "#28a745",
  red: "#dc3545",
  lightblue: "#17a2b8",
  dark: "#343a40",
};

const MainContainer = styled.main`
  padding: 2em 4em;
`;

const Container1 = styled.section`
  display: grid;
  // grid-template-rows / grid-template-columns
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-gap: 0.5rem;

  & > * {
    display: grid;
    place-items: center;
    padding: 1em 2em;
    color: #fff;
    font-size: 1.5rem;
  }
  & > :nth-child(odd) {
    background: blue;
  }
  & > :nth-child(even) {
    background: green;
  }
`;

const Container2 = styled.section`
  margin-top: 50px;
  & > * {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    display: grid;
    place-items: center;
    text-transform: uppercase;
  }

  display: grid;
  grid-gap: 0.375rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px 200px 60px;
  & .header {
    background: ${colors.lightblue};
    /* grid-column-start: 1;
    grid-column-end: 3; */
    grid-column: 2 / -1;
  }
  & .menu {
    background: ${colors.red};
    grid-row: 1 / 3;
  }
  & .content {
    background: ${colors.green};
    grid-column: 2 / -1;
  }
  & .footer {
    background: ${colors.dark};
    /* grid-column: 1 / 3; */ //    SAME
    /* grid-column: 1 / span 2; */ //SAME
    grid-column: 1 / -1; // SAME
  }
`;

const Container3 = styled.section`
  margin-top: 50px;
  & > * {
    font-size: 2rem;
    font-weight: bold;
    color: #fff;
    display: grid;
    place-items: center;
    text-transform: uppercase;
  }

  display: grid;
  grid-gap: 0.375rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px 200px 60px;
  grid-template-areas:
    ". h h h h h h h h h h ."
    "m c c c c c c c c c c c"
    ". f f f f f f f f f f .";
  & .header {
    background: ${colors.lightblue};
    grid-area: h;
  }
  & .menu {
    background: ${colors.red};
    grid-area: m;
  }
  & .content {
    background: ${colors.green};
    grid-area: c;
  }
  & .footer {
    background: ${colors.dark};
    grid-area: f;
  }
`;

export { MainContainer, Container1, Container2, Container3 };
