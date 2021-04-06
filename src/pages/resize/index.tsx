import React, { useState } from "react";
import { ResizableBox } from "react-resizable";
import styled from "styled-components";
import "react-resizable/css/styles.css";

const Wrapper = styled.section`
  display: grid;
  place-items: center;
  height: 80vh;
  & .hover-handles .react-resizable-handle {
    display: none;
  }
  & .hover-handles:hover .react-resizable-handle {
    display: block;
  }
`;

const ResizablePage = () => {
  const [state, setState] = useState<any>({
    width: 200,
    height: 200,
    absoluteWidth: 200,
    absoluteHeight: 200,
    absoluteLeft: 0,
    absoluteTop: 0,
  });

  const onResize = (event, { element, size, handle }: any) => {
    setState({ width: size.width, height: size.height });
  };

  return (
    <Wrapper>
      <ResizableBox
        className="box hover-handles"
        height={state.height}
        width={state.width}
        onResize={onResize}
        resizeHandles={["se"]}
        lockAspectRatio={true}
        minConstraints={[60, 60]}
        maxConstraints={[200, 200]}
      >
        <div
          className="box"
          style={{
            width: state.width + "px",
            height: state.height + "px",
            border: "2px solid rgb(248, 209, 76)",
            borderRadius: "50%",
            background: "rgb(237, 237, 237",
          }}
        ></div>
      </ResizableBox>
    </Wrapper>
  );
};

export default ResizablePage;
