import React, { Fragment, useRef } from "react";
import { useRouter } from "next/router";
import EventsList from "../../components/events/EventsList";
import EventsSearch from "../../components/events/EventsSearch";
import { getAllEvents } from "../../dummy-data";

const index = () => {
  const events = getAllEvents();
  const router = useRouter();

  const onSearch = (year, month) => {
    const fullPath = `/events/${year}/${month}`;

    //asi es como se navega, es como el route.navigate ponele
    router.push(fullPath);
  };
  return (
    <Fragment>
      {/* <h1>list of all events</h1> */}
      {/* {events.map((ev) => (
        <EventCard event={ev} key={ev.id} />
      ))} */}
      <EventsSearch onSearch={onSearch} />
      <EventsList events={events} />
    </Fragment>
  );
};

export default index;
