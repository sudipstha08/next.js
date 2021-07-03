import React, { useState } from "react";

const Timer = () => {
  const [mins, setMins] = useState(0);
  const [secs, setSecs] = useState(0);
  const startingMin = 10;
  let time = startingMin * 60;

  // const countdownEl
  const updateCountDown = () => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    time--;
    setSecs(seconds);
    setMins(minutes);
  };

  setInterval(updateCountDown, 1000);

  return (
    <div>
      {mins}: {secs}
    </div>
  );
};

export { Timer };
