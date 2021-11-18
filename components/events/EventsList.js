import React from "react";
import EventCard from "./EventCard";
import styled from "styled-components";

const ListContainer = styled.div`
  width: 90%;
  max-width: 40rem;
  // background: blue;
  margin: 5rem auto;
`;
const EventsList = ({ events }) => {
  return (
    <ListContainer>
      {events.map((ev, i) => (
        <EventCard event={ev} key={ev.id || i} />
      ))}
    </ListContainer>
  );
};

export default EventsList;
