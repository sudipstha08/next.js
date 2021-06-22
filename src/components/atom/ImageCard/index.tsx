import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;

  div.gallery {
    border: 1px solid #ccc;
  }

  div.gallery img {
    max-width: 100%;
    width: 100%;
    height: 400px;
    object-fit: cover;
  }

  div.desc {
    padding: 15px;
    text-align: center;
  }
`;

const ImageCard = ({ imagePath, desp }) => {
  return (
    <Wrapper className="responsive">
      <div className="gallery">
        <a target="_blank" href={imagePath}>
          <img src={imagePath} alt="Northern Lights" width="600" height="400" />
        </a>
        <div className="desc">{desp}</div>
      </div>
    </Wrapper>
  );
};

export { ImageCard };
