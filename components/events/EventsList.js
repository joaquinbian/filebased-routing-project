import React from "react";
import EventCard from "./EventCard";
import styled from "styled-components";

const EventsList = ({ events }) => {
  const ListContainer = styled.div`
    width: 90%;
    max-width: 40rem;
    margin: 5rem auto;
  `;

  return (
    <ListContainer>
      {events.map((ev, i) => (
        <li key={ev.id || i}>
          <EventCard event={ev} />
        </li>
      ))}
    </ListContainer>
  );
};

export default EventsList;
