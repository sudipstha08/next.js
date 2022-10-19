import React, { useState, FormEvent } from "react";
import { AddressForm, UserForm } from "../../components";
import { useMultiStepForm } from "../../components/hooks";
import { AccountForm } from "../../components/organisms/AccountForm";

type FormData = {
  firstName: string;
  lastName: string;
  age: string;
  street: string;
  city: string;
  state: string;
  zip: string;
  email: string;
  password: string;
};

const INITIAL_DATA = {
  firstName: "",
  lastName: "",
  age: "",
  street: "",
  city: "",
  state: "",
  zip: "",
  email: "",
  password: "",
};

const MultiStepForm = () => {
  const [formData, setFormData] = useState<FormData>(INITIAL_DATA);

  const updateFields = (fields: Partial<FormData>) => {
    setFormData((prevValues) => {
      return { ...prevValues, ...fields };
    });
  };

  const steps = [
    <UserForm key={0} {...formData} updateFields={updateFields} />,
    <AddressForm key={2} {...formData} updateFields={updateFields} />,
    <AccountForm key={3} {...formData} updateFields={updateFields} />,
  ];
  const { currentStepIdx, step, isFirstStep, isLastStep, back, next } =
    useMultiStepForm(steps);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    next();
  };

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
      <form onSubmit={handleSubmit}>
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
          {!isFirstStep && (
            <button type="button" onClick={back}>
              Back
            </button>
          )}
          <button type="submit">{isLastStep ? "Finish" : "Next"}</button>
        </div>
      </form>
    </div>
  );
};

export default MultiStepForm;
