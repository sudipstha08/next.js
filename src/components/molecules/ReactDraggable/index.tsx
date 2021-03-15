import React, { useState } from "react";
// import Draggable from "react-draggable";
import GridLayout from "react-grid-layout";
import { List, Avatar } from "antd";
import "react-grid-layout/css/styles.css";
import styled from "styled-components";

const Wrapper = styled.div`
  & .list--item {
    border: 2px solid #333 !important;
  }
  & .react-grid-placeholder {
    background: none !important;
  }
`;

const ReactDraggable = () => {
  const [layout, setLayout] = useState([
    { i: "a", x: 1, y: 1, w: 20, h: 3 },
    { i: "b", x: 1, y: 2, w: 20, h: 3 },
    { i: "c", x: 1, y: 3, w: 20, h: 3 },
  ]);

  const handleLayoutChange = (lay: any) => {
    setLayout(lay);
  };
  return (
    <Wrapper>
      <GridLayout
        className="layout"
        layout={layout}
        cols={20}
        rowHeight={20}
        width={1200}
        compactType="vertical"
        items={3}
        onLayoutChange={handleLayoutChange}
        onDrag={() => console.log("heloo drag")}
      >
        <div key="a">
          <List.Item className="list--item">
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<p> Micheal Jordan</p>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        </div>
        <div key="b">
          <List.Item className="list--item">
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<span> Lebron James</span>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        </div>
        <div key="c">
          <List.Item className="list--item">
            <List.Item.Meta
              avatar={
                <Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />
              }
              title={<p>Stephen curry</p>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        </div>
      </GridLayout>
    </Wrapper>
  );
};

export { ReactDraggable };
