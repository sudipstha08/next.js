import styled from "styled-components";

const Wrapper = styled.div`
  display: flex !important;
  flex-direction: row;
  & .pnum-input {
    border: 1px solid rgb(217, 217, 217);
    padding: 15px;
    height: 50px;
    width: 78px;
    border-radius: 6px;
    box-shadow: none;
    outline: none;
    font-size: 16px;
    text-align: center;
  }
`;

export { Wrapper };
