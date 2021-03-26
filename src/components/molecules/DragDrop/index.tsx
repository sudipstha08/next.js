import React, { useEffect } from "react";
import Konva from "konva";
import styled from "styled-components";

const Wrapper = styled.section`
  #container {
    background-color: rgba(0, 0, 0, 0.1);
    border: 1px solid blue;
    height: 500px;
    width: 500px;
  }

  p {
    margin: 4px;
  }

  #drag-items img {
    height: 100px;
  }
`;

const DragDrop = () => {
  const width = window?.innerWidth;
  const height = window?.innerHeight;

  window?.addEventListener("DOMContentLoaded", () => {
    const stage = new Konva.Stage({
      container: "container",
      width: width,
      height: height,
    });

    const layer = new Konva.Layer();
    stage?.add(layer);

    // what is url of dragging element?
    let itemURL = "";
    document
      ?.getElementById("drag-items")
      ?.addEventListener("dragstart", function (e) {
        itemURL = e?.target?.src;
      });

    const con = stage?.container();
    con?.addEventListener("dragover", function (e) {
      e.preventDefault(); // !important
    });

    con?.addEventListener("drop", function (e) {
      e.preventDefault();
      stage?.setPointersPositions(e);

      Konva.Image.fromURL(itemURL, function (image: any) {
        layer?.add(image);

        image.position(stage.getPointerPosition());
        image.draggable(true);

        layer.draw();
      });
    });
  });

  return (
    <Wrapper>
      <div id="drag-items">
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZSIqCEOw_sI0s_g3Fpjw4e-AA5Js4uebdpajwqgYOBz2RwBI&usqp=CAU"
          draggable="true"
        />
        <img
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScZSIqCEOw_sI0s_g3Fpjw4e-AA5Js4uebdpajwqgYOBz2RwBI&usqp=CAU"
          draggable="true"
        />
      </div>
      <div id="container"></div>
    </Wrapper>
  );
};

export { DragDrop };
