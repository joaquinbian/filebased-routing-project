import React from "react";
import { useRouter } from "next/router";

const EventDetail = () => {
  const router = useRouter();

  const { query } = router;

  return (
    <div>
      <h1>event {query.id}</h1>
    </div>
  );
};

export default EventDetail;
