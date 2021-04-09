/* eslint-disable no-console */
import React from "react";
import dynamic from "next/dynamic";
import _ from "lodash";

const ApexCharts = dynamic(
  () => import("../../components/molecules/ApexCharts/index"),
  {
    ssr: false,
  },
);

const Profile = () => {
  const greeting = _.join(["Hello", "World", "From", "React"], " ");
  const chunkTest = _.chunk(["a", "b", "c", "d"], 2);
  console.log("test", chunkTest);
  return (
    <div>
      <ApexCharts />
      <h1>{greeting}</h1>
    </div>
  );
};

export default Profile;
