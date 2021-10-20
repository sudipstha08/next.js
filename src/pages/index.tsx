import React from "react";
import styled from "styled-components";
import { FileUpload } from "../components";

const Container = styled.main``;

const HomePage = () => {
  return (
    <Container>
      <FileUpload />
    </Container>
  );
};

export default HomePage;
