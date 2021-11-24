import React, { Fragment } from "react";
import { useRouter } from "next/router";
import { getFilteredEvents } from "../../dummy-data";
import EventsList from "../../components/events/EventsList";
import ResultsTitle from "../../components/events/results-title";
import Button from "../../components/ui/Button";
import ErrorAlert from "../../components/events/error-alert";

const EventsFiltered = () => {
  const { query } = useRouter();

  if (!query.filter) {
    return <p>loading...</p>;
  }
  const [year, month, ...rest] = query.filter;

  const numYear = +year; //asi se pueden convertir en numero un string
  const numMonth = +month;

  const eventsFiltered = getFilteredEvents({ year: numYear, month: numMonth });

  if (
    isNaN(numYear) ||
    isNaN(numMonth) ||
    numYear < 2020 ||
    numYear > 2030 ||
    numMonth < 1 ||
    numMonth > 12
  ) {
    return (
      <Fragment>
        <ErrorAlert>
          <p>Invalid filter, adjust your values</p>
        </ErrorAlert>
        <Button link="/events"> Show All events</Button>
      </Fragment>
    );
  }

  const date = new Date(numYear, numMonth - 1);
  return (
    <Fragment>
      <ResultsTitle date={date} />
      {eventsFiltered.length > 0 ? (
        <EventsList events={eventsFiltered} />
      ) : (
        <Fragment>
          <ErrorAlert>
            <p>no hay events</p>
          </ErrorAlert>
          <Button link="/events">show all events</Button>
        </Fragment>
      )}
    </Fragment>
  );
};

export default EventsFiltered;
