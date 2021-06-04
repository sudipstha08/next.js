import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm } from "../../components";
import { Wrapper } from "./style";

const promise = loadStripe("pk_test_TYooMQauvdEDq54NiTphI7jx");

const PaymentPage = () => {
  return (
    <Wrapper>
      <Elements stripe={promise}>
        <CheckOutForm />
      </Elements>
    </Wrapper>
  );
};

export default PaymentPage;
