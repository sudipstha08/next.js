import styled from "styled-components";

const colors = {
  blue: "#007bff",
  green: "#28a745",
  red: "#dc3545",
  tomato: "Tomato",
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

//  Template areas
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

// Auto-fit and minmax
const Container4 = styled.section`
  margin-top: 50px;
  & > * {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    display: grid;
    place-items: center;
  }
  & > :nth-child(2n + 0) {
    background: ${colors.tomato};
  }
  & > :nth-child(3n + 0) {
    background: ${colors.dark};
  }
  & > :nth-child(4n + 0) {
    background: ${colors.green};
  }
  & > :nth-child(odd) {
    background: ${colors.lightblue};
  }

  display: grid;
  grid-gap: 0.25rem;
  // The minmax() CSS function defines a size range greater than or equal to min
  // and less than or equal to max.
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 200px);
`;

// IMPLICIT ROWS
const Container5 = styled.section`
  margin-top: 50px;
  & > * {
    color: #fff;
    font-size: 2rem;
    font-weight: 600;
    display: grid;
    place-items: center;
  }
  & > :nth-child(2n + 0) {
    background: ${colors.tomato};
  }
  & > :nth-child(3n + 0) {
    background: ${colors.dark};
  }
  & > :nth-child(4n + 0) {
    background: ${colors.green};
  }
  & > :nth-child(odd) {
    background: ${colors.lightblue};
  }
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  // all rows will be created implicitly and will be 200px in height
  grid-auto-rows: 200px;
`;

const Container6 = styled.section`
  margin-top: 50px;
  display: grid;
  grid-gap: 0.5rem;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-auto-rows: 150px;
  // controls how the auto-placement algorithm works
  grid-auto-flow: dense;
  & img {
    max-height: 100%;
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
  .horizontal {
    /* grid-column: auto / span 2; */ // same
    grid-column: span 2; //same
  }

  .vertical {
    grid-row: span 2;
  }

  .big {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

export {
  MainContainer,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
};
