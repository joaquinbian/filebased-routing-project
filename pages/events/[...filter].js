import React from "react";
import { useRouter } from "next/router";

const EventsFiltered = () => {
  const { query } = useRouter();
  return (
    <div>
      <h1>events filtered by </h1>
      <ul>
        {query.filter?.map((q, i) => (
          <li key={i}>
            <h1>{q}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default EventsFiltered;
