import React from "react";
import { useMultiStepForm } from "../../components/hooks";

const MultiStepForm = () => {
  const steps = [];
  const { currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm(steps);

  return (
    <div
      style={{
        position: "relative",
        background: "#fff",
        padding: "2rem",
        margin: "1rem",
        border: "1px solid blue",
        borderRadius: ".5rem",
        width: "500px",
      }}
    >
      <form>
        <div style={{ position: "absolute", top: ".5rem", right: ".5rem" }}>
          {currentStepIdx + 1} / {steps.length}
        </div>
        {step}
        <div
          style={{
            marginTop: "1rem",
            display: "flex",
            gap: ".5rem",
            justifyContent: "flex-end",
          }}
        >
          {!isFirstStep && <button onClick={back}>Back</button>}
          <button type="button" onClick={next}>
            {isLastStep ? "Finish" : "Next"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
