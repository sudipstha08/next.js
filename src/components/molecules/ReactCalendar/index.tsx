import React, { useState } from "react";
import styled from "styled-components";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

const Container = styled.div`
  margin: 0 auto;
  max-width: 1200px;
  display: flex;
  justify-content: center;
  margin-top: 100px;
`;

const ReactCalendar = () => {
  const [value, onChange] = useState(new Date());
  return (
    <Container>
      <Calendar onChange={onChange} value={value} />
    </Container>
  );
};

export { ReactCalendar };
