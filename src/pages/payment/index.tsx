import React from "react";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { CheckOutForm } from "../../components";
import { Wrapper } from "./style";

const promise = loadStripe(process.env.NEXT_PUBLIC_PUBLISHABLE_KEY || "");

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
