import React from "react";
import styled from "styled-components";
import { ReactCalendar } from "../../components";

const Main = styled.main``;

const EventsPage = () => {
  return (
    <Main>
      <ReactCalendar />
    </Main>
  );
};

export default EventsPage;
