import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  height: 600px;
  align-items: center;
  box-sizing: border-box;
  background: #091921;

  .clock {
    width: 380px;
    height: 380px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: url(../../assets/images/clock.png);
    background-size: cover;
    border: 4px solid #091921;
    border-radius: 50%;
    box-shadow: 0 -15px 15px rgba(255, 255, 255, 0.05),
      inset 0 -15px 15px rgba(255, 255, 255, 0.05),
      0 15px 15px rgba(0, 0, 0, 0.05), inset 0 15px 15px rgba(0, 0, 0, 0.05);

    &:before {
      content: "";
      position: absolute;
      width: 15px;
      height: 15px;
      background: #fff;
      border-radius: 50%;
      z-index: 10000;
    }

    .hour,
    .min,
    .sec {
      position: absolute;
    }

    .hour {
      .hr {
        width: 160px;
        height: 160px;
      }
    }

    .min {
      .mn {
        width: 190px;
        height: 190px;
      }
    }

    .sec {
      .sc {
        width: 230px;
        height: 230px;
      }
    }

    .hr,
    .mn,
    .sc {
      display: flex;
      justify-content: center;
      border-radius: 50%;
    }

    .hr:before {
      content: "";
      position: absolute;
      width: 8px;
      height: 80px;
      background: #ff105e;
      z-index: 10;
      border-radius: 6px 6px 0 0;
    }

    .mn:before {
      content: "";
      position: absolute;
      width: 4px;
      height: 90px;
      background: #9613c0;
      z-index: 11;
      border-radius: 6px 6px 0 0;
    }

    .sc:before {
      content: "";
      position: absolute;
      width: 2px;
      height: 150px;
      background: #fff;
      z-index: 12;
      border-radius: 6px 6px 0 0;
    }
  }
`;

export { Wrapper };
