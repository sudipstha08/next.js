/* eslint-disable no-console */
import React from "react";
import { useBrowserFingerPrint } from "../../hooks";

const BlogsPage = () => {
  const fpHash = useBrowserFingerPrint();

  console.log("fphashhh======>", fpHash);
  return (
    <div>
      <div>Blogs</div>
    </div>
  );
};

export default BlogsPage;
