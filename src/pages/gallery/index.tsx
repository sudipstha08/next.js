import React from "react";
import { Wrapper, FlexBox, GalleryWrapper, ResponsiveGallery } from "./style";
import { ImageCard } from "../../components";

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
