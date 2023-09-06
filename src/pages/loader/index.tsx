import React from "react";
import { SkeletonLoader } from "../../components";

const Loaders = () => {
  return (
    <div>
      <SkeletonLoader
        active
        avatarShape="circle"
        block={false}
        buttonShape="circle"
        size="default"
      />
    </div>
  );
};

export default Loaders;
