import React, { useEffect } from "react";
import {
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
} from "./style";

interface ImageProps {
  width?: number;
  height?: number;
}

const getImgSize = (imgSrc) => {
  return new Promise((resolve, reject) => {
    const newImg = new Image();
    let height;
    let width;
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
    const imageContainer = document?.getElementById("image-container");
    const imageWrappers = imageContainer?.children;

    Array.from(imageWrappers as HTMLCollection).forEach(
      async (imageWrapper) => {
        const image = await imageWrapper?.children[0];
        const a: any = await getImgSize(image.getAttribute("src"));
        const aspectRatio = a.width / a.height;

        if (aspectRatio > 1.4) {
          imageWrapper?.classList.add("landscape");
        } else if (aspectRatio < 0.6) {
          imageWrapper?.classList.add("portrait");
        } else if (a.height > 4000 && a.width > 4000) {
          imageWrapper?.classList.add("big");
        } else {
          imageWrapper?.classList.add("normal");
        }
      },
    );
  }, [document]);

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
