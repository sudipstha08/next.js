import React, { useState } from "react";
import styled from "styled-components";
import OtpInput from "react-otp-input";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  padding-top: 30px;
  & > div {
    & > div {
      margin-right: 10px;
      & input {
        border-radius: 5px;
        height: 45px;
        width: 45px !important;
        &:focus-visible {
        }
      }
    }
  }
`;

const VerificationCode = () => {
  const [otp, setOtp] = useState("");

  const handleChange = (otp) => {
    setOtp(otp);
  };

  return (
    <Container>
      <OtpInput
        value={otp}
        onChange={handleChange}
        numInputs={6}
        isInputNum={true}
        separator={<span> </span>}
        shouldAutoFocus={true}
        data-cy="23233"
        focusStyle={{
          border: "1px solid green",
          outline: "none",
        }}
        inputStyle={{
          border: "1px solid red",
        }}
        containerStyle={{}}
      />
    </Container>
  );
};

export { VerificationCode };

// https://medium.com/@ahmedaffan311/otp-input-in-react-js-3b36ed67e360
