import React, { ReactNode, FC } from "react";

interface FormWrapper {
  title: string;
  children: ReactNode;
}

export const FormWrapper: FC<FormWrapper> = ({ title, children }) => {
  return (
    <>
      <h2 style={{ textAlign: "center", marginBottom: "2rem" }}>{title}</h2>
      <div
        style={{
          display: "grid",
          gap: "1rem .5rem",
          justifyContent: "flex-start",
          gridTemplateColumns: "auto minmax(auto, 400px)",
        }}
      >
        {children}
      </div>
    </>
  );
};

// https://blog.openreplay.com/multi-step-forms-with-transition-effects-in-react/
// https://medium.com/how-to-react/create-multi-step-form-in-react-with-validation-4ac09129a3a8
// https://piyushsinha.tech/multi-step-form-with-react-and-formik
// https://javascript.plainenglish.io/build-a-multistep-form-with-react-hook-form-24f9398dc049
// https://www.freecodecamp.org/news/build-a-multi-step-registration-app-with-animated-transitions-using-mern-stack/
// https://codesandbox.io/s/y5b2j?file=/src/Components/Forms/StepOne.js
