import React from "react";
import { ImageCard } from "../../components";
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
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 2vw;
  flex-wrap: wrap;
  width: min(92%, 1500px);
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

const GalleryPage = () => {
  return (
    <>
      <Wrapper>
        <div>
          <section className="bg-light text-center">
            <div className="container container--narrow">
              <p>Lorem, ipsum dolor.</p>
              <h2>Responsive layouts don’t have to be a struggle</h2>
            </div>
          </section>
          <section>
            <div className="container">
              <h2 className="text-center">Quality Designs</h2>
              <div className="split">
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure aperiam inventore nemo, asperiores dolorem nisi
                    voluptate omnis quam sit doloremque expedita architecto
                    dicta, at consequatur.
                  </p>
                </div>
                <div>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Iure aperiam inventore nemo, asperiores dolorem nisi
                    voluptate omnis quam sit doloremque expedita architecto
                    dicta, at consequatur.
                  </p>
                </div>
                <div>
                  <p>
                    Eum quisquam deleniti facere fugit. Vero quidem sunt fuga
                    fugit ea voluptatum placeat ullam eveniet, minima sed
                    veritatis laboriosam. Quia cumque est cupiditate quod eum?
                  </p>
                </div>
              </div>
            </div>
          </section>
          <section className="bg-dark">
            <div className="container">
              <div className="split">
                <div>
                  <img
                    src="/images/image-02.jpg"
                    alt="foggy mountains with sun setting behind them"
                  />
                </div>
                <div>
                  <h2>Made custom for you</h2>
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Vel ipsum dicta fuga vero aliquam! Officiis?
                  </p>
                </div>
                <div>
                  <img
                    src="/images/image-01.jpg"
                    alt="man standing on mountain edge looking at sunset"
                  />
                </div>
              </div>
            </div>
          </section>
          <section className="bg-primary">
            <div className="container">
              <div className="split">
                <div>
                  <img
                    src="/images/image-02.jpg"
                    alt="foggy mountains with sun setting behind them"
                  />
                </div>
                <div>
                  <h2>Created with care</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Veritatis id hic at vel voluptatem reiciendis aut, esse
                    aperiam? Quia aperiam nesciunt sint iste laboriosam
                    quibusdam minus molestias blanditiis esse!
                  </p>
                </div>
              </div>
            </div>
          </section>
        </div>
        <FlexBox>
          <div className="flexbox-container">
            <div className="flexbox-item flexbox-item-1">Flexbox item 1</div>
            <div className="flexbox-item flexbox-item-2">Flexbox item 2</div>
            <div className="flexbox-item flexbox-item-3">Flex box item 3</div>
          </div>
        </FlexBox>
      </Wrapper>
      <h1>Images Descriptions</h1>
      <ResponsiveGallery>
        <ImageCard imagePath="/images/image-001.jpg" desp="This is image 1" />
        <ImageCard imagePath="/images/image-002.jpg" desp="This is image 2" />
        <ImageCard imagePath="/images/image-003.jpg" desp="This is image 3" />
        <ImageCard imagePath="/images/image-004.jpg" desp="This is image 4" />
        <ImageCard imagePath="/images/image-005.jpg" desp="This is image 5" />
        <ImageCard imagePath="/images/image-006.jpg" desp="This is image 6" />
        <ImageCard imagePath="/images/image-007.jpg" desp="This is image 7" />
        <ImageCard imagePath="/images/image-008.jpg" desp="This is image 8" />
      </ResponsiveGallery>
      <div />
      <br />
      <h1>Responsive Image Gallery</h1>
      <GalleryWrapper>
        <img src="/images/image-001.jpg" loading="lazy" />
        <img src="/images/image-002.jpg" loading="lazy" />
        <img src="/images/image-003.jpg" loading="lazy" />
        <img src="/images/image-004.jpg" loading="lazy" />
        <img src="/images/image-005.jpg" loading="lazy" />
        <img src="/images/image-006.jpg" loading="lazy" />
        <img src="/images/image-007.jpg" loading="lazy" />
        <img src="/images/image-008.jpg" loading="lazy" />
        <img src="/images/image-009.jpg" loading="lazy" />
        <img src="/images/image-010.jpg" loading="lazy" />
        <img src="/images/image-011.jpg" loading="lazy" />
        <img src="/images/image-012.jpg" loading="lazy" />
        <img src="/images/image-013.jpg" loading="lazy" />
        <img src="/images/image-014.jpg" loading="lazy" />
        <img src="/images/image-015.jpg" loading="lazy" />
        <img src="/images/image-016.jpg" loading="lazy" />
        <img src="/images/image-017.jpg" loading="lazy" />
        <img src="/images/image-018.jpg" loading="lazy" />
        <img src="/images/image-019.jpg" loading="lazy" />
        <img src="/images/image-020.jpg" loading="lazy" />
        <img src="/images/image-021.jpg" loading="lazy" />
        <img src="/images/image-022.jpg" loading="lazy" />
        <img src="/images/image-023.jpg" loading="lazy" />
        <img src="/images/image-024.jpg" loading="lazy" />
      </GalleryWrapper>
    </>
  );
};

export default GalleryPage;
// https://www.w3schools.com/css/tryit.asp?filename=trycss_image_gallery_responsive
