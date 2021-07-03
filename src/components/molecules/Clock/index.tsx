import React, { createRef } from "react";
import { Wrapper } from "./style";

const Clock = () => {
  const hourRef = createRef<any>();
  const minRef = createRef<any>();
  const secRef = createRef<any>();

  setInterval(() => {
    const deg = 6;
    const hr: any = hourRef.current;
    const min: any = minRef.current;
    const sec: any = secRef.current;

    const day = new Date();
    const hh = day.getHours() * 30;
    const mm = day.getMinutes() * deg;
    const ss = day.getSeconds() * deg;

    hr.style.transform = `rotateZ(${hh + mm / 12}deg)`;
    min.style.transform = `rotateZ(${mm}deg)`;
    sec.style.transform = `rotateZ(${ss}deg)`;
  }, 1000);

  return (
    <Wrapper className="neumorphism-clock-wrapper">
      <div className="clock">
        <div className="hour">
          <div className="hr" id="hr" ref={hourRef} />
        </div>
        <div className="min">
          <div className="mn" id="mn" ref={minRef} />
        </div>
        <div className="sec">
          <div className="sc" id="sc" ref={secRef} />
        </div>
      </div>
    </Wrapper>
  );
};

export { Clock };
