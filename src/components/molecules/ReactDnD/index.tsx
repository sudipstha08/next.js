import React from "react";
import { DndProvider } from "react-dnd";

import { HTML5Backend } from "react-dnd-html5-backend";
import { Dustbin } from "./dustbin";
import { Box } from "./box";
import styled from "styled-components";

const Container = styled.section`
  display: grid;
  place-items: center;
  height: 100vh;
`;

const ReactDnD = () => {
  return (
    <Container>
      <DndProvider backend={HTML5Backend}>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Dustbin />
        </div>
        <div style={{ overflow: "hidden", clear: "both" }}>
          <Box title="Glass" />
          <Box title="Banana" />
          <Box title="Paper" />
        </div>
      </DndProvider>
    </Container>
  );
};

export { ReactDnD };
