import React from "react";
import { Spin } from "antd";

interface LoaderProps {
  size?: "small" | "default" | "large";
  className?: string;
}
const Loader: React.FC<LoaderProps> = ({ size = "default", className }) => {
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
      }}
    >
      <Spin size={size} className={className} />
    </div>
  );
};

export { Loader };
