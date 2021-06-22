import React from "react";
import { Wrapper, FlexBox } from "./style";

const Gallery = () => {
  return (
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
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  aperiam inventore nemo, asperiores dolorem nisi voluptate
                  omnis quam sit doloremque expedita architecto dicta, at
                  consequatur.
                </p>
              </div>
              <div>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure
                  aperiam inventore nemo, asperiores dolorem nisi voluptate
                  omnis quam sit doloremque expedita architecto dicta, at
                  consequatur.
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
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit. Vel
                  ipsum dicta fuga vero aliquam! Officiis?
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
                  aperiam? Quia aperiam nesciunt sint iste laboriosam quibusdam
                  minus molestias blanditiis esse!
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
  );
};

export default Gallery;
