import React from "react";
import { MainContainer, Container1, Container2, Container3 } from "./style";

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
    </MainContainer>
  );
};

export default GridPage;
