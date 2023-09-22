/* eslint-disable no-console */
import React from "react";
import { useBrowserFingerPrint } from "../../hooks";
import Link from "next/link";

const BlogsPage = () => {
  const fpHash = useBrowserFingerPrint();

  console.log("fphashhh======>", fpHash);
  return (
    <div>
      <div>
        <Link href="/about">Hi</Link>
      </div>
    </div>
  );
};

export default BlogsPage;
