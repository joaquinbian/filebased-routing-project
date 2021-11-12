import React from "react";
import Link from "next/link";
import styled from "styled-components";

const EventContainer = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background: white;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const EventContent = styled.div`
    width:100%;
    padding:0 1em;
    text-align-center
`;

const Fecha = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const Address = styled(Fecha)``;

const Actions = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const EventCard = ({ event }) => {
  const newDate = new Date(event.date).toLocaleDateString("en-US", {
    day: "numeric",
    month: "long",
    year: "numeric",
  });

  const newLocation = event.location.replace(", ", "\n");
  return (
    <EventContainer>
      <img src={`/${event.image}`} alt="image" />
      <EventContent>
        <div>
          <h1>{event.title}</h1>
          <Fecha>
            <time>{newDate}</time>
          </Fecha>
          <Address>
            <address>{newLocation}</address>
          </Address>
        </div>
        <Actions>
          <Link href={`/events/${event.id}`}>explore event</Link>
        </Actions>
      </EventContent>
    </EventContainer>
  );
};

export default EventCard;
