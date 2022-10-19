import { useState, ReactElement } from "react";

const useMultiStepForm = (steps: ReactElement[]) => {
  const [currentStepIdx, setCurrentStepIdx] = useState(0);

  const next = () => {
    setCurrentStepIdx((idx) => {
      if (idx >= steps.length - 1) return idx;
      return idx + 1;
    });
  };

  const back = () => {
    setCurrentStepIdx((idx) => {
      if (idx <= 0) return idx;
      return idx - 1;
    });
  };

  const goto = (idx: number) => {
    setCurrentStepIdx(idx);
  };

  return {
    currentStepIdx,
    step: steps[currentStepIdx],
    isFirstStep: currentStepIdx === 0,
    isLastStep: currentStepIdx === steps.length - 1,
    steps,
    goto,
    next,
    back,
  };
};

export { useMultiStepForm };
