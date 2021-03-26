import { useDrag } from "react-dnd";
import { ItemTypes } from "./ItemTypes";

const style = {
  border: "1px dashed gray",
  backgroundColor: "white",
  padding: "0.5rem 1rem",
  marginRight: "1.5rem",
  marginBottom: "1.5rem",
  cursor: "move",
  float: "left",
};

export const Box = ({ id, title, left, top }: any) => {
  const [{ isDragging }, drag] = useDrag(
    () => ({
      type: ItemTypes.BOX,
      item: { id, title, left, top },
      // end: (item, monitor) => {
      //   const dropResult = monitor.getDropResult();
      //   if (item && dropResult) {
      //     alert(`You dropped ${item.name} into ${dropResult.name}!`);
      //   }
      // },
      collect: (monitor) => ({
        isDragging: monitor.isDragging(),
        handlerId: monitor.getHandlerId(),
      }),
    }),
    [id, title, left, top],
  );
  const opacity = isDragging ? 0.4 : 1;
  return (
    <div
      ref={drag}
      role="Box"
      style={{ ...style, opacity }}
      data-testid={`box-${name}`}
    >
      <div style={{ border: "2px solid blue", fontSize: "16px", color: "red" }}>
        {title}
      </div>
    </div>
  );
};
