import styled from "styled-components";

const colors = {
  primary: "#F3EED9",
  secondary: "#824936",
  neutral: "#fff",
  neutral900: "#222c2a",
};

const fonts = {
  primary: `"Roboto", sans-serif`,
  accent: `"Playfair Display", serif`,
};

const Wrapper = styled.div`
  font-family: ${fonts.primary};
  font-weight: 400;
  font-size: 1.3125rem;
  line-height: 1.6;

  h1,
  h2,
  h3 {
    font-family: ${fonts.accent};
    font-weight: 900;
    line-height: 1;
    margin-bottom: 1em;
    color: ${colors.secondary};
  }

  header,
  section {
    padding: 4rem 0;
  }

  @media (min-width: 40em) {
    header,
    section {
      padding: 7rem, 0;
    }
  }

  .bg-light {
    background-color: ${colors.primary};
  }

  .bg-primary {
    background-color: ${colors.secondary};
  }

  .bg-dark {
    color: ${colors.neutral};
    background-color: ${colors.neutral900};
  }

  .bg-primary h2,
  .bg-dark h2 {
    color: ${colors.primary};
  }

  .container {
    margin-inline: auto;
    // left margin && right margin
    width: min(90%, 70.5rem);
  }

  .split {
    display: flex;
    flex-direction: column;
  }

  @media (min-width: 40em) {
    .split {
      flex-direction: row;
    }

    // all the direct children
    .split > * {
      flex-basis: 100%;
    }

    .split > * + * {
      margin-left: 2em;
    }
  }

  .container--narrow {
    max-width: 34rem;
  }

  .text-center {
    text-align: center;
  }

  img {
    display: block;
    max-width: 100%;
  }
`;

const FlexBox = styled.section`
  .flexbox-container {
    display: flex;
    flex-wrap: wrap;
    background: yellow;
    padding: 2em 3em;
  }
  .flexbox-item {
    width: 200px;
    margin: 10px;
    border: 3px solid #333;
    background-color: #dfdfdf;
    display: grid;
    place-items: center;
  }
  .flexbox-item-1 {
    min-height: 100px;
    flex-shrink: 0;
    align-self: flex-end;
    order: 2;
  }
  .flexbox-item-2 {
    min-height: 200px;
    flex-grow: 2;
    align-self: center;
    flex-basis: 0;
    order: 3;
  }
  .flexbox-item-3 {
    min-height: 300px;
    flex-shrink: 1;
    flex-grow: 1;
    // The flex-basis CSS property sets the initial main size of a flex item.
    flex-basis: 0;
    order: 1;
  }
`;

const ResponsiveGallery = styled.div`
  width: 92%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
  flex-wrap: wrap;
  max-width: 1500px;
  @media only screen and (max-width: 1200px) {
    grid-template-columns: repeat(3, 1fr);
  }

  /* @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(3, 1fr);
  } */

  @media only screen and (max-width: 768px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

const GalleryWrapper = styled.div`
  line-height: 0;
  -webkit-column-count: 5; /* split it into 5 columns */
  -webkit-column-gap: 5px; /* give it a 5px gap between columns */
  -moz-column-count: 5;
  -moz-column-gap: 5px;
  column-count: 5;
  column-gap: 5px;
  background: #f8f8f8;
  & img {
    width: 100% !important;
    height: auto !important;
    margin-bottom: 5px; /* to match column gap */
  }

  @media (max-width: 1200px) {
    -moz-column-count: 4;
    -webkit-column-count: 4;
    column-count: 4;
  }

  @media (max-width: 1000px) {
    -moz-column-count: 3;
    -webkit-column-count: 3;
    column-count: 3;
  }

  @media (max-width: 800px) {
    -moz-column-count: 2;
    -webkit-column-count: 2;
    column-count: 2;
  }

  @media (max-width: 400px) {
    -moz-column-count: 1;
    -webkit-column-count: 1;
    column-count: 1;
  }
`;

export { Wrapper, FlexBox, GalleryWrapper, ResponsiveGallery };
