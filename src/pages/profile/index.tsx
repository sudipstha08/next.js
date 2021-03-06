import React from "react";
import dynamic from "next/dynamic";

const ApexCharts = dynamic(
  () => import("../../components/molecules/ApexCharts/index"),
);

const Profile = () => {
  return (
    <div>
      
      <ApexCharts />
    </div>
  );
};

export default Profile;
