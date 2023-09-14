import React from "react";
import styled from "styled-components";
import { SkeletonLoader } from "../../components";

const data = [1, 2, 34, 43, 5, 4, 3, 56, 78, 43, 22, 34, 565];
data.length = 10;

const UserLoader = styled.div`
  gap: 30px !important;
  display: inline-flex;
  gap: 30px;
  align-items: center;
  flex-wrap: wrap;
`;

const Loaders = () => {
  return (
    <UserLoader>
      {data?.map(() => (
        <SkeletonLoader
          key={Math.random()}
          type="primary"
          active
          avatarShape="circle"
          block={false}
          buttonShape="circle"
          size="default"
        />
      ))}
    </UserLoader>
  );
};

export default Loaders;
