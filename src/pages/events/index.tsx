import React, { FC } from "react";
import styled from "styled-components";
import { ReactCalendar } from "../../components";

const Main = styled.main``;

const EventsPage: FC = () => {
  return (
    <Main>
      <ReactCalendar />
    </Main>
  );
};

export default EventsPage;
