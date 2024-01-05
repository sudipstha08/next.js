import React, { useEffect } from "react";
import styled from "styled-components";
import { colors } from "../../utils/theme";

interface ImageProps {
  width?: number;
  height?: number;
}

const MainContainer = styled.main`
  padding: 2em 4em;
  & .container {
    margin-top: 50px;
    & > * {
      font-size: 2rem;
      font-weight: bold;
      color: #fff;
      display: grid;
      place-items: center;
      text-transform: uppercase;
    }
    .header {
      background: ${colors.lightblue};
    }
    & .menu {
      background: ${colors.red};
    }
    & .content {
      background: ${colors.green};
    }
    & .footer {
      background: ${colors.dark};
    }
    & > :nth-child(2n + 0) {
      background: ${colors.tomato};
    }
    & > :nth-child(3n + 0) {
      background: ${colors.dark};
    }
    & > :nth-child(odd) {
      background: ${colors.lightblue};
    }
    & > :nth-child(4n + 0) {
      background: ${colors.green};
    }
  }
`;

const Container1 = styled.section`
  display: grid;
  // grid-template-rows / grid-template-columns
  grid-template: repeat(2, 1fr) / repeat(3, 1fr);
  grid-gap: 0.5rem;
`;

const Container2 = styled.section`
  display: grid;
  grid-gap: 0.375rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px 200px 60px;
  & .header {
    /* grid-column-start: 1;
    grid-column-end: 3; */
    grid-column: 2 / -1;
  }
  & .menu {
    grid-row: 1 / 3;
  }
  & .content {
    grid-column: 2 / -1;
  }
  & .footer {
    /* grid-column: 1 / 3; */ //    SAME
    /* grid-column: 1 / span 2; */ //SAME
    grid-column: 1 / -1; // SAME
  }
`;

//  TEMPLATE AREAS
const Container3 = styled.section`
  display: grid;
  grid-gap: 0.375rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 60px 200px 60px;
  grid-template-areas:
    ". h h h h h h h h h h ."
    "m c c c c c c c c c c c"
    ". f f f f f f f f f f .";
  & .header {
    grid-area: h;
  }
  & .menu {
    grid-area: m;
  }
  & .content {
    grid-area: c;
  }
  & .footer {
    grid-area: f;
  }
`;

// AUTO-FIT && MIN-MAX
const Container4 = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  // The minmax() CSS function defines a size range greater than or equal to min
  // and less than or equal to max.
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  grid-template-rows: repeat(2, 200px);
`;

// IMPLICIT ROWS
const Container5 = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  // all rows will be created implicitly and will be 200px in height
  grid-auto-rows: 200px;
`;

// IMAGE GALLERY
const Container6 = styled.section`
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
  .landscape {
    /* grid-column: auto / span 2; */ // same
    grid-column: span 2; //same
  }
  .portrait {
    grid-row: span 2;
  }
  .big {
    grid-column: span 2;
    grid-row: span 2;
  }
`;

// NAMED LINES
const Container7 = styled.section`
  height: 400px;
  display: grid;
  grid-gap: 0.275rem;
  grid-template-columns: [main-start] 1fr [content-start] 5fr [content-end main-end];
  grid-template-rows: [main-start] 40px [content-start] auto [content-end] 40px [main-end];

  .header {
    /* grid-column: main-start / main-end; */
    grid-column: main;
  }
  .menu {
  }
  .content {
    /* grid-column: content-start / content-end; */
    /* grid-column: content; */ // SAME
    grid-area: content; // SAME
  }
  .footer {
    /* grid-column: main-start / main-end; */
    grid-column: main;
  }
`;

//  JUSTIFY-CONTENT && ALIGN CONTENT
const Container8 = styled.section`
  border: 1px solid #ccc;
  height: 400px;
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(3, 100px);
  grid-template-rows: repeat(2, 100px);
  justify-content: space-evenly;
  align-content: center;
`;

// JUSTIFY-ITEMS && ALIGN-ITEMS
const Container9 = styled.section`
  display: grid;
  grid-gap: 0.25rem;
  grid-template-columns: repeat(12, 1fr);
  grid-template-rows: 40px auto 40px;
  height: 500px;
  justify-items: center;
  align-items: center;
  .header {
    grid-column: 1 / -1; // first to last
  }
  .menu {
    grid-column: 1 / 3;
  }
  .content {
    grid-column: 3 / -1;
    /* justify-self: center;
    align-self: end; */
  }
  .footer {
    grid-column: 1 / -1;
  }
`;

const Container10 = styled.section`
  .container-autofit {
    display: grid;
    border: 1px solid black;
    grid-gap: 0.25rem;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
    grid-template-rows: 200px 200px;
  }
  .container-autofill {
    display: grid;
    border: 1px solid black;
    grid-gap: 0.25rem;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    grid-template-rows: 200px 200px;
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
  Container7,
  Container8,
  Container9,
  Container10,
};

const getImgSize = (imgSrc: string) => {
  return new Promise((resolve, reject) => {
    const newImg = new Image();
    let height: number;
    let width: number;

    newImg.onload = () => {
      height = newImg.height;
      width = newImg.width;
      resolve({ height, width } as ImageProps);
    };
    newImg.onerror = () => {
      reject("Failed to load image");
    };
    newImg.src = imgSrc; // this must be done AFTER setting onload
  });
};

const GridPage = () => {
  useEffect(() => {
    const imageContainer: HTMLElement | null = document?.getElementById(
      "image-container",
    );
    const imageWrappers: HTMLCollection | undefined = imageContainer?.children;

    Array.from(imageWrappers as HTMLCollection).forEach(
      async (imageWrapper: Element) => {
        const image: Element = await imageWrapper?.children[0];
        const dimension: any = await getImgSize(
          image.getAttribute("src") as string,
        );
        const aspectRatio: number = dimension.width / dimension.height;

        if (aspectRatio > 1.4) {
          imageWrapper?.classList.add("landscape");
        } else if (aspectRatio < 0.65) {
          imageWrapper?.classList.add("portrait");
        } else if (dimension.height > 4000 && dimension.width > 4000) {
          imageWrapper?.classList.add("big");
        } else {
          imageWrapper?.classList.add("normal");
        }
      },
    );
  }, []);

  return (
    <MainContainer>
      <h1 style={{ textAlign: "center", marginTop: 10 }}>CSS GRID LAYOUTS</h1>

      <Container1 className="container1 container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Container1>

      <Container2 className="container2 container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container2>

      <Container3 className="container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container3>

      <Container4 className="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </Container4>

      <Container5 className="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
        <div>7</div>
        <div>8</div>
        <div>9</div>
        <div>10</div>
        <div>11</div>
        <div>12</div>
      </Container5>

      <h1 style={{ textAlign: "center", marginTop: 100 }}>Image Gallery</h1>
      <Container6 id="image-container">
        <div>
          <img src="/images/image-001.jpg" />
        </div>
        <div>
          <img src="/images/image-002.jpg" />
        </div>
        <div>
          <img src="/images/image-003.jpg" />
        </div>
        <div>
          <img src="/images/image-004.jpg" />
        </div>
        <div>
          <img src="/images/image-005.jpg" />
        </div>
        <div>
          <img src="/images/image-006.jpg" />
        </div>
        <div>
          <img src="/images/image-007.jpg" />
        </div>
        <div>
          <img src="/images/image-008.jpg" />
        </div>
        <div>
          <img src="/images/image-009.jpg" />
        </div>
        <div>
          <img src="/images/image-022.jpg" />
        </div>
        <div>
          <img src="/images/image-010.jpg" />
        </div>
        <div>
          <img src="/images/image-011.jpg" />
        </div>
        <div>
          <img src="/images/image-012.jpg" />
        </div>
        <div>
          <img src="/images/image-013.jpg" />
        </div>
        <div>
          <img src="/images/image-014.jpg" />
        </div>
        <div>
          <img src="/images/image-015.jpg" />
        </div>
        <div>
          <img src="/images/image-016.jpg" />
        </div>
        <div>
          <img src="/images/image-017.jpg" />
        </div>
        <div>
          <img src="/images/image-018.jpg" />
        </div>
        <div>
          <img src="/images/image-019.jpg" />
        </div>
        <div>
          <img src="/images/image-020.jpg" />
        </div>
        <div>
          <img src="/images/image-021.jpg" />
        </div>

        <div>
          <img src="/images/image-023.jpg" />
        </div>
        <div>
          <img src="/images/image-024.jpg" />
        </div>
        <div>
          <img src="/images/image1.jpg" />
        </div>
        <div>
          <img src="/images/image2.jpg" />
        </div>
        <div>
          <img src="/images/image3.jpg" />
        </div>
      </Container6>

      <Container7 className="container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container7>

      <Container8 className="container">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Container8>

      <Container9 className="container">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container9>

      <h1 style={{ textAlign: "center", marginTop: 100 }}>
        AUTO FIT VS AUTO FILL
      </h1>

      <Container10>
        <div className="container container-autofit">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
        <div className="container container-autofill">
          <div>1</div>
          <div>2</div>
          <div>3</div>
          <div>4</div>
        </div>
      </Container10>
    </MainContainer>
  );
};

export default GridPage;
