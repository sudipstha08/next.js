import React from "react";
import dynamic from "next/dynamic";

const Component = dynamic(
  () =>
    import("../../components/molecules/ReactDnD").then((mod) => mod.ReactDnD),
  {
    ssr: false,
  },
);

const InteractJS = () => {
  return (
    <div>
      <Component />
    </div>
  );
};

export default InteractJS;
