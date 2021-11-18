import React from "react";
import EventsList from "../../components/events/EventsList";
import { getAllEvents } from "../../dummy-data";

const index = () => {
  const events = getAllEvents();
  return (
    <div>
      {/* <h1>list of all events</h1> */}
      {/* {events.map((ev) => (
        <EventCard event={ev} key={ev.id} />
      ))} */}
      <EventsList events={events} />
    </div>
  );
};

export default index;
