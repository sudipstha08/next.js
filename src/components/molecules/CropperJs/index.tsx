/* eslint-disable @next/next/no-img-element */
import React, { useState, createRef, useEffect, FC } from "react";
import styled from "styled-components";
import Cropper from "cropperjs";
import "cropperjs/dist/cropper.min.css";

interface Props {
  src?: string;
}

const Wrapper = styled.div`
  .img-container {
    width: 640px;
    height: 480px;
    float: left;
  }

  .img-preview {
    width: 200px;
    height: 200px;
    float: left;
    margin-left: 10px;
  }
`;

const CropperJs: FC<Props> = ({ src }) => {
  const [imageDestination, setImageDestination] = useState("");
  const imageElement = createRef<any>();

  useEffect(() => {
    const cropper = new Cropper(imageElement.current, {
      zoomable: false,
      scalable: false,
      aspectRatio: 1,
      viewMode: 1,
      crop: () => {
        const canvas = cropper.getCroppedCanvas();
        setImageDestination(canvas.toDataURL("image/png"));
      },
    });
  }, []);

  return (
    <Wrapper>
      <div className="img-container">
        <img ref={imageElement} src={src} alt="source" />
      </div>
      <img src={imageDestination} alt="preview" className="img-preview" />
    </Wrapper>
  );
};

export { CropperJs };
