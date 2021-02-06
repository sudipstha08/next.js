import styled from "styled-components";

export const Wrapper = styled.div`
  & .btn-wrapper {
    display: flex;
    justify-content: center;
    & button {
      cursor: pointer;
      margin: 0 3px;
      border-radius: 18px;
      background: transparent;
      color: #fff;
      border: 2px solid #985dec;
      padding: 0.3em 0.8em;
      outline: none;
    }
  }

  & .planet-card {
    border: 1px solid #666464;
    border-radius: 8px;
    margin: 10px 0;
    background: #1b1b1b;
    padding: 1em 2em;
    box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;
    h3 {
      color: #ffff57;
    }
    p {
      color: #999;
    }
  }
`;
