import styled from "styled-components";

const Container = styled.div`
  position: relative;
  width: 330px;
  height: 50px;
  margin-top: 50px;
  margin-bottom: 100px;
  & .seperator {
    width: 100%;
    position: absolute;
    top: 50%;
    transform: translateY(-50%);
    left: 0;
    display: flex;
    justify-content: space-around;
    padding-left: 45px;
    padding-right: 45px;
    & span {
      color: #ccc;
    }
  }
`;

const Wrapper = styled.div`
  display: flex !important;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  & .pnum-input {
    border: 1px solid rgb(217, 217, 217);
    padding: 15px;
    height: 50px;
    width: 28%;
    border-radius: 6px;
    box-shadow: none;
    outline: none;
    font-size: 16px;
    text-align: center;
  }
`;

export { Wrapper, Container };
