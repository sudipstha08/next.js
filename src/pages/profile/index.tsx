import React from "react";
import dynamic from "next/dynamic";
import styled from "styled-components";
import { Footer } from "../../store/components";

const ApexCharts = dynamic(
  () =>
    import("../../store/components/molecules/ApexCharts/index").then(
      (mod) => mod.ApexChart as any,
    ),
  { loading: () => <p>Loading Chart ...</p>, ssr: false },
);

const Wrapper = styled.div`
  & .footer-wrapper {
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    overflow: visible;
  }
`;

const Profile = () => {
  return (
    <Wrapper>
      <ApexCharts />
      <div className="footer-wrapper">
        <Footer />
      </div>
    </Wrapper>
  );
};

export default Profile;
