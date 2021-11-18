import React from "react";
import Link from "next/link";
import styled from "styled-components";
import breakpoints from "../../breakpoints";
import IconDate from "../icons/date-icon";
import IconArrow from "../icons/arrow-right-icon";
import IconAddress from "../icons/address-icon";
import Button from "../ui/Button";

const EventContainer = styled.li`
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.3), 0 1px 12px 2px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
  overflow: hidden;
  background: white;
  // background: red;
  margin: 1rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  img {
    width: 100%;
    object-fit: cover;
    height: 10rem;
  }

  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    img {
      width: 40%;
      height: 16rem;
    }
  }
`;

const EventContent = styled.div`
  width: 100%;
  padding: 0 1em;
  text-align: center;
  h2 {
    margin: 0.5rem 0;
  }
  time {
    color: #666666;
    font-weight: bold;
  }
  address {
    margin: 0.5rem 0;
    color: #666666;
    white-space: pre;
  }

  @media only screen and ${breakpoints.device.sm} {
    width: 60%;
    padding: 0;
    text-align: left;
    h2 {
      margin: 1rem 0;
    }
  }
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
  a {
    display: block;
    span {
      vertical-align: middle;
    }
  }
  @media only screen and ${breakpoints.device.sm} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;

// const IconWrapper = styled.div`
//   height: 50rem;
// `;
const IconWrapper = styled.span`
  margin-left: 0.5rem;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  svg {
    width: 1.25rem;
    height: 1.25rem;
  }
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
            <IconWrapper>
              <IconDate />
            </IconWrapper>
            <time>{newDate}</time>
          </Fecha>
          <Address>
            <IconWrapper>
              <IconAddress />
            </IconWrapper>
            <address>{newLocation}</address>
          </Address>
        </div>
        <Actions>
          {/* <Link href={`/events/${event.id}`}>explore event</Link> */}
          <Button link={`/events/${event.id}`}>
            <span> Explore event</span>
            <IconWrapper>
              <IconArrow />
            </IconWrapper>
          </Button>
        </Actions>
      </EventContent>
    </EventContainer>
  );
};

export default EventCard;
