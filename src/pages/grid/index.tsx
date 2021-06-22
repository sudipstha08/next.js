import React from "react";
import { MainContainer, Container2 } from "./style";

const GridPage = () => {
  return (
    <MainContainer>
      <section className="container1">
        <div>1</div>
        <div>2</div>
        <div>3</div>
        <div>4</div>
        <div>5</div>
        <div>6</div>
      </section>
      <Container2 className="container2">
        <div className="header">header</div>
        <div className="menu">menu</div>
        <div className="content">content</div>
        <div className="footer">footer</div>
      </Container2>
    </MainContainer>
  );
};

export default GridPage;
