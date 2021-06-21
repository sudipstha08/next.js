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
    margin-inline: auto; // left margin && right margin
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

export { Wrapper };
