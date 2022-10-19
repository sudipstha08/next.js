import React from "react";

export const FormWrapper = ({ title, children }) => {
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
