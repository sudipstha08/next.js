import styled from "styled-components";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f5f5f5;
  height: 90vh;
  font-weight: 600;
  font-size: 26px;
  font-family: "Staatliches", cursive;
`;

const BrowserNotSupported = () => {
  const router = useRouter();

  useEffect(() => {
    const isIE = !!window.document.documentMode;
    if (!isIE) {
      router.push("/");
    }
  }, []);

  return (
    <Container>
      <div>
        <p>Your browser is not supported</p>
        <p>Please use other browsers like chrome or firefox.</p>
      </div>
    </Container>
  );
};

export default BrowserNotSupported;
