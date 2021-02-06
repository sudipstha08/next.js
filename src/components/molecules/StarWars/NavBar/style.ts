import styled from "styled-components";

export const MainContainer = styled.nav`
  & .ant-btn {
    span {
      border: 2px solid blue !important;
      margin: 0 10px;
      padding: 0.5em 1em;
      border-radius: 28px;
      color: #fff;
      font-size: 1.275rem;
      font-weight: 600;
      transition: all 0.5s;
      &:hover {
        border: 2px solid #fff !important;
      }
    }
  }
  & .nav--active {
    span {
      border: 2px solid #fff !important;
    }
  }
`;
