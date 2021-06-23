import React from "react";
import {
  MainContainer,
  Container1,
  Container2,
  Container3,
  Container4,
  Container5,
  Container6,
  Container7,
} from "./style";

const GridPage = () => {
  return (
    <MainContainer>
      <Container1 className="container1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </Container1>

      <Container2 className="container2">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container2>

      <Container3>
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container3>

      <Container4>
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

      <Container5>
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
      <Container6>
        <div>
          <img src="/images/image-001.jpg" />
        </div>
        <div className="vertical">
          <img src="/images/image-002.jpg" />
        </div>
        <div className="horizontal">
          <img src="/images/image-003.jpg" />
        </div>
        <div>
          <img src="/images/image-004.jpg" />
        </div>
        <div>
          <img src="/images/image-005.jpg" />
        </div>
        <div className="big">
          <img src="/images/image-006.jpg" />
        </div>
        <div>
          <img src="/images/image-007.jpg" />
        </div>
        <div>
          <img src="/images/image-008.jpg" />
        </div>
        <div className="vertical">
          <img src="/images/image-009.jpg" />
        </div>
        <div>
          <img src="/images/image-010.jpg" />
        </div>
        <div>
          <img src="/images/image-011.jpg" />
        </div>
        <div className="vertical">
          <img src="/images/image-012.jpg" />
        </div>
        <div>
          <img src="/images/image-013.jpg" />
        </div>
        <div>
          <img src="/images/image-014.jpg" />
        </div>
        <div className="horizontal">
          <img src="/images/image-015.jpg" />
        </div>
        <div>
          <img src="/images/image-016.jpg" />
        </div>
        <div>
          <img src="/images/image-017.jpg" />
        </div>
        <div className="horizontal">
          <img src="/images/image-018.jpg" />
        </div>
        <div>
          <img src="/images/image-019.jpg" />
        </div>
        <div>
          <img src="/images/image-020.jpg" />
        </div>
        <div className="big">
          <img src="/images/image-021.jpg" />
        </div>
        <div>
          <img src="/images/image-022.jpg" />
        </div>
        <div>
          <img src="/images/image-023.jpg" />
        </div>
        <div className="vertical">
          <img src="/images/image-024.jpg" />
        </div>
      </Container6>

      <Container7>
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container7>
    </MainContainer>
  );
};

export default GridPage;
