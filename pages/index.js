import React from "react";
import EventsList from "../components/events/EventsList";
import { getFeaturedEvents } from "../dummy-data";

const index = () => {
  const featuredEvents = getFeaturedEvents();
  console.log(featuredEvents);
  return (
    <div>
      <h1>starting page</h1>
      <EventsList events={featuredEvents} />
    </div>
  );
};

export default index;
