import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import { getEventById } from "../../dummy-data";
import EventSummary from "../../components/event-detail/event-summary";
import EventLogistics from "../../components/event-detail/event-logistics";
import EventContent from "../../components/event-detail/event-content";
import ErrorEvent from "../../components/events/error-alert"

const EventDetail = () => {
  const router = useRouter();

  const { query } = router;

  const event = getEventById(query.id);

  if (!event) {
    return(
      <ErrorEvent>

        <p>NO event found!</p>);
      </ErrorEvent>
  }
  return (
    <>
      <EventSummary title={event.title} />
      <EventLogistics
        date={event.date}
        address={event.location}
        image={event.image}
        imageAlt={`${event.title}-img`}
      />
      <EventContent>{event.description}</EventContent>
    </>
  );
};

export default EventDetail;
