import { useDrop } from "react-dnd";
import { ItemTypes } from "./ItemTypes";
import { useState, useCallback } from "react";
import update from "immutability-helper";

const style = {
  height: "12rem",
  width: "12rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  color: "white",
  padding: "1rem",
  textAlign: "center",
  fontSize: "1rem",
  lineHeight: "normal",
  float: "left",
};

export interface DragItem {
  id: string;
  type: string;
  left: number;
  top: number;
}

interface BoxMap {
  [key: string]: { top: number; left: number; title: string };
}

export const Dustbin = () => {
  const [boxes, setBoxes] = useState<BoxMap>({
    a: { top: 20, left: 80, title: "Drag me around" },
    b: { top: 180, left: 20, title: "Drag me too" },
  });

  const moveBox = useCallback(
    (id: string, left: number, top: number) => {
      setBoxes(
        update(boxes, {
          [id]: {
            $merge: { left, top },
          },
        }),
      );
    },
    [boxes],
  );

  return (
    <div ref={drop} role={"Dustbin"} style={{ ...style, backgroundColor }}>
      {Object.keys(boxes).map((key) => (
        <Box key={key} id={key} {...boxes[key]} />
      ))}
    </div>
  );
};
