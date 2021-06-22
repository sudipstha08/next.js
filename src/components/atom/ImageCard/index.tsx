import React from "react";

const ImageCard = ({ imagePath, desp }) => {
  return (
    <div className="responsive">
      <div className="gallery">
        <a target="_blank" href={imagePath}>
          <img src={imagePath} alt="Northern Lights" width="600" height="400" />
        </a>
        <div className="desc">{desp}</div>
      </div>
    </div>
  );
};

export { ImageCard };
